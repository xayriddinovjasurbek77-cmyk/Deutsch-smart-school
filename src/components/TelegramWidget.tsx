import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, X, MessageSquare, Check, Sparkles } from 'lucide-react';
import type { Translations } from '../data/translations';
import { useSound } from '../context/SoundContext';

interface TelegramWidgetProps {
  t: Translations;
}

export const TelegramWidget: React.FC<TelegramWidgetProps> = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const { playSound } = useSound();

  const handleToggle = () => {
    const nextState = !isOpen;
    playSound('menu', nextState);
    setIsOpen(nextState);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    playSound('cta');
    setSent(true);
    setTimeout(() => {
      window.open(`https://t.me?text=${encodeURIComponent(message)}`, '_blank');
      setSent(false);
      setMessage('');
      setIsOpen(false);
    }, 600);
  };

  const handleQuickQuestion = (q: string) => {
    playSound('click');
    setMessage(q);
  };

  const quickQuestions = [
    "Maktab to'lovi qancha?",
    "Nemis tilini noldan o'rgatasizmi?",
    "Qabul 2026 qachon boshlanadi?",
    "Yashnobod filialiga tashrif vaqti",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-[#E8E8E4] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-neutral-900 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#229ED9] flex items-center justify-center text-white">
                    <Send className="w-5 h-5 ml-0.5" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-neutral-900" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[14px] leading-tight">
                    {t.telegram.title}
                  </h4>
                  <span className="text-[11px] text-neutral-300">
                    {t.telegram.subtitle}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleToggle}
                className="w-7 h-7 rounded-full bg-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Questions */}
            <div className="p-4 bg-[#FAF9F6] border-b border-[#E8E8E4]">
              <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block mb-2">
                Tezkor savollar:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleQuickQuestion(q)}
                    className="text-[12px] bg-white hover:bg-neutral-100 text-neutral-800 px-2.5 py-1 rounded-md border border-[#E8E8E4] shadow-2xs transition-colors text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSend} className="p-4 bg-white">
              <div className="relative mb-3">
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.telegram.placeholder}
                  className="w-full bg-[#FAF9F6] border border-[#E8E8E4] focus:border-neutral-900 focus:bg-white p-3 rounded-xl text-[13px] text-neutral-900 placeholder-neutral-400 focus:outline-none resize-none transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={!message.trim()}
                className="w-full py-2.5 bg-[#229ED9] hover:bg-[#1C8CC4] text-white font-bold text-[13px] rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer shadow-sm"
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Telegram ochilmoqda...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.telegram.send}</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating launcher button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggle}
        type="button"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#229ED9] hover:bg-[#1C8CC4] text-white font-bold text-[13px] sm:text-[14px] shadow-lg hover:shadow-xl border border-white/20 cursor-pointer transition-colors"
      >
        <Send className="w-4 h-4" />
        <span className="hidden sm:inline">Telegram · Maslahat</span>
      </motion.button>
    </div>
  );
};
