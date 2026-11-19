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

      {/* Decorative Royal Burgundy Satin Fabric Wave at Top Right Corner (Desktop ONLY - Hidden on Mobile) */}
      <svg
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-0 w-[55%] h-[55%] object-cover hidden md:block pointer-events-none select-none z-[5]"
        preserveAspectRatio="none"
      >
        <path
          d="M320,0 C480,90 600,60 800,190 L800,0 Z"
          fill="url(#desktopSatinWaveGallery)"
        />
        <path
          d="M440,0 C560,110 680,85 800,240 L800,0 Z"
          fill="#800020"
          fillOpacity="0.18"
        />
        <defs>
          <linearGradient id="desktopSatinWaveGallery" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#580819" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#7A1027" stopOpacity="0.75" />
            <stop offset="80%" stopColor="#9C1E3A" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#580819" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>

      {/* 3. Central Hero Content matching Home Page Typography */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl mx-auto text-center my-auto w-full px-2"
      >
        {/* Eyebrow Label matching Home Page */}
        <div>
          <span className="text-xs sm:text-sm font-heading font-extrabold uppercase tracking-widest text-[#FFC1D0] block mb-2 sm:mb-3">
            OUR PRODUCTION FACILITY
          </span>
        </div>

        {/* Main Headline matching Home Page */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-heading font-black text-white leading-[1.08] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          Our Production Facility &amp;{' '}
          <span className="text-[#FFC1D0] sm:text-[#FF99B0] italic font-heading font-black">Apparel Gallery</span>
        </h1>

        {/* Description matching Home Page */}
        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-[19px] text-white/90 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
          Take an inside look at our state-of-the-art Tiruppur manufacturing plant, high-precision
          branding techniques, and bespoke apparel delivered for 500+ businesses across India.
        </p>

        {/* Quick Metrics Bar - Borderless Clean Badges with Home Page Color Accent */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-3xl mx-auto">
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-3 sm:p-4 text-center shadow-lg">
            <span className="block text-xl sm:text-3xl font-heading font-black text-[#FFC1D0]">
              100K+
            </span>
            <span className="text-[11px] sm:text-xs text-white/90 font-medium">Monthly Output</span>
          </div>
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-3 sm:p-4 text-center shadow-lg">
            <span className="block text-xl sm:text-3xl font-heading font-black text-[#FFC1D0]">
              500+
            </span>
            <span className="text-[11px] sm:text-xs text-white/90 font-medium">Trusted Clients</span>
          </div>
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-3 sm:p-4 text-center shadow-lg">
            <span className="block text-xl sm:text-3xl font-heading font-black text-[#FFC1D0]">
              100%
            </span>
            <span className="text-[11px] sm:text-xs text-white/90 font-medium">Tiruppur Hub</span>
          </div>
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-3 sm:p-4 text-center shadow-lg">
            <span className="block text-xl sm:text-3xl font-heading font-black text-[#FFC1D0]">
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
        <span className="text-[11px] sm:text-xs tracking-widest uppercase font-semibold text-white/90 font-heading">
          Scroll to Explore
        </span>
        <ChevronDown className="w-4 h-4 text-[#FFC1D0] mt-0.5" />
      </motion.div>
    </section>
  );
};

export default GalleryHeroCinematic;
