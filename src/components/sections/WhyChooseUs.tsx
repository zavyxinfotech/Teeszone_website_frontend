import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from 'framer-motion';
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
}

const leftFeatures: FeatureItem[] = [
  {
    id: 'dedicated-support',
    title: 'DEDICATED SUPPORT',
    description: 'Round-the-clock responsive apparel assistance, dedicated order specialists, and instant milestone tracking.',
    icon: Headset,
    position: 'left',
  },
  {
    id: 'strategic-solutions',
    title: 'STRATEGIC SOLUTIONS',
    description: 'End-to-end custom apparel roadmaps, fabric sourcing, and bulk uniform programs tailored to your organization.',
    icon: Target,
    position: 'left',
  },
  {
    id: 'expert-team',
    title: 'EXPERT TEAM',
    description: 'Master pattern makers, skilled textile artisans, and print engineers dedicated to delivering flawless craftsmanship.',
    icon: Users,
    position: 'left',
  },
];

const rightFeatures: FeatureItem[] = [
  {
    id: 'business-growth',
    title: 'BUSINESS GROWTH',
    description: 'Scalable high-volume production, flexible order sizes, and rapid turnaround designed to expand your brand.',
    icon: TrendingUp,
    position: 'right',
  },
  {
    id: 'wider-reach',
    title: 'WIDER REACH',
    description: 'Reliable pan-India delivery network with streamlined supply chain dispatch across all major cities and hubs.',
    icon: Globe,
    position: 'right',
  },
  {
    id: 'creative-ideas',
    title: 'CREATIVE IDEAS',
    description: 'Trendsetting apparel concepts, premium fabric textures, and standout graphics engineered to elevate your brand presence.',
    icon: Lightbulb,
    position: 'right',
  },
];

const allFeatures: FeatureItem[] = [
  leftFeatures[0],  // 1. DEDICATED SUPPORT (from Right)
  leftFeatures[1],  // 2. STRATEGIC SOLUTIONS (from Left)
  leftFeatures[2],  // 3. EXPERT TEAM (from Right)
  rightFeatures[0], // 4. BUSINESS GROWTH (from Left)
  rightFeatures[1], // 5. WIDER REACH (from Right)
  rightFeatures[2], // 6. CREATIVE IDEAS (from Left)
];

/**
 * Mobile Feature Card: Animates continuously in 3D directly driven by scroll progress.
 * Alternating order:
 * Even indices (0, 2, 4) enter from RIGHT.
 * Odd indices (1, 3, 5) enter from LEFT.
 */
const MobileFeatureCard: React.FC<{
  feature: FeatureItem;
  index: number;
  total: number;
  scrollProgress: MotionValue<number>;
}> = ({ feature, index, total, scrollProgress }) => {
  const isFromRight = index % 2 === 0;
  const slotSpan = 0.62 / total;
  const start = 0.36 + index * slotSpan;
  const mid = start + slotSpan * 0.5;
  const end = start + slotSpan;
  const isLast = index === total - 1;

  const inputRange = isLast
    ? [start - 0.04, start + 0.02, mid, 1.0]
    : [start - 0.04, start + 0.02, mid, end - 0.02, end + 0.04];

  const xRange = isLast
    ? [isFromRight ? 280 : -280, 0, 0, 0]
    : isFromRight
    ? [280, 0, 0, 0, -280]
    : [-280, 0, 0, 0, 280];

  const rotYRange = isLast
    ? [isFromRight ? -30 : 30, 0, 0, 0]
    : isFromRight
    ? [-30, 0, 0, 0, 30]
    : [30, 0, 0, 0, -30];

  const opacityRange = isLast
    ? [0, 1, 1, 1]
    : [0, 1, 1, 1, 0];

  const scaleRange = isLast
    ? [0.86, 1, 1, 1]
    : [0.86, 1, 1, 1, 0.86];

  const x = useTransform(scrollProgress, inputRange, xRange);
  const rotateY = useTransform(scrollProgress, inputRange, rotYRange);
  const opacity = useTransform(scrollProgress, inputRange, opacityRange);
  const scale = useTransform(scrollProgress, inputRange, scaleRange);
  const pointerEvents = useTransform(opacity, (v) => (v > 0.5 ? 'auto' : 'none'));

  const IconComp = feature.icon;

  return (
    <motion.div
      style={{
        x,
        rotateY,
        opacity,
        scale,
        pointerEvents,
        perspective: 1200,
        transformStyle: 'preserve-3d',
      }}
      className="absolute inset-x-0 mx-auto w-full max-w-[305px] p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-rose-200/80 shadow-[0_16px_36px_rgba(138,0,36,0.18)] flex flex-col items-center text-center z-20"
    >
      <div className="text-[10px] font-heading font-black tracking-widest text-[#8A0024] uppercase mb-2 bg-rose-50 px-3 py-0.5 rounded-full border border-rose-100">
        Feature 0{index + 1} of 06
      </div>

      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#8A0024] to-[#B01A3D] text-white flex items-center justify-center shadow-md mb-2.5">
        <IconComp className="w-7 h-7 stroke-[2.2]" />
      </div>

      <h3 className="font-heading font-black text-sm sm:text-base text-[#8A0024] tracking-wide">
        {feature.title}
      </h3>

      <div className="w-8 h-[2px] bg-[#8A0024] rounded-full my-2" />

      <p className="text-xs sm:text-[13px] text-[#334155] font-semibold leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
};

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  className = '',
}) => {
  // Mobile pinned scroll container
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mobileScrollProgress } = useScroll({
    target: mobileContainerRef,
    offset: ['start start', 'end end'],
  });

  // Mobile scroll stages:
  // 1. Heading starts at the center of the mobile screen (0.0 to 0.10), then transitions up to docked position (0.10 to 0.22)
  const mobileHeadingY = useTransform(mobileScrollProgress, [0, 0.10, 0.22], ['32vh', '32vh', '0vh']);
  const mobileHeadingScale = useTransform(mobileScrollProgress, [0, 0.10, 0.22], [1.18, 1.18, 1.0]);

  // 2. Center model aligns at center of mobile view (0.10 to 0.22), stays centered (0.22 to 0.30), then scales down to minimal (0.30 to 0.36)
  const mobileModelOpacity = useTransform(mobileScrollProgress, [0.10, 0.18, 0.28, 0.36], [0, 1, 1, 0.22]);
  const mobileModelScale = useTransform(mobileScrollProgress, [0.10, 0.18, 0.28, 0.36], [0.65, 1.05, 1.0, 0.36]);
  const mobileModelY = useTransform(mobileScrollProgress, [0.10, 0.18, 0.28, 0.36], [60, 0, 0, -35]);

  // Active step indicator for mobile progress
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number>(-1);

  useMotionValueEvent(mobileScrollProgress, 'change', (latest) => {
    if (latest < 0.34) {
      setActiveFeatureIndex(-1);
    } else {
      const featureProgress = (latest - 0.34) / 0.66;
      const idx = Math.min(
        allFeatures.length - 1,
        Math.max(0, Math.floor(featureProgress * allFeatures.length))
      );
      setActiveFeatureIndex(idx);
    }
  });

  return (
    <section
      id="why-choose-us"
      className={`relative w-full overflow-hidden bg-gradient-to-b from-[#FFFDFD] via-[#FAF6F4] to-[#F7F0EC] pt-6 sm:pt-8 lg:pt-8 pb-5 sm:pb-6 lg:pb-7 ${className}`}
    >
      {/* Decorative Background Swirls & Dot Matrix (Top-Right & Bottom-Left) */}
      <div className="absolute top-0 right-0 w-36 sm:w-48 md:w-56 h-36 sm:h-48 md:h-56 pointer-events-none select-none overflow-hidden z-0">
        <svg
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-75"
        >
          <path
            d="M300,0 C220,40 180,120 200,220 C210,270 240,300 300,300 Z"
            fill="url(#topSwirlGrad)"
          />
          <path
            d="M300,0 C240,20 210,80 230,170 C245,230 270,270 300,290 Z"
            fill="url(#topSwirlAccent)"
          />
          <g fill="#8A0024" opacity="0.6">
            {[0, 1, 2].map((row) =>
              [0, 1, 2, 3, 4, 5].map((col) => (
                <circle
                  key={`tr-${row}-${col}`}
                  cx={160 + col * 18}
                  cy={30 + row * 18}
                  r="2.2"
                />
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

      <div className="absolute bottom-0 left-0 w-36 sm:w-48 md:w-56 h-36 sm:h-48 md:h-56 pointer-events-none select-none overflow-hidden z-0">
        <svg
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-75"
        >
          <path
            d="M0,300 C80,260 120,180 100,80 C90,30 60,0 0,0 Z"
            fill="url(#botSwirlGrad)"
          />
          <path
            d="M0,300 C60,280 90,220 70,130 C55,70 30,30 0,10 Z"
            fill="url(#botSwirlAccent)"
          />
          <g fill="#8A0024" opacity="0.6">
            {[0, 1, 2].map((row) =>
              [0, 1, 2, 3, 4, 5].map((col) => (
                <circle
                  key={`bl-${row}-${col}`}
                  cx={30 + col * 18}
                  cy={230 + row * 18}
                  r="2.2"
                />
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

      {/* Concentric Soft Background Aura Rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] sm:w-[500px] h-[440px] sm:h-[500px] rounded-full border border-rose-200/25 pointer-events-none select-none z-0" />

      {/* =========================================================================
          DESKTOP CONTAINER: Fits within Desktop Viewport Height (< 750px)
          ========================================================================= */}
      <div className="hidden lg:block relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Top Header: Word "US" changed to "TEESZONE" */}
        <div className="text-center mb-2.5">
          <p className="text-xs sm:text-sm font-heading font-black tracking-[0.26em] text-[#1B2A4A] uppercase">
            WHY CHOOSE
          </p>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-black text-[#8A0024] tracking-tight leading-none my-0.5 select-none drop-shadow-[0_4px_14px_rgba(138,0,36,0.16)]">
            TEESZONE?
          </h2>

          <p className="text-xs sm:text-[13px] font-heading font-extrabold tracking-wider text-[#1B2A4A] mt-0.5">
            BEYOND CUSTOM T-SHIRTS.{' '}
            <span className="text-[#8A0024]">YOUR APPAREL PARTNER.</span>
          </p>
        </div>

        {/* 6-Point Infographic: Contents Arranged Straight Towards Continuous Animated Arrows */}
        <div className="relative max-w-5xl mx-auto h-[440px]">
          
          {/* Animated SVG Straight & Curved Dotted Arrows */}
          <svg
            viewBox="0 0 1000 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full pointer-events-none select-none z-10"
          >
            <defs>
              {/* Standard orient="auto" marker: Tip points in positive X.
                  SVG automatically aligns the tip with the tangent vector at the end of each path:
                  - Leftward paths (dx < 0) rotate 180° so the arrow head points directly LEFT towards left cards.
                  - Rightward paths (dx > 0) rotate 0° so the arrow head points directly RIGHT towards right cards. */}
              <marker
                id="arrowMarker"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto"
              >
                <path d="M 1 2 L 8 5 L 1 8 z" fill="#8A0024" />
              </marker>
            </defs>

            {/* Line 1: Straight towards DEDICATED SUPPORT (Top-Left) */}
            <motion.path
              d="M 365,115 C 335,110 305,82 280,80"
              stroke="#8A0024"
              strokeWidth="2.2"
              strokeDasharray="6 6"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              markerEnd="url(#arrowMarker)"
            />

            {/* Line 2: Straight Horizontal towards STRATEGIC SOLUTIONS (Mid-Left) */}
            <motion.path
              d="M 350,220 L 275,220"
              stroke="#8A0024"
              strokeWidth="2.2"
              strokeDasharray="6 6"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              markerEnd="url(#arrowMarker)"
            />

            {/* Line 3: Straight towards EXPERT TEAM (Bottom-Left) */}
            <motion.path
              d="M 365,325 C 335,330 305,358 280,360"
              stroke="#8A0024"
              strokeWidth="2.2"
              strokeDasharray="6 6"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              markerEnd="url(#arrowMarker)"
            />

            {/* Line 4: Straight towards BUSINESS GROWTH (Top-Right) */}
            <motion.path
              d="M 635,115 C 665,110 695,82 720,80"
              stroke="#8A0024"
              strokeWidth="2.2"
              strokeDasharray="6 6"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              markerEnd="url(#arrowMarker)"
            />

            {/* Line 5: Straight Horizontal towards WIDER REACH (Mid-Right) */}
            <motion.path
              d="M 650,220 L 725,220"
              stroke="#8A0024"
              strokeWidth="2.2"
              strokeDasharray="6 6"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              markerEnd="url(#arrowMarker)"
            />

            {/* Line 6: Straight towards CREATIVE IDEAS (Bottom-Right) */}
            <motion.path
              d="M 635,325 C 665,330 695,358 720,360"
              stroke="#8A0024"
              strokeWidth="2.2"
              strokeDasharray="6 6"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              markerEnd="url(#arrowMarker)"
            />
          </svg>

          {/* LEFT 3 FEATURE POINTS (Prominent Sizes with Smooth Ambient Floating Animation) */}
          <div className="absolute left-0 top-0 bottom-0 w-[290px] flex flex-col justify-between py-1 z-20">
            {leftFeatures.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  animate={{ y: [0, index % 2 === 0 ? -4 : 4, 0] }}
                  transition={{ duration: 3.2 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                  className={`flex flex-col items-center text-center group cursor-default ${
                    index === 0
                      ? 'pl-2'
                      : index === 1
                      ? 'pr-6'
                      : 'pl-6'
                  }`}
                >
                  {/* Larger Circular Icon Badge */}
                  <div className="w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-white shadow-[0_8px_24px_rgba(138,0,36,0.13)] border-2 border-rose-100 flex items-center justify-center text-[#8A0024] group-hover:scale-110 group-hover:border-[#8A0024]/50 transition-all duration-300">
                    <IconComp className="w-7 h-7 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-black text-sm sm:text-[15px] text-[#8A0024] tracking-wide mt-2 mb-0.5">
                    {item.title}
                  </h3>

                  {/* Red Accent Divider */}
                  <div className="w-9 h-[2px] bg-[#8A0024] rounded-full mb-1" />

                  {/* Increased Detailed Description */}
                  <p className="text-xs sm:text-[13px] text-[#334155] font-semibold leading-relaxed max-w-[235px]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CENTER 3D QUESTION MARK WITH LEANING MAN */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[305px] flex items-center justify-center z-15 pointer-events-none select-none">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.0, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <img
                src="/assets/images/why-choose/question-man-center.png"
                alt="Why Choose TeesZone"
                className="w-full h-full object-contain filter drop-shadow-[0_16px_28px_rgba(20,0,5,0.2)]"
              />
            </motion.div>
          </div>

          {/* RIGHT 3 FEATURE POINTS (Prominent Sizes with Smooth Ambient Floating Animation) */}
          <div className="absolute right-0 top-0 bottom-0 w-[290px] flex flex-col justify-between py-1 z-20">
            {rightFeatures.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  animate={{ y: [0, index % 2 === 0 ? 4 : -4, 0] }}
                  transition={{ duration: 3.4 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                  className={`flex flex-col items-center text-center group cursor-default ${
                    index === 0
                      ? 'pr-2'
                      : index === 1
                      ? 'pl-6'
                      : 'pr-6'
                  }`}
                >
                  {/* Larger Circular Icon Badge */}
                  <div className="w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-white shadow-[0_8px_24px_rgba(138,0,36,0.13)] border-2 border-rose-100 flex items-center justify-center text-[#8A0024] group-hover:scale-110 group-hover:border-[#8A0024]/50 transition-all duration-300">
                    <IconComp className="w-7 h-7 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-black text-sm sm:text-[15px] text-[#8A0024] tracking-wide mt-2 mb-0.5">
                    {item.title}
                  </h3>

                  {/* Red Accent Divider */}
                  <div className="w-9 h-[2px] bg-[#8A0024] rounded-full mb-1" />

                  {/* Increased Detailed Description */}
                  <p className="text-xs sm:text-[13px] text-[#334155] font-semibold leading-relaxed max-w-[235px]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom Social Media Bar: Only 3 Icons (Facebook, Instagram, LinkedIn - X removed) */}
        <div className="mt-4 sm:mt-5 flex items-center justify-center gap-3 sm:gap-4">
          <div className="w-16 sm:w-28 md:w-36 h-[1.5px] bg-[#8A0024]/60 rounded-full" />

          {/* Facebook */}
          <a
            href="https://facebook.com/teeszone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeesZone on Facebook"
            className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#8A0024] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#660018] shadow-sm"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          <span className="text-[#8A0024]/50 text-xs font-semibold select-none">|</span>

          {/* Instagram */}
          <a
            href="https://instagram.com/teeszone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeesZone on Instagram"
            className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#8A0024] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#660018] shadow-sm"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <span className="text-[#8A0024]/50 text-xs font-semibold select-none">|</span>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/company/teeszone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeesZone on LinkedIn"
            className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#8A0024] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#660018] shadow-sm"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <div className="w-16 sm:w-28 md:w-36 h-[1.5px] bg-[#8A0024]/60 rounded-full" />
        </div>

      </div>

      {/* =========================================================================
          MOBILE VIEW: Cinematic Scroll Pinned Container
          1. 1st scroll: Heading shows at the center of the mobile screen
          2. Next scroll: Center model aligns at center of mobile view
          3. Next scroll: Center model decreases to minimal
          4. Next scrolls: Contents slide in alternating from right and left in 3D
          ========================================================================= */}
      <div ref={mobileContainerRef} className="lg:hidden relative h-[420vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center overflow-hidden px-4 pt-6 pb-6 bg-gradient-to-b from-[#FFFDFD] via-[#FAF6F4] to-[#F7F0EC]">
          
          {/* Top/Center Animated Heading */}
          <motion.div
            style={{ y: mobileHeadingY, scale: mobileHeadingScale }}
            className="text-center max-w-sm mx-auto z-30 shrink-0 origin-center"
          >
            <p className="text-[11px] font-heading font-black tracking-[0.24em] text-[#1B2A4A] uppercase">
              WHY CHOOSE
            </p>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-[#8A0024] tracking-tight leading-none my-0.5">
              TEESZONE?
            </h2>
            <p className="text-xs font-heading font-extrabold tracking-wider text-[#1B2A4A]">
              BEYOND CUSTOM T-SHIRTS.{' '}
              <span className="text-[#8A0024]">YOUR APPAREL PARTNER.</span>
            </p>
          </motion.div>

          {/* Center Area: Animated Model + Alternating 3D Sliding Cards */}
          <div className="relative flex-1 w-full max-w-sm flex items-center justify-center my-auto overflow-hidden">
            
            {/* Center Model (Enters center, then scales to minimal) */}
            <motion.div
              style={{
                opacity: mobileModelOpacity,
                scale: mobileModelScale,
                y: mobileModelY,
              }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10"
            >
              <img
                src="/assets/images/why-choose/question-man-center.png"
                alt="Why Choose TeesZone"
                className="max-h-[290px] sm:max-h-[330px] w-auto object-contain drop-shadow-[0_16px_28px_rgba(20,0,5,0.2)]"
              />
            </motion.div>

            {/* Alternating 3D Cards: Continuous hardware-accelerated transitions from Right & Left */}
            <div className="relative z-20 w-full h-[280px] flex items-center justify-center">
              {allFeatures.map((feature, idx) => (
                <MobileFeatureCard
                  key={feature.id}
                  feature={feature}
                  index={idx}
                  total={allFeatures.length}
                  scrollProgress={mobileScrollProgress}
                />
              ))}
            </div>

          </div>

          {/* Bottom Indicators & Social Icons on Mobile */}
          <div className="w-full max-w-sm flex flex-col items-center z-30 shrink-0">
            {/* 6 Step Indicators */}
            <div className="flex items-center justify-center gap-1.5 mb-3">
              {allFeatures.map((f, idx) => (
                <div
                  key={f.id}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeFeatureIndex
                      ? 'w-6 bg-[#8A0024]'
                      : 'w-1.5 bg-[#8A0024]/25'
                  }`}
                />
              ))}
            </div>

            {/* 3 Social Media Icons (Facebook, Instagram, LinkedIn - X removed) */}
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://facebook.com/teeszone"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TeesZone on Facebook"
                className="w-7 h-7 rounded-full bg-[#8A0024] text-white flex items-center justify-center shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/teeszone"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TeesZone on Instagram"
                className="w-7 h-7 rounded-full bg-[#8A0024] text-white flex items-center justify-center shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/company/teeszone"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TeesZone on LinkedIn"
              className="w-7 h-7 rounded-full bg-[#8A0024] text-white flex items-center justify-center shadow-xs"
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
