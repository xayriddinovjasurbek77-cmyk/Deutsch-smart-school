import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, CheckCircle, GraduationCap, Clock, Award, Shield } from 'lucide-react';
import type { Translations } from '../data/translations';
import { useSound } from '../context/SoundContext';

interface HeroProps {
  t: Translations;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onOpenBooking }) => {
  const { playSound } = useSound();

  const handleScrollToPrograms = () => {
    playSound('click');
    const el = document.getElementById('dasturlar');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-[#FAF9F6] pt-28 sm:pt-32 pb-16 lg:pb-24 overflow-hidden border-b border-[#E8E8E4]">
      {/* Subtle Bauhaus architectural background grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Decorative ambient light gradient */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FFCE00]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#DD0000]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Overline with German Flag colors + Goethe accreditation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-between gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2.5 bg-white px-3.5 py-1.5 rounded-lg border border-[#E8E8E4] shadow-2xs">
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0D0D0D]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#DD0000]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFCE00]" />
            </div>
            <span className="font-bold text-[11px] sm:text-[12px] tracking-[0.14em] uppercase text-neutral-800">
              {t.hero.badge}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 text-[12px] font-semibold text-neutral-600 bg-white/70 backdrop-blur-xs px-3 py-1 rounded-md border border-[#E8E8E4]">
            <Award className="w-4 h-4 text-[#DD0000]" />
            <span>{t.hero.accreditation}</span>
          </div>
        </motion.div>

        {/* 12-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTA (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-[36px] sm:text-[46px] lg:text-[54px] font-extrabold tracking-tight leading-[1.08] text-neutral-900 mb-5">
                {t.hero.titlePart1}{' '}
                <span className="relative inline-block text-[#DD0000]">
                  {t.hero.titleHighlight}
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2.5 text-[#FFCE00]/70"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 6 Q 50 12 100 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{' '}
                {t.hero.titlePart2}
              </h1>

              <p className="text-[16px] sm:text-[18px] text-neutral-600 leading-relaxed max-w-2xl mb-8">
                {t.hero.description}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => playSound('hover')}
                onClick={() => {
                  playSound('cta');
                  onOpenBooking();
                }}
                type="button"
                className="inline-flex items-center justify-center gap-2 bg-[#DD0000] hover:bg-[#B80000] text-white font-bold text-[15px] sm:text-[16px] px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleScrollToPrograms}
                type="button"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-neutral-900 border border-[#E8E8E4] font-semibold text-[15px] sm:text-[16px] px-6 py-4 rounded-xl shadow-2xs hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#DD0000]" />
                <span>{t.hero.secondaryCta}</span>
              </motion.button>
            </motion.div>

            {/* Live Fast-facts Matrix Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-10 p-4 sm:p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-[#E8E8E4] shadow-2xs"
            >
              <div className="border-r border-[#E8E8E4]/80 pr-2">
                <span className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-0.5">
                  {t.hero.statBranchesLabel}
                </span>
                <span className="font-extrabold text-[14px] sm:text-[15px] text-neutral-900">
                  {t.hero.statBranchesVal}
                </span>
              </div>
              <div className="sm:border-r border-[#E8E8E4]/80 pr-2">
                <span className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-0.5">
                  {t.hero.statLevelLabel}
                </span>
                <span className="font-extrabold text-[14px] sm:text-[15px] text-[#DD0000]">
                  {t.hero.statLevelVal}
                </span>
              </div>
              <div className="border-r border-[#E8E8E4]/80 pr-2 pt-2 sm:pt-0">
                <span className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-0.5">
                  {t.hero.statTuitionLabel}
                </span>
                <span className="font-extrabold text-[14px] sm:text-[15px] text-neutral-900">
                  {t.hero.statTuitionVal}
                </span>
              </div>
              <div className="pt-2 sm:pt-0">
                <span className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-0.5">
                  {t.hero.statDayLabel}
                </span>
                <span className="font-extrabold text-[14px] sm:text-[15px] text-neutral-900">
                  {t.hero.statDayVal}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Canvas (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-neutral-950 border border-[#E8E8E4] group">
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
                alt="Deutsch Smart School o'quvchilari zamonaviy nemis sinfxonasida dars jarayonida"
                className="w-full h-[440px] sm:h-[480px] object-cover object-center filter brightness-[0.98] contrast-[1.02]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcF9gR8hkqWvclzvSkmkHfGjEood3N8hcC2YGSy527TabC8XK-D6IXuFSy8cXz8QVjA70kwNFh-zXmCCqxvsRyC57dM8FzntCwxKS2P1B2zLn_ACGqY3hHWZowYohYyvinw6Qvf1wSwBlDBHGxBd2zk-pFKRP1-zrwxY-sRepoWNgi9Xc895klPRa7Hyr7bZzr7QU_mv2sfYF0vJ3fmZWYMg1c1FpLNH_vlUx7CsuvK3l1MTQZ1xOhOA"
              />

              {/* Scrim gradient overlay for architectural feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Floating Top Accreditation Badge */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg border border-white/60 flex items-center gap-2.5 max-w-[280px]"
              >
                <div className="w-8 h-8 rounded-lg bg-[#DD0000]/10 flex items-center justify-center text-[#DD0000] shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
                    {t.hero.floatingBadgeTopTitle}
                  </span>
                  <span className="font-extrabold text-[12px] sm:text-[13px] text-neutral-900 leading-tight block">
                    {t.hero.floatingBadgeTopSubtitle}
                  </span>
                </div>
              </motion.div>

              {/* Floating Bottom Schedule Footnote */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-xl border border-white/60 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF9F6] border border-[#E8E8E4] flex items-center justify-center text-[#DD0000] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-extrabold text-[13px] sm:text-[14px] text-neutral-900 leading-tight">
                      {t.hero.floatingBadgeBottomTitle}
                    </p>
                    <p className="text-[11px] sm:text-[12px] text-neutral-500 font-medium">
                      {t.hero.floatingBadgeBottomSubtitle}
                    </p>
                  </div>
                </div>
                <span className="bg-[#FAF9F6] border border-[#E8E8E4] text-[11px] font-bold px-2.5 py-1 rounded text-neutral-800 shrink-0">
                  {t.hero.floatingBadgeBottomBadge}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
