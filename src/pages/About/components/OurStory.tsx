import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

export interface Milestone {
  id: string;
  indexStr: string;
  yearOrDate: string;
  location: string;
  title: string;
  description: string;
  bgImage: string;
  cardImage: string;
}

const MILESTONES: Milestone[] = [
  {
    id: 'chennai',
    indexStr: '01',
    yearOrDate: '2024',
    location: 'Kolathur, Chennai',
    title: 'The Beginning in Chennai',
    description:
      'TeesZone started its journey as a proprietorship in Kolathur, Chennai, with a vision to provide customized T-shirts, corporate uniforms, and quality apparel solutions.',
    bgImage: '/assets/images/about/milestones/m1_chennai-bg.jpg',
    cardImage: '/assets/images/about/milestones/m1_chennai-card.jpg',
  },
  {
    id: 'incorporation',
    indexStr: '02',
    yearOrDate: '10 Nov 2025',
    location: 'Incorporation',
    title: 'Official Incorporation',
    description:
      'A significant milestone in our growth journey. TeesZone was officially incorporated, marking a new chapter in our commitment to structured business operations and long-term expansion.',
    bgImage: '/assets/images/about/milestones/m2_incorporation-bg.jpg',
    cardImage: '/assets/images/about/milestones/m2_incorporation-card.jpg',
  },
  {
    id: 'bengaluru',
    indexStr: '03',
    yearOrDate: '2025',
    location: 'Banashankari, Bengaluru',
    title: 'First Branch in Bengaluru',
    description:
      'We expanded beyond Chennai by establishing our first branch in Banashankari, Bengaluru, strengthening our reach and customer accessibility.',
    bgImage: '/assets/images/about/milestones/m3_bengaluru-bg.jpg',
    cardImage: '/assets/images/about/milestones/m3_bengaluru-card.jpg',
  },
  {
    id: 'erode',
    indexStr: '04',
    yearOrDate: 'Erode',
    location: 'Texvalley Global Market',
    title: 'Corporate Office at Texvalley',
    description:
      "We established our corporate office at Texvalley Global Market, Erode, strengthening our operational presence in one of Tamil Nadu's prominent textile business hubs.",
    bgImage: '/assets/images/about/milestones/m4_texvalley-bg.jpg',
    cardImage: '/assets/images/about/milestones/m4_texvalley-card.jpg',
  },
  {
    id: 'puducherry',
    indexStr: '05',
    yearOrDate: 'Aug 2026',
    location: 'Puducherry',
    title: 'Expansion to Puducherry',
    description:
      'Taking our customized apparel and corporate uniform solutions further, we expanded our branch network to Puducherry.',
    bgImage: '/assets/images/about/milestones/m5_puducherry-bg.jpg',
    cardImage: '/assets/images/about/milestones/m5_puducherry-card.jpg',
  },
  {
    id: 'kanchipuram',
    indexStr: '06',
    yearOrDate: 'Sep 2026',
    location: 'Kanchipuram',
    title: 'Expansion to Kanchipuram',
    description:
      'Continuing our regional growth, we expanded our presence to Kanchipuram, bringing TeesZone closer to more businesses and customers.',
    bgImage: '/assets/images/about/milestones/m6_kanchipuram-bg.jpg',
    cardImage: '/assets/images/about/milestones/m6_kanchipuram-card.jpg',
  },
  {
    id: 'kochi',
    indexStr: '07',
    yearOrDate: 'Upcoming',
    location: 'Kochi (Cochin)',
    title: 'Kochi (Cochin)',
    description:
      'Our expansion journey continues. We are preparing to establish our presence in Kochi, extending our reach into Kerala and creating new opportunities to serve businesses across the region.',
    bgImage: '/assets/images/about/milestones/m7_kochi-bg.jpg',
    cardImage: '/assets/images/about/milestones/m7_kochi-card.jpg',
  },
];

export const OurStory: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  const total = MILESTONES.length;
  const activeMilestone = MILESTONES[activeIdx];

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay with pause on hover
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6500);
    return () => clearInterval(timer);
  }, [isAutoPlay, handleNext]);

  // Touch Swipe Handlers for Mobile & Tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  // Keyboard navigation when focused
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
  };

  return (
    <div id="our-story" className="w-full bg-[#FAF5F2] select-none overflow-hidden">
      
      {/* =========================================================================
          MAIN CINEMATIC MILESTONE SLIDER
          (Intro narrative and quote banner removed as requested)
          ========================================================================= */}
      <section
        ref={carouselContainerRef}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Interactive TeesZone Milestone Journey"
        className="relative w-full min-h-[640px] sm:min-h-[680px] lg:min-h-[720px] xl:min-h-[760px] flex flex-col justify-between overflow-hidden outline-none pt-6"
      >
        {/* 1. Cinematic Background Image Layer with Crossfade */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={activeMilestone.id}
              src={activeMilestone.bgImage}
              alt={activeMilestone.title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full object-cover object-center filter saturate-[1.08] contrast-[1.03]"
            />
          </AnimatePresence>

          {/* Smooth Cream/Light Gradient Overlay on Left for Flawless Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5F2] via-[#FAF5F2]/95 sm:via-[#FAF5F2]/85 md:via-[#FAF5F2]/65 to-transparent" />
          
          {/* Subtle Vertical Edge Vignettes to blend top and bottom */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#FAF5F2] to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#FAF5F2] to-transparent" />
        </div>

        {/* 2. Main Content Container */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* =================================================================
                LEFT TEXT BLOCK: Static Heading & Dynamic Milestone Narrative
                ================================================================= */}
            <div className="lg:col-span-5 text-left space-y-4 sm:space-y-5">
              
              {/* Badge */}
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEEF1] border border-[#80011F]/20 text-[#80011F] font-heading font-extrabold text-xs uppercase tracking-widest">
                  <BookOpen className="w-3.5 h-3.5 text-[#80011F]" />
                  <span>OUR STORY</span>
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-heading font-black text-[#1A1D20] leading-[1.12] tracking-tight">
                From a Small<br />
                Beginning to a<br />
                <span className="text-[#80011F]">Growing Apparel Brand</span>
              </h2>

              {/* Burgundy Accent Bar */}
              <div className="w-12 h-[3px] bg-[#80011F] rounded-full" />

              {/* Subtitle */}
              <p className="text-sm sm:text-base font-heading font-bold text-charcoal-800">
                Our Journey. Our Growth. Our Commitment.
              </p>

              {/* Dynamic Active Milestone Description */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMilestone.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="space-y-2 pt-1"
                >
                  <div className="flex items-center gap-2 text-xs uppercase font-heading font-black tracking-widest text-[#80011F]">
                    <span>{activeMilestone.indexStr}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#80011F]" />
                    <span>{activeMilestone.yearOrDate}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-charcoal-900 leading-snug">
                    {activeMilestone.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A4D52] font-normal leading-relaxed max-w-md">
                    {activeMilestone.description}
                  </p>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* =================================================================
                RIGHT PREVIEW CARDS ROW:
                - Active Card: Enlarged with glowing deep burgundy border
                - Inactive Cards: Following horizontally to the right
                ================================================================= */}
            <div className="lg:col-span-7 overflow-visible">
              <div className="relative w-full flex items-center overflow-x-hidden py-4">
                
                {/* Horizontal sliding track */}
                <motion.div
                  className="flex items-center gap-4 sm:gap-5 md:gap-6 will-change-transform"
                  animate={{
                    x: shouldReduceMotion
                      ? 0
                      : -(activeIdx * 210), // smooth scroll translation based on card width
                  }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {MILESTONES.map((item, idx) => {
                    const isActive = idx === activeIdx;

                    return (
                      <motion.div
                        key={item.id}
                        onClick={() => setActiveIdx(idx)}
                        animate={{
                          scale: isActive ? (shouldReduceMotion ? 1 : 1.05) : 0.92,
                          opacity: isActive ? 1 : 0.85,
                        }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className={`relative shrink-0 rounded-[22px] sm:rounded-[26px] overflow-hidden cursor-pointer transition-all duration-300 select-none ${
                          isActive
                            ? 'w-[200px] xs:w-[220px] sm:w-[235px] h-[310px] xs:h-[340px] sm:h-[365px] border-2 border-[#80011F] shadow-[0_20px_45px_rgba(128,1,31,0.38)] ring-4 ring-[#80011F]/20 z-20'
                            : 'w-[160px] xs:w-[175px] sm:w-[190px] h-[260px] xs:h-[285px] sm:h-[310px] border border-white/60 shadow-lg hover:opacity-100 z-10'
                        }`}
                      >
                        {/* Card Image */}
                        <img
                          src={item.cardImage}
                          alt={item.title}
                          className="w-full h-full object-cover object-center filter saturate-[1.05]"
                          loading="lazy"
                        />

                        {/* Bottom Gradient Overlay for typography readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                        {/* Card Text Information */}
                        <div className="absolute bottom-0 inset-x-0 p-4 text-left pointer-events-none">
                          <p className="text-lg sm:text-xl font-heading font-black text-white leading-tight">
                            {item.yearOrDate}
                          </p>
                          <p className="text-xs text-white/90 font-medium leading-snug mt-0.5 truncate">
                            {item.location}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>

              </div>
            </div>

          </div>
        </div>

        {/* 3. Bottom Controls Bar: Left/Right Arrow & Counter (Loading bar removed as requested) */}
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-4 flex items-center justify-end">
          
          {/* Navigation Controls: Left Arrow, Counter 01 / 07, Right Arrow */}
          <div className="flex items-center gap-4">
            
            {/* Left Chevron Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous milestone"
              className="w-10 h-10 rounded-full bg-white/95 border border-[#80011F]/25 text-[#80011F] flex items-center justify-center hover:bg-[#FCEEF1] hover:scale-105 active:scale-95 transition-all shadow-xs cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Slide Counter (e.g. 01 / 07) */}
            <div className="text-xs sm:text-sm font-heading font-extrabold text-charcoal-800 tracking-wider">
              <span>{activeMilestone.indexStr}</span>
              <span className="mx-1.5 text-charcoal-400 font-normal">/</span>
              <span>{total < 10 ? `0${total}` : total}</span>
            </div>

            {/* Right Chevron Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next milestone"
              className="w-10 h-10 rounded-full bg-[#80011F] text-white flex items-center justify-center hover:bg-[#660018] hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.2]" />
            </button>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION: OUR VISION FOR THE FUTURE
          ========================================================================= */}
      <section className="relative w-full bg-gradient-to-br from-[#80011F] via-[#570016] to-[#3D000F] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="w-8 sm:w-12 h-[1.5px] bg-rose-200/50 rounded-full" />
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-rose-200">
              LOOKING AHEAD
            </span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-rose-200/50 rounded-full" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight leading-tight"
          >
            Our Vision for the Future
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-rose-100/90 font-normal leading-relaxed max-w-3xl mx-auto"
          >
            From our first steps in Chennai to our expanding presence across South India, TeesZone remains committed to delivering quality-driven custom apparel manufacturing, corporate uniforms, promotional T-shirts, and personalized clothing solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-4 max-w-2xl mx-auto"
          >
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-sm border border-white/15 shadow-xl">
              <p className="text-base sm:text-lg lg:text-xl font-heading font-bold text-white italic leading-relaxed">
                &ldquo;We are not just expanding our locations. We are building lasting partnerships, empowering brands, and elevating the way businesses experience customized apparel.&rdquo;
              </p>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default OurStory;
