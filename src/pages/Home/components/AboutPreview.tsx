import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layers, Award, Truck, ArrowRight } from 'lucide-react';

export const AboutPreview: React.FC = () => {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14 lg:pb-16 bg-[#FFFDF9] relative overflow-hidden">
      {/* Background soft ambient gradient ribbons (Strictly Warm Cream & Burgundy theme - no other colors) */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-burgundy-50/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-warm-100/50 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 w-full">

          {/* Left Column: Brand Content & Stats (Centered on mobile, left-aligned on desktop) */}
          <div className="w-full lg:w-[46%] xl:w-[44%] shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
            {/* Category Eyebrow matching Image 1: ABOUT TEESZONE — */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-2 sm:mb-2.5">
              <span className="text-xs sm:text-sm font-heading font-extrabold uppercase tracking-widest text-[#A41535]">
                ABOUT TEESZONE
              </span>
              <span className="w-5 h-[1.5px] bg-[#A41535] rounded-full inline-block" />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-heading font-black leading-[1.08] tracking-tight">
              <span className="text-charcoal-900 block">MORE THAN JUST</span>
              <span className="text-burgundy-700 block">T-SHIRTS</span>
            </h2>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base md:text-lg text-charcoal-600 leading-relaxed max-w-xl mt-3.5 sm:mt-4 font-normal mx-auto lg:mx-0">
              We manufacture high-quality T-shirts that help individuals, businesses and brands express their identity with style and confidence.
            </p>

            {/* CTA Button: Our Story -> */}
            <div className="mt-5 sm:mt-6 flex justify-center lg:justify-start w-full">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 sm:px-8 py-2.5 sm:py-3 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-heading font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group w-fit"
              >
                <span>Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Showcase Image (Positioned under CTA button on mobile, clean transparent frame) */}
            <div className="block lg:hidden mt-8 w-full max-w-[560px] mx-auto">
              <div className="relative w-full aspect-[1024/682]">
                {/* Cinematic Ambient Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.06, 1],
                    opacity: [0.35, 0.55, 0.35],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 bg-burgundy-200/30 rounded-full blur-2xl pointer-events-none"
                />
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-full h-full"
                >
                  <img
                    src="/assets/images/about-office-framed.png"
                    alt="TeesZone corporate showroom and executive office framed"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </div>

            {/* 3 Core Value Badges - Single horizontal row with vertical dividers (Centered on mobile) */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-burgundy-100/70 w-full flex justify-center lg:justify-start">
              <div className="flex flex-row items-center justify-center sm:justify-start gap-4 sm:gap-7 md:gap-9 max-w-xl mx-auto lg:mx-0">
                {/* Badge 1 */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left shrink-0">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-burgundy-50 border border-burgundy-100/70 flex items-center justify-center mb-1.5 text-burgundy-700 mx-auto sm:mx-0">
                    <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-burgundy-700" />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base font-heading font-bold text-charcoal-900 leading-tight whitespace-nowrap">
                    Custom &amp; Blank
                  </p>
                  <p className="text-[11px] sm:text-xs text-burgundy-700 font-medium whitespace-nowrap mt-0.5">
                    Apparel
                  </p>
                </div>

                {/* Divider 1 */}
                <div className="w-px h-10 sm:h-12 bg-burgundy-200/60 shrink-0" />

                {/* Badge 2 */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left shrink-0">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-burgundy-50 border border-burgundy-100/70 flex items-center justify-center mb-1.5 text-burgundy-700 mx-auto sm:mx-0">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-burgundy-700" />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base font-heading font-bold text-charcoal-900 leading-tight whitespace-nowrap">
                    Complete B2B
                  </p>
                  <p className="text-[11px] sm:text-xs text-burgundy-700 font-medium whitespace-nowrap mt-0.5">
                    Solutions
                  </p>
                </div>

                {/* Divider 2 */}
                <div className="w-px h-10 sm:h-12 bg-burgundy-200/60 shrink-0" />

                {/* Badge 3 */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left shrink-0">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-burgundy-50 border border-burgundy-100/70 flex items-center justify-center mb-1.5 text-burgundy-700 mx-auto sm:mx-0">
                    <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-burgundy-700" />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base font-heading font-bold text-charcoal-900 leading-tight whitespace-nowrap">
                    Nationwide
                  </p>
                  <p className="text-[11px] sm:text-xs text-burgundy-700 font-medium whitespace-nowrap mt-0.5">
                    Bulk Supply
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enlarged & Precision-Aligned Framed Image matching Image 1 (Desktop) */}
          <div className="hidden lg:flex w-full lg:w-[54%] xl:w-[56%] shrink-0 relative items-center justify-end">
            <div className="relative w-full max-w-[760px] xl:max-w-[840px] 2xl:max-w-[880px] aspect-[1024/682]">
              {/* Cinematic Ambient Glow & Pulse Behind Frame */}
              <motion.div
                animate={{
                  scale: [1, 1.07, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-8 bg-gradient-to-tr from-burgundy-200/40 via-burgundy-100/25 to-transparent rounded-full blur-3xl pointer-events-none"
              />

              {/* Floating Framed Image Container with transparent background */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative w-full h-full"
              >
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full h-full"
                >
                  <img
                    src="/assets/images/about-office-framed.png"
                    alt="TeesZone executive office showroom framed in signature organic ribbon"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
