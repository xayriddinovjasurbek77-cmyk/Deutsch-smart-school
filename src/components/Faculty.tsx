import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Award, Briefcase, X, ArrowUpRight } from 'lucide-react';
import type { Translations } from '../data/translations';
import { useSound } from '../context/SoundContext';

interface FacultyProps {
  t: Translations;
}

export const Faculty: React.FC<FacultyProps> = ({ t }) => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const { playSound } = useSound();

  const handleOpenMember = (idx: number) => {
    playSound('click');
    setSelectedMember(idx);
  };

  const handleCloseMember = () => {
    playSound('menu', false);
    setSelectedMember(null);
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

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.faculty.members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => handleOpenMember(idx)}
              className="bg-white rounded-2xl border border-[#E8E8E4] shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Photo with subtle zoom */}
                <div className="relative h-64 sm:h-72 bg-neutral-900 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    alt={member.name}
                    src={member.imgUrl}
                    className="w-full h-full object-cover object-top filter brightness-[0.98] group-hover:brightness-100 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* University Badge */}
                  <span className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-mono font-bold text-neutral-900 shadow-sm border border-white/60">
                    {member.university}
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-bold text-[#DD0000] uppercase tracking-wider block mb-1">
                    {member.role}
                  </span>
                  <h3 className="text-[20px] font-extrabold text-neutral-900 group-hover:text-[#DD0000] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[13px] text-neutral-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 bg-[#FAF9F6] border-t border-[#E8E8E4] flex items-center justify-between text-[12px] font-medium text-neutral-600">
                <span>{member.experience}</span>
                <span className="font-bold text-neutral-900 flex items-center gap-1 group-hover:text-[#DD0000] transition-colors">
                  <span>{member.specialty}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Faculty Detail Modal */}
      <AnimatePresence>
        {selectedMember !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={handleCloseMember}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E8E8E4]"
            >
              <div className="relative h-60 bg-neutral-900">
                <img
                  alt={t.faculty.members[selectedMember].name}
                  src={t.faculty.members[selectedMember].imgUrl}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <button
                  onClick={handleCloseMember}
                  type="button"
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-neutral-800 flex items-center justify-center hover:bg-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-6 text-white">
                  <span className="text-[12px] font-mono text-[#FFCE00] uppercase font-bold block">
                    {t.faculty.members[selectedMember].role}
                  </span>
                  <h3 className="text-[22px] font-extrabold text-white">
                    {t.faculty.members[selectedMember].name}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-[13px] text-neutral-600">
                  <span className="font-bold text-neutral-900 bg-[#FAF9F6] px-3 py-1 rounded-md border border-[#E8E8E4]">
                    {t.faculty.members[selectedMember].university}
                  </span>
                  <span>•</span>
                  <span>{t.faculty.members[selectedMember].experience}</span>
                  <span>•</span>
                  <span className="text-[#DD0000] font-semibold">
                    {t.faculty.members[selectedMember].specialty}
                  </span>
                </div>

                <p className="text-[15px] text-neutral-700 leading-relaxed">
                  {t.faculty.members[selectedMember].bio}
                </p>

                <div className="pt-4 border-t border-[#E8E8E4] flex justify-end">
                  <button
                    onClick={handleCloseMember}
                    type="button"
                    className="px-5 py-2.5 bg-neutral-900 text-white rounded-lg text-[13px] font-bold hover:bg-neutral-800 cursor-pointer"
                  >
                    Yopish
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
