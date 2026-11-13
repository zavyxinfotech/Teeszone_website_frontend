import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';

export const GalleryHeroCinematic: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Background subtle parallax scale and shift
  const bgScale = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [1, 1] : [1, 1.12]);
  const bgY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ['0%', '0%'] : ['0%', '15%']);
  const contentY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ['0%', '0%'] : ['0%', '-12%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

  return (
    <section
      ref={sectionRef}
      className="sticky top-0 h-screen w-full overflow-hidden bg-[#0D0B0E] text-white flex flex-col justify-between pt-24 xs:pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 select-none z-10"
      aria-label="Cinematic Gallery Hero"
    >
      {/* 1. Cinematic Background Image with Parallax */}
      <motion.div
        style={{ scale: bgScale, y: bgY }}
        className="absolute inset-0 w-full h-full pointer-events-none will-change-transform z-0"
      >
        <img
          src="/assets/images/gallery/gallery-hero-facility.jpg"
          alt="TeesZone Tiruppur High-Tech Apparel Manufacturing Facility"
          className="w-full h-full object-cover object-center brightness-90"
          loading="eager"
        />
        {/* Dark Gradient Overlay for Supreme Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/30 to-black/70" />
      </motion.div>

      {/* 2. Top Header Frosted Scrim (Keeps Navbar Logo and Navigation Links crystal clear) */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-28 bg-gradient-to-b from-[#FFFDFD] via-[#FFFDFD]/85 to-transparent pointer-events-none z-[4]" />

      {/* 3. Central Hero Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl mx-auto text-center my-auto w-full px-2"
      >
        {/* Main Headline */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white leading-[1.15] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          Our Production Facility &amp;{' '}
          <span className="text-[#FF4D6D] italic">Apparel Gallery</span>
        </h1>

        {/* Description */}
        <p className="mt-4 sm:mt-6 text-sm xs:text-base sm:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
          Take an inside look at our state-of-the-art Tiruppur manufacturing plant, high-precision
          branding techniques, and bespoke apparel delivered for 500+ businesses across India.
        </p>

        {/* Quick Metrics Bar - Borderless Clean Badges */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-3xl mx-auto">
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-3 sm:p-4 text-center shadow-lg">
            <span className="block text-xl sm:text-3xl font-heading font-black text-[#FF4D6D]">
              100K+
            </span>
            <span className="text-[11px] sm:text-xs text-white/90 font-medium">Monthly Output</span>
          </div>
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-3 sm:p-4 text-center shadow-lg">
            <span className="block text-xl sm:text-3xl font-heading font-black text-[#FF4D6D]">
              500+
            </span>
            <span className="text-[11px] sm:text-xs text-white/90 font-medium">Trusted Clients</span>
          </div>
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-3 sm:p-4 text-center shadow-lg">
            <span className="block text-xl sm:text-3xl font-heading font-black text-[#FF4D6D]">
              100%
            </span>
            <span className="text-[11px] sm:text-xs text-white/90 font-medium">Tiruppur Hub</span>
          </div>
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-3 sm:p-4 text-center shadow-lg">
            <span className="block text-xl sm:text-3xl font-heading font-black text-[#FF4D6D]">
              48h
            </span>
            <span className="text-[11px] sm:text-xs text-white/90 font-medium">Fast Sampling</span>
          </div>
        </div>
      </motion.div>

      {/* 4. Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer pt-2"
        onClick={() => {
          window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' });
        }}
      >
        <span className="text-[11px] sm:text-xs tracking-widest uppercase font-semibold text-white/90">
          Scroll to Explore
        </span>
        <ChevronDown className="w-4 h-4 text-[#FF4D6D] mt-0.5" />
      </motion.div>
    </section>
  );
};

export default GalleryHeroCinematic;
