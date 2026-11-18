import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
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
    description: 'Round-the-clock responsive support and dedicated apparel guidance whenever needed.',
    icon: Headset,
    position: 'left',
  },
  {
    id: 'strategic-solutions',
    title: 'STRATEGIC SOLUTIONS',
    description: 'Tailored uniform programs and bulk apparel roadmaps aligned with your goals.',
    icon: Target,
    position: 'left',
  },
  {
    id: 'expert-team',
    title: 'EXPERT TEAM',
    description: 'Skilled textile artisans and print engineers focused on flawless craftsmanship.',
    icon: Users,
    position: 'left',
  },
];

const rightFeatures: FeatureItem[] = [
  {
    id: 'business-growth',
    title: 'BUSINESS GROWTH',
    description: 'Scalable apparel manufacturing engineered to fuel expanding corporate brands.',
    icon: TrendingUp,
    position: 'right',
  },
  {
    id: 'wider-reach',
    title: 'WIDER REACH',
    description: 'Reliable pan-India delivery network ensuring punctual on-site order arrival.',
    icon: Globe,
    position: 'right',
  },
  {
    id: 'creative-ideas',
    title: 'CREATIVE IDEAS',
    description: 'Trendsetting concepts and premium fabrics that make your brand stand out.',
    icon: Lightbulb,
    position: 'right',
  },
];

const allFeatures: FeatureItem[] = [
  leftFeatures[0],  // 1. DEDICATED SUPPORT
  leftFeatures[1],  // 2. STRATEGIC SOLUTIONS
  leftFeatures[2],  // 3. EXPERT TEAM
  rightFeatures[0], // 4. BUSINESS GROWTH
  rightFeatures[1], // 5. WIDER REACH
  rightFeatures[2], // 6. CREATIVE IDEAS
];

// Exact SVG Brand Icons for Facebook, Instagram, LinkedIn, YouTube
const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
  </svg>
);

/**
 * Mobile 3D Layered Reel Card:
 * - Color theme matching the 3D question mark model's vibrant crimson-ruby color (#A60E30 -> #850422 -> #540214)
 * - Increased font size without boldness (font-normal / font-medium)
 * - Removed card border, removed icon border, removed icon background
 * - Removed numbers (01, 02, etc.)
 * - Center card in larger size; adjacent cards smaller and shaded behind
 */
const MobileStackedReelCard: React.FC<{
  feature: FeatureItem;
  index: number;
  total: number;
  scrollProgress: MotionValue<number>;
}> = ({ feature, index, total, scrollProgress }) => {
  // Cards timeline occupies scroll progress 0.22 to 0.98
  const startOffset = 0.22;
  const endOffset = 0.98;
  const step = (endOffset - startOffset) / (total - 1);
  const centerPos = startOffset + index * step;

  const pFarPrev = Math.max(startOffset, centerPos - step * 1.5);
  const pPrev = Math.max(startOffset, centerPos - step);
  const pCenter = centerPos;
  const pNext = Math.min(1.0, centerPos + step);
  const pFarNext = Math.min(1.0, centerPos + step * 1.5);

  const isFirst = index === 0;
  const isLast = index === total - 1;

  let inputPoints: number[];
  let yPoints: number[];
  let scalePoints: number[];
  let opacityPoints: number[];
  let zIndexPoints: number[];

  if (isFirst) {
    inputPoints = [0, startOffset, pCenter, pNext, pFarNext];
    yPoints = [0, 0, 0, -32, -54];
    scalePoints = [1.0, 1.0, 1.0, 0.90, 0.84];
    opacityPoints = [1.0, 1.0, 1.0, 0.35, 0];
    zIndexPoints = [25, 25, 25, 10, 0];
  } else if (isLast) {
    inputPoints = [pFarPrev, pPrev, pCenter, 1.0];
    yPoints = [54, 32, 0, 0];
    scalePoints = [0.84, 0.90, 1.0, 1.0];
    opacityPoints = [0, 0.35, 1.0, 1.0];
    zIndexPoints = [0, 10, 25, 25];
  } else {
    inputPoints = [pFarPrev, pPrev, pCenter, pNext, pFarNext];
    yPoints = [54, 32, 0, -32, -54];
    scalePoints = [0.84, 0.90, 1.0, 0.90, 0.84];
    opacityPoints = [0, 0.35, 1.0, 0.35, 0];
    zIndexPoints = [0, 10, 25, 10, 0];
  }

  const y = useTransform(scrollProgress, inputPoints, yPoints);
  const scale = useTransform(scrollProgress, inputPoints, scalePoints);
  const opacity = useTransform(scrollProgress, inputPoints, opacityPoints);
  const zIndex = useTransform(scrollProgress, inputPoints, zIndexPoints);

  const IconComp = feature.icon;

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex,
      }}
      className="absolute inset-x-0 mx-auto w-[88%] xs:w-[84%] max-w-[310px] p-4 xs:p-5 rounded-2xl bg-gradient-to-br from-[#A60E30] via-[#850422] to-[#540214] text-white border-0 shadow-lg flex flex-col justify-between select-none origin-center"
    >
      {/* Top row: Pure icon without border and without background */}
      <div className="flex items-center justify-between mb-2">
        <div className="text-white flex items-center justify-center">
          <IconComp className="w-7 h-7 stroke-[2.2]" />
        </div>
      </div>

      {/* Title: Increased font size without boldness */}
      <h3 className="font-heading font-medium text-base xs:text-lg text-white tracking-wide mb-1 leading-snug">
        {feature.title}
      </h3>

      {/* Description: Increased font size without boldness */}
      <p className="text-xs xs:text-sm text-rose-100 font-normal leading-relaxed">
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

  // Model image zoom-in -> decrease size -> settle animation
  // Initial (0.00): zoomed in view (scale 1.35)
  // Transition (0.00 -> 0.20): starts decreasing size to compact view (scale 0.80) and moves above cards
  const mobileModelScale = useTransform(mobileScrollProgress, [0, 0.08, 0.20, 0.98], [1.35, 1.35, 0.82, 0.82]);
  const mobileModelY = useTransform(mobileScrollProgress, [0, 0.08, 0.20, 0.98], [30, 30, -8, -8]);
  const mobileModelOpacity = useTransform(mobileScrollProgress, [0, 0.04, 0.98], [1.0, 1.0, 1.0]);

  // Cards deck emerges once model image settles into position
  const mobileCardsContainerOpacity = useTransform(mobileScrollProgress, [0, 0.16, 0.22], [0, 0.2, 1.0]);

  return (
    <section
      id="why-choose-us"
      className={`relative w-full bg-[#FAF6F4] pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14 ${className}`}
    >
      {/* Decorative Background Swirl: Top-Right Only (Bottom-Left removed as requested) */}
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
          <g fill="#80011F" opacity="0.6">
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
              <stop offset="0%" stopColor="#80011F" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#A41535" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="topSwirlAccent" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C41C44" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#660018" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* =========================================================================
          DESKTOP CONTAINER: Expanded View (Spacious, No Crowding, No Descriptions)
          ========================================================================= */}
      <div className="hidden lg:block relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 overflow-hidden pt-2 pb-6">
        
        {/* Top Header */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm font-heading font-black tracking-[0.26em] text-[#1B2A4A] uppercase">
            WHY CHOOSE
          </p>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-black tracking-tight text-[#80011F] leading-none my-2 select-none">
            TEESZONE?
          </h2>

          <p className="text-xs sm:text-sm font-heading font-extrabold tracking-wider text-[#1B2A4A] mt-1">
            BEYOND CUSTOM T-SHIRTS.{' '}
            <span className="text-[#80011F]">YOUR APPAREL PARTNER.</span>
          </p>
        </div>

        {/* 6-Point Infographic */}
        <div className="relative max-w-6xl mx-auto h-[480px]">
          
          {/* Animated SVG Dotted Arrows */}
          <svg
            viewBox="0 0 1150 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full pointer-events-none select-none z-10"
          >
            <defs>
              <marker
                id="arrowMarkerLarge"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 1 2 L 8 5 L 1 8 z" fill="#80011F" />
              </marker>
            </defs>

            {/* Line 1: Straight towards DEDICATED SUPPORT (Top-Left) */}
            <motion.path
              d="M 440,150 C 370,140 310,95 240,75"
              stroke="#80011F"
              strokeWidth="2.8"
              strokeDasharray="7 7"
              animate={{ strokeDashoffset: [0, -28] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              markerEnd="url(#arrowMarkerLarge)"
            />

            {/* Line 2: Straight Horizontal towards STRATEGIC SOLUTIONS (Mid-Left) */}
            <motion.path
              d="M 420,240 L 230,240"
              stroke="#80011F"
              strokeWidth="2.8"
              strokeDasharray="7 7"
              animate={{ strokeDashoffset: [0, -28] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              markerEnd="url(#arrowMarkerLarge)"
            />

            {/* Line 3: Straight towards EXPERT TEAM (Bottom-Left) */}
            <motion.path
              d="M 440,330 C 370,340 310,385 240,405"
              stroke="#80011F"
              strokeWidth="2.8"
              strokeDasharray="7 7"
              animate={{ strokeDashoffset: [0, -28] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              markerEnd="url(#arrowMarkerLarge)"
            />

            {/* Line 4: Straight towards BUSINESS GROWTH (Top-Right) */}
            <motion.path
              d="M 710,150 C 780,140 840,95 910,75"
              stroke="#80011F"
              strokeWidth="2.8"
              strokeDasharray="7 7"
              animate={{ strokeDashoffset: [0, -28] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              markerEnd="url(#arrowMarkerLarge)"
            />

            {/* Line 5: Straight Horizontal towards WIDER REACH (Mid-Right) */}
            <motion.path
              d="M 730,240 L 920,240"
              stroke="#80011F"
              strokeWidth="2.8"
              strokeDasharray="7 7"
              animate={{ strokeDashoffset: [0, -28] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              markerEnd="url(#arrowMarkerLarge)"
            />

            {/* Line 6: Straight towards CREATIVE IDEAS (Bottom-Right) */}
            <motion.path
              d="M 710,330 C 780,340 840,385 910,405"
              stroke="#80011F"
              strokeWidth="2.8"
              strokeDasharray="7 7"
              animate={{ strokeDashoffset: [0, -28] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              markerEnd="url(#arrowMarkerLarge)"
            />
          </svg>

          {/* LEFT 3 FEATURE POINTS */}
          <div className="absolute left-0 top-0 bottom-0 w-[240px] flex flex-col justify-between py-2 z-20">
            {leftFeatures.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  animate={{ y: [0, index % 2 === 0 ? -3 : 3, 0] }}
                  transition={{ duration: 3.2 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex flex-col items-center justify-center text-center group cursor-default"
                >
                  <div className="w-14 h-14 rounded-full bg-white border border-[#80011F]/25 flex items-center justify-center text-[#80011F] group-hover:scale-110 group-hover:border-[#80011F] transition-all duration-300">
                    <IconComp className="w-7 h-7 stroke-[2.2]" />
                  </div>

                  <h3 className="font-heading font-black text-sm md:text-base text-[#80011F] tracking-wide mt-2">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>

          {/* CENTER 3D QUESTION MARK WITH LEANING MAN */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[340px] flex items-center justify-center z-15 pointer-events-none select-none">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.0, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <img
                src="/assets/images/why-choose/question-man-center.png"
                alt="Why Choose TeesZone"
                className="w-full h-full object-contain filter drop-shadow-[0_14px_28px_rgba(20,0,5,0.18)]"
              />
            </motion.div>
          </div>

          {/* RIGHT 3 FEATURE POINTS */}
          <div className="absolute right-0 top-0 bottom-0 w-[240px] flex flex-col justify-between py-2 z-20">
            {rightFeatures.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  animate={{ y: [0, index % 2 === 0 ? 3 : -3, 0] }}
                  transition={{ duration: 3.4 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex flex-col items-center justify-center text-center group cursor-default"
                >
                  <div className="w-14 h-14 rounded-full bg-white border border-[#80011F]/25 flex items-center justify-center text-[#80011F] group-hover:scale-110 group-hover:border-[#80011F] transition-all duration-300">
                    <IconComp className="w-7 h-7 stroke-[2.2]" />
                  </div>

                  <h3 className="font-heading font-black text-sm md:text-base text-[#80011F] tracking-wide mt-2">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom Social Media Bar */}
        <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4">
          <div className="w-16 sm:w-28 md:w-36 h-[1.5px] bg-[#80011F]/60 rounded-full" />

          {/* Facebook */}
          <a
            href="https://www.facebook.com/teeszoneindia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeesZone on Facebook"
            className="text-[#80011F] hover:text-[#5B0116] transition-transform hover:scale-110 p-1"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>

          <span className="text-[#80011F]/50 text-xs font-semibold select-none">|</span>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/teeszoneindia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeesZone on Instagram"
            className="text-[#80011F] hover:text-[#5B0116] transition-transform hover:scale-110 p-1"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <span className="text-[#80011F]/50 text-xs font-semibold select-none">|</span>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/teeszone/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeesZone on LinkedIn"
            className="text-[#80011F] hover:text-[#5B0116] transition-transform hover:scale-110 p-1"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <span className="text-[#80011F]/50 text-xs font-semibold select-none">|</span>

          {/* YouTube */}
          <a
            href="https://youtube.com/@teeszoneindia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeesZone on YouTube"
            className="text-[#80011F] hover:text-[#5B0116] transition-transform hover:scale-110 p-1"
          >
            <YoutubeIcon className="w-4 h-4" />
          </a>

          <div className="w-16 sm:w-28 md:w-36 h-[1.5px] bg-[#80011F]/60 rounded-full" />
        </div>

      </div>

      {/* =========================================================================
          MOBILE VIEW: Perfectly Fitted within Mobile Screen Height (100dvh)
          - Section Header at top
          - Model Image zoom-in animation -> scales down and aligns above cards
          - Cards animation starts once model settles
          - Card style matches 3D question mark crimson color theme
          - Larger text without boldness, no card border, no icon border/bg, no numbers
          - Enlarged bottom social icons
          ========================================================================= */}
      <div ref={mobileContainerRef} className="lg:hidden relative h-[450vh] w-full">
        <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between items-center overflow-hidden px-4 pt-14 pb-3 bg-[#FAF6F4]">
          
          {/* Top Section Header */}
          <div className="text-center max-w-sm mx-auto z-30 shrink-0">
            <p className="text-[11px] xs:text-xs font-heading font-black tracking-[0.24em] text-[#1B2A4A] uppercase">
              WHY CHOOSE
            </p>
            <h2 className="text-3xl xs:text-4xl font-heading font-black tracking-tight text-[#80011F] leading-none my-1 select-none">
              TEESZONE?
            </h2>
            <p className="text-[11px] xs:text-xs sm:text-sm font-heading font-extrabold tracking-wider text-[#1B2A4A]">
              BEYOND CUSTOM T-SHIRTS.{' '}
              <span className="text-[#80011F]">YOUR APPAREL PARTNER.</span>
            </p>
          </div>

          {/* Center Stage: Vertically Balanced & Fitted within Mobile Height */}
          <div className="relative flex-1 w-full max-w-sm flex flex-col items-center justify-center my-auto overflow-hidden">
            
            {/* Question Mark Model Image:
                1. Initial scroll: zoom-in view (scale 1.35)
                2. On scrolling: decreases in size to scale 0.82 and settles above the cards
            */}
            <motion.div
              style={{
                scale: mobileModelScale,
                y: mobileModelY,
                opacity: mobileModelOpacity,
              }}
              className="relative w-full h-[150px] xs:h-[165px] flex items-center justify-center pointer-events-none select-none z-10 shrink-0 origin-center"
            >
              <img
                src="/assets/images/why-choose/question-man-center.png"
                alt="Why Choose TeesZone"
                className="h-full w-auto object-contain filter drop-shadow-[0_12px_24px_rgba(20,0,5,0.18)]"
              />
            </motion.div>

            {/* Cards Deck:
                - Positioned directly below the settled model image
                - Emerges once model settles, then cards scroll animation cycles through
            */}
            <motion.div
              style={{ opacity: mobileCardsContainerOpacity }}
              className="relative w-full h-[195px] xs:h-[210px] mt-1 flex items-center justify-center z-20"
            >
              {allFeatures.map((feature, idx) => (
                <MobileStackedReelCard
                  key={feature.id}
                  feature={feature}
                  index={idx}
                  total={allFeatures.length}
                  scrollProgress={mobileScrollProgress}
                />
              ))}
            </motion.div>

          </div>

          {/* Bottom Social Media Bar: Increased icon sizes without disturbing other sections */}
          <div className="w-full max-w-sm flex items-center justify-center z-30 shrink-0 mb-1">
            <div className="flex items-center justify-center gap-5">
              <a
                href="https://www.facebook.com/teeszoneindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TeesZone on Facebook"
                className="text-[#80011F] hover:text-[#5B0116] transition-transform hover:scale-115 p-1 cursor-pointer"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>

              <a
                href="https://www.instagram.com/teeszoneindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TeesZone on Instagram"
                className="text-[#80011F] hover:text-[#5B0116] transition-transform hover:scale-115 p-1 cursor-pointer"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>

              <a
                href="https://www.linkedin.com/company/teeszone/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TeesZone on LinkedIn"
                className="text-[#80011F] hover:text-[#5B0116] transition-transform hover:scale-115 p-1 cursor-pointer"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>

              <a
                href="https://youtube.com/@teeszoneindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TeesZone on YouTube"
                className="text-[#80011F] hover:text-[#5B0116] transition-transform hover:scale-115 p-1 cursor-pointer"
              >
                <YoutubeIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;
