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

export const CORPORATE_SLIDES: ShowcaseSlide[] = [
  {
    id: 'ais',
    brand: 'AIS Advanced Industrial Solutions',
    subtitle: 'Custom Engineered Industrial & Executive Polo',
    modelImage: '/assets/images/products/showcase/corporate/ais-model.webp',
    details: [
      {
        id: 'chest',
        title: 'Chest Embroidery & Badges',
        image: '/assets/images/products/showcase/corporate/ais-c1.webp',
      },
      {
        id: 'sleeve',
        title: 'Sleeve Brand Crest',
        image: '/assets/images/products/showcase/corporate/ais-c2.webp',
      },
      {
        id: 'back',
        title: 'Back Placement & Partners',
        image: '/assets/images/products/showcase/corporate/ais-c3.webp',
      },
      {
        id: 'collar',
        title: 'Collar & Tipping Detail',
        image: '/assets/images/products/showcase/corporate/ais-c4.webp',
      },
    ],
  },
  {
    id: 'versuni',
    brand: 'Versuni & Accenture',
    subtitle: 'Dual-Branded Executive Mint Combed Polo',
    modelImage: '/assets/images/products/showcase/corporate/versuni-model.webp',
    details: [
      {
        id: 'chest',
        title: 'Chest Dual Embroidery',
        image: '/assets/images/products/showcase/corporate/versuni-c1.webp',
      },
      {
        id: 'sleeve',
        title: 'Sleeve Rib Tipping',
        image: '/assets/images/products/showcase/corporate/versuni-c2.webp',
      },
      {
        id: 'back',
        title: 'Back Brand Monogram',
        image: '/assets/images/products/showcase/corporate/versuni-c3.webp',
      },
      {
        id: 'collar',
        title: 'Structured Collar Placket',
        image: '/assets/images/products/showcase/corporate/versuni-c4.webp',
      },
    ],
  },
  {
    id: 'ampo',
    brand: 'AMPO Poyam Valves',
    subtitle: 'Premium Heather Grey Corporate Pique Polo',
    modelImage: '/assets/images/products/showcase/corporate/ampo-model.webp',
    details: [
      {
        id: 'chest',
        title: 'Chest Contrast Embroidery',
        image: '/assets/images/products/showcase/corporate/ampo-c1.webp',
      },
      {
        id: 'sleeve',
        title: 'Sleeve Monogram Crest',
        image: '/assets/images/products/showcase/corporate/ampo-c2.webp',
      },
      {
        id: 'fabric',
        title: 'Mercerized Pique Knit',
        image: '/assets/images/products/showcase/corporate/ampo-c3.webp',
      },
      {
        id: 'collar',
        title: 'Reinforced Collar Placket',
        image: '/assets/images/products/showcase/corporate/ampo-c4.webp',
      },
    ],
  },
  {
    id: 'address',
    brand: 'Address Developers',
    subtitle: 'Signature Grey Melange Polo with Teal Trim',
    modelImage: '/assets/images/products/showcase/corporate/address-model.webp',
    details: [
      {
        id: 'chest',
        title: 'Chest Precision Embroidery',
        image: '/assets/images/products/showcase/corporate/address-c1.webp',
      },
      {
        id: 'sleeve',
        title: 'Sleeve Contrast Cuff',
        image: '/assets/images/products/showcase/corporate/address-c2.webp',
      },
      {
        id: 'back',
        title: 'Back Collar Accent Piping',
        image: '/assets/images/products/showcase/corporate/address-c3.webp',
      },
      {
        id: 'collar',
        title: 'Placket & Collar Structure',
        image: '/assets/images/products/showcase/corporate/address-c4.webp',
      },
    ],
  },
];

export const SCHOOL_SLIDES: ShowcaseSlide[] = [
  {
    id: 'dpen',
    brand: 'DPEN Sports Science',
    subtitle: 'Collegiate Sports & Departmental Pique Polo',
    modelImage: '/assets/images/products/showcase/school/dpen-model.webp',
    details: [
      {
        id: 'chest',
        title: 'School Crest Embroidery',
        image: '/assets/images/products/showcase/school/dpen-c1.webp',
      },
      {
        id: 'back',
        title: 'Back Department Print',
        image: '/assets/images/products/showcase/school/dpen-c2.webp',
      },
      {
        id: 'fabric',
        title: 'High-Durability Pique Fabric',
        image: '/assets/images/products/showcase/school/dpen-c3.webp',
      },
      {
        id: 'collar',
        title: 'Reinforced Collar Placket',
        image: '/assets/images/products/showcase/school/dpen-c4.webp',
      },
    ],
  },
  {
    id: 'lawrence',
    brand: 'The Lawrence School Lovedale',
    subtitle: 'Custom Campus Event Hoodies & School Uniforms',
    modelImage: '/assets/images/products/showcase/school/lawrence-model.webp',
    details: [
      {
        id: 'chest',
        title: 'TEDx Chest Embroidery',
        image: '/assets/images/products/showcase/school/lawrence-c1.webp',
      },
      {
        id: 'back',
        title: 'Committee Head Back Print',
        image: '/assets/images/products/showcase/school/lawrence-c2.webp',
      },
      {
        id: 'collar',
        title: 'Double-Lined Hood & Drawstrings',
        image: '/assets/images/products/showcase/school/lawrence-c3.webp',
      },
      {
        id: 'pocket',
        title: 'Kangaroo Pocket Reinforcement',
        image: '/assets/images/products/showcase/school/lawrence-c4.webp',
      },
    ],
  },
  {
    id: 'vinayaka',
    brand: 'Vinayaka Vidhya Bhavan',
    subtitle: 'Junior Campus House Polo & School Uniform Set',
    modelImage: '/assets/images/products/showcase/school/vinayaka-model.webp',
    details: [
      {
        id: 'chest',
        title: 'School Emblem Chest Print',
        image: '/assets/images/products/showcase/school/vinayaka-c1.webp',
      },
      {
        id: 'back',
        title: 'Back Institution Branding',
        image: '/assets/images/products/showcase/school/vinayaka-c2.webp',
      },
      {
        id: 'collar',
        title: 'Contrast Tipped Collar',
        image: '/assets/images/products/showcase/school/vinayaka-c3.webp',
      },
      {
        id: 'sleeve',
        title: 'Navy Ribbed Sleeve Cuff',
        image: '/assets/images/products/showcase/school/vinayaka-c4.webp',
      },
    ],
  },
  {
    id: 'rk',
    brand: 'RK Academy',
    subtitle: 'Academic JEE/NEET Foundation Campus Uniform Polo',
    modelImage: '/assets/images/products/showcase/school/rk-model.webp',
    details: [
      {
        id: 'collar',
        title: 'Dual Striped Collar & Placket',
        image: '/assets/images/products/showcase/school/rk-c1.webp',
      },
      {
        id: 'chest',
        title: 'Academy Crest Chest Monogram',
        image: '/assets/images/products/showcase/school/rk-c2.webp',
      },
      {
        id: 'back',
        title: 'Back Academic Division Print',
        image: '/assets/images/products/showcase/school/rk-c3.webp',
      },
      {
        id: 'sleeve',
        title: 'Striped Rib Sleeve Cuff',
        image: '/assets/images/products/showcase/school/rk-c4.webp',
      },
    ],
  },
];

export const PROMOTIONAL_SLIDES: ShowcaseSlide[] = [
  {
    id: 'ilaiyaraaja',
    brand: 'Ilaiyaraaja 50 Live Concert',
    subtitle: 'Official Concert Merchandise & Multi-Sponsor Event Tee',
    modelImage: '/assets/images/products/showcase/promotional/ilaiyaraaja-model.webp',
    details: [
      {
        id: 'chest',
        title: 'Concert Graphic Typography',
        image: '/assets/images/products/showcase/promotional/ilaiyaraaja-c1.webp',
      },
      {
        id: 'back',
        title: 'Multi-Sponsor Official Grid',
        image: '/assets/images/products/showcase/promotional/ilaiyaraaja-c2.webp',
      },
      {
        id: 'collar',
        title: 'Crewneck Collar & Satin Label',
        image: '/assets/images/products/showcase/promotional/ilaiyaraaja-c3.webp',
      },
      {
        id: 'fabric',
        title: 'Breathable Dry-Fit Knit',
        image: '/assets/images/products/showcase/promotional/ilaiyaraaja-c4.webp',
      },
    ],
  },
  {
    id: 'prk',
    brand: 'PRK Constructions Sports League',
    subtitle: 'Full-Sublimation Speed Graphic Team Jersey',
    modelImage: '/assets/images/products/showcase/promotional/prk-model.webp',
    details: [
      {
        id: 'chest',
        title: 'Chest Sponsor Graphics',
        image: '/assets/images/products/showcase/promotional/prk-c1.webp',
      },
      {
        id: 'back',
        title: 'Player Name & Custom Number',
        image: '/assets/images/products/showcase/promotional/prk-c2.webp',
      },
      {
        id: 'sleeve',
        title: 'Navy Sleeve Ribbing',
        image: '/assets/images/products/showcase/promotional/prk-c3.webp',
      },
      {
        id: 'fabric',
        title: 'Moisture-Wicking Sublimation Knit',
        image: '/assets/images/products/showcase/promotional/prk-c4.webp',
      },
    ],
  },
  {
    id: 'shsports',
    brand: 'SH Sports Nets & Academy',
    subtitle: 'Custom Academy Training Polo & Track Apparel',
    modelImage: '/assets/images/products/showcase/promotional/shsports-model.webp',
    details: [
      {
        id: 'collar',
        title: 'Button Placket & Structured Collar',
        image: '/assets/images/products/showcase/promotional/shsports-c1.webp',
      },
      {
        id: 'chest',
        title: 'Academy Crest Monogram',
        image: '/assets/images/products/showcase/promotional/shsports-c2.webp',
      },
      {
        id: 'sleeve',
        title: 'Raglan Sleeve Cuff Detail',
        image: '/assets/images/products/showcase/promotional/shsports-c3.webp',
      },
      {
        id: 'fabric',
        title: 'Ventilated Interlock Mesh',
        image: '/assets/images/products/showcase/promotional/shsports-c4.webp',
      },
    ],
  },
  {
    id: 'saiyoga',
    brand: 'Shree Sai Yoga Shala',
    subtitle: 'Custom Wellness Event Tee & Track Set',
    modelImage: '/assets/images/products/showcase/promotional/saiyoga-model.webp',
    details: [
      {
        id: 'collar',
        title: 'Stretch Ribbed Crewneck',
        image: '/assets/images/products/showcase/promotional/saiyoga-c1.webp',
      },
      {
        id: 'chest',
        title: 'Wellness Emblem Monogram',
        image: '/assets/images/products/showcase/promotional/saiyoga-c2.webp',
      },
      {
        id: 'sleeve',
        title: 'Hemmed Sleeve Finish',
        image: '/assets/images/products/showcase/promotional/saiyoga-c3.webp',
      },
      {
        id: 'fabric',
        title: 'Bio-Wash Combed Cotton',
        image: '/assets/images/products/showcase/promotional/saiyoga-c4.webp',
      },
    ],
  },
];

interface ClientUniformShowcaseProps {
  slides?: ShowcaseSlide[];
  category?: 'corporate' | 'school' | 'promotional-events' | string;
}

export const ClientUniformShowcase: React.FC<ClientUniformShowcaseProps> = ({
  slides: propSlides,
  category = 'corporate',
}) => {
  const isSchool = category === 'school';
  const isPromotional =
    category === 'promotional-events' ||
    category === 'promotional' ||
    category === 'promo' ||
    category === 'events';

  const slides =
    propSlides ||
    (isPromotional
      ? PROMOTIONAL_SLIDES
      : isSchool
      ? SCHOOL_SLIDES
      : CORPORATE_SLIDES);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Reset index when category or slides change
  useEffect(() => {
    setCurrentIndex(0);
    setProgress(0);
  }, [category, propSlides]);

  const totalSlides = slides.length;
  const currentSlide = slides[currentIndex];

  // Calculate preceding models staggered on the left in decreasing scale
  const leftIdx1 = (currentIndex - 1 + totalSlides) % totalSlides;
  const leftIdx2 = (currentIndex - 2 + totalSlides) % totalSlides;
  const leftIdx3 = (currentIndex - 3 + totalSlides) % totalSlides;

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

  const isSchool = category === 'school';
  const isPromotional = category === 'promotional-events';

  const badgeText = isPromotional
    ? 'Event & Merchandise Showcase'
    : isSchool
    ? 'Campus Uniform Showcase'
    : 'Client Uniform Showcase';

  const headingText = isPromotional ? (
    <>
      Merchandise, Made for{' '}
      <span className="font-heading font-black italic text-[#82132C]">Your Event</span>
    </>
  ) : isSchool ? (
    <>
      Uniforms, Made for{' '}
      <span className="font-heading font-black italic text-[#82132C]">Your Campus</span>
    </>
  ) : (
    <>
      Uniforms, Made for{' '}
      <span className="font-heading font-black italic text-[#82132C]">Your Brand</span>
    </>
  );

  const subtitleText = isPromotional
    ? 'From music concerts to sports leagues and marathon merchandise, see how vibrant all-over prints, custom sponsor branding and performance fabrics bring every event to life.'
    : isSchool
    ? 'From institutional polos to school house uniforms, see how custom school crests, emblem printing and durable fabric finishes bring each campus to life.'
    : 'From branded polos to team uniforms, see how custom embroidery, print placement and garment finishes bring each brand to life.';

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen lg:h-screen lg:min-h-[720px] flex flex-col justify-center py-8 lg:py-12 bg-[#FFFDF9] select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label={badgeText}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col justify-center h-full">
        {/* DESKTOP VIEW (Main Model aligned on Right near 4 detail cards, shaded models on Left in decreasing size) */}
        <div className="hidden lg:flex items-center justify-between gap-6 xl:gap-8 h-full">
          {/* Left Column: Heading, Carousel Stage with Left-Staggered Models, Thin-line Loader */}
          <div className="flex-1 flex flex-col justify-between max-w-[900px] xl:max-w-[980px] h-full py-4">
            {/* Header Content */}
            <div className="text-left space-y-2">
              <span className="text-xs sm:text-[13px] font-heading font-extrabold uppercase tracking-widest text-[#82132C] block">
                {badgeText}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-heading font-black tracking-tight text-charcoal-900 leading-[1.08]">
                {headingText}
              </h2>
              <p className="text-sm sm:text-base text-charcoal-600 font-normal leading-relaxed max-w-xl">
                {subtitleText}
              </p>
            </div>

            {/* Showcase Stage: Main model at right near small images, shaded models to the left in decreasing size */}
            <div
              className="relative my-auto flex items-center justify-end min-h-[460px] xl:min-h-[520px] w-full pr-2 xl:pr-6"
              style={{ perspective: '1100px' }}
            >
              {/* Warm Soft Ambient Halo behind main model */}
              <div className="absolute top-1/2 right-20 xl:right-28 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-gradient-to-r from-burgundy-100/35 via-warm-100/50 to-burgundy-50/25 blur-3xl pointer-events-none" />

              {/* Backward Option Button (No border, No shadow, Smaller Size) */}
              <button
                onClick={handlePrev}
                aria-label="Previous showcase slide"
                className="absolute left-0 z-40 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-transparent hover:bg-black/5 text-charcoal-700 hover:text-burgundy-700 border-none shadow-none flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
              </button>

              {/* Shaded Left Model 3 (Smallest, furthest left) */}
              <div
                onClick={() => {
                  setProgress(0);
                  setCurrentIndex(leftIdx3);
                }}
                className="absolute left-8 xl:left-12 top-1/2 z-10 w-[200px] xl:w-[220px] opacity-15 hover:opacity-40 transition-all duration-700 cursor-pointer filter grayscale-[40%] blur-[0.6px]"
                style={{
                  transform: 'translateY(-50%) rotateY(28deg) scale(0.48) translateZ(-80px)',
                  transformStyle: 'preserve-3d',
                }}
                title={`Switch to ${slides[leftIdx3].brand}`}
              >
                <img
                  src={slides[leftIdx3].modelImage}
                  alt={slides[leftIdx3].brand}
                  className="w-full h-auto max-h-[380px] object-contain select-none"
                />
              </div>

              {/* Shaded Left Model 2 (Medium small, mid-left) */}
              <div
                onClick={() => {
                  setProgress(0);
                  setCurrentIndex(leftIdx2);
                }}
                className="absolute left-[150px] xl:left-[200px] top-1/2 z-15 w-[230px] xl:w-[260px] opacity-28 hover:opacity-55 transition-all duration-700 cursor-pointer filter grayscale-[30%] blur-[0.4px]"
                style={{
                  transform: 'translateY(-50%) rotateY(24deg) scale(0.62) translateZ(-50px)',
                  transformStyle: 'preserve-3d',
                }}
                title={`Switch to ${slides[leftIdx2].brand}`}
              >
                <img
                  src={slides[leftIdx2].modelImage}
                  alt={slides[leftIdx2].brand}
                  className="w-full h-auto max-h-[420px] object-contain select-none"
                />
              </div>

              {/* Shaded Left Model 1 (Immediately left of main model, decreasing size step) */}
              <div
                onClick={() => {
                  setProgress(0);
                  setCurrentIndex(leftIdx1);
                }}
                className="absolute right-[280px] xl:right-[330px] top-1/2 z-20 w-[270px] xl:w-[310px] opacity-45 hover:opacity-75 transition-all duration-700 cursor-pointer filter grayscale-[18%] blur-[0.2px]"
                style={{
                  transform: 'translateY(-50%) rotateY(18deg) scale(0.76) translateZ(-25px)',
                  transformStyle: 'preserve-3d',
                }}
                title={`Switch to ${slides[leftIdx1].brand}`}
              >
                <img
                  src={slides[leftIdx1].modelImage}
                  alt={slides[leftIdx1].brand}
                  className="w-full h-auto max-h-[450px] xl:max-h-[490px] object-contain select-none"
                />
              </div>

              {/* MAIN ACTIVE MODEL (Aligned on right side, directly adjacent to the 4 small detail cards) */}
              <div
                className="relative z-30 w-full max-w-[390px] xl:max-w-[440px] flex items-center justify-center transition-all duration-700 ease-out"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  key={currentSlide.id}
                  src={currentSlide.modelImage}
                  alt={`${currentSlide.brand} showcase`}
                  className="w-full h-auto max-h-[460px] xl:max-h-[520px] object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.14)] transition-all duration-700 select-none"
                />
              </div>

              {/* Forward Option Button (No border, No shadow, Smaller Size) */}
              <button
                onClick={handleNext}
                aria-label="Next showcase slide"
                className="absolute right-[-14px] xl:right-[-20px] z-40 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-transparent hover:bg-black/5 text-charcoal-700 hover:text-burgundy-700 border-none shadow-none flex items-center justify-center transition-all duration-200 cursor-pointer"
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

          {/* Right Column: 4 Circular Colloidal Shaped Detail Cards */}
          <div className="w-[180px] xl:w-[210px] shrink-0 flex flex-col justify-center gap-2.5 xl:gap-3.5 my-auto">
            {currentSlide.details.map((detail, idx) => (
              <div
                key={`${currentSlide.id}-${detail.id}-${idx}`}
                className="relative w-full rounded-[26px] xl:rounded-[32px] overflow-hidden shadow-[0_5px_14px_rgba(0,0,0,0.10)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.16)] transition-all duration-500 hover:scale-[1.03] aspect-[16/10] bg-transparent"
                style={{
                  borderRadius: '26px',
                }}
              >
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full h-full object-cover rounded-[26px] xl:rounded-[32px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE & TABLET VIEW (Responsive Staggered Shaded Models & 4 Colloidal Cards) */}
        <div className="lg:hidden flex flex-col space-y-4 text-left py-4 my-auto w-full">
          {/* Header Content */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-heading font-extrabold uppercase tracking-widest text-[#82132C] block">
              {badgeText}
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-charcoal-900 leading-[1.12]">
              {headingText}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-normal leading-relaxed max-w-lg">
              {subtitleText}
            </p>
          </div>

          {/* Mobile Stage: Main Model positioned right-center, shaded models on left */}
          <div
            className="relative py-2 flex items-center justify-end min-h-[290px] xs:min-h-[310px] w-full overflow-hidden"
            style={{ perspective: '800px' }}
          >
            {/* Ambient Glow */}
            <div className="absolute top-1/2 right-12 -translate-y-1/2 w-[220px] h-[220px] rounded-full bg-burgundy-100/35 blur-2xl pointer-events-none" />

            {/* Mobile Backward Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous showcase slide"
              className="absolute left-1 z-30 w-7 h-7 rounded-full bg-transparent hover:bg-black/5 text-charcoal-700 border-none shadow-none flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Left Shaded Model 2 (Smallest on mobile) */}
            <div
              onClick={() => {
                setProgress(0);
                setCurrentIndex(leftIdx2);
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-[110px] opacity-20 filter grayscale-[35%]"
              style={{ transform: 'translateY(-50%) rotateY(20deg) scale(0.55)' }}
            >
              <img
                src={slides[leftIdx2].modelImage}
                alt={slides[leftIdx2].brand}
                className="w-full h-auto max-h-[190px] object-contain select-none"
              />
            </div>

            {/* Left Shaded Model 1 (Mid-size on mobile, left of main model) */}
            <div
              onClick={() => {
                setProgress(0);
                setCurrentIndex(leftIdx1);
              }}
              className="absolute left-[65px] xs:left-[80px] sm:left-[110px] top-1/2 -translate-y-1/2 z-15 w-[130px] opacity-40 filter grayscale-[20%]"
              style={{ transform: 'translateY(-50%) rotateY(16deg) scale(0.72)' }}
            >
              <img
                src={slides[leftIdx1].modelImage}
                alt={slides[leftIdx1].brand}
                className="w-full h-auto max-h-[225px] object-contain select-none"
              />
            </div>

            {/* Active Main Model: Aligned near right side on mobile */}
            <div className="relative z-20 w-full max-w-[210px] xs:max-w-[230px] sm:max-w-[260px] mr-4 xs:mr-6 flex items-center justify-center">
              <img
                key={currentSlide.id}
                src={currentSlide.modelImage}
                alt={`${currentSlide.brand} showcase`}
                className="w-full h-auto max-h-[285px] xs:max-h-[305px] object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.12)] transition-all duration-500 select-none"
              />
            </div>

            {/* Mobile Forward Button */}
            <button
              onClick={handleNext}
              aria-label="Next showcase slide"
              className="absolute right-1 z-30 w-7 h-7 rounded-full bg-transparent hover:bg-black/5 text-charcoal-700 border-none shadow-none flex items-center justify-center cursor-pointer"
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

          {/* 4 Circular Colloidal Shaped Detail Cards on Mobile */}
          <div className="grid grid-cols-4 gap-2 xs:gap-2.5 max-w-md mx-auto w-full pt-1 px-1">
            {currentSlide.details.map((detail, idx) => (
              <div
                key={`${currentSlide.id}-mobile-${detail.id}-${idx}`}
                className="relative rounded-[16px] xs:rounded-[20px] overflow-hidden shadow-[0_3px_10px_rgba(0,0,0,0.10)] aspect-square bg-transparent"
                style={{ borderRadius: '18px' }}
              >
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full h-full object-cover rounded-[16px] xs:rounded-[20px]"
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
