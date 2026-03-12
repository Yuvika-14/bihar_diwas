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
      <div className="flex justify-between items-center mb-8 px-2 font-orbitron">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 bg-premium-800/80 backdrop-blur-xl px-8 py-3 rounded-md border-t-2 border-l-2 border-premium-accent/50 shadow-[4px_4px_0px_rgba(0,255,204,0.3)]"
        >
          <span className="text-xl font-bold tracking-[0.2em] uppercase text-premium-accent">
            Question <span className="text-white text-2xl">{currentQuestionIndex + 1}</span><span className="text-white/40">/{questions.length}</span>
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-3 px-6 py-3 rounded-md border-t-2 border-l-2 shadow-[4px_4px_0px_rgba(0,0,0,0.5)] transition-all duration-300 ${timeLeft <= 5 ? 'bg-red-900/80 border-red-500 shadow-[4px_4px_0px_rgba(255,0,0,0.5)] text-red-100 animate-pulse' : 'bg-premium-800/80 border-premium-accent/50 shadow-[4px_4px_0px_rgba(0,255,204,0.3)] text-white/90'}`}
        >
          <Clock className={`w-5 h-5 ${timeLeft <= 5 ? 'text-red-400' : 'text-premium-accent'}`} />
          <span className="text-2xl font-bold w-12 text-center tracking-wider">
            {timeLeft}s
          </span>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 flex-1 min-h-0 items-stretch">
        
        {/* Left Side: Premium Image Display */}
        <motion.div 
          key={`img-container-${currentQuestion.id}`}
          initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[40vh] lg:h-full rounded-[2.5rem] p-2 glass-card group flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem] pointer-events-none"></div>
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-black/50 shadow-inner">
             <div className="absolute inset-0 bg-premium-900 animate-pulse -z-10"></div>
             <img 
              src={currentQuestion.image} 
              alt="Heritage Site" 
              className="w-full h-full object-cover transform transition-transform duration-[20s] ease-linear group-hover:scale-[1.15]"
            />
            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-transparent opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#05050A]/30 to-transparent"></div>
          </div>
        </motion.div>

        {/* Right Side: Question and Options */}
        <div className="flex flex-col justify-center gap-4 z-10 py-2 h-[45vh] lg:h-full overflow-y-auto pr-2 custom-scrollbar scroll-smooth">
          <motion.div
            key={`q-${currentQuestion.id}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="font-rajdhani"
          >
            <div className="mb-2 text-arcade-pink flex items-center gap-2">
               <span className="uppercase tracking-[0.3em] text-sm font-bold animate-pulse">New Objective</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold leading-snug text-white shadow-black/50 drop-shadow-2xl uppercase">
              {currentQuestion.question}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-3 lg:gap-4 min-h-0">
            <AnimatePresence mode="wait">
              {currentQuestion.options.map((option, index) => {
                let itemStatusClass = "arcade-btn text-white";
                let StatusIcon = null;

                if (selectedAnswer !== null) {
                  if (option === currentQuestion.correctAnswer) {
                    itemStatusClass = "bg-[#00FFCC] text-black border-white shadow-[0_0_30px_rgba(0,255,204,0.6)] font-bold translate-y-[2px] translate-x-[2px] border-b-2 border-r-2";
                    StatusIcon = <CheckCircle2 className="w-8 h-8 text-black" />;
                  } else if (option === selectedAnswer) {
                    itemStatusClass = "bg-[#FF00FF] text-white border-white shadow-[0_0_30px_rgba(255,0,255,0.6)] font-bold translate-y-[2px] translate-x-[2px] border-b-2 border-r-2";
                    StatusIcon = <XCircle className="w-8 h-8 text-white" />;
                  } else {
                    itemStatusClass = "bg-premium-800 opacity-30 scale-[0.98] border-premium-accent/20"; 
                  }
                }

                return (
                  <motion.button
                    key={option}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.5, type: "spring", stiffness: 100 }}
                    disabled={selectedAnswer !== null}
                    onMouseEnter={() => {
                        if (selectedAnswer === null) playSound('hover');
                    }}
                    onClick={() => handleAnswerClick(option)}
                    className={`relative overflow-hidden flex items-center justify-between w-full p-4 lg:p-6 text-left group transition-all duration-300 ${
                      selectedAnswer === null ? 'arcade-btn' : `p-4 lg:p-6 rounded-md border-b-4 border-r-4 ${itemStatusClass}`
                    }`}
                  >
                    <span className="text-xl lg:text-2xl tracking-widest z-10 transition-colors uppercase font-rajdhani font-bold flex-1">{option}</span>
                    {StatusIcon && <div className="z-10 bg-black/20 rounded-full p-1">{StatusIcon}</div>}

                    {/* Shimmer effect inside button on hover when active */}
                    {selectedAnswer === null && (
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    )}
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </div>
          
          <AnimatePresence>
            {selectedAnswer === 'TIMEOUT' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="mt-2 text-center text-red-400 font-medium text-xl flex items-center justify-center gap-3 bg-red-500/10 p-4 rounded-xl border border-red-500/20 backdrop-blur-md"
              >
                <Clock className="w-6 h-6 animate-pulse"/> Time has expired. Here is the correct answer.
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
      
      {/* Retro XP Bar at bottom */}
      <div className="fixed bottom-0 left-0 w-full h-3 bg-[#0a0a14] border-t-2 border-premium-accent/30 flex shadow-[0_-5px_20px_rgba(0,255,204,0.1)]">
         <motion.div 
            className="h-full bg-gradient-to-r from-premium-accent via-[#00FFCC] to-white"
            initial={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}
            animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
         >
           {/* Scanline effect over the bar */}
           <div className="w-full h-full bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACAQMAAACzO1S7AAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObb/QAAABJJREFUCNdjYGD4/wDE4P8BAQAZfAP9u981uQAAAABJRU5ErkJggg==')] opacity-30 mix-blend-overlay"></div>
         </motion.div>
      </div>

    </div>
  );
};

export default QuizScreen;
