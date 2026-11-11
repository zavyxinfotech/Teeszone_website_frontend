import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Network, TrendingUp, Handshake, ArrowRight } from 'lucide-react';

interface BNIMemberSlideProps {
  onOpenQuote?: () => void;
  onScrollToStory?: (e: React.MouseEvent) => void;
}

const bniFeatures = [
  {
    id: 'networking',
    title: 'Business Networking',
    icon: Network,
  },
  {
    id: 'growth',
    title: 'Collaborative Growth',
    icon: TrendingUp,
  },
  {
    id: 'partnerships',
    title: 'Trusted Partnerships',
    icon: Handshake,
  },
];

export const BNIMemberSlide: React.FC<BNIMemberSlideProps> = ({
  onScrollToStory,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full flex flex-col justify-center">
      {/* =========================================================================
          DESKTOP RIGHT SIDE: SMOOTH GRADIENT-BLENDED HANDSHAKE COMPOSITION
          - Zero artificial curved wave mask or divider
          - Smooth feathered gradient transition from cream canvas into photo
          - Crisp, high-contrast handshake image integrated into hero
          ========================================================================= */}
      <div className="hidden lg:flex absolute right-0 top-0 bottom-[-10px] z-10 w-[50vw] xl:w-[52vw] max-w-[920px] 2xl:max-w-[1080px] justify-end items-center pointer-events-none overflow-hidden">
        {/* Handshake Container with Smooth Fade & Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-full flex justify-end items-center"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.12) 8%, rgba(0,0,0,0.65) 24%, black 42%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.12) 8%, rgba(0,0,0,0.65) 24%, black 42%)',
          }}
        >
          <img
            src="/assets/images/about/bni-handshake.jpg"
            alt="TeesZone Clothing Private Limited - Business Partnership and Handshake at BNI Tycoon Erode"
            className="w-full h-full object-cover object-center filter saturate-[1.05] contrast-[1.03]"
            loading="eager"
          />
          {/* Subtle Warm Ambient Lighting Overlay to match silk background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5F2]/25 via-transparent to-black/10 pointer-events-none" />
        </motion.div>
      </div>

      {/* =========================================================================
          MAIN CONTENT CONTAINER
          - Matches navbar horizontal alignment (max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8)
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center pt-0 lg:pt-24 xl:pt-28 pb-0 lg:pb-16 h-full">
        
        {/* =====================================================================
            1. DESKTOP VIEW (Two-column layout, left content precisely aligned)
            ===================================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT CONTENT AREA */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-4 xl:space-y-5 text-left">
            
            {/* 1. Logos Row: TeesZone Logo + Thin Divider + Official BNI Member Badge + BNI TYCOON ERODE */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
              className="flex items-center gap-4 xl:gap-5"
            >
              {/* TeesZone Official Brand Logo */}
              <img
                src="/assets/logo/teeszone-logo.png"
                alt="TeesZone - Elevate your Style with Custom Tees"
                className="h-10 xl:h-[46px] w-auto object-contain"
                loading="eager"
              />

              {/* Thin Vertical Divider */}
              <div className="w-[1.5px] h-8 bg-charcoal-300/80 shrink-0" aria-hidden="true" />

              {/* Official BNI Tycoon Erode Membership Badge */}
              <div className="flex items-center gap-2.5">
                <img
                  src="/assets/images/about/bni-proud-member-logo.png"
                  alt="Proud BNI Member Logo"
                  className="h-9 xl:h-10 w-auto object-contain filter drop-shadow-xs"
                  loading="eager"
                />
                <span className="text-[10px] xl:text-[11px] font-heading font-extrabold uppercase tracking-wider text-[#80011F] whitespace-nowrap">
                  BNI TYCOON ERODE
                </span>
              </div>
            </motion.div>

            {/* 2. Main Heading: Montserrat Bold, two-line composition */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[48px] font-heading font-bold leading-[1.14] tracking-tight"
              >
                {/* First line: Dark charcoal */}
                <span className="block text-[#1A1D20]">
                  TeesZone is a Proud Member of
                </span>
                {/* Second line: TeesZone Burgundy #80011F */}
                <span className="block text-[#80011F] mt-1">
                  BNI Tycoon Erode
                </span>
              </motion.h1>

              {/* Subtle Burgundy Accent Line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 54, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.32, ease: 'easeOut' }}
                className="h-[2px] bg-[#80011F] rounded-full"
              />
            </div>

            {/* 3. Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="text-base sm:text-lg xl:text-[19px] text-[#4A4D52] font-normal leading-relaxed max-w-xl"
            >
              Part of the global BNI network, we build strong business relationships and deliver trusted apparel solutions for growing businesses.
            </motion.p>

            {/* 4. Three Standalone Feature Items (Clean, Minimal, Premium) */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              className="flex items-start gap-8 xl:gap-11 pt-2 pb-1"
            >
              {bniFeatures.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 + idx * 0.08 }}
                    className="flex flex-col items-center justify-center text-center group cursor-default"
                  >
                    <div className="text-[#80011F] group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 xl:w-7 xl:h-7 stroke-[1.75]" />
                    </div>
                    <span className="text-xs xl:text-sm font-heading font-semibold text-[#1A1D20] leading-snug mt-2.5 text-center max-w-[110px] xl:max-w-[125px]">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* 5. CTA Button: Know More About Our BNI Journey → */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
              className="pt-2"
            >
              <a
                href="#our-story"
                onClick={onScrollToStory}
                className="inline-flex items-center gap-3 px-8 py-3.5 xl:px-9 xl:py-4 rounded-full bg-gradient-to-r from-[#80011F] via-[#6B011A] to-[#570018] hover:from-[#6B011A] hover:to-[#450013] text-white font-heading font-medium text-sm xl:text-base shadow-[0_6px_20px_rgba(128,1,31,0.25)] hover:shadow-[0_10px_25px_rgba(128,1,31,0.35)] transition-all duration-300 group cursor-pointer"
              >
                <span>Know More About Our BNI Journey</span>
                <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

          </div>

          {/* Spacer for desktop right column */}
          <div className="lg:col-span-5 xl:col-span-5" aria-hidden="true" />

        </div>

        {/* =====================================================================
            2. MOBILE VIEW (Full Viewport Fit, Integrated Blended Image, Standalone Icons)
            ===================================================================== */}
        <div className="flex lg:hidden flex-col items-center justify-between text-center h-full w-full pt-[64px] xs:pt-[70px] sm:pt-[78px] pb-0 overflow-hidden relative">
          
          {/* Top Block: Logos, Heading, Description, Features, CTA */}
          <div className="flex flex-col items-center space-y-2 xs:space-y-2.5 w-full px-4 pt-0 z-10 shrink-0">
            
            {/* 1. Logos: TeesZone + BNI Logo Aligned */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center gap-2.5 xs:gap-3"
            >
              <img
                src="/assets/logo/teeszone-logo.png"
                alt="TeesZone"
                className="h-6 sm:h-7 w-auto object-contain"
                loading="eager"
              />

              <div className="w-[1px] h-5 bg-charcoal-300/80 shrink-0" aria-hidden="true" />

              <div className="flex items-center gap-1.5">
                <img
                  src="/assets/images/about/bni-proud-member-logo.png"
                  alt="Proud BNI Member"
                  className="h-6 sm:h-7 w-auto object-contain"
                  loading="eager"
                />
                <span className="text-[8px] sm:text-[9px] font-heading font-extrabold uppercase tracking-wide text-[#80011F] whitespace-nowrap">
                  BNI TYCOON ERODE
                </span>
              </div>
            </motion.div>

            {/* 2. Heading */}
            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[20px] xs:text-[23px] sm:text-[27px] font-heading font-bold leading-[1.18] tracking-tight text-center max-w-[330px] xs:max-w-[370px] mx-auto"
            >
              <span className="block text-[#1A1D20]">
                TeesZone is a Proud Member of
              </span>
              <span className="block text-[#80011F] mt-0.5">
                BNI Tycoon Erode
              </span>
            </motion.h1>

            {/* 3. Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="text-[13px] xs:text-[14px] sm:text-[15px] text-[#4A4D52] font-normal leading-relaxed max-w-[320px] xs:max-w-[350px] text-center mx-auto"
            >
              Part of the global BNI network, we build strong business relationships and deliver trusted apparel solutions for growing businesses.
            </motion.p>

            {/* 4. Three Standalone Feature Items (Mobile Clean Minimal) */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="flex items-start justify-center gap-5 xs:gap-7 sm:gap-9 w-full max-w-[360px] pt-1.5 pb-0.5"
            >
              {bniFeatures.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center justify-center text-center flex-1 max-w-[100px]"
                  >
                    <div className="text-[#80011F]">
                      <IconComponent className="w-5 h-5 xs:w-[22px] xs:h-[22px] stroke-[1.75]" />
                    </div>
                    <span className="text-[10px] xs:text-[11px] font-heading font-semibold text-[#1A1D20] leading-tight mt-1.5 text-center">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* 5. CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
              className="pt-1"
            >
              <a
                href="#our-story"
                onClick={onScrollToStory}
                className="inline-flex items-center gap-2 px-5 py-2 xs:px-6 xs:py-2.5 rounded-full bg-gradient-to-r from-[#80011F] via-[#6B011A] to-[#570018] text-white font-heading font-medium text-xs xs:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>Know More About Our BNI Journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>

          </div>

          {/* 6. Handshake Image (Mobile View: Seamless Integrated Blend, NO square card) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="w-full flex-1 min-h-0 relative z-10 flex justify-center items-end overflow-hidden pb-4 sm:pb-6"
          >
            <div
              className="relative w-full max-w-[380px] xs:max-w-[420px] h-[32svh] xs:h-[35svh] max-h-[290px] min-h-[170px] overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 14%, black 35%, black 82%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 14%, black 35%, black 82%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'destination-in',
              }}
            >
              <img
                src="/assets/images/about/bni-handshake.jpg"
                alt="TeesZone BNI Tycoon Erode Handshake"
                className="w-full h-full object-cover object-center filter saturate-[1.05] contrast-[1.03]"
                loading="eager"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};


