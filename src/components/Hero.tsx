import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Building2, GraduationCap, Award, Clock } from 'lucide-react';
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
    const target = document.querySelector('#dasturlar');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingClick = () => {
    playSound('cta');
    onOpenBooking();
  };

  const statIcons = [Building2, GraduationCap, Award, Clock];

  const stats = [
    { label: t.hero.statBranchesLabel, val: t.hero.statBranchesVal, icon: statIcons[0], color: 'text-neutral-900' },
    { label: t.hero.statLevelLabel, val: t.hero.statLevelVal, icon: statIcons[1], color: 'text-[#DD0000]' },
    { label: t.hero.statTuitionLabel, val: t.hero.statTuitionVal, icon: statIcons[2], color: 'text-[#DD0000]' },
    { label: t.hero.statDayLabel, val: t.hero.statDayVal, icon: statIcons[3], color: 'text-neutral-900' },
  ];

  return (
    <section className="relative w-full pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 bg-white border-b border-[#E8E8E4] overflow-hidden">
      {/* Background subtle German flag ambient glow */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#FFCE00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[450px] h-[450px] bg-[#DD0000]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* German Flag Badge & Accreditation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E8E8E4] shadow-2xs"
            >
              <div className="flex items-center gap-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-black" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#DD0000]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFCE00]" />
              </div>
              <span className="text-[11px] font-mono font-bold tracking-wider text-neutral-700 uppercase">
                {t.hero.badge}
              </span>
              <span className="text-neutral-300 hidden sm:inline">|</span>
              <span className="text-[11px] font-medium text-neutral-600 hidden sm:inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                {t.hero.accreditation}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[34px] sm:text-[44px] lg:text-[54px] font-black text-neutral-900 tracking-tight leading-[1.12]"
            >
              {t.hero.titlePart1}{' '}
              <span className="text-[#DD0000] underline decoration-[#FFCE00] decoration-wavy decoration-2">
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titlePart2}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[16px] sm:text-[18px] text-neutral-600 leading-relaxed max-w-2xl font-normal"
            >
              {t.hero.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={handleBookingClick}
                className="inline-flex items-center gap-2.5 bg-[#DD0000] hover:bg-[#B80000] active:scale-[0.98] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleScrollToPrograms}
                className="inline-flex items-center gap-2 bg-white hover:bg-neutral-50 active:scale-[0.98] text-neutral-800 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base border border-[#E8E8E4] shadow-2xs hover:border-neutral-300 transition-all cursor-pointer"
              >
                <span>{t.hero.secondaryCta}</span>
              </button>
            </motion.div>

            {/* Key Quick Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#E8E8E4]"
            >
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-[#FAF9F6] p-3 rounded-xl border border-[#E8E8E4]">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Icon className={`w-3.5 h-3.5 ${stat.color}`} />
                      <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                    <span className="text-[14px] sm:text-[15px] font-extrabold text-neutral-900 block truncate">
                      {stat.val}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: High Quality School Entrance Visual & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E8E8E4] bg-neutral-100 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
              <img
                src="/deutsch-smart-school-entrance.svg"
                alt="Deutsch Smart School Toshkent"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = 'true';
                    target.src = '/assets/aistudio/deutsch-smart-school-entrance-65MP_63a690b7.jpg';
                  }
                }}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

              {/* German Quality Stamp on Image */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/60 shadow-md flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#DD0000] animate-pulse" />
                <span className="text-[11px] font-mono font-bold text-neutral-900 tracking-wider">
                  DEUTSCH SMART
                </span>
              </div>
            </div>

            {/* Top Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-6 -right-3 sm:-right-6 bg-white p-4 rounded-2xl border border-[#E8E8E4] shadow-xl max-w-[240px] z-20 hidden sm:block"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#DD0000]/10 flex items-center justify-center text-[#DD0000] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#DD0000] tracking-wider uppercase block mb-0.5">
                    {t.hero.floatingBadgeTopTitle}
                  </span>
                  <span className="text-[13px] font-bold text-neutral-900 block leading-snug">
                    {t.hero.floatingBadgeTopSubtitle}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Bottom Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-3 sm:-left-6 bg-white p-4 rounded-2xl border border-[#E8E8E4] shadow-xl max-w-[270px] z-20"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700">
                      {t.hero.floatingBadgeBottomBadge}
                    </span>
                  </div>
                  <span className="text-[13px] font-bold text-neutral-900 block leading-snug mb-0.5">
                    {t.hero.floatingBadgeBottomTitle}
                  </span>
                  <span className="text-[11px] text-neutral-500 block leading-tight">
                    {t.hero.floatingBadgeBottomSubtitle}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
