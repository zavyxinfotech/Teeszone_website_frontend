import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/common/Button';
import { MagneticButton } from '@/components/common/MagneticButton';

interface HeroSectionProps {
  onOpenQuote?: () => void;
}

// 4 Signature Hero Value Badges - with custom uploaded icons
const heroTrustFeatures = [
  {
    id: 'fabrics',
    title: 'Premium Quality',
    subtitle: 'Fabrics',
    img: '/assets/images/hero-icons/fabrics.png',
  },
  {
    id: 'branding',
    title: 'Custom Design',
    subtitle: '& Branding',
    img: '/assets/images/hero-icons/branding.png',
  },
  {
    id: 'capacity',
    title: 'Bulk Production',
    subtitle: 'Capacity',
    img: '/assets/images/hero-icons/capacity.png',
  },
  {
    id: 'delivery',
    title: 'Pan India',
    subtitle: 'Delivery',
    img: '/assets/images/hero-icons/delivery.png',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF6F2]">
      {/* =========================================================================
          DESKTOP HERO VIEW (md:flex, hidden on mobile)
          - Warm luxury cream background styling with flowing organic backdrop curves
          - Transparent navbar friendly: Starts with 72px clearance, nothing behind navbar
          - Fits within desktop viewport height (max-h-[760px])
          - All 5 workers' "YOUR LOGO HERE" text 100% visible, NOT hidden by the building
          - "One Brand Every Sector" text positioned in cross angle (-13deg)
          ========================================================================= */}
      <div className="hidden md:flex relative w-full h-[calc(100vh)] min-h-[600px] max-h-[760px] pt-[72px] sm:pt-[76px] lg:pt-[80px] items-center overflow-hidden bg-[#FAF6F2]">

        {/* =====================================================================
            1. CINEMATIC BACKGROUND THEME (Warm Cream Base, Organic Curves & Ambient Radiance)
            ===================================================================== */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden bg-[#FAF6F2]">
          {/* Warm Cream Base with Layered Curves & Ambient Radiance */}
          <div className="w-full h-full bg-[#FAF6F2] relative">
            {/* Soft Cream to Warm Amber Gradient Glow behind text and collage */}
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
                fill="url(#creamOrganicBackdrop)"
                opacity="0.85"
              />
              <path
                d="M680,0 C820,180 720,380 790,560 C840,680 940,740 1060,800 L1440,800 L1440,0 Z"
                fill="url(#creamLayerBackdrop)"
                opacity="0.55"
              />
              <defs>
                <linearGradient id="creamOrganicBackdrop" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F5ECE1" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#FAF4EB" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#F0E5D6" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="creamLayerBackdrop" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFF7EE" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#F5ECE1" stopOpacity="0.45" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Decorative Royal Burgundy Satin Fabric Wave at Top Right Corner */}
          <svg
            viewBox="0 0 800 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 right-0 w-[55%] h-[55%] object-cover"
            preserveAspectRatio="none"
          >
            <path
              d="M320,0 C480,90 600,60 800,190 L800,0 Z"
              fill="url(#desktopSatinWave)"
            />
            <path
              d="M440,0 C560,110 680,85 800,240 L800,0 Z"
              fill="#800020"
              fillOpacity="0.18"
            />
            <defs>
              <linearGradient id="desktopSatinWave" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#580819" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#7A1027" stopOpacity="0.75" />
                <stop offset="80%" stopColor="#9C1E3A" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#580819" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>

          {/* "One Brand Every Sector" Cursive Script - Positioned in cross angle (-13deg) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-[112px] lg:top-[122px] xl:top-[128px] right-[4%] sm:right-[5%] lg:right-[6%] xl:right-[7%] pointer-events-none select-none z-15"
          >
            <div className="transform -rotate-[13deg] text-center">
              <span className="block font-['Brush_Script_MT',_'Dancing_Script',_cursive] italic text-3xl lg:text-[40px] text-[#580819] leading-tight tracking-wide drop-shadow-xs">
                One Brand
              </span>
              <span className="block font-['Brush_Script_MT',_'Dancing_Script',_cursive] italic text-3xl lg:text-[40px] text-[#580819] leading-tight tracking-wide pl-8 drop-shadow-xs">
                Every Sector
              </span>
            </div>
          </motion.div>
        </div>

        {/* =====================================================================
            2. MAIN CONTENT WRAPPER: Left Typography & Right Layered Composition
            - max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 aligns straight in line with Navbar TeesZone Logo
            ===================================================================== */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-between">
          <div className="flex items-center justify-between gap-6 lg:gap-10 w-full h-full">

            {/* Left Content Column: Enlarged font sizes with exact weight & color preservation */}
            <div className="w-[48%] lg:w-[46%] xl:w-[45%] shrink-0 space-y-4 lg:space-y-5 z-20">

              {/* Overline Tag Badge */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <span className="text-sm sm:text-base font-heading font-semibold uppercase tracking-wider text-burgundy-700 block">
                  PREMIUM T-SHIRT MANUFACTURER
                </span>
              </motion.div>

              {/* Main Headline: Increased size without bold excess, preserving color theme */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-heading font-bold text-charcoal-900 leading-[1.08] tracking-tight">
                  CUSTOM APPAREL <br />
                  <span className="text-burgundy-700">FOR EVERY SECTOR</span>
                </h1>
              </motion.div>

              {/* Description Paragraph: Enlarged for effortless readability */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              >
                <p className="text-lg sm:text-xl lg:text-[20px] text-charcoal-700 leading-relaxed font-normal max-w-xl">
                  High-quality, customized T-shirts, uniforms and apparel for businesses,
                  organizations, events and brands across India.
                </p>
              </motion.div>

              {/* Dual CTA Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                className="flex flex-wrap items-center gap-4 pt-1"
              >
                <MagneticButton>
                  <Button
                    variant="primary"
                    size="md"
                    withArrow
                    onClick={onOpenQuote}
                    to={!onOpenQuote ? '/contact?mode=quote' : undefined}
                    className="rounded-full shadow-soft hover:shadow-soft-lg text-base sm:text-lg py-3 px-8 sm:px-9 bg-burgundy-700 hover:bg-burgundy-800 text-white font-medium transition-all"
                  >
                    Get a Quote
                  </Button>
                </MagneticButton>

                <MagneticButton>
                  {/* Fixed hover effect: Text stays deep burgundy on hover, NEVER turning white */}
                  <Button
                    variant="outline"
                    size="md"
                    to="/products"
                    withArrow
                    className="rounded-full bg-white hover:bg-burgundy-50 border-2 border-burgundy-700 text-burgundy-700 hover:!text-burgundy-900 hover:border-burgundy-800 text-base sm:text-lg py-3 px-8 sm:px-9 transition-all duration-200 font-semibold shadow-2xs"
                  >
                    Explore Products
                  </Button>
                </MagneticButton>
              </motion.div>

              {/* 4 Trust Features in 1 Single Horizontal Row (4 Columns) with compact icons & increased generous spacing */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                className="pt-3 lg:pt-4"
              >
                <div className="flex items-start gap-8 sm:gap-10 lg:gap-12 xl:gap-14">
                  {heroTrustFeatures.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col items-center text-center group cursor-default transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      {/* Compact custom icon with transparent background and generous spacing */}
                      <div className="w-7 h-7 sm:w-8 sm:h-8 mb-1.5 flex items-center justify-center shrink-0">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-contain"
                          loading="eager"
                        />
                      </div>
                      {/* 2-line title and subtitle */}
                      <div className="text-center leading-tight">
                        <span className="text-xs sm:text-[13px] lg:text-[14px] font-heading font-medium text-charcoal-900 block whitespace-nowrap">
                          {item.title}
                        </span>
                        <span className="text-[11px] sm:text-xs lg:text-[12px] font-heading font-medium text-burgundy-700 block whitespace-nowrap">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Layered Workforce & Factory Building with Full Chest Logos Visible */}
            <div className="w-[52%] lg:w-[54%] xl:w-[55%] h-full relative flex items-end justify-end select-none pointer-events-none">

              {/* Layer 1: Workers (Heads below navbar, full chest "YOUR LOGO HERE" text completely visible) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="absolute top-[80px] lg:top-[90px] right-0 w-[94%] xl:w-[96%] z-10"
              >
                <picture className="w-full block">
                  <source type="image/webp" srcSet="/assets/images/hero-models-cutout.webp" />
                  <img
                    src="/assets/images/hero-models-cutout.png"
                    alt="TeesZone custom apparel models with visible brand logos"
                    className="w-full h-auto max-h-[460px] lg:max-h-[500px] xl:max-h-[530px] object-contain object-right-top"
                  />
                </picture>
              </motion.div>

              {/* Layer 2: TEESZONE Factory Building (Positioned at bottom floor, strictly below all chest logos) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                className="relative z-20 w-[82%] lg:w-[80%] xl:w-[78%] mb-1 lg:mb-2 mr-0"
              >
                <picture className="w-full block">
                  <source type="image/webp" srcSet="/assets/images/hero-factory-clean.webp" />
                  <img
                    src="/assets/images/hero-factory-clean.png"
                    alt="TeesZone Tiruppur factory showroom and delivery fleet"
                    className="w-full h-auto object-contain object-right-bottom drop-shadow-md"
                  />
                </picture>
              </motion.div>

            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE HERO VIEW (Exact match to Reference Image 2 right side)
          Centered typography, side-by-side buttons, unhidden chest logos, and 4-column badges row
          ========================================================================= */}
      <div className="md:hidden flex flex-col w-full bg-[#FAF6F2] pt-16 sm:pt-20">

        {/* Top Text Content Area - Compact to fit within mobile viewport height */}
        <div className="px-4 pt-2 pb-2 space-y-2.5 bg-transparent text-center">
          <span className="text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider text-burgundy-700 block">
            PREMIUM T-SHIRT MANUFACTURER
          </span>

          <h1 className="text-[26px] sm:text-3xl font-heading font-bold text-charcoal-900 leading-[1.12] tracking-tight">
            CUSTOM APPAREL <br />
            <span className="text-burgundy-700">FOR EVERY SECTOR</span>
          </h1>

          <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal max-w-xs mx-auto">
            High-quality customized T-shirts, uniforms and apparel for businesses and teams across India.
          </p>

          {/* Dual Action Buttons Centered Side-by-Side */}
          <div className="flex items-center justify-center gap-2.5 pt-1">
            <Button
              variant="primary"
              size="sm"
              withArrow
              onClick={onOpenQuote}
              to={!onOpenQuote ? '/contact?mode=quote' : undefined}
              className="rounded-full shadow-soft text-sm py-2.5 px-5 bg-burgundy-700 hover:bg-burgundy-800 text-white font-medium"
            >
              Get a Quote
            </Button>

            <Button
              variant="outline"
              size="sm"
              to="/products"
              withArrow
              className="rounded-full bg-white hover:bg-burgundy-50 border-2 border-burgundy-700 text-burgundy-700 hover:!text-burgundy-900 text-sm py-2.5 px-5 font-semibold"
            >
              Explore Products
            </Button>
          </div>
        </div>

        {/* Mobile Collage: Model image and building scaled down to comfortably fit within mobile height */}
        <div className="relative w-full overflow-hidden bg-transparent px-2 pt-1 pb-0 flex flex-col items-center">
          <div className="relative w-full max-w-[380px] flex flex-col items-center justify-end">
            {/* "One Brand Every Sector" Cursive Script for Mobile */}
            <div className="w-full flex justify-end pr-4 -mb-1 z-30 pointer-events-none select-none">
              <div className="transform -rotate-[10deg] text-right">
                <span className="block font-['Brush_Script_MT',_'Dancing_Script',_cursive] italic text-xl sm:text-2xl text-[#580819] leading-tight drop-shadow-xs font-semibold">
                  One Brand,
                </span>
                <span className="block font-['Brush_Script_MT',_'Dancing_Script',_cursive] italic text-xl sm:text-2xl text-[#580819] leading-tight pl-3 drop-shadow-xs font-semibold">
                  Every Sector
                </span>
              </div>
            </div>

            {/* Layer 1: Workers (Scaled down so they fit within mobile view height) */}
            <div className="relative z-10 w-[68%] sm:w-[65%] -mb-7 sm:-mb-9 flex justify-center">
              <picture className="w-full block">
                <source type="image/webp" srcSet="/assets/images/hero-models-mobile.webp" />
                <img
                  src="/assets/images/hero-models-mobile.png"
                  alt="TeesZone workforce models with custom branded apparel"
                  className="w-full h-auto max-h-[160px] sm:max-h-[190px] object-contain object-bottom drop-shadow-md"
                  loading="eager"
                />
              </picture>
            </div>

            {/* Layer 2: TEESZONE Factory Showroom Building (Cleanly proportioned at front base) */}
            <div className="relative z-20 w-[82%] sm:w-[80%] max-w-[320px]">
              <picture className="w-full block">
                <source type="image/webp" srcSet="/assets/images/hero-factory-clean.webp" />
                <img
                  src="/assets/images/hero-factory-clean.png"
                  alt="TeesZone Tiruppur factory showroom and delivery fleet"
                  className="w-full h-auto object-contain object-bottom drop-shadow-lg"
                  loading="eager"
                />
              </picture>
            </div>
          </div>
        </div>

        {/* Mobile 4 Trust Badges in a 4-Column Row with compact icons and generous spacing */}
        <div className="w-full bg-[#FAF6F2] py-3 px-3 border-b border-burgundy-100/40">
          <div className="flex items-start justify-around gap-3 sm:gap-5">
            {heroTrustFeatures.map((item) => (
              <div key={item.id} className="flex flex-col items-center text-center gap-1 flex-1">
                {/* Custom compact icon — transparent, no circle */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center mx-auto mb-0.5">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain"
                    loading="eager"
                  />
                </div>
                <div className="text-center leading-tight">
                  <span className="text-[11px] sm:text-xs font-heading font-medium text-charcoal-900 block whitespace-nowrap">
                    {item.title}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-heading font-medium text-burgundy-700 block whitespace-nowrap">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
