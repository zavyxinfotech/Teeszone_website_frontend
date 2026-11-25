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

export const SPORTS_SLIDES: ShowcaseSlide[] = [
  {
    id: 'adult-sports',
    brand: 'Apex Pro Athletic Teamwear',
    subtitle: 'Custom Gradient Speed Graphic Performance Jersey & Track Pants',
    modelImage: '/assets/images/products/showcase/sports/adult-model.webp',
    details: [
      {
        id: 'collar',
        title: 'Crewneck Ribbed Collar',
        image: '/assets/images/products/showcase/sports/adult-c1.webp',
      },
      {
        id: 'sleeve',
        title: 'Navy Tipped Sleeve Rib',
        image: '/assets/images/products/showcase/sports/adult-c2.webp',
      },
      {
        id: 'graphic',
        title: 'Speed Streaks Gradient Print',
        image: '/assets/images/products/showcase/sports/adult-c3.webp',
      },
      {
        id: 'fabric',
        title: 'Breathable Interlock Mesh',
        image: '/assets/images/products/showcase/sports/adult-c4.webp',
      },
    ],
  },
  {
    id: 'junior-sports',
    brand: 'Junior Academy Activewear',
    subtitle: 'Full-Sublimation Multi-Color Soundwave Jersey & Shorts Set',
    modelImage: '/assets/images/products/showcase/sports/junior-model.webp',
    details: [
      {
        id: 'collar',
        title: 'Contrast Tipped Crewneck',
        image: '/assets/images/products/showcase/sports/junior-c1.webp',
      },
      {
        id: 'sleeve',
        title: 'Raglan Colorblock Sleeves',
        image: '/assets/images/products/showcase/sports/junior-c2.webp',
      },
      {
        id: 'graphic',
        title: 'Dynamic Soundwave Dot Graphic',
        image: '/assets/images/products/showcase/sports/junior-c3.webp',
      },
      {
        id: 'fabric',
        title: 'Performance Waffle Knit Fabric',
        image: '/assets/images/products/showcase/sports/junior-c4.webp',
      },
    ],
  },
];

export const BLANK_SLIDES: ShowcaseSlide[] = [
  {
    id: 'blank-hoodie',
    brand: 'Heavyweight Fleece Blank Hoodie',
    subtitle: 'Premium 340-400 GSM Unbranded Cotton Fleece Pullover for Private Labels',
    modelImage: '/assets/images/products/showcase/blank/hoodie-model.webp',
    details: [
      {
        id: 'hood',
        title: 'Double-Layered Hood with Drawstrings',
        image: '/assets/images/products/showcase/blank/hoodie-c1.webp',
      },
      {
        id: 'cuff',
        title: 'Heavyweight 2x2 Ribbed Cuffs',
        image: '/assets/images/products/showcase/blank/hoodie-c2.webp',
      },
      {
        id: 'pocket',
        title: 'Reinforced Kangaroo Pocket',
        image: '/assets/images/products/showcase/blank/hoodie-c3.webp',
      },
      {
        id: 'fleece',
        title: 'Brushed Inner Fleece Softness',
        image: '/assets/images/products/showcase/blank/hoodie-c4.webp',
      },
    ],
  },
  {
    id: 'blank-polo',
    brand: 'Classic Combed Pique Blank Polo',
    subtitle: 'High-Density 220-260 GSM Honeycomb Cotton Knit Ready for Embroidery',
    modelImage: '/assets/images/products/showcase/blank/polo-model.webp',
    details: [
      {
        id: 'collar',
        title: 'Structured Ribbed Knit Collar',
        image: '/assets/images/products/showcase/blank/polo-c1.webp',
      },
      {
        id: 'sleeve',
        title: 'Snug Tubular Sleeve Ribbing',
        image: '/assets/images/products/showcase/blank/polo-c2.webp',
      },
      {
        id: 'fabric',
        title: 'Mercerized Pique Honeycomb Texture',
        image: '/assets/images/products/showcase/blank/polo-c3.webp',
      },
      {
        id: 'waist',
        title: 'Double-Stitched Hem Finish',
        image: '/assets/images/products/showcase/blank/polo-c4.webp',
      },
    ],
  },
  {
    id: 'blank-oversized',
    brand: 'Streetwear Oversized Blank Tee',
    subtitle: '240 GSM Heavy Cotton Drop-Shoulder Boxy Silhouette for D2C Brands',
    modelImage: '/assets/images/products/showcase/blank/oversized-model.webp',
    details: [
      {
        id: 'neck',
        title: 'High-Neck Lycra Ribbed Collar',
        image: '/assets/images/products/showcase/blank/oversized-c1.webp',
      },
      {
        id: 'shoulder',
        title: 'Relaxed Drop-Shoulder Seam',
        image: '/assets/images/products/showcase/blank/oversized-c2.webp',
      },
      {
        id: 'sleeve',
        title: 'Elbow-Length Boxy Sleeve',
        image: '/assets/images/products/showcase/blank/oversized-c3.webp',
      },
      {
        id: 'cotton',
        title: '100% Combed Compact Cotton',
        image: '/assets/images/products/showcase/blank/oversized-c4.webp',
      },
    ],
  },
  {
    id: 'blank-crewneck',
    brand: 'Super Combed Blank Crewneck Tee',
    subtitle: '180-200 GSM Bio-Washed Everyday Essential Blank for Screen & DTF Printing',
    modelImage: '/assets/images/products/showcase/blank/crewneck-model.webp',
    details: [
      {
        id: 'rib',
        title: 'Reinforced 1x1 Spandex Neck Rib',
        image: '/assets/images/products/showcase/blank/crewneck-c1.webp',
      },
      {
        id: 'cuff',
        title: 'Twin-Needle Sleeve Stitching',
        image: '/assets/images/products/showcase/blank/crewneck-c2.webp',
      },
      {
        id: 'knit',
        title: 'Ultra-Smooth Bio-Wash Finish',
        image: '/assets/images/products/showcase/blank/crewneck-c3.webp',
      },
      {
        id: 'back',
        title: 'Tear-Away Satin Neck Label Area',
        image: '/assets/images/products/showcase/blank/crewneck-c4.webp',
      },
    ],
  },
];

interface ClientUniformShowcaseProps {
  slides?: ShowcaseSlide[];
  category?: 'corporate' | 'school' | 'promotional-events' | 'sports-academics' | 'blank' | string;
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
  const isSports =
    category === 'sports-academics' ||
    category === 'sports' ||
    category === 'academics';
  const isBlank = category === 'blank';

  const slides =
    propSlides ||
    (isBlank
      ? BLANK_SLIDES
      : isSports
        ? SPORTS_SLIDES
        : isPromotional
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

  const badgeText = isBlank
    ? 'Blank Apparel & Private Label Showcase'
    : isSports
      ? 'Athletic & Teamwear Showcase'
      : isPromotional
        ? 'Event & Merchandise Showcase'
        : isSchool
          ? 'Campus Uniform Showcase'
          : 'Client Uniform Showcase';

  const headingText = isBlank ? (
    <>
      Premium Blanks, Ready for{' '}
      <span className="font-heading font-black italic text-[#82132C]">Your Brand</span>
    </>
  ) : isSports ? (
    <>
      Performance Gear, Made for{' '}
      <span className="font-heading font-black italic text-[#82132C]">Your Team</span>
    </>
  ) : isPromotional ? (
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

  const subtitleText = isBlank
    ? 'From heavyweight fleece hoodies and pique polos to streetwear oversized tees and bio-washed crewnecks, explore our ready-stock wholesale blanks engineered for private labels and custom printers.'
    : isSports
      ? 'From moisture-wicking team jerseys to athletic training tracksuits, see how vibrant sublimation graphics, team numbers and performance mesh knits elevate every game.'
      : isPromotional
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
        <div className="hidden lg:flex items-center justify-between gap-4 xl:gap-6 h-full">
          {/* Left Column: Heading, Carousel Stage with Left-Staggered Models, Thin-line Loader */}
          <div className="flex-1 flex flex-col justify-between h-full py-2">
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
              className="relative my-auto flex items-end justify-end h-[500px] xl:h-[550px] w-full pr-1 overflow-visible"
              style={{ perspective: '1200px' }}
            >
              {/* Warm Soft Ambient Halo behind main model */}
              <div className="absolute top-1/2 right-12 xl:right-16 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-burgundy-100/35 via-warm-100/40 to-burgundy-50/20 blur-3xl pointer-events-none" />

              {/* Backward Option Button - Sleek Glassmorphic Circular Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous showcase slide"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/85 hover:bg-white backdrop-blur-md text-charcoal-700 hover:text-burgundy-700 border border-white/90 shadow-soft hover:shadow-soft-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
              </button>

              {/* Shaded Left Model 3 (Smallest, furthest left, decreasing size step, only when > 3 slides) */}
              {totalSlides > 3 && (
                <div
                  onClick={() => {
                    setProgress(0);
                    setCurrentIndex(leftIdx3);
                  }}
                  className="absolute left-10 xl:left-14 bottom-0 z-10 w-[170px] xl:w-[190px] h-[270px] xl:h-[295px] backdrop-blur-md bg-white/20 border border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-3xl p-1.5 flex items-end justify-center transition-all duration-700 hover:scale-[1.05] cursor-pointer"
                  title={`Switch to ${slides[leftIdx3].brand}`}
                >
                  <img
                    src={slides[leftIdx3].modelImage}
                    alt={slides[leftIdx3].brand}
                    className="w-full h-full object-contain object-bottom select-none filter grayscale-[35%] opacity-30 hover:opacity-60 transition-all duration-500"
                  />
                </div>
              )}

              {/* Shaded Left Model 2 (Medium small, mid-left, decreasing size step, only when > 2 slides) */}
              {totalSlides > 2 && (
                <div
                  onClick={() => {
                    setProgress(0);
                    setCurrentIndex(leftIdx2);
                  }}
                  className="absolute left-[160px] xl:left-[195px] bottom-0 z-15 w-[210px] xl:w-[235px] h-[340px] xl:h-[370px] backdrop-blur-md bg-white/25 border border-white/50 shadow-[0_6px_24px_rgba(0,0,0,0.04)] rounded-3xl p-2 flex items-end justify-center transition-all duration-700 hover:scale-[1.04] cursor-pointer"
                  title={`Switch to ${slides[leftIdx2].brand}`}
                >
                  <img
                    src={slides[leftIdx2].modelImage}
                    alt={slides[leftIdx2].brand}
                    className="w-full h-full object-contain object-bottom select-none filter grayscale-[22%] opacity-45 hover:opacity-75 transition-all duration-500"
                  />
                </div>
              )}

              {/* Shaded Left Model 1 (Immediately left of main model, decreasing size step, shown when > 1 slide) */}
              {totalSlides > 1 && (
                <div
                  onClick={() => {
                    setProgress(0);
                    setCurrentIndex(leftIdx1);
                  }}
                  className="absolute right-[330px] xl:right-[390px] bottom-0 z-20 w-[260px] xl:w-[295px] h-[415px] xl:h-[455px] backdrop-blur-md bg-white/35 border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-3xl p-2 flex items-end justify-center transition-all duration-700 hover:scale-[1.03] cursor-pointer"
                  title={`Switch to ${slides[leftIdx1].brand}`}
                >
                  <img
                    src={slides[leftIdx1].modelImage}
                    alt={slides[leftIdx1].brand}
                    className="w-full h-full object-contain object-bottom select-none filter grayscale-[12%] opacity-60 hover:opacity-90 transition-all duration-500"
                  />
                </div>
              )}

              {/* MAIN ACTIVE MODEL (Aligned on right side directly adjacent to 4 detail cards, in increased size, no glassmorphism container) */}
              <div
                className="relative z-30 w-[350px] lg:w-[390px] xl:w-[440px] h-[480px] xl:h-[530px] flex items-end justify-center transition-all duration-700 ease-out mr-3 xl:mr-4"
              >
                <img
                  key={currentSlide.id}
                  src={currentSlide.modelImage}
                  alt={`${currentSlide.brand} showcase`}
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.16)] transition-all duration-700 select-none"
                />
              </div>

              {/* Forward Option Button - Sleek Glassmorphic Circular Button */}
              <button
                onClick={handleNext}
                aria-label="Next showcase slide"
                className="absolute right-0 xl:right-1 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/85 hover:bg-white backdrop-blur-md text-charcoal-700 hover:text-burgundy-700 border border-white/90 shadow-soft hover:shadow-soft-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
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

          {/* Right Column: 4 Circular Colloidal Shaped Detail Cards with Glassmorphism and Animated on Slide Change */}
          <div className="w-[180px] xl:w-[210px] shrink-0 flex flex-col justify-center gap-2.5 xl:gap-3 my-auto z-30">
            {currentSlide.details.map((detail, idx) => {
              // Smooth Colloidal Circular Shapes
              const colloidalRadii = [
                'rounded-[38px_24px_38px_24px]',
                'rounded-[24px_38px_24px_38px]',
                'rounded-[36px_26px_36px_26px]',
                'rounded-[26px_36px_26px_36px]',
              ];
              return (
                <div
                  key={`${currentSlide.id}-${detail.id}-${idx}`}
                  className={`relative w-full aspect-[16/10] backdrop-blur-md bg-white/45 border-2 border-white/80 shadow-[0_8px_22px_rgba(88,8,25,0.08)] hover:shadow-[0_12px_28px_rgba(88,8,25,0.16)] transition-all duration-500 hover:scale-[1.04] p-1 overflow-hidden animate-colloidal-pop ${colloidalRadii[idx % 4]}`}
                  style={{
                    animationDelay: `${idx * 75}ms`,
                  }}
                >
                  <img
                    src={detail.image}
                    alt={detail.title}
                    className={`w-full h-full object-cover select-none ${colloidalRadii[idx % 4]}`}
                  />
                </div>
              );
            })}
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

          {/* Mobile Stage: Main Model positioned right-center, shaded models on left with glassmorphism */}
          <div
            className="relative py-2 flex items-end justify-end h-[300px] xs:h-[330px] sm:h-[360px] w-full overflow-hidden"
            style={{ perspective: '800px' }}
          >
            {/* Ambient Glow */}
            <div className="absolute top-1/2 right-12 -translate-y-1/2 w-[220px] h-[220px] rounded-full bg-burgundy-100/35 blur-2xl pointer-events-none" />

            {/* Mobile Backward Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous showcase slide"
              className="absolute left-1 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/85 hover:bg-white backdrop-blur-md text-charcoal-700 hover:text-burgundy-700 border border-white/90 shadow-soft flex items-center justify-center cursor-pointer transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Left Shaded Model 2 (only when > 2 slides) */}
            {totalSlides > 2 && (
              <div
                onClick={() => {
                  setProgress(0);
                  setCurrentIndex(leftIdx2);
                }}
                className="absolute left-2 bottom-0 z-10 w-[95px] xs:w-[110px] h-[180px] xs:h-[200px] backdrop-blur-md bg-white/25 border border-white/45 shadow-2xs rounded-2xl p-1 flex items-end justify-center transition-all duration-500 cursor-pointer"
              >
                <img
                  src={slides[leftIdx2].modelImage}
                  alt={slides[leftIdx2].brand}
                  className="w-full h-full object-contain object-bottom select-none filter grayscale-[30%] opacity-35"
                />
              </div>
            )}

            {/* Left Shaded Model 1 (shown when > 1 slide) */}
            {totalSlides > 1 && (
              <div
                onClick={() => {
                  setProgress(0);
                  setCurrentIndex(leftIdx1);
                }}
                className="absolute left-[70px] xs:left-[85px] sm:left-[115px] bottom-0 z-15 w-[125px] xs:w-[140px] sm:w-[160px] h-[220px] xs:h-[250px] sm:h-[280px] backdrop-blur-md bg-white/35 border border-white/55 shadow-soft rounded-2xl p-1.5 flex items-end justify-center transition-all duration-500 cursor-pointer"
              >
                <img
                  src={slides[leftIdx1].modelImage}
                  alt={slides[leftIdx1].brand}
                  className="w-full h-full object-contain object-bottom select-none filter grayscale-[18%] opacity-55"
                />
              </div>
            )}

            {/* Active Main Model: Aligned near right side on mobile, increased size, uncropped, grounded */}
            <div className="relative z-20 w-[190px] xs:w-[215px] sm:w-[245px] h-[280px] xs:h-[310px] sm:h-[340px] mr-3 xs:mr-5 flex items-end justify-center">
              <img
                key={currentSlide.id}
                src={currentSlide.modelImage}
                alt={`${currentSlide.brand} showcase`}
                className="w-full h-full object-contain object-bottom drop-shadow-[0_14px_24px_rgba(0,0,0,0.14)] transition-all duration-500 select-none"
              />
            </div>

            {/* Mobile Forward Button */}
            <button
              onClick={handleNext}
              aria-label="Next showcase slide"
              className="absolute right-1 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/85 hover:bg-white backdrop-blur-md text-charcoal-700 hover:text-burgundy-700 border border-white/90 shadow-soft flex items-center justify-center cursor-pointer transition-all active:scale-95"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.2]" />
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

          {/* 4 Circular Colloidal Shaped Detail Cards on Mobile with Glassmorphism and Animation */}
          <div className="grid grid-cols-4 gap-2 xs:gap-2.5 max-w-md mx-auto w-full pt-1 px-1">
            {currentSlide.details.map((detail, idx) => {
              const colloidalRadii = [
                'rounded-[24px_16px_24px_16px]',
                'rounded-[16px_24px_16px_24px]',
                'rounded-[22px_18px_22px_18px]',
                'rounded-[18px_22px_18px_22px]',
              ];
              return (
                <div
                  key={`${currentSlide.id}-mobile-${detail.id}-${idx}`}
                  className={`relative backdrop-blur-md bg-white/50 border border-white/80 shadow-[0_4px_12px_rgba(88,8,25,0.08)] aspect-square p-0.5 overflow-hidden animate-colloidal-pop ${colloidalRadii[idx % 4]}`}
                  style={{
                    animationDelay: `${idx * 60}ms`,
                  }}
                >
                  <img
                    src={detail.image}
                    alt={detail.title}
                    className={`w-full h-full object-cover select-none ${colloidalRadii[idx % 4]}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientUniformShowcase;
