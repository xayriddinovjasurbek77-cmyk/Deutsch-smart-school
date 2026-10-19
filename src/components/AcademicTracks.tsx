import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Cpu, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import type { Translations } from '../data/translations';

interface AcademicTracksProps {
  t: Translations;
}

export const AcademicTracks: React.FC<AcademicTracksProps> = ({ t }) => {
  const icons = [Stethoscope, Cpu, Briefcase];

  return (
    <section className="w-full bg-white py-20 lg:py-28 border-b border-[#E8E8E4]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#DD0000]" />
            <span className="text-[12px] font-bold text-[#DD0000] tracking-wider uppercase">
              {t.tracks.sectionTag}
            </span>
          </div>
          <h2 className="text-[30px] sm:text-[38px] lg:text-[42px] font-extrabold text-neutral-900 tracking-tight leading-tight">
            {t.tracks.titlePre}{' '}
            <span className="text-[#DD0000]">{t.tracks.titleHighlight}</span>{' '}
            {t.tracks.titlePost}
          </h2>
          <p className="text-[15px] sm:text-[17px] text-neutral-600 mt-3 leading-relaxed">
            {t.tracks.description}
          </p>
        </div>

        {/* 3 Track Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.tracks.list.map((track, idx) => {
            const Icon = icons[idx % icons.length];
            const topBorders = [
              'border-t-4 border-t-[#DD0000]',
              'border-t-4 border-t-neutral-900',
              'border-t-4 border-t-[#FFCE00]',
            ];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`bg-[#FAF9F6] rounded-2xl border border-[#E8E8E4] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden ${topBorders[idx]}`}
              >
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold text-neutral-600 bg-white px-2.5 py-1 rounded-md border border-[#E8E8E4]">
                      {track.tag}
                    </span>
                    <span className="text-[14px] font-extrabold text-neutral-900 flex items-center gap-1.5">
                      <Icon className="w-4 h-4 text-[#DD0000]" />
                      <span>{track.germanName}</span>
                    </span>
                  </div>

                  <h3 className="text-[24px] font-extrabold text-neutral-900 mb-2">
                    {track.name}
                  </h3>
                  <p className="text-[14px] text-neutral-600 leading-relaxed mb-6">
                    {track.desc}
                  </p>

                  {/* Profil Fanlar */}
                  <div className="bg-white p-5 rounded-xl border border-[#E8E8E4] mb-6">
                    <span className="text-[11px] font-bold text-neutral-800 uppercase tracking-wider block mb-2.5">
                      Profil Fanlar
                    </span>
                    <ul className="space-y-2 text-[13px] text-neutral-700">
                      {track.subjects.map((subj, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#DD0000] shrink-0" />
                          <span>{subj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Career */}
                  <div className="mb-2">
                    <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block">
                      Karyera Istiqbollari
                    </span>
                    <p className="text-[13px] font-semibold text-neutral-900 mt-1">
                      {track.careers}
                    </p>
                  </div>
                </div>

                <div className="bg-white px-7 py-4 border-t border-[#E8E8E4] flex items-center justify-between text-[12px]">
                  <span className="text-neutral-500 font-medium">Hamkor OTMlar:</span>
                  <span className="font-bold text-neutral-900 flex items-center gap-1">
                    <GraduationCap className="w-4 h-4 text-[#DD0000]" />
                    <span>{track.partnerUnis}</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
