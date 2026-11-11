import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ClothFoldingPolo } from './ClothFoldingPolo';
import { FabricWave3D } from './FabricWave3D';
import { BNIMemberSlide } from './BNIMemberSlide';

interface AboutHeroProps {
  onOpenQuote?: () => void;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ onOpenQuote }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Carousel State (0 = Apparel Solutions / Polo, 1 = BNI Tycoon Erode)
  const [currentSlide, setCurrentSlide] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('slide') === 'bni' || params.get('slide') === '1') {
        return 1;
      }
    }
    return 0;
  });
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = 2;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (idx: number) => {
    setDirection(idx > currentSlide ? 1 : -1);
    setCurrentSlide(idx);
  };

  // Autoplay timer (7s cycle, pauses on user hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Scroll Progress binding
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const handleScrollToStory = (e: React.MouseEvent) => {
    e.preventDefault();
    const storySection = document.getElementById('our-story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenQuote) {
      onOpenQuote();
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? -40 : 40,
      opacity: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section
      ref={heroRef}
      id="about-hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full h-[100svh] min-h-[100svh] max-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#FAF5F2] select-none"
      aria-label="TeesZone About Us - Branded Apparel Solutions & BNI Tycoon Erode"
    >
      {/* =========================================================================
          BACKGROUND: LUXURIOUS CREAM SILK DRAPERY & STUDIO LIGHTING
          - Continuous & persistent across all carousel slides
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Ambient Studio Lighting Glow */}
        <div
          className="absolute -top-32 left-1/3 w-[700px] h-[700px] rounded-full bg-radial from-white via-[#FFF9F6]/80 to-transparent blur-3xl opacity-85"
          aria-hidden="true"
        />

        {/* Soft Radial Glow behind Right Visual Element */}
        <div
          className="absolute top-1/4 right-0 w-[650px] h-[650px] rounded-full bg-radial from-white via-[#FCF2EE]/70 to-transparent blur-3xl opacity-80"
          aria-hidden="true"
        />

        {/* Diagonal Cream Silk Drapery Folds (Entering from Top-Left) */}
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-[600px] opacity-45 pointer-events-none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="silkDrapeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#F7ECE7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#EFE1D9" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="silkDrapeGrad2" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#F9EFEA" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#EFE3DC" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#EAE0D9" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 C380,80 620,240 850,300 C1080,360 1320,180 1440,220 L1440,0 L0,0 Z"
            fill="url(#silkDrapeGrad1)"
          />
          <path
            d="M0,40 C320,140 540,320 780,380 C1040,440 1280,240 1440,280 L1440,0 L0,0 Z"
            fill="url(#silkDrapeGrad2)"
          />
        </svg>
      </div>

      {/* =========================================================================
          CAROUSEL SLIDES CONTAINER WITH ANIMATE PRESENCE
          ========================================================================= */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {currentSlide === 0 ? (
            /* ===================================================================
               SLIDE 1: BRANDED APPAREL SOLUTIONS & 3D POLO SHIRT
               =================================================================== */
            <motion.div
              key="slide-apparel"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full flex flex-col justify-center"
            >
              {/* DESKTOP T-SHIRT VISUAL */}
              <div className="hidden lg:flex absolute right-0 bottom-[-18px] xl:bottom-[-22px] 2xl:bottom-[-28px] z-10 w-[52vw] xl:w-[54vw] max-w-[880px] xl:max-w-[980px] 2xl:max-w-[1100px] justify-end items-end pointer-events-none">
                <ClothFoldingPolo
                  className="w-full h-full flex justify-end items-end"
                  imgClassName="h-[84svh] xl:h-[88svh] 2xl:h-[90svh] max-h-[840px] xl:max-h-[920px] 2xl:max-h-[1050px] w-auto max-w-none object-contain object-right-bottom"
                />
              </div>

              {/* CONTENT CONTAINER */}
              <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center pt-0 lg:pt-24 xl:pt-28 pb-0 lg:pb-16 h-full">
                {/* 1. DESKTOP VIEW */}
                <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 xl:col-span-7 space-y-5 xl:space-y-6 text-left">
                    <div className="space-y-3.5">
                      <motion.h1
                        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[50px] font-heading font-medium leading-[1.15] tracking-tight"
                      >
                        <span className="block text-[#1A1D20]">
                          Your Trusted Partner in
                        </span>
                        <span className="block text-[#80011F] mt-1">
                          Branded Apparel Solutions
                        </span>
                      </motion.h1>

                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 54, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                        className="h-[2px] bg-[#80011F] rounded-full"
                      />
                    </div>

                    <motion.p
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.75, delay: 0.3, ease: 'easeOut' }}
                      className="text-base sm:text-lg xl:text-[19px] text-[#4A4D52] font-normal leading-relaxed max-w-lg"
                    >
                      Customised T-Shirts, Polo T-Shirts and<br />
                      Corporate Uniforms for Businesses.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                      className="pt-2"
                    >
                      <a
                        href="#our-story"
                        onClick={handleScrollToStory}
                        className="inline-flex items-center gap-3 px-8 py-3.5 xl:px-9 xl:py-4 rounded-full bg-gradient-to-r from-[#80011F] via-[#6B011A] to-[#570018] hover:from-[#6B011A] hover:to-[#450013] text-white font-heading font-medium text-sm xl:text-base shadow-[0_6px_20px_rgba(128,1,31,0.25)] hover:shadow-[0_10px_25px_rgba(128,1,31,0.35)] transition-all duration-300 group cursor-pointer"
                      >
                        <span>Know More About Us</span>
                        <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </motion.div>
                  </div>
                  <div className="lg:col-span-5 xl:col-span-5" aria-hidden="true" />
                </div>

                {/* 2. MOBILE VIEW (Viewport Height & Width Optimized, Seamless Connection to Bottom Wave) */}
                <div className="flex lg:hidden flex-col items-center justify-between text-center h-full w-full pt-[64px] xs:pt-[70px] sm:pt-[78px] pb-0 overflow-hidden relative">
                  {/* Top Block: Heading, Description, CTA */}
                  <div className="flex flex-col items-center space-y-2 xs:space-y-2.5 w-full px-4 pt-1 z-10 shrink-0">
                    <motion.h1
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.15 }}
                      className="text-[20px] xs:text-[23px] sm:text-[28px] font-heading font-medium leading-[1.18] tracking-tight text-center max-w-[320px] xs:max-w-[360px] mx-auto"
                    >
                      <span className="block text-[#1A1D20]">
                        Your Trusted Partner in
                      </span>
                      <span className="block text-[#80011F] mt-0.5">
                        Branded Apparel Solutions
                      </span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.65, delay: 0.25 }}
                      className="text-xs xs:text-[13px] sm:text-sm text-[#4A4D52] font-normal leading-snug max-w-[280px] xs:max-w-[320px] text-center mx-auto"
                    >
                      Customised T-Shirts, Polo T-Shirts and<br />
                      Corporate Uniforms for Businesses.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.65, delay: 0.35 }}
                      className="pt-0.5"
                    >
                      <a
                        href="#our-story"
                        onClick={handleScrollToStory}
                        className="inline-flex items-center gap-2 px-5 py-2 xs:px-6 xs:py-2.5 rounded-full bg-gradient-to-r from-[#80011F] via-[#6B011A] to-[#570018] text-white font-heading font-medium text-xs xs:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                      >
                        <span>Know More About Us</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </motion.div>
                  </div>

                  {/* Bottom Visual: T-Shirt Connected Seamlessly Behind Wave */}
                  <motion.div
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-full flex-1 min-h-0 relative z-10 flex justify-center items-end overflow-visible pb-0"
                  >
                    <div className="relative w-full h-full flex justify-center items-end bottom-[-16px] xs:bottom-[-20px]">
                      <ClothFoldingPolo
                        isMobile
                        className="w-full h-full flex justify-center items-end"
                        imgClassName="h-[48svh] xs:h-[50svh] sm:h-[52svh] max-h-[460px] min-h-[290px] w-auto max-w-none object-contain object-bottom translate-x-[-3%]"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ===================================================================
               SLIDE 2: TEESZONE IS A PROUD MEMBER OF BNI TYCOON ERODE
               =================================================================== */
            <motion.div
              key="slide-bni"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full flex flex-col justify-center"
            >
              <BNIMemberSlide
                onScrollToStory={handleScrollToStory}
                onOpenQuote={onOpenQuote}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* =========================================================================
          CAROUSEL CONTROLS: ELEGANT SIDE ARROWS & BOTTOM PILL INDICATORS
          ========================================================================= */}
      {/* Left Navigation Arrow */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-2 sm:left-4 lg:left-6 top-[52%] sm:top-1/2 -translate-y-1/2 z-30 w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-burgundy-800 shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 border border-white/90 backdrop-blur-xs cursor-pointer group"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-2 sm:right-4 lg:right-6 top-[52%] sm:top-1/2 -translate-y-1/2 z-30 w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-burgundy-800 shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 border border-white/90 backdrop-blur-xs cursor-pointer group"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Bottom Center Carousel Indicators (Positioned safely above bottom wave) */}
      <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentSlide === idx
                ? 'w-6 xs:w-7 sm:w-8 h-1.5 xs:h-2 sm:h-2.5 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.35)]'
                : 'w-1.5 xs:w-2 sm:w-2.5 h-1.5 xs:h-2 sm:h-2.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* =========================================================================
          3. BOTTOM 3D FABRIC WAVE (Pure Smooth Vector SVG Curves - In front z-20)
          ========================================================================= */}
      <FabricWave3D scrollYProgress={scrollYProgress} />
    </section>
  );
};
