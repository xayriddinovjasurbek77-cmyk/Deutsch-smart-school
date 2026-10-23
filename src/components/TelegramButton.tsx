import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSound } from '../context/SoundContext';

export const TelegramButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { playSound } = useSound();

  const telegramUrl = 'https://t.me/sadoo_sh';
  const telegramUsername = '@sadoo_sh';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    playSound('click');
  };

  return (
    <aside aria-label="Telegram orqali bog'lanish" className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 select-none">
      <div className="relative flex items-center">
        {/* Subtle Tooltip on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute left-full ml-3 px-3 py-1.5 bg-neutral-900/95 backdrop-blur-md text-white text-[12px] font-medium rounded-xl shadow-xl border border-white/10 pointer-events-none whitespace-nowrap z-50 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#229ED9] animate-pulse" />
              <span>Telegram: <strong className="text-[#229ED9] font-mono">{telegramUsername}</strong></span>
              <span className="text-[10px] text-neutral-400">· Onlayn</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Telegram Button */}
        <motion.a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.94 }}
          className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#1E96C8] to-[#2AABEE] hover:from-[#1A8BC0] hover:to-[#229ED9] text-white shadow-lg hover:shadow-2xl shadow-[#229ED9]/30 border border-white/25 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#229ED9]/40 cursor-pointer"
          aria-label={`Telegram: ${telegramUsername} - Yangi oynada ochish`}
        >
          {/* Subtle Ambient Pulse Ring */}
          <span className="absolute -inset-1 rounded-full bg-[#229ED9]/25 animate-ping pointer-events-none opacity-60" />

          {/* Authentic Telegram Paper Plane Icon */}
          <svg
            className="w-7 h-7 sm:w-7.5 sm:h-7.5 fill-current transform -translate-x-[1px] translate-y-[1px] group-hover:rotate-6 transition-transform duration-300"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
          </svg>

          {/* Active online micro-badge */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-xs" />
        </motion.a>
      </div>
    </aside>
  );
};
