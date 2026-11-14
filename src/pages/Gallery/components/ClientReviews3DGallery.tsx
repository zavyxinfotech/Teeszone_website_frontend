import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import {
  ExternalLink,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ZoomIn,
  X,
} from 'lucide-react';
import { CLIENT_REVIEWS_DATA, ClientReviewItem } from '@/data/clientReviewsData';

interface ClientReviews3DGalleryProps {
  onOpenQuote?: () => void;
}

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=teeszone+clothing+private+limited+google+reviews#lrd=0x3ba96bfd956d91c3:0xf353ec9ccd766328,1,,,,';

// Official Google Multi-color G Icon
const GoogleGIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

const FiveStarRating = () => (
  <div className="flex items-center gap-0.5 text-[#FBBC04]" aria-label="5 out of 5 stars">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// Alternating / Staggered Modular Grid Slot definitions strictly matching Image 2:
// 4 columns x 3 rows grid
// Empty cells at (Col 3, Row 1) and (Col 2, Row 2) are filled with the TeesZone watermark logo!
interface StaggeredSlot {
  col: number; // 1 to 4
  row: number; // 1 to 3
  reviewIndex: number;
}

const RIGHT_GRID_SLOTS: StaggeredSlot[] = [
  // Row 1: Col 1, Col 2, [Col 3 is Watermark 1], Col 4
  { col: 1, row: 1, reviewIndex: 0 }, // Zoho CRM
  { col: 2, row: 1, reviewIndex: 1 }, // PV Renewable India
  { col: 4, row: 1, reviewIndex: 2 }, // Briar Tea Bungalows

  // Row 2: Col 1, [Col 2 is Watermark 2], Col 3, Col 4
  { col: 1, row: 2, reviewIndex: 3 }, // RK Academy
  { col: 3, row: 2, reviewIndex: 4 }, // Excel College Institutions
  { col: 4, row: 2, reviewIndex: 5 }, // Serwell Systems

  // Row 3: Col 1, Col 2, Col 3, Col 4
  { col: 1, row: 3, reviewIndex: 9 }, // MRF Vapocure Paints
  { col: 2, row: 3, reviewIndex: 6 }, // Magnus Sports Club
  { col: 3, row: 3, reviewIndex: 7 }, // Skyline Lite Hotels
  { col: 4, row: 3, reviewIndex: 8 }, // Holy Cross High School
];

export const ClientReviews3DGallery: React.FC<ClientReviews3DGalleryProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll track height: sufficient distance to scroll through all 30 reviews before moving to next section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  });

  const [scrollVal, setScrollVal] = useState<number>(0);
  const [selectedReview, setSelectedReview] = useState<ClientReviewItem | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  useEffect(() => {
    return smoothScroll.on('change', (latest) => {
      setScrollVal(latest);
    });
  }, [smoothScroll]);

  // Transition threshold:
  // scrollVal < 0.16 -> Stage A: Left Text & Right Staggered Grid with TeesZone Watermarks
  // scrollVal >= 0.16 -> Stage B: Top Text + Alternate/Staggered 30-Card Horizontal Sequence + Bottom CTA
  const isHorizontalActive = scrollVal >= 0.16;

  // ALL 30 Genuine Reviews for the Horizontal Sequence
  const all30Reviews = CLIENT_REVIEWS_DATA;
  const cardWidth = 360; // px width per card
  const totalCardsWidth = all30Reviews.length * (cardWidth + 20); // 30 * 380 = 11,400px

  // Horizontal pan translation across ALL 30 cards as user scrolls through
  const horizontalTranslateX = useMemo(() => {
    if (scrollVal < 0.16) return 0;
    // Map scrollVal from 0.16 to 0.98 -> 0 to 1
    const progress = Math.min(1, Math.max(0, (scrollVal - 0.16) / 0.82));
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const maxScrollDistance = totalCardsWidth - viewportWidth + 300;
    return -progress * Math.max(2600, maxScrollDistance);
  }, [scrollVal, totalCardsWidth]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[450vh] sm:h-[500vh] bg-[#F7E7CE] text-[#211D20] select-none z-20"
      aria-label="TeesZone Genuine Client Reviews Showcase"
    >
      {/* Sticky Full-Viewport Stage:
          CRITICAL FIX: pt-24 sm:pt-28 lg:pt-32 provides safe clearance below the fixed navbar
          so that text is NEVER cropped at the top! */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-8 lg:px-12 pt-24 sm:pt-28 lg:pt-30 pb-6">
        
        {/* =======================================================================
            BACKGROUND DESIGN: WEBSITE'S WARM ALMOND / CHAMPAGNE RADIAL GRADIENT
            ======================================================================= */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 65% 50%, rgba(255,255,255,0.85) 0%, rgba(247,231,206,0.72) 45%, rgba(240,218,185,0.52) 100%)',
            }}
          />
          <div
            className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl opacity-20"
            style={{
              background:
                'radial-gradient(circle, rgba(128,1,31,0.18) 0%, rgba(128,1,31,0.04) 60%, transparent 80%)',
            }}
          />
          {/* Subtle Editorial Grid Lines */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #80011F 1px, transparent 1px), linear-gradient(to bottom, #80011F 1px, transparent 1px)',
              backgroundSize: 'calc(100% / 6) calc(100% / 4)',
            }}
          />
        </div>

        {/* =======================================================================
            STAGE A: LEFT TEXT CONTENT & RIGHT STAGGERED MOSAIC GRID
            (No curved borders, enlarged images, increased text size, no CTA size jump,
             and TeesZone Watermark Logos in the empty grid spaces)
            ======================================================================= */}
        {!isHorizontalActive && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: Math.max(0, 1 - scrollVal * 6),
              scale: 1 - scrollVal * 0.08,
            }}
            transition={{ duration: 0.2 }}
            className="relative z-20 w-full max-w-7xl mx-auto my-auto flex-1 flex flex-col justify-center pointer-events-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center w-full">
              
              {/* LEFT SIDE: Text Content (Increased Typography Size, CTA Text Kept Neat) */}
              <div className="lg:col-span-5 flex flex-col justify-center text-left z-30">
                {/* Clean Eyebrow */}
                <div className="text-xs sm:text-[13px] font-heading font-extrabold tracking-widest text-[#80011F] uppercase mb-2.5">
                  GENUINE CLIENT REVIEWS
                </div>

                {/* Main Heading: Increased Size */}
                <h2 className="text-4xl sm:text-5xl lg:text-[44px] xl:text-[52px] font-heading font-black text-[#211D20] leading-[1.08] tracking-tight mb-4 sm:mb-5">
                  Trusted by <span className="text-[#80011F]">500+ Businesses</span> across India.
                </h2>

                {/* Supporting Description: Increased Size */}
                <p className="text-base sm:text-lg text-[#554D56] font-normal leading-relaxed max-w-lg mb-6 sm:mb-8">
                  From custom polo t-shirts and corporate uniforms to college event apparel, explore genuine photographs and experiences from verified businesses.
                </p>

                {/* CTA Button: Text size NOT increased (remains neat text-xs sm:text-sm) */}
                <div>
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#80011F] hover:bg-[#680119] text-white font-heading font-bold text-xs sm:text-sm shadow-md shadow-[#80011F]/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <GoogleGIcon className="w-4 h-4" />
                    <span>Explore Our Google Reviews</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              {/* RIGHT SIDE: Staggered Image Grid with TeesZone Watermark Logos in the Empty Slots */}
              <div className="lg:col-span-7 w-full">
                {/* Desktop 4-Col x 3-Row Alternating Staggered Mosaic */}
                <div className="hidden sm:grid grid-cols-4 grid-rows-3 gap-2.5 xl:gap-3 w-full h-[480px] max-h-[66vh]">
                  
                  {/* Review Cards (Sharp Edges, rounded-none, border-0) */}
                  {RIGHT_GRID_SLOTS.map((slot, idx) => {
                    const review = CLIENT_REVIEWS_DATA[slot.reviewIndex];
                    if (!review) return null;

                    return (
                      <motion.div
                        key={`r-slot-${slot.col}-${slot.row}-${idx}`}
                        style={{
                          gridColumnStart: slot.col,
                          gridRowStart: slot.row,
                        }}
                        whileHover={{ scale: 1.04 }}
                        onClick={() => setSelectedReview(review)}
                        className="relative w-full h-full overflow-hidden bg-black shadow-[0_6px_20px_rgba(0,0,0,0.18)] cursor-pointer group rounded-none border-0 p-0"
                      >
                        <img
                          src={review.image}
                          alt={review.clientName}
                          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                        <div className="absolute bottom-1.5 inset-x-2 text-left truncate">
                          <p className="text-[11px] font-heading font-extrabold text-white truncate drop-shadow-sm">
                            {review.clientName}
                          </p>
                          <p className="text-[9px] text-[#F7E7CE] font-medium truncate">
                            {review.category}
                          </p>
                        </div>
                        <div className="absolute top-2 right-2 p-1 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <ZoomIn className="w-3 h-3" />
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* WATERMARK 1: TeesZone Emblem in Empty Slot (Col 3, Row 1) */}
                  <div
                    style={{ gridColumnStart: 3, gridRowStart: 1 }}
                    className="relative w-full h-full flex flex-col items-center justify-center bg-white/40 border border-[#80011F]/10 p-4 select-none pointer-events-none rounded-none shadow-xs"
                    aria-hidden="true"
                  >
                    <img
                      src="/assets/logo/teeszone-emblem.png"
                      alt="TeesZone watermark emblem"
                      className="w-16 h-16 xl:w-20 xl:h-20 object-contain opacity-25 filter grayscale contrast-125"
                    />
                    <span className="text-[10px] font-heading font-black tracking-widest text-[#80011F]/35 uppercase mt-1">
                      TEESZONE
                    </span>
                  </div>

                  {/* WATERMARK 2: TeesZone Brand Logo in Empty Slot (Col 2, Row 2) */}
                  <div
                    style={{ gridColumnStart: 2, gridRowStart: 2 }}
                    className="relative w-full h-full flex flex-col items-center justify-center bg-white/40 border border-[#80011F]/10 p-4 select-none pointer-events-none rounded-none shadow-xs"
                    aria-hidden="true"
                  >
                    <img
                      src="/assets/logo/teeszone-logo.png"
                      alt="TeesZone watermark logo"
                      className="w-28 sm:w-32 object-contain opacity-25 filter contrast-125"
                    />
                  </div>
                </div>

                {/* Mobile View Grid */}
                <div className="sm:hidden grid grid-cols-3 gap-1.5 w-full">
                  {CLIENT_REVIEWS_DATA.slice(0, 9).map((review) => (
                    <div
                      key={`mob-${review.id}`}
                      onClick={() => setSelectedReview(review)}
                      className="relative aspect-[4/3] overflow-hidden bg-black shadow-sm rounded-none border-0 p-0"
                    >
                      <img
                        src={review.image}
                        alt={review.clientName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                      <p className="absolute bottom-1 inset-x-1 text-[9px] font-bold text-white truncate">
                        {review.clientName}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bouncing Scroll Down Indicator (No Words) */}
            <div className="absolute -bottom-2 inset-x-0 flex flex-col items-center justify-center pointer-events-none">
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-8 h-8 rounded-full bg-white/80 border border-[#80011F]/15 flex items-center justify-center shadow-xs text-[#80011F]"
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* =======================================================================
            STAGE B: ALTERNATE ORDER HORIZONTAL SEQUENCE (ALL 30 REVIEW IMAGES)
            - Top Heading with safe navbar clearance (never cropped!)
            - Alternate/Staggered Vertical Offsets for cards (not flat continuous line)
            - CTA Button positioned cleanly BELOW the cards
            ======================================================================= */}
        {isHorizontalActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="relative z-20 w-full h-full flex flex-col justify-between items-center pointer-events-auto pt-1 pb-2"
          >
            {/* 1. TEXT ALIGNED AT THE TOP (Safe clearance, completely visible, NOT cropped) */}
            <div className="text-center max-w-3xl mx-auto px-4 z-30 pt-1">
              <div className="text-xs sm:text-[13px] font-heading font-extrabold tracking-widest text-[#80011F] uppercase mb-1">
                VERIFIED CLIENT EXPERIENCES
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#211D20] tracking-tight leading-[1.25]">
                Trusted by Businesses Across India for{' '}
                <span className="text-[#80011F]">Custom T-Shirts</span> &amp; Corporate Apparel
              </h2>
              <p className="text-xs sm:text-sm text-[#554D56] max-w-xl mx-auto mt-1 leading-relaxed hidden sm:block">
                Explore genuine customer experiences with Teeszone&apos;s custom T-shirt printing, bulk apparel manufacturing and personalized corporate clothing solutions.
              </p>
            </div>

            {/* 2. ALTERNATE / STAGGERED HORIZONTAL CAROUSEL (ALL 30 IMAGES, ALTERNATE HEIGHT OFFSETS) */}
            <div
              className="w-full flex-1 flex items-center justify-start overflow-visible my-auto"
              style={{
                perspective: '1200px',
                perspectiveOrigin: '50% 50%',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                // Alternate order layout: cards are staggered vertically in an alternating wave
                className="flex items-center gap-4 sm:gap-5 transition-transform duration-250 ease-out pl-[6vw] sm:pl-[12vw]"
                style={{
                  transform: `translate3d(${horizontalTranslateX}px, 0px, 0px)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {all30Reviews.map((review, idx) => {
                  const cardDisplacement = idx * (cardWidth + 20) + horizontalTranslateX;
                  const rotateY = Math.max(-25, Math.min(25, (cardDisplacement / 1000) * -18));
                  const translateZ = Math.max(-140, -Math.abs(cardDisplacement / 1000) * 90);
                  // Alternate vertical offset: even index shifted up (-22px), odd index shifted down (+22px)
                  const alternateY = idx % 2 === 0 ? -22 : 22;
                  const isHovered = hoveredCardId === review.id;

                  return (
                    <motion.div
                      key={`h-card-${review.id}-${idx}`}
                      style={{
                        transform: `perspective(1200px) translate3d(0, ${alternateY}px, ${translateZ + (isHovered ? 40 : 0)}px) rotateY(${rotateY}deg)`,
                        transformStyle: 'preserve-3d',
                      }}
                      onMouseEnter={() => setHoveredCardId(review.id)}
                      onMouseLeave={() => setHoveredCardId(null)}
                      onClick={() => setSelectedReview(review)}
                      // Sharp Edges (rounded-none, border-0)
                      className="relative shrink-0 w-[290px] sm:w-[350px] md:w-[370px] h-[195px] sm:h-[235px] md:h-[250px] overflow-hidden bg-black shadow-[0_12px_28px_rgba(0,0,0,0.22)] cursor-pointer group transition-all duration-300 rounded-none border-0 p-0"
                    >
                      <img
                        src={review.image}
                        alt={review.clientName}
                        className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                      
                      {/* Client caption overlay */}
                      <div className="absolute bottom-2.5 inset-x-3 text-left truncate">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-[#FBBC04] shrink-0" />
                          <p className="text-sm sm:text-base font-heading font-extrabold text-white truncate drop-shadow-sm">
                            {review.clientName}
                          </p>
                        </div>
                        <p className="text-xs text-[#F7E7CE] font-medium truncate mt-0.5">
                          {review.category}
                        </p>
                      </div>

                      <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-3.5 h-3.5" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* 3. CTA BUTTON ALIGNED BELOW THE CARDS ANIMATION */}
            <div className="text-center z-30 pt-1 pb-1">
              <div className="flex items-center justify-center">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#80011F] via-[#940024] to-[#6d001a] hover:from-[#6d001a] hover:to-[#550015] text-white font-heading font-bold text-xs sm:text-sm shadow-lg shadow-[#80011F]/25 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 border border-white/25 cursor-pointer"
                  aria-label="Explore Our Google Reviews for TeesZone Clothing Private Limited"
                >
                  <GoogleGIcon className="w-4 h-4" />
                  <span>Explore Our Google Reviews</span>
                  <ExternalLink className="w-4 h-4 text-white/80" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* =========================================================================
          FULL-SCREEN HIGH-RESOLUTION LIGHTBOX MODAL
          ========================================================================= */}
      <AnimatePresence>
        {selectedReview && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedReview.clientName} client review order details`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedReview(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-[#FFFDF9] rounded-none overflow-hidden shadow-2xl border-2 border-[#80011F]/20 p-5 sm:p-6 text-[#211D20]"
            >
              <button
                type="button"
                onClick={() => setSelectedReview(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#80011F]/10 hover:bg-[#80011F] text-[#80011F] hover:text-white flex items-center justify-center transition-colors cursor-pointer z-10"
                aria-label="Close review details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[4/3] w-full overflow-hidden mb-4 bg-black/5 border border-black/10">
                <img
                  src={selectedReview.image}
                  alt={selectedReview.clientName}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-heading font-black text-[#211D20]">
                      {selectedReview.clientName}
                    </h3>
                    <CheckCircle2 className="w-5 h-5 text-[#80011F]" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#554D56] font-medium mt-0.5">
                    Order Category: <span className="font-bold text-[#80011F]">{selectedReview.category}</span>
                  </p>
                  <div className="mt-1 flex items-center gap-1.5">
                    <FiveStarRating />
                    <span className="text-xs text-[#554D56] font-semibold">5.0 Verified Client Experience</span>
                  </div>
                </div>

                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#80011F] hover:bg-[#680119] text-white text-xs font-heading font-bold shadow-md transition-all self-start sm:self-center shrink-0 cursor-pointer"
                >
                  <GoogleGIcon className="w-3.5 h-3.5" />
                  <span>Verify on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClientReviews3DGallery;
