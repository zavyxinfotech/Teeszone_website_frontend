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
    id: 'golden-golisoda-1',
    brand: 'Golden Golisoda',
    subtitle: 'Signature Maroon Corporate Pique Polo',
    modelImage: '/assets/images/products/showcase/golden-golisoda-model.webp',
    details: [
      {
        id: 'chest',
        title: 'High-Density Chest Embroidery',
        image: '/assets/images/products/showcase/golden-golisoda-detail-1.webp',
      },
      {
        id: 'sleeve',
        title: 'Precision Sleeve Brand Crest',
        image: '/assets/images/products/showcase/golden-golisoda-detail-2.webp',
      },
      {
        id: 'collar',
        title: 'Reinforced Collar & Placket Finish',
        image: '/assets/images/products/showcase/golden-golisoda-detail-3.webp',
      },
    ],
  },
  {
    id: 'mani-1',
    brand: 'MANI Group',
    subtitle: 'Executive Grey Combed Cotton Polo',
    modelImage: '/assets/images/products/showcase/mani-model.webp',
    details: [
      {
        id: 'chest',
        title: 'Vibrant Multi-Color Monogram',
        image: '/assets/images/products/showcase/mani-detail-1.webp',
      },
      {
        id: 'sleeve',
        title: 'Color-Fast Sleeve Placement',
        image: '/assets/images/products/showcase/mani-detail-2.webp',
      },
      {
        id: 'collar',
        title: 'Premium Taped Collar & Back Crest',
        image: '/assets/images/products/showcase/mani-detail-3.webp',
      },
    ],
  },
  {
    id: 'golden-golisoda-2',
    brand: 'Golden Golisoda',
    subtitle: 'Store & Retail Staff Uniform',
    modelImage: '/assets/images/products/showcase/golden-golisoda-model.webp',
    details: [
      {
        id: 'chest',
        title: 'High-Density Chest Embroidery',
        image: '/assets/images/products/showcase/golden-golisoda-detail-1.webp',
      },
      {
        id: 'sleeve',
        title: 'Precision Sleeve Brand Crest',
        image: '/assets/images/products/showcase/golden-golisoda-detail-2.webp',
      },
      {
        id: 'collar',
        title: 'Reinforced Collar & Placket Finish',
        image: '/assets/images/products/showcase/golden-golisoda-detail-3.webp',
      },
    ],
  },
  {
    id: 'mani-2',
    brand: 'MANI Group',
    subtitle: 'Field Operations & Technical Staff Polo',
    modelImage: '/assets/images/products/showcase/mani-model.webp',
    details: [
      {
        id: 'chest',
        title: 'Vibrant Multi-Color Monogram',
        image: '/assets/images/products/showcase/mani-detail-1.webp',
      },
      {
        id: 'sleeve',
        title: 'Color-Fast Sleeve Placement',
        image: '/assets/images/products/showcase/mani-detail-2.webp',
      },
      {
        id: 'collar',
        title: 'Premium Taped Collar & Back Crest',
        image: '/assets/images/products/showcase/mani-detail-3.webp',
      },
    ],
  },
  {
    id: 'golden-golisoda-3',
    brand: 'Golden Golisoda',
    subtitle: 'Special Promotional Campaign Edition',
    modelImage: '/assets/images/products/showcase/golden-golisoda-model.webp',
    details: [
      {
        id: 'chest',
        title: 'High-Density Chest Embroidery',
        image: '/assets/images/products/showcase/golden-golisoda-detail-1.webp',
      },
      {
        id: 'sleeve',
        title: 'Precision Sleeve Brand Crest',
        image: '/assets/images/products/showcase/golden-golisoda-detail-2.webp',
      },
      {
        id: 'collar',
        title: 'Reinforced Collar & Placket Finish',
        image: '/assets/images/products/showcase/golden-golisoda-detail-3.webp',
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
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = slides.length;
  const currentSlide = slides[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-advance carousel every 6 seconds when not paused
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused, totalSlides]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#FFFDF9] select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Client Uniform Showcase"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-burgundy-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* DESKTOP VIEW (Layout Matching Reference Image 2) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          {/* Left Column: Heading, Subtitle & Main Centered Model Showcase */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            {/* Header Content */}
            <div className="text-left space-y-2.5 max-w-2xl">
              <span className="text-xs font-heading font-bold uppercase tracking-[0.22em] text-[#80011F] block">
                Client Uniform Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-serif font-bold text-charcoal-900 leading-[1.12] tracking-tight">
                Uniforms, Made for{' '}
                <span className="italic font-serif text-[#80011F]">Your Brand</span>
              </h2>
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-normal pt-1">
                From branded polos to team uniforms, see how custom embroidery, print placement and
                garment finishes bring each brand to life.
              </p>
            </div>

            {/* Model Presentation Stage with Left/Right Navigation */}
            <div className="relative mt-6 sm:mt-8 flex items-center justify-center min-h-[420px] xl:min-h-[460px]">
              {/* Prev Button */}
              <button
                onClick={prevSlide}
                aria-label="Previous showcase"
                className="absolute left-0 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-charcoal-700 hover:text-burgundy-700 shadow-md hover:shadow-lg border border-burgundy-100/70 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Main Model View */}
              <div className="relative w-full max-w-[620px] xl:max-w-[680px] flex items-center justify-center px-8 transition-opacity duration-500">
                <img
                  key={currentSlide.id}
                  src={currentSlide.modelImage}
                  alt={`${currentSlide.brand} showcase`}
                  className="w-full h-auto max-h-[440px] xl:max-h-[480px] object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.09)] transition-all duration-500 animate-fadeIn"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                aria-label="Next showcase"
                className="absolute right-0 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-charcoal-700 hover:text-burgundy-700 shadow-md hover:shadow-lg border border-burgundy-100/70 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Slide Pagination & Brand Pill (Desktop) */}
            <div className="flex items-center justify-between pt-4 border-t border-burgundy-100/60 mt-2">
              <div className="flex items-center gap-3">
                <span className="text-sm font-heading font-bold text-burgundy-700">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-xs text-charcoal-400">/</span>
                <span className="text-xs text-charcoal-500 font-medium">
                  {String(totalSlides).padStart(2, '0')}
                </span>
                <div className="flex items-center gap-2 ml-3">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentIndex === idx
                          ? 'w-7 bg-[#80011F]'
                          : 'w-2 bg-charcoal-200 hover:bg-charcoal-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-heading font-bold text-charcoal-900 block">
                  {currentSlide.brand}
                </span>
                <span className="text-[11px] text-charcoal-500 font-medium block">
                  {currentSlide.subtitle}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Vertically Stacked Rounded Detail Cards (Exact to Reference Image 2) */}
          <div className="lg:col-span-4 flex flex-col gap-4 xl:gap-5">
            {currentSlide.details.map((detail, idx) => (
              <div
                key={`${currentSlide.id}-${detail.id}-${idx}`}
                className="group relative rounded-2xl xl:rounded-3xl overflow-hidden bg-white border border-burgundy-100/80 shadow-soft hover:shadow-soft-lg transition-all duration-500 aspect-[16/10]"
              >
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle Gradient & Hover Title Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs sm:text-sm font-heading font-semibold drop-shadow-md">
                    {detail.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE & TABLET VIEW (Layout Matching Reference Image 1) */}
        <div className="lg:hidden flex flex-col space-y-5 text-left">
          {/* Header Content */}
          <div className="space-y-2">
            <span className="text-[11px] font-heading font-bold uppercase tracking-[0.2em] text-[#80011F] block">
              Client Uniform Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 leading-[1.18] tracking-tight">
              Uniforms, Made for <br />
              <span className="italic font-serif text-[#80011F]">Your Brand</span>
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal max-w-lg">
              From branded polos to team uniforms, see how custom embroidery, print placement and
              garment finishes bring each brand to life.
            </p>
          </div>

          {/* Main Centered Model Presentation */}
          <div className="relative py-2 flex items-center justify-center">
            {/* Model Front & Back Visual */}
            <div className="w-full max-w-[360px] sm:max-w-[440px] flex items-center justify-center">
              <img
                key={currentSlide.id}
                src={currentSlide.modelImage}
                alt={`${currentSlide.brand} showcase`}
                className="w-full h-auto max-h-[320px] sm:max-h-[380px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-500"
              />
            </div>
          </div>

          {/* Mobile Pagination Counter & Dots Indicator (Exact matching Reference Image 1) */}
          <div className="flex flex-col items-center justify-center space-y-2 pt-1 pb-1">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-heading">
              <span className="text-[#80011F] font-bold">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-charcoal-400">/</span>
              <span className="text-charcoal-500 font-medium">
                {String(totalSlides).padStart(2, '0')}
              </span>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-2.5 h-2.5 bg-[#80011F]'
                      : 'w-2 h-2 bg-charcoal-200 hover:bg-charcoal-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 3 Horizontal Detail Thumbnails (Exact Row matching Reference Image 1) */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 pt-1">
            {currentSlide.details.map((detail, idx) => (
              <div
                key={`${currentSlide.id}-mobile-${detail.id}-${idx}`}
                className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-burgundy-100/90 shadow-2xs aspect-square"
              >
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full h-full object-cover"
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
