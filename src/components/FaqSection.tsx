import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, Phone } from 'lucide-react';
import type { Translations } from '../data/translations';
import { useSound } from '../context/SoundContext';

interface FaqSectionProps {
  t: Translations;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first FAQ by default
  const { playSound } = useSound();

  const toggleFaq = (index: number) => {
    const isOpening = openIndex !== index;
    playSound('accordion', isOpening);
    setOpenIndex(isOpening ? index : null);
  };

  return (
    <section id="faq" className="w-full bg-white py-20 lg:py-28 border-b border-[#E8E8E4]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#DD0000]" />
            <span className="text-[12px] font-bold text-[#DD0000] tracking-wider uppercase">
              {t.faq.sectionTag}
            </span>
          </div>
          <h2 className="text-[30px] sm:text-[38px] lg:text-[42px] font-extrabold text-neutral-900 tracking-tight leading-tight">
            {t.faq.titlePre}{' '}
            <span className="text-[#DD0000]">{t.faq.titleHighlight}</span>
          </h2>
          <p className="text-[15px] sm:text-[17px] text-neutral-600 mt-3 leading-relaxed">
            {t.faq.subtitle}{' '}
            <a
              href="tel:+998550550444"
              className="text-[#DD0000] font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>+998 55 055 0444</span>
            </a>
          </p>
        </div>

        {/* Accordion Module */}
        <div className="space-y-4 max-w-4xl">
          {t.faq.questions.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FAF9F6] border-neutral-900 shadow-sm'
                    : 'bg-[#FAF9F6] border-[#E8E8E4] hover:border-neutral-400'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer gap-4"
                >
                  <span className="text-[16px] sm:text-[18px] font-bold text-neutral-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-neutral-900 text-white' : 'bg-white border border-[#E8E8E4] text-neutral-700'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-[14px] sm:text-[15px] text-neutral-600 leading-relaxed border-t border-[#E8E8E4]/60">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
