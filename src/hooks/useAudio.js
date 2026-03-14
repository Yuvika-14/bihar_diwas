import { useCallback, useRef } from 'react';

// Frequencies for our notes
const NOTES = {
  C4: 261.63,
  D4: 293.66,
  E4: 329.63,
  F4: 349.23,
  G4: 392.00,
  A4: 440.00,
  B4: 493.88,
  C5: 523.25,
  D5: 587.33,
  E5: 659.25,
  G5: 783.99,
  C6: 1046.50
};

export const useAudio = () => {
  const audioCtxRef = useRef(null);

  // Initialize context on first user interaction (browsers require this)
  const initAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  // Generic tone generator
  const playTone = useCallback((freq, type = 'sine', duration = 0.1, vol = 0.1, delay = 0) => {
    const ctx = initAudio();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);

    // Envelope (Attack-Decay-Sustain-Release)
    gainNode.gain.setValueAtTime(0, ctx.currentTime + delay);
    gainNode.gain.linearRampToValueAtTime(vol, ctx.currentTime + delay + 0.02); // attack
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration); // decay

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(ctx.currentTime + delay);
    osc.stop(ctx.currentTime + delay + duration);
  }, [initAudio]);

  const soundEffects = {
    // Soft UI Click
    click: () => {
      // Audio
      playTone(600, 'triangle', 0.05, 0.1);
      // Haptics: Very light, barely perceptible tick
      if ('vibrate' in navigator) navigator.vibrate(15);
    },

    // Success Ping (Green connection)
    correct: () => {
      // Audio
      playTone(NOTES.C5, 'sine', 0.1, 0.1, 0);
      playTone(NOTES.E5, 'sine', 0.15, 0.1, 0.05);
      playTone(NOTES.G5, 'sine', 0.2, 0.1, 0.1);
      // Haptics: Double quick pulse
      if ('vibrate' in navigator) {
        navigator.vibrate([50, 50, 50]);
      }
    },

    // Error Buzz (Red connection)
    wrong: () => {
      // Audio
      playTone(150, 'sawtooth', 0.1, 0.15, 0);
      playTone(130, 'sawtooth', 0.2, 0.15, 0.05);
      // Haptics: Long heavy buzz
      if ('vibrate' in navigator) {
        navigator.vibrate(250);
      }
    },

    // Game Win Arpeggio
    win: () => {
      const notes = [NOTES.C4, NOTES.E4, NOTES.G4, NOTES.C5, NOTES.E5, NOTES.G5, NOTES.C6];
      notes.forEach((freq, idx) => {
        playTone(freq, 'sine', 0.2, 0.1, idx * 0.08); // Arpeggio up
      });
      // Final chord
      playTone(NOTES.C4, 'sine', 0.6, 0.1, 0.6);
      playTone(NOTES.E4, 'sine', 0.6, 0.1, 0.6);
      playTone(NOTES.G4, 'sine', 0.6, 0.1, 0.6);
      playTone(NOTES.C6, 'sine', 0.6, 0.1, 0.6);
      // Haptics: Celebration rhythm
      if ('vibrate' in navigator) {
        navigator.vibrate([100, 50, 100, 50, 100, 50, 300]);
      }
    },

    // Game Lose sad descent
    lose: () => {
      playTone(NOTES.D4, 'triangle', 0.3, 0.15, 0);
      playTone(NOTES.C4, 'triangle', 0.3, 0.15, 0.2);
      playTone(NOTES.B4 / 2, 'triangle', 0.3, 0.15, 0.4); // A3 roughly
      playTone(NOTES.G4 / 2, 'triangle', 0.6, 0.15, 0.6); // G3 roughly
      // Haptics: Slow, fading buzz
      if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200, 100, 400]);
      }
    }
  };

  return soundEffects;
};
