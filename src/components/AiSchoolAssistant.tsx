import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Send, X, Minimize2, Sparkles, RefreshCw, AlertCircle, Phone, ArrowUpRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useSound } from '../context/SoundContext';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

interface AiSchoolAssistantProps {
  onOpenBooking?: () => void;
}

export const AiSchoolAssistant: React.FC<AiSchoolAssistantProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<{ message: string; details?: string; isConfigError?: boolean } | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<'uz' | 'ru' | 'de' | 'en'>('uz');

  const { playSound } = useSound();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Initial greeting messages per language
  const greetings = {
    uz: "Assalomu alaykum! Men Deutsch Smart School maktabining rasmiy AI Maslahatchisiman. Sizga 1–11 sinf dasturlari, Yashnobod va Sergeli filiallari, kun tartibi (08:00–16:50), Goethe-Institut metodikasi hamda Germaniya davlat universitetlarida €0 bepul oliy ta'lim olish yo'llari bo'yicha yordam bera olaman. Qanday savolingiz bor?",
    ru: "Здравствуйте! Я официальный AI-консультант Deutsch Smart School. Готов ответить на ваши вопросы об учебных программах 1–11 классов, филиалах в Яшнабаде и Сергели, распорядке дня, методике Goethe-Institut и бесплатном высшем образовании (€0) в Германии.",
    de: "Guten Tag! Ich bin der offizielle KI-Berater der Deutsch Smart School. Wie kann ich Ihnen bei Fragen zu unseren Klassen 1–11, den Campussen in Yashnobod und Sergeli, unserem Ganztagsprogramm oder dem gebührenfreien Studium (€0) in Deutschland helfen?",
    en: "Hello! I am the official AI Consultant of Deutsch Smart School. How can I assist you with questions regarding grades 1–11, our Yashnobod and Sergeli campuses, full-day schedule, Goethe-Institut methodology, and €0 tuition studies in Germany?",
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      role: 'model',
      text: greetings[selectedLanguage],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  // Suggested quick questions
  const suggestedQuestions = {
    uz: [
      "Germaniyada ta'lim haqiqatan bepulmi?",
      "Filiallar qayerda joylashgan?",
      "Kun tartibi va ovqatlanish qanday?",
      "Maktab to'lovi qancha?",
      "Bepul tashrifga qanday yozilaman?",
    ],
    ru: [
      "Обучение в Германии действительно бесплатное?",
      "Где находятся филиалы школы?",
      "Какой распорядок дня и питание?",
      "Какова стоимость обучения?",
      "Как записаться на бесплатный визит?",
    ],
    de: [
      "Ist das Studium in Deutschland wirklich kostenlos?",
      "Wo befinden sich die Standorte?",
      "Wie sieht der Tagesablauf aus?",
      "Wie hoch ist das Schulgeld?",
      "Wie vereinbare ich einen Besuch?",
    ],
    en: [
      "Is university education in Germany really free?",
      "Where are the campuses located?",
      "What is the daily schedule and dining?",
      "How much is the school tuition?",
      "How to book a free campus tour?",
    ],
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, messages]);

  const handleToggle = () => {
    const next = !isOpen;
    playSound('menu', next);
    setIsOpen(next);
    setApiError(null);
  };

  const handleLanguageSwitch = (lang: 'uz' | 'ru' | 'de' | 'en') => {
    playSound('lang');
    setSelectedLanguage(lang);
    setMessages((prev) => [
      ...prev,
      {
        id: `lang-change-${Date.now()}`,
        role: 'model',
        text: greetings[lang],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    playSound('cta');
    setInputMessage('');
    setApiError(null);

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      // Build history for context (last 6 messages)
      const historyPayload = messages.slice(-6).map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: historyPayload,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const isConfig = res.status === 503 || data?.configured === false;
        setApiError({
          message: data?.error || "Xatolik yuz berdi",
          details: data?.details || "Server bilan bog'lanib bo'lmadi.",
          isConfigError: isConfig,
        });
        playSound('error');
        return;
      }

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: data.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
      playSound('success');
    } catch (err: any) {
      console.error('Chat error:', err);
      setApiError({
        message: "Server bilan bog'lanishda uzilish yuz berdi.",
        details: err?.message || "Tarmoq xatosi",
        isConfigError: false,
      });
      playSound('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    playSound('click');
    setMessages([
      {
        id: `reset-${Date.now()}`,
        role: 'model',
        text: greetings[selectedLanguage],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setApiError(null);
  };

  // Simple safe markdown formatter for bolding and bullet points
  const renderFormattedText = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      // Check for bullet line
      const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ') || line.trim().startsWith('• ');
      const cleanLine = isBullet ? line.trim().replace(/^[-*•]\s+/, '') : line;

      // Parse bold **text**
      const parts = cleanLine.split(/(\*\*.*?\*\*)/g);

      const parsedLine = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="font-extrabold text-neutral-900">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      if (isBullet) {
        return (
          <div key={idx} className="flex items-start gap-2 my-1 pl-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DD0000] mt-1.5 shrink-0" />
            <span className="text-[13px] leading-relaxed text-neutral-800">{parsedLine}</span>
          </div>
        );
      }

      if (cleanLine.trim() === '') {
        return <div key={idx} className="h-2" />;
      }

      return (
        <p key={idx} className="text-[13px] leading-relaxed my-1 text-neutral-800">
          {parsedLine}
        </p>
      );
    });
  };

  return (
    <aside aria-label="Deutsch Smart School AI Yordamchi" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      {/* Floating Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="mb-3 w-[calc(100vw-2rem)] sm:w-[420px] max-w-[440px] h-[580px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-[#E8E8E4] flex flex-col overflow-hidden select-text"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-800 text-white p-4 flex items-center justify-between border-b border-neutral-800 shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#DD0000] to-neutral-900 flex items-center justify-center text-white shadow-md border border-white/20">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-neutral-900 shadow-xs" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-extrabold text-[15px] leading-tight text-white">
                      Deutsch Smart AI
                    </h3>
                    <span className="text-[10px] font-mono font-bold bg-[#DD0000]/30 text-[#FF8080] border border-[#DD0000]/40 px-1.5 py-0.2 rounded">
                      Gemini
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Rasmiy ta'lim maslahatchisi
                  </span>
                </div>
              </div>

              {/* Window Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handleClearChat}
                  title="Yangi suhbat"
                  aria-label="Yangi suhbat boshlash"
                  className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleToggle}
                  title="Kichraytirish"
                  aria-label="Chat oynasini yopish"
                  className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Minimize2 className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleToggle}
                  title="Yopish"
                  aria-label="Chatni yopish"
                  className="w-8 h-8 rounded-xl bg-white/10 hover:bg-red-500 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Language Switcher Bar */}
            <div className="bg-[#FAF9F6] border-b border-[#E8E8E4] px-4 py-2 flex items-center justify-between text-xs shrink-0">
              <span className="text-[11px] font-mono text-neutral-500 font-semibold">Muloqot tili:</span>
              <div className="flex items-center gap-1">
                {(['uz', 'ru', 'de', 'en'] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => handleLanguageSwitch(lang)}
                    className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold transition-all cursor-pointer ${
                      selectedLanguage === lang
                        ? 'bg-[#DD0000] text-white shadow-2xs'
                        : 'bg-white text-neutral-600 hover:bg-neutral-200 border border-[#E8E8E4]'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#FAF9F6]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-2xs ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-br from-[#DD0000] to-[#B80000] text-white rounded-br-xs'
                        : 'bg-white text-neutral-900 border border-[#E8E8E4] rounded-bl-xs'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <p className="text-[13px] leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    ) : (
                      <div>{renderFormattedText(msg.text)}</div>
                    )}
                  </div>
                  <span className="text-[10px] text-neutral-400 mt-1 px-1 font-mono">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl border border-[#E8E8E4] w-fit shadow-2xs">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#DD0000] animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-[#FFCE00] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-neutral-900 animate-bounce [animation-delay:0.4s]" />
                  </div>
                  <span className="text-[11px] text-neutral-500 font-medium ml-1">
                    AI javob tayyorlamoqda...
                  </span>
                </div>
              )}

              {/* Error Banner */}
              {apiError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-2 shadow-sm"
                >
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <strong className="font-bold block text-amber-950">
                        {apiError.message}
                      </strong>
                      <p className="text-[11px] text-amber-800 leading-relaxed">
                        {apiError.details}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-amber-200/60 flex items-center justify-between text-[11px]">
                    <a
                      href="https://t.me/sadoo_sh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#229ED9] hover:underline flex items-center gap-1"
                    >
                      <span>Telegram @sadoo_sh</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <a
                      href="tel:+998550550444"
                      className="font-bold text-neutral-800 hover:text-[#DD0000] flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-[#DD0000]" />
                      <span>+998 55 055 0444</span>
                    </a>
                  </div>
                </motion.div>
              )}

              {/* Direct Booking CTA suggestion when relevant */}
              {onOpenBooking && (
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      playSound('click');
                      onOpenBooking();
                      setIsOpen(false);
                    }}
                    className="w-full py-2 px-3 rounded-xl bg-white hover:bg-neutral-50 border border-dashed border-[#DD0000]/40 text-[#DD0000] text-[12px] font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Maktabga bepul 45-daqiqa tashrifni bron qilish →</span>
                  </button>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions Chips */}
            <div className="p-2.5 bg-white border-t border-[#E8E8E4] shrink-0">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1.5 px-1">
                Tavsiya etilgan savollar:
              </span>
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
                {suggestedQuestions[selectedLanguage].map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(q)}
                    disabled={isLoading}
                    className="shrink-0 bg-[#FAF9F6] hover:bg-neutral-100 active:scale-95 text-neutral-800 px-2.5 py-1 rounded-lg border border-[#E8E8E4] transition-all cursor-pointer disabled:opacity-50"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <div className="p-3 bg-white border-t border-[#E8E8E4] shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <div className="relative flex-1">
                  <textarea
                    ref={inputRef}
                    rows={1}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Savolingizni yozing... (Enter — yuborish)"
                    disabled={isLoading}
                    className="w-full bg-[#FAF9F6] border border-[#E8E8E4] focus:border-[#DD0000] focus:bg-white px-3.5 py-2.5 rounded-2xl text-[13px] text-neutral-900 placeholder-neutral-400 focus:outline-none resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isLoading}
                  aria-label="Xabarni yuborish"
                  className="w-10 h-10 rounded-2xl bg-[#DD0000] hover:bg-[#B80000] disabled:bg-neutral-200 text-white flex items-center justify-center transition-all cursor-pointer disabled:cursor-not-allowed shrink-0 shadow-sm"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Launcher Button */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggle}
        type="button"
        className="flex items-center gap-3 px-4 py-3 rounded-full bg-neutral-900 hover:bg-black text-white font-bold text-[13px] sm:text-[14px] shadow-xl hover:shadow-2xl border border-white/20 cursor-pointer transition-all duration-300 group"
        aria-label="AI Maktab Maslahatchisini ochish"
      >
        <div className="relative flex items-center justify-center">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#DD0000] to-[#FFCE00] flex items-center justify-center text-neutral-950 font-black shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-neutral-900 animate-pulse" />
        </div>

        <span className="hidden sm:inline font-bold">AI Maslahatchi</span>
      </motion.button>
    </aside>
  );
};
