import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import { questionSets, shuffle } from './data/questions';

function App() {
  const [gameState, setGameState] = useState('start'); // start, playing, result
  const [score, setScore] = useState(0);
  const [selectedSet, setSelectedSet] = useState(null);

  const preloadImages = (questions) => {
  questions.forEach((q) => {
    const img = new Image();
    img.src = q.image;
  });
};

  const startQuiz = () => {
    // Pick a random set out of the 4
    const randomSetIndex = Math.floor(Math.random() * questionSets.length);
    const chosenSet = questionSets[randomSetIndex];

    
    // Shuffle the 10 questions within that set without mutating the original
    const shuffledQuestions = shuffle([...chosenSet.questions]);
         preloadImages(shuffledQuestions);
    
    setSelectedSet({ title: chosenSet.title, questions: shuffledQuestions });
    setScore(0);
    setGameState('playing');
  };

  const handleQuizEnd = (finalScore) => {
    setScore(finalScore);
    setGameState('result');
  };

  const restartQuiz = () => {
    startQuiz();
  };

  return (
    <div className="min-h-screen bg-[#05050A] text-white overflow-x-hidden overflow-y-auto relative font-sans select-none">
      
      {/* High-End Cinematic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep space radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,#1a103c_0%,#05050a_70%)] opacity-80"></div>
        
        {/* Animated glowing orbs */}
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-premium-accent/10 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.3, 1] }} 
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-900/20 rounded-full blur-[150px]"
        />
        
        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      </div>
    
      <div className="relative z-10 w-full min-h-[100dvh] flex flex-col items-center justify-center p-2 sm:p-4 md:p-6">
        <AnimatePresence mode="wait">
          {gameState === 'start' && (
            <motion.div key="start" className="w-full max-w-5xl h-full flex items-center justify-center" exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }} transition={{ duration: 0.5 }}>
              <StartScreen onStart={startQuiz} />
            </motion.div>
          )}
          
          {gameState === 'playing' && selectedSet && (
            <motion.div key="playing" className="w-full max-w-7xl h-full" initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
               <QuizScreen questions={selectedSet.questions} levelTitle={selectedSet.title} onComplete={handleQuizEnd} />
            </motion.div>
          )}

          {gameState === 'result' && selectedSet && (
            <motion.div key="result" className="w-full max-w-3xl h-full flex items-center justify-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
              <ResultScreen score={score} total={selectedSet.questions.length} levelTitle={selectedSet.title} onRestart={restartQuiz} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
