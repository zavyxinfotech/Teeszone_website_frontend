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
    title: 'Business\nNetworking',
    icon: Network,
  },
  {
    id: 'growth',
    title: 'Collaborative\nGrowth',
    icon: TrendingUp,
  },
  {
    id: 'partnerships',
    title: 'Trusted\nPartnerships',
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
          ========================================================================= */}
      <div className="hidden lg:flex absolute right-0 top-0 bottom-[-10px] z-10 w-[50vw] xl:w-[52vw] max-w-[920px] 2xl:max-w-[1080px] justify-end items-center pointer-events-none overflow-hidden">
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
            src="/assets/images/about/bni-team-award.jpg"
            alt="TeesZone Clothing Private Limited - BNI Tycoon Season 07 Awards Celebration"
            className="w-full h-full object-cover object-center filter saturate-[1.05] contrast-[1.03]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5F2]/25 via-transparent to-black/10 pointer-events-none" />
        </motion.div>
      </div>

      {/* =========================================================================
          MAIN CONTENT CONTAINER
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center pt-0 lg:pt-24 xl:pt-28 pb-0 lg:pb-16 h-full">

        {/* =====================================================================
            1. DESKTOP VIEW
            ===================================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">

          <div className="lg:col-span-7 xl:col-span-7 space-y-4 xl:space-y-5 text-left">

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
              className="flex items-center gap-4 xl:gap-5"
            >
              <img
                src="/assets/logo/teeszone-logo.png"
                alt="TeesZone - Elevate your Style with Custom Tees"
                className="h-10 xl:h-[46px] w-auto object-contain"
                loading="eager"
              />

              <div className="w-[1.5px] h-10 bg-charcoal-300/80 shrink-0" aria-hidden="true" />

              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src="/assets/images/about/bni-proud-member-logo.png"
                  alt="Proud BNI Member Logo"
                  className="h-8 xl:h-9 w-auto object-contain filter drop-shadow-xs"
                  loading="eager"
                />
                <span className="text-[10px] xl:text-[11px] font-heading font-extrabold uppercase tracking-wider text-burgundy-700 whitespace-nowrap mt-1 text-center">
                  BNI TYCOON ERODE
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-heading font-bold text-charcoal-900 leading-[1.08] tracking-tight max-w-2xl"
            >
              <span className="block text-charcoal-900">
                TeesZone is a Proud Member of
              </span>
              <span className="block text-burgundy-700 mt-1">
                BNI Tycoon Erode
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: 'easeOut' }}
              className="text-lg sm:text-xl lg:text-[20px] text-charcoal-700 leading-relaxed font-normal max-w-xl"
            >
              Part of the global BNI network, we build strong business relationships and deliver trusted apparel solutions for growing businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-2 pb-1 max-w-md"
            >
              {bniFeatures.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.id} className="flex flex-col items-center text-center">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 text-burgundy-700 flex items-center justify-center transition-transform hover:scale-110 duration-200">
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
                    </div>
                    <span className="text-xs sm:text-[13px] lg:text-[14px] font-heading font-medium text-charcoal-900 leading-snug mt-1.5 whitespace-pre-line text-center">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
              className="pt-2"
            >
              <a
                href="#our-story"
                onClick={onScrollToStory}
                className="inline-flex items-center gap-3 px-8 py-3.5 xl:px-9 xl:py-4 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-heading font-medium text-base sm:text-lg shadow-soft hover:shadow-soft-lg transition-all duration-300 group cursor-pointer"
              >
                <span>Know More About Our BNI Journey</span>
                <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

          </div>

          <div className="lg:col-span-5 xl:col-span-5" aria-hidden="true" />

        </div>

        {/* =====================================================================
            2. MOBILE VIEW
            - Spacing from navbar added (pt-[80px])
            - 4-side shaded effect on image so it naturally blends (NO box appearance)
            ===================================================================== */}
        <div className="flex lg:hidden flex-col items-center justify-between text-center h-full w-full pt-[80px] xs:pt-[84px] pb-10 xs:pb-12 px-4 overflow-hidden relative">

          {/* Top Block: Logos + Heading + Description */}
          <div className="flex flex-col items-center space-y-1 w-full shrink-0">

            {/* 1. Logos: TeesZone + Divider + (BNI Logo with text below) */}
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

              <div className="w-[1px] h-7 bg-charcoal-300/80 shrink-0" aria-hidden="true" />

              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src="/assets/images/about/bni-proud-member-logo.png"
                  alt="Proud BNI Member"
                  className="h-6 sm:h-7 w-auto object-contain"
                  loading="eager"
                />
                <span className="text-[8px] sm:text-[9px] font-heading font-extrabold uppercase tracking-wide text-burgundy-700 whitespace-nowrap mt-0.5 text-center">
                  BNI TYCOON ERODE
                </span>
              </div>
            </motion.div>

            {/* 2. Heading */}
            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[24px] xs:text-[26px] sm:text-3xl font-heading font-bold leading-[1.12] tracking-tight text-center max-w-[340px] xs:max-w-[370px] mx-auto mt-0.5"
            >
              <span className="block text-charcoal-900">
                TeesZone is a Proud Member of
              </span>
              <span className="block text-burgundy-700 mt-0.5">
                BNI Tycoon Erode
              </span>
            </motion.h1>

            {/* 3. Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="text-xs xs:text-sm sm:text-base text-charcoal-700 font-normal leading-relaxed max-w-xs xs:max-w-sm text-center mx-auto"
            >
              Part of the global BNI network, we build strong business relationships and deliver trusted apparel solutions for growing businesses.
            </motion.p>
          </div>

          {/* 4. Hero Image: 4-side shaded effect so it blends into canvas without box appearance */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28 }}
            className="w-full max-w-[390px] h-[24svh] xs:h-[26svh] max-h-[220px] min-h-[150px] overflow-hidden my-1 shrink-0 flex items-center justify-center"
            style={{
              maskImage: 'radial-gradient(ellipse 90% 86% at 50% 50%, black 50%, rgba(0,0,0,0.65) 74%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 90% 86% at 50% 50%, black 50%, rgba(0,0,0,0.65) 74%, transparent 100%)',
            }}
          >
            <img
              src="/assets/images/about/bni-team-award.jpg"
              alt="TeesZone Clothing Private Limited - BNI Tycoon Season 07 Partnership"
              className="w-full h-full object-cover object-center filter saturate-[1.05] contrast-[1.03]"
              loading="eager"
            />
          </motion.div>

          {/* 5. CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.34 }}
            className="my-0.5 shrink-0"
          >
            <a
              href="#our-story"
              onClick={onScrollToStory}
              className="inline-flex items-center gap-2 px-5 py-2 xs:px-6 xs:py-2.5 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-heading font-medium text-xs xs:text-sm shadow-soft transition-all active:scale-95 cursor-pointer"
            >
              <span>Know More About Our BNI Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* 6. Other Contents (Three Standalone Feature Highlights) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="flex items-start justify-center gap-4 xs:gap-6 sm:gap-8 w-full max-w-[360px] pt-1 pb-1 shrink-0"
          >
            {bniFeatures.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center text-center flex-1 max-w-[105px]"
                >
                  <div className="text-burgundy-700">
                    <IconComponent className="w-5 h-5 xs:w-[22px] xs:h-[22px] stroke-[1.8]" />
                  </div>
                  <span className="text-[10px] xs:text-[11px] font-heading font-medium text-charcoal-900 leading-tight mt-1 whitespace-pre-line text-center">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default BNIMemberSlide;
