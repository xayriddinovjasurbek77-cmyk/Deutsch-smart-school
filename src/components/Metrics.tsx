import React from 'react';
import { motion } from 'motion/react';
import { Building2, PiggyBank, TrendingUp, Clock3 } from 'lucide-react';
import type { Translations } from '../data/translations';

interface MetricsProps {
  t: Translations;
}

export const Metrics: React.FC<MetricsProps> = ({ t }) => {
  const cards = [
    {
      label: t.metrics.m1Label,
      val: t.metrics.m1Value,
      desc: t.metrics.m1Desc,
      icon: Building2,
      accent: 'text-neutral-900',
    },
    {
      label: t.metrics.m2Label,
      val: t.metrics.m2Value,
      desc: t.metrics.m2Desc,
      icon: PiggyBank,
      accent: 'text-[#DD0000]',
    },
    {
      label: t.metrics.m3Label,
      val: t.metrics.m3Value,
      desc: t.metrics.m3Desc,
      icon: TrendingUp,
      accent: 'text-neutral-900',
    },
    {
      label: t.metrics.m4Label,
      val: t.metrics.m4Value,
      desc: t.metrics.m4Desc,
      icon: Clock3,
      accent: 'text-neutral-900',
    },
  ];

  return (
    <section className="w-full bg-white py-14 border-b border-[#E8E8E4]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#FAF9F6] p-6 rounded-2xl border border-[#E8E8E4] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
                      {card.label}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#E8E8E4] flex items-center justify-center text-neutral-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className={`text-[36px] sm:text-[40px] font-black tracking-tight leading-none ${card.accent} font-mono tabular-nums mb-3`}>
                    {card.val}
                  </div>
                </div>

                <p className="text-[13px] text-neutral-600 leading-relaxed border-t border-[#E8E8E4]/80 pt-3 mt-2">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
