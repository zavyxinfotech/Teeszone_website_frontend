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
    modelImage: '/assets/images/products/showcase/ref-model-stage.webp',
    details: [
      {
        id: 'chest',
        title: 'Precision Chest Crest',
        image: '/assets/images/products/showcase/ref-card-1.webp',
      },
      {
        id: 'sleeve',
        title: 'Sleeve Brand Monogram',
        image: '/assets/images/products/showcase/ref-card-2.webp',
      },
      {
        id: 'collar',
        title: 'Crisp Collar & Placket Finish',
        image: '/assets/images/products/showcase/ref-card-3.webp',
      },
    ],
  },
  {
    id: 'mani',
    brand: 'MANI Group',
    subtitle: 'Executive Grey Combed Cotton Polo',
    modelImage: '/assets/images/products/showcase/mani-model.webp',
    details: [
      {
        id: 'chest',
        title: 'Vibrant Multi-Color Monogram',
        image: '/assets/images/products/showcase/mani-card-1.webp',
      },
      {
        id: 'sleeve',
        title: 'Color-Fast Sleeve Placement',
        image: '/assets/images/products/showcase/mani-card-2.webp',
      },
      {
        id: 'collar',
        title: 'Seamless Collar & Placket Finish',
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

  // Auto-advance carousel every 6 seconds when not hovered
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused, totalSlides]);

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
      nextSlide();
    } else if (distance < -40) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="relative w-full py-6 sm:py-8 lg:py-10 bg-[#FAF7F4] select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Client Uniform Showcase"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* DESKTOP VIEW (Exact Reference Image 2 Alignment & Proportions) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 xl:gap-8 items-center">
          {/* Left Column: Heading + Model with background silhouettes */}
          <div className="lg:col-span-8 xl:col-span-9 flex flex-col justify-between">
            {/* Header Content matching Home Page Font Styles */}
            <div className="text-left space-y-1.5 max-w-2xl">
              <span className="text-xs font-heading font-extrabold uppercase tracking-[0.2em] text-[#80011F] block">
                Client Uniform Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-black text-charcoal-900 leading-[1.1] tracking-tight">
                Uniforms, Made for{' '}
                <span className="font-heading font-black italic text-[#80011F]">Your Brand</span>
              </h2>
              <p className="text-xs sm:text-sm lg:text-[15px] text-charcoal-600 font-sans leading-relaxed max-w-xl font-normal pt-0.5">
                From branded polos to team uniforms, see how custom embroidery, print placement and
                garment finishes bring each brand to life.
              </p>
            </div>

            {/* Model Presentation Stage with Background Animation & Silhouettes */}
            <div className="relative mt-2 xl:mt-4 flex items-center justify-center min-h-[340px] xl:min-h-[380px]">
              {/* Subtle ambient light pulse behind models */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[80%] h-[75%] rounded-full bg-burgundy-100/30 blur-3xl animate-pulse" />
              </div>

              {/* Main Model View (with background silhouettes) */}
              <div className="relative w-full max-w-[620px] xl:max-w-[660px] flex items-center justify-center">
                <img
                  key={currentSlide.id}
                  src={currentSlide.modelImage}
                  alt={`${currentSlide.brand} showcase`}
                  className="w-full h-auto max-h-[350px] xl:max-h-[390px] object-contain transition-all duration-500 animate-fadeIn"
                />
              </div>
            </div>

            {/* Minimalist Thin Line Loader (No count text, ultra-clean) */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Showcase slide ${idx + 1}`}
                    className="group relative h-[3px] w-14 sm:w-16 rounded-full bg-charcoal-300/40 overflow-hidden cursor-pointer transition-all duration-300"
                  >
                    <div
                      className={`h-full bg-[#80011F] transition-all duration-500 rounded-full ${
                        currentIndex === idx ? 'w-full' : 'w-0'
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Discrete compact prev/next controls */}
              <div className="flex items-center gap-1.5 ml-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous showcase"
                  className="w-7 h-7 rounded-full bg-white/80 hover:bg-[#80011F] hover:text-white text-charcoal-600 border border-burgundy-100/60 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xs"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next showcase"
                  className="w-7 h-7 rounded-full bg-white/80 hover:bg-[#80011F] hover:text-white text-charcoal-600 border border-burgundy-100/60 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xs"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Compact Stacked Images directly with rounded corners, NO white card borders */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col items-end gap-3 xl:gap-3.5">
            {currentSlide.details.map((detail, idx) => (
              <div
                key={`${currentSlide.id}-${detail.id}-${idx}`}
                className="w-[190px] xl:w-[215px] aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-[1.02]"
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

        {/* MOBILE VIEW (Fitted cleanly within viewport) */}
        <div className="lg:hidden flex flex-col space-y-3 text-left">
          {/* Header Content */}
          <div className="space-y-1">
            <span className="text-[11px] font-heading font-extrabold uppercase tracking-[0.2em] text-[#80011F] block">
              Client Uniform Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-charcoal-900 leading-[1.12] tracking-tight">
              Uniforms, Made for <br />
              <span className="font-heading font-black italic text-[#80011F]">Your Brand</span>
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-sans leading-relaxed font-normal">
              From branded polos to team uniforms, see how custom embroidery, print placement and
              garment finishes bring each brand to life.
            </p>
          </div>

          {/* Main Centered Model Presentation */}
          <div className="relative py-1 flex items-center justify-center">
            <div className="w-full max-w-[340px] sm:max-w-[400px] flex items-center justify-center">
              <img
                key={currentSlide.id}
                src={currentSlide.modelImage}
                alt={`${currentSlide.brand} showcase`}
                className="w-full h-auto max-h-[260px] sm:max-h-[300px] object-contain transition-all duration-500"
              />
            </div>
          </div>

          {/* Thin Line Loader on Mobile */}
          <div className="flex items-center justify-center gap-2 py-1">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Showcase slide ${idx + 1}`}
                className="h-[3px] w-10 sm:w-12 rounded-full bg-charcoal-300/40 overflow-hidden cursor-pointer"
              >
                <div
                  className={`h-full bg-[#80011F] transition-all duration-500 rounded-full ${
                    currentIndex === idx ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* 3 Horizontal Detail Thumbnails (Direct Images, NO white background) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
            {currentSlide.details.map((detail, idx) => (
              <div
                key={`${currentSlide.id}-mobile-${detail.id}-${idx}`}
                className="rounded-xl overflow-hidden aspect-square shadow-2xs"
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
