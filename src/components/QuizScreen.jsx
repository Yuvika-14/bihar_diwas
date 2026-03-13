import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Clock, MapPin, Sparkles } from 'lucide-react';
import { playSound } from '../utils/audio';

const QuizScreen = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (timeLeft === 0) {
      handleTimeOut();
      return;
    }

    if (selectedAnswer !== null) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, selectedAnswer]);

  const handleTimeOut = () => {
    if (isAnimating || selectedAnswer !== null) return;
    
    playSound('timeout');
    setSelectedAnswer('TIMEOUT');
    setIsAnimating(true);
    
    setTimeout(() => {
      moveToNextQuestion();
    }, 2500);
  };

  const handleAnswerClick = (option) => {
    if (isAnimating || selectedAnswer !== null) return;

    setSelectedAnswer(option);
    setIsAnimating(true);

    if (option === currentQuestion.correctAnswer) {
      playSound('correct');
      setScore(prev => prev + 1);
    } else {
      playSound('wrong');
    }

    setTimeout(() => {
      moveToNextQuestion();
    }, 2500);
  };

  const moveToNextQuestion = () => {
    // Calculate final score accurately here before completing
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const currentScore = score + (isCorrect ? 1 : 0);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnimating(false);
      setTimeLeft(15);
      // Ensure the internal score state updates properly for the next round
      if (isCorrect) setScore(currentScore);
    } else {
      onComplete(currentScore);
    }
  };

  return (
    <div className="flex flex-col h-full w-full mx-auto py-2">
      
      {/* Header: Progress and Timer */}
      <div className="flex justify-between items-center mb-6 md:mb-8 px-2 font-orbitron">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 md:gap-3 bg-premium-800/80 backdrop-blur-xl px-4 md:px-8 py-2 md:py-3 rounded-md border-t-2 border-l-2 border-premium-accent/50 shadow-[4px_4px_0px_rgba(0,255,204,0.3)]"
        >
          <span className="text-sm md:text-xl font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase text-premium-accent">
            Q<span className="hidden md:inline">UESTION</span> <span className="text-white text-lg md:text-2xl">{currentQuestionIndex + 1}</span><span className="text-white/40 text-xs md:text-base">/{questions.length}</span>
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-2 md:gap-3 px-3 md:px-6 py-2 md:py-3 rounded-md border-t-2 border-l-2 shadow-[4px_4px_0px_rgba(0,0,0,0.5)] transition-all duration-300 ${timeLeft <= 5 ? 'bg-red-900/80 border-red-500 shadow-[4px_4px_0px_rgba(255,0,0,0.5)] text-red-100 animate-pulse' : 'bg-premium-800/80 border-premium-accent/50 shadow-[4px_4px_0px_rgba(0,255,204,0.3)] text-white/90'}`}
        >
          <Clock className={`w-4 h-4 md:w-5 md:h-5 ${timeLeft <= 5 ? 'text-red-400' : 'text-premium-accent'}`} />
          <span className="text-lg md:text-2xl font-bold w-6 md:w-12 text-center tracking-wider">
            {timeLeft}s
          </span>
        </motion.div>
      </div>

      {/* Main Content Area - Authentic KBC Layout */}
      <div className="flex flex-col flex-1 min-h-0 items-center justify-start w-full max-w-5xl mx-auto pb-4 px-2 md:px-4 mt-2">
        
        {/* Top: Image Display */}
        <motion.div 
          key={`img-container-${currentQuestion.id}`}
          initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative aspect-square max-w-[90vw] h-[34vh] md:h-[38vh] mb-4 flex items-center justify-center shrink-0 mx-auto"
        >
          {/* Subtle glow behind image */}
          <div className="absolute inset-0 bg-premium-accent/10 blur-[50px] rounded-full -z-10"></div>
          
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.5)]">
            <img 
              src={currentQuestion.image} 
              alt="Heritage Site" 
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay at bottom of image for blending */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-premium-900 to-transparent"></div>
          </div>
        </motion.div>

        {/* Bottom Section: Question & Options aligned to bottom */}
        <div className="w-full flex flex-col justify-end gap-3 mt-auto relative z-10 shrink-0">
          
          {/* Central Connecting Line (Horizontal line behind everything) */}
          <div className="absolute left-0 right-0 top-[calc(50%-2rem)] h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-[-1] opacity-70 flex"></div>
          
          {/* Question Box */}
          <motion.div
            key={`q-${currentQuestion.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="w-full flex justify-center relative"
          >
             {/* Box Wrapper for Gold Border effect using clip-path */}
             <div className="relative w-full max-w-3xl p-[2px] bg-gradient-to-r from-[#B8860B] via-[#FFE4B5] to-[#B8860B] kbc-clip shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                {/* Inner Content Box */}
                <div className="w-full h-full bg-gradient-to-b from-[#0F172A] to-[#1E3A8A] kbc-clip py-3 px-8 md:px-16 text-center flex items-center justify-center min-h-[70px] md:min-h-[85px]">
                  <h2 className="text-base md:text-xl lg:text-2xl font-bold leading-relaxed text-white font-rajdhani tracking-wide">
                    {currentQuestion.question}
                  </h2>
                </div>
             </div>
          </motion.div>

          {/* Options Grid (2x2) */}
          <div className="w-full self-center grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 lg:gap-x-12 relative">

            <AnimatePresence mode="wait">
              {currentQuestion.options.map((option, index) => {
                const label = ['A', 'B', 'C', 'D'][index];
                
                // Colors state logic
                let wrapperBg = "bg-gradient-to-r from-[#B8860B] via-[#FFE4B5] to-[#B8860B]"; // Gold border
                let innerBg = "bg-gradient-to-b from-[#0F172A] to-[#1E3A8A]"; // Deep Blue background
                let textColor = "text-white";
                let labelColor = "text-[#FBBF24]"; // Golden yellow label
                let StatusIcon = null;

                if (selectedAnswer !== null) {
                  if (option === currentQuestion.correctAnswer) {
                    wrapperBg = "bg-[#22C55E]"; // Solid Green border
                    innerBg = "bg-[#16A34A]"; // Solid Green background
                    textColor = "text-white";
                    labelColor = "text-white";
                    StatusIcon = <CheckCircle2 className="w-5 h-5 text-white shrink-0 ml-2" />;
                  } else if (option === selectedAnswer) {
                    wrapperBg = "bg-[#F59E0B]"; // Gold/Orange border
                    innerBg = "bg-[#D97706]"; // Solid Orange/Gold background for WRONG
                    textColor = "text-white";
                    labelColor = "text-white";
                    StatusIcon = <XCircle className="w-5 h-5 text-white shrink-0 ml-2" />;
                  } else {
                     // Dim unselected options
                     innerBg = "bg-[#0F172A] opacity-40";
                     wrapperBg = "bg-[#B8860B] opacity-40";
                     labelColor = "text-[#FBBF24]/50";
                  }
                }

                return (
                  <motion.div
                    key={option}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    className="relative w-full flex items-center justify-center group"
                  >
                     {/* Option Wrapper for Gold Border */}
                     <div className={`w-full p-[2px] ${wrapperBg} kbc-clip-option shadow-lg transition-colors duration-300`}>
                       <button
                          disabled={selectedAnswer !== null}
                          onMouseEnter={() => {
                              if (selectedAnswer === null) playSound('hover');
                          }}
                          onClick={() => handleAnswerClick(option)}
                          className={`relative w-full h-full kbc-clip-option ${innerBg} ${selectedAnswer === null ? 'hover:bg-[#FBBF24] hover:text-black hover:bg-none' : ''} py-2 md:py-3 px-6 md:px-12 text-left transition-all duration-300 flex items-center justify-between`}
                        >
                          <div className={`flex items-center gap-2 md:gap-3 w-full ${textColor} ${selectedAnswer === null ? 'group-hover:text-black' : ''}`}>
                            <span className={`text-base md:text-lg font-black font-orbitron ${labelColor} ${selectedAnswer === null ? 'group-hover:text-black' : ''} transition-colors whitespace-nowrap`}>
                               {label}:
                            </span>
                            <span className="text-sm md:text-base font-semibold font-sans leading-snug line-clamp-2">
                               {option}
                            </span>
                          </div>
                          {StatusIcon && <div className="z-10 shrink-0 ml-2">{StatusIcon}</div>}
                        </button>
                     </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          
          <AnimatePresence>
            {selectedAnswer === 'TIMEOUT' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 50 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-x-0 bottom-4 md:bottom-10 mx-auto w-max z-50 text-center text-white font-bold text-lg md:text-xl flex items-center justify-center gap-3 bg-red-600/95 backdrop-blur-md p-3 px-6 md:px-8 rounded-full shadow-[0_10px_30px_rgba(220,38,38,0.7)] border border-red-400/50"
              >
                <Clock className="w-5 h-5 md:w-6 md:h-6 animate-pulse"/> 
                <span>Time expired. The correct answer is highlighted.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;
