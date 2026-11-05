import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';

interface SectorCardItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  categorySlug: string;
  bg: string;
  cardHeight: string;
  cardWidth: string;
  cardTopOffset: string;
  borderRadius: string;
}

const sectorCards: SectorCardItem[] = [
  {
    id: 'corporate-event',
    badge: 'CORPORATE EVENT',
    title: 'Corporate Event Apparel',
    subtitle: 'Executive Polos with Identity Lanyards',
    image: '/assets/images/sector-corporate-event.webp',
    categorySlug: 'corporate',
    bg: '#FCEEF0',
    cardHeight: 'h-[345px] sm:h-[375px] lg:h-[405px]',
    cardWidth: 'w-[190px] sm:w-[210px] lg:w-[230px]',
    cardTopOffset: 'mt-[36px] sm:mt-[42px] lg:mt-[46px]',
    borderRadius: 'rounded-[26px] sm:rounded-[30px] lg:rounded-[32px]',
  },
  {
    id: 'promotional-apparel',
    badge: 'PROMOTIONAL APPAREL',
    title: 'Promotional Event Wear',
    subtitle: 'Premium Hoodies & Custom Campaign Merch',
    image: '/assets/images/sector-promotional-apparel.webp',
    categorySlug: 'promotional',
    bg: '#FDF1F3',
    cardHeight: 'h-[375px] sm:h-[405px] lg:h-[435px]',
    cardWidth: 'w-[205px] sm:w-[228px] lg:w-[248px]',
    cardTopOffset: 'mt-[18px] sm:mt-[22px] lg:mt-[24px]',
    borderRadius: 'rounded-[30px] sm:rounded-[34px] lg:rounded-[36px]',
  },
  {
    id: 'corporate-sector',
    badge: 'CORPORATE SECTOR',
    title: 'Corporate Uniforms & Staff',
    subtitle: 'Mercerized Cotton Executive Workwear',
    image: '/assets/images/sectors/sector-corporate.png',
    categorySlug: 'corporate',
    bg: '#FCF4EB',
    cardHeight: 'h-[405px] sm:h-[435px] lg:h-[465px]',
    cardWidth: 'w-[250px] sm:w-[280px] lg:w-[305px]',
    cardTopOffset: 'mt-0',
    borderRadius: 'rounded-[36px] sm:rounded-[40px] lg:rounded-[44px]',
  },
  {
    id: 'academics-schools',
    badge: 'ACADEMICS & SCHOOLS',
    title: 'Academics & School Collections',
    subtitle: 'Durable Bio-Wash Uniforms & House Kits',
    image: '/assets/images/sectors/sector-education.png',
    categorySlug: 'school',
    bg: '#FDF1F3',
    cardHeight: 'h-[375px] sm:h-[405px] lg:h-[435px]',
    cardWidth: 'w-[205px] sm:w-[228px] lg:w-[248px]',
    cardTopOffset: 'mt-[18px] sm:mt-[22px] lg:mt-[24px]',
    borderRadius: 'rounded-[30px] sm:rounded-[34px] lg:rounded-[36px]',
  },
  {
    id: 'sports-athletics',
    badge: 'SPORTS & ATHLETICS',
    title: 'Sports & Athletic Teams',
    subtitle: 'Breathable Dry-Fit Kits & Sublimation Tees',
    image: '/assets/images/sectors/sector-sports.png',
    categorySlug: 'sports',
    bg: '#FCEEF0',
    cardHeight: 'h-[345px] sm:h-[375px] lg:h-[405px]',
    cardWidth: 'w-[190px] sm:w-[210px] lg:w-[230px]',
    cardTopOffset: 'mt-[36px] sm:mt-[42px] lg:mt-[46px]',
    borderRadius: 'rounded-[26px] sm:rounded-[30px] lg:rounded-[32px]',
  },
];

export const SectorShowcase: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [autoZoomIndex, setAutoZoomIndex] = useState<number>(2); // Start with center card

  // Continuous auto zoom loop one-by-one across all cards at smooth speed
  useEffect(() => {
    if (hoveredIndex !== null) return; // Pause auto-zoom when user hovers

    const interval = setInterval(() => {
      setAutoZoomIndex((prev) => (prev + 1) % sectorCards.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [hoveredIndex]);

  // ========================================================
  // DESKTOP PINNED SCROLL ANIMATION
  // ========================================================
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: desktopScrollProgress } = useScroll({
    target: desktopContainerRef,
    offset: ['start start', 'end end'],
  });

  const headerY = useTransform(desktopScrollProgress, [0, 0.24, 0.46], [140, 140, 0]);
  const headerScale = useTransform(desktopScrollProgress, [0, 0.24, 0.46], [1.38, 1.38, 1.0]);

  // Center card (Index 2 - Corporate Sector)
  const centerCardOpacity = useTransform(desktopScrollProgress, [0, 0.24, 0.44], [0, 0, 1]);
  const centerCardScale = useTransform(desktopScrollProgress, [0, 0.24, 0.44, 0.56], [0.85, 0.85, 1, 1]);

  // Outer cards emerge from behind center card
  const card0X = useTransform(desktopScrollProgress, [0.52, 0.86], [380, 0]);
  const card0Opacity = useTransform(desktopScrollProgress, [0.52, 0.65], [0, 1]);
  const card0Scale = useTransform(desktopScrollProgress, [0.52, 0.86], [0.8, 1]);

  const card1X = useTransform(desktopScrollProgress, [0.52, 0.80], [190, 0]);
  const card1Opacity = useTransform(desktopScrollProgress, [0.52, 0.62], [0, 1]);
  const card1Scale = useTransform(desktopScrollProgress, [0.52, 0.80], [0.85, 1]);

  const card3X = useTransform(desktopScrollProgress, [0.52, 0.80], [-190, 0]);
  const card3Opacity = useTransform(desktopScrollProgress, [0.52, 0.62], [0, 1]);
  const card3Scale = useTransform(desktopScrollProgress, [0.52, 0.80], [0.85, 1]);

  const card4X = useTransform(desktopScrollProgress, [0.52, 0.86], [-380, 0]);
  const card4Opacity = useTransform(desktopScrollProgress, [0.52, 0.65], [0, 1]);
  const card4Scale = useTransform(desktopScrollProgress, [0.52, 0.86], [0.8, 1]);

  // ========================================================
  // MOBILE PINNED SCROLL ANIMATION
  // ========================================================
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mobileScrollProgress } = useScroll({
    target: mobileContainerRef,
    offset: ['start start', 'end end'],
  });

  const [mobileIndex, setMobileIndex] = useState(0);
  const [scrollDir, setScrollDir] = useState<1 | -1>(1);

  useMotionValueEvent(mobileScrollProgress, 'change', (latest) => {
    const segment = 1 / sectorCards.length;
    const targetIdx = Math.min(
      sectorCards.length - 1,
      Math.max(0, Math.floor(latest / segment))
    );
    if (targetIdx !== mobileIndex) {
      setScrollDir(targetIdx >= mobileIndex ? 1 : -1);
      setMobileIndex(targetIdx);
    }
  });

  const activeMobileCard = sectorCards[mobileIndex];

  return (
    <section className="relative w-full bg-[#FAF6F4] text-charcoal-900 select-none">
      
      {/* ======================================================== */}
      {/* DESKTOP VIEW: Pinned Scroll Experience */}
      {/* ======================================================== */}
      <div ref={desktopContainerRef} className="hidden md:block relative h-[250vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#FAF6F4] px-2 sm:px-4 lg:px-6">
          
          {/* TeesZone Emblem Watermark - Positioned in Upper-Right, Fits Entirely Without Bottom Cut */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            className="absolute right-[2%] lg:right-[4%] top-[24%] md:top-[26%] lg:top-[28%] pointer-events-none select-none z-0 w-[360px] md:w-[420px] lg:w-[480px] xl:w-[500px] flex items-center justify-center opacity-35"
          >
            <img
              src="/assets/logo/teeszone-emblem.png"
              alt="TeesZone Logo Emblem Watermark"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          <div className="w-full max-w-[1360px] mx-auto flex flex-col items-center justify-center relative z-10">

            {/* SECTION HEADER: Starts enlarged at center, then shrinks & moves to top on scroll */}
            <motion.div
              style={{ y: headerY, scale: headerScale }}
              className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 relative z-20 origin-center"
            >
              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-2.5 mb-2.5 mx-auto">
                <span className="w-5 h-[1.5px] bg-[#82132C] rounded-full inline-block" />
                <span className="text-[11px] sm:text-xs font-heading font-extrabold uppercase tracking-widest text-[#82132C]">
                  Custom T-Shirts For Every Sector
                </span>
                <span className="w-5 h-[1.5px] bg-[#82132C] rounded-full inline-block" />
              </div>

              {/* Main Title */}
              <h2 className="text-3xl sm:text-4xl md:text-[46px] font-heading font-black tracking-tight leading-[1.12] text-charcoal-900">
                Stay Branded, <span className="text-[#82132C]">Stay Professional</span>
              </h2>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-charcoal-600 font-normal mt-2 max-w-2xl leading-relaxed mx-auto">
                Engineered uniforms and custom apparel specifically crafted for your industry's standards, complete with high-definition embroidery and durable fabric weaves.
              </p>
            </motion.div>

            {/* CARDS CONTAINER: Bigger Cards, Large Models Filling Entire Space */}
            <div className="flex items-end justify-center gap-2.5 sm:gap-3 lg:gap-3.5 pt-1 pb-2 relative z-10 w-full max-w-[1340px] mx-auto">
              {sectorCards.map((sector, index) => {
                const isHovered = hoveredIndex === index;
                const isZoomed = hoveredIndex !== null ? isHovered : autoZoomIndex === index;

                let cardX = undefined;
                let cardOpacity = undefined;
                let cardScale = undefined;
                let zIndex = 1;

                if (index === 0) {
                  cardX = card0X;
                  cardOpacity = card0Opacity;
                  cardScale = card0Scale;
                  zIndex = isZoomed ? 20 : 2;
                } else if (index === 1) {
                  cardX = card1X;
                  cardOpacity = card1Opacity;
                  cardScale = card1Scale;
                  zIndex = isZoomed ? 20 : 3;
                } else if (index === 2) {
                  cardOpacity = centerCardOpacity;
                  cardScale = centerCardScale;
                  zIndex = isZoomed ? 25 : 10;
                } else if (index === 3) {
                  cardX = card3X;
                  cardOpacity = card3Opacity;
                  cardScale = card3Scale;
                  zIndex = isZoomed ? 20 : 3;
                } else if (index === 4) {
                  cardX = card4X;
                  cardOpacity = card4Opacity;
                  cardScale = card4Scale;
                  zIndex = isZoomed ? 20 : 2;
                }

                return (
                  <motion.div
                    key={sector.id}
                    style={{
                      x: cardX,
                      opacity: cardOpacity,
                      scale: cardScale,
                      zIndex,
                    }}
                    className={`relative ${sector.cardHeight} ${sector.cardWidth} ${sector.cardTopOffset}`}
                  >
                    <Link
                      to={`/category/${sector.categorySlug}`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`group relative flex flex-col justify-between overflow-hidden cursor-pointer w-full h-full border border-black/[0.06] transition-all duration-500 ease-out shadow-none ${
                        sector.borderRadius
                      } ${
                        isZoomed
                          ? 'scale-105 -translate-y-3 ring-2 ring-[#82132C]/30'
                          : 'scale-100 translate-y-0 opacity-95 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: sector.bg }}
                    >
                      {/* Top Card Name (Large, Bold, High-Contrast) & Top-Right Arrow (No Background) */}
                      <div className="relative z-20 flex items-start justify-between pt-4 sm:pt-4.5 px-3.5 sm:px-4.5 w-full gap-2">
                        <span className="font-heading font-black text-xs sm:text-[13px] lg:text-[14px] uppercase tracking-[0.06em] text-[#82132C] group-hover:text-[#5a0b1e] transition-colors leading-snug">
                          {sector.badge}
                        </span>

                        {/* Top-Right Arrow (No Background, Clear & Prominent) */}
                        <div className="shrink-0 p-0 text-[#82132C] group-hover:text-[#5a0b1e] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.8]" />
                        </div>
                      </div>

                      {/* Model Cutout Image (Big, Bold, Filling the Card Seamlessly Like Center Card) */}
                      <div className="relative flex-1 w-full flex items-end justify-center overflow-hidden">
                        <img
                          src={sector.image}
                          alt={`${sector.title} custom apparel models`}
                          className={`w-full max-h-[92%] sm:max-h-[94%] object-contain object-bottom scale-108 sm:scale-114 transition-transform duration-500 ease-out select-none pointer-events-none ${
                            isZoomed ? 'scale-120 -translate-y-1' : 'scale-108 sm:scale-114'
                          }`}
                          loading="lazy"
                        />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MOBILE VIEW: Pinned Scroll Carousel (Full BG Fill) */}
      {/* ======================================================== */}
      <div ref={mobileContainerRef} className="md:hidden relative h-[360vh]">
        <div
          className="sticky top-0 h-screen w-full flex flex-col justify-between items-center overflow-hidden transition-colors duration-700 ease-out px-4 pt-12 pb-8"
          style={{ backgroundColor: activeMobileCard.bg }}
        >
          {/* Top Section Header */}
          <div className="text-center max-w-sm mx-auto z-10 shrink-0">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-2 mb-2 mx-auto">
              <span className="w-4 h-[1.5px] bg-[#82132C] rounded-full inline-block" />
              <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-[#82132C]">
                Custom T-Shirts For Every Sector
              </span>
              <span className="w-4 h-[1.5px] bg-[#82132C] rounded-full inline-block" />
            </div>

            {/* Main Title */}
            <h2 className="text-2xl font-heading font-black tracking-tight leading-tight text-charcoal-900">
              Stay Branded, <span className="text-[#82132C]">Stay Professional</span>
            </h2>
          </div>

          {/* Center Product Model */}
          <div className="relative flex-1 w-full max-w-[340px] flex items-center justify-center my-2 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMobileCard.id}
                initial={{ opacity: 0, x: scrollDir >= 0 ? 50 : -50, scale: 0.94 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: scrollDir >= 0 ? -50 : 50, scale: 0.94 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full flex flex-col items-center justify-center"
              >
                <Link
                  to={`/category/${activeMobileCard.categorySlug}`}
                  className="w-full h-full flex flex-col items-center justify-center"
                >
                  <img
                    src={activeMobileCard.image}
                    alt={activeMobileCard.title}
                    className="w-full max-h-[340px] sm:max-h-[380px] object-contain object-bottom"
                    loading="eager"
                  />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Product Details */}
          <div className="w-full max-w-sm flex flex-col items-center text-center z-10 shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMobileCard.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mb-3"
              >
                <span className="font-heading font-black text-xs uppercase tracking-widest text-[#82132C]">
                  {activeMobileCard.badge}
                </span>
                <h3 className="font-heading font-black text-lg text-charcoal-900 leading-snug mt-1">
                  {activeMobileCard.title}
                </h3>
                <p className="text-xs text-charcoal-600 font-medium mt-0.5">
                  {activeMobileCard.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Action Link for Mobile */}
            <Link
              to={`/category/${activeMobileCard.categorySlug}`}
              className="inline-flex items-center justify-center gap-1.5 py-1.5 px-4 text-[#82132C] hover:text-[#5a0b1e] font-heading font-bold text-xs transition-all"
            >
              <span className="tracking-wider uppercase">View Products</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            {/* Progress Indicators */}
            <div className="flex items-center justify-center gap-2 mt-3">
              {sectorCards.map((sector, idx) => (
                <div
                  key={sector.id}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === mobileIndex ? 'w-6 bg-[#82132C]' : 'w-1.5 bg-[#82132C]/30'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default SectorShowcase;
