import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { Award, Layers, Truck, Handshake, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ExpansionJourney: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Motion variants with full prefers-reduced-motion support
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: (customDelay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        delay: customDelay,
        ease: 'easeOut',
      },
    }),
  };

  const scaleReveal: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 },
    visible: (customDelay: number = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.75,
        delay: customDelay,
        ease: 'easeOut',
      },
    }),
  };

  const badgeFloat: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12, scale: 0.95 },
    visible: (customDelay: number = 0.3) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: customDelay,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section
      id="expansion-journey"
      className="relative w-full overflow-hidden bg-[#FAF6F3] py-14 sm:py-20 lg:py-24 select-none"
      aria-label="TeesZone Expansion Journey"
    >
      {/* =========================================================================
          BACKGROUND: INDIA MAP BACKGROUND (DESKTOP & MOBILE DEDICATED ASSETS)
          - Desktop (1st image): india-map-desktop.png (1024x576)
          - Mobile (2nd image): india-map-mobile.png (576x1024)
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full h-full"
        >
          {/* Desktop Background */}
          <img
            src="/assets/images/locations/india-map-desktop.png"
            alt="India expansion route map"
            className="hidden lg:block w-full h-full object-cover object-center opacity-95"
            loading="lazy"
          />
          {/* Mobile Background */}
          <img
            src="/assets/images/locations/india-map-mobile.png"
            alt="India expansion route map mobile"
            className="block lg:hidden w-full h-full object-cover object-top opacity-95"
            loading="lazy"
          />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =====================================================================
            1. DESKTOP VIEW (LARGE TEXT & ICONS, LOGO REMOVED AT TOP-LEFT)
            - Top-Left: Eyebrow, Main Heading (Large), Description (Large), 4 Benefits (Large)
            - Top-Right: Sunguvarchatram Building in Organic Frame + "Now in" Badge
            - Bottom-Left: Ernakulam in Organic Frame + "Coming Soon" Badge
            - Bottom-Right: OUR PRESENCE, 2 Locations (Large), Explore CTA Button (Large)
            ===================================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-14 items-center">
          
          {/* ==================== TOP-LEFT CONTENT AREA ==================== */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Eyebrow Heading (TeesZone logo removed as requested) */}
            <motion.div
              custom={0.05}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-center gap-2.5 pt-1"
            >
              <span className="text-sm sm:text-base font-heading font-extrabold uppercase tracking-widest text-[#80011F]">
                OUR EXPANSION JOURNEY
              </span>
              <span className="w-8 h-[2px] bg-[#80011F] rounded-full inline-block" />
            </motion.div>

            {/* Main Heading: Increased size to match other sections */}
            <motion.h2
              custom={0.12}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-heading font-black leading-[1.08] tracking-tight"
            >
              <span className="text-[#1A1D20] block">Growing Closer to</span>
              <span className="text-[#80011F] block">Your Business</span>
            </motion.h2>

            {/* Description: Increased size without increasing boldness */}
            <motion.p
              custom={0.18}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-lg sm:text-xl xl:text-[21px] text-charcoal-600 font-normal leading-relaxed max-w-xl"
            >
              From the textile roots of Erode to new destinations, TeesZone is expanding to serve businesses across Tamil Nadu, Kerala and beyond.
            </motion.p>

            {/* 4 Benefits Horizontal Strip: Increased text & icon size */}
            <motion.div
              custom={0.24}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="pt-2"
            >
              <div className="flex items-center gap-5 xl:gap-6 border-y border-gray-300/80 py-4 max-w-xl">
                
                {/* 1. Wider Reach */}
                <div className="flex items-center gap-2.5 xl:gap-3">
                  <Award className="w-6 h-6 xl:w-7 xl:h-7 text-[#80011F] shrink-0 stroke-[2.2]" />
                  <span className="text-sm xl:text-base font-heading font-bold text-charcoal-800 whitespace-nowrap">
                    Wider Reach
                  </span>
                </div>

                <div className="w-[1.5px] h-6 bg-gray-300 shrink-0" aria-hidden="true" />

                {/* 2. Higher Capacity */}
                <div className="flex items-center gap-2.5 xl:gap-3">
                  <Layers className="w-6 h-6 xl:w-7 xl:h-7 text-[#80011F] shrink-0 stroke-[2.2]" />
                  <span className="text-sm xl:text-base font-heading font-bold text-charcoal-800 whitespace-nowrap">
                    Higher Capacity
                  </span>
                </div>

                <div className="w-[1.5px] h-6 bg-gray-300 shrink-0" aria-hidden="true" />

                {/* 3. Faster Delivery */}
                <div className="flex items-center gap-2.5 xl:gap-3">
                  <Truck className="w-6 h-6 xl:w-7 xl:h-7 text-[#80011F] shrink-0 stroke-[2.2]" />
                  <span className="text-sm xl:text-base font-heading font-bold text-charcoal-800 whitespace-nowrap">
                    Faster Delivery
                  </span>
                </div>

                <div className="w-[1.5px] h-6 bg-gray-300 shrink-0" aria-hidden="true" />

                {/* 4. Better Support */}
                <div className="flex items-center gap-2.5 xl:gap-3">
                  <Handshake className="w-6 h-6 xl:w-7 xl:h-7 text-[#80011F] shrink-0 stroke-[2.2]" />
                  <span className="text-sm xl:text-base font-heading font-bold text-charcoal-800 whitespace-nowrap">
                    Better Support
                  </span>
                </div>

              </div>
            </motion.div>

          </div>

          {/* ==================== TOP-RIGHT: SUNGUVARCHATRAM ==================== */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <motion.div
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={scaleReveal}
              className="relative w-full max-w-[560px] xl:max-w-[620px]"
            >
              {/* Organic Frame Photograph */}
              <img
                src="/assets/images/locations/sunguvarchatram-tight.png"
                alt="TeesZone Sunguvarchatram facility in Vijaya Complex"
                className="w-full h-auto object-contain filter drop-shadow-[0_22px_44px_rgba(128,1,31,0.20)]"
                loading="eager"
              />

              {/* Floating Badge: Now in Sunguvarchatram (Increased size) */}
              <motion.div
                custom={0.35}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={badgeFloat}
                className="absolute top-2 left-4 xl:top-3 xl:left-8 z-20"
              >
                <div className="inline-flex items-center gap-3 px-5 py-2.5 xl:px-6 xl:py-3 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/90 shadow-md">
                  <div className="w-8 h-8 rounded-full bg-[#80011F]/10 flex items-center justify-center text-[#80011F]">
                    <MapPin className="w-4 h-4 xl:w-5 xl:h-5 fill-[#80011F]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] xl:text-xs font-semibold text-charcoal-500 uppercase tracking-wider leading-none">
                      Now in
                    </p>
                    <p className="text-sm xl:text-base font-heading font-black text-charcoal-900 leading-tight mt-0.5">
                      Sunguvarchatram
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ==================== BOTTOM-LEFT: ERNAKULAM ==================== */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start pt-6 xl:pt-10">
            <motion.div
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={scaleReveal}
              className="relative w-full max-w-[560px] xl:max-w-[620px]"
            >
              {/* Organic Frame Photograph */}
              <img
                src="/assets/images/locations/ernakulam-tight.png"
                alt="TeesZone upcoming location in Ernakulam, Kerala"
                className="w-full h-auto object-contain filter drop-shadow-[0_22px_44px_rgba(128,1,31,0.20)]"
                loading="lazy"
              />

              {/* Floating Badge: Coming Soon - Ernakulam, Kerala (Increased size) */}
              <motion.div
                custom={0.35}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={badgeFloat}
                className="absolute top-2 right-4 xl:top-3 xl:right-8 z-20"
              >
                <div className="inline-flex items-center gap-3 px-5 py-2.5 xl:px-6 xl:py-3 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/90 shadow-md">
                  <div className="w-8 h-8 rounded-full bg-[#80011F]/10 flex items-center justify-center text-[#80011F]">
                    <MapPin className="w-4 h-4 xl:w-5 xl:h-5 fill-[#80011F]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] xl:text-xs font-bold text-[#80011F] uppercase tracking-wider leading-none">
                      Coming Soon
                    </p>
                    <p className="text-sm xl:text-base font-heading font-black text-charcoal-900 leading-tight mt-0.5">
                      Ernakulam, Kerala
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ==================== BOTTOM-RIGHT: OUR PRESENCE & CTA ==================== */}
          <div className="lg:col-span-6 space-y-6 xl:space-y-7 text-left pt-6 xl:pt-10 pl-4 xl:pl-8">
            
            {/* Eyebrow */}
            <motion.div
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-center gap-2.5"
            >
              <span className="text-sm sm:text-base font-heading font-extrabold uppercase tracking-widest text-[#80011F]">
                OUR PRESENCE
              </span>
              <span className="w-8 h-[2px] bg-[#80011F] rounded-full inline-block" />
            </motion.div>

            {/* Two Location Columns: Increased size */}
            <motion.div
              custom={0.16}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-center gap-8 xl:gap-14"
            >
              {/* Location 1 */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 xl:w-11 xl:h-11 rounded-full bg-[#80011F]/10 flex items-center justify-center text-[#80011F] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 xl:w-6 xl:h-6 fill-[#80011F]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl xl:text-2xl font-heading font-black text-charcoal-900 leading-tight">
                    Sunguvarchatram
                  </h3>
                  <p className="text-sm xl:text-base text-charcoal-500 font-medium mt-1">
                    Kanchipuram, Tamil Nadu
                  </p>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="w-[1.5px] h-12 xl:h-14 bg-gray-300" aria-hidden="true" />

              {/* Location 2 */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 xl:w-11 xl:h-11 rounded-full bg-[#80011F]/10 flex items-center justify-center text-[#80011F] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 xl:w-6 xl:h-6 fill-[#80011F]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl xl:text-2xl font-heading font-black text-charcoal-900 leading-tight">
                    Ernakulam <span className="text-sm font-bold text-[#80011F] block sm:inline">(Coming Soon)</span>
                  </h3>
                  <p className="text-sm xl:text-base text-charcoal-500 font-medium mt-1">
                    Kerala
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Explore Locations CTA Button: Increased size */}
            <motion.div
              custom={0.24}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="pt-2"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-gradient-to-r from-[#80011F] via-[#70011B] to-[#570018] hover:from-[#570018] hover:to-[#3E0011] text-white font-heading font-bold text-base xl:text-lg shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <span>Explore Our Locations</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </motion.div>

          </div>

        </div>

        {/* =====================================================================
            2. MOBILE VIEW (INCREASED TEXT & ICON SIZES, LOGO REMOVED)
            1. OUR EXPANSION JOURNEY eyebrow centered
            2. Growing Closer to Your Business heading (large)
            3. Expansion description (large)
            4. Four benefits in compact horizontal row (increased icons & text)
            5. Sunguvarchatram image in organic frame + floating badge
            6. Ernakulam image in organic frame + floating badge
            7. OUR PRESENCE heading centered
            8. Two locations details with icons and divider (large)
            9. Explore Our Locations CTA button (large)
            ===================================================================== */}
        <div className="block lg:hidden space-y-6 text-center max-w-lg mx-auto">
          
          {/* 1. Eyebrow Centered (Logo removed) */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <span className="w-6 h-[2px] bg-[#80011F] rounded-full inline-block" />
            <span className="text-xs sm:text-sm font-heading font-extrabold uppercase tracking-widest text-[#80011F]">
              OUR EXPANSION JOURNEY
            </span>
            <span className="w-6 h-[2px] bg-[#80011F] rounded-full inline-block" />
          </div>

          {/* 2. Heading Centered (Increased size) */}
          <h2 className="text-3xl sm:text-4xl font-heading font-black leading-tight tracking-tight">
            <span className="text-[#1A1D20] block">Growing Closer to</span>
            <span className="text-[#80011F] block">Your Business</span>
          </h2>

          {/* 3. Description Centered (Increased size) */}
          <p className="text-sm sm:text-base text-charcoal-600 font-normal leading-relaxed max-w-md mx-auto px-2">
            From the textile roots of Erode to new destinations, TeesZone is expanding to serve businesses across Tamil Nadu, Kerala and beyond.
          </p>

          {/* 4. Four Benefits (Increased icon & text size) */}
          <div className="flex items-center justify-between border-y border-gray-300/80 py-3.5 px-1">
            <div className="flex flex-col items-center flex-1">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#80011F] mb-1 stroke-[2.2]" />
              <span className="text-xs sm:text-sm font-heading font-bold text-charcoal-800 leading-tight">
                Wider<br />Reach
              </span>
            </div>
            <div className="w-[1px] h-7 bg-gray-300" aria-hidden="true" />
            <div className="flex flex-col items-center flex-1">
              <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-[#80011F] mb-1 stroke-[2.2]" />
              <span className="text-xs sm:text-sm font-heading font-bold text-charcoal-800 leading-tight">
                Higher<br />Capacity
              </span>
            </div>
            <div className="w-[1px] h-7 bg-gray-300" aria-hidden="true" />
            <div className="flex flex-col items-center flex-1">
              <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-[#80011F] mb-1 stroke-[2.2]" />
              <span className="text-xs sm:text-sm font-heading font-bold text-charcoal-800 leading-tight">
                Faster<br />Delivery
              </span>
            </div>
            <div className="w-[1px] h-7 bg-gray-300" aria-hidden="true" />
            <div className="flex flex-col items-center flex-1">
              <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-[#80011F] mb-1 stroke-[2.2]" />
              <span className="text-xs sm:text-sm font-heading font-bold text-charcoal-800 leading-tight">
                Better<br />Support
              </span>
            </div>
          </div>

          {/* 5. Sunguvarchatram Image in Organic Frame */}
          <div className="relative w-full max-w-[440px] mx-auto pt-2">
            <img
              src="/assets/images/locations/sunguvarchatram-tight.png"
              alt="TeesZone Sunguvarchatram facility"
              className="w-full h-auto object-contain filter drop-shadow-[0_14px_28px_rgba(128,1,31,0.18)]"
              loading="eager"
            />
            {/* Floating Badge */}
            <div className="absolute top-1 left-2 sm:top-2 sm:left-4 z-20">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 shadow-sm">
                <div className="w-6 h-6 rounded-full bg-[#80011F]/10 flex items-center justify-center text-[#80011F]">
                  <MapPin className="w-3.5 h-3.5 fill-[#80011F]" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-medium text-charcoal-500 uppercase leading-none">Now in</p>
                  <p className="text-xs sm:text-sm font-heading font-black text-charcoal-900 leading-tight">Sunguvarchatram</p>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Ernakulam Image in Organic Frame */}
          <div className="relative w-full max-w-[440px] mx-auto pt-2">
            <img
              src="/assets/images/locations/ernakulam-tight.png"
              alt="TeesZone upcoming location in Ernakulam, Kerala"
              className="w-full h-auto object-contain filter drop-shadow-[0_14px_28px_rgba(128,1,31,0.18)]"
              loading="lazy"
            />
            {/* Floating Badge */}
            <div className="absolute top-1 right-2 sm:top-2 sm:right-4 z-20">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 shadow-sm">
                <div className="w-6 h-6 rounded-full bg-[#80011F]/10 flex items-center justify-center text-[#80011F]">
                  <MapPin className="w-3.5 h-3.5 fill-[#80011F]" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-[#80011F] uppercase leading-none">Coming Soon</p>
                  <p className="text-xs sm:text-sm font-heading font-black text-charcoal-900 leading-tight">Ernakulam, Kerala</p>
                </div>
              </div>
            </div>
          </div>

          {/* 7. OUR PRESENCE & Locations (Increased text size) */}
          <div className="pt-2 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-[2px] bg-[#80011F] rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-heading font-extrabold uppercase tracking-widest text-[#80011F]">
                OUR PRESENCE
              </span>
              <span className="w-6 h-[2px] bg-[#80011F] rounded-full inline-block" />
            </div>

            <div className="flex items-center justify-center gap-6 sm:gap-10 text-left">
              {/* Loc 1 */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#80011F]/10 flex items-center justify-center text-[#80011F] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 fill-[#80011F]" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-heading font-black text-charcoal-900 leading-tight">
                    Sunguvarchatram
                  </p>
                  <p className="text-xs text-charcoal-500 font-medium">
                    Kanchipuram, TN
                  </p>
                </div>
              </div>

              <div className="w-[1px] h-9 bg-gray-300" aria-hidden="true" />

              {/* Loc 2 */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#80011F]/10 flex items-center justify-center text-[#80011F] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 fill-[#80011F]" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-heading font-black text-charcoal-900 leading-tight">
                    Ernakulam <span className="text-xs text-[#80011F] font-bold">(Coming Soon)</span>
                  </p>
                  <p className="text-xs text-charcoal-500 font-medium">
                    Kerala
                  </p>
                </div>
              </div>
            </div>

            {/* 8. CTA Button Centered (Increased size) */}
            <div className="pt-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#80011F] via-[#70011B] to-[#570018] text-white font-heading font-bold text-sm sm:text-base shadow-md"
              >
                <span>Explore Our Locations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExpansionJourney;
