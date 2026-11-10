import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Handshake, Users, TrendingUp, ArrowRight } from 'lucide-react';

interface BNIMemberSlideProps {
  onOpenQuote?: () => void;
  onScrollToStory?: (e: React.MouseEvent) => void;
}

const bniFeatures = [
  {
    id: 'networking',
    title: 'Business Networking',
    icon: Handshake,
  },
  {
    id: 'growth',
    title: 'Collaborative Growth',
    icon: Users,
  },
  {
    id: 'partnerships',
    title: 'Trusted Partnerships',
    icon: TrendingUp,
  },
];

export const BNIMemberSlide: React.FC<BNIMemberSlideProps> = ({
  onScrollToStory,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full flex flex-col justify-center">
      {/* =========================================================================
          DESKTOP RIGHT SIDE: ORGANIC CURVED HANDSHAKE COMPOSITION
          - Matches reference image with organic sweeping curved reveal
          - Displays high-quality business handshake photo (burgundy sleeve & suit)
          - Framed with luminous cream specular highlight edge
          ========================================================================= */}
      <div className="hidden lg:flex absolute right-0 top-0 bottom-0 z-10 w-[50vw] xl:w-[52vw] max-w-[880px] 2xl:max-w-[1020px] justify-end items-center pointer-events-none overflow-hidden">
        {/* SVG Defs for Organic Wave Mask */}
        <svg className="w-0 h-0 absolute">
          <defs>
            <clipPath id="bniHandshakeOrganicClip" clipPathUnits="objectBoundingBox">
              <path d="M 0.24,0 C 0.48,0.18 0.62,0.36 0.42,0.54 C 0.24,0.70 0.08,0.84 0,1 L 1,1 L 1,0 Z" />
            </clipPath>
            <linearGradient id="bniCurveRimGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#FFF2EE" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#F5ECE4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#EFE3DC" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>

        {/* Handshake Container with Reveal Animation */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 50, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-full flex justify-end items-center"
        >
          {/* Masked Handshake Image */}
          <div
            className="w-full h-full relative"
            style={{
              clipPath: 'url(#bniHandshakeOrganicClip)',
              WebkitClipPath: 'url(#bniHandshakeOrganicClip)',
            }}
          >
            <img
              src="/assets/images/about/bni-handshake.jpg"
              alt="TeesZone Clothing Private Limited - Business Partnership and Handshake at BNI Tycoon Erode"
              className="w-full h-full object-cover object-center filter saturate-[1.04] contrast-[1.03]"
              loading="eager"
            />
            {/* Subtle Warm Amber Studio Lighting Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-burgundy-950/15 via-transparent to-black/10 pointer-events-none" />
          </div>

          {/* Organic Curved Specular Rim Highlight Vector */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <path
              d="M 24,0 C 48,18 62,36 42,54 C 24,70 8,84 0,100"
              fill="none"
              stroke="url(#bniCurveRimGrad)"
              strokeWidth="1.2"
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
            />
          </svg>
        </motion.div>
      </div>

      {/* =========================================================================
          MAIN CONTENT CONTAINER
          - Matches navbar horizontal alignment (max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8)
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center pt-14 sm:pt-16 lg:pt-24 xl:pt-28 pb-4 sm:pb-8 lg:pb-16">
        
        {/* =====================================================================
            1. DESKTOP VIEW (Two-column layout, left content precisely aligned)
            ===================================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT CONTENT AREA */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-4 xl:space-y-5 text-left">
            
            {/* 1. Logos Row: TeesZone Logo + Thin Divider + BNI Member Badge + BNI TYCOON ERODE */}
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

              {/* Exact BNI Tycoon Erode Membership Badge */}
              <div className="flex flex-col items-center">
                <img
                  src="/assets/images/about/bni-proud-member-logo.png"
                  alt="Proud BNI Member Logo"
                  className="h-7 xl:h-8 w-auto object-contain filter drop-shadow-xs"
                  loading="eager"
                />
                <span className="text-[9px] xl:text-[10px] font-heading font-extrabold uppercase tracking-wider text-[#80011F] mt-0.5 whitespace-nowrap">
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

            {/* 4. Three Feature Cards (Horizontal Row) */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              className="flex items-center gap-3 sm:gap-4 pt-1"
            >
              {bniFeatures.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 + idx * 0.08 }}
                    className="flex flex-col items-center justify-center p-3 xl:p-3.5 rounded-2xl bg-[#FFF6EE]/80 border border-[#F2E0D2] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all text-center w-28 sm:w-32 xl:w-36 group cursor-default"
                  >
                    <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-xl bg-white/90 flex items-center justify-center shadow-xs text-[#80011F] group-hover:scale-108 transition-transform">
                      <IconComponent className="w-5 h-5 xl:w-[22px] xl:h-[22px] stroke-[1.8]" />
                    </div>
                    <span className="text-[11px] xl:text-xs font-heading font-semibold text-[#1A1D20] leading-snug mt-2 text-center">
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
            2. MOBILE VIEW (Full Viewport Fit Matching Mobile Reference)
            - Order:
              1. TeesZone logo & BNI logo
              2. Main heading (centered)
              3. Supporting description (centered)
              4. Three feature cards in a row
              5. CTA button (centered)
              6. Handshake image (prominent, centered)
            ===================================================================== */}
        <div className="flex lg:hidden flex-col items-center text-center h-full pt-1 pb-0 overflow-hidden">
          
          {/* Top Block: Logos, Heading, Description, Features, CTA */}
          <div className="flex flex-col items-center space-y-2 w-full px-4 pt-0 z-10 shrink-0">
            
            {/* 1. Logos: TeesZone + BNI Logo Stacked/Aligned */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center gap-3"
            >
              <img
                src="/assets/logo/teeszone-logo.png"
                alt="TeesZone"
                className="h-6 sm:h-7 w-auto object-contain"
                loading="eager"
              />

              <div className="w-[1px] h-5 bg-charcoal-300/80" aria-hidden="true" />

              <div className="flex flex-col items-center">
                <img
                  src="/assets/images/about/bni-proud-member-logo.png"
                  alt="Proud BNI Member"
                  className="h-5 sm:h-6 w-auto object-contain"
                  loading="eager"
                />
                <span className="text-[7.5px] sm:text-[8px] font-heading font-extrabold uppercase tracking-wide text-[#80011F] whitespace-nowrap mt-0.5">
                  BNI TYCOON ERODE
                </span>
              </div>
            </motion.div>

            {/* 2. Heading */}
            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-xl sm:text-2xl font-heading font-bold leading-tight tracking-tight text-center"
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
              className="text-xs sm:text-[13px] text-[#4A4D52] font-normal leading-snug max-w-[340px] text-center mx-auto"
            >
              Part of the global BNI network, we build strong business relationships and deliver trusted apparel solutions for growing businesses.
            </motion.p>

            {/* 4. Three Feature Cards (Mobile Horizontal Row) */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="grid grid-cols-3 gap-2 w-full max-w-[340px] pt-0.5"
            >
              {bniFeatures.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#FFF6EE]/90 border border-[#F2E0D2] text-center"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[#80011F] shadow-2xs">
                      <IconComponent className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <span className="text-[9.5px] font-heading font-semibold text-[#1A1D20] leading-tight mt-1 text-center">
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
              className="pt-0.5"
            >
              <a
                href="#our-story"
                onClick={onScrollToStory}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#80011F] via-[#6B011A] to-[#570018] text-white font-heading font-medium text-xs shadow-md transition-all cursor-pointer"
              >
                <span>Know More About Our BNI Journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>

          </div>

          {/* 6. Handshake Image (Mobile View: Prominent below CTA) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="w-full max-w-[360px] sm:max-w-[400px] relative z-10 flex justify-center items-start mt-2 px-3 flex-1 min-h-0"
          >
            <div className="relative w-full aspect-[16/10] max-h-[38svh] rounded-2xl overflow-hidden shadow-lg border border-white/80">
              <img
                src="/assets/images/about/bni-handshake.jpg"
                alt="TeesZone BNI Tycoon Erode Handshake"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

