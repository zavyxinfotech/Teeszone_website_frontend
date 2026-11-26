import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
      className="sticky top-0 h-screen w-full overflow-hidden bg-[#FAF6F4] text-charcoal-900 flex flex-col justify-between pt-24 xs:pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 select-none z-10"
      aria-label="Cinematic Gallery Hero"
    >
      {/* =========================================================================
          BACKGROUND THEME (Warm Cream Base, Organic Curves & Subtle Ambient Facility)
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden bg-[#FAF6F4]">
        {/* Soft Cream to Warm Amber Gradient Glow */}
        <div className="absolute top-0 right-0 w-[65%] h-full bg-gradient-to-l from-[#F5ECE1]/90 via-[#FAF4EB]/60 to-transparent pointer-events-none" />
        <div className="absolute -top-24 left-1/4 w-[550px] h-[550px] bg-[#FFF2DE]/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[450px] bg-[#FCECEF]/45 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-[450px] h-[450px] bg-[#FAF1E6]/70 rounded-full blur-2xl pointer-events-none" />

        {/* Elegant Organic Cream Wave Ribbons in the background */}
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          preserveAspectRatio="none"
        >
          <path
            d="M560,0 C700,160 840,220 980,120 C1120,20 1280,140 1440,80 L1440,800 L420,800 C480,680 520,520 460,380 C400,240 450,90 560,0 Z"
            fill="url(#creamOrganicBackdropGallery)"
            opacity="0.85"
          />
          <defs>
            <linearGradient id="creamOrganicBackdropGallery" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F5ECE1" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FAF4EB" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#F0E5D6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Subtle Ambient Facility Photograph Layer */}
        <motion.div
          style={{ scale: bgScale, y: bgY }}
          className="absolute inset-0 w-full h-full pointer-events-none will-change-transform z-0 opacity-12 mix-blend-multiply"
        >
          <img
            src="/assets/images/gallery/gallery-hero-facility.webp"
            alt="TeesZone Tiruppur Facility"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </motion.div>

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
      </div>

      {/* Central Hero Content matching Home Page Typography */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl mx-auto text-center my-auto w-full px-2"
      >
        {/* Eyebrow Label matching Home Page */}
        <div>
          <span className="text-sm sm:text-base font-heading font-semibold uppercase tracking-wider text-burgundy-700 block mb-2 sm:mb-3">
            OUR PRODUCTION FACILITY
          </span>
        </div>

        {/* Main Headline matching Home Page */}
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-heading font-bold text-charcoal-900 leading-[1.08] tracking-tight">
          Our Production Facility &amp;{' '}
          <span className="text-burgundy-700">Apparel Gallery</span>
        </h1>

        {/* Description matching Home Page */}
        <p className="mt-4 sm:mt-5 text-lg sm:text-xl lg:text-[20px] text-charcoal-700 max-w-2xl mx-auto leading-relaxed font-normal">
          Take an inside look at our state-of-the-art Tiruppur manufacturing plant, high-precision
          branding techniques, and bespoke apparel delivered for 500+ businesses across India.
        </p>

        {/* Quick Metrics Bar - Clean Cards with Home Page Styling */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-3xl mx-auto">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 text-center border border-charcoal-200/50 shadow-soft">
            <span className="block text-2xl sm:text-3xl font-heading font-bold text-burgundy-700">
              100K+
            </span>
            <span className="text-[11px] sm:text-xs text-charcoal-700 font-medium">Monthly Output</span>
          </div>
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 text-center border border-charcoal-200/50 shadow-soft">
            <span className="block text-2xl sm:text-3xl font-heading font-bold text-burgundy-700">
              500+
            </span>
            <span className="text-[11px] sm:text-xs text-charcoal-700 font-medium">Trusted Clients</span>
          </div>
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 text-center border border-charcoal-200/50 shadow-soft">
            <span className="block text-2xl sm:text-3xl font-heading font-bold text-burgundy-700">
              100%
            </span>
            <span className="text-[11px] sm:text-xs text-charcoal-700 font-medium">Tiruppur Hub</span>
          </div>
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 text-center border border-charcoal-200/50 shadow-soft">
            <span className="block text-2xl sm:text-3xl font-heading font-bold text-burgundy-700">
              48h
            </span>
            <span className="text-[11px] sm:text-xs text-charcoal-700 font-medium">Fast Sampling</span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 flex flex-col items-center justify-center text-charcoal-600 hover:text-burgundy-700 transition-colors cursor-pointer pt-2"
        onClick={() => {
          window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' });
        }}
      >
        <span className="text-[11px] sm:text-xs tracking-widest uppercase font-semibold text-charcoal-700 font-heading">
          Scroll to Explore
        </span>
        <ChevronDown className="w-4 h-4 text-burgundy-700 mt-0.5" />
      </motion.div>
    </section>
  );
};

export default GalleryHeroCinematic;
