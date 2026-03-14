import { motion } from 'framer-motion'
import { Play, Link2, CheckCircle2, MousePointerClick } from 'lucide-react'
import { GiIndiaGate, GiStarMedal } from 'react-icons/gi'
import { BsFillLightningFill } from 'react-icons/bs'
import { useAudio } from '../hooks/useAudio'
import { useIdleTimer } from '../hooks/useIdleTimer'

// Floating particle
const Particle = ({ style }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: style.size,
      height: style.size,
      left: style.left,
      bottom: '-20px',
      background: style.color,
      boxShadow: `0 0 ${style.size * 2}px ${style.color}`,
      animation: `starFloat ${style.duration}s linear ${style.delay}s infinite`
    }}
  />
)

// Fewer particles on smaller screens
const particleCount =
  typeof window !== 'undefined' && window.innerWidth < 768 ? 16 : 28

const PARTICLE_CONFIG = Array.from({ length: particleCount }, (_, i) => ({
  size: Math.random() * 5 + 2,
  left: `${Math.random() * 100}%`,
  color: ['#a855f7', '#22d3ee', '#f5a623', '#ec4899', '#4ade80'][i % 5],
  duration: Math.random() * 10 + 8,
  delay: Math.random() * 8
}))

const HOW_TO_STEPS = [
  { icon: <MousePointerClick size={16} color="#a855f7" />, text: 'Drag image handle' },
  { icon: <Link2 size={16} color="#22d3ee" />, text: 'Connect to label' },
  { icon: <CheckCircle2 size={16} color="#4ade80" />, text: 'Match all 5 pairs' }
]

const Startscreen = ({ onStart }) => {
  const { click } = useAudio()
  const isIdle = useIdleTimer(20000)

  const handlePlay = (e) => {
    e.stopPropagation()
    click()
    onStart?.()
  }

  const handleContainerClick = () => {
    if (isIdle) return
  }

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden cursor-pointer"
      onClick={handleContainerClick}
    >
      {/* Idle Screen */}
      {isIdle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center justify-center"
          >
            <GiIndiaGate className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] lg:w-[120px] lg:h-[120px] mb-6 text-[#f5a623]" />

            <h1
              style={{
                fontFamily: 'var(--font-game)',
                fontSize: 'clamp(32px,7vw,80px)',
                color: '#fff'
              }}
            >
              TAP ANYWHERE TO PLAY!
            </h1>

            <p className="text-white/50 mt-3 tracking-widest text-sm sm:text-base">
              2026 BIHAR DIWAS EDITION
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* Particles */}
      {PARTICLE_CONFIG.map((s, i) => (
        <Particle key={i} style={s} />
      ))}

      {/* Radial Glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '80vmin',
          height: '80vmin',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -60%)',
          background: 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 w-full max-w-4xl lg:max-w-5xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2 rounded-full"
          style={{
            background: 'rgba(168,85,247,0.25)',
            border: '2px solid rgba(168,85,247,0.6)'
          }}
        >
          <BsFillLightningFill size={16} color="#d8b4fe" />
          <span className="text-purple-200 tracking-widest font-bold text-xs sm:text-sm">
            2026 KIOSK EDITION
          </span>
          <BsFillLightningFill size={16} color="#d8b4fe" />
        </motion.div>

        {/* Title */}
        <div className="relative">
          <motion.div className="absolute -top-10 -left-8 opacity-40">
            <GiIndiaGate className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] text-[#f5a623]" />
          </motion.div>

          <motion.h1
            className="leading-none mb-2"
            style={{
              fontFamily: 'var(--font-game)',
              fontSize: 'clamp(50px,10vw,140px)',
              color: '#f5a623'
            }}
          >
            बिहार दिवस
          </motion.h1>
        </div>

        <motion.h2
          style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 'clamp(12px,3vw,24px)',
            color: '#22d3ee',
            letterSpacing: '6px'
          }}
        >
          FUN GAME INTERACTIVE
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-6 sm:mt-8 max-w-2xl text-white/80"
          style={{
            fontFamily: 'var(--font-game)',
            fontSize: 'clamp(16px,2.5vw,28px)'
          }}
        >
          Match Bihar's famous landmarks, food & culture! <br />
          Drag items on this touchscreen to connect them.
        </motion.p>

        {/* Steps */}
        <motion.div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          {HOW_TO_STEPS.map((step, i) => (
            <div
              key={i}
              className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1.5px solid rgba(255,255,255,0.15)'
              }}
            >
              {step.icon}
              <span>{step.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Play Button */}
        <motion.div className="relative mt-10 sm:mt-12 lg:mt-16">
          <button
            onClick={handlePlay}
            className="relative flex items-center justify-center gap-4
            w-[260px] h-[70px] sm:w-[340px] sm:h-[90px] lg:w-[420px] lg:h-[110px]
            rounded-full transition-transform hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #f5a623 0%, #d97706 100%)',
              boxShadow: '0 0 30px #f5a623'
            }}
          >
            <div className="bg-[#1a0a05] rounded-full p-2 sm:p-3">
              <Play className="text-yellow-400" size={20} />
            </div>

            <span
              style={{
                fontFamily: 'var(--font-pixel)',
                 color: '#000',
                     fontWeight: 'bold',
                fontSize: 'clamp(16px,2vw,24px)'
              }}
            >
              TAP TO START
            </span>
          </button>
        </motion.div>

        {/* Footer */}
        <motion.div className="mt-8 sm:mt-10 lg:mt-12 flex items-center gap-3 text-white/40 text-sm sm:text-base">
          <GiStarMedal size={20} />
          <span>Complete the challenge to win a prize!</span>
          <GiStarMedal size={20} />
        </motion.div>
      </div>
    </div>
  )
}

export default Startscreen