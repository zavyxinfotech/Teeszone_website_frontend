import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronUp, ChevronDown, CheckCircle2, ExternalLink } from 'lucide-react';

export interface GoogleReviewItem {
  id: string;
  name: string;
  role: string;
  initial: string;
  avatarBg: string;
  rating: number;
  text: string;
  badge?: string;
  googleReviewUrl: string;
}

// 5 genuine verified reviews
const REVIEWS: GoogleReviewItem[] = [
  {
    id: 'review-anitha',
    name: 'Anitha Prakash',
    role: 'Event Manager',
    initial: 'A',
    avatarBg: 'from-[#8A2BE2] to-[#6A0DAD]',
    rating: 5.0,
    text: 'The print quality and fabric are excellent! Our team loved the custom T-shirts.',
    badge: 'Verified Event Client',
    googleReviewUrl:
      'https://www.google.com/search?q=teeszone+clothing+private+limited+google+reviews#lrd=0x3ba96bfd956d91c3:0xf353ec9ccd766328,1,,,,',
  },
  {
    id: 'review-karthik',
    name: 'Karthik Raja',
    role: 'Corporate HR & Procurement',
    initial: 'K',
    avatarBg: 'from-[#FF8C00] to-[#E65100]',
    rating: 5.0,
    text: 'Ordered 350+ customized polo t-shirts with embroidered company logos. Fabric quality (bio-wash combed cotton) and fitting are top-notch. Delivered 2 days ahead of our corporate event!',
    badge: 'VERIFIED CORPORATE BUYER',
    googleReviewUrl:
      'https://www.google.com/search?q=teeszone+clothing+private+limited+google+reviews#lrd=0x3ba96bfd956d91c3:0xf353ec9ccd766328,1,,,,',
  },
  {
    id: 'review-vignesh',
    name: 'Vignesh Kumar',
    role: 'Co-Founder, Startup',
    initial: 'V',
    avatarBg: 'from-[#0288D1] to-[#01579B]',
    rating: 5.0,
    text: 'Great service and quick delivery. Highly recommend TeesZone for bulk orders!',
    badge: 'Verified Buyer',
    googleReviewUrl:
      'https://www.google.com/search?q=teeszone+clothing+private+limited+google+reviews#lrd=0x3ba96bfd956d91c3:0xf353ec9ccd766328,1,,,,',
  },
  {
    id: 'review-suresh',
    name: 'Suresh Kumar',
    role: 'Operations Director',
    initial: 'S',
    avatarBg: 'from-[#00897B] to-[#004D40]',
    rating: 5.0,
    text: 'Outstanding stitching and vibrant screen printing from their Texvalley facility. Prompt communication and seamless bulk delivery across our branch offices.',
    badge: 'Verified Corporate Client',
    googleReviewUrl:
      'https://www.google.com/search?q=teeszone+clothing+private+limited+google+reviews#lrd=0x3ba96bfd956d91c3:0xf353ec9ccd766328,1,,,,',
  },
  {
    id: 'review-praveen',
    name: 'Praveen Murugan',
    role: 'Institution Coordinator',
    initial: 'P',
    avatarBg: 'from-[#E91E63] to-[#880E4F]',
    rating: 5.0,
    text: 'Superb responsiveness and transparent factory pricing! Managed our urgent order of 500 round neck tees flawlessly. The entire team loved the breathable fabric.',
    badge: 'Verified Institution',
    googleReviewUrl:
      'https://www.google.com/search?q=teeszone+clothing+private+limited+google+reviews#lrd=0x3ba96bfd956d91c3:0xf353ec9ccd766328,1,,,,',
  },
];

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

const GoldStars = () => (
  <div className="flex items-center gap-0.5 text-[#FFC629]">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export const Cinematic3DReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartY = useRef<number | null>(null);
  const total = REVIEWS.length;
  const shouldReduceMotion = useReducedMotion();

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Smooth auto-rotation loop (3.8s)
  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;
    const timer = setInterval(handleNext, 3800);
    return () => clearInterval(timer);
  }, [isPaused, shouldReduceMotion, handleNext]);

  // Mobile Touch gesture support
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    setIsPaused(true);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current !== null) {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;
      if (diff > 35) {
        handleNext();
      } else if (diff < -35) {
        handlePrev();
      }
    }
    touchStartY.current = null;
    setIsPaused(false);
  };

  // 5 slots: -2 (far top), -1 (near top), 0 (active center), 1 (near bottom), 2 (far bottom)
  const getSlot = (index: number) => {
    const diff = (index - currentIndex + total) % total;
    if (diff === 0) return 0;
    if (diff === 1) return 1;
    if (diff === 2) return 2;
    if (diff === total - 1) return -1;
    return -2;
  };

  return (
    <div
      className="relative w-full max-w-[480px] flex flex-col items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-label="Customer Testimonials"
    >
      {/* Top Navigation Chevron Button - Clean, no border or bg color */}
      <button
        onClick={handlePrev}
        className="z-30 mb-1 p-2 text-white/70 hover:text-white active:scale-95 transition-all duration-200 group cursor-pointer focus:outline-none focus:text-[#FFC629] bg-transparent border-0"
        aria-label="Previous review"
      >
        <ChevronUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      {/* 3D Wave Perspective Stage */}
      <div
        className="relative w-full h-[400px] sm:h-[440px] md:h-[460px] flex items-center justify-center overflow-visible"
        style={{
          perspective: shouldReduceMotion ? 'none' : '1000px',
          transformStyle: shouldReduceMotion ? 'flat' : 'preserve-3d',
        }}
      >
        {REVIEWS.map((review, index) => {
          const slot = getSlot(index);
          const isActive = slot === 0;
          const isNearTop = slot === -1;
          const isNearBottom = slot === 1;
          const isFarTop = slot === -2;
          const isFarBottom = slot === 2;

          // Target coordinates with responsive adjustments
          let x = 0;
          let y = 0;
          let z = 0;
          let scale = 1;
          let rotateX = 0;
          let rotateZ = 0;
          let opacity = 0.45;
          let zIndex = 10;

          if (isActive) {
            x = -14;
            y = 0;
            z = shouldReduceMotion ? 0 : 35;
            scale = 1.02;
            rotateX = 0;
            rotateZ = -0.5;
            opacity = 1;
            zIndex = 30;
          } else if (isNearTop) {
            x = 24;
            y = -118;
            z = shouldReduceMotion ? 0 : -40;
            scale = 0.9;
            rotateX = shouldReduceMotion ? 0 : 5;
            rotateZ = 1.5;
            opacity = 0.85;
            zIndex = 20;
          } else if (isNearBottom) {
            x = 24;
            y = 118;
            z = shouldReduceMotion ? 0 : -40;
            scale = 0.9;
            rotateX = shouldReduceMotion ? 0 : -5;
            rotateZ = -1.5;
            opacity = 0.85;
            zIndex = 20;
          } else if (isFarTop) {
            // Background card 1 (Far Top)
            x = 42;
            y = -185;
            z = shouldReduceMotion ? 0 : -85;
            scale = 0.8;
            rotateX = shouldReduceMotion ? 0 : 8;
            rotateZ = 2.2;
            opacity = 0.45;
            zIndex = 10;
          } else if (isFarBottom) {
            // Background card 2 (Far Bottom)
            x = 42;
            y = 185;
            z = shouldReduceMotion ? 0 : -85;
            scale = 0.8;
            rotateX = shouldReduceMotion ? 0 : -8;
            rotateZ = -2.2;
            opacity = 0.45;
            zIndex = 10;
          }

          return (
            <motion.div
              key={review.id}
              className="absolute w-full max-w-[315px] sm:max-w-[380px] md:max-w-[440px] px-2 sm:px-0 cursor-pointer"
              animate={{
                x,
                y,
                z,
                scale,
                rotateX,
                rotateZ,
                opacity,
                zIndex,
              }}
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => {
                if (!isActive) {
                  setCurrentIndex(index);
                } else {
                  window.open(review.googleReviewUrl, '_blank', 'noopener,noreferrer');
                }
              }}
              role="group"
              aria-label={`Customer review by ${review.name}`}
            >
              {/* Card Container: Razor-sharp text, No glowing effect */}
              <div
                className={`relative rounded-2xl sm:rounded-3xl transition-all duration-300 overflow-hidden ${
                  isActive
                    ? 'bg-[#3A000D] border-2 border-white/30 shadow-2xl p-4 sm:p-5'
                    : 'bg-[#33000B] border border-white/15 shadow-lg p-3 sm:p-4 hover:border-white/25'
                }`}
                style={{
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* Header: Avatar, Name, Designation, Google Icon */}
                <div className="flex items-start justify-between gap-2.5 mb-2">
                  <div className="flex items-center gap-2.5">
                    {/* Customer Avatar */}
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr ${review.avatarBg} text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-md shrink-0`}
                    >
                      {review.initial}
                    </div>

                    {/* Customer Name & Designation */}
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-white leading-tight font-heading">
                        {review.name}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-[#F6DDE4] font-medium leading-tight mt-0.5">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  {/* Google Logo */}
                  <div
                    className="p-1 rounded-full bg-white shadow-sm shrink-0 flex items-center justify-center"
                    title="Google Verified Review"
                  >
                    <GoogleIcon className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Stars, Rating, and Verified Badge */}
                <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                  <div className="flex items-center gap-1.5">
                    <GoldStars />
                    <span className="text-[11px] sm:text-xs font-bold text-[#FFC629]">
                      {review.rating.toFixed(1)}
                    </span>
                  </div>

                  {/* Verified Buyer Badge */}
                  {review.badge && (isActive || isNearTop || isNearBottom) && (
                    <span className="inline-flex items-center gap-1 text-[8.5px] sm:text-[9.5px] uppercase font-bold tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                      {review.badge}
                    </span>
                  )}
                </div>

                {/* Semantic Blockquote for Testimonial */}
                <blockquote className="text-[11px] sm:text-xs text-white font-normal leading-relaxed italic m-0 p-0">
                  <p className={isActive ? 'line-clamp-3' : 'line-clamp-2'}>
                    "{review.text}"
                  </p>
                </blockquote>

                {/* Active Card Footer: Pagination dots & Accessible Google Link */}
                {isActive && (
                  <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/15 text-[11px]">
                    {/* Pagination indicators */}
                    <div className="flex items-center gap-1" aria-hidden="true">
                      {REVIEWS.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentIndex(dotIdx);
                          }}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            dotIdx === currentIndex
                              ? 'w-4 bg-[#FFC629]'
                              : 'w-1.5 bg-white/40 hover:bg-white/70'
                          }`}
                          aria-label={`Go to review ${dotIdx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Clickable link to Google */}
                    <a
                      href={review.googleReviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#FFC629] hover:text-white transition-colors underline underline-offset-2"
                      aria-label={`Read ${review.name}'s verified review on Google Maps`}
                    >
                      <span>Read on Google</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Navigation Chevron Button - Clean, no border or bg color */}
      <button
        onClick={handleNext}
        className="z-30 mt-1 p-2 text-white/70 hover:text-white active:scale-95 transition-all duration-200 group cursor-pointer focus:outline-none focus:text-[#FFC629] bg-transparent border-0"
        aria-label="Next review"
      >
        <ChevronDown className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
};
