import React, { createContext, useContext, useState, useEffect } from 'react';
import { soundManager } from '../utils/soundEffects';

export type SoundType =
  | 'click'
  | 'cta'
  | 'lang'
  | 'menu'
  | 'success'
  | 'error'
  | 'accordion'
  | 'hover';

interface SoundContextValue {
  soundEnabled: boolean;
  toggleSound: () => void;
  playSound: (type: SoundType, param?: boolean) => void;
}

const SoundContext = createContext<SoundContextValue>({
  soundEnabled: true,
  toggleSound: () => {},
  playSound: () => {},
});

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  useEffect(() => {
    setSoundEnabled(soundManager.getEnabled());
  }, []);

  const toggleSound = () => {
    const next = soundManager.toggle();
    setSoundEnabled(next);
  };

  const playSound = (type: SoundType, param?: boolean) => {
    switch (type) {
      case 'click':
        soundManager.playClick();
        break;
      case 'cta':
        soundManager.playCta();
        break;
      case 'lang':
        soundManager.playLang();
        break;
      case 'menu':
        soundManager.playMenu(param ?? true);
        break;
      case 'success':
        soundManager.playSuccess();
        break;
      case 'error':
        soundManager.playError();
        break;
      case 'accordion':
        soundManager.playAccordion(param ?? true);
        break;
      case 'hover':
        soundManager.playHover();
        break;
    }
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
