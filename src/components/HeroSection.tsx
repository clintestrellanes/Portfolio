import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SplitText } from './SplitText';
import { ShinyText } from './ShinyText';

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
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
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
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
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
      className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center bg-[#FAFAFA] text-[#111111] px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 overflow-hidden select-none"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px] md:min-h-[520px]">
        <AnimatePresence mode="wait">
          {phase === 'welcome' ? (
            <motion.div
              key={`welcome-${replayKey}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.45, ease: TRANSITION_EASE } }}
              exit={{
                opacity: 0,
                y: -18,
                transition: { duration: 0.3, ease: EXIT_EASE },
              }}
              className="flex flex-col items-center justify-center text-center py-12 sm:py-20 w-full"
            >
              <SplitText
                key={`split-welcome-${replayKey}`}
                text="Welcome"
                className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-neutral-950 font-display text-center"
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
              className="relative w-full flex flex-col items-center justify-center text-center py-8 sm:py-12"
            >
              <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-full w-full">
                <motion.h1
                  variants={titleVariants}
                  className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[145px] font-extrabold tracking-tighter text-neutral-950 leading-[0.9] font-display text-center break-normal"
                >
                  Portfolio.
                </motion.h1>

                <motion.div
                  variants={metaVariants}
                  className="mt-4 sm:mt-6 pt-1 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center"
                >
                  <ShinyText
                    text="Clint Jay C. Estrellanes"
                    speed={3}
                    color="#171717"
                    shineColor="#e4e4e7"
                    spread={120}
                    className="text-neutral-950 text-sm sm:text-lg md:text-2xl font-bold tracking-tight cursor-default"
                  />
                  <span className="text-neutral-300 font-mono select-none hidden sm:inline">•</span>
                  <div className="text-sm sm:text-lg md:text-2xl font-extrabold tracking-tight text-neutral-950 font-display">
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