import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SectorCardItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  categorySlug: string;
  bg: string;
  cardHeight: string;
  cardWidth: string;
  cardTopOffset: string;
  borderRadius: string;
}

const sectorCards: SectorCardItem[] = [
  {
    id: 'corporate-event',
    badge: 'CORPORATE EVENT',
    title: 'Corporate Event Apparel',
    subtitle: 'Executive Polos with Identity Lanyards',
    image: '/assets/images/sector-corporate-event.webp',
    categorySlug: 'corporate',
    bg: '#FCEEF0',
    cardHeight: 'h-[255px] sm:h-[280px] lg:h-[305px]',
    cardWidth: 'w-[145px] sm:w-[165px] lg:w-[180px]',
    cardTopOffset: 'mt-[72px] sm:mt-[84px] lg:mt-[96px]',
    borderRadius: 'rounded-[26px] sm:rounded-[30px] lg:rounded-[32px]',
  },
  {
    id: 'promotional-apparel',
    badge: 'PROMOTIONAL APPAREL',
    title: 'Promotional Event Wear',
    subtitle: 'Premium Hoodies & Custom Campaign Merch',
    image: '/assets/images/sector-promotional-apparel.webp',
    categorySlug: 'promotional',
    bg: '#FDF1F3',
    cardHeight: 'h-[275px] sm:h-[300px] lg:h-[325px]',
    cardWidth: 'w-[150px] sm:w-[170px] lg:w-[185px]',
    cardTopOffset: 'mt-[34px] sm:mt-[40px] lg:mt-[46px]',
    borderRadius: 'rounded-[30px] sm:rounded-[34px] lg:rounded-[36px]',
  },
  {
    id: 'corporate-sector',
    badge: 'CORPORATE SECTOR',
    title: 'Corporate Uniforms & Staff',
    subtitle: 'Mercerized Cotton Executive Workwear',
    image: '/assets/images/sectors/sector-corporate.png',
    categorySlug: 'corporate',
    bg: '#FCF4EB',
    cardHeight: 'h-[365px] sm:h-[395px] lg:h-[425px]',
    cardWidth: 'w-[230px] sm:w-[260px] lg:w-[285px]',
    cardTopOffset: 'mt-0',
    borderRadius: 'rounded-[36px] sm:rounded-[40px] lg:rounded-[44px]',
  },
  {
    id: 'academics-schools',
    badge: 'ACADEMICS & SCHOOLS',
    title: 'Academics & School Collections',
    subtitle: 'Durable Bio-Wash Uniforms & House Kits',
    image: '/assets/images/sectors/sector-education.png',
    categorySlug: 'school',
    bg: '#FDF1F3',
    cardHeight: 'h-[275px] sm:h-[300px] lg:h-[325px]',
    cardWidth: 'w-[150px] sm:w-[170px] lg:w-[185px]',
    cardTopOffset: 'mt-[34px] sm:mt-[40px] lg:mt-[46px]',
    borderRadius: 'rounded-[30px] sm:rounded-[34px] lg:rounded-[36px]',
  },
  {
    id: 'sports-athletics',
    badge: 'SPORTS & ATHLETICS',
    title: 'Sports & Athletic Teams',
    subtitle: 'Breathable Dry-Fit Kits & Sublimation Tees',
    image: '/assets/images/sectors/sector-sports.png',
    categorySlug: 'sports',
    bg: '#FCEEF0',
    cardHeight: 'h-[255px] sm:h-[280px] lg:h-[305px]',
    cardWidth: 'w-[145px] sm:w-[165px] lg:w-[180px]',
    cardTopOffset: 'mt-[72px] sm:mt-[84px] lg:mt-[96px]',
    borderRadius: 'rounded-[26px] sm:rounded-[30px] lg:rounded-[32px]',
  },
];

export const SectorShowcase: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState(2); // Start with Corporate Sector (center)

  // Smooth mobile auto-slide loop
  useEffect(() => {
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % sectorCards.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-white text-charcoal-900 overflow-hidden pt-10 sm:pt-14 lg:pt-16 pb-14 sm:pb-18 lg:pb-24 select-none">
      
      {/* Background Bottom Wave Created in SVG matching Reference Image */}
      <div className="absolute bottom-0 inset-x-0 w-full pointer-events-none select-none z-0 overflow-hidden leading-none">
        <svg
          className="w-full h-auto min-h-[85px] sm:min-h-[115px] lg:min-h-[140px] block"
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Rose Accent Stroke along the wave crest */}
          <path
            d="M 0 85 C 260 155, 450 150, 720 138 C 990 126, 1220 118, 1440 142"
            stroke="#DEB7C4"
            strokeWidth="5"
            fill="none"
          />
          {/* Deep Burgundy Wave matching TeesZone Brand Colors */}
          <path
            d="M 0 87 C 260 157, 450 152, 720 140 C 990 128, 1220 120, 1440 144 L 1440 160 L 0 160 Z"
            fill="#7A0027"
          />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER: Matches Reference Exactly                */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCECEF] border border-[#F8D2D9] mb-2.5 shadow-2xs mx-auto">
            <span className="w-3.5 h-[1.5px] bg-[#82132C] rounded-full inline-block" />
            <span className="text-[11px] sm:text-xs font-heading font-extrabold uppercase tracking-wider text-[#82132C]">
              Custom T-Shirts For Every Sector
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-heading font-black tracking-tight leading-[1.12] text-charcoal-900">
            Stay Branded, <span className="text-[#82132C]">Stay Professional</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-charcoal-600 font-normal mt-2 max-w-2xl leading-relaxed mx-auto">
            Engineered uniforms and custom apparel specifically crafted for your industry's standards, complete with high-definition embroidery and durable fabric weaves.
          </p>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW: Exact Floating Stepped Arch (Image 2)     */}
        {/* ======================================================== */}
        <div className="hidden md:flex items-start justify-center gap-2.5 sm:gap-3 lg:gap-3.5 pt-2 pb-6 relative z-10 max-w-[1100px] mx-auto">
          {sectorCards.map((sector, index) => {
            const isHero = sector.id === 'corporate-sector';
            const isHovered = hoveredIndex === index;

            return (
              <Link
                key={sector.id}
                to={`/category/${sector.categorySlug}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative flex flex-col justify-between overflow-hidden transition-all duration-300 ease-out cursor-pointer ${
                  sector.cardHeight
                } ${sector.cardWidth} ${sector.cardTopOffset} ${sector.borderRadius} ${
                  isHovered
                    ? '-translate-y-2 shadow-[0_20px_38px_rgba(122,0,39,0.18)] ring-2 ring-[#82132C]/30'
                    : isHero
                    ? 'shadow-[0_12px_28px_rgba(122,0,39,0.12)] ring-1 ring-[#82132C]/15'
                    : 'shadow-[0_6px_18px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.04]'
                }`}
                style={{ backgroundColor: sector.bg }}
              >
                {/* Top Floating Badge */}
                <div className="relative z-20 flex justify-center pt-3 sm:pt-3.5 px-2">
                  <span className="bg-[#82132C] group-hover:bg-[#6c0f24] text-white font-heading font-extrabold text-[8.5px] sm:text-[9.5px] lg:text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-2xs whitespace-nowrap transition-colors duration-200">
                    {sector.badge}
                  </span>
                </div>

                {/* Model Cutout Image (Clean Transparent Background) */}
                <div className="relative flex-1 w-full flex items-end justify-center overflow-hidden">
                  <img
                    src={sector.image}
                    alt={`${sector.title} custom apparel models front and back`}
                    className="w-full h-full object-contain object-bottom transition-transform duration-300 ease-out group-hover:scale-104"
                    loading="lazy"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* MOBILE VIEW: Clean Centered Card Showcase with Dots      */}
        {/* ======================================================== */}
        <div className="md:hidden relative w-full pt-2 pb-2 z-10">
          <div className="flex items-center justify-center">
            <Link
              to={`/category/${sectorCards[mobileIndex].categorySlug}`}
              className="w-[260px] sm:w-[280px] h-[340px] sm:h-[370px] rounded-[32px] p-2.5 flex flex-col justify-between shadow-[0_12px_28px_rgba(122,0,39,0.14)] ring-1 ring-[#82132C]/20 transition-all duration-300 relative overflow-hidden"
              style={{ backgroundColor: sectorCards[mobileIndex].bg }}
            >
              {/* Badge */}
              <div className="relative z-20 flex justify-center pt-2">
                <span className="bg-[#82132C] text-white font-heading font-extrabold text-[9px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-2xs whitespace-nowrap">
                  {sectorCards[mobileIndex].badge}
                </span>
              </div>

              {/* Model Cutout Image */}
              <div className="relative flex-1 w-full flex items-end justify-center overflow-hidden">
                <img
                  src={sectorCards[mobileIndex].image}
                  alt={sectorCards[mobileIndex].title}
                  className="w-full h-full object-contain object-bottom"
                  loading="lazy"
                />
              </div>

              {/* Action Button */}
              <div className="relative z-20 pt-1 pb-1 flex justify-center">
                <span className="inline-flex items-center justify-center gap-1.5 py-1.5 px-4 rounded-full bg-[#82132C] text-white font-heading font-semibold text-xs shadow-2xs">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {sectorCards.map((sector, idx) => (
              <button
                key={sector.id}
                onClick={() => setMobileIndex(idx)}
                aria-label={`Select ${sector.badge}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === mobileIndex
                    ? 'w-5 bg-[#82132C]'
                    : 'w-1.5 bg-[#82132C]/30'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SectorShowcase;
