import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import type { Translations } from '../data/translations';
import { useSound } from '../context/SoundContext';

interface FooterProps {
  t: Translations;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  const { playSound } = useSound();

  const scrollToTop = () => {
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href: string) => {
    playSound('click');
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#111827] text-neutral-300 pt-16 pb-12 border-t border-neutral-800 text-sm">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Column 1: Brand & Quality Seal */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-white border border-neutral-400" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#DD0000]" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#FFCE00]" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Deutsch <span className="text-[#DD0000]">Smart</span> School
              </span>
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              {t.footer.tagline}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.footer.seal}</span>
              </div>
              <div className="mt-2 text-xs text-neutral-400 flex flex-col gap-0.5 font-mono">
                <span>· {t.footer.partnerGoethe}</span>
                <span>· {t.footer.partnerLevel}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Maktab Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
              {t.footer.colSchoolTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: t.nav.about, href: '#maktab-haqida' },
                { label: t.nav.programs, href: '#dasturlar' },
                { label: t.nav.schedule, href: '#kun-tartibi' },
                { label: t.nav.faculty, href: '#ustozlar' },
                { label: t.nav.campuses, href: '#filiallar' },
                { label: t.nav.faq, href: '#faq' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tracks & Directions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
              {t.footer.colTracksTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              {t.tracks.list.map((track, idx) => (
                <li key={idx}>
                  <a
                    href="#dasturlar"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('#dasturlar');
                    }}
                    className="hover:text-white transition-colors cursor-pointer block"
                  >
                    <span className="font-semibold text-neutral-200">{track.name}</span>
                    <span className="text-[11px] block text-neutral-500 font-mono">
                      {track.germanName}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Campuses & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
              {t.footer.colContactTitle}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="font-bold text-white block">{t.campuses.yashnobodTitle}</span>
                <p className="text-neutral-400 text-xs flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#DD0000] shrink-0" />
                  <span>{t.campuses.yashnobodAddress}</span>
                </p>
              </div>

              <div className="space-y-1 pt-2">
                <span className="font-bold text-white block">{t.campuses.sergeliTitle}</span>
                <p className="text-neutral-400 text-xs flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#DD0000] shrink-0" />
                  <span>{t.campuses.sergeliAddress}</span>
                </p>
              </div>

              <div className="pt-2 space-y-2">
                <a
                  href="tel:+998550550444"
                  onClick={() => playSound('click')}
                  className="flex items-center gap-2 font-bold text-white hover:text-[#DD0000] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#DD0000]" />
                  <span>+998 55 055 0444</span>
                </a>
                <a
                  href="mailto:info@deutschsmart.uz"
                  onClick={() => playSound('click')}
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-neutral-400" />
                  <span>info@deutschsmart.uz</span>
                </a>
                <a
                  href="https://t.me/sadoo_sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSound('click')}
                  className="flex items-center gap-2 text-[#229ED9] hover:text-[#45B2E8] transition-colors text-xs font-semibold"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                  <span>Telegram: @sadoo_sh</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            <span>{t.footer.copyright}</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-neutral-400">
            <span className="hover:text-white cursor-pointer transition-colors">
              {t.footer.privacy}
            </span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer transition-colors">
              {t.footer.terms}
            </span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer transition-colors">
              {t.footer.accreditation}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer text-xs"
          >
            <span>Tepaga</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
