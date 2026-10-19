/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { translations, type Language } from './data/translations';
import { SoundProvider } from './context/SoundContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { Pillars } from './components/Pillars';
import { DailySchedule } from './components/DailySchedule';
import { LanguageRoadmap } from './components/LanguageRoadmap';
import { AcademicTracks } from './components/AcademicTracks';
import { FutureSkills } from './components/FutureSkills';
import { Faculty } from './components/Faculty';
import { Campuses } from './components/Campuses';
import { AdmissionForm } from './components/AdmissionForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { TelegramWidget } from './components/TelegramWidget';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('uz');

  const t = translations[currentLang] || translations.uz;

  const scrollToBooking = () => {
    const el = document.getElementById('tashrif-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SoundProvider>
      <div className="min-h-screen bg-[#FAF9F6] text-[#1A1C1A] selection:bg-[#DD0000] selection:text-white flex flex-col font-sans">
        {/* Top Navigation */}
        <Header
          currentLang={currentLang}
          onLanguageChange={setCurrentLang}
          t={t}
          onOpenBooking={scrollToBooking}
        />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero t={t} onOpenBooking={scrollToBooking} />

        {/* Key Metrics Strip */}
        <Metrics t={t} />

        {/* Pedagogical Philosophy / 4 Pillars */}
        <Pillars t={t} />

        {/* Daily Rhythm / Schedule */}
        <DailySchedule t={t} />

        {/* German Language Roadmap */}
        <LanguageRoadmap t={t} />

        {/* Grades 9-11 Specialization Tracks */}
        <AcademicTracks t={t} />

        {/* Digital Farm & Future Skills (High-Contrast Dark Hub) */}
        <FutureSkills t={t} />

        {/* Faculty / Mentors */}
        <Faculty t={t} />

        {/* Campuses & Maps */}
        <Campuses t={t} />

        {/* Admission Booking Form */}
        <AdmissionForm t={t} />

        {/* FAQ Accordion */}
        <FaqSection t={t} />
      </main>

      {/* Footer */}
      <Footer t={t} onOpenBooking={scrollToBooking} />

      {/* Floating Telegram Advisor Widget */}
      <TelegramWidget t={t} />
    </div>
    </SoundProvider>
  );
}
