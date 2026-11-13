import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useReducedMotion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ManufacturingStage {
  id: string;
  step: string;
  label: string;
  heading: string;
  headingHighlight: string;
  description: string;
  seoKeywords: string[];
  image: string;
  alt: string;
  stageBadge: string;
}

const STAGES: ManufacturingStage[] = [
  {
    id: 'stitching',
    step: '01',
    label: 'MANUFACTURING EXCELLENCE',
    heading: 'Precision Stitching & Premium Custom',
    headingHighlight: 'Apparel Manufacturing',
    description:
      'Experience precision-driven T-shirt manufacturing with high-quality stitching, carefully selected fabrics, and professional finishing. We manufacture customized polo T-shirts, corporate uniforms, hoodies, and bulk apparel for businesses, schools, sports teams, and institutions across India.',
    seoKeywords: [
      'Custom T-shirt manufacturers in Tiruppur',
      'Bulk T-shirt manufacturing',
      'Corporate uniform manufacturers',
      'Custom polo T-shirt manufacturing',
    ],
    image: '/assets/images/gallery/manufacturing-stitching.jpg',
    alt: 'TeesZone precision stitching and customized polo T-shirt manufacturing in Tiruppur',
    stageBadge: 'Stage 01: Stitching & Assembly',
  },
  {
    id: 'screen-printing',
    step: '02',
    label: 'CUSTOM PRINTING SOLUTIONS',
    heading: 'High-Quality Screen Printing for',
    headingHighlight: 'Custom T-Shirts',
    description:
      'Transform your brand identity with professional screen printing solutions. Our manufacturing process delivers vibrant colours, durable prints, and consistent quality for bulk customized T-shirts, corporate uniforms, promotional apparel, and event merchandise.',
    seoKeywords: [
      'Custom screen printing on T-shirts',
      'Bulk printed T-shirts manufacturers',
      'Corporate T-shirt printing',
      'Promotional T-shirt manufacturers in India',
    ],
    image: '/assets/images/gallery/manufacturing-screen-printing.jpg',
    alt: 'TeesZone high-quality screen printing and customized T-shirt printing press',
    stageBadge: 'Stage 02: Screen Printing Precision',
  },
  {
    id: 'dtp-printing',
    step: '03',
    label: 'ADVANCED PRINTING TECHNOLOGY',
    heading: 'Advanced DTP Printing for',
    headingHighlight: 'Customized Apparel',
    description:
      'Bring your creative designs to life with advanced DTP printing technology. Create customized T-shirts, sports jerseys, hoodies, and branded apparel with detailed graphics, vibrant colours, and premium-quality printing for businesses, events, and teams.',
    seoKeywords: [
      'DTP T-shirt printing',
      'Custom digital T-shirt printing',
      'Personalized apparel manufacturers',
      'Custom sports jersey printing',
    ],
    image: '/assets/images/gallery/manufacturing-dtp-printing.jpg',
    alt: 'TeesZone advanced DTP printing technology and customized apparel printing machine',
    stageBadge: 'Stage 03: Direct-to-Product (DTP)',
  },
];

export const ManufacturingShowcase3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Track scroll progress to update active stage
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      if (latest < 0.35) {
        setActiveStage(0);
      } else if (latest < 0.68) {
        setActiveStage(1);
      } else {
        setActiveStage(2);
      }
    });
  }, [scrollYProgress]);

  const current = STAGES[activeStage];

  const handleStepClick = (index: number) => {
    if (!containerRef.current) return;
    const targetScroll =
      containerRef.current.offsetTop +
      (index / (STAGES.length - 1)) * (containerRef.current.offsetHeight - window.innerHeight);
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[280vh] sm:h-[300vh] bg-[#F7E7CE] text-[#211D20] select-none z-20"
      aria-label="TeesZone 3D Manufacturing Showcase"
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
        
        {/* Background Ambient Lighting and Subtle Cream/Burgundy Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Soft Cream Ambient Radial Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 65% 50%, rgba(255,255,255,0.7) 0%, rgba(247,231,206,0.6) 45%, rgba(240,218,185,0.4) 100%)',
            }}
          />
          {/* Subtle Deep Burgundy Ambient Glow behind 3D Card Area */}
          <div
            className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[520px] h-[520px] rounded-full pointer-events-none blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(128,1,31,0.09) 0%, rgba(128,1,31,0.02) 60%, transparent 80%)',
            }}
          />
        </div>

        {/* Main 2-Column Content Layout */}
        <div className="relative z-10 max-w-[1380px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* LEFT SIDE: Dynamic SEO-Friendly Content */}
            <div className="lg:col-span-6 xl:col-span-6 text-left flex flex-col justify-center">
              
              {/* Step Navigation Pill Indicator */}
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                {STAGES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => handleStepClick(idx)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      activeStage === idx
                        ? 'bg-[#80011F] text-white shadow-md shadow-[#80011F]/20 scale-105'
                        : 'bg-white/80 text-[#68616A] hover:bg-white hover:text-[#80011F] border border-[#80011F]/10'
                    }`}
                  >
                    <span>{s.step}</span>
                    <span className="hidden sm:inline font-semibold">
                      {idx === 0 ? 'Stitching' : idx === 1 ? 'Screen Print' : 'DTP Print'}
                    </span>
                  </button>
                ))}
              </div>

              {/* Dynamic Animated Content Container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Small Label */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#80011F]/10 border border-[#80011F]/20 text-[#80011F] text-xs font-heading font-black tracking-widest uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-[#80011F]" />
                    <span>{current.label}</span>
                  </div>

                  {/* Main Heading with Deep Burgundy Accent */}
                  <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-heading font-black text-[#211D20] tracking-tight leading-[1.18]">
                    {current.heading}{' '}
                    <span className="text-[#80011F] block sm:inline font-black">
                      {current.headingHighlight}
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="text-sm xs:text-base sm:text-lg text-[#554D56] leading-relaxed font-normal">
                    {current.description}
                  </p>

                  {/* SEO Keywords Highlighted Tags */}
                  <div className="pt-2 sm:pt-3">
                    <p className="text-xs font-heading font-bold text-[#80011F] uppercase tracking-wider mb-2">
                      Key Capabilities &amp; Specialties:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {current.seoKeywords.map((keyword, kidx) => (
                        <span
                          key={kidx}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#211D20] bg-white/90 backdrop-blur-sm border border-[#80011F]/15 px-3 py-1 rounded-xl shadow-xs"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#80011F] shrink-0" />
                          <span>{keyword}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* RIGHT SIDE: 3D Vertical-Axis Rotating Manufacturing Image Card */}
            <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative perspective-[1400px]">
              
              {/* 3D Rotating Card Container */}
              <div className="relative w-full max-w-[340px] xs:max-w-[400px] sm:max-w-[480px] lg:max-w-[540px] xl:max-w-[580px] aspect-[4/3] sm:aspect-square lg:aspect-[4/3]">
                
                {/* Dynamic 3D Card Animation Wrapper */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{
                      rotateY: shouldReduceMotion ? 0 : 85,
                      opacity: 0,
                      scale: shouldReduceMotion ? 1 : 0.94,
                    }}
                    animate={{
                      rotateY: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      rotateY: shouldReduceMotion ? 0 : -85,
                      opacity: 0,
                      scale: shouldReduceMotion ? 1 : 0.94,
                    }}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1], // Smooth cubic ease-out
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                    className="w-full h-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-white border border-[#80011F]/15 shadow-[0_25px_60px_rgba(128,1,31,0.22)] relative group"
                  >
                    {/* The Exact Manufacturing Image */}
                    <img
                      src={current.image}
                      alt={current.alt}
                      className="w-full h-full object-cover object-center pointer-events-none select-none transition-transform duration-700 group-hover:scale-103"
                      loading="eager"
                    />

                    {/* Subtle Lighting Sheen & Ambient Depth Layer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/10 pointer-events-none" />

                    {/* Stage Label Badge pinned inside the card */}
                    <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20">
                      <span className="text-xs font-heading font-black tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#80011F] shadow-sm border border-[#80011F]/15">
                        {current.stageBadge}
                      </span>
                    </div>

                    {/* Corner Watermark Branding */}
                    <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-20">
                      <span className="text-[11px] font-heading font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90">
                        TeesZone Tiruppur
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ManufacturingShowcase3D;

