import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ClothFoldingPolo } from './ClothFoldingPolo';
import { FabricWave3D } from './FabricWave3D';

interface AboutHeroProps {
  onOpenQuote?: () => void;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ onOpenQuote }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll Progress binding for reversible scroll animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Reversible Scroll-Down / Scroll-Up Parallax Transforms
  const logoY = useTransform(scrollYProgress, [0, 0.5], [0, shouldReduceMotion ? 0 : -25]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0.2]);

  const headingY = useTransform(scrollYProgress, [0, 0.5], [0, shouldReduceMotion ? 0 : -35]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0.15]);

  const descY = useTransform(scrollYProgress, [0, 0.5], [0, shouldReduceMotion ? 0 : -40]);
  const descOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0.1]);

  const ctaY = useTransform(scrollYProgress, [0, 0.5], [0, shouldReduceMotion ? 0 : -45]);
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0.05]);

  const shirtY = useTransform(scrollYProgress, [0, 0.6], [0, shouldReduceMotion ? 0 : 25]);
  const shirtScale = useTransform(scrollYProgress, [0, 0.6], [1, shouldReduceMotion ? 1 : 0.97]);

  const handleScrollToStory = (e: React.MouseEvent) => {
    e.preventDefault();
    const storySection = document.getElementById('our-story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenQuote) {
      onOpenQuote();
    }
  };

  return (
    <section
      ref={heroRef}
      id="about-hero"
      className="relative w-full h-[100svh] min-h-[100svh] max-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#FAF5F2] select-none"
      aria-label="TeesZone About Us - Branded Apparel Solutions"
    >
      {/* =========================================================================
          BACKGROUND: LUXURIOUS CREAM SILK DRAPERY & STUDIO LIGHTING
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Ambient Studio Lighting Glow */}
        <div
          className="absolute -top-32 left-1/3 w-[700px] h-[700px] rounded-full bg-radial from-white via-[#FFF9F6]/80 to-transparent blur-3xl opacity-85"
          aria-hidden="true"
        />

        {/* Soft Radial Glow behind Right Polo Shirt */}
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
          DESKTOP T-SHIRT VISUAL: FLUSH WITH RIGHT SCREEN BORDER & INCREASED HEIGHT
          - Positioned absolute right-0 bottom-0, attached to the right side border
          - Increased size/height, resting seamlessly behind the lower right wave
          ========================================================================= */}
      <div className="hidden lg:flex absolute right-0 bottom-[-3%] xl:bottom-[-4%] z-10 w-[50vw] max-w-[820px] 2xl:max-w-[920px] justify-end items-end pointer-events-none">
        <motion.div
          style={{ y: shirtY, scale: shirtScale }}
          className="w-full flex justify-end items-end"
        >
          <ClothFoldingPolo
            className="w-full flex justify-end"
            imgClassName="max-h-[82svh] xl:max-h-[88svh] w-auto object-contain object-right"
          />
        </motion.div>
      </div>

      {/* =========================================================================
          HERO MAIN CONTENT CONTAINER
          - Uses EXACT SAME max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 as Navbar
          - Guarantees pixel-perfect vertical alignment with navbar logo
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center pt-24 sm:pt-28 lg:pt-28 xl:pt-32 pb-16 sm:pb-20 lg:pb-24">
        
        {/* =====================================================================
            1. DESKTOP VIEW (Two-column layout, left content precisely aligned)
            ===================================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT CONTENT AREA: Aligned vertically with Navbar Logo */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 xl:space-y-7 text-left">
            
            {/* 1. Logos Row: Exact TeesZone Logo + Exact BNI Tycoon Erode Badge */}
            <motion.div
              style={{ y: logoY, opacity: logoOpacity }}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="flex items-center gap-5 xl:gap-6"
            >
              {/* TeesZone Official Brand Logo */}
              <img
                src="/assets/logo/teeszone-logo.png"
                alt="TeesZone - Elevate your Style with Custom Tees"
                className="h-11 xl:h-[50px] w-auto object-contain"
                loading="eager"
              />

              {/* Thin Vertical Divider */}
              <div className="w-[1.5px] h-8 bg-gray-300/80 shrink-0" aria-hidden="true" />

              {/* Exact BNI Tycoon Erode Membership Badge */}
              <div className="flex flex-col items-center">
                <img
                  src="/assets/images/about/bni-member-logo.png"
                  alt="Proud BNI Member"
                  className="h-8 xl:h-9 w-auto object-contain filter drop-shadow-sm"
                  loading="eager"
                />
                <span className="text-[10px] xl:text-[11px] font-heading font-extrabold uppercase tracking-wider text-[#80011F] mt-0.5 whitespace-nowrap">
                  BNI TYCOON ERODE
                </span>
              </div>
            </motion.div>

            {/* 2. Main Heading: Montserrat 600 */}
            <motion.div
              style={{ y: headingY, opacity: headingOpacity }}
              className="space-y-2 pt-1"
            >
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[52px] font-heading font-semibold leading-[1.14] tracking-tight"
              >
                {/* First line: Dark charcoal */}
                <span className="block text-[#1A1D20]">
                  Your Trusted Partner in
                </span>
                {/* Second line: TeesZone Burgundy #80011F */}
                <span className="block text-[#80011F] mt-1">
                  Branded Apparel Solutions
                </span>
              </motion.h1>

              {/* Subtle Burgundy Accent Line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 54, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
                className="h-[2px] bg-[#80011F] rounded-full pt-0.5"
              />
            </motion.div>

            {/* 3. Supporting Description */}
            <motion.p
              style={{ y: descY, opacity: descOpacity }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35, ease: 'easeOut' }}
              className="text-base sm:text-lg xl:text-[20px] text-charcoal-700 font-normal leading-relaxed max-w-xl"
            >
              Customised T-Shirts, Polo T-Shirts and Corporate Uniforms for Businesses.
            </motion.p>

            {/* 4. CTA Button */}
            <motion.div
              style={{ y: ctaY, opacity: ctaOpacity }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
              className="pt-2"
            >
              <a
                href="#our-story"
                onClick={handleScrollToStory}
                className="inline-flex items-center gap-3 px-8 py-3.5 xl:px-9 xl:py-4 rounded-full bg-gradient-to-r from-[#80011F] via-[#6B011A] to-[#570018] hover:from-[#6B011A] hover:to-[#450013] text-white font-heading font-semibold text-sm xl:text-base shadow-[0_8px_20px_rgba(128,1,31,0.28)] hover:shadow-[0_12px_28px_rgba(128,1,31,0.38)] transition-all duration-300 group cursor-pointer"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

          </div>

          {/* Spacer for desktop column to balance layout */}
          <div className="lg:col-span-5 xl:col-span-5" aria-hidden="true" />

        </div>

        {/* =====================================================================
            2. MOBILE VIEW (Full Viewport Fit: Both Height and Width)
            - TeesZone and BNI logo side-by-side in SAME row with compact size
            - Content sized compactly to fit within 100svh without scrolling
            - T-Shirt and wave aligned with bottom depth
            ===================================================================== */}
        <div className="flex lg:hidden flex-col items-center justify-between text-center h-full pt-2 sm:pt-4 pb-2">
          
          {/* Top Block: Logos, Heading, Description, CTA */}
          <div className="flex flex-col items-center space-y-2.5 sm:space-y-3.5 w-full">
            
            {/* 1. Logos: TeesZone and BNI in the SAME LINE */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center gap-2.5 sm:gap-3"
            >
              <img
                src="/assets/logo/teeszone-logo.png"
                alt="TeesZone"
                className="h-6 sm:h-7 w-auto object-contain"
                loading="eager"
              />

              <div className="w-[1px] h-4 sm:h-5 bg-gray-300/90" aria-hidden="true" />

              <div className="flex items-center gap-1.5">
                <img
                  src="/assets/images/about/bni-member-logo.png"
                  alt="Proud BNI Member"
                  className="h-5 sm:h-6 w-auto object-contain"
                  loading="eager"
                />
                <span className="text-[8px] sm:text-[9px] font-heading font-extrabold uppercase tracking-wide text-[#80011F] whitespace-nowrap">
                  BNI TYCOON ERODE
                </span>
              </div>
            </motion.div>

            {/* 2. Main Heading: Scaled for Mobile Viewport Fit */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-2xl font-heading font-semibold leading-tight tracking-tight"
            >
              <span className="block text-[#1A1D20]">
                Your Trusted Partner in
              </span>
              <span className="block text-[#80011F] mt-0.5">
                Branded Apparel Solutions
              </span>
            </motion.h1>

            {/* 3. Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28 }}
              className="text-xs sm:text-sm text-charcoal-700 font-normal leading-snug max-w-[300px] px-1"
            >
              Customised T-Shirts, Polo T-Shirts and Corporate Uniforms for Businesses.
            </motion.p>

            {/* 4. CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
              className="pt-0.5"
            >
              <a
                href="#our-story"
                onClick={handleScrollToStory}
                className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-gradient-to-r from-[#80011F] via-[#6B011A] to-[#570018] text-white font-heading font-semibold text-xs shadow-md transition-all cursor-pointer"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>

          </div>

          {/* Bottom Block: Mobile T-Shirt Visual (Aligned to bottom right behind wave) */}
          <div className="w-full max-w-[270px] sm:max-w-[310px] relative z-10 flex justify-center items-end mt-auto">
            <ClothFoldingPolo isMobile className="w-full" />
          </div>

        </div>

      </div>

      {/* =========================================================================
          3. BOTTOM 3D FABRIC WAVE (Pure Smooth Vector SVG Curves - In front of shirt z-20)
          ========================================================================= */}
      <FabricWave3D scrollYProgress={scrollYProgress} />
    </section>
  );
};
