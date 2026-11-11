import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  PackageCheck,
  Palette,
  MessageSquare,
} from 'lucide-react';
import { ProductItem } from '@/data/products';
import { GarmentViewer3D } from './GarmentViewer3D';
import { ProductNavigationDock } from './ProductNavigationDock';
import { companyContact } from '@/data/navigation';

interface ProductShowcase3DProps {
  products: ProductItem[];
  onRequestQuote: (product: ProductItem) => void;
}

export const ProductShowcase3D: React.FC<ProductShowcase3DProps> = ({
  products,
  onRequestQuote,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const total = products.length;
  const currentProduct = products[currentIndex];
  const currentFormattedIndex = String(currentIndex + 1).padStart(2, '0');
  const totalFormatted = String(total).padStart(2, '0');

  const goToProduct = useCallback(
    (newIndex: number) => {
      if (newIndex === currentIndex) return;
      setDirection(newIndex > currentIndex ? 1 : -1);
      setCurrentIndex(newIndex);
    },
    [currentIndex]
  );

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    setTouchStartX(null);
  };

  // Text transitions variants
  const textVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      y: shouldReduceMotion ? 0 : dir > 0 ? 16 : -16,
    }),
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: shouldReduceMotion ? 0 : dir > 0 ? -14 : 14,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section
      className="relative w-full bg-gradient-to-b from-[#FFFDF9] via-[#FAF5F2] to-[#F5ECE8] text-charcoal-900 overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-4 selection:bg-[#80011F] selection:text-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="TeesZone 3D Product Interactive Showroom"
    >
      {/* Subtle Warm Silk Glows in Background */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#80011F]/8 via-transparent to-transparent filter blur-[80px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-10 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#6B011A]/6 via-transparent to-transparent filter blur-[70px] pointer-events-none"
        aria-hidden="true"
      />

      {/* =========================================================================
          MAIN 3-COLUMN SHOWROOM STAGE (Desktop & Tablet Layout)
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* ===================================================================
              1. LEFT SECTION – PRODUCT INTRODUCTION & ACTIVE COUNTER
              =================================================================== */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-5 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* Small Collection Eyebrow */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#80011F] shadow-[0_0_8px_rgba(128,1,31,0.6)]" />
              <span className="text-xs sm:text-[13px] font-heading font-extrabold uppercase tracking-widest text-[#80011F]">
                TeesZone Collection
              </span>
            </div>

            {/* Main Stage Heading */}
            <h1 className="text-2xl sm:text-3xl xl:text-4xl font-heading font-black text-charcoal-900 leading-tight">
              Apparel Crafted for Every Purpose
            </h1>

            {/* Short Supporting Description */}
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed max-w-md mx-auto lg:mx-0 font-normal">
              Direct-from-mill custom apparel manufacturing in Tiruppur. Precision-tailored fabrics,
              bespoke finishes, and industrial-grade colorfastness engineered for brands, institutions,
              and high-volume corporate orders.
            </p>

            {/* Elegant Divider */}
            <div className="w-12 h-[2px] bg-[#80011F]/30 rounded-full mx-auto lg:mx-0" />

            {/* Current Product Index Indicator (e.g. 01 / 05) */}
            <div className="pt-2">
              <div className="flex items-baseline justify-center lg:justify-start gap-2">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.span
                    key={currentProduct.id}
                    custom={direction}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="text-4xl sm:text-5xl xl:text-6xl font-heading font-black text-[#80011F] tracking-tight"
                  >
                    {currentFormattedIndex}
                  </motion.span>
                </AnimatePresence>
                <span className="text-base sm:text-lg font-heading font-semibold text-charcoal-400">
                  / {totalFormatted}
                </span>
              </div>

              {/* Dynamic Sub-Label */}
              <AnimatePresence custom={direction} mode="wait">
                <motion.p
                  key={currentProduct.id}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="text-xs sm:text-[13px] font-heading font-bold text-charcoal-700 mt-1 uppercase tracking-wider"
                >
                  {currentProduct.categoryLabel}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Quick Trust Highlights */}
            <div className="hidden lg:flex flex-col space-y-2.5 pt-4 text-xs text-charcoal-600 border-t border-charcoal-200/60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#80011F] shrink-0" />
                <span>100% Tiruppur Direct Manufacturing</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#80011F] shrink-0" />
                <span>Zero-Color-Bleed Quality Assurance</span>
              </div>
              <div className="flex items-center gap-2">
                <PackageCheck className="w-4 h-4 text-[#80011F] shrink-0" />
                <span>Doorstep Delivery Across India & Export</span>
              </div>
            </div>
          </div>

          {/* ===================================================================
              2. CENTER SECTION – LARGE 3D PRODUCT & CIRCULAR PEDESTAL
              - Occupies 45-50% of the showcase width
              - Displays realistic garment with floating physics & dynamic platform
              =================================================================== */}
          <div className="lg:col-span-5 xl:col-span-6 flex items-center justify-center order-1 lg:order-2 w-full">
            <GarmentViewer3D product={currentProduct} direction={direction} />
          </div>

          {/* ===================================================================
              3. RIGHT SECTION – PRODUCT DETAILS & SPECIFICATIONS
              - Clean typography, zero box cards, elegant dividers
              - Fabric options, custom branding, GSM & MOQ tags, Get a Quote CTA
              =================================================================== */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-center space-y-4 sm:space-y-5 text-left order-3">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentProduct.id}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-4 sm:space-y-5"
              >
                {/* Category Pill Tag */}
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-extrabold uppercase tracking-wider bg-[#80011F]/10 text-[#80011F] border border-[#80011F]/20">
                    <Sparkles className="w-3 h-3 text-[#80011F]" />
                    {currentProduct.categoryLabel}
                  </span>
                </div>

                {/* Product Name */}
                <h2 className="text-xl sm:text-2xl xl:text-3xl font-heading font-black text-charcoal-900 leading-tight">
                  {currentProduct.name}
                </h2>

                {/* Tagline / Subtitle */}
                <p className="text-xs sm:text-sm font-heading font-semibold text-[#80011F] leading-snug">
                  {currentProduct.tagline}
                </p>

                {/* Detailed Description */}
                <p className="text-xs sm:text-[13px] text-charcoal-600 leading-relaxed font-normal">
                  {currentProduct.description}
                </p>

                {/* GSM & MOQ Quick Badges */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-charcoal-200/80 shadow-2xs text-xs font-heading font-bold text-charcoal-800">
                    <Layers className="w-3.5 h-3.5 text-[#80011F]" />
                    <span>{currentProduct.gsmRange}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-charcoal-200/80 shadow-2xs text-xs font-heading font-bold text-charcoal-800">
                    <PackageCheck className="w-3.5 h-3.5 text-[#80011F]" />
                    <span>MOQ: {currentProduct.moq}</span>
                  </div>
                </div>

                {/* Fabric Options Group */}
                <div className="space-y-1.5 pt-1">
                  <span className="flex items-center gap-1.5 text-[11px] font-heading font-extrabold uppercase tracking-wider text-charcoal-500">
                    <Layers className="w-3 h-3 text-[#80011F]" />
                    Available Fabric Weaves
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentProduct.fabrics.map((fabric, fIdx) => (
                      <span
                        key={fIdx}
                        className="inline-block text-[11px] sm:text-xs font-medium text-charcoal-700 bg-white/90 border border-charcoal-200/70 px-2.5 py-1 rounded-lg"
                      >
                        {fabric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Custom Branding Techniques Group */}
                <div className="space-y-1.5 pt-1">
                  <span className="flex items-center gap-1.5 text-[11px] font-heading font-extrabold uppercase tracking-wider text-charcoal-500">
                    <Palette className="w-3 h-3 text-[#80011F]" />
                    Branding & Customization
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentProduct.brandingTechniques.map((technique, bIdx) => (
                      <span
                        key={bIdx}
                        className="inline-block text-[11px] sm:text-xs font-medium text-charcoal-700 bg-white/90 border border-charcoal-200/70 px-2.5 py-1 rounded-lg"
                      >
                        {technique}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: Get a Quote & WhatsApp Direct Inquiry */}
                <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={() => onRequestQuote(currentProduct)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#80011F] via-[#6B011A] to-[#550014] hover:from-[#6B011A] hover:to-[#40000E] text-white font-heading font-semibold text-xs sm:text-sm shadow-[0_6px_20px_rgba(128,1,31,0.25)] hover:shadow-[0_10px_25px_rgba(128,1,31,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer group"
                  >
                    <span>Request Bulk Quote</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href={`https://wa.me/${companyContact.whatsapp}?text=Hi%20TeesZone,%20I%20am%20interested%20in%20inquiring%20about%20${encodeURIComponent(
                      currentProduct.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white hover:bg-emerald-50 text-emerald-700 hover:text-emerald-800 border border-emerald-300 shadow-2xs font-heading font-medium text-xs sm:text-sm transition-all duration-200 active:scale-95"
                    title={`Inquire about ${currentProduct.name} on WhatsApp`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. BOTTOM PRODUCT NAVIGATION DOCK (5-Product Previews & Controls)
          ========================================================================= */}
      <div className="relative z-20 mt-6 sm:mt-8 lg:mt-10">
        <ProductNavigationDock
          products={products}
          currentIndex={currentIndex}
          onSelectProduct={goToProduct}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </section>
  );
};

