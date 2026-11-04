import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProcessStepItem {
  number: string;
  title: string;
  subtitle: string;
  iconImg: string;
  offsetYClass: string;
}

const steps: ProcessStepItem[] = [
  {
    number: '01',
    title: 'Share requirements',
    subtitle: '(quantity, style & logo)',
    iconImg: '/assets/images/process-step-1.png',
    offsetYClass: 'lg:-translate-y-7 xl:-translate-y-9',
  },
  {
    number: '02',
    title: 'Receive free quote',
    subtitle: '(pricing in 24 hrs)',
    iconImg: '/assets/images/process-step-2.png',
    offsetYClass: 'lg:translate-y-6 xl:translate-y-8',
  },
  {
    number: '03',
    title: 'Approve mockups',
    subtitle: '(see before you commit)',
    iconImg: '/assets/images/process-step-3.png',
    offsetYClass: 'lg:-translate-y-2 xl:-translate-y-3',
  },
  {
    number: '04',
    title: 'Confirm & pay',
    subtitle: '(advance locks your slot)',
    iconImg: '/assets/images/process-step-4.png',
    offsetYClass: 'lg:translate-y-6 xl:translate-y-8',
  },
  {
    number: '05',
    title: 'Delivered to your door',
    subtitle: '(Pan India delivery)',
    iconImg: '/assets/images/process-step-5.png',
    offsetYClass: 'lg:-translate-y-7 xl:-translate-y-9',
  },
];

interface ManufacturingProcessProps {
  theme?: 'light' | 'dark';
  className?: string;
}

export const ManufacturingProcess: React.FC<ManufacturingProcessProps> = ({
  theme = 'dark',
  className = '',
}) => {
  const isDark = theme === 'dark';
  const desktopScrollRef = useRef<HTMLDivElement>(null);

  const scrollDesktop = (direction: 'left' | 'right') => {
    if (!desktopScrollRef.current) return;
    const container = desktopScrollRef.current;
    const scrollAmount = direction === 'left' ? -350 : 350;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* 1. TOP SECTION DIVIDER (Flows seamlessly from previous section into solid burgundy) */}
      {isDark && (
        <div className="w-full leading-none pointer-events-none select-none bg-white">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 sm:h-16 md:h-24 lg:h-28 block -mb-[1px]"
            preserveAspectRatio="none"
          >
            {/* Even solid burgundy wave matching the section */}
            <path
              d="M0,38 C240,86 480,78 760,32 C1040,-10 1240,15 1440,44 L1440,120 L0,120 Z"
              fill="#59061A"
            />
          </svg>
        </div>
      )}

      {/* 2. MAIN PROCESS SECTION (Even solid background color, no different color shades) */}
      <section
        className={`relative ${isDark
            ? 'pt-8 sm:pt-12 md:pt-14 pb-4 sm:pb-6 md:pb-8 text-white bg-[#59061A]'
            : 'py-16 sm:py-20 bg-white text-charcoal-900 border-t border-burgundy-50'
          }`}
      >
        {isDark && (
          <>
            {/* Desktop Horizontal Cream Silk Ribbon Wave */}
            <div className="hidden lg:block absolute left-0 right-0 top-[45%] -translate-y-1/2 w-full h-56 sm:h-64 md:h-72 lg:h-80 pointer-events-none select-none overflow-hidden">
              <svg
                viewBox="0 0 1440 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_12px_24px_rgba(40,0,10,0.3)]"
                preserveAspectRatio="none"
              >
                {/* Ribbon soft shadow layer */}
                <path
                  d="M -40,110 C 120,60 260,195 440,185 C 620,175 740,120 900,135 C 1080,150 1220,90 1480,50 L 1480,240 C 1260,255 1100,270 920,235 C 740,200 580,265 400,265 C 240,265 100,210 -40,200 Z"
                  fill="rgba(45, 2, 10, 0.35)"
                />
                {/* Main Silk Cream Ribbon with sheen highlights */}
                <path
                  d="M -40,100 C 130,50 260,180 430,175 C 610,170 730,110 890,125 C 1070,140 1200,75 1480,40 L 1480,225 C 1270,245 1110,255 930,220 C 750,185 590,250 410,250 C 250,250 110,195 -40,185 Z"
                  fill="url(#luxCreamSilkGrad)"
                />
                <defs>
                  <linearGradient id="luxCreamSilkGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FFF9F5" stopOpacity="0.95" />
                    <stop offset="25%" stopColor="#F9EDE4" stopOpacity="0.98" />
                    <stop offset="50%" stopColor="#FFF7F2" stopOpacity="0.95" />
                    <stop offset="75%" stopColor="#F7EBE2" stopOpacity="0.98" />
                    <stop offset="100%" stopColor="#FFF8F4" stopOpacity="0.95" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Mobile Vertical Flowing Cream Silk Wave (Exact Image 3 Reference) */}
            <div className="block lg:hidden absolute inset-0 pointer-events-none select-none overflow-hidden">
              <svg
                viewBox="0 0 680 1020"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full opacity-90"
                preserveAspectRatio="none"
              >
                {/* Flowing vertical cream satin ribbon band winding from top to bottom */}
                <path
                  d="M -30,160 C 180,180 240,240 680,210 L 710,920 C 450,960 200,900 -30,860 Z"
                  fill="url(#mobileCreamGrad)"
                />
                <defs>
                  <linearGradient id="mobileCreamGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFFBF8" stopOpacity="0.96" />
                    <stop offset="40%" stopColor="#F7EBE1" stopOpacity="0.98" />
                    <stop offset="70%" stopColor="#F4E5D8" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#FFF8F2" stopOpacity="0.97" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-6 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
              <div className="w-8 sm:w-14 h-px bg-white/40" />
              <span className="text-[11px] sm:text-xs md:text-sm font-heading font-extrabold uppercase tracking-[0.25em] text-white/95">
                OUR PROCESS
              </span>
              <div className="w-8 sm:w-14 h-px bg-white/40" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-heading font-black text-white tracking-tight leading-tight">
              From Your Idea to{' '}
              <span className="bg-gradient-to-r from-white via-rose-100 to-warm-200 bg-clip-text text-transparent">
                Your T-Shirts
              </span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-rose-100/90 font-normal mt-2 leading-relaxed px-2">
              A simple and transparent process to get your custom T-shirts, uniforms and apparel.
            </p>
          </div>

          {/* ======================================================== */}
          {/* A. DESKTOP VIEW (Exact Image 2 Reference with Wave & Arrow) */}
          {/* ======================================================== */}
          <div className="hidden lg:block relative mt-6 lg:mt-10">
            {/* Desktop Undulating Dotted Flow Trajectory with Cinematic Traveling Arrow */}
            <div className="absolute top-[18%] left-[6%] right-[6%] h-36 pointer-events-none select-none z-0">
              <svg viewBox="0 0 1000 120" fill="none" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <marker
                    id="arrowhead-red"
                    markerWidth="8"
                    markerHeight="8"
                    refX="5"
                    refY="4"
                    orient="auto"
                  >
                    <polygon points="0 1, 7 4, 0 7" fill="#A41535" />
                  </marker>

                  <filter id="arrow-glow-desktop" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Base guide track */}
                <path
                  d="M 60,35 C 150,35 190,95 280,95 C 370,95 410,50 500,50 C 590,50 630,95 720,95 C 810,95 850,35 940,35"
                  stroke="rgba(164, 21, 53, 0.45)"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                />

                {/* Animated traveling dash stream */}
                <path
                  d="M 60,35 C 150,35 190,95 280,95 C 370,95 410,50 500,50 C 590,50 630,95 720,95 C 810,95 850,35 940,35"
                  stroke="rgba(196, 28, 68, 0.9)"
                  strokeWidth="2.5"
                  strokeDasharray="8 8"
                  style={{ animation: 'travelingFlow 1.8s linear infinite' }}
                />

                {/* Directional reference markers */}
                <path d="M 170,62 L 180,68" stroke="#A41535" strokeWidth="2.5" markerEnd="url(#arrowhead-red)" />
                <path d="M 390,75 L 400,69" stroke="#A41535" strokeWidth="2.5" markerEnd="url(#arrowhead-red)" />
                <path d="M 610,72 L 620,78" stroke="#A41535" strokeWidth="2.5" markerEnd="url(#arrowhead-red)" />
                <path d="M 830,68 L 840,62" stroke="#A41535" strokeWidth="2.5" markerEnd="url(#arrowhead-red)" />

                {/* CINEMATIC TRAVELING ARROW 1 */}
                <g filter="url(#arrow-glow-desktop)">
                  <g>
                    <circle cx="-16" cy="0" r="1.5" fill="#C41C44" opacity="0.4" />
                    <circle cx="-10" cy="0" r="2.5" fill="#C41C44" opacity="0.7" />
                    <circle cx="-4" cy="0" r="3.5" fill="#E61E4D" opacity="0.9" />
                    <polygon points="6,0 -4,-5 -1,0 -4,5" fill="#FFF4F6" stroke="#C41C44" strokeWidth="1.2" />
                    <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
                  </g>
                  <animateMotion
                    path="M 60,35 C 150,35 190,95 280,95 C 370,95 410,50 500,50 C 590,50 630,95 720,95 C 810,95 850,35 940,35"
                    dur="4.2s"
                    repeatCount="indefinite"
                    rotate="auto"
                    calcMode="linear"
                  />
                </g>

                {/* CINEMATIC TRAVELING ARROW 2 */}
                <g filter="url(#arrow-glow-desktop)">
                  <g opacity="0.85">
                    <circle cx="-8" cy="0" r="2" fill="#C41C44" opacity="0.6" />
                    <polygon points="5,0 -3,-4 0,0 -3,4" fill="#FFE8EC" stroke="#C41C44" strokeWidth="1" />
                    <circle cx="0" cy="0" r="2.2" fill="#FFFFFF" />
                  </g>
                  <animateMotion
                    path="M 60,35 C 150,35 190,95 280,95 C 370,95 410,50 500,50 C 590,50 630,95 720,95 C 810,95 850,35 940,35"
                    dur="4.2s"
                    begin="2.1s"
                    repeatCount="indefinite"
                    rotate="auto"
                    calcMode="linear"
                  />
                </g>
              </svg>
            </div>

            {/* Left Desktop Nav Button - no background color, no border */}
            <button
              onClick={() => scrollDesktop('left')}
              aria-label="Previous step"
              className="absolute -left-2 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white bg-transparent border-none shadow-none outline-none flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Right Desktop Nav Button - no background color, no border */}
            <button
              onClick={() => scrollDesktop('right')}
              aria-label="Next step"
              className="absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white bg-transparent border-none shadow-none outline-none flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* 5-Step Desktop Grid aligned to Wave */}
            <div
              ref={desktopScrollRef}
              className="grid grid-cols-5 gap-3 xl:gap-5 pb-8 pt-4 px-2 sm:px-4 items-center relative z-10"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className={`flex flex-col items-center text-center group w-full transition-transform duration-500 ${step.offsetYClass}`}
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.05 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.6,
                    }}
                    className="relative w-40 h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 flex items-center justify-center cursor-pointer"
                  >
                    <img
                      src={step.iconImg}
                      alt={step.title}
                      className="w-full h-full object-contain filter drop-shadow-[0_16px_30px_rgba(25,0,8,0.55)] transition-all duration-300 group-hover:drop-shadow-[0_22px_38px_rgba(25,0,8,0.7)]"
                      loading="lazy"
                    />
                  </motion.div>

                  <h3 className="font-heading font-extrabold text-sm sm:text-base text-white mt-3 mb-1 leading-snug group-hover:text-rose-200 transition-colors drop-shadow-sm">
                    {step.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-rose-100/90 font-medium leading-normal max-w-[200px]">
                    {step.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ======================================================== */}
          {/* B. MOBILE VIEW (Exact Image 3 Reference: Vertical Flow) */}
          {/* ======================================================== */}
          <div className="block lg:hidden relative mt-4 sm:mt-6 max-w-md mx-auto">
            {/* Mobile Vertical S-Curve Dotted Flow Trajectory with Cinematic Traveling Arrow */}
            <div className="absolute top-[3%] bottom-[3%] left-[10%] sm:left-[12%] w-16 pointer-events-none select-none z-0">
              <svg viewBox="0 0 80 500" fill="none" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <marker
                    id="arrowhead-red-mobile"
                    markerWidth="6"
                    markerHeight="6"
                    refX="4"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 1, 5 3, 0 5" fill="#A41535" />
                  </marker>

                  <filter id="arrow-glow-mobile" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Base guide track for vertical mobile flow */}
                <path
                  d="M 25,30 C 55,55 55,80 25,115 C 55,145 55,170 25,205 C 55,235 55,260 25,295 C 55,325 55,350 25,385 C 55,415 55,440 25,475"
                  stroke="rgba(164, 21, 53, 0.45)"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />

                {/* Animated traveling dash stream */}
                <path
                  d="M 25,30 C 55,55 55,80 25,115 C 55,145 55,170 25,205 C 55,235 55,260 25,295 C 55,325 55,350 25,385 C 55,415 55,440 25,475"
                  stroke="rgba(196, 28, 68, 0.9)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  style={{ animation: 'travelingFlow 1.8s linear infinite' }}
                />

                {/* Vertical directional arrowheads */}
                <path d="M 45,70 L 41,77" stroke="#A41535" strokeWidth="2" markerEnd="url(#arrowhead-red-mobile)" />
                <path d="M 45,160 L 41,167" stroke="#A41535" strokeWidth="2" markerEnd="url(#arrowhead-red-mobile)" />
                <path d="M 45,250 L 41,257" stroke="#A41535" strokeWidth="2" markerEnd="url(#arrowhead-red-mobile)" />
                <path d="M 45,340 L 41,347" stroke="#A41535" strokeWidth="2" markerEnd="url(#arrowhead-red-mobile)" />
                <path d="M 45,430 L 41,437" stroke="#A41535" strokeWidth="2" markerEnd="url(#arrowhead-red-mobile)" />

                {/* Mobile Cinematic Traveling Arrow */}
                <g filter="url(#arrow-glow-mobile)">
                  <g>
                    <circle cx="-8" cy="0" r="1.5" fill="#C41C44" opacity="0.6" />
                    <circle cx="-4" cy="0" r="2.5" fill="#E61E4D" opacity="0.9" />
                    <polygon points="5,0 -3,-4 -1,0 -3,4" fill="#FFF4F6" stroke="#C41C44" strokeWidth="1" />
                    <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
                  </g>
                  <animateMotion
                    path="M 25,30 C 55,55 55,80 25,115 C 55,145 55,170 25,205 C 55,235 55,260 25,295 C 55,325 55,350 25,385 C 55,415 55,440 25,475"
                    dur="4.5s"
                    repeatCount="indefinite"
                    rotate="auto"
                    calcMode="linear"
                  />
                </g>
              </svg>
            </div>

            {/* Vertical Stack of Steps matching Image 3 */}
            <div className="flex flex-col gap-4 sm:gap-6 relative z-10 pl-1 pr-2">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="flex flex-row items-center gap-3 sm:gap-5 group"
                >
                  {/* Left: 3D Isometric Plinth Icon */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5,
                    }}
                    className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 flex items-center justify-center"
                  >
                    <img
                      src={step.iconImg}
                      alt={step.title}
                      className="w-full h-full object-contain filter drop-shadow-[0_12px_22px_rgba(25,0,8,0.55)] transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </motion.div>

                  {/* Right: Clean typography matching Image 3 */}
                  <div className="flex flex-col justify-center text-left">
                    <h3 className="font-heading font-black text-base sm:text-lg text-[#5A0419] leading-snug tracking-tight drop-shadow-sm">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#7D1E32] font-semibold mt-0.5 leading-tight">
                      {step.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. BOTTOM SECTION DIVIDER (Even solid burgundy matching the section) */}
      {isDark && (
        <div className="w-full leading-none pointer-events-none select-none bg-white">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-6 sm:h-10 md:h-14 lg:h-16 block -mt-[1px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L1440,0 L1440,65 C1200,100 920,90 620,44 C320,0 140,30 0,68 Z"
              fill="#59061A"
            />
          </svg>
        </div>
      )}
    </div>
  );
};
