import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import {
  Headset,
  Target,
  Users,
  TrendingUp,
  Globe,
  Lightbulb,
} from 'lucide-react';

interface WhyChooseUsProps {
  theme?: 'light' | 'dark';
  className?: string;
  onOpenQuote?: () => void;
}

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  position: 'left' | 'right';
  fromSide?: 'left' | 'right';
}

const leftFeatures: FeatureItem[] = [
  {
    id: 'dedicated-support',
    title: 'DEDICATED SUPPORT',
    description: 'Responsive assistance, whenever you need us.',
    icon: Headset,
    position: 'left',
  },
  {
    id: 'strategic-solutions',
    title: 'STRATEGIC SOLUTIONS',
    description: 'Apparel solutions aligned with your goals.',
    icon: Target,
    position: 'left',
  },
  {
    id: 'expert-team',
    title: 'EXPERT TEAM',
    description: 'Experienced professionals focused on your success.',
    icon: Users,
    position: 'left',
  },
];

const rightFeatures: FeatureItem[] = [
  {
    id: 'business-growth',
    title: 'BUSINESS GROWTH',
    description: 'Scalable apparel solutions for growing brands.',
    icon: TrendingUp,
    position: 'right',
  },
  {
    id: 'wider-reach',
    title: 'WIDER REACH',
    description: 'Pan India supply with reliable delivery.',
    icon: Globe,
    position: 'right',
  },
  {
    id: 'creative-ideas',
    title: 'CREATIVE IDEAS',
    description: 'Custom apparel ideas that make your brand stand out.',
    icon: Lightbulb,
    position: 'right',
  },
];

// Alternating feature sequence for mobile 3D scroll: Right -> Left -> Right -> Left -> Right -> Left
const alternatingFeatures: FeatureItem[] = [
  { ...leftFeatures[0], fromSide: 'right' },
  { ...rightFeatures[0], fromSide: 'left' },
  { ...leftFeatures[1], fromSide: 'right' },
  { ...rightFeatures[1], fromSide: 'left' },
  { ...leftFeatures[2], fromSide: 'right' },
  { ...rightFeatures[2], fromSide: 'left' },
];

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  className = '',
}) => {
  // Mobile pinned scroll container
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mobileScroll } = useScroll({
    target: mobileContainerRef,
    offset: ['start start', 'end end'],
  });

  const [activeMobileStep, setActiveMobileStep] = useState<number>(0);

  // Map mobile scroll (0.0 to 1.0) into discrete stages:
  // Step 0 (0.00 - 0.12): Heading centered in mobile screen
  // Step 1 (0.12 - 0.24): 3D Model centered in mobile view
  // Step 2 (0.24 - 0.36): 3D Model decreased to minimal
  // Steps 3 - 8 (0.36 - 1.00): 6 features in alternating order (Right, Left, Right, Left, Right, Left)
  useMotionValueEvent(mobileScroll, 'change', (latest) => {
    if (latest < 0.12) {
      setActiveMobileStep(0);
    } else if (latest < 0.24) {
      setActiveMobileStep(1);
    } else if (latest < 0.36) {
      setActiveMobileStep(2);
    } else {
      const featureProgress = (latest - 0.36) / (1 - 0.36);
      const featureIndex = Math.min(5, Math.max(0, Math.floor(featureProgress * 6)));
      setActiveMobileStep(3 + featureIndex);
    }
  });

  return (
    <section
      id="why-choose-us"
      className={`relative w-full bg-[#FAF6F4] py-6 sm:py-8 lg:py-8 ${className}`}
    >
      {/* Decorative Ribbon Swirls (Contained to avoid horizontal overflow without breaking sticky) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute top-0 right-0 w-44 sm:w-60 md:w-72 h-44 sm:h-60 md:h-72">
          <svg viewBox="0 0 300 300" fill="none" className="w-full h-full opacity-80">
            <path d="M300,0 C220,40 180,120 200,220 C210,270 240,300 300,300 Z" fill="url(#topSwirlGrad)" />
            <path d="M300,0 C240,20 210,80 230,170 C245,230 270,270 300,290 Z" fill="url(#topSwirlAccent)" />
            <g fill="#8A0024" opacity="0.65">
              {[0, 1, 2].map((row) =>
                [0, 1, 2, 3, 4, 5].map((col) => (
                  <circle key={`tr-${row}-${col}`} cx={160 + col * 18} cy={30 + row * 18} r="2.2" />
                ))
              )}
            </g>
            <defs>
              <linearGradient id="topSwirlGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8A0024" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#A41535" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="topSwirlAccent" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C41C44" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#660018" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-44 sm:w-60 md:w-72 h-44 sm:h-60 md:h-72">
          <svg viewBox="0 0 300 300" fill="none" className="w-full h-full opacity-80">
            <path d="M0,300 C80,260 120,180 100,80 C90,30 60,0 0,0 Z" fill="url(#botSwirlGrad)" />
            <path d="M0,300 C60,280 90,220 70,130 C55,70 30,30 0,10 Z" fill="url(#botSwirlAccent)" />
            <g fill="#8A0024" opacity="0.65">
              {[0, 1, 2].map((row) =>
                [0, 1, 2, 3, 4, 5].map((col) => (
                  <circle key={`bl-${row}-${col}`} cx={30 + col * 18} cy={230 + row * 18} r="2.2" />
                ))
              )}
            </g>
            <defs>
              <linearGradient id="botSwirlGrad" x1="1" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#8A0024" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#A41535" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="botSwirlAccent" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#C41C44" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#660018" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Aura Rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[620px] h-[520px] sm:h-[620px] rounded-full border border-rose-200/35 pointer-events-none select-none z-0" />
      </div>

      {/* =========================================================================
          DESKTOP VIEW (Fits comfortably within desktop screen height)
          ========================================================================= */}
      <div className="hidden lg:block relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Top Header */}
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm font-heading font-black tracking-[0.28em] text-[#1B2A4A] uppercase">
            WHY CHOOSE
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-black text-[#8A0024] tracking-tight leading-none my-1 select-none drop-shadow-[0_4px_16px_rgba(138,0,36,0.18)]">
            TEESZONE?
          </h2>
          <p className="text-xs sm:text-sm font-heading font-extrabold tracking-wider text-[#1B2A4A] mt-1.5">
            BEYOND CUSTOM T-SHIRTS.{' '}
            <span className="text-[#8A0024]">YOUR APPAREL PARTNER.</span>
          </p>
        </div>

        {/* 6-POINT INFOGRAPHIC - Straight Arrow Paths & Increased Content Sizes */}
        <div className="relative max-w-5xl mx-auto h-[480px]">
          {/* SVG DOTTED ARROW CONNECTIONS - Facing directly towards the content points */}
          <svg
            viewBox="0 0 1000 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full pointer-events-none select-none z-10"
          >
            <defs>
              {/* Arrow Head pointing forward in the path direction */}
              <marker id="redArrowHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <polygon points="0 1, 7 4, 0 7" fill="#8A0024" />
              </marker>
            </defs>

            {/* Line 1: Top-Left (DEDICATED SUPPORT at y=70) - Starts at center, curves and points directly LEFT towards Dedicated Support */}
            <path
              d="M 400,150 C 330,130 290,70 235,70"
              stroke="#8A0024"
              strokeWidth="2.2"
              strokeDasharray="5 5"
              markerEnd="url(#redArrowHead)"
            />

            {/* Line 2: Mid-Left (STRATEGIC SOLUTIONS at y=240) - Starts at center, points straight horizontal LEFT towards Strategic Solutions */}
            <path
              d="M 370,240 L 235,240"
              stroke="#8A0024"
              strokeWidth="2.2"
              strokeDasharray="5 5"
              markerEnd="url(#redArrowHead)"
            />

            {/* Line 3: Bottom-Left (EXPERT TEAM at y=410) - Starts at center, curves and points directly LEFT towards Expert Team */}
            <path
              d="M 430,330 C 350,350 300,410 235,410"
              stroke="#8A0024"
              strokeWidth="2.2"
              strokeDasharray="5 5"
              markerEnd="url(#redArrowHead)"
            />

            {/* Line 4: Top-Right (BUSINESS GROWTH at y=70) - Starts at center, curves and points directly RIGHT towards Business Growth */}
            <path
              d="M 600,150 C 670,130 710,70 765,70"
              stroke="#8A0024"
              strokeWidth="2.2"
              strokeDasharray="5 5"
              markerEnd="url(#redArrowHead)"
            />

            {/* Line 5: Mid-Right (WIDER REACH at y=240) - Starts at center, points straight horizontal RIGHT towards Wider Reach */}
            <path
              d="M 630,240 L 765,240"
              stroke="#8A0024"
              strokeWidth="2.2"
              strokeDasharray="5 5"
              markerEnd="url(#redArrowHead)"
            />

            {/* Line 6: Bottom-Right (CREATIVE IDEAS at y=410) - Starts at center, curves and points directly RIGHT towards Creative Ideas */}
            <path
              d="M 570,330 C 650,350 700,410 765,410"
              stroke="#8A0024"
              strokeWidth="2.2"
              strokeDasharray="5 5"
              markerEnd="url(#redArrowHead)"
            />
          </svg>

          {/* LEFT 3 FEATURE POINTS (Facing content, vertically aligned with arrows) */}
          <div className="absolute left-0 top-0 bottom-0 w-[300px] flex flex-col justify-between py-2 z-20">
            {leftFeatures.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex flex-col items-center text-center group cursor-default"
                >
                  <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-full bg-white shadow-[0_10px_28px_rgba(138,0,36,0.14)] border border-rose-100 flex items-center justify-center text-[#8A0024] group-hover:scale-110 group-hover:border-[#8A0024]/40 transition-all duration-300">
                    <IconComp className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                  </div>
                  <h3 className="font-heading font-black text-sm sm:text-base text-[#8A0024] tracking-wide mt-2 mb-0.5">
                    {item.title}
                  </h3>
                  <div className="w-8 h-[2px] bg-[#8A0024] rounded-full mb-1" />
                  <p className="text-xs sm:text-[13px] text-[#475569] font-medium leading-snug max-w-[220px]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CENTER 3D QUESTION MARK WITH MAN */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[340px] flex items-center justify-center z-15 pointer-events-none select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <img
                src="/assets/images/why-choose/question-man-center.png"
                alt="Why Choose TeesZone"
                className="w-full h-full object-contain filter drop-shadow-[0_20px_32px_rgba(20,0,5,0.2)]"
              />
            </motion.div>
          </div>

          {/* RIGHT 3 FEATURE POINTS (Facing content, vertically aligned with arrows) */}
          <div className="absolute right-0 top-0 bottom-0 w-[300px] flex flex-col justify-between py-2 z-20">
            {rightFeatures.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex flex-col items-center text-center group cursor-default"
                >
                  <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-full bg-white shadow-[0_10px_28px_rgba(138,0,36,0.14)] border border-rose-100 flex items-center justify-center text-[#8A0024] group-hover:scale-110 group-hover:border-[#8A0024]/40 transition-all duration-300">
                    <IconComp className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                  </div>
                  <h3 className="font-heading font-black text-sm sm:text-base text-[#8A0024] tracking-wide mt-2 mb-0.5">
                    {item.title}
                  </h3>
                  <div className="w-8 h-[2px] bg-[#8A0024] rounded-full mb-1" />
                  <p className="text-xs sm:text-[13px] text-[#475569] font-medium leading-snug max-w-[220px]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM SOCIAL BAR: 3 icons properly aligned */}
        <div className="mt-4 lg:mt-6 flex items-center justify-center gap-4">
          <div className="w-20 sm:w-32 md:w-40 h-[2px] bg-[#8A0024]/60 rounded-full" />
          
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeesZone on Facebook"
            className="w-10 h-10 rounded-full bg-[#8A0024] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#660018] shadow-md"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          <span className="text-[#8A0024]/60 font-semibold select-none">|</span>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeesZone on Instagram"
            className="w-10 h-10 rounded-full bg-[#8A0024] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#660018] shadow-md"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <span className="text-[#8A0024]/60 font-semibold select-none">|</span>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeesZone on LinkedIn"
            className="w-10 h-10 rounded-full bg-[#8A0024] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#660018] shadow-md"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <div className="w-20 sm:w-32 md:w-40 h-[2px] bg-[#8A0024]/60 rounded-full" />
        </div>
      </div>

      {/* =========================================================================
          MOBILE VIEW: Cinematic Scroll Sequence (360vh)
          1. Heading centered in mobile screen
          2. Model image aligns at center of mobile view
          3. Model decreases to minimal
          4-9. Contents move in alternating order (Right -> Left -> Right -> Left...) in 3D
          ========================================================================= */}
      <div ref={mobileContainerRef} className="block lg:hidden relative h-[360vh]">
        <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between items-center overflow-hidden px-4 py-6">
          
          {/* Top persistent indicator (visible during steps 1 - 8) */}
          <div className={`text-center z-20 shrink-0 transition-opacity duration-300 ${activeMobileStep === 0 ? 'opacity-0' : 'opacity-100'}`}>
            <p className="text-[10px] font-heading font-black tracking-[0.25em] text-[#1B2A4A] uppercase">
              WHY CHOOSE
            </p>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#8A0024] tracking-tight leading-none my-0.5">
              TEESZONE?
            </h2>
          </div>

          {/* Central Animation Stage with Unified AnimatePresence for Smooth 3D Flow */}
          <div className="relative flex-1 w-full max-w-sm flex items-center justify-center my-auto overflow-hidden [perspective:1000px]">
            <AnimatePresence mode="wait">
              {/* Step 0: Heading Centered in the Mobile View */}
              {activeMobileStep === 0 && (
                <motion.div
                  key="step-0-centered-heading"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="text-center px-4 py-6"
                >
                  <p className="text-xs font-heading font-black tracking-[0.28em] text-[#1B2A4A] uppercase mb-2">
                    WHY CHOOSE
                  </p>
                  <h2 className="text-4xl sm:text-5xl font-heading font-black text-[#8A0024] tracking-tight leading-none mb-3 drop-shadow-sm">
                    TEESZONE?
                  </h2>
                  <div className="w-12 h-[2.5px] bg-[#8A0024] rounded-full mx-auto mb-3" />
                  <p className="text-xs font-heading font-extrabold tracking-wider text-[#1B2A4A]">
                    BEYOND CUSTOM T-SHIRTS.{' '}
                    <span className="text-[#8A0024] block mt-0.5">YOUR APPAREL PARTNER.</span>
                  </p>
                  <p className="text-[11px] text-[#475569] font-medium mt-4">
                    Scroll down to explore &darr;
                  </p>
                </motion.div>
              )}

              {/* Step 1: Model Aligns at the Center of the Mobile Screen */}
              {activeMobileStep === 1 && (
                <motion.div
                  key="step-1-model-center"
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.75 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="w-full h-full flex flex-col items-center justify-center text-center"
                >
                  <img
                    src="/assets/images/why-choose/question-man-center.png"
                    alt="TeesZone Partner"
                    className="w-full max-h-[290px] sm:max-h-[330px] object-contain drop-shadow-[0_16px_28px_rgba(20,0,5,0.22)]"
                  />
                </motion.div>
              )}

              {/* Step 2: Model Decreases to Minimal */}
              {activeMobileStep === 2 && (
                <motion.div
                  key="step-2-model-minimal"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 0.6, opacity: 0.9, y: -5 }}
                  exit={{ scale: 0.45, opacity: 0.3 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  className="w-full h-full flex flex-col items-center justify-center text-center"
                >
                  <img
                    src="/assets/images/why-choose/question-man-center.png"
                    alt="TeesZone Partner Minimal"
                    className="w-full max-h-[220px] object-contain drop-shadow-md"
                  />
                  <span className="text-[11px] font-heading font-black tracking-widest text-[#8A0024] uppercase mt-2">
                    Our Core Pillars
                  </span>
                </motion.div>
              )}

              {/* Steps 3 - 8: 6 Content Cards Move in Alternating Order (Right -> Left -> Right...) with 3D Animations */}
              {activeMobileStep >= 3 && (() => {
                const featureIdx = activeMobileStep - 3;
                const item = alternatingFeatures[featureIdx];
                if (!item) return null;
                const IconComp = item.icon;
                const isFromRight = item.fromSide === 'right';

                return (
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      x: isFromRight ? '90vw' : '-90vw',
                      rotateY: isFromRight ? 24 : -24,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      rotateY: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      x: isFromRight ? '-90vw' : '90vw',
                      rotateY: isFromRight ? -24 : 24,
                      scale: 0.9,
                    }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-20 w-full max-w-[290px] flex flex-col items-center text-center p-5 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-md border border-[#8A0024]/20 shadow-[0_16px_36px_rgba(138,0,36,0.15)]"
                  >
                    <div className="w-14 h-14 rounded-full bg-white shadow-[0_6px_20px_rgba(138,0,36,0.14)] border border-rose-100 flex items-center justify-center text-[#8A0024] mb-2.5">
                      <IconComp className="w-7 h-7 stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-[#8A0024] mb-1">
                      Pillar {featureIdx + 1} of 6
                    </span>
                    <h3 className="font-heading font-black text-base sm:text-lg text-[#8A0024] tracking-wide">
                      {item.title}
                    </h3>
                    <div className="w-10 h-[2px] bg-[#8A0024] rounded-full my-2" />
                    <p className="text-xs text-[#475569] font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* Bottom Indicators & Social Links */}
          <div className="w-full flex flex-col items-center gap-3 shrink-0 z-20">
            {/* Step progress dots */}
            <div className="flex items-center justify-center gap-1.5">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                <div
                  key={`dot-${s}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    s === activeMobileStep ? 'w-5 bg-[#8A0024]' : 'w-1.5 bg-[#8A0024]/25'
                  }`}
                />
              ))}
            </div>

            {/* 3 Social Media Icons */}
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TeesZone on Facebook"
                className="w-9 h-9 rounded-full bg-[#8A0024] text-white flex items-center justify-center shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <span className="text-[#8A0024]/60 font-semibold text-xs select-none">|</span>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TeesZone on Instagram"
                className="w-9 h-9 rounded-full bg-[#8A0024] text-white flex items-center justify-center shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <span className="text-[#8A0024]/60 font-semibold text-xs select-none">|</span>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TeesZone on LinkedIn"
                className="w-9 h-9 rounded-full bg-[#8A0024] text-white flex items-center justify-center shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default WhyChooseUs;
