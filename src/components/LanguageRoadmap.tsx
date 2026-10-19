import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Zap, Check, ArrowRight } from 'lucide-react';
import type { Translations } from '../data/translations';
import { useSound } from '../context/SoundContext';

interface LanguageRoadmapProps {
  t: Translations;
}

export const LanguageRoadmap: React.FC<LanguageRoadmapProps> = ({ t }) => {
  const [selectedLevelIndex, setSelectedLevelIndex] = useState(3); // Default B1
  const { playSound } = useSound();

  return (
    <section id="dasturlar" className="w-full bg-[#FAF9F6] py-20 lg:py-28 border-b border-[#E8E8E4]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#DD0000]" />
            <span className="text-[12px] font-bold text-[#DD0000] tracking-wider uppercase">
              {t.roadmap.sectionTag}
            </span>
          </div>
          <h2 className="text-[30px] sm:text-[38px] lg:text-[42px] font-extrabold text-neutral-900 tracking-tight leading-tight">
            {t.roadmap.titlePre}{' '}
            <span className="text-[#DD0000]">{t.roadmap.titleHighlight}</span>{' '}
            {t.roadmap.titlePost}
          </h2>
          <p className="text-[15px] sm:text-[17px] text-neutral-600 mt-3 leading-relaxed">
            {t.roadmap.description}
          </p>
        </div>

        {/* Level Progression Indicator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {t.roadmap.levels.map((lvl, idx) => {
            const isSelected = selectedLevelIndex === idx;
            return (
              <motion.button
                key={idx}
                type="button"
                whileHover={{ y: -2 }}
                onClick={() => {
                  playSound('click');
                  setSelectedLevelIndex(idx);
                }}
                className={`p-4 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-md'
                    : 'bg-white text-neutral-800 border-[#E8E8E4] hover:border-neutral-400 shadow-2xs'
                }`}
              >
                <span
                  className={`block text-[10px] font-mono font-bold uppercase mb-1 ${
                    isSelected ? 'text-[#FFCE00]' : 'text-neutral-500'
                  }`}
                >
                  {lvl.step}
                </span>
                <span className="text-[20px] font-extrabold block leading-none mb-1">
                  {lvl.code}
                </span>
                <span
                  className={`text-[12px] font-medium block truncate ${
                    isSelected ? 'text-neutral-200' : 'text-neutral-600'
                  }`}
                >
                  {lvl.title}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* 3 Years Modular Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {t.roadmap.years.map((year, idx) => {
            const isTarget = year.isTarget;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`bg-white p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isTarget
                    ? 'border-[#DD0000] shadow-lg ring-1 ring-[#DD0000]/20'
                    : 'border-[#E8E8E4] shadow-2xs hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono font-bold text-neutral-600 bg-[#FAF9F6] px-2.5 py-1 rounded-md border border-[#E8E8E4]">
                      {year.tag}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-lg text-[13px] font-extrabold ${
                        isTarget
                          ? 'bg-[#DD0000] text-white'
                          : 'bg-neutral-100 text-neutral-900'
                      }`}
                    >
                      {year.codeBadge}
                    </span>
                  </div>

                  <h3 className="text-[22px] font-bold text-neutral-900 mb-5">
                    {year.title}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                        {year.skillsTitle}
                      </h4>
                      <ul className="space-y-1.5 text-[13px] text-neutral-700">
                        {year.skills.map((sk, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#DD0000] mt-2 shrink-0" />
                            <span>{sk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#FAF9F6] p-3.5 rounded-xl border border-[#E8E8E4]">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                        {year.grammarTitle}
                      </h4>
                      <p className="text-[12px] text-neutral-700 leading-relaxed">
                        {year.grammar}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                        {year.outcomeTitle}
                      </h4>
                      <p className="text-[13px] text-neutral-800 leading-snug font-medium">
                        {year.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E8E4] flex items-center justify-between text-[12px]">
                  <span className="font-bold text-neutral-900">{year.exam}</span>
                  <span className="font-mono font-bold text-[#DD0000]">{year.institution}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Fast Track Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-7 sm:p-8 rounded-2xl border border-[#E8E8E4] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#DD0000] font-mono text-[11px] uppercase font-bold mb-2">
              <Zap className="w-4 h-4 text-[#DD0000]" />
              <span>{t.roadmap.fastTrackTag}</span>
            </div>
            <h3 className="text-[20px] sm:text-[24px] font-extrabold text-neutral-900 tracking-tight">
              {t.roadmap.fastTrackTitle}
            </h3>
            <p className="text-[14px] sm:text-[15px] text-neutral-600 mt-2 leading-relaxed">
              {t.roadmap.fastTrackDesc}
            </p>
          </div>

          <div className="flex items-center gap-4 bg-[#FAF9F6] border border-[#E8E8E4] px-6 py-4 rounded-xl shadow-2xs shrink-0 self-stretch sm:self-auto justify-center">
            <span className="text-[36px] sm:text-[40px] font-black text-[#DD0000] font-mono tabular-nums leading-none">
              {t.roadmap.fastTrackStat}
            </span>
            <span className="text-[12px] sm:text-[13px] text-neutral-700 font-semibold max-w-[140px] leading-tight">
              {t.roadmap.fastTrackStatLabel}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
