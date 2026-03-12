import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles } from 'lucide-react';
import { playSound } from '../utils/audio';

const StartScreen = ({ onStart }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col lg:flex-row items-center justify-center min-h-[80vh] gap-12 lg:gap-20 w-full px-4 lg:px-16"
    >
      
      {/* Left Text Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 max-w-2xl mt-8 lg:mt-0 font-rajdhani">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
            <span className="bg-arcade-pink text-white px-3 py-1 text-xs font-orbitron font-bold uppercase tracking-widest shadow-[0_0_10px_#FF00FF]">Special Event</span>
            <span className="text-premium-accent tracking-[0.2em] uppercase text-sm font-orbitron font-bold">Happy Bihar Diwas</span>
            <div className="w-3 h-3 bg-premium-accent rounded-full animate-pulse shadow-[0_0_10px_#00FFCC]"></div>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-orbitron font-black text-white mb-6 leading-[1.1] tracking-tighter text-glow drop-shadow-2xl uppercase mt-2">
            Bihar <br className="hidden lg:block"/>
            <span className="premium-gradient-text pr-4">Quest</span>
          </h1>
          
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onMouseEnter={() => playSound('hover')}
          onClick={() => {
            playSound('start');
            onStart();
          }}
          className="arcade-btn px-12 py-5 text-2xl mt-4 flex items-center gap-4 group"
        >
           <span className="animate-pulse group-hover:animate-none">Tap to play</span>
        </motion.button>
      </div>

      {/* Right Image Content */}
      <motion.div
        initial={{ opacity: 0, x: 50, filter: "blur(20px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 w-full max-w-xs md:max-w-md lg:max-w-md mb-8 lg:mb-0"
      >
        <div className="relative rounded-[1rem] p-2 glass-card transform transition-transform duration-700 hover:scale-[1.03] hover:-rotate-2 group bg-premium-800/90 border-arcade-pink/50">
          <div className="absolute inset-0 bg-gradient-to-br from-arcade-pink/30 to-premium-accent/30 rounded-[1rem] pointer-events-none -z-10 blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
          <div className="relative overflow-hidden rounded-[0.8rem] shadow-2xl border-[3px] border-arcade-pink">
              <img 
                src="/bihar_quiz_book.png" 
                alt="Bihar Heritage Quiz Book" 
                className="w-full h-auto object-contain"
              />
              {/* Cinematic lighting overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#05050A]/40 via-transparent to-white/10 pointer-events-none mix-blend-overlay"></div>
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default StartScreen;
