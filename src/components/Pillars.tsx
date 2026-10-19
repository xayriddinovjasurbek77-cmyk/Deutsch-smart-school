import React from 'react';
import { motion } from 'motion/react';
import { Ruler, Rocket, Heart, GitCompare, CheckCircle2 } from 'lucide-react';
import type { Translations } from '../data/translations';

interface PillarsProps {
  t: Translations;
}

export const Pillars: React.FC<PillarsProps> = ({ t }) => {
  const icons = [Ruler, Rocket, Heart, GitCompare];

  return (
    <section id="maktab-haqida" className="w-full bg-[#FAF9F6] py-20 lg:py-28 border-b border-[#E8E8E4]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#DD0000]" />
              <span className="text-[12px] font-bold text-[#DD0000] tracking-wider uppercase">
                {t.pillars.sectionTag}
              </span>
            </div>
            <h2 className="text-[30px] sm:text-[38px] lg:text-[42px] font-extrabold text-neutral-900 tracking-tight leading-tight">
              {t.pillars.titlePre}{' '}
              <span className="italic text-[#DD0000] font-bold">{t.pillars.titleHighlight1}</span>{' '}
              {t.pillars.titleMid}{' '}
              <span className="italic text-neutral-900 font-bold">{t.pillars.titleHighlight2}</span>{' '}
              {t.pillars.titlePost}
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16px] text-neutral-600 max-w-md leading-relaxed">
            {t.pillars.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.pillars.items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-white p-7 rounded-2xl border border-[#E8E8E4] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[12px] font-mono font-bold text-[#DD0000] bg-[#DD0000]/10 px-2.5 py-1 rounded-md">
                      {item.number} / ESSENCE
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#E8E8E4] flex items-center justify-center text-neutral-700 group-hover:text-[#DD0000] group-hover:bg-[#DD0000]/5 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-[22px] font-bold text-neutral-900 mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-[14px] text-neutral-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E8E4] flex items-center justify-between text-neutral-500 text-[12px] font-semibold">
                  <span>{item.germanTerm}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#DD0000]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
