import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, ShieldCheck, Sun, Sunrise, SunMedium, Sunset, Sparkles } from 'lucide-react';
import type { Translations } from '../data/translations';
import { useSound } from '../context/SoundContext';

interface DailyScheduleProps {
  t: Translations;
}

export const DailySchedule: React.FC<DailyScheduleProps> = ({ t }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { playSound } = useSound();

  const phaseIcons = [Sunrise, Sun, SunMedium, Sunset];

  return (
    <section id="kun-tartibi" className="w-full bg-white py-20 lg:py-28 border-b border-[#E8E8E4]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#DD0000]" />
              <span className="text-[12px] font-bold text-[#DD0000] tracking-wider uppercase">
                {t.schedule.sectionTag}
              </span>
            </div>
            <h2 className="text-[30px] sm:text-[38px] lg:text-[42px] font-extrabold text-neutral-900 tracking-tight leading-tight">
              {t.schedule.title}{' '}
              <span className="bg-neutral-900 text-white px-3 py-0.5 rounded-lg inline-block">
                {t.schedule.smartWord}
              </span>{' '}
              kun ichida.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-neutral-600 mt-3 max-w-xl leading-relaxed">
              {t.schedule.description}
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 bg-[#FAF9F6] border border-[#E8E8E4] px-4 py-3 rounded-xl shadow-2xs self-start md:self-end"
          >
            <div className="w-8 h-8 rounded-lg bg-[#DD0000]/10 flex items-center justify-center text-[#DD0000]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-[13px] sm:text-[14px] font-bold text-neutral-900">
              {t.schedule.badge}
            </span>
          </motion.div>
        </div>

        {/* 4 Chronological Segment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.schedule.blocks.map((block, idx) => {
            const Icon = phaseIcons[idx % phaseIcons.length];
            const isSelected = activeTab === idx;

            const accentBorders = [
              'border-t-4 border-t-neutral-900',
              'border-t-4 border-t-[#DD0000]',
              'border-t-4 border-t-[#FFCE00]',
              'border-t-4 border-t-neutral-900',
            ];

            return (
              <motion.div
                key={idx}
                onClick={() => {
                  playSound('click');
                  setActiveTab(idx);
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`bg-[#FAF9F6] p-6 rounded-2xl border ${
                  isSelected ? 'border-neutral-900 shadow-md' : 'border-[#E8E8E4] shadow-2xs'
                } ${accentBorders[idx]} flex flex-col justify-between cursor-pointer transition-all duration-300 relative overflow-hidden`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[12px] font-mono font-bold text-neutral-800 bg-white px-2.5 py-1 rounded-md border border-[#E8E8E4]">
                      {block.step} {block.germanTime.toUpperCase()}
                    </span>
                    <span className="text-[12px] font-mono font-semibold text-neutral-500">
                      {block.timeRange}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="w-5 h-5 text-neutral-700" />
                    <h3 className="text-[20px] font-extrabold text-neutral-900">
                      {block.germanTime}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {block.events.map((ev, eIdx) => (
                      <div
                        key={eIdx}
                        className="bg-white p-3 rounded-xl border border-[#E8E8E4]/80 shadow-2xs hover:border-neutral-400 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono text-[11px] font-bold text-[#DD0000]">
                            {ev.time}
                          </span>
                        </div>
                        <h4 className="text-[13px] font-bold text-neutral-900 leading-snug">
                          {ev.title}
                        </h4>
                        <p className="text-[12px] text-neutral-600 mt-1 leading-normal">
                          {ev.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E8E8E4] flex items-center justify-between text-[11px] font-semibold text-neutral-500">
                  <span>{block.phase}</span>
                  <CheckCircle className="w-4 h-4 text-neutral-400" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
