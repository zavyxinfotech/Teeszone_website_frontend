import React, { useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

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

const desktopCoords = [
  { x: 60, y: 35, rotate: 18 },
  { x: 280, y: 95, rotate: -16 },
  { x: 500, y: 50, rotate: 22 },
  { x: 720, y: 95, rotate: -20 },
  { x: 940, y: 35, rotate: 0 },
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
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // Scroll-driven step activation - only advances as the user scrolls through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'end 25%'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const stepIdx = Math.min(4, Math.max(0, Math.floor(latest * 5)));
    setActiveStep(stepIdx);
  });

  const currentDisplayStep = hoveredStep !== null ? hoveredStep : activeStep;

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
            <path
              d="M0,38 C240,86 480,78 760,32 C1040,-10 1240,15 1440,44 L1440,120 L0,120 Z"
              fill="#59061A"
            />
          </svg>
        </div>
      )}

      {/* 2. MAIN PROCESS SECTION */}
      <section
        ref={sectionRef}
        className={`relative ${
          isDark
            ? 'pt-8 sm:pt-12 md:pt-14 pb-8 sm:pb-10 md:pb-12 text-white bg-[#59061A]'
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
          </>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section - Clean high-contrast typography, no overlapping elements */}
          <div className="text-center mb-6 sm:mb-10 lg:mb-12 max-w-3xl mx-auto relative z-20">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
              <div className="w-8 sm:w-14 h-px bg-white/40" />
              <span className="text-xs sm:text-sm md:text-base font-heading font-extrabold uppercase tracking-[0.25em] text-white">
                OUR PROCESS
              </span>
              <div className="w-8 sm:w-14 h-px bg-white/40" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-heading font-black text-white tracking-tight leading-tight">
              From Your Idea to{' '}
              <span className="bg-gradient-to-r from-white via-rose-100 to-warm-200 bg-clip-text text-transparent">
                Your T-Shirts
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-rose-100 font-normal mt-2.5 leading-relaxed px-4 max-w-xl mx-auto">
              A simple and transparent process to get your custom T-shirts, uniforms and apparel.
            </p>
          </div>

          {/* ======================================================== */}
          {/* A. DESKTOP VIEW - Scroll-driven 3D Arrow Along Track */}
          {/* ======================================================== */}
          <div className="hidden lg:block relative mt-6 lg:mt-10">
            {/* SVG Track with 3D Arrow */}
            <div className="absolute top-[18%] left-[6%] right-[6%] h-36 pointer-events-none select-none z-0">
              <svg viewBox="0 0 1000 120" fill="none" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="arrowTopFacetGrad" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#C41C44" />
                    <stop offset="60%" stopColor="#FFA6B6" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                  </linearGradient>

                  <linearGradient id="arrowBottomFacetGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#4A0010" />
                    <stop offset="70%" stopColor="#8A0C28" />
                    <stop offset="100%" stopColor="#B81438" />
                  </linearGradient>

                  <radialGradient id="arrowCoreSphere" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="35%" stopColor="#FF7A95" />
                    <stop offset="70%" stopColor="#B81438" />
                    <stop offset="100%" stopColor="#45000E" />
                  </radialGradient>

                  <linearGradient id="arrowTrailGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                    <stop offset="60%" stopColor="#FF6B8B" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.8" />
                  </linearGradient>

                  <filter id="arrow3DDepth" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="4" stdDeviation="2.5" floodColor="#0D0004" floodOpacity="0.75" />
                  </filter>
                </defs>

                {/* Subtle base guide line */}
                <path
                  d="M 60,35 C 150,35 190,95 280,95 C 370,95 410,50 500,50 C 590,50 630,95 720,95 C 810,95 850,35 940,35"
                  stroke="rgba(80, 5, 20, 0.4)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Base dashed track */}
                <path
                  d="M 60,35 C 150,35 190,95 280,95 C 370,95 410,50 500,50 C 590,50 630,95 720,95 C 810,95 850,35 940,35"
                  stroke="rgba(255, 180, 200, 0.35)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />

                {/* 3D ARROW - Positioned strictly at current active step coordinate */}
                <g
                  transform={`translate(${desktopCoords[currentDisplayStep].x}, ${desktopCoords[currentDisplayStep].y}) rotate(${desktopCoords[currentDisplayStep].rotate})`}
                  className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  filter="url(#arrow3DDepth)"
                >
                  <polygon
                    points="-1,0 -20,-1 -20,1"
                    fill="url(#arrowTrailGrad)"
                    opacity="0.7"
                  />
                  <polygon
                    points="15,0 -1,0 -4,6.5"
                    fill="url(#arrowBottomFacetGrad)"
                  />
                  <polygon
                    points="15,0 -4,-6.5 -1,0"
                    fill="url(#arrowTopFacetGrad)"
                  />
                  <line
                    x1="-1"
                    y1="0"
                    x2="15"
                    y2="0"
                    stroke="#FFFFFF"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    opacity="0.95"
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r="3.8"
                    fill="url(#arrowCoreSphere)"
                    stroke="rgba(255, 255, 255, 0.8)"
                    strokeWidth="0.8"
                  />
                  <circle
                    cx="15"
                    cy="0"
                    r="2"
                    fill="#FFFFFF"
                  />
                </g>
              </svg>
            </div>

            {/* 5-Step Desktop Grid */}
            <div className="grid grid-cols-5 gap-3 xl:gap-5 pb-8 pt-4 px-2 sm:px-4 items-center relative z-10">
              {steps.map((step, index) => {
                const isCurrent = currentDisplayStep === index;
                return (
                  <div
                    key={step.number}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={`flex flex-col items-center text-center cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${step.offsetYClass} ${
                      isCurrent
                        ? 'z-30'
                        : 'z-10 opacity-75 hover:opacity-100'
                    }`}
                    style={{
                      perspective: 1000,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* 3D Plinth Icon Container */}
                    <div
                      className={`relative w-40 h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isCurrent
                          ? 'scale-[1.28] -translate-y-7'
                          : 'scale-100 translate-y-0'
                      }`}
                    >
                      <img
                        src={step.iconImg}
                        alt={step.title}
                        className={`w-full h-full object-contain filter transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isCurrent
                            ? 'drop-shadow-[0_28px_32px_rgba(15,0,4,0.75)]'
                            : 'drop-shadow-[0_14px_20px_rgba(20,0,6,0.45)]'
                        }`}
                        loading="lazy"
                      />
                    </div>

                    {/* Step Title */}
                    <h3
                      className={`font-heading font-extrabold text-base sm:text-lg mt-3 mb-1 leading-snug transition-all duration-500 ${
                        isCurrent
                          ? 'text-white font-black scale-105'
                          : 'text-white/80'
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Step Subtitle */}
                    <p
                      className={`text-xs sm:text-sm font-medium leading-normal max-w-[210px] transition-all duration-500 ${
                        isCurrent ? 'text-rose-100 font-semibold' : 'text-rose-100/70'
                      }`}
                    >
                      {step.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ======================================================== */}
          {/* B. MOBILE VIEW - 100% Scroll-Driven with Visible 3D Arrow */}
          {/* ======================================================== */}
          <div className="block lg:hidden relative mt-4 sm:mt-6 max-w-md mx-auto">
            {/* Dedicated Left Column Timeline with Spine and Directional 3D Arrow */}
            <div className="relative pl-12 sm:pl-14">
              {/* Continuous Vertical Connecting Spine Line */}
              <div className="absolute left-4 sm:left-5 top-8 bottom-12 w-[2px] bg-rose-200/25">
                <div
                  className="w-full bg-[#FFA6B6] transition-all duration-500 ease-out"
                  style={{ height: `${(currentDisplayStep / 4) * 100}%` }}
                />
              </div>

              {/* Vertical Stack of Steps */}
              <div className="flex flex-col gap-4 sm:gap-5 relative z-10">
                {steps.map((step, index) => {
                  const isCurrent = currentDisplayStep === index;
                  const isPast = currentDisplayStep > index;

                  return (
                    <div
                      key={step.number}
                      onClick={() => setHoveredStep(index)}
                      className="relative flex items-center"
                    >
                      {/* Left Track Node: 3D Directional Arrow for Current Step, Number / Check for others */}
                      <div className="absolute -left-12 sm:-left-14 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                        {isCurrent ? (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E62852] to-[#8A0024] border-2 border-white text-white flex items-center justify-center shadow-[0_4px_16px_rgba(230,40,82,0.6)] transition-transform scale-110">
                            {/* Directional 3D Arrow pointing to current card */}
                            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                            </svg>
                          </div>
                        ) : isPast ? (
                          <div className="w-6 h-6 rounded-full bg-[#8A0024] border border-rose-300 text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
                            ✓
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-[#3B020E] border border-rose-200/40 text-rose-200/80 flex items-center justify-center text-[10px] font-bold">
                            {step.number}
                          </div>
                        )}
                      </div>

                      {/* Step Card */}
                      <div
                        className={`w-full flex flex-row items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isCurrent
                            ? 'bg-[#FFF9F6] border border-rose-200 shadow-[0_12px_28px_rgba(15,0,4,0.45)] scale-[1.03] translate-x-1'
                            : 'bg-[#FFF9F6]/90 border border-white/20 opacity-80 scale-100'
                        }`}
                      >
                        {/* 3D Plinth Icon */}
                        <div
                          className={`relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center transition-all duration-500 ${
                            isCurrent ? 'scale-[1.18] -translate-y-1' : 'scale-100 translate-y-0'
                          }`}
                        >
                          <img
                            src={step.iconImg}
                            alt={step.title}
                            className={`w-full h-full object-contain filter transition-all duration-500 ${
                              isCurrent
                                ? 'drop-shadow-[0_16px_22px_rgba(15,0,4,0.65)]'
                                : 'drop-shadow-[0_8px_14px_rgba(20,0,6,0.35)]'
                            }`}
                            loading="lazy"
                          />
                        </div>

                        {/* Typography */}
                        <div className="flex flex-col justify-center text-left">
                          <span className="text-xs font-heading font-black uppercase tracking-wider text-[#8A0024]">
                            Step {step.number}
                          </span>
                          <h3
                            className={`font-heading font-black text-lg leading-snug tracking-tight transition-colors ${
                              isCurrent ? 'text-[#59061A]' : 'text-[#4A0010]'
                            }`}
                          >
                            {step.title}
                          </h3>
                          <p
                            className={`text-sm font-semibold mt-0.5 leading-tight transition-colors ${
                              isCurrent ? 'text-[#82132C]' : 'text-[#7A1B30]'
                            }`}
                          >
                            {step.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BOTTOM SECTION DIVIDER */}
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
