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

// Exactly 3 verified reviews from Reference Image 1
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
  // Start with Karthik Raja active (index 1) exactly as in Image 1
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

  // Smooth auto-rotation loop
  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [isPaused, shouldReduceMotion, handleNext]);

  // Touch gesture support for mobile
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

  // Determine wave-like relative slot (-1 = top-right, 0 = active-left, 1 = bottom-right)
  const getSlot = (index: number) => {
    const diff = (index - currentIndex + total) % total;
    if (diff === 0) return 0;
    if (diff === total - 1 || diff === -1) return -1;
    return 1;
  };

  return (
    <div
      className="relative w-full max-w-[500px] flex flex-col items-center select-none py-1"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-label="Google Customer Reviews Carousel"
    >
      {/* Top Navigation Chevron Button */}
      <button
        onClick={handlePrev}
        className="z-30 mb-1 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-white/25 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 shadow-md group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FFC629]"
        aria-label="Previous review"
      >
        <ChevronUp className="w-5 h-5 text-warm-100 group-hover:text-white group-hover:-translate-y-0.5 transition-transform" />
      </button>

      {/* 3D Wave Perspective Stage */}
      <div
        className="relative w-full h-[430px] sm:h-[450px] flex items-center justify-center"
        style={{
          perspective: shouldReduceMotion ? 'none' : '1200px',
          transformStyle: shouldReduceMotion ? 'flat' : 'preserve-3d',
        }}
      >
        {REVIEWS.map((review, index) => {
          const slot = getSlot(index);
          const isActive = slot === 0;
          const isTop = slot === -1;
          const isBottom = slot === 1;

          // Wave alignment coordinates matching Reference Image 1:
          // Top card: shifted right (x: +36px), up (y: -130px), slightly rotated
          // Active card: shifted left (x: -18px), center (y: 0px), prominent scale, glowing pink border
          // Bottom card: shifted right (x: +36px), down (y: +130px), slightly rotated
          let x = 0;
          let y = 0;
          let z = 0;
          let scale = 1;
          let rotateX = 0;
          let rotateZ = 0;
          let opacity = 0.55;
          let zIndex = 10;

          if (isActive) {
            x = -18;
            y = 0;
            z = shouldReduceMotion ? 0 : 40;
            scale = 1.03;
            rotateX = 0;
            rotateZ = -0.5;
            opacity = 1;
            zIndex = 25;
          } else if (isTop) {
            x = 36;
            y = -128;
            z = shouldReduceMotion ? 0 : -50;
            scale = 0.88;
            rotateX = shouldReduceMotion ? 0 : 6;
            rotateZ = 1.8;
            opacity = 0.58;
            zIndex = 10;
          } else if (isBottom) {
            x = 36;
            y = 128;
            z = shouldReduceMotion ? 0 : -50;
            scale = 0.88;
            rotateX = shouldReduceMotion ? 0 : -6;
            rotateZ = -1.8;
            opacity = 0.58;
            zIndex = 10;
          }

          return (
            <motion.div
              key={review.id}
              className="absolute w-full px-2 sm:px-3 cursor-pointer"
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
                duration: shouldReduceMotion ? 0.3 : 0.65,
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
              aria-label={`Review by ${review.name}`}
            >
              <div
                className={`relative rounded-[22px] sm:rounded-[24px] transition-all duration-500 overflow-hidden ${
                  isActive
                    ? 'bg-[#40000E]/90 backdrop-blur-2xl border-2 border-[#FF4D6D] shadow-[0_0_35px_rgba(255,77,109,0.5),0_20px_45px_rgba(0,0,0,0.65)] ring-1 ring-white/20 p-5 sm:p-5.5'
                    : 'bg-[#40000E]/70 backdrop-blur-md border border-white/15 shadow-xl hover:border-white/30 p-4 sm:p-4.5'
                }`}
              >
                {/* Subtle pink-amber gradient overlay on active card */}
                {isActive && (
                  <div
                    className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-rose-500/15 via-transparent to-amber-500/10"
                    aria-hidden="true"
                  />
                )}

                {/* Card Header: Avatar, Name, Role, Google Logo */}
                <div className="relative z-10 flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    {/* User Avatar Initial */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr ${review.avatarBg} text-white font-bold text-sm flex items-center justify-center shadow-md shrink-0`}
                    >
                      {review.initial}
                    </div>

                    {/* Name & Designation */}
                    <div>
                      <h3 className="text-sm sm:text-[15px] font-bold text-white leading-tight font-heading">
                        {review.name}
                      </h3>
                      <p className="text-[11px] text-[#F6DDE4]/80 leading-tight mt-0.5">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  {/* Google Logo */}
                  <div
                    className="p-1 rounded-full bg-white shadow-md shrink-0 flex items-center justify-center"
                    title="Google Verified Review"
                  >
                    <GoogleIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>

                {/* Stars, Rating, and Verified Buyer Badge */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <GoldStars />
                    <span className="text-xs font-bold text-[#FFC629]">
                      {review.rating.toFixed(1)}
                    </span>
                  </div>

                  {/* Verified Badge */}
                  {review.badge && isActive && (
                    <span className="inline-flex items-center gap-1 text-[9px] uppercase font-bold tracking-wider text-emerald-300 bg-emerald-950/70 border border-emerald-500/40 px-2.5 py-0.5 rounded-full shadow-sm">
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                      {review.badge}
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p
                  className={`relative z-10 text-xs sm:text-[12.5px] text-white/95 leading-relaxed italic ${
                    isActive ? 'line-clamp-3' : 'line-clamp-2'
                  }`}
                >
                  "{review.text}"
                </p>

                {/* Active Card Footer: Pagination dots & "Read on Google ↗" */}
                {isActive && (
                  <div className="relative z-10 flex items-center justify-between mt-3 pt-2 border-t border-white/15">
                    {/* Pagination indicators matching Image 1 */}
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      {REVIEWS.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentIndex(dotIdx);
                          }}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            dotIdx === currentIndex
                              ? 'w-4.5 bg-[#FFC629]'
                              : 'w-2 bg-white/30 hover:bg-white/60'
                          }`}
                          aria-label={`Go to review ${dotIdx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Clickable link to specific review in gold */}
                    <a
                      href={review.googleReviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#FFC629] hover:text-white transition-colors underline underline-offset-2 group/link"
                      title="Read full review on Google"
                    >
                      <span>Read on Google</span>
                      <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Navigation Chevron Button */}
      <button
        onClick={handleNext}
        className="z-30 mt-1 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-white/25 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 shadow-md group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FFC629]"
        aria-label="Next review"
      >
        <ChevronDown className="w-5 h-5 text-warm-100 group-hover:text-white group-hover:translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
};
