import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowUpRight, X, Sparkles, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'apparel' | 'workwear' | 'official-partner';
  categoryLabel: string;
  image: string;
  description: string;
  tags: string[];
}

export const galleryData: GalleryItem[] = [
  {
    id: 'g-2',
    title: 'Custom Branded Polo Collection',
    category: 'apparel',
    categoryLabel: 'Polos & T-Shirts',
    image: '/assets/images/apparel-products.webp',
    description: '240 GSM combed cotton & poly-blend customized collared polos for corporate clients.',
    tags: ['Combed Cotton', 'Bio-Washed', 'Custom Ribs'],
  },
  {
    id: 'g-3',
    title: 'Industrial & Healthcare Uniforms',
    category: 'workwear',
    categoryLabel: 'Uniforms & Workwear',
    image: '/assets/images/sectors/sector-healthcare.webp',
    description: 'Durable, stain-resistant scrubs, lab coats, and safety-compliant industrial workwear.',
    tags: ['Antimicrobial', 'High Durability', 'Reinforced Seams'],
  },
  {
    id: 'g-5',
    title: 'Folded & Packaged Retail Apparel',
    category: 'apparel',
    categoryLabel: 'Polos & T-Shirts',
    image: '/assets/images/folded-stack.webp',
    description: 'Finished custom t-shirts steam-pressed, custom tagged, and individually poly-bagged.',
    tags: ['Steam Pressed', 'Individual Polybag', 'Barcode Tagging'],
  },
  {
    id: 'g-6',
    title: 'Corporate & Executive Apparel',
    category: 'workwear',
    categoryLabel: 'Uniforms & Workwear',
    image: '/assets/images/sectors/sector-corporate.webp',
    description: 'Sophisticated executive shirts, corporate blazers, and branded casual Fridays t-shirts.',
    tags: ['Corporate Wear', 'Subtle Branding', 'Wrinkle Free'],
  },
  {
    id: 'g-10',
    title: 'Athletic Wear & Sports Team Kits',
    category: 'apparel',
    categoryLabel: 'Polos & T-Shirts',
    image: '/assets/images/sectors/sector-sports.webp',
    description: 'Breathable dry-fit polyester performance tees with moisture wicking and sublimation print.',
    tags: ['Dry Fit', 'Moisture Wicking', 'Full Sublimation'],
  },
  {
    id: 'g-12',
    title: 'Campus & Institutional Merchandise',
    category: 'workwear',
    categoryLabel: 'Uniforms & Workwear',
    image: '/assets/images/sectors/sector-education.webp',
    description: 'Custom collegiate hoodies, club merchandise, and student uniforms with embroidered crests.',
    tags: ['Fleece Hoodies', 'Gold Thread Crest', 'Batch Delivery'],
  },
  {
    id: 'g-p1',
    title: 'BNI Tycoon Erode – Official Apparel Partner',
    category: 'official-partner',
    categoryLabel: 'Official Apparel Partner',
    image: '/assets/images/about/bni-handshake.webp',
    description: 'Exclusive custom apparel manufacturing & premium corporate uniforms partner for BNI Tycoon Erode.',
    tags: ['BNI Tycoon', 'Executive Polos', 'Official Partner'],
  },
  {
    id: 'g-p2',
    title: 'Marathon & Sports Event Official Apparel Partner',
    category: 'official-partner',
    categoryLabel: 'Official Apparel Partner',
    image: '/assets/images/card-5-sports.webp',
    description: 'Official sports jersey & marathon apparel manufacturing partner for premier sporting events across Tamil Nadu.',
    tags: ['Marathon Partner', 'Sublimation Jerseys', 'Performance Wear'],
  },
  {
    id: 'g-p3',
    title: 'Enterprise Conclave Official Apparel Partner',
    category: 'official-partner',
    categoryLabel: 'Official Apparel Partner',
    image: '/assets/images/card-3-corp.webp',
    description: 'Official branded uniforms and executive apparel partner for leading enterprise institutions and annual summits.',
    tags: ['Enterprise Partner', 'Custom Crests', 'Bulk Manufacturing'],
  },
  {
    id: 'g-p4',
    title: 'Collegiate & Youth Festival Apparel Partner',
    category: 'official-partner',
    categoryLabel: 'Official Apparel Partner',
    image: '/assets/images/card-4-school.webp',
    description: 'Trusted official apparel manufacturing partner for university festivals, alumni meets, and graduation merchandise.',
    tags: ['College Partner', 'Event Tees', 'Custom Hoodies'],
  },
];

const categories = [
  { id: 'all', label: 'All Showcase' },
  { id: 'apparel', label: 'Polos & T-Shirts' },
  { id: 'workwear', label: 'Uniforms & Workwear' },
  { id: 'official-partner', label: 'Official Apparel Partner' },
];

interface GalleryPortfolioGridProps {
  onOpenQuote?: () => void;
}

export const GalleryPortfolioGrid: React.FC<GalleryPortfolioGridProps> = ({ onOpenQuote }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const shouldReduceMotion = useReducedMotion();

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return galleryData;
    return galleryData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    setActiveIndex(0);
    setDirection(1);
  }, [activeCategory]);

  const totalItems = filteredItems.length;
  const currentItem = filteredItems[activeIndex] || filteredItems[0];

  // Scroll tracking across sticky section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const lastProgressRef = useRef<number>(0);

  useEffect(() => {
    return scrollYProgress.on('change', (progress) => {
      if (totalItems <= 1) return;
      const newDir = progress >= lastProgressRef.current ? 1 : -1;
      lastProgressRef.current = progress;

      const targetIndex = Math.min(totalItems - 1, Math.max(0, Math.floor(progress * totalItems)));
      if (targetIndex !== activeIndex) {
        setDirection(newDir);
        setActiveIndex(targetIndex);
      }
    });
  }, [scrollYProgress, totalItems, activeIndex]);

  const goToSlide = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  // Image 3D Variants with typed easing
  const imageVariants: Variants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 0.94,
      rotateY: shouldReduceMotion ? 0 : dir * 9,
      rotateX: shouldReduceMotion ? 0 : -4,
      z: -70,
      filter: 'blur(3px)',
    }),
    center: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      z: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 0.92,
      rotateY: shouldReduceMotion ? 0 : dir * -9,
      rotateX: shouldReduceMotion ? 0 : 4,
      z: -80,
      filter: 'blur(4px)',
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      className="relative z-50 bg-[#F7E7CE] -mt-2"
      style={{ height: `${Math.max(2, totalItems) * 85}vh` }}
    >
      {/* Sticky Full-Viewport Cinematic 3D Showcase Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-8 lg:px-14 pt-14 sm:pt-16 lg:pt-18 pb-6 sm:pb-8">
        
        {/* 1. Header Section with Smooth Viewport Reveal */}
        <div className="relative z-20 w-full max-w-7xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#80011F]/10 border border-[#80011F]/20 text-[#80011F] text-xs font-heading font-semibold tracking-wider uppercase mb-2.5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#80011F]" />
            <span>Curated Portfolio Archive</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#211D20] tracking-tight leading-[1.15]"
          >
            Explore Our <span className="text-[#80011F]">Finished Works</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 text-xs sm:text-sm md:text-base text-[#554D56] max-w-xl mx-auto leading-relaxed"
          >
            Filter by custom polos, uniforms &amp; workwear, or official apparel partnerships.
            <span className="hidden sm:inline"> Click any card to inspect full specifications.</span>
          </motion.p>

          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3.5 flex items-center justify-center flex-wrap gap-2 sm:gap-3"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group relative inline-flex items-center justify-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-heading font-semibold transition-all duration-300 cursor-pointer select-none active:scale-95 ${
                    isActive
                      ? 'bg-[#80011F] text-white shadow-md shadow-[#80011F]/25 border border-[#80011F]'
                      : 'bg-white/80 text-[#211D20] hover:bg-white hover:text-[#80011F] border border-[#80011F]/15 hover:border-[#80011F]/30 shadow-xs'
                  }`}
                >
                  <span className="transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 inline-block whitespace-nowrap">
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* 2. Split-Screen Gallery: Synchronized Left Text & Right 3D Image */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex-1 flex items-center justify-center my-auto py-2">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            
            {/* Left Column: Synchronized Text Sequences (Category -> Title Words -> Description -> Tags -> CTA) */}
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-center min-h-[300px]">
              <AnimatePresence mode="wait" custom={direction}>
                {currentItem && (
                  <motion.div
                    key={currentItem.id}
                    custom={direction}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-4"
                  >
                    {/* Step 1: Category Badge & Index Indicator */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-xs font-heading font-bold text-[#80011F] uppercase tracking-wider bg-[#80011F]/10 px-3 py-1 rounded-full border border-[#80011F]/20">
                        {currentItem.categoryLabel}
                      </span>
                      <span className="text-xs font-heading font-semibold text-[#554D56]">
                        {String(activeIndex + 1).padStart(2, '0')} / {String(totalItems).padStart(2, '0')}
                      </span>
                    </motion.div>

                    {/* Step 2: Project Title with Staggered Word Reveal */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#211D20] leading-tight flex flex-wrap gap-x-2">
                      {currentItem.title.split(' ').map((word, wIdx) => (
                        <motion.span
                          key={`${word}-${wIdx}`}
                          initial={{ opacity: 0, y: 16, rotateX: shouldReduceMotion ? 0 : -25 }}
                          animate={{ opacity: 1, y: 0, rotateX: 0 }}
                          transition={{
                            duration: 0.48,
                            delay: 0.1 + wIdx * 0.035,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="inline-block origin-bottom"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </h3>

                    {/* Step 3: Description Slide-in */}
                    <motion.p
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.48, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
                      className="text-sm sm:text-base text-[#554D56] leading-relaxed max-w-lg"
                    >
                      {currentItem.description}
                    </motion.p>

                    {/* Step 4: Tags Sequential Appearance */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {currentItem.tags.map((tag, tIdx) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.85, y: 8 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{
                            duration: 0.35,
                            delay: 0.34 + tIdx * 0.05,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="text-xs font-heading font-medium bg-[#80011F]/10 text-[#80011F] px-3 py-1 rounded-md"
                        >
                          #{tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Step 5: CTA Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
                      className="pt-2 flex items-center gap-4"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          if (onOpenQuote) onOpenQuote();
                        }}
                        className="group relative inline-flex items-center justify-between gap-3 px-6 py-2.5 rounded-full bg-[#80011F] text-white text-xs sm:text-sm font-heading font-semibold shadow-md shadow-[#80011F]/25 hover:bg-[#6A0119] transition-all duration-300 cursor-pointer select-none active:scale-95"
                      >
                        <span className="transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 inline-block whitespace-nowrap">
                          Inquire About This
                        </span>
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-white transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveItem(currentItem)}
                        className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-semibold text-[#80011F] hover:underline cursor-pointer"
                      >
                        <ZoomIn className="w-4 h-4 transition-transform group-hover:scale-110" />
                        View Full Specs
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Premium 3D Perspective Project Image */}
            <div className="col-span-1 lg:col-span-7 perspective-[1400px]">
              <div
                onClick={() => setActiveItem(currentItem)}
                className="relative aspect-[16/11] sm:aspect-[16/10] max-h-[460px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(128,1,31,0.28)] border border-[#80011F]/20 bg-white/40 cursor-pointer group transform-gpu"
              >
                <AnimatePresence mode="wait" custom={direction}>
                  {currentItem && (
                    <motion.div
                      key={currentItem.id}
                      custom={direction}
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="absolute inset-0 w-full h-full transform-gpu"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <img
                        src={currentItem.image}
                        alt={currentItem.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Subtle Cinematic Ambient Lighting Overlay */}
                      <div className="absolute inset-0 bg-radial-[at_50%_30%] from-white/15 via-transparent to-black/35 pointer-events-none" />

                      {/* Floating Glass Badge */}
                      <div className="absolute top-4 right-4 z-20 pointer-events-none">
                        <span className="text-[11px] font-heading font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#80011F] border border-[#80011F]/20 shadow-md">
                          TeesZone Certified
                        </span>
                      </div>

                      {/* Click prompt overlay on hover */}
                      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-white/95 text-xs font-heading font-medium bg-black/40 backdrop-blur-xs px-3.5 py-1.5 rounded-full transition-all duration-300 group-hover:bg-black/60">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Click to expand specifications</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>

        {/* 3. Interactive Navigation Controls (Dots with Width Expansion & Prev/Next Buttons) */}
        <div className="relative z-20 w-full max-w-6xl mx-auto flex items-center justify-between pt-2">
          {/* Animated Navigation Dots with Smooth Width Expansion */}
          <div className="flex items-center gap-2">
            {filteredItems.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer ${
                  idx === activeIndex
                    ? 'w-9 bg-[#80011F] shadow-xs'
                    : 'w-2.5 bg-[#80011F]/25 hover:bg-[#80011F]/50 hover:w-4'
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

          {/* Project Counter & Smooth Navigation Arrows */}
          <div className="flex items-center gap-3.5">
            <span className="text-xs sm:text-sm font-heading font-bold text-[#554D56] tracking-wide">
              {String(activeIndex + 1).padStart(2, '0')}{' '}
              <span className="text-[#80011F]/40 font-normal">/</span>{' '}
              {String(totalItems).padStart(2, '0')}
            </span>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                type="button"
                onClick={handlePrev}
                className="w-9 h-9 rounded-full bg-white/85 hover:bg-white text-[#80011F] border border-[#80011F]/20 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
                aria-label="Previous finished work"
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                type="button"
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-[#80011F] hover:bg-[#6A0119] text-white flex items-center justify-center shadow-md shadow-[#80011F]/20 transition-colors cursor-pointer"
                aria-label="Next finished work"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

      </div>

      {/* 4. Specifications Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#FFFDF9] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#80011F]/20"
            >
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute top-3.5 right-3.5 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full bg-neutral-100">
                <img loading="lazy" decoding="async" src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-heading font-bold tracking-wide uppercase text-[#80011F] mb-1 block">
                  {activeItem.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#211D20]">
                  {activeItem.title}
                </h3>
                <p className="mt-2 text-sm text-[#554D56] leading-relaxed">
                  {activeItem.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {activeItem.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-heading font-medium bg-[#80011F]/10 text-[#80011F] px-2.5 py-1 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-[#80011F]/15 flex items-center justify-between">
                  <span className="text-xs text-[#554D56] font-medium">
                    TeesZone Tiruppur Manufacturing Unit
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveItem(null);
                      if (onOpenQuote) onOpenQuote();
                    }}
                    className="group relative inline-flex items-center justify-between gap-3 px-5 py-2 rounded-full bg-[#80011F] text-white text-xs sm:text-sm font-heading font-semibold shadow-md shadow-[#80011F]/25 hover:bg-[#6A0119] transition-all duration-300 cursor-pointer select-none active:scale-95"
                  >
                    <span className="transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 inline-block whitespace-nowrap">
                      Inquire About This
                    </span>
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-white">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPortfolioGrid;
