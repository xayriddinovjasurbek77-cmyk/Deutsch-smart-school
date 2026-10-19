import React from 'react';
import { Send, Phone, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import type { Translations } from '../data/translations';
import { useSound } from '../context/SoundContext';

interface FooterProps {
  t: Translations;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onOpenBooking }) => {
  const { playSound } = useSound();
  return (
    <footer className="w-full bg-[#FAF9F6] border-t border-[#E8E8E4] pt-16 pb-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-[#E8E8E4]">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  alt="Deutsch Smart School Logo"
                  className="h-9 w-auto object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhz01Zk3lc02vK0LsF1TsdN6gHP0pKtRX2uV2tbpI5o9vZPYKcyDjNuq7W3cJC9xh1JjjM_caVMsTIlkmFGGuwGcethg0wb8ljlVWvhf_5Utty38bMF07VST5QqNqDvxZHa-UYwphRXAbr6bmkAbP1fWp8re6e0SN4IZLCw6YzlgENikTmrgKWwmSE8K9tlkFi3BIDmg8Atv7cnOO4NopeQkFH0WsJ9CSbyPjmrhrY3MtNmeF42AysVA"
                />
                <div className="flex flex-col">
                  <span className="font-extrabold text-[20px] text-neutral-900 tracking-tight">
                    Deutsch Smart
                  </span>
                  <span className="font-semibold text-[10px] tracking-[0.16em] uppercase text-neutral-500">
                    School · Tashkent
                  </span>
                </div>
              </div>

              <p className="text-[14px] text-neutral-600 leading-relaxed max-w-sm mb-6">
                {t.footer.tagline}
              </p>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E8E8E4] rounded-lg text-[#DD0000] font-mono text-[11px] font-bold shadow-2xs">
                <ShieldCheck className="w-4 h-4" />
                <span>{t.footer.seal}</span>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#E8E8E4]/80 flex flex-wrap items-center gap-4 text-[12px] text-neutral-500 font-semibold">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FFCE00]" />
                <span>{t.footer.partnerGoethe}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#DD0000]" />
                <span>{t.footer.partnerLevel}</span>
              </div>
            </div>
          </div>

          {/* Col 1: Maktab */}
          <div>
            <h4 className="font-bold text-[14px] text-neutral-900 uppercase tracking-wider mb-4">
              {t.footer.colSchoolTitle}
            </h4>
            <ul className="space-y-2.5 text-[14px] text-neutral-600">
              <li>
                <a
                  href="#maktab-haqida"
                  onClick={() => playSound('click')}
                  className="hover:text-neutral-950 transition-colors"
                >
                  Nima uchun DSS
                </a>
              </li>
              <li>
                <a
                  href="#kun-tartibi"
                  onClick={() => playSound('click')}
                  className="hover:text-neutral-950 transition-colors"
                >
                  Maktab kuni (08:00–16:50)
                </a>
              </li>
              <li>
                <a
                  href="#dasturlar"
                  onClick={() => playSound('click')}
                  className="hover:text-neutral-950 transition-colors"
                >
                  Nemis tili muhiti
                </a>
              </li>
              <li>
                <a
                  href="#ustozlar"
                  onClick={() => playSound('click')}
                  className="hover:text-neutral-950 transition-colors"
                >
                  Ustozlar tarkibi
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    playSound('cta');
                    onOpenBooking();
                  }}
                  className="text-[#DD0000] font-semibold hover:underline cursor-pointer"
                >
                  Maktabga tashrif
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Yo'nalishlar */}
          <div>
            <h4 className="font-bold text-[14px] text-neutral-900 uppercase tracking-wider mb-4">
              {t.footer.colTracksTitle}
            </h4>
            <ul className="space-y-2.5 text-[14px] text-neutral-600">
              <li>
                <a href="#dasturlar" className="hover:text-neutral-950 transition-colors">
                  Goethe A1 → C1
                </a>
              </li>
              <li>
                <a href="#dasturlar" className="hover:text-neutral-950 transition-colors">
                  Tibbiyot (Medizin)
                </a>
              </li>
              <li>
                <a href="#dasturlar" className="hover:text-neutral-950 transition-colors">
                  Muhandislik (Technik)
                </a>
              </li>
              <li>
                <a href="#dasturlar" className="hover:text-neutral-950 transition-colors">
                  Tadbirkorlik (Wirtschaft)
                </a>
              </li>
              <li>
                <a href="#dasturlar" className="hover:text-neutral-950 transition-colors">
                  Studienkolleg tayyorgarligi
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Filiallar & Aloqa */}
          <div>
            <h4 className="font-bold text-[14px] text-neutral-900 uppercase tracking-wider mb-4">
              {t.footer.colContactTitle}
            </h4>
            <div className="space-y-3.5 text-[13px] text-neutral-600">
              <div>
                <p className="font-bold text-neutral-900 text-[12px]">Yashnobod filiali</p>
                <p className="text-neutral-500">Elbek ko'chasi 22/1, Toshkent</p>
              </div>

              <div>
                <p className="font-bold text-neutral-900 text-[12px]">Sergeli filiali</p>
                <p className="text-neutral-500">Sokin Makon TJM, Toshkent</p>
              </div>

              <div className="pt-1">
                <a
                  href="tel:+998550550444"
                  className="font-extrabold text-[15px] text-neutral-900 hover:text-[#DD0000] transition-colors block"
                >
                  +998 55 055 0444
                </a>
                <p className="text-neutral-500 text-[12px]">info@deutschsmart.uz</p>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-[#E8E8E4] flex items-center justify-center text-[#229ED9] hover:border-[#229ED9] transition-colors shadow-2xs"
                  aria-label="Telegram"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-neutral-500">
          <div>{t.footer.copyright}</div>
          <div className="flex items-center gap-6 font-medium">
            <a href="#" className="hover:text-neutral-900 transition-colors">
              {t.footer.privacy}
            </a>
            <span className="text-neutral-300">·</span>
            <a href="#" className="hover:text-neutral-900 transition-colors">
              {t.footer.terms}
            </a>
            <span className="text-neutral-300">·</span>
            <a href="#" className="hover:text-neutral-900 transition-colors">
              {t.footer.accreditation}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
