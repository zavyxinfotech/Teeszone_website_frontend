import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const VisionMission: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20"
      aria-label="TeesZone Vision and Mission"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =====================================================================
            1. DESKTOP VIEW: SAME ROW WITH THIN VERTICAL SEPARATOR LINE
            - Left: Vision (3D Binoculars on left, text on right)
            - Center: Very thin vertical separator line
            - Right: Mission (3D Target on left, text on right)
            - ZERO card backgrounds, ZERO card borders
            ===================================================================== */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1px_1fr] items-center gap-8 xl:gap-14">
          
          {/* VISION COLUMN */}
          <div className="flex items-center gap-6 xl:gap-8 text-left">
            {/* 3D Model Icon on the Left Side */}
            <motion.div
              animate={{ y: shouldReduceMotion ? 0 : [-3, 3, -3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-28 xl:w-36 shrink-0 pointer-events-none select-none"
            >
              <img
                src="/assets/images/about/vision-binoculars.png"
                alt="TeesZone Vision 3D Model"
                className="w-full h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(128,1,31,0.18)]"
                loading="eager"
              />
            </motion.div>

            {/* Text Content */}
            <div className="space-y-2">
              <h2 className="text-3xl xl:text-4xl font-heading font-black text-charcoal-900 leading-tight">
                Our <span className="text-[#80011F]">Vision</span>
              </h2>
              <p className="text-base xl:text-lg text-charcoal-600 font-normal leading-relaxed">
                Leading Apparel Manufacturing Partner for Quality &amp; Customization.
              </p>
            </div>
          </div>

          {/* VERY THIN VERTICAL SEPARATOR LINE */}
          <div className="h-32 xl:h-36 w-[1px] bg-charcoal-200/70" aria-hidden="true" />

          {/* MISSION COLUMN */}
          <div className="flex items-center gap-6 xl:gap-8 text-left">
            {/* 3D Model Icon on the Left Side */}
            <motion.div
              animate={{ y: shouldReduceMotion ? 0 : [3, -3, 3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-28 xl:w-36 shrink-0 pointer-events-none select-none"
            >
              <img
                src="/assets/images/about/mission-target.png"
                alt="TeesZone Mission 3D Model"
                className="w-full h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(128,1,31,0.18)]"
                loading="eager"
              />
            </motion.div>

            {/* Text Content */}
            <div className="space-y-2">
              <h2 className="text-3xl xl:text-4xl font-heading font-black text-charcoal-900 leading-tight">
                Our <span className="text-[#80011F]">Mission</span>
              </h2>
              <p className="text-base xl:text-lg text-charcoal-600 font-normal leading-relaxed">
                Delivering premium, durable custom apparel that builds brand identity.
              </p>
            </div>
          </div>

        </div>

        {/* =====================================================================
            2. MOBILE VIEW: CLEAN STACKED WITH THIN SEPARATOR LINE
            - Increased font size without increasing boldness
            - 3D Model Icons aligned near text content
            - ZERO card backgrounds, ZERO card borders
            ===================================================================== */}
        <div className="block lg:hidden space-y-8 sm:space-y-10">
          
          {/* MOBILE VISION */}
          <div className="flex items-center gap-4 sm:gap-6 text-left">
            <motion.div
              animate={{ y: shouldReduceMotion ? 0 : [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-24 sm:w-28 shrink-0 pointer-events-none select-none"
            >
              <img
                src="/assets/images/about/vision-binoculars.png"
                alt="TeesZone Vision 3D Model"
                className="w-full h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(128,1,31,0.16)]"
                loading="eager"
              />
            </motion.div>
            <div className="space-y-1.5 flex-1">
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-charcoal-900 leading-tight">
                Our <span className="text-[#80011F]">Vision</span>
              </h2>
              <p className="text-base sm:text-lg text-charcoal-600 font-normal leading-relaxed">
                Leading Apparel Manufacturing Partner for Quality &amp; Customization.
              </p>
            </div>
          </div>

          {/* VERY THIN SEPARATOR LINE IN MOBILE */}
          <div className="w-full h-[1px] bg-charcoal-200/60" aria-hidden="true" />

          {/* MOBILE MISSION */}
          <div className="flex items-center gap-4 sm:gap-6 text-left">
            <motion.div
              animate={{ y: shouldReduceMotion ? 0 : [2, -2, 2] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-24 sm:w-28 shrink-0 pointer-events-none select-none"
            >
              <img
                src="/assets/images/about/mission-target.png"
                alt="TeesZone Mission 3D Model"
                className="w-full h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(128,1,31,0.16)]"
                loading="eager"
              />
            </motion.div>
            <div className="space-y-1.5 flex-1">
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-charcoal-900 leading-tight">
                Our <span className="text-[#80011F]">Mission</span>
              </h2>
              <p className="text-base sm:text-lg text-charcoal-600 font-normal leading-relaxed">
                Delivering premium, durable custom apparel that builds brand identity.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;
