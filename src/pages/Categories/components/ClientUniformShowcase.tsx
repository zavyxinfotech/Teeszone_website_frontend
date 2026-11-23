import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface ShowcaseDetail {
  id: string;
  title: string;
  image: string;
}

export interface ShowcaseSlide {
  id: string;
  brand: string;
  subtitle: string;
  modelImage: string;
  details: ShowcaseDetail[];
}

const DEFAULT_SLIDES: ShowcaseSlide[] = [
  {
    id: 'golden-golisoda',
    brand: 'Golden Golisoda',
    subtitle: 'Signature Maroon Corporate Pique Polo',
    modelImage: '/assets/images/products/showcase/golden-golisoda-model-clean.webp',
    details: [
      {
        id: 'chest',
        title: 'Chest Embroidery',
        image: '/assets/images/products/showcase/golden-golisoda-card-1.webp',
      },
      {
        id: 'sleeve',
        title: 'Sleeve Badge',
        image: '/assets/images/products/showcase/golden-golisoda-card-2.webp',
      },
      {
        id: 'collar',
        title: 'Collar & Placket',
        image: '/assets/images/products/showcase/golden-golisoda-card-3.webp',
      },
    ],
  },
  {
    id: 'mani',
    brand: 'MANI Group',
    subtitle: 'Executive Grey Combed Cotton Polo',
    modelImage: '/assets/images/products/showcase/mani-model-clean.webp',
    details: [
      {
        id: 'chest',
        title: 'Chest Monogram',
        image: '/assets/images/products/showcase/mani-card-1.webp',
      },
      {
        id: 'sleeve',
        title: 'Sleeve Placement',
        image: '/assets/images/products/showcase/mani-card-2.webp',
      },
      {
        id: 'collar',
        title: 'Collar & Back Crest',
        image: '/assets/images/products/showcase/mani-card-3.webp',
      },
    ],
  },
];

interface ClientUniformShowcaseProps {
  slides?: ShowcaseSlide[];
}

export const ClientUniformShowcase: React.FC<ClientUniformShowcaseProps> = ({
  slides = DEFAULT_SLIDES,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = slides.length;
  const currentSlide = slides[currentIndex];
  const slideDuration = 5000; // 5 seconds per slide

  const nextSlide = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Smooth thin-line loader animation and auto-advance
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    const intervalTime = 50; // update every 50ms
    const step = (intervalTime / slideDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, totalSlides]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      nextSlide();
    } else if (distance < -45) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="relative w-full py-6 sm:py-8 lg:py-10 bg-[#FFFDF9] select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Client Uniform Showcase"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* DESKTOP VIEW (Exact Layout Matching Reference Image 2) */}
        <div className="hidden lg:flex items-center justify-between gap-6 xl:gap-10">
          {/* Left Column: Heading, Subtitle, Model with Animated Background & Thin Line Loader */}
          <div className="flex-1 flex flex-col justify-between max-w-[820px] xl:max-w-[880px]">
            {/* Header Content with Home Page Typography */}
            <div className="text-left space-y-2">
              <span className="text-xs sm:text-[13px] font-heading font-extrabold uppercase tracking-widest text-[#82132C] block">
                Client Uniform Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-heading font-black tracking-tight text-charcoal-900 leading-[1.08]">
                Uniforms, Made for{' '}
                <span className="font-heading font-black italic text-[#82132C]">Your Brand</span>
              </h2>
              <p className="text-sm sm:text-[15px] text-charcoal-600 font-normal leading-relaxed max-w-xl">
                From branded polos to team uniforms, see how custom embroidery, print placement and
                garment finishes bring each brand to life.
              </p>
            </div>

            {/* Model Presentation Stage with Background Animation & Silhouettes */}
            <div className="relative mt-3 flex items-center justify-center min-h-[360px] xl:min-h-[390px] overflow-visible">
              {/* Animated Warm Ambient Glow Spotlight behind model */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-gradient-to-r from-burgundy-100/35 via-warm-100/50 to-burgundy-50/25 blur-3xl pointer-events-none animate-pulse" />

              {/* Background Silhouette: Left Staff Silhouettes */}
              <div className="absolute left-6 xl:left-12 bottom-2 w-[130px] xl:w-[150px] opacity-30 pointer-events-none transition-opacity duration-500">
                <img
                  src="/assets/images/products/showcase/silhouettes-left.webp"
                  alt="Staff Uniform Silhouette"
                  className="w-full h-auto object-contain filter grayscale contrast-125"
                />
              </div>

              {/* Background Silhouette: Right Staff Silhouettes */}
              <div className="absolute right-12 xl:right-20 bottom-2 w-[85px] xl:w-[95px] opacity-30 pointer-events-none transition-opacity duration-500">
                <img
                  src="/assets/images/products/showcase/silhouettes-right.webp"
                  alt="Staff Uniform Silhouette"
                  className="w-full h-auto object-contain filter grayscale contrast-125"
                />
              </div>

              {/* Prev Navigation Button */}
              <button
                onClick={prevSlide}
                aria-label="Previous uniform showcase"
                className="absolute left-2 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-charcoal-800 hover:text-burgundy-700 shadow-[0_4px_14px_rgba(0,0,0,0.12)] border border-charcoal-200/80 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
              </button>

              {/* Main Model Front & Back Cutout (Waist-Up, exact to Reference Image 2) */}
              <div className="relative z-10 w-full max-w-[480px] xl:max-w-[530px] flex items-center justify-center">
                <img
                  key={currentSlide.id}
                  src={currentSlide.modelImage}
                  alt={`${currentSlide.brand} showcase`}
                  className="w-full h-auto max-h-[350px] xl:max-h-[380px] object-contain drop-shadow-[0_14px_24px_rgba(0,0,0,0.10)] transition-all duration-500"
                />
              </div>

              {/* Next Navigation Button */}
              <button
                onClick={nextSlide}
                aria-label="Next uniform showcase"
                className="absolute right-4 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-charcoal-800 hover:text-burgundy-700 shadow-[0_4px_14px_rgba(0,0,0,0.12)] border border-charcoal-200/80 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.2]" />
              </button>
            </div>

            {/* Bottom Loader Option: Sleek Thin Line Indicator (No Count Text) */}
            <div className="flex items-center gap-2.5 pt-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setProgress(0);
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="relative h-[3px] rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
                  style={{ width: currentIndex === idx ? '56px' : '26px' }}
                >
                  {/* Track line */}
                  <div className="absolute inset-0 bg-charcoal-200/90 rounded-full" />
                  {/* Active animated thin filling line */}
                  {currentIndex === idx && (
                    <div
                      className="absolute inset-y-0 left-0 bg-[#82132C] rounded-full transition-all duration-75 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: 3 Compact Stacked Detail Cards (Exact to Reference Image 2) */}
          {/* No white background, no white border around image, strictly decreased size */}
          <div className="w-[210px] xl:w-[235px] shrink-0 flex flex-col gap-3.5 xl:gap-4">
            {currentSlide.details.map((detail, idx) => (
              <div
                key={`${currentSlide.id}-${detail.id}-${idx}`}
                className="relative w-full rounded-2xl overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-[1.02] aspect-[16/11] bg-transparent"
              >
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE & TABLET VIEW (Compact, perfectly fitting viewport) */}
        <div className="lg:hidden flex flex-col space-y-4 text-left">
          {/* Header Content */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-heading font-extrabold uppercase tracking-widest text-[#82132C] block">
              Client Uniform Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-charcoal-900 leading-[1.12]">
              Uniforms, Made for <br />
              <span className="font-heading font-black italic text-[#82132C]">Your Brand</span>
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-normal leading-relaxed max-w-lg">
              From branded polos to team uniforms, see how custom embroidery, print placement and
              garment finishes bring each brand to life.
            </p>
          </div>

          {/* Main Centered Model Presentation with ambient spotlight */}
          <div className="relative py-1 flex items-center justify-center min-h-[220px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full bg-burgundy-100/35 blur-2xl pointer-events-none" />

            <div className="relative z-10 w-full max-w-[320px] flex items-center justify-center">
              <img
                key={currentSlide.id}
                src={currentSlide.modelImage}
                alt={`${currentSlide.brand} showcase`}
                className="w-full h-auto max-h-[220px] sm:max-h-[260px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.10)] transition-all duration-500"
              />
            </div>
          </div>

          {/* Thin Line Loader for Mobile (No count text) */}
          <div className="flex items-center justify-center gap-2 py-1">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setProgress(0);
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className="relative h-[3px] rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
                style={{ width: currentIndex === idx ? '44px' : '20px' }}
              >
                <div className="absolute inset-0 bg-charcoal-200/90 rounded-full" />
                {currentIndex === idx && (
                  <div
                    className="absolute inset-y-0 left-0 bg-[#82132C] rounded-full transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* 3 Horizontal Compact Detail Cards: No white borders, pure image */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-md mx-auto w-full pt-1">
            {currentSlide.details.map((detail, idx) => (
              <div
                key={`${currentSlide.id}-mobile-${detail.id}-${idx}`}
                className="relative rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.10)] aspect-square bg-transparent"
              >
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientUniformShowcase;
