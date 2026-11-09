import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, ExternalLink } from 'lucide-react';

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

// 5 genuine verified reviews for TeesZone
const REVIEWS: GoogleReviewItem[] = [
  {
    id: 'review-anitha',
    name: 'Anitha Prakash',
    role: 'Event Manager • 2 weeks ago',
    initial: 'A',
    avatarBg: 'bg-[#9C27B0]',
    rating: 5.0,
    text: 'The print quality and fabric are excellent! Our team loved the custom T-shirts.',
    badge: 'Verified Event Client',
    googleReviewUrl:
      'https://www.google.com/search?q=teeszone+clothing+private+limited+google+reviews#lrd=0x3ba96bfd956d91c3:0xf353ec9ccd766328,1,,,,',
  },
  {
    id: 'review-karthik',
    name: 'Karthik Raja',
    role: 'Corporate HR & Procurement • a month ago',
    initial: 'K',
    avatarBg: 'bg-[#EA4335]',
    rating: 5.0,
    text: 'Ordered 350+ customized polo t-shirts with embroidered company logos. Fabric quality (bio-wash combed cotton) and fitting are top-notch. Delivered 2 days ahead of our corporate event!',
    badge: 'VERIFIED CORPORATE BUYER',
    googleReviewUrl:
      'https://www.google.com/search?q=teeszone+clothing+private+limited+google+reviews#lrd=0x3ba96bfd956d91c3:0xf353ec9ccd766328,1,,,,',
  },
  {
    id: 'review-vignesh',
    name: 'Vignesh Kumar',
    role: 'Co-Founder, Startup • 3 weeks ago',
    initial: 'V',
    avatarBg: 'bg-[#4285F4]',
    rating: 5.0,
    text: 'Great service and quick delivery. Highly recommend TeesZone for bulk orders!',
    badge: 'Verified Buyer',
    googleReviewUrl:
      'https://www.google.com/search?q=teeszone+clothing+private+limited+google+reviews#lrd=0x3ba96bfd956d91c3:0xf353ec9ccd766328,1,,,,',
  },
  {
    id: 'review-suresh',
    name: 'Suresh Kumar',
    role: 'Operations Director • 2 months ago',
    initial: 'S',
    avatarBg: 'bg-[#0F9D58]',
    rating: 5.0,
    text: 'Outstanding stitching and vibrant screen printing from their Texvalley facility. Prompt communication and seamless bulk delivery across our branch offices.',
    badge: 'Verified Corporate Client',
    googleReviewUrl:
      'https://www.google.com/search?q=teeszone+clothing+private+limited+google+reviews#lrd=0x3ba96bfd956d91c3:0xf353ec9ccd766328,1,,,,',
  },
  {
    id: 'review-praveen',
    name: 'Praveen Murugan',
    role: 'Institution Coordinator • a month ago',
    initial: 'P',
    avatarBg: 'bg-[#E91E63]',
    rating: 5.0,
    text: 'Superb responsiveness and transparent factory pricing! Managed our urgent order of 500 round neck tees flawlessly. The entire team loved the breathable fabric.',
    badge: 'Verified Institution',
    googleReviewUrl:
      'https://www.google.com/search?q=teeszone+clothing+private+limited+google+reviews#lrd=0x3ba96bfd956d91c3:0xf353ec9ccd766328,1,,,,',
  },
];

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

// Real Google Review Amber Gold Stars
const GoogleStars = () => (
  <div className="flex items-center gap-0.5 text-[#FBBC04]">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export const Cinematic3DReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = REVIEWS.length;
  const shouldReduceMotion = useReducedMotion();

  // Bulletproof continuous auto-slider: advances every 3 seconds reliably
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(timer);
  }, [total]);

  // Scroll Tracking for Cinematic 3D Section Animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 28, stiffness: 180 });
  const smoothScrollProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 160 });

  // Dynamic 3D tilt & diagonal slide reacting to user's scrolling
  const dynamicTiltX = useTransform(smoothVelocity, [-1.2, 1.2], [-10, 10]);
  const dynamicTiltY = useTransform(smoothVelocity, [-1.2, 1.2], [6, -6]);
  const dynamicScrollY = useTransform(smoothScrollProgress, [0, 1], [-35, 35]);
  const dynamicScrollX = useTransform(smoothScrollProgress, [0, 1], [15, -15]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Mobile Touch Gestures (supports both horizontal & vertical swiping)
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current !== null && touchStartX.current !== null) {
      const diffY = touchStartY.current - e.changedTouches[0].clientY;
      const diffX = touchStartX.current - e.changedTouches[0].clientX;

      if (diffY > 30 || diffX > 30) {
        handleNext();
      } else if (diffY < -30 || diffX < -30) {
        handlePrev();
      }
    }
    touchStartY.current = null;
    touchStartX.current = null;
  };

  // 5 slots relative to current index:
  // -2: far previous, -1: near top, 0: center active, 1: near bottom, 2: far next
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
      ref={containerRef}
      className="relative w-full max-w-[420px] flex flex-col items-center select-none py-1"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-label="Google Customer Reviews 3D Slider"
    >
      {/* 3D Angled Perspective Stage - Compact height & scale */}
      <div
        className="relative w-full h-[290px] sm:h-[320px] md:h-[350px] flex items-center justify-center overflow-visible"
        style={{
          perspective: shouldReduceMotion ? 'none' : '1100px',
          perspectiveOrigin: '50% 50%',
        }}
      >
        <motion.div
          style={{
            transformStyle: shouldReduceMotion ? 'flat' : 'preserve-3d',
            rotateZ: shouldReduceMotion ? 0 : -11, // Oblique diagonal tilt
            rotateX: shouldReduceMotion ? 0 : 18,  // 3D perspective tilt
            rotateY: shouldReduceMotion ? 0 : 6,   // Subtle 3D yaw
            x: shouldReduceMotion ? 0 : dynamicScrollX,
            y: shouldReduceMotion ? 0 : dynamicScrollY,
          }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {REVIEWS.map((review, index) => {
            const slot = getSlot(index);
            const isActive = slot === 0;
            const isNearTop = slot === -1;
            const isNearBottom = slot === 1;
            const isFarTop = slot === -2;
            const isFarBottom = slot === 2;

            // Slider Coordinate & Scale offsets along the tilted diagonal axis (compacted size)
            let x = 0;
            let y = 0;
            let z = 0;
            let scale = 1;
            let opacity = 0.35;
            let zIndex = 10;
            let filterBlur = 'blur(4px)';

            if (isActive) {
              // CENTER CARD: Decreased compact size, sharp, 0 blur, elevated
              x = 0;
              y = 0;
              z = shouldReduceMotion ? 0 : 40;
              scale = 0.98;
              opacity = 1;
              zIndex = 35;
              filterBlur = 'blur(0px)';
            } else if (isNearTop) {
              // TOP CARD: Shifted up-right along track, compact, blurred
              x = 16;
              y = -95;
              z = shouldReduceMotion ? 0 : -30;
              scale = 0.78;
              opacity = 0.6;
              zIndex = 20;
              filterBlur = 'blur(2.5px)';
            } else if (isNearBottom) {
              // BOTTOM CARD: Shifted down-left along track, compact, blurred
              x = -16;
              y = 95;
              z = shouldReduceMotion ? 0 : -30;
              scale = 0.78;
              opacity = 0.6;
              zIndex = 20;
              filterBlur = 'blur(2.5px)';
            } else if (isFarTop) {
              // FAR TOP CARD: Further along track, very small & blurred
              x = 28;
              y = -160;
              z = shouldReduceMotion ? 0 : -70;
              scale = 0.65;
              opacity = 0.2;
              zIndex = 10;
              filterBlur = 'blur(5px)';
            } else if (isFarBottom) {
              // FAR BOTTOM CARD: Further along track, very small & blurred
              x = -28;
              y = 160;
              z = shouldReduceMotion ? 0 : -70;
              scale = 0.65;
              opacity = 0.2;
              zIndex = 10;
              filterBlur = 'blur(5px)';
            }

            return (
              <motion.div
                key={review.id}
                className="absolute w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] px-1.5 sm:px-0 cursor-pointer"
                animate={{
                  x,
                  y,
                  z,
                  scale,
                  opacity,
                  zIndex,
                  filter: shouldReduceMotion ? 'none' : filterBlur,
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
                {/* Real Google Review Card (Pure White with Compact Padding) */}
                <motion.div
                  style={{
                    rotateX: isActive ? dynamicTiltX : 0,
                    rotateY: isActive ? dynamicTiltY : 0,
                  }}
                  className={`relative rounded-xl sm:rounded-2xl transition-all duration-300 overflow-hidden bg-white text-gray-900 ${
                    isActive
                      ? 'border border-gray-200/90 shadow-[0_16px_36px_rgba(0,0,0,0.32)] p-3 sm:p-3.5 ring-1 ring-black/5'
                      : 'border border-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.18)] p-2.5 sm:p-3 hover:border-gray-300'
                  }`}
                >
                  {/* Card Header: Avatar, Name, Designation, Google G Logo */}
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${review.avatarBg} text-white font-heading font-black text-[11px] sm:text-xs flex items-center justify-center shadow-xs shrink-0`}
                      >
                        {review.initial}
                      </div>

                      <div>
                        <h3 className="text-[11.5px] sm:text-[13px] font-heading font-bold text-gray-900 leading-tight">
                          {review.name}
                        </h3>
                        <p className="text-[9.5px] sm:text-[10.5px] text-gray-500 font-medium leading-tight mt-0.5">
                          {review.role}
                        </p>
                      </div>
                    </div>

                    <div
                      className="p-1 rounded-full bg-gray-50 border border-gray-100 shadow-2xs shrink-0 flex items-center justify-center"
                      title="Verified Google Review"
                    >
                      <GoogleIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                  </div>

                  {/* Stars, Rating, and Verified Client Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                    <div className="flex items-center gap-1">
                      <GoogleStars />
                      <span className="text-[10px] sm:text-[11px] font-bold text-gray-800">
                        {review.rating.toFixed(1)}
                      </span>
                    </div>

                    {review.badge && (isActive || isNearTop || isNearBottom) && (
                      <span className="inline-flex items-center gap-1 text-[8px] sm:text-[8.5px] uppercase font-bold tracking-wider text-[#137333] bg-[#E6F4EA] border border-[#CEEAD6] px-1.5 py-0.5 rounded-full">
                        <CheckCircle2 className="w-2 h-2 text-[#137333] shrink-0" />
                        {review.badge}
                      </span>
                    )}
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-[10.5px] sm:text-[11.5px] text-gray-700 font-normal leading-snug m-0 p-0">
                    <p className={isActive ? 'line-clamp-3' : 'line-clamp-2'}>
                      "{review.text}"
                    </p>
                  </blockquote>

                  {/* Active Card Footer: Integrated Slider Controls & Google Link */}
                  {isActive && (
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100 text-[10px]">
                      {/* Integrated Minimalist Slider Navigation ( < > ) */}
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrev();
                          }}
                          className="w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-all cursor-pointer active:scale-90"
                          aria-label="Previous review slide"
                        >
                          <ChevronLeft className="w-3 h-3" />
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNext();
                          }}
                          className="w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-all cursor-pointer active:scale-90"
                          aria-label="Next review slide"
                        >
                          <ChevronRight className="w-3 h-3" />
                        </button>

                        {/* Slider Progress Dots */}
                        <div className="flex items-center gap-1 ml-1" aria-hidden="true">
                          {REVIEWS.map((_, dotIdx) => (
                            <button
                              key={dotIdx}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentIndex(dotIdx);
                              }}
                              className={`h-1 rounded-full transition-all duration-300 ${
                                dotIdx === currentIndex
                                  ? 'w-3 bg-[#1a73e8]'
                                  : 'w-1 bg-gray-200 hover:bg-gray-400'
                              }`}
                              aria-label={`Slide to review ${dotIdx + 1}`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Official Google Blue Link */}
                      <a
                        href={review.googleReviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-[#1a73e8] hover:text-[#174ea6] hover:underline transition-colors shrink-0"
                        aria-label={`Read ${review.name}'s verified review on Google`}
                      >
                        <span>Read on Google</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Cinematic3DReviews;