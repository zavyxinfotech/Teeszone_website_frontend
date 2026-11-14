import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface PrintingType {
  id: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const PRINTING_TYPES: PrintingType[] = [
  {
    id: 'stitching',
    name: 'Precision Stitching',
    shortName: 'Stitching',
    title: 'Precision Stitching & Apparel Assembly',
    description:
      'Engineered with reinforced dual-needle stitching and premium Tiruppur combed cotton. Ensures maximum seam durability through 100+ commercial wash cycles.',
    image: '/assets/images/gallery/manufacturing-stitching.jpg',
    alt: 'TeesZone precision stitching and customized apparel manufacturing in Tiruppur',
  },
  {
    id: 'screen-printing',
    name: 'Screen Printing',
    shortName: 'Screen Print',
    title: 'Screen Printing for Custom T-Shirts',
    description:
      'High-density industrial screen printing delivering razor-sharp line clarity and rich color vibrancy. Zero peeling, cracking, or color fading on bulk apparel orders.',
    image: '/assets/images/gallery/manufacturing-screen-printing.jpg',
    alt: 'TeesZone high-quality screen printing press for bulk custom T-shirts',
  },
  {
    id: 'dtp-printing',
    name: 'DTP Printing',
    shortName: 'DTP Print',
    title: 'Advanced DTP Printing for Apparel',
    description:
      'Advanced CMYK direct-to-product digital printing for complex multi-color designs. Delivers photographic precision with ultra-soft breathable feel on every fabric.',
    image: '/assets/images/gallery/manufacturing-dtp-printing.jpg',
    alt: 'TeesZone advanced DTP printing technology machine for custom graphics',
  },
];

interface ManufacturingShowcase3DProps {
  onOpenQuote?: () => void;
}

export const ManufacturingShowcase3D: React.FC<ManufacturingShowcase3DProps> = ({
  onOpenQuote,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Dual reliable scroll tracking: Window scroll listener + Framer Motion
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / scrollableDistance));

      if (progress < 0.35) {
        setActiveStage(0);
      } else if (progress < 0.68) {
        setActiveStage(1);
      } else {
        setActiveStage(2);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return scrollYProgress.on('change', (progress) => {
      if (progress < 0.35) {
        setActiveStage(0);
      } else if (progress < 0.68) {
        setActiveStage(1);
      } else {
        setActiveStage(2);
      }
    });
  }, [scrollYProgress]);

  const handleStageSelect = (index: number) => {
    setActiveStage(index);
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
    const targetFraction = index === 0 ? 0.1 : index === 1 ? 0.5 : 0.9;
    const targetScroll = containerTop + targetFraction * scrollableDistance;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  const handleCtaClick = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[260vh] sm:h-[280vh] bg-[#F7E7CE] text-[#211D20] select-none z-20 rounded-t-[36px] sm:rounded-t-[54px] lg:rounded-t-[64px] shadow-2xl -mt-8 sm:-mt-12"
      aria-label="TeesZone Manufacturing & Printing Capabilities"
    >
      {/* Dynamic Fluid Blob Keyframes Injection */}
      <style>{`
        @keyframes fluidBlobMorph {
          0% {
            border-radius: 46% 54% 68% 32% / 38% 44% 56% 62%;
          }
          33% {
            border-radius: 58% 42% 44% 56% / 54% 36% 64% 46%;
          }
          66% {
            border-radius: 42% 58% 56% 44% / 46% 64% 36% 54%;
          }
          100% {
            border-radius: 54% 46% 38% 62% / 62% 44% 56% 38%;
          }
        }
        .animate-fluid-blob {
          animation: fluidBlobMorph 8s ease-in-out infinite alternate;
        }
      `}</style>

      {/* Sticky Full-Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden rounded-t-[36px] sm:rounded-t-[54px] lg:rounded-t-[64px] px-4 sm:px-8 lg:px-14 pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-8">
        
        {/* Soft Ambient Background Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 50% 35%, rgba(255,255,255,0.75) 0%, rgba(247,231,206,0.7) 50%, rgba(240,218,185,0.45) 100%)',
            }}
          />
        </div>

        {/* 1. TOP HEADER: Clean Editorial Two-Line Title */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
          <div>
            <span className="text-xs sm:text-sm font-heading font-bold text-[#68616A] uppercase tracking-wider block mb-1">
              Our Capabilities
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight leading-[1.12]">
              <span className="text-[#211D20] block">PRECISION MANUFACTURING</span>
              <span className="text-[#80011F] block">FOR CUSTOM APPAREL</span>
            </h2>
          </div>

          <button
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 group cursor-pointer self-start sm:self-end pb-1"
          >
            <span className="text-xs sm:text-sm font-heading font-black tracking-wider uppercase text-[#211D20] group-hover:text-[#80011F] transition-colors">
              Request a Quote
            </span>
            <div className="w-8 h-8 rounded-full bg-white/80 border border-[#80011F]/20 flex items-center justify-center text-[#80011F] group-hover:bg-[#80011F] group-hover:text-white transition-all duration-300 shadow-xs">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>

        {/* 2. CARDS SECTION: Desktop Horizontal Expanding Cards & Mobile Vertical Flow */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex items-center justify-center my-auto py-2">
          
          {/* DESKTOP / TABLET EXPANDING CAROUSEL */}
          <div className="hidden md:flex w-full h-[48vh] sm:h-[52vh] max-h-[460px] min-h-[340px] items-stretch gap-4 lg:gap-6">
            {PRINTING_TYPES.map((type, index) => {
              const isActive = activeStage === index;

              return (
                <motion.div
                  key={type.id}
                  onClick={() => handleStageSelect(index)}
                  layout
                  transition={{
                    layout: { duration: 0.55, ease: [0.25, 1, 0.5, 1] },
                  }}
                  className={`relative rounded-[28px] lg:rounded-[36px] overflow-hidden cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'flex-[2.6] lg:flex-[3] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#80011F]/15 p-6 lg:p-8 flex items-center'
                      : 'flex-1 bg-[#EFE3CF]/90 hover:bg-[#EFE3CF] border border-[#80011F]/10 p-6 lg:p-7 flex flex-col justify-between hover:shadow-md'
                  }`}
                >
                  {/* Decorative Watermark for Inactive Cards */}
                  {!isActive && (
                    <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-[#80011F]/5 pointer-events-none" />
                  )}

                  {isActive ? (
                    /* ACTIVE EXPANDED CARD (2 Columns: Left Text, Right Fluid Blob Image) */
                    <div className="w-full h-full grid grid-cols-12 gap-6 items-center">
                      
                      {/* Left Column: Heading, 3-Line Description, CTA Button */}
                      <div className="col-span-6 xl:col-span-6 flex flex-col justify-between h-full py-1">
                        <div className="space-y-3">
                          <h3 className="text-xl sm:text-2xl lg:text-[26px] font-heading font-black text-[#211D20] leading-tight">
                            {type.title}
                          </h3>
                          <p className="text-xs sm:text-sm lg:text-[15px] text-[#554D56] leading-relaxed">
                            {type.description}
                          </p>
                        </div>

                        <div className="pt-4 flex items-center gap-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCtaClick();
                            }}
                            className="inline-flex items-center gap-2.5 group/btn cursor-pointer"
                          >
                            <span className="text-xs sm:text-sm font-heading font-black text-[#211D20] group-hover/btn:text-[#80011F] transition-colors">
                              Read More
                            </span>
                            <div className="w-9 h-9 rounded-full bg-[#80011F] text-white flex items-center justify-center group-hover/btn:bg-[#600117] transition-all shadow-sm">
                              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                            </div>
                          </button>
                        </div>
                      </div>

                      {/* Right Column: Fluid Organic Blob Frame (Image 3 Reference, Larger Frame Size) */}
                      <div className="col-span-6 xl:col-span-6 h-full flex items-center justify-center p-1 sm:p-2">
                        <div className="w-full h-full max-h-[360px] animate-fluid-blob overflow-hidden bg-neutral-200 shadow-[0_15px_35px_rgba(0,0,0,0.14)] border-2 border-white/80 transition-transform duration-700 hover:scale-[1.03]">
                          <img
                            src={type.image}
                            alt={type.alt}
                            className="w-full h-full object-cover object-center pointer-events-none select-none scale-105"
                            loading="eager"
                          />
                        </div>
                      </div>

                    </div>
                  ) : (
                    /* INACTIVE CARD: Clean Heading at Top + Scooped Cutout Notch at Bottom-Right (Image 4 Reference) */
                    <div className="w-full h-full flex flex-col justify-between relative">
                      <div className="pr-2">
                        <h3 className="text-lg lg:text-xl font-heading font-black text-[#211D20] leading-snug">
                          {type.title}
                        </h3>
                      </div>

                      {/* Bottom-Right Curved Cutout Notch with Floating Arrow (Exact Image 4 Style) */}
                      <div className="absolute -bottom-6 -right-6 lg:-bottom-7 lg:-right-7 z-20">
                        {/* Upper Fillet Curve */}
                        <div className="absolute -top-3.5 right-0 w-3.5 h-3.5 overflow-hidden pointer-events-none">
                          <div className="w-7 h-7 rounded-full border-[3.5px] border-[#F7E7CE] absolute -bottom-3.5 -right-3.5" />
                        </div>
                        {/* Left Fillet Curve */}
                        <div className="absolute bottom-0 -left-3.5 w-3.5 h-3.5 overflow-hidden pointer-events-none">
                          <div className="w-7 h-7 rounded-full border-[3.5px] border-[#F7E7CE] absolute -bottom-3.5 -right-3.5" />
                        </div>

                        {/* Notch Cutout Pocket */}
                        <div className="bg-[#F7E7CE] p-2 pl-3 pt-3 rounded-tl-[24px]">
                          <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#E5D2BA] border border-[#80011F]/15 flex items-center justify-center text-[#80011F] shadow-sm hover:scale-105 transition-transform">
                            <ArrowUpRight className="w-5 h-5 font-bold" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom Text */}
                      <div className="pt-4">
                        <span className="text-xs font-heading font-bold text-[#554D56]">
                          Read More
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* MOBILE VIEW: Fluid Image on Top, Content Below, Vertical Scrolling Animation */}
          <div className="md:hidden w-full">
            <AnimatePresence mode="wait">
              {PRINTING_TYPES.map((type, index) => {
                if (index !== activeStage) return null;

                return (
                  <motion.div
                    key={type.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="w-full bg-white rounded-[26px] overflow-hidden border border-[#80011F]/15 shadow-lg p-5 flex flex-col justify-between"
                  >
                    {/* Top: Fluid Organic Blob Image Frame */}
                    <div className="w-full aspect-[4/3] max-h-[220px] animate-fluid-blob overflow-hidden bg-neutral-200 mb-4 shadow-md border-2 border-white/80 mx-auto">
                      <img
                        src={type.image}
                        alt={type.alt}
                        className="w-full h-full object-cover object-center scale-105"
                      />
                    </div>

                    {/* Bottom: Text Content Aligned Below the Image */}
                    <div className="space-y-2 mb-4">
                      <h3 className="text-lg font-heading font-black text-[#211D20] leading-tight">
                        {type.title}
                      </h3>
                      <p className="text-xs text-[#554D56] leading-relaxed">
                        {type.description}
                      </p>
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                      <button
                        onClick={handleCtaClick}
                        className="inline-flex items-center gap-1.5 text-xs font-heading font-black text-[#80011F]"
                      >
                        <span>Request a Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-heading font-bold text-[#68616A]">
                        {index + 1} / 3
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

        {/* 3. BOTTOM BAR: Minimal Indicator with Clean Printing Type Names (No "Stage" Labels) */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-between text-xs text-[#554D56] pt-1">
          {/* Active Printing Type Name */}
          <div className="font-heading font-black tracking-wider uppercase text-[#80011F] text-xs">
            {PRINTING_TYPES[activeStage].name}
          </div>

          {/* Interactive Indicator Pills */}
          <div className="flex items-center gap-2">
            {PRINTING_TYPES.map((type, idx) => (
              <button
                key={type.id}
                onClick={() => handleStageSelect(idx)}
                aria-label={`Switch to ${type.name}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeStage === idx
                    ? 'w-8 h-2 bg-[#80011F]'
                    : 'w-2 h-2 bg-[#80011F]/25 hover:bg-[#80011F]/50'
                }`}
              />
            ))}
          </div>

          {/* Scroll Guidance */}
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#554D56]/80 font-medium">
            <span>Scroll to navigate</span>
            <span className="animate-bounce">↓</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ManufacturingShowcase3D;
