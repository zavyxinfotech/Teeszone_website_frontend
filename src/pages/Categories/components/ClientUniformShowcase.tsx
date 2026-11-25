import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  {
    id: 'pro-training',
    brand: 'Pro Athletic Speedwear',
    subtitle: 'High-Velocity Engineered Sublimation Knit & Compression Trackwear',
    modelImage: '/assets/images/products/showcase/sports/adult-model.webp',
    details: [
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
    ],
  },
  {
    id: 'club-active',
    brand: 'Club League Performance Kit',
    subtitle: 'Youth & Adult Sublimation Team Graphics with Anti-Microbial Finish',
    modelImage: '/assets/images/products/showcase/sports/junior-model.webp',
    details: [
      {
        id: 'graphic',
        title: 'Dynamic Soundwave Dot Graphic',
        image: '/assets/images/products/showcase/sports/junior-c3.webp',
      },
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

  // 4 positions from left to right:
  // Position 1 (Far Left / 4th from right, Smallest): (currentIndex + 3) % totalSlides
  // Position 2 (Mid-left / 3rd from right, Medium-small): (currentIndex + 2) % totalSlides
  // Position 3 (Mid-right / 2nd from right, Medium-large): (currentIndex + 1) % totalSlides
  // Position 4 (Far Right / 1st from right, Largest/Active): currentIndex
  // When Next is clicked:
  // - Pos 3 (Right 2nd) moves to Pos 4 (Right 1st) and becomes the largest!
  // - Pos 4 (Right 1st) wraps around to Pos 1 (Far Left) and takes the smallest size!
  const pos1Idx = (currentIndex + 3) % totalSlides;
  const pos2Idx = (currentIndex + 2) % totalSlides;
  const pos3Idx = (currentIndex + 1) % totalSlides;
  const pos4Idx = currentIndex;

  const slideDuration = 3800; // 3.8s smooth auto-scroll

  const handleNext = useCallback(() => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // IntersectionObserver to auto-scroll when user scrolls into this section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
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
        if (prev + step >= 100) {
          setCurrentIndex((curr) => (curr + 1) % totalSlides);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView, isPaused, totalSlides, slideDuration]);

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
      className="relative w-full h-auto lg:h-[86vh] lg:max-h-[820px] lg:min-h-[640px] flex flex-col justify-between py-4 lg:py-5 bg-[#FFFDF9] select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label={badgeText}
    >
      <style>{`
        @keyframes colloidalPop {
          0% {
            opacity: 0;
            transform: scale(0.88) translateY(10px);
            border-radius: 20px;
          }
          60% {
            opacity: 0.95;
            transform: scale(1.03) translateY(-2px);
            border-radius: 36px;
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            border-radius: 32px;
          }
        }
      `}</style>
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col justify-between h-full">
        {/* DESKTOP VIEW (Full Width, Clear Well-Spaced Models, Colloidal Cards, Clean Nav) */}
        <div className="hidden lg:flex items-center justify-between gap-6 xl:gap-10 h-full w-full">
          {/* Left / Main Showcase Area */}
          <div className="flex-1 flex flex-col justify-between h-full w-full py-2">
            {/* Header Content */}
            <div className="text-left space-y-2 z-30">
              <span className="text-xs sm:text-[13px] font-heading font-extrabold uppercase tracking-widest text-[#82132C] block">
                {badgeText}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-heading font-black tracking-tight text-charcoal-900 leading-[1.08]">
                {headingText}
              </h2>
              <p className="text-sm sm:text-base lg:text-[17px] text-charcoal-600 font-normal leading-relaxed max-w-3xl">
                {subtitleText}
              </p>
            </div>

            {/* Showcase Stage: Evenly Distributed Runway Spacing with Strict Decreasing Sizes */}
            <div
              className="relative my-auto flex items-end justify-center h-[420px] xl:h-[470px] w-full pb-1 select-none"
            >
              {/* Backward Navigation Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous showcase slide"
                className="absolute -left-3 xl:-left-5 top-1/2 -translate-y-1/2 z-40 p-2 text-charcoal-500 hover:text-burgundy-700 bg-transparent border-none shadow-none flex items-center justify-center transition-all duration-200 hover:scale-125 cursor-pointer"
              >
                <ChevronLeft className="w-8 h-8 stroke-[2.2]" />
              </button>

              {/* Models Runway Row: Strict Decreasing Order of Size & Height from Right to Left */}
              <div
                className={`w-full h-full flex items-end ${
                  totalSlides > 2 ? 'justify-between' : 'justify-end gap-16 xl:gap-24'
                } px-3 xl:px-6`}
              >
                {/* Position 1: Leftmost / 4th from right (SMALLEST in height and width) */}
                {totalSlides > 3 && (
                  <div
                    onClick={() => {
                      setProgress(0);
                      setCurrentIndex(pos1Idx);
                    }}
                    className="flex flex-col items-center justify-end w-[15%] xl:w-[16%] max-w-[170px] xl:max-w-[195px] mb-8 xl:mb-10 cursor-pointer transition-all duration-700 hover:scale-[1.05] group shrink-0"
                    style={{
                      opacity: 0.35,
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.06)) blur(0.5px) grayscale(15%)',
                    }}
                    title={`Switch to ${slides[pos1Idx].brand}`}
                  >
                    <img
                      src={slides[pos1Idx].modelImage}
                      alt={slides[pos1Idx].brand}
                      className="w-full h-auto max-h-[220px] xl:max-h-[250px] object-contain select-none transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                )}

                {/* Position 2: Mid-left / 3rd from right (Visibly smaller than Position 3) */}
                {totalSlides > 2 && (
                  <div
                    onClick={() => {
                      setProgress(0);
                      setCurrentIndex(pos2Idx);
                    }}
                    className="flex flex-col items-center justify-end w-[20%] xl:w-[21%] max-w-[220px] xl:max-w-[250px] mb-5 xl:mb-7 cursor-pointer transition-all duration-700 hover:scale-[1.05] group shrink-0"
                    style={{
                      opacity: 0.55,
                      filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.08)) blur(0.2px) grayscale(8%)',
                    }}
                    title={`Switch to ${slides[pos2Idx].brand}`}
                  >
                    <img
                      src={slides[pos2Idx].modelImage}
                      alt={slides[pos2Idx].brand}
                      className="w-full h-auto max-h-[285px] xl:max-h-[320px] object-contain select-none transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                )}

                {/* Position 3: Mid-right / 2nd from right (Visibly smaller than Position 4, but bigger than Position 2) */}
                {totalSlides > 1 && (
                  <div
                    onClick={() => {
                      setProgress(0);
                      setCurrentIndex(pos3Idx);
                    }}
                    className="flex flex-col items-center justify-end w-[25%] xl:w-[26%] max-w-[280px] xl:max-w-[315px] mb-2 xl:mb-3 cursor-pointer transition-all duration-700 hover:scale-[1.05] group shrink-0"
                    style={{
                      opacity: 0.78,
                      filter: 'drop-shadow(0 10px 18px rgba(0,0,0,0.12))',
                    }}
                    title={`Switch to ${slides[pos3Idx].brand}`}
                  >
                    <img
                      src={slides[pos3Idx].modelImage}
                      alt={slides[pos3Idx].brand}
                      className="w-full h-auto max-h-[355px] xl:max-h-[395px] object-contain select-none transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                )}

                {/* Position 4: Right 1st / Active (BIGGEST in height and width) */}
                <div
                  className="flex flex-col items-center justify-end w-[31%] xl:w-[32%] max-w-[340px] xl:max-w-[385px] mb-0 transition-all duration-700 ease-out z-30 shrink-0"
                >
                  <img
                    key={currentSlide.id}
                    src={slides[pos4Idx].modelImage}
                    alt={`${slides[pos4Idx].brand} showcase`}
                    className="w-full h-auto max-h-[425px] xl:max-h-[475px] object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.18)] select-none"
                  />
                </div>
              </div>

              {/* Forward Navigation Button */}
              <button
                onClick={handleNext}
                aria-label="Next showcase slide"
                className="absolute -right-3 xl:-right-5 top-1/2 -translate-y-1/2 z-40 p-2 text-charcoal-500 hover:text-burgundy-700 bg-transparent border-none shadow-none flex items-center justify-center transition-all duration-200 hover:scale-125 cursor-pointer"
              >
                <ChevronRight className="w-8 h-8 stroke-[2.2]" />
              </button>
            </div>

            {/* Bottom Loader Option: Positioned Clearly Inside Desktop Screen Height */}
            <div className="flex items-center gap-2.5 pt-1.5 pb-1 z-30">
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

          {/* Right Column: 4 Circular Colloidal Shaped Detail Cards with Re-triggering Entry Animation */}
          <div className="w-[185px] xl:w-[220px] shrink-0 flex flex-col justify-center gap-3 xl:gap-3.5 my-auto">
            {currentSlide.details.map((detail, idx) => (
              <div
                key={`${currentSlide.id}-${detail.id}-${idx}`}
                className="group relative w-full overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(130,19,44,0.18)] transition-all duration-500 hover:scale-[1.03] aspect-[16/10] bg-transparent"
                style={{
                  borderRadius: '32px',
                  animation: `colloidalPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 60}ms both`,
                }}
              >
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full h-full object-cover scale-[1.12] transition-transform duration-500 group-hover:scale-[1.18]"
                  style={{
                    borderRadius: '32px',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE & TABLET VIEW (Responsive Staggered Shaded Models & 4 Colloidal Cards) */}
        <div className="lg:hidden flex flex-col space-y-4 text-left py-4 my-auto w-full">
          {/* Header Content */}
          <div className="space-y-1.5">
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#82132C] block">
              {badgeText}
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-charcoal-900 leading-[1.12]">
              {headingText}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-normal leading-relaxed max-w-lg">
              {subtitleText}
            </p>
          </div>

          {/* 4 Circular Colloidal Shaped Detail Cards on Mobile (Positioned ABOVE Model Images) */}
          <div className="grid grid-cols-4 gap-2 xs:gap-2.5 max-w-md mx-auto w-full pt-1 pb-1 px-1">
            {currentSlide.details.map((detail, idx) => (
              <div
                key={`${currentSlide.id}-mobile-${detail.id}-${idx}`}
                className="relative overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.10)] aspect-square bg-transparent"
                style={{
                  borderRadius: '24px',
                  animation: `colloidalPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 60}ms both`,
                }}
              >
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full h-full object-cover scale-[1.12]"
                  style={{ borderRadius: '24px' }}
                />
              </div>
            ))}
          </div>

          {/* Mobile Stage: Evenly Spaced Runway Models Following Image 2 */}
          <div
            className="relative py-2 flex items-end justify-center min-h-[300px] xs:min-h-[330px] w-full px-1"
          >
            {/* Mobile Backward Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous showcase slide"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-1.5 text-charcoal-500 hover:text-burgundy-700 bg-transparent border-none shadow-none flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.2]" />
            </button>

            {/* Mobile Runway Models Container with Even Spacing and Perspective Axis */}
            <div className="w-full max-w-sm sm:max-w-md mx-auto flex items-end justify-center gap-3 xs:gap-4 sm:gap-6 px-6">
              {/* Position 2 (tablet / wider screens sm:) */}
              {totalSlides > 2 && (
                <div
                  onClick={() => {
                    setProgress(0);
                    setCurrentIndex(pos2Idx);
                  }}
                  className="hidden sm:flex flex-col items-center justify-end w-[24%] max-w-[120px] mb-4 cursor-pointer transition-all duration-500 hover:scale-[1.04]"
                  style={{
                    opacity: 0.35,
                    filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.08)) blur(0.4px)',
                  }}
                  title={`Switch to ${slides[pos2Idx].brand}`}
                >
                  <img
                    src={slides[pos2Idx].modelImage}
                    alt={slides[pos2Idx].brand}
                    className="w-full h-auto max-h-[200px] object-contain select-none"
                  />
                </div>
              )}

              {/* Position 3 (Mobile 2nd from right, smaller than main model) */}
              {totalSlides > 1 && (
                <div
                  onClick={() => {
                    setProgress(0);
                    setCurrentIndex(pos3Idx);
                  }}
                  className="flex flex-col items-center justify-end w-[40%] sm:w-[32%] max-w-[155px] mb-2 cursor-pointer transition-all duration-500 hover:scale-[1.04]"
                  style={{
                    opacity: 0.60,
                    filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.10))',
                  }}
                  title={`Switch to ${slides[pos3Idx].brand}`}
                >
                  <img
                    src={slides[pos3Idx].modelImage}
                    alt={slides[pos3Idx].brand}
                    className="w-full h-auto max-h-[245px] xs:max-h-[270px] object-contain select-none"
                  />
                </div>
              )}

              {/* Position 4: Active Main Model (Largest on mobile) */}
              <div
                className="flex flex-col items-center justify-end w-[56%] sm:w-[44%] max-w-[215px] xs:max-w-[235px] mb-0 transition-all duration-500"
              >
                <img
                  key={currentSlide.id}
                  src={slides[pos4Idx].modelImage}
                  alt={`${slides[pos4Idx].brand} showcase`}
                  className="w-full h-auto max-h-[305px] xs:max-h-[335px] object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.16)] transition-all duration-500 select-none"
                />
              </div>
            </div>

            {/* Mobile Forward Button */}
            <button
              onClick={handleNext}
              aria-label="Next showcase slide"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-1.5 text-charcoal-500 hover:text-burgundy-700 bg-transparent border-none shadow-none flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.2]" />
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
        </div>
      </div>
    </section>
  );
};

export default ClientUniformShowcase;
