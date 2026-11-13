import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export interface ShowcaseData {
  id: string;
  index: string;
  total: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  zIndex: number;
}

interface ShowcasePanelProps {
  data: ShowcaseData;
}

export const ShowcasePanel: React.FC<ShowcasePanelProps> = ({ data }) => {
  const shouldReduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ['start end', 'end start'],
  });

  // Parallax calculations
  const imageScale = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [1, 1] : [1.15, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ['0%', '0%'] : ['-8%', '8%']);
  const textY = useTransform(scrollYProgress, [0.1, 0.5, 0.9], shouldReduceMotion ? [0, 0, 0] : [25, 0, -25]);
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.8, 0.95], [0.6, 1, 1, 0.4]);

  return (
    <section
      ref={panelRef}
      style={{ zIndex: data.zIndex }}
      className="sticky top-0 h-screen w-full overflow-hidden bg-[#0A090B] text-white rounded-t-[36px] sm:rounded-t-[48px] lg:rounded-t-[56px] shadow-[0_-25px_60px_rgba(0,0,0,0.55)] border-t border-white/15 flex flex-col justify-end pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-8 lg:px-16 select-none will-change-transform"
      aria-label={data.title}
    >
      {/* 1. Large Cinematic Background Image with Parallax Movement */}
      <motion.div
        style={{ scale: imageScale, y: imageY }}
        className="absolute inset-0 w-full h-full pointer-events-none will-change-transform z-0"
      >
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover object-center brightness-90"
          loading="lazy"
        />

        {/* Cinematic Multi-stop Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/4 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      </motion.div>

      {/* 2. Top-Right Section Counter & Category Badge */}
      <div className="absolute top-6 sm:top-8 right-6 sm:right-10 z-20 flex items-center gap-3">
        <span className="text-xs sm:text-sm font-mono tracking-widest text-[#FF6B8B] font-bold bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          {data.index} / {data.total}
        </span>
      </div>

      {/* 3. Layered Editorial Text Content with Parallax Motion */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 max-w-3xl space-y-3 sm:space-y-4"
      >
        {/* Category Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#80011F]/40 border border-[#80011F]/60 text-[#FF85A1] text-xs font-heading font-bold tracking-wider uppercase backdrop-blur-md">
          <span>{data.category}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white leading-[1.12] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
          {data.title}
        </h2>

        {/* Subtitle / Description */}
        <p className="text-sm xs:text-base sm:text-lg text-white/90 leading-relaxed font-normal max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
          {data.description}
        </p>

        {/* Highlights / Tags Strip */}
        <div className="pt-2 flex flex-wrap gap-2 sm:gap-2.5">
          {data.highlights.map((item, idx) => (
            <span
              key={idx}
              className="text-xs sm:text-sm font-medium text-white/95 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ShowcasePanel;

