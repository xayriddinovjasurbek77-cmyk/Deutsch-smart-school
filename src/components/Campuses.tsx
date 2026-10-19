import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ExternalLink, Phone, Navigation, Building2, Trees, Trophy, FlaskConical } from 'lucide-react';
import type { Translations } from '../data/translations';
import { useSound } from '../context/SoundContext';

interface CampusesProps {
  t: Translations;
}

export const Campuses: React.FC<CampusesProps> = ({ t }) => {
  const { playSound } = useSound();
  const futureIcons = [Trees, Trophy, Trees, FlaskConical];

  return (
    <section id="filiallar" className="w-full bg-white py-20 lg:py-28 border-b border-[#E8E8E4]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2028 Future Campus Masterplan Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FAF9F6] p-8 sm:p-10 lg:p-12 rounded-3xl border border-[#E8E8E4] shadow-sm mb-16 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-md text-[#DD0000] font-mono text-[11px] font-bold border border-[#E8E8E4] mb-4">
                <Building2 className="w-3.5 h-3.5" />
                <span>{t.campuses.futureTag}</span>
              </div>

              <h3 className="text-[28px] sm:text-[36px] font-extrabold text-neutral-900 tracking-tight leading-tight mb-4">
                {t.campuses.futureTitle}
              </h3>

              <p className="text-[15px] sm:text-[16px] text-neutral-600 mb-8 leading-relaxed">
                {t.campuses.futureDesc}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {t.campuses.futureFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-3.5 rounded-xl border border-[#E8E8E4] shadow-2xs"
                  >
                    <span className="font-mono text-[11px] font-bold text-[#DD0000] block mb-1">
                      0{idx + 1}
                    </span>
                    <span className="text-[13px] font-bold text-neutral-900 block leading-tight">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-[#E8E8E4] group">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                  alt="Futuristic sustainable high school campus architecture with timber frame design in Tashkent"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD40BE3MHojdACTZoCvhSS_JUNjUwmghC5WBdFq3hp5lUkld2SHfo8weCys86CuJkyUTuJeGDGlO2fLGpIVL6axsRqYObg7aryysnntv8-JR8Vzf23csPO5rHspmE9GAoKQQK1D3dmzlZ8-x6j8Qfsx_ELCW1IZQHt7fqeGGEAbIVre3qtVdhZIuxW-v9TH-3ksrPl1XGR4yy_lznpz_1WsXE11EJ1wj4elXmKm58uiRth1mG_M8ug9fQ"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 bg-neutral-900/90 text-white px-3.5 py-1.5 rounded-lg text-[12px] font-mono font-semibold backdrop-blur-sm border border-white/20">
                  {t.campuses.futureBadge}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Current 2 Active Campuses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Yashnobod Branch */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-[#FAF9F6] p-7 sm:p-8 rounded-3xl border border-[#E8E8E4] shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold text-[#DD0000] bg-[#DD0000]/10 px-2.5 py-1 rounded-md border border-[#DD0000]/20">
                  {t.campuses.yashnobodTag}
                </span>
                <a
                  href="https://www.google.com/maps?q=41.294615,69.326284"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSound('click')}
                  className="inline-flex items-center gap-1.5 font-bold text-[13px] text-neutral-800 hover:text-[#DD0000] transition-colors"
                >
                  <span>{t.campuses.openInMap}</span>
                  <ExternalLink className="w-4 h-4 text-[#DD0000]" />
                </a>
              </div>

              <h4 className="text-[24px] font-extrabold text-neutral-900 mb-1">
                {t.campuses.yashnobodTitle}
              </h4>
              <p className="text-[14px] text-neutral-600 mb-5 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#DD0000] shrink-0" />
                <span>{t.campuses.yashnobodAddress}</span>
              </p>

              {/* Map Graphic Preview with Coordinate Pill */}
              <div className="h-52 rounded-2xl overflow-hidden relative shadow-inner bg-neutral-100 border border-[#E8E8E4] mb-6 group">
                <img
                  alt="Yashnobod district campus location"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkBbrELnuFIZxc1diCxvVXWw09wHZbC4GTrntvM1eMfEg12IWuivul1y-b8X_1kxvvVkPqi-Fsq-IgeYDb-AEVhjQCuAie34FannSNFtbUn2vs0uqAKASGT5fH_OzFgFpSWEcYaUaY6ThuYvJkNcz6xhyM74ruc9Fas-LzHCJtgwTUa3JI0u-gn1CnAn1O2a_cGo4XpXdh60RKi8QQKTqTPOMkeqTybGczYG85WLcVjgHqSWfaU6y7JA"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-400"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg text-[11px] font-mono font-bold text-neutral-900 shadow-sm border border-neutral-200">
                  {t.campuses.yashnobodCoords}
                </div>
                <div className="absolute bottom-3 right-3">
                  <a
                    href="https://www.google.com/maps?q=41.294615,69.326284"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playSound('click')}
                    className="inline-flex items-center gap-1.5 bg-[#DD0000] hover:bg-[#B80000] text-white text-[12px] font-bold px-3.5 py-1.5 rounded-lg shadow-md transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>{t.campuses.getDirections}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8E8E4] flex items-center justify-between text-[13px]">
              <span className="text-neutral-500 font-medium">{t.campuses.yashnobodNote}</span>
              <a
                href="tel:+998550550444"
                onClick={() => playSound('click')}
                className="font-bold text-neutral-900 hover:text-[#DD0000] transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#DD0000]" />
                <span>+998 55 055 0444</span>
              </a>
            </div>
          </motion.div>

          {/* Sergeli Branch */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-[#FAF9F6] p-7 sm:p-8 rounded-3xl border border-[#E8E8E4] shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold text-white bg-neutral-900 px-2.5 py-1 rounded-md">
                  {t.campuses.sergeliTag}
                </span>
                <a
                  href="https://www.google.com/maps?q=41.188813,69.191109"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSound('click')}
                  className="inline-flex items-center gap-1.5 font-bold text-[13px] text-neutral-800 hover:text-[#DD0000] transition-colors"
                >
                  <span>{t.campuses.openInMap}</span>
                  <ExternalLink className="w-4 h-4 text-[#DD0000]" />
                </a>
              </div>

              <h4 className="text-[24px] font-extrabold text-neutral-900 mb-1">
                {t.campuses.sergeliTitle}
              </h4>
              <p className="text-[14px] text-neutral-600 mb-5 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#DD0000] shrink-0" />
                <span>{t.campuses.sergeliAddress}</span>
              </p>

              {/* Map Graphic Preview with Coordinate Pill */}
              <div className="h-52 rounded-2xl overflow-hidden relative shadow-inner bg-neutral-100 border border-[#E8E8E4] mb-6 group">
                <img
                  alt="Sergeli Sokin Makon campus location"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO0ePDU7uYaIj6EqHOlSlHK1crdamO_qxcxePJ9wPYkQvIqcP8cMLCah62nFGJ-wIWf8PVswse7Y5-ZyZkvEIGkJsrSv8PyNPXiYDSbDk5zonz1mhSfkHX9myE5zDCSqDpPYUsGjjHwqGwPZYdXdUoJLcy4C-Ry1XfiSvjpw1JRPymDq2QTOoq5cKgfbdpfYlGnBvxypIzBd-KmfOe5dqvnK18pEoR17QN-Fjau45GHwXAivbkAw1RKA"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-400"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg text-[11px] font-mono font-bold text-neutral-900 shadow-sm border border-neutral-200">
                  {t.campuses.sergeliCoords}
                </div>
                <div className="absolute bottom-3 right-3">
                  <a
                    href="https://www.google.com/maps?q=41.188813,69.191109"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playSound('click')}
                    className="inline-flex items-center gap-1.5 bg-[#DD0000] hover:bg-[#B80000] text-white text-[12px] font-bold px-3.5 py-1.5 rounded-lg shadow-md transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>{t.campuses.getDirections}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8E8E4] flex items-center justify-between text-[13px]">
              <span className="text-neutral-500 font-medium">{t.campuses.sergeliNote}</span>
              <a
                href="tel:+998550550444"
                onClick={() => playSound('click')}
                className="font-bold text-neutral-900 hover:text-[#DD0000] transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#DD0000]" />
                <span>+998 55 055 0444</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
