import React, { useState, useEffect } from 'react';
import { translations, type Language } from './data/translations';
import { SoundProvider } from './context/SoundContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { Pillars } from './components/Pillars';
import { LanguageRoadmap } from './components/LanguageRoadmap';
import { AcademicTracks } from './components/AcademicTracks';
import { FutureSkills } from './components/FutureSkills';
import { DailySchedule } from './components/DailySchedule';
import { Faculty } from './components/Faculty';
import { Campuses } from './components/Campuses';
import { AdmissionForm } from './components/AdmissionForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { TelegramButton } from './components/TelegramButton';
import { AiSchoolAssistant } from './components/AiSchoolAssistant';

const MainApp: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dss_lang');
      if (saved && ['uz', 'ru', 'de', 'en'].includes(saved)) {
        return saved as Language;
      }
    }
    return 'uz';
  });

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('dss_lang', lang);
      document.documentElement.lang = lang;
    } catch {}
  };

  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const handleOpenBooking = () => {
    const el = document.getElementById('tashrif-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const t = translations[currentLang];

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#DD0000] selection:text-white flex flex-col font-sans">
      {/* 1. Header with Language Switcher, Nav Links & Sound Toggle */}
      <Header
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        t={t}
        onOpenBooking={handleOpenBooking}
      />

      {/* 2. Main Landmark with All Core Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero t={t} onOpenBooking={handleOpenBooking} />

        {/* Key Metrics & Statistics */}
        <Metrics t={t} />

        {/* 4 Pillars: Ordnung, Zukunft, Herz, Synergie */}
        <Pillars t={t} />

        {/* A1 -> C1 Language Roadmap */}
        <LanguageRoadmap t={t} />

        {/* Academic Tracks: Medicine, Engineering, Business */}
        <AcademicTracks t={t} />

        {/* Future Skills & Digital Farm (AI & Coding) */}
        <FutureSkills t={t} />

        {/* Daily Schedule (08:00 - 16:50 full day) */}
        <DailySchedule t={t} />

        {/* Faculty & Academic Excellence */}
        <Faculty t={t} onOpenBooking={handleOpenBooking} />

        {/* Yashnobod & Sergeli Campuses with direct maps & photos */}
        <Campuses t={t} />

        {/* Free Campus Visit Booking Form */}
        <AdmissionForm t={t} />

        {/* Frequently Asked Questions */}
        <FaqSection t={t} />
      </main>

      {/* 3. Footer */}
      <Footer t={t} />

      {/* 4. Floating Telegram Button (@sadoo_sh) - Bottom Left */}
      <TelegramButton />

      {/* 5. Real AI School Assistant (Google Gemini) - Bottom Right */}
      <AiSchoolAssistant onOpenBooking={handleOpenBooking} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <SoundProvider>
      <MainApp />
    </SoundProvider>
  );
};

export default App;
