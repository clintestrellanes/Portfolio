import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SplitText } from './SplitText';
import { ShinyText } from './ShinyText';
import formal from '../assets/formal.png';

interface HeroSectionProps {
  onScrollToNext: () => void;
}

// Ultra-smooth exponential deceleration curve (Apple / Awwwards design feel)
const TRANSITION_EASE = [0.16, 1, 0.3, 1] as const;
const EXIT_EASE = [0.32, 0, 0.67, 0] as const;

const mainContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: TRANSITION_EASE,
    },
  },
};

const metaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: TRANSITION_EASE,
    },
  },
};

const portraitVariants = {
  hidden: { opacity: 0, x: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: TRANSITION_EASE,
    },
  },
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToNext }) => {
  const [phase, setPhase] = useState<'welcome' | 'main'>('welcome');
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    if (phase === 'welcome') {
      // Graceful fallback safety timer in case fonts/tab delay letter completion
      const timer = setTimeout(() => {
        setPhase('main');
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [phase, replayKey]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] text-[#111111] px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 overflow-hidden select-none"
    >
      {/* Subtle architectural background guides */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-6 sm:px-12 lg:px-16 opacity-30">
        <div className="w-px h-full bg-neutral-200" />
        <div className="w-px h-full bg-neutral-200 hidden md:block" />
        <div className="w-px h-full bg-neutral-200" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col justify-center min-h-[420px] sm:min-h-[500px]">
        <AnimatePresence mode="wait">
          {phase === 'welcome' ? (
            <motion.div
              key={`welcome-${replayKey}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, ease: TRANSITION_EASE } }}
              exit={{
                opacity: 0,
                y: -22,
                scale: 0.98,
                transition: { duration: 0.35, ease: EXIT_EASE },
              }}
              className="flex flex-col items-center justify-center text-center py-20"
            >
              <SplitText
                key={`split-welcome-${replayKey}`}
                text="Welcome"
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-neutral-950 font-display"
                delay={45}
                duration={0.5}
                threshold={0}
                rootMargin="0px"
                onLetterAnimationComplete={() => {
                  setTimeout(() => setPhase('main'), 500);
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="main-hero"
              variants={mainContainerVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full flex items-center min-h-[400px] sm:min-h-[480px] md:min-h-[540px] py-8 sm:py-12"
            >
              {/* Background Portrait: Smoothly fades and glides in */}
              <motion.div
                variants={portraitVariants}
                className="absolute right-[-10%] sm:right-[-4%] md:right-0 bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 w-56 sm:w-72 md:w-[380px] lg:w-[460px] xl:w-[500px] pointer-events-none select-none z-0 flex justify-end opacity-35 sm:opacity-65 md:opacity-95"
              >
                <img
                  src={formal}
                  alt="Clint Jay C. Estrellanes"
                  className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] md:max-h-[85vh] object-contain object-bottom md:object-right"
                />
              </motion.div>

              {/* Foreground Layer: Staggered Heading, Name, and Year */}
              <div className="relative z-10 flex flex-col items-start text-left max-w-full md:max-w-2xl lg:max-w-3xl">
                <motion.h1
                  variants={titleVariants}
                  className="text-5xl sm:text-7xl md:text-8xl lg:text-[130px] xl:text-[155px] font-extrabold tracking-tighter text-neutral-950 leading-[0.9] font-display"
                >
                  Portfolio.
                </motion.h1>

                <motion.div
                  variants={metaVariants}
                  className="mt-3 sm:mt-5 pt-1 flex flex-wrap items-center gap-2 sm:gap-3 text-left"
                >
                  <ShinyText
                    text="Clint Jay C. Estrellanes"
                    speed={3}
                    color="#171717"
                    shineColor="#e4e4e7"
                    spread={120}
                    className="text-neutral-950 text-base sm:text-xl md:text-2xl font-bold tracking-tight cursor-default"
                  />
                  <span className="text-neutral-300 font-mono select-none hidden sm:inline">•</span>
                  <div className="text-base sm:text-xl md:text-2xl font-extrabold tracking-tight text-neutral-950 font-display">
                    2026
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;