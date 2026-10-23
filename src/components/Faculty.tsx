import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Globe2, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import type { Translations } from '../data/translations';
import { useSound } from '../context/SoundContext';

interface FacultyProps {
  t: Translations;
  onOpenBooking?: () => void;
}

const standardIcons = [Award, GraduationCap, Globe2];

export const Faculty: React.FC<FacultyProps> = ({ t, onOpenBooking }) => {
  const { playSound } = useSound();

  const handleBooking = () => {
    playSound('click');
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const el = document.getElementById('tashrif-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="ustozlar" className="w-full bg-[#FAF9F6] py-20 lg:py-28 border-b border-[#E8E8E4]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#DD0000]" />
              <span className="text-[12px] font-bold text-[#DD0000] tracking-wider uppercase">
                {t.faculty.sectionTag}
              </span>
            </div>
            <h2 className="text-[30px] sm:text-[38px] lg:text-[42px] font-extrabold text-neutral-900 tracking-tight leading-tight">
              {t.faculty.title}
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16px] text-neutral-600 max-w-md leading-relaxed">
            {t.faculty.description}
          </p>
        </div>

        {/* Academic Faculty Standards - 3-column responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.faculty.standards.map((standard, idx) => {
            const Icon = standardIcons[idx % standardIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.45, delay: idx * 0.12 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E8E8E4] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] sm:text-[12px] font-bold text-neutral-500 uppercase tracking-wider bg-neutral-100 px-3 py-1 rounded-md">
                      {standard.tag}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-neutral-900 text-white flex items-center justify-center group-hover:bg-[#DD0000] transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-[20px] sm:text-[22px] font-extrabold text-neutral-900 group-hover:text-[#DD0000] transition-colors duration-200 mb-3">
                    {standard.title}
                  </h3>

                  <p className="text-[14px] sm:text-[15px] text-neutral-600 leading-relaxed">
                    {standard.desc}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center gap-2 text-[12px] font-semibold text-neutral-500">
                  <CheckCircle2 className="w-4 h-4 text-[#007A3D]" />
                  <span>Deutsch Smart School Standards</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Card: Campus Visit / Meet the Academic Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden"
        >
          {/* Subtle German flag accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 flex">
            <span className="w-1/3 bg-black" />
            <span className="w-1/3 bg-[#DD0000]" />
            <span className="w-1/3 bg-[#FFCE00]" />
          </div>

          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2 text-[#FFCE00] text-[12px] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Goethe-Zertifikat C1 · Yevropa Ta'lim Dasturi</span>
            </div>
            <h4 className="text-[20px] sm:text-[24px] font-extrabold text-white">
              {t.faculty.title}
            </h4>
            <p className="text-[14px] text-neutral-300 mt-1 leading-relaxed">
              {t.faculty.description}
            </p>
          </div>

          <button
            type="button"
            onClick={handleBooking}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#DD0000] hover:bg-[#b80000] active:scale-[0.98] text-white rounded-xl text-[14px] font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer shrink-0"
          >
            <span>{t.faculty.ctaButton}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
