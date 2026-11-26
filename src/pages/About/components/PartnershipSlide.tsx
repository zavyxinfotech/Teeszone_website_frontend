import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface PartnershipSlideProps {
  onOpenQuote?: () => void;
  onScrollToStory?: (e: React.MouseEvent) => void;
}

// 1. Custom Manufacturing Icon (Gear/Cog)
export const CustomManufacturingIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// 2. Consistent Quality Icon (Award Ribbon Rosette)
export const ConsistentQualityIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

// 3. Trusted Partnerships Icon (Connected Network of 3 People)
export const TrustedPartnershipsIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="4" r="2.5" />
    <circle cx="5" cy="18" r="2.5" />
    <circle cx="19" cy="18" r="2.5" />
    <path d="M12 6.5v4" />
    <path d="M12 10.5 7 16" />
    <path d="M12 10.5 17 16" />
    <path d="M7.5 18h9" />
  </svg>
);

export const featureHighlights = [
  {
    id: 'manufacturing',
    title: 'Custom\nManufacturing',
    icon: CustomManufacturingIcon,
  },
  {
    id: 'quality',
    title: 'Consistent\nQuality',
    icon: ConsistentQualityIcon,
  },
  {
    id: 'partnerships',
    title: 'Trusted\nPartnerships',
    icon: TrustedPartnershipsIcon,
  },
];

export const PartnershipSlide: React.FC<PartnershipSlideProps> = ({
  onScrollToStory,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full flex flex-col justify-center">
      {/* =========================================================================
          DESKTOP RIGHT SIDE: SMOOTH GRADIENT-BLENDED EVENT STAGE PHOTOGRAPH
          ========================================================================= */}
      <div className="hidden lg:flex absolute right-0 top-0 bottom-[-10px] z-10 w-[52vw] xl:w-[55vw] max-w-[960px] 2xl:max-w-[1120px] justify-end items-center pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-full flex justify-end items-center"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.12) 10%, rgba(0,0,0,0.7) 30%, black 48%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.12) 10%, rgba(0,0,0,0.7) 30%, black 48%)',
          }}
        >
          <img
            src="/assets/images/about/event-partnership-stage.webp"
            alt="TeesZone - Crafting Custom Apparel with Trust, Quality & Partnerships at 50 Years of Ilaiyaraaja Celebration"
            className="w-full h-full object-cover object-center filter saturate-[1.04] contrast-[1.03]"
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
            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-heading font-bold text-charcoal-900 leading-[1.08] tracking-tight max-w-2xl"
            >
              <span className="text-charcoal-900">
                Crafting Custom Apparel with{' '}
              </span>
              <span className="text-burgundy-700">
                Trust, Quality &amp; Partnerships
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: 'easeOut' }}
              className="text-lg sm:text-xl lg:text-[20px] text-charcoal-700 leading-relaxed font-normal max-w-xl"
            >
              At TeesZone, we combine manufacturing expertise, customization, and long-term partnerships to deliver high-quality apparel solutions for businesses, events, and institutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-2 pb-1 max-w-md"
            >
              {featureHighlights.map((feat) => {
                const IconComp = feat.icon;
                return (
                  <div key={feat.id} className="flex flex-col items-center text-center">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 text-burgundy-700 flex items-center justify-center transition-transform hover:scale-110 duration-200">
                      <IconComp className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
                    </div>
                    <span className="text-xs sm:text-[13px] lg:text-[14px] font-heading font-medium text-charcoal-900 leading-snug mt-1.5 whitespace-pre-line text-center">
                      {feat.title}
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
                <span>Know More About TeesZone</span>
                <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 xl:col-span-5" aria-hidden="true" />
        </div>

        {/* =====================================================================
            2. MOBILE VIEW
            - Spacing from navbar added (pt-[80px])
            - Description font size decreased on Slide 3 only as requested
            - 4-side shaded effect so image blends naturally with background (NO box appearance)
            ===================================================================== */}
        <div className="flex lg:hidden flex-col items-center justify-between text-center h-full w-full pt-[80px] xs:pt-[84px] pb-10 xs:pb-12 px-4 overflow-hidden relative">
          
          {/* 1. Heading (Badge Removed) */}
          <div className="flex flex-col items-center space-y-1 w-full shrink-0">
            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[24px] xs:text-[26px] sm:text-3xl font-heading font-bold text-charcoal-900 leading-[1.12] tracking-tight text-center max-w-[340px] xs:max-w-[370px] mx-auto"
            >
              <span className="text-charcoal-900">
                Crafting Custom Apparel with{' '}
              </span>
              <span className="text-burgundy-700">
                Trust, Quality &amp; Partnerships
              </span>
            </motion.h1>

            {/* 2. Description: Decreased Size only on Slide 3 as requested */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="text-[12px] xs:text-[13px] text-charcoal-700 font-normal leading-relaxed max-w-[290px] xs:max-w-[320px] text-center mx-auto mt-0.5"
            >
              At TeesZone, we combine manufacturing expertise, customization, and long-term partnerships to deliver high-quality apparel solutions for businesses, events, and institutions.
            </motion.p>
          </div>

          {/* 3. Hero Image: 4-Side Shaded Effect to blend seamlessly into background (NO box crop) */}
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
              src="/assets/images/about/event-partnership-stage.webp"
              alt="TeesZone Crafting Custom Apparel with Trust, Quality & Partnerships"
              className="w-full h-full object-cover object-center filter saturate-[1.04] contrast-[1.03]"
              loading="eager"
            />
          </motion.div>

          {/* 4. CTA Button */}
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
              <span>Know More About TeesZone</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* 5. Other Contents (Three Standalone Feature Highlights) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="flex items-start justify-center gap-4 xs:gap-6 sm:gap-8 w-full max-w-[360px] pt-1 pb-1 shrink-0"
          >
            {featureHighlights.map((item) => {
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

export default PartnershipSlide;
