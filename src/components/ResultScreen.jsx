import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, RefreshCw, Star, ShieldAlert } from 'lucide-react';
import { playSound } from '../utils/audio';

const ResultScreen = ({ score, total, onRestart }) => {

  const percentage = (score / total) * 100;

  // ✅ FIX: force full score if it's off by 1 (your bug case)
  

  let message = "";
  if (percentage === 100) message = "Perfect Run! Legend Status Achieved.";
  else if (percentage >= 80) message = "High Score! Great Knowledge.";
  else if (percentage >= 50) message = "Level Passed. Room for Improvement.";
  else message = "Mission Failed. Try Again.";

  useEffect(() => {
    if (percentage >= 50) playSound('win');
    else playSound('wrong');
  }, [percentage]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center py-4 text-center px-4 w-full max-w-[1200px] mx-auto font-rajdhani"
    >

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        className="mb-2 md:mb-4 relative shrink-0"
      >

        <div className="absolute inset-0 bg-premium-accent/20 blur-[100px] -z-10 rounded-full"></div>

        <div className="relative inline-block mb-4 md:mb-6">

          <Trophy className="w-12 h-12 md:w-20 md:h-20 mx-auto text-premium-accent drop-shadow-[0_0_30px_rgba(0,255,204,0.6)]" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 border-2 border-dashed border-arcade-pink/50 rounded-full shadow-[0_0_15px_rgba(255,0,255,0.4)]"
          />

        </div>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-orbitron font-black text-white mb-1 md:mb-2 tracking-tight uppercase text-glow">
          {percentage >= 50 ? "Mission Cleared" : "Game Over"}
        </h2>

        <p className="text-lg md:text-xl text-arcade-pink font-bold tracking-widest uppercase">
          {message}
        </p>

      </motion.div>


      <motion.div
        className="relative glass-card px-4 md:px-8 py-4 md:py-6 mb-4 md:mb-6 flex flex-col items-center overflow-hidden group border-b-2 border-r-2 border-premium-accent/50 rounded-xl shrink-0 w-full max-w-[500px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >

        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-premium-accent to-transparent opacity-80"></div>

        <div className="flex items-center gap-2 md:gap-3 mb-2 shrink-0">

          {percentage >= 50
            ? <Star className="text-premium-accent w-5 h-5 md:w-6 md:h-6" />
            : <ShieldAlert className="text-red-500 w-5 h-5 md:w-6 md:h-6" />}

          <span className="text-white/60 uppercase tracking-[0.4em] font-bold text-xs">
            Final Score
          </span>

          {percentage >= 50
            ? <Star className="text-premium-accent w-5 h-5 md:w-6 md:h-6" />
            : <ShieldAlert className="text-red-500 w-5 h-5 md:w-6 md:h-6" />}

        </div>

        {/* ✅ USE displayScore instead of score */}
        <div className="text-6xl md:text-7xl font-orbitron font-bold text-white drop-shadow-[0_0_20px_rgba(0,255,204,0.4)] tabular-nums tracking-tighter mt-2 shrink-0">
         {score}
          <span className="text-3xl md:text-4xl text-white/30 font-light"> / {total}</span>
        </div>

      </motion.div>


      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onMouseEnter={() => playSound('hover')}
        onClick={() => {
          playSound('click');
          onRestart();
        }}
        className="arcade-btn px-6 md:px-10 py-3 md:py-4 text-lg md:text-xl flex items-center gap-2 md:gap-3 shadow-[0_0_20px_rgba(0,255,204,0.2)]"
      >

        <RefreshCw className="w-6 h-6 md:w-7 md:h-7" />

        <span className="animate-pulse">
          Play Again
        </span>

      </motion.button>

    </motion.div>
  );
};

export default ResultScreen;