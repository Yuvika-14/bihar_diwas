import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';
import { playSound } from '../utils/audio';

const QuizScreen = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (timeLeft === 0) {
      handleTimeOut();
      return;
    }

    if (selectedAnswer !== null) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) {
          if (prev <= 5) {
            playSound('fastTick');
            setTimeout(() => playSound('fastTick'), 500);
          } else {
            playSound('tick');
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, selectedAnswer]);

  const handleTimeOut = () => {
    if (isAnimating || selectedAnswer !== null) return;

    playSound('timeout');
    setSelectedAnswer('TIMEOUT');
    setIsAnimating(true);

    setTimeout(() => {
      moveToNextQuestion(score);
    }, 2500);
  };

  const handleAnswerClick = (option) => {
    if (isAnimating || selectedAnswer !== null) return;

    setSelectedAnswer(option);
    setIsAnimating(true);

    let nextScore = score;
    if (option === currentQuestion.correctAnswer) {
      playSound('correct');
      setScore((prev) => prev + 1);
      nextScore = score + 1;
    } else {
      playSound('wrong');
    }

    setTimeout(() => {
      moveToNextQuestion(nextScore);
    }, 2500);
  };

 const moveToNextQuestion = (finalScore = score) => {
  if (currentQuestionIndex < questions.length - 1) {
    setCurrentQuestionIndex((prev) => prev + 1);
    setSelectedAnswer(null);
    setIsAnimating(false);
    setTimeLeft(10);
  } else {
    // ✅ use latest score directly
    onComplete(finalScore);
  }
};

  return (
    <div className="flex flex-col h-full w-full max-w-[1800px] mx-auto py-2 px-2 sm:px-4 md:px-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-4 md:mb-8 px-2 font-orbitron">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 md:gap-3 bg-premium-800/80 backdrop-blur-xl px-4 md:px-8 py-2 md:py-3 rounded-md border-t-2 border-l-2 border-premium-accent/50 shadow-[4px_4px_0px_rgba(0,255,204,0.3)]"
        >
          <span className="text-sm md:text-xl font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase text-premium-accent">
            Q<span className="hidden md:inline">UESTION</span>{" "}
            <span className="text-white text-lg md:text-2xl">
              {currentQuestionIndex + 1}
            </span>
            <span className="text-white/40 text-xs md:text-base">
              /{questions.length}
            </span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-2 md:gap-3 px-3 md:px-6 py-2 md:py-3 rounded-md border-t-2 border-l-2 shadow-[4px_4px_0px_rgba(0,0,0,0.5)] transition-all duration-300 ${
            timeLeft <= 5
              ? "bg-red-900/80 border-red-500 shadow-[4px_4px_0px_rgba(255,0,0,0.5)] text-red-100 animate-pulse"
              : "bg-premium-800/80 border-premium-accent/50 shadow-[4px_4px_0px_rgba(0,255,204,0.3)] text-white/90"
          }`}
        >
          <Clock
            className={`w-4 h-4 md:w-5 md:h-5 ${
              timeLeft <= 5 ? "text-red-400" : "text-premium-accent"
            }`}
          />
          <span className="text-lg md:text-2xl font-bold w-6 md:w-12 text-center tracking-wider">
            {timeLeft}s
          </span>
        </motion.div>
      </div>

      {/* Main Area */}
      <div className="flex flex-col flex-1 min-h-0 items-center justify-start w-full max-w-[1400px] mx-auto pb-4 px-2 md:px-4">

        {/* Image */}
        <motion.div
          key={`img-container-${currentQuestion.id}`}
          initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full max-w-[600px] h-[20vh] sm:h-[25vh] md:h-[28vh] lg:h-[30vh] mb-2 md:mb-4 flex items-center justify-center shrink-0 mx-auto"
        >
          <div className="absolute inset-0 bg-premium-accent/10 blur-[50px] rounded-full -z-10"></div>

          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.5)]">
            <img
              src={currentQuestion.image}
              alt="Heritage Site"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-premium-900 to-transparent"></div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="w-full flex flex-col justify-end gap-3 mt-auto relative z-10 shrink-0">

          {/* Question */}
          <motion.div
            key={`q-${currentQuestion.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-full flex justify-center relative"
          >
            <div className="relative w-full max-w-[900px] p-[2px] bg-gradient-to-r from-[#B8860B] via-[#FFE4B5] to-[#B8860B] kbc-clip shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              <div className="w-full h-full bg-gradient-to-b from-[#0F172A] to-[#1E3A8A] kbc-clip py-2 md:py-3 px-6 md:px-12 text-center flex items-center justify-center min-h-[50px] md:min-h-[60px]">
                <h2 className="text-base md:text-xl lg:text-2xl font-bold leading-relaxed text-white font-rajdhani tracking-wide">
                  {currentQuestion.question}
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Options */}
          <div className="w-full max-w-[1100px] self-center grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 lg:gap-x-12">

            <AnimatePresence mode="wait">
              {currentQuestion.options.map((option, index) => {

                const label = ["A", "B", "C", "D"][index];

                let wrapperBg = "bg-gradient-to-r from-[#B8860B] via-[#FFE4B5] to-[#B8860B]";
                let innerBg = "bg-gradient-to-b from-[#0F172A] to-[#1E3A8A]";
                let textColor = "text-white";
                let labelColor = "text-[#FBBF24]";
                let StatusIcon = null;

                if (selectedAnswer !== null) {
                  if (option === currentQuestion.correctAnswer) {
                    wrapperBg = "bg-[#22C55E]";
                    innerBg = "bg-[#16A34A]";
                    labelColor = "text-white";
                    StatusIcon = <CheckCircle2 className="w-5 h-5 text-white ml-2" />;
                  } else if (option === selectedAnswer) {
                    wrapperBg = "bg-[#F59E0B]";
                    innerBg = "bg-[#D97706]";
                    labelColor = "text-white";
                    StatusIcon = <XCircle className="w-5 h-5 text-white ml-2" />;
                  } else {
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
                    className="relative w-full flex items-center justify-center"
                  >
                    <div className={`w-full p-[2px] ${wrapperBg} kbc-clip-option shadow-lg transition-colors duration-300`}>
                      <button
                        disabled={selectedAnswer !== null}
                        onMouseEnter={() => {
                          if (selectedAnswer === null) playSound("hover");
                        }}
                        onClick={() => handleAnswerClick(option)}
                        className={`relative w-full h-full kbc-clip-option ${innerBg} py-1.5 md:py-2 px-4 md:px-8 text-left transition-all duration-300 flex items-center justify-between`}
                      >
                        <div className={`flex items-center gap-2 md:gap-3 w-full ${textColor}`}>
                          <span className={`text-base md:text-lg font-black font-orbitron ${labelColor}`}>
                            {label}:
                          </span>
                          <span className="text-sm md:text-base font-semibold font-sans leading-snug line-clamp-2">
                            {option}
                          </span>
                        </div>
                        {StatusIcon}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </div>
  );
};

export default QuizScreen;