/**
 * Ultra-Premium Web Audio API UI Sound Synthesizer
 * 
 * Provides crisp, gentle, studio-grade micro-sound effects
 * without external audio file dependencies.
 */

class SoundManager {
  private ctx: AudioContext | null = null;
  private isEnabled: boolean = true;
  private isUserInteracted: boolean = false;
  private lastSoundTimes: Record<string, number> = {};

  constructor() {
    // Check localStorage preference
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('dss_sound_enabled');
        if (saved !== null) {
          this.isEnabled = saved === 'true';
        }
      } catch {
        // Fallback to default enabled
      }

      // Prepare user gesture listener
      const unlockAudio = () => {
        this.isUserInteracted = true;
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume().catch(() => {});
        }
        window.removeEventListener('click', unlockAudio);
        window.removeEventListener('keydown', unlockAudio);
        window.removeEventListener('touchstart', unlockAudio);
      };

      window.addEventListener('click', unlockAudio, { passive: true });
      window.addEventListener('keydown', unlockAudio, { passive: true });
      window.addEventListener('touchstart', unlockAudio, { passive: true });
    }
  }

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        try {
          this.ctx = new AudioCtx();
        } catch {
          this.ctx = null;
        }
      }
    }
    if (this.ctx && this.ctx.state === 'suspended' && this.isUserInteracted) {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public getEnabled(): boolean {
    return this.isEnabled;
  }

  public setEnabled(enabled: boolean): void {
    this.isEnabled = enabled;
    try {
      localStorage.setItem('dss_sound_enabled', String(enabled));
    } catch {}
  }

  public toggle(): boolean {
    const next = !this.isEnabled;
    this.setEnabled(next);
    if (next) {
      // Play a quick confirmation pop
      this.playLang();
    }
    return next;
  }

  private throttle(key: string, limitMs: number = 40): boolean {
    const now = Date.now();
    const last = this.lastSoundTimes[key] || 0;
    if (now - last < limitMs) return false;
    this.lastSoundTimes[key] = now;
    return true;
  }

  /**
   * 1. Soft UI Click (Standard buttons, tabs, chips)
   * Ultra-short, tactile wooden tick
   */
  public playClick(): void {
    if (!this.isEnabled || !this.throttle('click', 35)) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2200, t);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(750, t);
      osc.frequency.exponentialRampToValueAtTime(320, t + 0.035);

      gain.gain.setValueAtTime(0.04, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.035);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + 0.04);
    } catch {}
  }

  /**
   * 2. Rich CTA Click (High-intent conversion buttons, e.g. "Maktabga tashrif")
   * Warm harmonic acoustic chime with resonant depth
   */
  public playCta(): void {
    if (!this.isEnabled || !this.throttle('cta', 80)) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const t = ctx.currentTime;
      // Dual frequencies for acoustic richness: C5 (523Hz) + G5 (784Hz)
      const freqs = [523.25, 783.99];

      freqs.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.95, t + 0.09);

        const initialVol = i === 0 ? 0.05 : 0.035;
        gain.gain.setValueAtTime(initialVol, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 0.11);
      });
    } catch {}
  }

  /**
   * 3. Language Selector Tick
   * Delicate high-pitched crystal tick
   */
  public playLang(): void {
    if (!this.isEnabled || !this.throttle('lang', 50)) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1250, t);
      osc.frequency.exponentialRampToValueAtTime(1750, t + 0.025);

      gain.gain.setValueAtTime(0.03, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.028);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + 0.03);
    } catch {}
  }

  /**
   * 4. Navigation Menu & Modal (Open / Close)
   * Smooth, gentle whoosh/pop
   */
  public playMenu(isOpen: boolean): void {
    if (!this.isEnabled || !this.throttle('menu', 70)) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1800, t);

      osc.type = 'sine';
      if (isOpen) {
        osc.frequency.setValueAtTime(280, t);
        osc.frequency.exponentialRampToValueAtTime(540, t + 0.07);
      } else {
        osc.frequency.setValueAtTime(540, t);
        osc.frequency.exponentialRampToValueAtTime(260, t + 0.07);
      }

      gain.gain.setValueAtTime(0.04, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.075);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + 0.08);
    } catch {}
  }

  /**
   * 5. Form Success Chime
   * Elegant ascending major chord: F5 -> A5 -> C6
   */
  public playSuccess(): void {
    if (!this.isEnabled || !this.throttle('success', 300)) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const t = ctx.currentTime;
      const notes = [698.46, 880.0, 1046.5]; // F5, A5, C6
      const delays = [0, 0.08, 0.16];

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const noteTime = t + delays[idx];

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteTime);

        gain.gain.setValueAtTime(0.045, noteTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.22);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(noteTime);
        osc.stop(noteTime + 0.24);
      });
    } catch {}
  }

  /**
   * 6. Soft Error / Validation Alert
   * Very gentle descending double tone
   */
  public playError(): void {
    if (!this.isEnabled || !this.throttle('error', 250)) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const t = ctx.currentTime;
      const notes = [380, 310];

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const noteTime = t + idx * 0.09;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, noteTime);

        gain.gain.setValueAtTime(0.035, noteTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.08);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(noteTime);
        osc.stop(noteTime + 0.09);
      });
    } catch {}
  }

  /**
   * 7. Accordion Toggle
   * Subtle organic click
   */
  public playAccordion(isOpen: boolean): void {
    if (!this.isEnabled || !this.throttle('accordion', 40)) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(isOpen ? 640 : 480, t);
      osc.frequency.exponentialRampToValueAtTime(isOpen ? 820 : 360, t + 0.04);

      gain.gain.setValueAtTime(0.025, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + 0.045);
    } catch {}
  }

  /**
   * 8. Selective Micro-Hover (Only for marquee CTAs, barely audible tactile bump)
   */
  public playHover(): void {
    if (!this.isEnabled || !this.throttle('hover', 80)) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1100, t);
      osc.frequency.exponentialRampToValueAtTime(1400, t + 0.015);

      gain.gain.setValueAtTime(0.012, t); // Super quiet
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.018);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + 0.02);
    } catch {}
  }
}

export const soundManager = new SoundManager();
