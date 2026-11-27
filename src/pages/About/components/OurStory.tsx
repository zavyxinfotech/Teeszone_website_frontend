import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface Milestone {
  id: string;
  indexStr: string;
  yearOrDate: string;
  location: string;
  title: string;
  description: string;
  bgImage: string;
  cardImage: string;
  mobilePosition?: string;
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
    bgImage: '/assets/images/about/milestones/m1_chennai-bg.webp',
    cardImage: '/assets/images/about/milestones/m1_chennai-card.webp',
    mobilePosition: '74% center',
  },
  {
    id: 'incorporation',
    indexStr: '02',
    yearOrDate: '10 Nov 2025',
    location: 'Incorporation',
    title: 'Official Incorporation',
    description:
      'A significant milestone in our growth journey. TeesZone was officially incorporated, marking a new chapter in our commitment to structured business operations and long-term expansion.',
    bgImage: '/assets/images/about/milestones/m2_incorporation-bg.webp',
    cardImage: '/assets/images/about/milestones/m2_incorporation-card.webp',
    mobilePosition: '82% center',
  },
  {
    id: 'bengaluru',
    indexStr: '03',
    yearOrDate: '2025',
    location: 'Banashankari, Bengaluru',
    title: 'First Branch in Bengaluru',
    description:
      'We expanded beyond Chennai by establishing our first branch in Banashankari, Bengaluru, strengthening our reach and customer accessibility.',
    bgImage: '/assets/images/about/milestones/m3_bengaluru-bg.webp',
    cardImage: '/assets/images/about/milestones/m3_bengaluru-card.webp',
    mobilePosition: '76% center',
  },
  {
    id: 'erode',
    indexStr: '04',
    yearOrDate: 'Erode',
    location: 'Texvalley Global Market',
    title: 'Corporate Office at Texvalley',
    description:
      "We established our corporate office at Texvalley Global Market, Erode, strengthening our operational presence in one of Tamil Nadu's prominent textile business hubs.",
    bgImage: '/assets/images/about/milestones/m4_texvalley-bg.webp',
    cardImage: '/assets/images/about/milestones/m4_texvalley-card.webp',
    mobilePosition: '72% center',
  },
  {
    id: 'puducherry',
    indexStr: '05',
    yearOrDate: 'Aug 2026',
    location: 'Puducherry',
    title: 'Expansion to Puducherry',
    description:
      'Taking our customized apparel and corporate uniform solutions further, we expanded our branch network to Puducherry.',
    bgImage: '/assets/images/about/milestones/m5_puducherry-bg.webp',
    cardImage: '/assets/images/about/milestones/m5_puducherry-card.webp',
    mobilePosition: '84% 18%',
  },
  {
    id: 'kanchipuram',
    indexStr: '06',
    yearOrDate: 'Sep 2026',
    location: 'Kanchipuram',
    title: 'Expansion to Kanchipuram',
    description:
      'Continuing our regional growth, we expanded our presence to Kanchipuram, bringing TeesZone closer to more businesses and customers.',
    bgImage: '/assets/images/about/milestones/m6_kanchipuram-bg.webp',
    cardImage: '/assets/images/about/milestones/m6_kanchipuram-card.webp',
    mobilePosition: '84% 12%',
  },
  {
    id: 'kochi',
    indexStr: '07',
    yearOrDate: 'Upcoming',
    location: 'Kochi (Cochin)',
    title: 'Kochi (Cochin)',
    description:
      'Our expansion journey continues. We are preparing to establish our presence in Kochi, extending our reach into Kerala and creating new opportunities to serve businesses across the region.',
    bgImage: '/assets/images/about/milestones/m7_kochi-bg.webp',
    cardImage: '/assets/images/about/milestones/m7_kochi-card.webp',
    mobilePosition: '82% 22%',
  },
];

export const OurStory: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const isAutoScrollingRef = useRef(false);
  const autoScrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = MILESTONES.length;
  const activeMilestone = MILESTONES[activeIdx];

  const scrollToMilestone = useCallback(
    (idx: number) => {
      const targetIdx = Math.max(0, Math.min(idx, total - 1));
      setActiveIdx(targetIdx);
      if (sectionRef.current) {
        isAutoScrollingRef.current = true;
        if (autoScrollTimeoutRef.current) {
          clearTimeout(autoScrollTimeoutRef.current);
        }

        const rect = sectionRef.current.getBoundingClientRect();
        const currentScrollY = window.scrollY || window.pageYOffset;
        const sectionTop = currentScrollY + rect.top;
        const scrollableDistance = sectionRef.current.offsetHeight - window.innerHeight;

        if (scrollableDistance > 0) {
          const targetScroll = sectionTop + (targetIdx / (total - 1)) * scrollableDistance;
          window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        }

        autoScrollTimeoutRef.current = setTimeout(() => {
          isAutoScrollingRef.current = false;
        }, 700);
      }
    },
    [total]
  );

  const handleNext = useCallback(() => {
    scrollToMilestone(activeIdx + 1);
  }, [activeIdx, scrollToMilestone]);

  const handlePrev = useCallback(() => {
    scrollToMilestone(activeIdx - 1);
  }, [activeIdx, scrollToMilestone]);

  // Framer Motion useScroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Dual Scroll Tracking (Window scroll + useScroll for 100% responsiveness)
  useEffect(() => {
    const handleScroll = () => {
      if (isAutoScrollingRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableDistance = sectionRef.current.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / scrollableDistance));
      const step = Math.min(total - 1, Math.max(0, Math.round(progress * (total - 1))));
      setActiveIdx(step);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [total]);

  useEffect(() => {
    return scrollYProgress.on('change', (progress) => {
      if (isAutoScrollingRef.current) return;
      const step = Math.min(total - 1, Math.max(0, Math.round(progress * (total - 1))));
      setActiveIdx(step);
    });
  }, [scrollYProgress, total]);

  return (
    <div id="our-story" className="w-full bg-[#FAF5F2] select-none">
      
      {/* =========================================================================
          SCROLL-PINNED CINEMATIC MILESTONE SECTION (Mobile & Desktop)
          - Runway height (280vh-320vh) matching TeamSection: Zero excessive blank space
          - Sticky top-0 stage: Each scroll advances through cards 1 -> 7
          - Only moves to next section after card 7 completes
          ========================================================================= */}
      <section
        ref={sectionRef}
        className="relative w-full h-[280vh] sm:h-[320vh] bg-[#FAF5F2] select-none z-10"
        aria-label="Interactive TeesZone Milestone Journey"
      >
        <div className="sticky top-0 h-screen h-[100dvh] max-h-[100dvh] w-full flex flex-col justify-between overflow-hidden outline-none pt-[72px] xs:pt-[80px] sm:pt-24 lg:pt-8 pb-3 sm:pb-6">
          {/* 1. Desktop Cinematic Background Image Layer with Crossfade */}
          <div className="hidden lg:block absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 w-full h-full">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={activeMilestone.id}
                  src={activeMilestone.bgImage}
                  alt={activeMilestone.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover object-center filter saturate-[1.08] contrast-[1.03]"
                />
              </AnimatePresence>
            </div>

            {/* Desktop Left-side Shaded Effect for Supreme Text Readability; Right side remains 100% crisp, clear and unblocked */}
            <div className="absolute inset-y-0 left-0 w-[58%] xl:w-[52%] bg-gradient-to-r from-[#FAF5F2] via-[#FAF5F2]/95 sm:via-[#FAF5F2]/85 to-transparent pointer-events-none z-[1]" />
            <div className="absolute top-0 left-0 w-[50%] h-20 bg-gradient-to-b from-[#FAF5F2] to-transparent pointer-events-none z-[1]" />
            <div className="absolute bottom-0 left-0 w-[50%] h-24 bg-gradient-to-t from-[#FAF5F2] to-transparent pointer-events-none z-[1]" />
          </div>

          {/* 2. Main Content Container */}
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-1 sm:pt-4 pb-1 lg:pb-6 flex-1 flex flex-col justify-start lg:justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 lg:gap-10 items-center">
              
              {/* =================================================================
                  LEFT TEXT BLOCK: Correct mobile alignment & increased readable sizes
                  - "OUR STORY" clearly visible below mobile navbar
                  - Increased font sizes without increasing boldness
                  ================================================================= */}
              <div className="lg:col-span-7 xl:col-span-6 text-left space-y-2 sm:space-y-3.5 pt-0 max-w-2xl">
                
                {/* Clean "OUR STORY" Label - now fully visible below mobile navbar */}
                <div className="flex items-center gap-2.5">
                  <span className="w-6 sm:w-8 h-[2px] bg-[#80011F] rounded-full inline-block" />
                  <span className="text-xs xs:text-sm uppercase font-heading font-bold tracking-[0.2em] text-[#80011F]">
                    OUR STORY
                  </span>
                </div>

                {/* Main Headline: Increased size without excessive boldness */}
                <h2 className="text-[26px] xs:text-[30px] sm:text-4xl lg:text-[42px] xl:text-[48px] font-heading font-bold text-[#1A1D20] leading-[1.18] lg:leading-[1.22] xl:leading-[1.2] tracking-tight">
                  From a Small<br className="hidden xs:inline" />{' '}
                  Beginning to a<br className="hidden xs:inline" />{' '}
                  <span className="text-[#80011F]">Growing Apparel Brand</span>
                </h2>

                {/* Burgundy Accent Bar */}
                <div className="w-12 sm:w-14 h-[2.5px] sm:h-[3px] bg-[#80011F] rounded-full" />

                {/* Subtitle: Increased font size, clean medium weight */}
                <p className="text-[15px] xs:text-base lg:text-lg font-heading font-medium text-charcoal-700">
                  Our Journey. Our Growth. Our Commitment.
                </p>

                {/* Dynamic Active Milestone Description: Prominent & Clean */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMilestone.id}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="space-y-1 xs:space-y-1.5 sm:space-y-2.5 pt-0.5 sm:pt-1"
                  >
                    <div className="flex items-center gap-2 text-xs xs:text-sm sm:text-base uppercase font-heading font-semibold tracking-wider text-[#80011F]">
                      <span>{activeMilestone.indexStr}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#80011F]" />
                      <span>{activeMilestone.yearOrDate}</span>
                    </div>
                    <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-heading font-bold text-charcoal-900 leading-snug">
                      {activeMilestone.title}
                    </h3>
                    <p className="text-[15px] xs:text-base sm:text-base lg:text-lg text-[#3A3D42] font-normal leading-relaxed max-w-xl">
                      {activeMilestone.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

              </div>

              {/* Right area intentionally open to display the crystal-clear milestone imagery */}
              <div className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none" />

            </div>

            {/* Mobile Milestone Image: Full-width enlarged image cleanly below text with top/bottom shaded fade */}
            <div className="lg:hidden relative -mx-4 sm:-mx-6 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] flex-1 min-h-[240px] max-h-[46vh] mt-4 flex items-center justify-center overflow-hidden pointer-events-none">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={`mobile-${activeMilestone.id}`}
                  src={activeMilestone.bgImage}
                  alt={activeMilestone.title}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover filter saturate-[1.08] contrast-[1.03]"
                  style={{
                    objectPosition: '94% center',
                  }}
                />
              </AnimatePresence>
              {/* Top & Bottom Shaded Effect */}
              <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-[#FAF5F2] via-[#FAF5F2]/70 to-transparent pointer-events-none z-[1]" />
              <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#FAF5F2] via-[#FAF5F2]/70 to-transparent pointer-events-none z-[1]" />
            </div>
          </div>

          {/* 3. Bottom Controls Bar: Chevrons centered on mobile, right-aligned on desktop */}
          <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-3 sm:pb-4 flex items-center justify-center lg:justify-end">
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Left Chevron Button: Zero border, zero background */}
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeIdx === 0}
                aria-label="Previous milestone"
                className={`p-1 sm:p-1.5 text-[#80011F] hover:text-[#550015] bg-transparent border-0 shadow-none flex items-center justify-center active:scale-90 transition-all ${
                  activeIdx === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.8]" />
              </button>

              {/* Right Chevron Button: Zero border, zero background */}
              <button
                type="button"
                onClick={handleNext}
                disabled={activeIdx === total - 1}
                aria-label="Next milestone"
                className={`p-1 sm:p-1.5 text-[#80011F] hover:text-[#550015] bg-transparent border-0 shadow-none flex items-center justify-center active:scale-90 transition-all ${
                  activeIdx === total - 1 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.8]" />
              </button>
            </div>
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
