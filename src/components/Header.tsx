import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowRight, Menu, X, Globe, Volume2, VolumeX } from 'lucide-react';
import type { Language, Translations } from '../data/translations';
import { useSound } from '../context/SoundContext';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: Translations;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  t,
  onOpenBooking,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { soundEnabled, toggleSound, playSound } = useSound();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#maktab-haqida', label: t.nav.about },
    { href: '#dasturlar', label: t.nav.programs },
    { href: '#kun-tartibi', label: t.nav.schedule },
    { href: '#ustozlar', label: t.nav.faculty },
    { href: '#filiallar', label: t.nav.campuses },
    { href: '#faq', label: t.nav.faq },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'uz', label: 'UZ' },
    { code: 'ru', label: 'RU' },
    { code: 'de', label: 'DE' },
    { code: 'en', label: 'EN' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    playSound('click');
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLanguageSelect = (code: Language) => {
    playSound('lang');
    onLanguageChange(code);
  };

  const handleToggleMenu = () => {
    const nextState = !mobileMenuOpen;
    playSound('menu', nextState);
    setMobileMenuOpen(nextState);
  };

  const soundTooltip = soundEnabled
    ? currentLang === 'uz'
      ? "Ovoz yoqilgan (o'chirish uchun bosing)"
      : currentLang === 'ru'
      ? 'Звук включен (нажмите чтобы выключить)'
      : currentLang === 'de'
      ? 'Ton an (klicken zum Stummschalten)'
      : 'Sound enabled (click to mute)'
    : currentLang === 'uz'
    ? 'Ovoz o‘chirilgan (yoqish uchun bosing)'
    : currentLang === 'ru'
    ? 'Звук выключен (нажмите чтобы включить)'
    : currentLang === 'de'
    ? 'Ton aus (klicken zum Aktivieren)'
    : 'Sound muted (click to unmute)';

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E8E8E4] py-3'
            : 'bg-white/80 backdrop-blur-sm border-b border-[#E8E8E4]/60 py-4'
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Identity: Original logo + bold Deutsch Smart */}
          <a
            href="#"
            onClick={() => playSound('click')}
            className="flex items-center gap-3 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DD0000] rounded-lg"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              alt="Deutsch Smart School Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain shrink-0"
              src="/assets/aistudio/deutsch-smart-school-logo_3e40737e.svg"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-[18px] sm:text-[20px] tracking-tight text-neutral-900 group-hover:text-[#DD0000] transition-colors">
                Deutsch Smart
              </span>
              <span className="font-semibold text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-neutral-500">
                School · Tashkent
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-[14px] font-medium text-neutral-600 hover:text-neutral-950 transition-colors py-1 group whitespace-nowrap"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#DD0000] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Zone: Sound Toggle, Lang Switcher, Phone, CTA */}
          <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
            {/* Audio Mute/Unmute Control */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={toggleSound}
              title={soundTooltip}
              aria-label={soundTooltip}
              className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200 cursor-pointer ${
                soundEnabled
                  ? 'bg-[#FAF9F6] border-[#E8E8E4] text-neutral-800 hover:bg-[#E8E8E4] hover:text-[#DD0000]'
                  : 'bg-neutral-100 border-neutral-300 text-neutral-400 hover:text-neutral-700'
              }`}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-neutral-800" />
              ) : (
                <VolumeX className="w-4 h-4 text-neutral-400" />
              )}
            </motion.button>

            {/* Language Switcher */}
            <div className="flex items-center bg-[#F4F4F1] p-1 rounded-lg border border-[#E8E8E4]">
              <Globe className="w-3.5 h-3.5 text-neutral-400 ml-1 mr-1 hidden sm:block" />
              {languages.map((lang) => {
                const isActive = currentLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    type="button"
                    className={`relative px-2 sm:px-2.5 py-1 text-[11px] sm:text-[12px] font-bold rounded-md transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-white shadow-xs'
                        : 'text-neutral-600 hover:text-neutral-950'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeLangTab"
                        className="absolute inset-0 bg-neutral-900 rounded-md"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{lang.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Direct Phone Call */}
            <a
              href="tel:+998550550444"
              onClick={() => playSound('click')}
              className="hidden lg:flex items-center gap-2 text-[14px] font-bold text-neutral-900 hover:text-[#DD0000] transition-colors whitespace-nowrap"
            >
              <div className="w-8 h-8 rounded-full bg-[#F4F4F1] flex items-center justify-center text-[#DD0000]">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{t.nav.callNow}</span>
            </a>

            {/* Primary CTA button with audio feedback */}
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => playSound('hover')}
              onClick={() => {
                playSound('cta');
                onOpenBooking();
              }}
              type="button"
              className="hidden sm:inline-flex items-center gap-2 bg-[#DD0000] hover:bg-[#B80000] text-white font-semibold text-[13px] sm:text-[14px] px-4 sm:px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>{t.nav.bookVisit}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={handleToggleMenu}
              type="button"
              aria-label="Toggle navigation menu"
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-[#F4F4F1] text-neutral-800 hover:bg-[#E8E8E4] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs xl:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-0 right-0 bottom-0 w-[82%] max-w-sm bg-white shadow-2xl p-6 pt-24 flex flex-col justify-between overflow-y-auto"
            >
              <div className="space-y-4">
                <div className="border-b border-[#E8E8E4] pb-4 mb-4">
                  <span className="font-extrabold text-[20px] text-neutral-900 block">
                    Deutsch Smart
                  </span>
                  <span className="text-[12px] text-neutral-500 font-semibold tracking-wider uppercase">
                    School · Tashkent
                  </span>
                </div>

                <div className="flex flex-col space-y-3">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.2 }}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-[16px] font-semibold text-neutral-800 hover:text-[#DD0000] py-2 transition-colors flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-neutral-400" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#E8E8E4] space-y-4">
                <a
                  href="tel:+998550550444"
                  onClick={() => playSound('click')}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#FAF9F6] text-neutral-900 font-bold"
                >
                  <Phone className="w-4 h-4 text-[#DD0000]" />
                  <span>+998 55 055 0444</span>
                </a>

                <button
                  onClick={() => {
                    playSound('cta');
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  type="button"
                  className="w-full py-3 bg-[#DD0000] hover:bg-[#B80000] text-white font-bold rounded-lg text-center flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>{t.nav.bookVisit}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
