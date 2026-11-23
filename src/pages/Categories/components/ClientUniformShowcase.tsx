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
    modelImage: '/assets/images/products/showcase/golden-golisoda-full.webp',
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
    modelImage: '/assets/images/products/showcase/mani-full.webp',
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
  const [isInView, setIsInView] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = slides.length;
  const currentSlide = slides[currentIndex];
  const prevIdx = (currentIndex - 1 + totalSlides) % totalSlides;
  const nextIdx = (currentIndex + 1) % totalSlides;
  const prevSlide = slides[prevIdx];
  const nextSlideData = slides[nextIdx];

  const slideDuration = 4500; // 4.5 seconds per circular rotation

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // IntersectionObserver to auto-scroll when user scrolls into this section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Smooth circular auto-scroll animation when in view and not paused
  useEffect(() => {
    if (!isInView || isPaused || totalSlides <= 1) return;

    const intervalTime = 40;
    const step = (intervalTime / slideDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [currentIndex, isInView, isPaused, totalSlides]);

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
    if (distance > 40) {
      handleNext();
    } else if (distance < -40) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen lg:h-screen lg:min-h-[720px] flex flex-col justify-center py-8 lg:py-12 bg-[#FFFDF9] select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Client Uniform Showcase"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col justify-center h-full">
        {/* DESKTOP VIEW (Full Height 3D Circular Showcase) */}
        <div className="hidden lg:flex items-center justify-between gap-6 xl:gap-10 h-full">
          {/* Left Column: Heading, 3D Circular Carousel Stage, Thin-line Loader */}
          <div className="flex-1 flex flex-col justify-between max-w-[840px] xl:max-w-[900px] h-full py-4">
            {/* Header Content */}
            <div className="text-left space-y-2">
              <span className="text-xs sm:text-[13px] font-heading font-extrabold uppercase tracking-widest text-[#82132C] block">
                Client Uniform Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-heading font-black tracking-tight text-charcoal-900 leading-[1.08]">
                Uniforms, Made for{' '}
                <span className="font-heading font-black italic text-[#82132C]">Your Brand</span>
              </h2>
              <p className="text-sm sm:text-base text-charcoal-600 font-normal leading-relaxed max-w-xl">
                From branded polos to team uniforms, see how custom embroidery, print placement and
                garment finishes bring each brand to life.
              </p>
            </div>

            {/* 3D Circular Motion Showcase Stage: Full Model with Shaded 3D Previous/Next in Background */}
            <div
              className="relative my-auto flex items-center justify-center min-h-[460px] xl:min-h-[520px] w-full"
              style={{ perspective: '1100px' }}
            >
              {/* Warm Soft Ambient Halo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-burgundy-100/35 via-warm-100/50 to-burgundy-50/25 blur-3xl pointer-events-none animate-pulse" />

              {/* Backward Option Button (No border, No shadow, Smaller Size) */}
              <button
                onClick={handlePrev}
                aria-label="Previous uniform showcase"
                className="absolute left-0 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-transparent hover:bg-black/5 text-charcoal-700 hover:text-burgundy-700 border-none shadow-none flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
              </button>

              {/* 3D Circular Motion: Previous Slide Model (Shaded, Smaller 3D View at Left Background) */}
              <div
                onClick={handlePrev}
                className="absolute left-2 xl:left-6 top-1/2 z-10 w-[240px] xl:w-[270px] opacity-35 hover:opacity-60 transition-all duration-700 cursor-pointer filter grayscale-[25%] blur-[0.3px]"
                style={{
                  transform: 'translateY(-50%) rotateY(24deg) scale(0.72) translateZ(-50px)',
                  transformStyle: 'preserve-3d',
                }}
                title={`Switch to ${prevSlide.brand}`}
              >
                <img
                  src={prevSlide.modelImage}
                  alt={prevSlide.brand}
                  className="w-full h-auto max-h-[400px] xl:max-h-[450px] object-contain select-none"
                />
              </div>

              {/* 3D Circular Motion: Current Active Model (Full Uncropped Image: Head to Shoes!) */}
              <div
                className="relative z-20 w-full max-w-[420px] xl:max-w-[460px] flex items-center justify-center transition-all duration-700 ease-out"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  key={currentSlide.id}
                  src={currentSlide.modelImage}
                  alt={`${currentSlide.brand} showcase`}
                  className="w-full h-auto max-h-[460px] xl:max-h-[520px] object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.12)] transition-all duration-700 select-none"
                />
              </div>

              {/* 3D Circular Motion: Next Slide Model (Shaded, Smaller 3D View at Right Background) */}
              <div
                onClick={handleNext}
                className="absolute right-2 xl:right-6 top-1/2 z-10 w-[240px] xl:w-[270px] opacity-35 hover:opacity-60 transition-all duration-700 cursor-pointer filter grayscale-[25%] blur-[0.3px]"
                style={{
                  transform: 'translateY(-50%) rotateY(-24deg) scale(0.72) translateZ(-50px)',
                  transformStyle: 'preserve-3d',
                }}
                title={`Switch to ${nextSlideData.brand}`}
              >
                <img
                  src={nextSlideData.modelImage}
                  alt={nextSlideData.brand}
                  className="w-full h-auto max-h-[400px] xl:max-h-[450px] object-contain select-none"
                />
              </div>

              {/* Forward Option Button (No border, No shadow, Smaller Size) */}
              <button
                onClick={handleNext}
                aria-label="Next uniform showcase"
                className="absolute right-0 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-transparent hover:bg-black/5 text-charcoal-700 hover:text-burgundy-700 border-none shadow-none flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.2]" />
              </button>
            </div>

            {/* Bottom Loader Option: Sleek Thin Line Indicator */}
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
          </div>

          {/* Right Column: 3 Circular Colloidal Shaped Detail Cards */}
          <div className="w-[210px] xl:w-[240px] shrink-0 flex flex-col justify-center gap-4 xl:gap-5 my-auto">
            {currentSlide.details.map((detail, idx) => (
              <div
                key={`${currentSlide.id}-${detail.id}-${idx}`}
                className="relative w-full rounded-[38px] xl:rounded-[44px] overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-all duration-500 hover:scale-[1.03] aspect-[16/11] bg-transparent"
                style={{
                  borderRadius: '38px',
                }}
              >
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full h-full object-cover rounded-[38px] xl:rounded-[44px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE & TABLET VIEW (Compact, Full-View Uncropped Layout) */}
        <div className="lg:hidden flex flex-col space-y-4 text-left py-4 my-auto">
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

          {/* 3D Circular Mobile Stage: Full Model with Shaded 3D Background Views */}
          <div
            className="relative py-2 flex items-center justify-center min-h-[300px]"
            style={{ perspective: '800px' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full bg-burgundy-100/35 blur-2xl pointer-events-none" />

            {/* Mobile Backward Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous uniform showcase"
              className="absolute left-1 z-30 w-7 h-7 rounded-full bg-transparent hover:bg-black/5 text-charcoal-700 border-none shadow-none flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Previous Shaded 3D Model on Mobile */}
            <div
              onClick={handlePrev}
              className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-[140px] opacity-35 filter grayscale-[25%]"
              style={{ transform: 'translateY(-50%) rotateY(20deg) scale(0.7)' }}
            >
              <img
                src={prevSlide.modelImage}
                alt={prevSlide.brand}
                className="w-full h-auto max-h-[220px] object-contain"
              />
            </div>

            {/* Active Full Model: Head to Shoes on Mobile */}
            <div className="relative z-20 w-full max-w-[260px] flex items-center justify-center">
              <img
                key={currentSlide.id}
                src={currentSlide.modelImage}
                alt={`${currentSlide.brand} showcase`}
                className="w-full h-auto max-h-[300px] object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.12)] transition-all duration-500"
              />
            </div>

            {/* Next Shaded 3D Model on Mobile */}
            <div
              onClick={handleNext}
              className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-[140px] opacity-35 filter grayscale-[25%]"
              style={{ transform: 'translateY(-50%) rotateY(-20deg) scale(0.7)' }}
            >
              <img
                src={nextSlideData.modelImage}
                alt={nextSlideData.brand}
                className="w-full h-auto max-h-[220px] object-contain"
              />
            </div>

            {/* Mobile Forward Button */}
            <button
              onClick={handleNext}
              aria-label="Next uniform showcase"
              className="absolute right-1 z-30 w-7 h-7 rounded-full bg-transparent hover:bg-black/5 text-charcoal-700 border-none shadow-none flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thin Line Loader for Mobile */}
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

          {/* 3 Circular Colloidal Shaped Detail Cards on Mobile */}
          <div className="grid grid-cols-3 gap-2.5 max-w-md mx-auto w-full pt-1">
            {currentSlide.details.map((detail, idx) => (
              <div
                key={`${currentSlide.id}-mobile-${detail.id}-${idx}`}
                className="relative rounded-[24px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.10)] aspect-square bg-transparent"
                style={{ borderRadius: '24px' }}
              >
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full h-full object-cover rounded-[24px]"
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
