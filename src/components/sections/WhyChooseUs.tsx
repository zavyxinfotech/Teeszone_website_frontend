import React from 'react';
import { motion } from 'framer-motion';
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

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  className = '',
}) => {
  return (
    <section
      id="why-choose-us"
      className={`relative w-full overflow-hidden bg-gradient-to-b from-[#FFFDFD] via-[#FAF6F4] to-[#F7F0EC] pt-14 sm:pt-18 md:pt-20 lg:pt-20 pb-12 sm:pb-16 md:pb-20 ${className}`}
    >
      {/* =========================================================================
          1. DECORATIVE BACKGROUND SWIRLS & DOT MATRIX (Top-Right & Bottom-Left)
          ========================================================================= */}
      {/* Top-Right Decorative Ribbon Swirl & Dots */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 pointer-events-none select-none overflow-hidden z-0">
        <svg
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-85"
        >
          {/* Crimson Ribbon Swirl */}
          <path
            d="M300,0 C220,40 180,120 200,220 C210,270 240,300 300,300 Z"
            fill="url(#topSwirlGrad)"
          />
          <path
            d="M300,0 C240,20 210,80 230,170 C245,230 270,270 300,290 Z"
            fill="url(#topSwirlAccent)"
          />
          {/* Dot Matrix (6 cols x 3 rows) */}
          <g fill="#8A0024" opacity="0.65">
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

      {/* Bottom-Left Decorative Ribbon Swirl & Dots */}
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 pointer-events-none select-none overflow-hidden z-0">
        <svg
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-85"
        >
          {/* Crimson Ribbon Swirl */}
          <path
            d="M0,300 C80,260 120,180 100,80 C90,30 60,0 0,0 Z"
            fill="url(#botSwirlGrad)"
          />
          <path
            d="M0,300 C60,280 90,220 70,130 C55,70 30,30 0,10 Z"
            fill="url(#botSwirlAccent)"
          />
          {/* Dot Matrix (6 cols x 3 rows) */}
          <g fill="#8A0024" opacity="0.65">
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
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[680px] h-[550px] sm:h-[680px] rounded-full border border-rose-200/35 pointer-events-none select-none z-0" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[500px] h-[420px] sm:h-[500px] rounded-full border border-rose-200/25 pointer-events-none select-none z-0" />

      {/* =========================================================================
          2. MAIN CONTENT CONTAINER (Header + Center Graphic + 6 Connected Points)
          ========================================================================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Top Header matching Reference Image 1 */}
        <div className="text-center mb-8 sm:mb-12 md:mb-14">
          {/* Tracking Text: WHY CHOOSE */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs sm:text-sm md:text-base font-heading font-black tracking-[0.28em] text-[#1B2A4A] uppercase"
          >
            WHY CHOOSE
          </motion.p>

          {/* Giant Bold Crimson Title: US? */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black text-[#8A0024] tracking-tight leading-none my-1 select-none drop-shadow-[0_4px_16px_rgba(138,0,36,0.18)]"
          >
            US?
          </motion.h2>

          {/* Subtitle: BEYOND CUSTOM T-SHIRTS. YOUR APPAREL PARTNER. */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-xs sm:text-sm md:text-base font-heading font-extrabold tracking-wider text-[#1B2A4A] mt-2"
          >
            BEYOND CUSTOM T-SHIRTS.{' '}
            <span className="text-[#8A0024]">YOUR APPAREL PARTNER.</span>
          </motion.p>
        </div>

        {/* =========================================================================
            3. INTERACTIVE 6-POINT INFOGRAPHIC WITH CENTER 3D QUESTION MARK MAN
            ========================================================================= */}

        {/* DESKTOP VIEW (Exact Reference Composition with SVG Curved Dotted Arrows) */}
        <div className="hidden lg:block relative max-w-5xl mx-auto h-[620px]">
          {/* SVG CURVED DOTTED ARROW CONNECTIONS */}
          <svg
            viewBox="0 0 1000 620"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full pointer-events-none select-none z-10"
          >
            <defs>
              <marker
                id="redArrowHead"
                markerWidth="7"
                markerHeight="7"
                refX="4"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 1, 6 3.5, 0 6" fill="#8A0024" />
              </marker>
              <marker
                id="redArrowHeadLeft"
                markerWidth="7"
                markerHeight="7"
                refX="2"
                refY="3.5"
                orient="auto"
              >
                <polygon points="6 1, 0 3.5, 6 6" fill="#8A0024" />
              </marker>
            </defs>

            {/* Line 1: From Question Mark to DEDICATED SUPPORT (Top-Left) */}
            <path
              d="M 370,170 C 310,165 260,145 205,145"
              stroke="#8A0024"
              strokeWidth="2"
              strokeDasharray="5 5"
              markerEnd="url(#redArrowHeadLeft)"
            />

            {/* Line 2: From Question Mark to STRATEGIC SOLUTIONS (Mid-Left) */}
            <path
              d="M 340,310 C 280,310 230,285 185,285"
              stroke="#8A0024"
              strokeWidth="2"
              strokeDasharray="5 5"
              markerEnd="url(#redArrowHeadLeft)"
            />

            {/* Line 3: From Question Mark to EXPERT TEAM (Bottom-Left) */}
            <path
              d="M 370,440 C 330,440 300,440 270,440"
              stroke="#8A0024"
              strokeWidth="2"
              strokeDasharray="5 5"
              markerEnd="url(#redArrowHeadLeft)"
            />

            {/* Line 4: From Question Mark to BUSINESS GROWTH (Top-Right) */}
            <path
              d="M 640,170 C 700,165 745,145 795,145"
              stroke="#8A0024"
              strokeWidth="2"
              strokeDasharray="5 5"
              markerEnd="url(#redArrowHead)"
            />

            {/* Line 5: From Question Mark to WIDER REACH (Mid-Right) */}
            <path
              d="M 660,310 C 720,310 765,285 815,285"
              stroke="#8A0024"
              strokeWidth="2"
              strokeDasharray="5 5"
              markerEnd="url(#redArrowHead)"
            />

            {/* Line 6: From Question Mark to CREATIVE IDEAS (Bottom-Right) */}
            <path
              d="M 630,440 C 670,440 700,440 730,440"
              stroke="#8A0024"
              strokeWidth="2"
              strokeDasharray="5 5"
              markerEnd="url(#redArrowHead)"
            />
          </svg>

          {/* LEFT 3 FEATURE POINTS */}
          <div className="absolute left-0 top-0 bottom-0 w-[300px] flex flex-col justify-between py-6 z-20">
            {leftFeatures.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className={`flex flex-col items-center text-center group cursor-default ${
                    index === 0
                      ? 'pl-2'
                      : index === 1
                      ? 'pr-6'
                      : 'pl-10'
                  }`}
                >
                  {/* Circular Icon Badge */}
                  <div className="w-16 h-16 rounded-full bg-white shadow-[0_8px_24px_rgba(138,0,36,0.12)] border border-rose-100 flex items-center justify-center text-[#8A0024] group-hover:scale-110 group-hover:border-[#8A0024]/40 transition-all duration-300">
                    <IconComp className="w-7 h-7 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-black text-sm sm:text-[15px] text-[#8A0024] tracking-wide mt-3 mb-1">
                    {item.title}
                  </h3>

                  {/* Red Underline */}
                  <div className="w-8 h-[2px] bg-[#8A0024] rounded-full mb-1.5" />

                  {/* Description */}
                  <p className="text-xs text-[#475569] font-medium leading-relaxed max-w-[210px]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CENTER 3D QUESTION MARK WITH LEANING MAN */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[380px] flex items-center justify-center z-15 pointer-events-none select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <img
                src="/assets/images/why-choose/question-man-center.png"
                alt="Why Choose TeesZone - Your Brand Apparel Partner"
                className="w-full h-full object-contain filter drop-shadow-[0_22px_36px_rgba(20,0,5,0.22)]"
              />
            </motion.div>
          </div>

          {/* RIGHT 3 FEATURE POINTS */}
          <div className="absolute right-0 top-0 bottom-0 w-[300px] flex flex-col justify-between py-6 z-20">
            {rightFeatures.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className={`flex flex-col items-center text-center group cursor-default ${
                    index === 0
                      ? 'pr-2'
                      : index === 1
                      ? 'pl-6'
                      : 'pr-10'
                  }`}
                >
                  {/* Circular Icon Badge */}
                  <div className="w-16 h-16 rounded-full bg-white shadow-[0_8px_24px_rgba(138,0,36,0.12)] border border-rose-100 flex items-center justify-center text-[#8A0024] group-hover:scale-110 group-hover:border-[#8A0024]/40 transition-all duration-300">
                    <IconComp className="w-7 h-7 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-black text-sm sm:text-[15px] text-[#8A0024] tracking-wide mt-3 mb-1">
                    {item.title}
                  </h3>

                  {/* Red Underline */}
                  <div className="w-8 h-[2px] bg-[#8A0024] rounded-full mb-1.5" />

                  {/* Description */}
                  <p className="text-xs text-[#475569] font-medium leading-relaxed max-w-[210px]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET RESPONSIVE VIEW (< lg) */}
        <div className="block lg:hidden">
          {/* Center Graphic on Mobile */}
          <div className="max-w-xs sm:max-w-sm mx-auto mb-8">
            <img
              src="/assets/images/why-choose/question-man-center.png"
              alt="Why Choose TeesZone - Your Brand Apparel Partner"
              className="w-full h-auto object-contain drop-shadow-[0_16px_28px_rgba(20,0,5,0.2)]"
            />
          </div>

          {/* 6 Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
            {[...leftFeatures, ...rightFeatures].map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-rose-100/60 shadow-[0_4px_16px_rgba(138,0,36,0.06)]"
                >
                  <div className="w-14 h-14 rounded-full bg-white shadow-[0_6px_20px_rgba(138,0,36,0.1)] border border-rose-100 flex items-center justify-center text-[#8A0024] mb-3">
                    <IconComp className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="font-heading font-black text-sm text-[#8A0024] tracking-wide">
                    {item.title}
                  </h3>
                  <div className="w-8 h-[2px] bg-[#8A0024] rounded-full my-1" />
                  <p className="text-xs text-[#475569] font-medium leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            4. BOTTOM SOCIAL MEDIA BAR FLANKED BY CRIMSON DIVIDER LINES
            ========================================================================= */}
        <div className="mt-12 sm:mt-16 md:mt-18 flex items-center justify-center gap-3 sm:gap-5">
          {/* Left Horizontal Accent Line */}
          <div className="w-16 sm:w-28 md:w-36 h-[2px] bg-[#8A0024]/60 rounded-full" />

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeesZone on Facebook"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8A0024] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#660018] shadow-md"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* Vertical Divider */}
          <span className="text-[#8A0024]/60 font-semibold select-none">|</span>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeesZone on Instagram"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8A0024] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#660018] shadow-md"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* Vertical Divider */}
          <span className="text-[#8A0024]/60 font-semibold select-none">|</span>

          {/* X (Twitter) */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeesZone on X"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8A0024] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#660018] shadow-md"
          >
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Vertical Divider */}
          <span className="text-[#8A0024]/60 font-semibold select-none">|</span>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeesZone on LinkedIn"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8A0024] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#660018] shadow-md"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Right Horizontal Accent Line */}
          <div className="w-16 sm:w-28 md:w-36 h-[2px] bg-[#8A0024]/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
