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
      className={`relative w-full overflow-hidden bg-gradient-to-b from-[#FFFDFD] via-[#FAF6F4] to-[#F7F0EC] pt-8 sm:pt-10 lg:pt-10 pb-6 sm:pb-8 lg:pb-8 ${className}`}
    >
      {/* Decorative Background Swirls & Dot Matrix (Top-Right & Bottom-Left) */}
      <div className="absolute top-0 right-0 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 pointer-events-none select-none overflow-hidden z-0">
        <svg
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-80"
        >
          <path
            d="M300,0 C220,40 180,120 200,220 C210,270 240,300 300,300 Z"
            fill="url(#topSwirlGrad)"
          />
          <path
            d="M300,0 C240,20 210,80 230,170 C245,230 270,270 300,290 Z"
            fill="url(#topSwirlAccent)"
          />
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

      <div className="absolute bottom-0 left-0 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 pointer-events-none select-none overflow-hidden z-0">
        <svg
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-80"
        >
          <path
            d="M0,300 C80,260 120,180 100,80 C90,30 60,0 0,0 Z"
            fill="url(#botSwirlGrad)"
          />
          <path
            d="M0,300 C60,280 90,220 70,130 C55,70 30,30 0,10 Z"
            fill="url(#botSwirlAccent)"
          />
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
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] sm:w-[540px] h-[460px] sm:h-[540px] rounded-full border border-rose-200/30 pointer-events-none select-none z-0" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[400px] h-[340px] sm:h-[400px] rounded-full border border-rose-200/20 pointer-events-none select-none z-0" />

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Top Header (Compact for Desktop Height) */}
        <div className="text-center mb-4 sm:mb-5">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="text-[11px] sm:text-xs md:text-sm font-heading font-black tracking-[0.24em] text-[#1B2A4A] uppercase"
          >
            WHY CHOOSE
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-heading font-black text-[#8A0024] tracking-tight leading-none my-0.5 select-none drop-shadow-[0_4px_14px_rgba(138,0,36,0.16)]"
          >
            US?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="text-xs sm:text-sm font-heading font-extrabold tracking-wider text-[#1B2A4A] mt-1"
          >
            BEYOND CUSTOM T-SHIRTS.{' '}
            <span className="text-[#8A0024]">YOUR APPAREL PARTNER.</span>
          </motion.p>
        </div>

        {/* DESKTOP VIEW: Scaled 6-Point Infographic within Desktop Viewport */}
        <div className="hidden lg:block relative max-w-5xl mx-auto h-[470px]">
          {/* SVG Curved Dotted Arrow Connections */}
          <svg
            viewBox="0 0 1000 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full pointer-events-none select-none z-10"
          >
            <defs>
              <marker
                id="redArrowHead"
                markerWidth="6"
                markerHeight="6"
                refX="3.5"
                refY="3"
                orient="auto"
              >
                <polygon points="0 1, 5 3, 0 5" fill="#8A0024" />
              </marker>
              <marker
                id="redArrowHeadLeft"
                markerWidth="6"
                markerHeight="6"
                refX="1.5"
                refY="3"
                orient="auto"
              >
                <polygon points="5 1, 0 3, 5 5" fill="#8A0024" />
              </marker>
            </defs>

            {/* Line 1: To DEDICATED SUPPORT (Top-Left) */}
            <path
              d="M 370,120 C 310,115 260,105 205,105"
              stroke="#8A0024"
              strokeWidth="1.8"
              strokeDasharray="4 4"
              markerEnd="url(#redArrowHeadLeft)"
            />

            {/* Line 2: To STRATEGIC SOLUTIONS (Mid-Left) */}
            <path
              d="M 340,235 C 280,235 230,220 185,220"
              stroke="#8A0024"
              strokeWidth="1.8"
              strokeDasharray="4 4"
              markerEnd="url(#redArrowHeadLeft)"
            />

            {/* Line 3: To EXPERT TEAM (Bottom-Left) */}
            <path
              d="M 370,345 C 330,345 300,345 270,345"
              stroke="#8A0024"
              strokeWidth="1.8"
              strokeDasharray="4 4"
              markerEnd="url(#redArrowHeadLeft)"
            />

            {/* Line 4: To BUSINESS GROWTH (Top-Right) */}
            <path
              d="M 630,120 C 690,115 740,105 795,105"
              stroke="#8A0024"
              strokeWidth="1.8"
              strokeDasharray="4 4"
              markerEnd="url(#redArrowHead)"
            />

            {/* Line 5: To WIDER REACH (Mid-Right) */}
            <path
              d="M 660,235 C 720,235 765,220 815,220"
              stroke="#8A0024"
              strokeWidth="1.8"
              strokeDasharray="4 4"
              markerEnd="url(#redArrowHead)"
            />

            {/* Line 6: To CREATIVE IDEAS (Bottom-Right) */}
            <path
              d="M 630,345 C 670,345 700,345 730,345"
              stroke="#8A0024"
              strokeWidth="1.8"
              strokeDasharray="4 4"
              markerEnd="url(#redArrowHead)"
            />
          </svg>

          {/* LEFT 3 FEATURE POINTS */}
          <div className="absolute left-0 top-0 bottom-0 w-[275px] flex flex-col justify-between py-2 z-20">
            {leftFeatures.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex flex-col items-center text-center group cursor-default ${
                    index === 0
                      ? 'pl-2'
                      : index === 1
                      ? 'pr-5'
                      : 'pl-8'
                  }`}
                >
                  {/* Circular Icon Badge */}
                  <div className="w-13 h-13 rounded-full bg-white shadow-[0_6px_20px_rgba(138,0,36,0.11)] border border-rose-100 flex items-center justify-center text-[#8A0024] group-hover:scale-108 group-hover:border-[#8A0024]/40 transition-all duration-300">
                    <IconComp className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-black text-xs sm:text-[13.5px] text-[#8A0024] tracking-wide mt-2 mb-0.5">
                    {item.title}
                  </h3>

                  {/* Red Underline */}
                  <div className="w-7 h-[2px] bg-[#8A0024] rounded-full mb-1" />

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs text-[#475569] font-medium leading-snug max-w-[190px]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CENTER 3D QUESTION MARK WITH LEANING MAN */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[320px] flex items-center justify-center z-15 pointer-events-none select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <img
                src="/assets/images/why-choose/question-man-center.png"
                alt="Why Choose TeesZone - Your Brand Apparel Partner"
                className="w-full h-full object-contain filter drop-shadow-[0_18px_30px_rgba(20,0,5,0.2)]"
              />
            </motion.div>
          </div>

          {/* RIGHT 3 FEATURE POINTS */}
          <div className="absolute right-0 top-0 bottom-0 w-[275px] flex flex-col justify-between py-2 z-20">
            {rightFeatures.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex flex-col items-center text-center group cursor-default ${
                    index === 0
                      ? 'pr-2'
                      : index === 1
                      ? 'pl-5'
                      : 'pr-8'
                  }`}
                >
                  {/* Circular Icon Badge */}
                  <div className="w-13 h-13 rounded-full bg-white shadow-[0_6px_20px_rgba(138,0,36,0.11)] border border-rose-100 flex items-center justify-center text-[#8A0024] group-hover:scale-108 group-hover:border-[#8A0024]/40 transition-all duration-300">
                    <IconComp className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-black text-xs sm:text-[13.5px] text-[#8A0024] tracking-wide mt-2 mb-0.5">
                    {item.title}
                  </h3>

                  {/* Red Underline */}
                  <div className="w-7 h-[2px] bg-[#8A0024] rounded-full mb-1" />

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs text-[#475569] font-medium leading-snug max-w-[190px]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET RESPONSIVE VIEW (< lg) */}
        <div className="block lg:hidden">
          <div className="max-w-xs mx-auto mb-6">
            <img
              src="/assets/images/why-choose/question-man-center.png"
              alt="Why Choose TeesZone - Your Brand Apparel Partner"
              className="w-full h-auto object-contain drop-shadow-[0_14px_24px_rgba(20,0,5,0.18)]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {[...leftFeatures, ...rightFeatures].map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex flex-col items-center text-center p-3.5 rounded-2xl bg-white/70 backdrop-blur-xs border border-rose-100/60 shadow-[0_4px_14px_rgba(138,0,36,0.05)]"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-[0_4px_16px_rgba(138,0,36,0.09)] border border-rose-100 flex items-center justify-center text-[#8A0024] mb-2.5">
                    <IconComp className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <h3 className="font-heading font-black text-xs sm:text-sm text-[#8A0024] tracking-wide">
                    {item.title}
                  </h3>
                  <div className="w-6 h-[2px] bg-[#8A0024] rounded-full my-1" />
                  <p className="text-[11px] text-[#475569] font-medium leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Social Media Bar */}
        <div className="mt-5 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4">
          <div className="w-14 sm:w-24 md:w-32 h-[1.5px] bg-[#8A0024]/60 rounded-full" />

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeesZone on Facebook"
            className="w-8 h-8 rounded-full bg-[#8A0024] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#660018] shadow-sm"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          <span className="text-[#8A0024]/50 text-xs font-semibold select-none">|</span>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeesZone on Instagram"
            className="w-8 h-8 rounded-full bg-[#8A0024] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#660018] shadow-sm"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <span className="text-[#8A0024]/50 text-xs font-semibold select-none">|</span>

          {/* X (Twitter) */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeesZone on X"
            className="w-8 h-8 rounded-full bg-[#8A0024] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#660018] shadow-sm"
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <span className="text-[#8A0024]/50 text-xs font-semibold select-none">|</span>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TeesZone on LinkedIn"
            className="w-8 h-8 rounded-full bg-[#8A0024] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#660018] shadow-sm"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <div className="w-14 sm:w-24 md:w-32 h-[1.5px] bg-[#8A0024]/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
