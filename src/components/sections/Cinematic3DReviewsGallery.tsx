import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Star, ShieldCheck, ZoomIn, X } from 'lucide-react';
import { CLIENT_REVIEWS_DATA, ClientReviewImage } from '@/data/clientReviewsData';

interface Cinematic3DReviewsGalleryProps {
  onOpenQuote?: () => void;
}

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=teeszone+clothing+private+limited+google+reviews&sca_esv=19979f682c69d8b4&sxsrf=AKL5yDjv2CRh-6O55mllzvFm6xvtFjeHbw%3A1794028012384&ei=7LHuasuLF4qehvcP46-Y0Ac&biw=1600&bih=773&uact=5&oq=teeszone+clothing+private+limited+google+reviews#lrd=0x3ba96bfd956d91c3:0xf353ec9ccd766328,1,,,,';

// Official Google G Logo
const GoogleIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
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

// Precise Desktop Layout Coordinates for the Surrounding Balanced Frame
// Cards are placed in 6 surrounding zones around the center (x: 0, y: 0)
interface CardLayout {
  id: string;
  index: number;
  // Stage 1 (Initial close-up)
  initX: number;
  initY: number;
  initZ: number;
  initScale: number;
  initRotate: number;
  initOpacity: number;
  // Stage 2 & 3 (Mosaic expand)
  mosaicX: number;
  mosaicY: number;
  mosaicZ: number;
  mosaicScale: number;
  mosaicRotate: number;
  // Stage 4 (Final settled position framing center)
  finalX: number; // percentage or px
  finalY: number; // percentage or px
  finalRotate: number;
  finalScale: number;
  width: number;
  height: number;
  zone: 'upper-left' | 'upper-right' | 'left' | 'right' | 'lower-left' | 'lower-right';
}

// 18 Key Display Cards surrounding the central content
const DESKTOP_CARDS: CardLayout[] = [
  // 1. Upper Left Zone
  {
    id: 'client-review-1', // Zoho CRM
    index: 0,
    initX: -160, initY: -100, initZ: 280, initScale: 1.3, initRotate: -4, initOpacity: 1,
    mosaicX: -460, mosaicY: -280, mosaicZ: 80, mosaicScale: 1.1, mosaicRotate: -6,
    finalX: -480, finalY: -220, finalRotate: -3.5, finalScale: 1, width: 220, height: 160,
    zone: 'upper-left'
  },
  {
    id: 'client-review-14', // Tata Electronics
    index: 13,
    initX: -260, initY: -20, initZ: 140, initScale: 1.1, initRotate: 2, initOpacity: 0.9,
    mosaicX: -640, mosaicY: -180, mosaicZ: -20, mosaicScale: 0.95, mosaicRotate: 4,
    finalX: -650, finalY: -160, finalRotate: 2.5, finalScale: 0.95, width: 190, height: 140,
    zone: 'upper-left'
  },
  {
    id: 'client-review-3', // Briar Tea Bungalows
    index: 2,
    initX: -80, initY: -180, initZ: 40, initScale: 0.9, initRotate: -2, initOpacity: 0.7,
    mosaicX: -320, mosaicY: -300, mosaicZ: 40, mosaicScale: 1, mosaicRotate: -2,
    finalX: -300, finalY: -250, finalRotate: -2, finalScale: 0.95, width: 180, height: 135,
    zone: 'upper-left'
  },

  // 2. Upper Right Zone
  {
    id: 'client-review-21', // Asian Paints
    index: 20,
    initX: 180, initY: -90, initZ: 300, initScale: 1.35, initRotate: 4, initOpacity: 1,
    mosaicX: 470, mosaicY: -280, mosaicZ: 90, mosaicScale: 1.12, mosaicRotate: 5,
    finalX: 480, finalY: -220, finalRotate: 3.5, finalScale: 1, width: 220, height: 160,
    zone: 'upper-right'
  },
  {
    id: 'client-review-10', // MRF Vapocure
    index: 9,
    initX: 280, initY: -30, initZ: 120, initScale: 1.05, initRotate: -3, initOpacity: 0.85,
    mosaicX: 650, mosaicY: -180, mosaicZ: -20, mosaicScale: 0.95, mosaicRotate: -3,
    finalX: 650, finalY: -160, finalRotate: -2.5, finalScale: 0.95, width: 190, height: 140,
    zone: 'upper-right'
  },
  {
    id: 'client-review-2', // PV Renewable India
    index: 1,
    initX: 100, initY: -180, initZ: 60, initScale: 0.9, initRotate: 3, initOpacity: 0.7,
    mosaicX: 330, mosaicY: -300, mosaicZ: 40, mosaicScale: 1, mosaicRotate: 3,
    finalX: 300, finalY: -250, finalRotate: 2, finalScale: 0.95, width: 180, height: 135,
    zone: 'upper-right'
  },

  // 3. Left Side Zone
  {
    id: 'client-review-6', // Serwell
    index: 5,
    initX: -320, initY: 40, initZ: 160, initScale: 1.1, initRotate: -3, initOpacity: 0.8,
    mosaicX: -580, mosaicY: 0, mosaicZ: 40, mosaicScale: 1.05, mosaicRotate: -4,
    finalX: -590, finalY: 5, finalRotate: -3, finalScale: 1, width: 210, height: 155,
    zone: 'left'
  },
  {
    id: 'client-review-5', // Vivekanandha College
    index: 4,
    initX: -420, initY: -10, initZ: 0, initScale: 0.85, initRotate: 2, initOpacity: 0.5,
    mosaicX: -760, mosaicY: 10, mosaicZ: -80, mosaicScale: 0.9, mosaicRotate: 3,
    finalX: -770, finalY: 20, finalRotate: 2.5, finalScale: 0.9, width: 180, height: 135,
    zone: 'left'
  },
  {
    id: 'client-review-12', // Besten pumps
    index: 11,
    initX: -260, initY: 120, initZ: 80, initScale: 0.9, initRotate: 1, initOpacity: 0.75,
    mosaicX: -430, mosaicY: -30, mosaicZ: -50, mosaicScale: 0.92, mosaicRotate: 1,
    finalX: -420, finalY: -40, finalRotate: 1.5, finalScale: 0.9, width: 175, height: 130,
    zone: 'left'
  },

  // 4. Right Side Zone
  {
    id: 'client-review-17', // Address Developers
    index: 16,
    initX: 340, initY: 40, initZ: 180, initScale: 1.15, initRotate: 3, initOpacity: 0.8,
    mosaicX: 590, mosaicY: 0, mosaicZ: 50, mosaicScale: 1.05, mosaicRotate: 4,
    finalX: 590, finalY: 5, finalRotate: 3, finalScale: 1, width: 210, height: 155,
    zone: 'right'
  },
  {
    id: 'client-review-8', // Skyline Lite Hotels
    index: 7,
    initX: 430, initY: -10, initZ: 10, initScale: 0.85, initRotate: -2, initOpacity: 0.5,
    mosaicX: 760, mosaicY: 10, mosaicZ: -80, mosaicScale: 0.9, mosaicRotate: -3,
    finalX: 770, finalY: 20, finalRotate: -2.5, finalScale: 0.9, width: 180, height: 135,
    zone: 'right'
  },
  {
    id: 'client-review-13', // LEO Company Uniforms
    index: 12,
    initX: 270, initY: 120, initZ: 70, initScale: 0.9, initRotate: -2, initOpacity: 0.75,
    mosaicX: 430, mosaicY: -30, mosaicZ: -50, mosaicScale: 0.92, mosaicRotate: -1,
    finalX: 420, finalY: -40, finalRotate: -1.5, finalScale: 0.9, width: 175, height: 130,
    zone: 'right'
  },

  // 5. Lower Left Zone
  {
    id: 'client-review-4', // RK Academy
    index: 3,
    initX: -160, initY: 160, initZ: 260, initScale: 1.25, initRotate: 3, initOpacity: 1,
    mosaicX: -460, mosaicY: 230, mosaicZ: 80, mosaicScale: 1.1, mosaicRotate: 4,
    finalX: -480, finalY: 210, finalRotate: 3, finalScale: 1, width: 220, height: 160,
    zone: 'lower-left'
  },
  {
    id: 'client-review-7', // Magnus Sports
    index: 6,
    initX: -270, initY: 190, initZ: 130, initScale: 1.05, initRotate: -2, initOpacity: 0.85,
    mosaicX: -650, mosaicY: 170, mosaicZ: -20, mosaicScale: 0.95, mosaicRotate: -3,
    finalX: -650, finalY: 165, finalRotate: -2, finalScale: 0.95, width: 190, height: 140,
    zone: 'lower-left'
  },
  {
    id: 'client-review-9', // Holy Cross School
    index: 8,
    initX: -90, initY: 220, initZ: 50, initScale: 0.9, initRotate: 2, initOpacity: 0.7,
    mosaicX: -310, mosaicY: 260, mosaicZ: 30, mosaicScale: 0.95, mosaicRotate: 2,
    finalX: -290, finalY: 235, finalRotate: 2, finalScale: 0.95, width: 180, height: 135,
    zone: 'lower-left'
  },

  // 6. Lower Right Zone
  {
    id: 'client-review-23', // VMK Constructions
    index: 22,
    initX: 160, initY: 160, initZ: 270, initScale: 1.25, initRotate: -3, initOpacity: 1,
    mosaicX: 470, mosaicY: 230, mosaicZ: 80, mosaicScale: 1.1, mosaicRotate: -4,
    finalX: 480, finalY: 210, finalRotate: -3, finalScale: 1, width: 220, height: 160,
    zone: 'lower-right'
  },
  {
    id: 'client-review-24', // Modern Motors
    index: 23,
    initX: 270, initY: 190, initZ: 140, initScale: 1.05, initRotate: 3, initOpacity: 0.85,
    mosaicX: 650, mosaicY: 170, mosaicZ: -20, mosaicScale: 0.95, mosaicRotate: 3,
    finalX: 650, finalY: 165, finalRotate: 2.5, finalScale: 0.95, width: 190, height: 140,
    zone: 'lower-right'
  },
  {
    id: 'client-review-25', // Pillars of Hospitality
    index: 24,
    initX: 90, initY: 220, initZ: 50, initScale: 0.9, initRotate: -2, initOpacity: 0.7,
    mosaicX: 310, mosaicY: 260, mosaicZ: 30, mosaicScale: 0.95, mosaicRotate: -2,
    finalX: 290, finalY: 235, finalRotate: -2, finalScale: 0.95, width: 180, height: 135,
    zone: 'lower-right'
  },
];

export const Cinematic3DReviewsGallery: React.FC<Cinematic3DReviewsGalleryProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Animation Stage State:
  // 0: Initial Reveal (large photos floating close)
  // 1: Camera Pullback & Expanding Mosaic
  // 2: Final Settled Composition Framing Central Content
  const [animStage, setAnimStage] = useState<number>(0);
  const [hasTriggered, setHasTriggered] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<ClientReviewImage | null>(null);

  // Trigger cinematic sequence when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasTriggered]);

  // Orchestrate the 4-Stage Cinematic Transition Sequence
  useEffect(() => {
    if (!hasTriggered) return;

    if (shouldReduceMotion) {
      setAnimStage(2);
      return;
    }

    // Stage 0: Initial close-up reveal lasts 1.4s
    // Stage 1: Camera pullback & expanding mosaic starts at 1.4s and runs for 2.2s
    // Stage 2: Settle into final composition at 3.6s
    const t1 = setTimeout(() => {
      setAnimStage(1);
    }, 1400);

    const t2 = setTimeout(() => {
      setAnimStage(2);
    }, 3600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [hasTriggered, shouldReduceMotion]);

  // Replay animation on click if user wants to experience it again
  const handleReplayAnimation = () => {
    setAnimStage(0);
    setTimeout(() => setAnimStage(1), 1200);
    setTimeout(() => setAnimStage(2), 3400);
  };

  return (
    <section
      ref={containerRef}
      id="client-reviews-section"
      className="relative w-full min-h-[920px] lg:h-[1000px] xl:h-[1050px] bg-gradient-to-b from-[#180005] via-[#2D000A] to-[#140004] text-white overflow-hidden flex flex-col justify-center items-center py-16 lg:py-0 select-none"
      aria-labelledby="customer-reviews-heading"
    >
      {/* =========================================================================
          BACKGROUND ATMOSPHERE: WARM AMBIENT LIGHTING & SILK REFLECTIONS
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Soft Golden Amber Glow Behind Center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-radial from-[#FFC1D0]/10 via-[#80011F]/20 to-transparent blur-3xl opacity-80"
          aria-hidden="true"
        />

        {/* Top-Left Ambient Rim Glow */}
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#570018]/40 blur-3xl opacity-60"
          aria-hidden="true"
        />

        {/* Bottom-Right Ambient Rim Glow */}
        <div
          className="absolute -bottom-32 -right-32 w-[550px] h-[550px] rounded-full bg-[#3B000F]/60 blur-3xl opacity-70"
          aria-hidden="true"
        />

        {/* Subtle Geometric Depth Grid lines */}
        <div
          className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] opacity-40"
          aria-hidden="true"
        />
      </div>

      {/* =========================================================================
          TOP SEAMLESS TRANSITION DIVIDER
          ========================================================================= */}
      <div
        className="absolute top-0 inset-x-0 overflow-hidden leading-none pointer-events-none z-20"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-4 sm:h-7 md:h-10"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,15 C1200,50 920,60 620,35 C320,10 120,35 0,22 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* =========================================================================
          DESKTOP 3D PHOTOGRAPHIC STAGE (lg:flex, hidden on mobile/tablet)
          - Full 3D Camera & Pullback Perspective
          - 18 Genuine Customer Photograph Cards
          - Settles into an organized frame surrounding the central content
          ========================================================================= */}
      <div
        className="hidden lg:flex relative w-full h-full max-w-[1700px] mx-auto items-center justify-center pointer-events-auto"
        style={{ perspective: '1100px', transformStyle: 'preserve-3d' }}
      >
        {/* The 3D Camera / World Container */}
        <motion.div
          animate={
            animStage === 0
              ? { z: 220, rotateX: 6, rotateY: -3 }
              : animStage === 1
              ? { z: -80, rotateX: 2, rotateY: -1 }
              : { z: 0, rotateX: 0, rotateY: 0 }
          }
          transition={{
            duration: animStage === 1 ? 2.2 : 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* 18 Genuine Customer Photo Cards */}
          {DESKTOP_CARDS.map((card) => {
            const review = CLIENT_REVIEWS_DATA[card.index] || CLIENT_REVIEWS_DATA[0];

            // Compute current target transform for the active stage
            const currentX =
              animStage === 0
                ? card.initX
                : animStage === 1
                ? card.mosaicX
                : card.finalX;
            const currentY =
              animStage === 0
                ? card.initY
                : animStage === 1
                ? card.mosaicY
                : card.finalY;
            const currentZ =
              animStage === 0 ? card.initZ : animStage === 1 ? card.mosaicZ : 0;
            const currentScale =
              animStage === 0
                ? card.initScale
                : animStage === 1
                ? card.mosaicScale
                : card.finalScale;
            const currentRotate =
              animStage === 0
                ? card.initRotate
                : animStage === 1
                ? card.mosaicRotate
                : card.finalRotate;
            const currentOpacity =
              animStage === 0
                ? card.initOpacity
                : 1;

            return (
              <motion.div
                key={card.id}
                animate={{
                  x: currentX,
                  y: currentY,
                  z: currentZ,
                  scale: currentScale,
                  rotateZ: currentRotate,
                  opacity: currentOpacity,
                }}
                transition={{
                  duration: animStage === 0 ? 1.2 : animStage === 1 ? 2.2 : 1.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: animStage === 0 ? card.index * 0.04 : 0,
                }}
                whileHover={{
                  scale: currentScale * 1.08,
                  z: 50,
                  rotateZ: 0,
                  transition: { duration: 0.25 },
                }}
                onClick={() => setSelectedPhoto(review)}
                className="absolute cursor-pointer group rounded-2xl overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.55)] border border-white/20 bg-charcoal-900/80 backdrop-blur-xs will-change-transform"
                style={{
                  width: `${card.width}px`,
                  height: `${card.height}px`,
                  transformStyle: 'preserve-3d',
                }}
                title={`Click to view ${review.companyName} review`}
              >
                {/* Genuine Customer Review Photograph */}
                <img
                  src={review.image}
                  alt={review.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
                  loading="eager"
                />

                {/* Ambient Card Shadow & Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Specular Edge Glow on Hover */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/50 rounded-2xl transition-colors duration-300 pointer-events-none" />

                {/* Subtle Client Label (Always legible, expands on hover) */}
                <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-3 flex items-center justify-between text-left">
                  <div className="truncate pr-1">
                    <p className="text-xs font-heading font-bold text-white drop-shadow-sm truncate">
                      {review.companyName}
                    </p>
                    <p className="text-[10px] text-burgundy-200 uppercase tracking-wider font-medium truncate">
                      {review.category}
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0">
                    <ZoomIn className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                {/* Verified Buyer Badge */}
                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center gap-1 text-[9px] font-heading font-semibold text-emerald-300">
                  <ShieldCheck className="w-2.5 h-2.5" />
                  <span>Verified</span>
                </div>
              </motion.div>
            );
          })}

          {/* =====================================================================
              CENTRAL CONTENT AREA (DESKTOP)
              - Exactly positioned at the visual center of the final composition
              - Unobstructed, balanced, SEO-rich H2 heading & Google Reviews CTA
              ===================================================================== */}
          <motion.div
            animate={{
              opacity: animStage >= 1 ? 1 : 0.35,
              scale: animStage === 2 ? 1 : 0.94,
              y: animStage === 2 ? 0 : 15,
            }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-30 max-w-xl xl:max-w-2xl px-6 text-center space-y-4 sm:space-y-5 pointer-events-auto"
          >
            {/* Eyebrow: Google 5.0 Rating Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xs mx-auto">
              <span className="p-1 rounded-full bg-white flex items-center justify-center shrink-0">
                <GoogleIcon className="w-3.5 h-3.5" />
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-heading font-extrabold text-white">
                5.0 Rating on Google Reviews
              </span>
            </div>

            {/* Primary SEO Heading (H2) */}
            <h2
              id="customer-reviews-heading"
              className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-heading font-bold text-white leading-[1.14] tracking-tight drop-shadow-md"
            >
              Trusted by Teams Across India for Custom T-Shirts &amp; Corporate Apparel
            </h2>

            {/* Supporting Semantic Description */}
            <p className="text-sm sm:text-base lg:text-[17px] text-burgundy-100/90 font-normal leading-relaxed max-w-lg mx-auto">
              See how businesses, brands, colleges and teams across India bring their ideas to life with Teeszone. Explore genuine customer photographs, customised T-shirts, branded corporate apparel and real client experiences.
            </p>

            {/* Google Reviews CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-[#80011F] hover:bg-[#680119] text-white font-heading font-semibold text-sm sm:text-base shadow-[0_8px_24px_rgba(128,1,31,0.55)] hover:shadow-[0_12px_32px_rgba(128,1,31,0.75)] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer border border-[#FF8FA8]/30"
                aria-label="Explore Our Google Reviews for TeesZone in a new tab"
              >
                <span className="p-1 rounded-full bg-white flex items-center justify-center shrink-0">
                  <GoogleIcon className="w-4 h-4" />
                </span>
                <span>Explore Our Google Reviews</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              {/* Subtle Replay Animation Pill for Users */}
              <button
                type="button"
                onClick={handleReplayAnimation}
                className="text-xs text-burgundy-200/80 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
                title="Replay cinematic photograph expansion animation"
              >
                Replay 3D Reveal
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* =========================================================================
          TABLET & MOBILE RESPONSIVE LAYOUT (block lg:hidden)
          - Dedicated mobile composition (never just shrunk desktop)
          - Central content prominently placed with verified customer review cards
          - Prevents horizontal overflow, touch-friendly grid and carousel
          ========================================================================= */}
      <div className="flex lg:hidden flex-col items-center justify-center w-full px-4 sm:px-6 relative z-20 space-y-8 max-w-2xl mx-auto">
        {/* Central Content (Mobile) */}
        <div className="text-center space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mx-auto">
            <span className="p-0.5 rounded-full bg-white flex items-center justify-center shrink-0">
              <GoogleIcon className="w-3.5 h-3.5" />
            </span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>
            <span className="text-xs font-heading font-bold text-white">5.0 Google Reviews</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-tight">
            Trusted by Teams Across India for Custom T-Shirts &amp; Corporate Apparel
          </h2>

          <p className="text-xs sm:text-sm text-burgundy-100/90 leading-relaxed max-w-md mx-auto">
            See how businesses, brands, colleges and teams across India bring their ideas to life with Teeszone. Explore genuine customer photographs, customised T-shirts, branded corporate apparel and real client experiences.
          </p>

          <div className="pt-2">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#80011F] hover:bg-[#680119] text-white font-heading font-semibold text-xs sm:text-sm shadow-md transition-all border border-[#FF8FA8]/30"
            >
              <GoogleIcon className="w-3.5 h-3.5" />
              <span>Explore Our Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Mobile Gallery Grid of Genuine Review Photographs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
          {CLIENT_REVIEWS_DATA.slice(0, 9).map((review) => (
            <motion.div
              key={review.id}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedPhoto(review)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-white/15 bg-charcoal-900 group cursor-pointer"
            >
              <img
                src={review.image}
                alt={review.alt}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-1.5 inset-x-1.5 text-left truncate">
                <p className="text-[11px] font-heading font-bold text-white truncate">
                  {review.companyName}
                </p>
                <p className="text-[9px] text-burgundy-200 truncate">
                  {review.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-[11px] text-burgundy-200/80 text-center">
          Tap any photograph to inspect genuine customer orders
        </p>
      </div>

      {/* =========================================================================
          LIGHTBOX MODAL FOR INSPECTING ANY CUSTOMER PHOTOGRAPH
          ========================================================================= */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedPhoto.companyName} customer review photograph`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-[#1F0008] border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-5 text-white"
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer z-10"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-4 bg-black">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.alt}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex items-center justify-between text-left">
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
                  {selectedPhoto.companyName}
                </h3>
                <p className="text-xs sm:text-sm text-burgundy-200 font-medium">
                  Custom Apparel Category: {selectedPhoto.category}
                </p>
              </div>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-heading font-semibold text-white border border-white/20 transition-colors"
              >
                <span>View on Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
