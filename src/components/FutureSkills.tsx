import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal, Rocket, Check, Layers } from 'lucide-react';
import type { Translations } from '../data/translations';

interface FutureSkillsProps {
  t: Translations;
}

export const FutureSkills: React.FC<FutureSkillsProps> = ({ t }) => {
  const icons = [Sparkles, Terminal, Rocket];

  return (
    <section className="w-full bg-[#0D0D0D] text-white py-20 lg:py-28 relative overflow-hidden border-b border-neutral-800">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFCE00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#DD0000]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#FFCE00]" />
              <span className="text-[12px] font-bold text-[#FFCE00] tracking-widest uppercase">
                {t.futureSkills.sectionTag}
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold tracking-tight leading-tight">
              {t.futureSkills.titlePre}{' '}
              <span className="text-[#FFCE00]">{t.futureSkills.titleHighlight}</span>{' '}
              {t.futureSkills.titlePost}
            </h2>
            <p className="text-[15px] sm:text-[17px] text-neutral-400 mt-4 leading-relaxed">
              {t.futureSkills.description}
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-xl shrink-0 self-start lg:self-auto max-w-md">
            <span className="text-[11px] font-mono font-bold text-[#FFCE00] uppercase tracking-wider block mb-1">
              {t.futureSkills.cardTag}
            </span>
            <span className="text-[18px] sm:text-[20px] font-extrabold text-white block">
              {t.futureSkills.cardFormula}
            </span>
            <span className="text-[13px] text-neutral-400 mt-1 block">
              {t.futureSkills.cardSub}
            </span>
          </div>
        </div>

        {/* 3 Future Skills Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.futureSkills.pillars.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 hover:border-[#FFCE00]/40 p-7 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[12px] font-mono font-bold text-[#FFCE00] bg-[#FFCE00]/10 px-2.5 py-1 rounded-md border border-[#FFCE00]/20">
                      {pillar.number} / SKILL
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[#FFCE00] group-hover:bg-[#FFCE00] group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-[24px] font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] text-neutral-300 leading-relaxed mb-6">
                    {pillar.desc}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {pillar.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-[13px] text-neutral-300">
                        <Check className="w-4 h-4 text-[#FFCE00] mt-0.5 shrink-0" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-black/60 border border-neutral-800 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[12px]">
                  <span className="text-neutral-400 font-mono">{pillar.toolsLabel}</span>
                  <span className="text-white font-mono font-medium">{pillar.tools}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
