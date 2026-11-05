import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
    image: '/assets/images/sector-corporate-event.png',
    categorySlug: 'corporate',
    bg: '#FCEEF0',
    cardHeight: 'h-[255px] sm:h-[280px] lg:h-[305px]',
    cardWidth: 'w-[145px] sm:w-[165px] lg:w-[180px]',
    cardTopOffset: 'mt-[72px] sm:mt-[84px] lg:mt-[96px]',
    borderRadius: 'rounded-[26px] sm:rounded-[30px] lg:rounded-[32px]',
  },
  {
    id: 'promotional-apparel',
    badge: 'PROMOTIONAL APPAREL',
    title: 'Promotional Event Wear',
    subtitle: 'Premium Hoodies & Custom Campaign Merch',
    image: '/assets/images/sector-promotional-apparel.png',
    categorySlug: 'promotional',
    bg: '#FDF1F3',
    cardHeight: 'h-[275px] sm:h-[300px] lg:h-[325px]',
    cardWidth: 'w-[150px] sm:w-[170px] lg:w-[185px]',
    cardTopOffset: 'mt-[34px] sm:mt-[40px] lg:mt-[46px]',
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
    cardHeight: 'h-[365px] sm:h-[395px] lg:h-[425px]',
    cardWidth: 'w-[230px] sm:w-[260px] lg:w-[285px]',
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
    cardHeight: 'h-[275px] sm:h-[300px] lg:h-[325px]',
    cardWidth: 'w-[150px] sm:w-[170px] lg:w-[185px]',
    cardTopOffset: 'mt-[34px] sm:mt-[40px] lg:mt-[46px]',
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
    cardHeight: 'h-[255px] sm:h-[280px] lg:h-[305px]',
    cardWidth: 'w-[145px] sm:w-[165px] lg:w-[180px]',
    cardTopOffset: 'mt-[72px] sm:mt-[84px] lg:mt-[96px]',
    borderRadius: 'rounded-[26px] sm:rounded-[30px] lg:rounded-[32px]',
  },
];

export const SectorShowcase: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // ========================================================
  // DESKTOP PINNED SCROLL ANIMATION
  // ========================================================
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: desktopScrollProgress } = useScroll({
    target: desktopContainerRef,
    offset: ['start start', 'end end'],
  });

  // Stage 1 (0.00 - 0.28): Title centered & enlarged with emblem watermark on right side
  // Stage 2 (0.28 - 0.48): Title decreases in size & moves to top position, watermark rotates & fades
  // Stage 3 (0.48 - 0.88): Other cards move out from behind center card into arc
  const headerY = useTransform(desktopScrollProgress, [0, 0.24, 0.46], [140, 140, 0]);
  const headerScale = useTransform(desktopScrollProgress, [0, 0.24, 0.46], [1.38, 1.38, 1.0]);
  
  // TeesZone emblem logo watermark: larger size, kept within section height, preserving rotation & scaling animation
  const watermarkOpacity = useTransform(desktopScrollProgress, [0, 0.12, 0.32, 0.48], [0, 0.28, 0.28, 0.10]);
  const watermarkScale = useTransform(desktopScrollProgress, [0, 0.24, 0.48], [0.9, 1.08, 0.92]);
  const watermarkRotate = useTransform(desktopScrollProgress, [0, 0.28, 0.48], [-35, 0, 15]);
  const watermarkX = useTransform(desktopScrollProgress, [0, 0.24], [40, 0]);

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
  // Pins the mobile view until all 5 products are shown via scroll
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

  // Mobile TeesZone watermark transforms
  const mobileWatermarkOpacity = useTransform(mobileScrollProgress, [0, 0.2, 0.8, 1], [0.18, 0.26, 0.26, 0.18]);
  const mobileWatermarkRotate = useTransform(mobileScrollProgress, [0, 1], [-20, 25]);
  const mobileWatermarkScale = useTransform(mobileScrollProgress, [0, 0.5, 1], [0.95, 1.08, 0.95]);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#FFFDFD] via-[#FAF6F4] to-[#F7F0EC] text-charcoal-900 select-none">
      
      {/* ======================================================== */}
      {/* DESKTOP VIEW: Pinned Scroll Experience */}
      {/* ======================================================== */}
      <div ref={desktopContainerRef} className="hidden md:block relative h-[250vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-[#FFFDFD] via-[#FAF6F4] to-[#F7F0EC] px-4 sm:px-6 lg:px-8">
          
          {/* Background Ambient TeesZone Emblem Watermark (Increased size, fits within section height, keeps animation) */}
          <motion.div
            style={{
              opacity: watermarkOpacity,
              scale: watermarkScale,
              rotate: watermarkRotate,
              x: watermarkX,
            }}
            className="absolute right-4 lg:right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 w-[300px] lg:w-[380px] xl:w-[440px] max-h-[75vh] flex items-center justify-center"
          >
            <img
              src="/assets/logo/teeszone-emblem.png"
              alt="TeesZone Logo Emblem"
              className="w-full h-full object-contain filter drop-shadow-[0_8px_24px_rgba(130,19,44,0.08)]"
            />
          </motion.div>

          <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center justify-center relative z-10">
            
            {/* SECTION HEADER: Starts enlarged at center, then shrinks & moves to top on scroll */}
            <motion.div
              style={{ y: headerY, scale: headerScale }}
              className="text-center max-w-3xl mx-auto mb-5 sm:mb-7 relative z-20 origin-center"
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
              <p className="text-xs sm:text-sm text-charcoal-600 font-normal mt-2.5 max-w-2xl leading-relaxed mx-auto">
                Engineered uniforms and custom apparel specifically crafted for your industry's standards, complete with high-definition embroidery and durable fabric weaves.
              </p>
            </motion.div>

            {/* CARDS CONTAINER: Exact card heights and stepped arch alignment preserved */}
            <div className="flex items-start justify-center gap-2.5 sm:gap-3 lg:gap-3.5 pt-2 pb-6 relative z-10 max-w-[1100px] mx-auto w-full">
              {sectorCards.map((sector, index) => {
                const isHero = sector.id === 'corporate-sector';
                const isHovered = hoveredIndex === index;

                let cardX = undefined;
                let cardOpacity = undefined;
                let cardScale = undefined;
                let zIndex = 1;

                if (index === 0) {
                  cardX = card0X;
                  cardOpacity = card0Opacity;
                  cardScale = card0Scale;
                  zIndex = 2;
                } else if (index === 1) {
                  cardX = card1X;
                  cardOpacity = card1Opacity;
                  cardScale = card1Scale;
                  zIndex = 3;
                } else if (index === 2) {
                  cardOpacity = centerCardOpacity;
                  cardScale = centerCardScale;
                  zIndex = 10;
                } else if (index === 3) {
                  cardX = card3X;
                  cardOpacity = card3Opacity;
                  cardScale = card3Scale;
                  zIndex = 3;
                } else if (index === 4) {
                  cardX = card4X;
                  cardOpacity = card4Opacity;
                  cardScale = card4Scale;
                  zIndex = 2;
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
                      className={`group relative flex flex-col justify-between overflow-hidden transition-all duration-300 ease-out cursor-pointer w-full h-full p-2.5 sm:p-3 ${
                        sector.borderRadius
                      } ${
                        isHovered
                          ? '-translate-y-2 shadow-[0_20px_38px_rgba(122,0,39,0.18)] ring-2 ring-[#82132C]/30'
                          : isHero
                          ? 'shadow-[0_12px_28px_rgba(122,0,39,0.12)] ring-1 ring-[#82132C]/15'
                          : 'shadow-[0_6px_18px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.04]'
                      }`}
                      style={{ backgroundColor: sector.bg }}
                    >
                      {/* Top Bar: Sector Name in Increased Size + Explore Button at Top Right Corner */}
                      <div className="relative w-full flex items-center justify-between z-10 gap-1 pt-0.5 px-0.5">
                        <span className="px-2 sm:px-2.5 py-0.5 rounded-full bg-[#82132C] text-white font-heading font-black text-[9.5px] sm:text-[11px] lg:text-[11.5px] tracking-wide uppercase shadow-xs whitespace-nowrap truncate max-w-[78%]">
                          {sector.badge}
                        </span>

                        {/* Dedicated Circular Explore Button at Top Right Corner */}
                        <div
                          aria-label={`Explore ${sector.title}`}
                          className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full bg-[#82132C] text-white flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-115 group-hover:bg-[#6c0f24]"
                        >
                          <ArrowRight className="w-3.5 h-3.5 -rotate-45 stroke-[2.4]" />
                        </div>
                      </div>

                      {/* Model Cutout Image (Lossless PNG, Decreased Gap to Name Header) */}
                      <div className="relative flex-1 w-full flex items-end justify-center overflow-hidden mt-0.5">
                        <img
                          src={sector.image}
                          alt={`${sector.title} custom apparel models`}
                          className="w-full h-full object-contain object-bottom transition-transform duration-300 ease-out group-hover:scale-104"
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
      {/* MOBILE VIEW: Pinned Scroll Carousel */}
      {/* ======================================================== */}
      <div ref={mobileContainerRef} className="md:hidden relative h-[360vh]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center overflow-hidden transition-colors duration-700 ease-out px-4 pt-10 pb-7 bg-gradient-to-b from-[#FFFDFD] via-[#FAF6F4] to-[#F7F0EC]">
          
          {/* Mobile Animated TeesZone Logo Emblem (Within section height, rotated & scaled) */}
          <motion.div
            style={{
              opacity: mobileWatermarkOpacity,
              scale: mobileWatermarkScale,
              rotate: mobileWatermarkRotate,
            }}
            className="absolute right-2 top-16 pointer-events-none select-none z-0 w-[180px] sm:w-[220px] max-h-[35vh] flex items-center justify-center"
          >
            <img
              src="/assets/logo/teeszone-emblem.png"
              alt="TeesZone Logo Emblem"
              className="w-full h-auto object-contain filter drop-shadow-[0_4px_16px_rgba(130,19,44,0.06)]"
            />
          </motion.div>

          {/* Top Section Header */}
          <div className="text-center max-w-sm mx-auto z-10 shrink-0">
            <div className="flex items-center justify-center gap-2 mb-1.5 mx-auto">
              <span className="w-4 h-[1.5px] bg-[#82132C] rounded-full inline-block" />
              <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-[#82132C]">
                Custom T-Shirts For Every Sector
              </span>
              <span className="w-4 h-[1.5px] bg-[#82132C] rounded-full inline-block" />
            </div>

            <h2 className="text-2xl font-heading font-black tracking-tight leading-tight text-charcoal-900">
              Stay Branded, <span className="text-[#82132C]">Stay Professional</span>
            </h2>
          </div>

          {/* Center Product Card */}
          <div className="relative flex-1 w-full max-w-[320px] flex items-center justify-center my-2 overflow-hidden z-10">
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
                  className="w-full max-h-[360px] p-3 rounded-3xl flex flex-col justify-between overflow-hidden shadow-lg border border-rose-100/60"
                  style={{ backgroundColor: activeMobileCard.bg }}
                >
                  {/* Top Bar: Name Badge in increased size + Explore Button at Top Right */}
                  <div className="w-full flex items-center justify-between z-10 mb-1">
                    <span className="px-3 py-1 rounded-full bg-[#82132C] text-white font-heading font-black text-xs tracking-wide uppercase shadow-xs">
                      {activeMobileCard.badge}
                    </span>

                    <div
                      aria-label={`Explore ${activeMobileCard.title}`}
                      className="w-7 h-7 rounded-full bg-[#82132C] text-white flex items-center justify-center shadow-xs"
                    >
                      <ArrowRight className="w-4 h-4 -rotate-45 stroke-[2.4]" />
                    </div>
                  </div>

                  {/* Model Image (Decreased gap to name) */}
                  <div className="relative flex-1 w-full flex items-end justify-center overflow-hidden">
                    <img
                      src={activeMobileCard.image}
                      alt={activeMobileCard.title}
                      className="w-full max-h-[290px] object-contain object-bottom drop-shadow-md"
                      loading="eager"
                    />
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Product Details & Action Button */}
          <div className="w-full max-w-sm flex flex-col items-center text-center z-10 shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMobileCard.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mb-2"
              >
                <h3 className="font-heading font-black text-base text-charcoal-900 leading-snug">
                  {activeMobileCard.title}
                </h3>
                <p className="text-[11px] text-charcoal-600 font-medium mt-0.5">
                  {activeMobileCard.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicators */}
            <div className="flex items-center justify-center gap-2 mt-2">
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
