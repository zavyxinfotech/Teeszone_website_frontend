import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Building2, Store, Factory, ChevronLeft, ChevronRight } from 'lucide-react';

interface LocationItem {
  id: string;
  name: string;
  category: string;
  shortLabel: string;
  type: 'office' | 'franchise' | 'factory';
  description: string;
  image: string;
  coords: { x: number; y: number }; // Percentage relative to map container
  labelOffset: { x: number; y: number };
}

// 5 Official Locations (Chunguvachtram completely removed)
const LOCATIONS: LocationItem[] = [
  {
    id: 'erode',
    name: 'Erode Tex Valley',
    category: 'Corporate Office',
    shortLabel: 'Corporate Office',
    type: 'office',
    description:
      'Our corporate headquarters at Erode Tex Valley, driving innovation, operations, and growth across all locations.',
    image: '/assets/images/locations/erode-tex-valley.jpg',
    coords: { x: 30.5, y: 67.5 },
    labelOffset: { x: 18, y: -8 },
  },
  {
    id: 'chennai',
    name: 'Chennai',
    category: 'Franchise',
    shortLabel: 'Franchise',
    type: 'franchise',
    description:
      'Serving metropolitan brands, IT parks, and corporate enterprises across Chennai with prompt turnaround and doorstep service.',
    image: '/assets/images/locations/chennai.jpg',
    coords: { x: 77.0, y: 19.5 },
    labelOffset: { x: 18, y: -6 },
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    category: 'Franchise',
    shortLabel: 'Franchise',
    type: 'franchise',
    description:
      'Delivering premium custom apparel, branded hoodies, and corporate uniforms to India’s leading tech hubs and startups.',
    image: '/assets/images/locations/bengaluru.jpg',
    coords: { x: 26.5, y: 23.5 },
    labelOffset: { x: 18, y: -6 },
  },
  {
    id: 'kanchipuram',
    name: 'Kanchipuram',
    category: 'Franchise',
    shortLabel: 'Franchise',
    type: 'franchise',
    description:
      'Expanding our dedicated franchise presence into Kanchipuram, offering bulk customized T-shirts and institutional apparel.',
    image: '/assets/images/locations/kanchipuram.jpg',
    coords: { x: 59.0, y: 44.0 },
    labelOffset: { x: 18, y: -6 },
  },
  {
    id: 'tiruppur',
    name: 'Tiruppur',
    category: 'Manufacturing Factory',
    shortLabel: 'Factory',
    type: 'factory',
    description:
      'Our state-of-the-art manufacturing powerhouse in Tiruppur featuring precision knitting, bio-washing, and high-capacity screen printing.',
    image: '/assets/images/locations/tiruppur.jpg',
    coords: { x: 57.0, y: 79.5 },
    labelOffset: { x: 18, y: -6 },
  },
];

export const ExpansionJourney: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('erode');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const activeId = hoveredId || selectedId;
  const activeLocation = LOCATIONS.find((loc) => loc.id === activeId) || LOCATIONS[0];
  const activeIndex = LOCATIONS.findIndex((loc) => loc.id === activeLocation.id);

  // Cycle on mobile/tablet or keyboard navigation
  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + LOCATIONS.length) % LOCATIONS.length;
    setSelectedId(LOCATIONS[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % LOCATIONS.length;
    setSelectedId(LOCATIONS[nextIndex].id);
  };

  return (
    <section
      id="expansion-journey"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFDFD] via-[#FDF5F6] to-[#FAF0F2] py-10 sm:py-14 lg:py-16 select-none"
      aria-label="TeesZone Presence Across India"
    >
      {/* 3D Pin Rotation Keyframe Animation with Realistic Lighting */}
      <style>{`
        @keyframes pinRotate3D {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
        @keyframes pinLightingGlow {
          0%, 100% {
            filter: brightness(1) drop-shadow(0 4px 8px rgba(128, 1, 31, 0.25));
          }
          25% {
            filter: brightness(1.15) drop-shadow(2px 5px 10px rgba(128, 1, 31, 0.35));
          }
          50% {
            filter: brightness(0.92) drop-shadow(0 4px 6px rgba(128, 1, 31, 0.2));
          }
          75% {
            filter: brightness(1.12) drop-shadow(-2px 5px 10px rgba(128, 1, 31, 0.35));
          }
        }
        .pin-rotator {
          transform-style: preserve-3d;
          perspective: 900px;
          animation: pinRotate3D 4.2s linear infinite, pinLightingGlow 4.2s ease-in-out infinite;
          transform-origin: 50% 92.8%;
          will-change: transform, filter;
          backface-visibility: visible;
        }
        @media (prefers-reduced-motion: reduce) {
          .pin-rotator {
            animation: none !important;
          }
        }
      `}</style>

      {/* Subtle Background Ribbon Curves (Clean & Minimal without Heavy Glows) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-15"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <path
            d="M-50,220 C320,120 540,320 920,160 C1220,40 1360,260 1520,180"
            fill="none"
            stroke="#80011F"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />
          <path
            d="M-40,680 C260,540 620,720 1020,580 C1280,480 1420,620 1550,560"
            fill="none"
            stroke="#80011F"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            UPPER SECTION (COMPLETELY PRESERVED & UNTOUCHED):
            - Top-Left: Logo, OUR LOCATIONS eyebrow, Big Heading, Description, 2 Stat Badges
            - Right/Center: 3D India Map with rotating 3D burgundy pins, labels & dotted arcs
            - Chunguvachtram REMOVED completely (only 5 locations remain)
            ========================================================================= */}
        <div className="hidden lg:block">
          
          {/* Top Row: Left Content Column + Right 3D Map Area */}
          <div className="grid grid-cols-12 gap-8 items-center mb-6 xl:mb-8">
            
            {/* Left Content Column */}
            <div className="col-span-5 space-y-5 text-left pr-4">
              
              {/* TeesZone Official Brand Logo */}
              <div className="inline-block">
                <img
                  src="/assets/logo/teeszone-logo.png"
                  alt="TeesZone - Elevate Your Style with Custom Tees"
                  className="h-9 w-auto object-contain"
                />
              </div>

              {/* Eyebrow Label with Accent Line */}
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.28em] font-extrabold text-[#80011F]">
                  OUR LOCATIONS
                </span>
                <span className="w-12 h-[2px] bg-[#80011F]/30 rounded-full" />
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl xl:text-5xl font-black text-[#1F1F1F] tracking-tight leading-[1.12]">
                Our Presence <br />
                <span className="text-[#80011F]">Across India</span>
              </h2>

              {/* Descriptive Subtitle */}
              <p className="text-base text-gray-600 leading-relaxed max-w-md font-normal">
                A growing network of franchisees and state-of-the-art facilities, bringing
                TeesZone closer to you.
              </p>

              {/* Stat & Facility Highlights */}
              <div className="flex items-center gap-6 pt-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#80011F]/10 flex items-center justify-center text-[#80011F]">
                    <Store className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-gray-900 leading-tight">5 Franchise</div>
                    <div className="text-xs text-gray-500 font-semibold">Locations</div>
                  </div>
                </div>

                <div className="w-[1px] h-9 bg-gray-200" />

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#80011F]/10 flex items-center justify-center text-[#80011F]">
                    <Factory className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-gray-900 leading-tight">Manufacturing</div>
                    <div className="text-xs text-gray-500 font-semibold">Excellence</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Prominent 3D India Map Model with 5 Pins & Labels */}
            <div className="col-span-7 relative">
              <div className="relative w-full max-w-[700px] mx-auto aspect-[1024/580]">
                
                {/* 3D Map Base Model */}
                <motion.img
                  src="/assets/images/locations/map-3d-model.png"
                  alt="TeesZone 3D India Presence Map"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_16px_28px_rgba(128,1,31,0.12)]"
                />

                {/* Connecting Dotted Route Arcs Between 5 Locations (Chunguvachtram Removed) */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  {/* Bengaluru to Erode */}
                  <path
                    d="M 27 25 Q 26 48 30.5 67.5"
                    fill="none"
                    stroke="#80011F"
                    strokeWidth="0.45"
                    strokeDasharray="1.2 1.2"
                    strokeOpacity="0.45"
                  />
                  {/* Erode to Tiruppur */}
                  <path
                    d="M 30.5 67.5 Q 43 76 57 79.5"
                    fill="none"
                    stroke="#80011F"
                    strokeWidth="0.45"
                    strokeDasharray="1.2 1.2"
                    strokeOpacity="0.45"
                  />
                  {/* Erode to Kanchipuram */}
                  <path
                    d="M 30.5 67.5 Q 44 54 59 44"
                    fill="none"
                    stroke="#80011F"
                    strokeWidth="0.45"
                    strokeDasharray="1.2 1.2"
                    strokeOpacity="0.45"
                  />
                  {/* Kanchipuram to Chennai */}
                  <path
                    d="M 59 44 Q 68 31 77 19.5"
                    fill="none"
                    stroke="#80011F"
                    strokeWidth="0.45"
                    strokeDasharray="1.2 1.2"
                    strokeOpacity="0.45"
                  />
                </svg>

                {/* 5 Geographically Positioned 3D Rotating Location Pins & Interactive Labels */}
                {LOCATIONS.map((loc) => {
                  const isSelected = activeId === loc.id;
                  const isErode = loc.id === 'erode';

                  return (
                    <div
                      key={loc.id}
                      className="absolute z-20 cursor-pointer group"
                      style={{
                        left: `${loc.coords.x}%`,
                        top: `${loc.coords.y}%`,
                        transform: 'translate(-50%, -92.8%)',
                      }}
                      onMouseEnter={() => setHoveredId(loc.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => setSelectedId(loc.id)}
                    >
                      {/* Floor Beacon Ring: Anchored to Pointed Bottom Tip */}
                      <div className="absolute left-1/2 top-[92.8%] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                        <img
                          src="/assets/images/locations/pin-beacon-ring.png"
                          alt=""
                          className={`w-11 h-5 object-contain -translate-y-1/2 transition-opacity duration-300 ${
                            isSelected ? 'opacity-100 scale-110' : 'opacity-70'
                          }`}
                        />

                        {/* Pulsing Concentric Rings for Active Pin */}
                        {isSelected && (
                          <>
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-4 rounded-full bg-amber-400/35 border border-amber-400/90 animate-ping" />
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-7 rounded-full bg-[#80011F]/20 border border-[#80011F]/70 animate-pulse" />
                          </>
                        )}
                      </div>

                      {/* Continuous 360-Degree Vertically Rotating 3D Pin */}
                      <div className="relative">
                        <div
                          className={`pin-rotator transition-all duration-300 ${
                            isSelected
                              ? 'scale-115 drop-shadow-[0_8px_16px_rgba(128,1,31,0.45)]'
                              : 'scale-95 group-hover:scale-105 drop-shadow-[0_4px_8px_rgba(128,1,31,0.25)]'
                          }`}
                        >
                          <img
                            src="/assets/images/locations/pin-3d-front.png"
                            alt={`${loc.name} pin`}
                            className="w-8 xl:w-9 h-auto object-contain pointer-events-none select-none"
                          />
                        </div>
                      </div>

                      {/* Location Name & Category Pill Label */}
                      <div
                        className={`absolute left-full top-[25%] -translate-y-1/2 ml-2 transition-all duration-300 whitespace-nowrap pointer-events-auto ${
                          isSelected ? 'z-30 scale-105' : 'z-20 group-hover:scale-102 opacity-95'
                        }`}
                      >
                        {isSelected || (isErode && !hoveredId) ? (
                          // Active Highlighted Pill: Rich Burgundy Background with White Text
                          <div className="flex items-center gap-2 bg-[#80011F] text-white px-3.5 py-1.5 rounded-full shadow-md border border-white/60">
                            {loc.type === 'office' && <Building2 className="w-3.5 h-3.5 text-amber-300 stroke-[2]" />}
                            {loc.type === 'factory' && <Factory className="w-3.5 h-3.5 text-amber-300 stroke-[2]" />}
                            {loc.type === 'franchise' && <Store className="w-3.5 h-3.5 text-amber-300 stroke-[2]" />}
                            <div className="leading-tight">
                              <span className="text-xs font-black tracking-tight block">
                                {loc.name}
                              </span>
                              <span className="text-[10px] text-amber-200/90 font-semibold block">
                                ({loc.category})
                              </span>
                            </div>
                          </div>
                        ) : (
                          // Standard Pill: Clean White Card with Burgundy Accent & Subtle Shadow
                          <div className="flex items-center gap-2 bg-white/95 backdrop-blur px-3 py-1 rounded-full shadow-sm border border-gray-100 hover:border-[#80011F]/30 hover:shadow transition-all">
                            {loc.type === 'factory' ? (
                              <div className="w-5 h-5 rounded-full bg-[#80011F]/10 flex items-center justify-center text-[#80011F]">
                                <Factory className="w-3 h-3 stroke-[2]" />
                              </div>
                            ) : null}
                            <div className="leading-tight text-left">
                              <span className="text-xs font-bold text-gray-900 block">
                                {loc.name}
                              </span>
                              <span className="text-[10px] text-[#80011F] font-semibold block">
                                ({loc.category})
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =========================================================================
              EXACT ASYMMETRIC ORGANIC CURVED CARD (FOLLOWING REFERENCE IMAGE 2)
              - Asymmetrical flowing outer silhouette with rounded bulbous left edge
              - Burgundy information panel (30-35% width) flowing naturally into photograph
              - Photograph (65-70% width) enclosed in an organic curved frame with layered white & burgundy strokes
              - Fixed responsive aspect ratio: identical silhouette across all locations
              - Floating white pill-shaped location navigation bar underneath with 5 locations
              ========================================================================= */}
          <div className="relative pt-2 pb-6 max-w-[1240px] mx-auto">
            
            {/* Main Card Container with Organic Silhouette & Layered Outlines */}
            <div className="relative rounded-[48px] xl:rounded-[56px] overflow-hidden bg-[#80011F] border-2 border-white shadow-[0_12px_32px_rgba(128,1,31,0.14)] ring-1 ring-[#80011F]/20">
              
              <div className="grid grid-cols-12 min-h-[310px] xl:min-h-[340px] items-stretch">
                
                {/* Left Information Panel: Deep Burgundy (#80011F) with Professional Icons */}
                <div className="col-span-4 p-8 xl:p-12 flex flex-col justify-center text-left relative z-20 text-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeLocation.id}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 14 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="space-y-3"
                    >
                      {/* Professional Vector Outline Icon */}
                      <div className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-2 shadow-sm">
                        {activeLocation.type === 'office' && <Building2 className="w-5 h-5 stroke-[2] text-white" />}
                        {activeLocation.type === 'factory' && <Factory className="w-5 h-5 stroke-[2] text-white" />}
                        {activeLocation.type === 'franchise' && <Store className="w-5 h-5 stroke-[2] text-white" />}
                      </div>

                      {/* Small Uppercase Location Category */}
                      <span className="text-[11px] xl:text-xs font-bold uppercase tracking-[0.2em] text-white/80 block">
                        {activeLocation.category}
                      </span>

                      {/* Location Name in Large Bold Typography */}
                      <h3 className="text-2xl sm:text-3xl xl:text-4xl font-black text-white tracking-tight leading-tight">
                        {activeLocation.name}
                      </h3>

                      {/* Short White Decorative Divider */}
                      <div className="w-12 h-[2px] bg-white/60 rounded-full my-2.5" />

                      {/* White Location Description */}
                      <p className="text-xs xl:text-sm text-white/90 leading-relaxed font-normal max-w-sm">
                        {activeLocation.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Location Image Frame: 65-70% width with Asymmetric Flowing Oval-like Curved Frame */}
                <div className="col-span-8 relative overflow-hidden bg-[#570016]">
                  
                  {/* Dynamic Location Photograph with Smooth Fade Transition */}
                  <div className="w-full h-full">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeLocation.id}
                        src={activeLocation.image}
                        alt={activeLocation.name}
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="w-full h-full object-cover object-center"
                      />
                    </AnimatePresence>
                  </div>

                  {/* Layered Organic Burgundy Wave Overlay with Crisp White Outlines (Exact IMAGE 2 Silhouette) */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-10"
                    viewBox="0 0 700 400"
                    preserveAspectRatio="none"
                  >
                    {/* Top Sweeping Burgundy Hood Wave */}
                    <path
                      d="M 0,0 L 700,0 L 700,42 C 540,68 360,62 190,42 C 100,32 30,16 0,0 Z"
                      fill="#80011F"
                    />
                    <path
                      d="M 0,0 C 30,16 100,32 190,42 C 360,62 540,68 700,42"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="3"
                    />

                    {/* Bottom Sweeping Burgundy Base Wave */}
                    <path
                      d="M 0,400 L 700,400 L 700,360 C 520,335 340,340 170,362 C 85,374 25,388 0,400 Z"
                      fill="#80011F"
                    />
                    <path
                      d="M 0,400 C 25,388 85,374 170,362 C 340,340 520,335 700,360"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="3"
                    />

                    {/* Left Flowing Convex Curve Blending naturally into Information Panel */}
                    <path
                      d="M 0,0 C 42,110 42,290 0,400 Z"
                      fill="#80011F"
                    />
                    <path
                      d="M 0,0 C 42,110 42,290 0,400"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Floating Pill-Shaped Location Navigation Bar (Refined 5-Location Proportions) */}
            <div className="relative -mt-6 xl:-mt-7 z-30 max-w-4xl mx-auto px-4">
              <div className="bg-[#FFFDFD] rounded-full py-2 px-3 sm:px-6 shadow-[0_8px_24px_rgba(128,1,31,0.09)] border border-[#80011F]/20 flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
                {LOCATIONS.map((loc, index) => {
                  const isActive = activeId === loc.id;
                  return (
                    <React.Fragment key={loc.id}>
                      {/* Thin Vertical Burgundy Separator */}
                      {index > 0 && (
                        <div className="w-[1px] h-6 bg-[#80011F]/15 shrink-0 mx-1 hidden sm:block" />
                      )}

                      <button
                        onClick={() => {
                          setSelectedId(loc.id);
                          setHoveredId(null);
                        }}
                        onMouseEnter={() => setHoveredId(loc.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className={`flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2 rounded-full transition-all duration-200 cursor-pointer shrink-0 ${
                          isActive
                            ? 'bg-white shadow-[0_2px_10px_rgba(128,1,31,0.14)] border border-[#80011F]/30 ring-1 ring-[#80011F]/15 scale-102'
                            : 'hover:bg-[#80011F]/5 text-gray-700'
                        }`}
                      >
                        {/* Professional Burgundy Outline Icon */}
                        <div className={`shrink-0 ${isActive ? 'text-[#80011F]' : 'text-[#80011F]/70'}`}>
                          {loc.type === 'office' && <Building2 className="w-4 h-4 stroke-[2]" />}
                          {loc.type === 'factory' && <Factory className="w-4 h-4 stroke-[2]" />}
                          {loc.type === 'franchise' && <Store className="w-4 h-4 stroke-[2]" />}
                        </div>

                        {/* Location Name & Secondary Category Label Below */}
                        <div className="flex flex-col text-left leading-tight">
                          <span className={`text-xs font-bold whitespace-nowrap ${isActive ? 'text-[#80011F]' : 'text-gray-900'}`}>
                            {loc.name}
                          </span>
                          <span className={`text-[10px] font-medium whitespace-nowrap ${isActive ? 'text-[#80011F]/80' : 'text-gray-500'}`}>
                            ({loc.category === 'Manufacturing Factory' ? 'Factory' : loc.category})
                          </span>
                        </div>
                      </button>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            MOBILE & TABLET VIEW (lg:hidden)
            - Upper section (Map, Header, Pins) UNCHANGED
            - Chunguvachtram removed completely
            - Same Organic Curved Card Silhouette and Flowing Photographic Frame
            - Professional Lucide Icons
            - Identical Fixed Card Dimensions across all locations
            - Touch-friendly Pagination Controls & Quick-Select Dock
            ========================================================================= */}
        <div className="block lg:hidden space-y-6">
          
          {/* Centered Mobile Header (Unchanged) */}
          <div className="text-center space-y-3 max-w-md mx-auto">
            <div className="flex justify-center">
              <img
                src="/assets/logo/teeszone-logo.png"
                alt="TeesZone"
                className="h-8 w-auto object-contain"
              />
            </div>

            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-[2px] bg-[#80011F]/30 rounded-full" />
              <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#80011F]">
                OUR LOCATIONS
              </span>
              <span className="w-8 h-[2px] bg-[#80011F]/30 rounded-full" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#1F1F1F] tracking-tight leading-tight">
              Our Presence <br />
              <span className="text-[#80011F]">Across India</span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed px-4">
              A growing network of franchisees and state-of-the-art facilities, bringing TeesZone closer to you.
            </p>
          </div>

          {/* Mobile 3D Map Container (Unchanged with 5 Locations) */}
          <div className="relative w-full max-w-[440px] mx-auto aspect-[1024/580] my-2">
            
            {/* 3D Map Base */}
            <img
              src="/assets/images/locations/map-3d-model.png"
              alt="TeesZone 3D India Network Map"
              className="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_10px_20px_rgba(128,1,31,0.1)]"
            />

            {/* Connecting Dotted Route Arcs for 5 Locations */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M 27 25 Q 26 48 30.5 67.5"
                fill="none"
                stroke="#80011F"
                strokeWidth="0.6"
                strokeDasharray="1.2 1.2"
                strokeOpacity="0.45"
              />
              <path
                d="M 30.5 67.5 Q 43 76 57 79.5"
                fill="none"
                stroke="#80011F"
                strokeWidth="0.6"
                strokeDasharray="1.2 1.2"
                strokeOpacity="0.45"
              />
              <path
                d="M 30.5 67.5 Q 44 54 59 44"
                fill="none"
                stroke="#80011F"
                strokeWidth="0.6"
                strokeDasharray="1.2 1.2"
                strokeOpacity="0.45"
              />
              <path
                d="M 59 44 Q 68 31 77 19.5"
                fill="none"
                stroke="#80011F"
                strokeWidth="0.6"
                strokeDasharray="1.2 1.2"
                strokeOpacity="0.45"
              />
            </svg>

            {/* 5 Geographically Positioned Pins for Mobile */}
            {LOCATIONS.map((loc) => {
              const isSelected = selectedId === loc.id;
              const isErode = loc.id === 'erode';

              return (
                <div
                  key={loc.id}
                  className="absolute z-20 cursor-pointer"
                  style={{
                    left: `${loc.coords.x}%`,
                    top: `${loc.coords.y}%`,
                    transform: 'translate(-50%, -92.8%)',
                  }}
                  onClick={() => setSelectedId(loc.id)}
                >
                  {/* Floor Beacon Ring */}
                  <div className="absolute left-1/2 top-[92.8%] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                    <img
                      src="/assets/images/locations/pin-beacon-ring.png"
                      alt=""
                      className={`w-8 h-4 object-contain -translate-y-1/2 ${
                        isSelected ? 'opacity-100 scale-125' : 'opacity-70'
                      }`}
                    />
                    {isSelected && (
                      <>
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-4 rounded-full bg-amber-400/40 border border-amber-400 animate-ping" />
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-6 rounded-full bg-[#80011F]/20 border border-[#80011F]/60 animate-pulse" />
                      </>
                    )}
                  </div>

                  {/* Rotating 3D Pin */}
                  <div className="relative">
                    <div
                      className={`pin-rotator transition-all duration-300 ${
                        isSelected
                          ? 'scale-115 drop-shadow-[0_6px_12px_rgba(128,1,31,0.4)]'
                          : 'scale-90 drop-shadow-[0_3px_6px_rgba(128,1,31,0.2)]'
                      }`}
                    >
                      <img
                        src="/assets/images/locations/pin-3d-front.png"
                        alt={`${loc.name} pin`}
                        className="w-6 sm:w-7 h-auto object-contain pointer-events-none select-none"
                      />
                    </div>
                  </div>

                  {/* Mobile Compact Label */}
                  <div
                    className={`absolute left-full top-[25%] -translate-y-1/2 ml-1 whitespace-nowrap transition-all duration-300 ${
                      isSelected ? 'z-30 scale-105' : 'z-20 opacity-90'
                    }`}
                  >
                    {isSelected || isErode ? (
                      <div className="bg-[#80011F] text-white px-2 py-0.5 rounded-full shadow text-[9px] font-bold border border-white/60 leading-tight">
                        <span>{loc.name}</span>
                      </div>
                    ) : (
                      <div className="bg-white/95 px-1.5 py-0.5 rounded-full shadow-sm text-[8px] font-bold text-gray-800 border border-gray-100 leading-tight">
                        <span>{loc.name}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Showcase Card with Organic Curved Silhouette and Layered Outlines */}
          <div className="relative rounded-3xl overflow-hidden bg-[#80011F] border-2 border-white shadow-md text-white">
            
            {/* Top Curved Photographic Frame with Overlaid Organic Arches */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#570016]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeLocation.id}
                  src={activeLocation.image}
                  alt={activeLocation.name}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35 }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>

              {/* Organic Curved SVG Borders for Mobile */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 400 250"
                preserveAspectRatio="none"
              >
                <path d="M 0,0 L 400,0 L 400,24 C 280,44 120,44 0,24 Z" fill="#80011F" />
                <path d="M 0,24 C 120,44 280,44 400,24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
                <path d="M 0,250 L 400,250 L 400,226 C 280,206 120,206 0,226 Z" fill="#80011F" />
                <path d="M 0,226 C 120,206 280,206 400,226" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
              </svg>

              {/* Category Pill Tag */}
              <div className="absolute top-3 left-3 z-20 bg-[#80011F]/95 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold shadow border border-white/30">
                {activeLocation.category}
              </div>
            </div>

            {/* Mobile Information Panel Directly Beneath Image */}
            <div className="p-4 sm:p-5 space-y-2 text-left bg-[#80011F]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/20">
                  {activeLocation.type === 'office' && <Building2 className="w-4 h-4 stroke-[2] text-white" />}
                  {activeLocation.type === 'factory' && <Factory className="w-4 h-4 stroke-[2] text-white" />}
                  {activeLocation.type === 'franchise' && <Store className="w-4 h-4 stroke-[2] text-white" />}
                </div>
                <div>
                  <div className="text-[10px] text-amber-200/90 font-bold uppercase tracking-wider">
                    {activeLocation.category}
                  </div>
                  <h3 className="text-lg font-black text-white leading-tight">
                    {activeLocation.name}
                  </h3>
                </div>
              </div>

              {/* Decorative Divider */}
              <div className="w-10 h-[2px] bg-white/40 rounded-full" />

              <p className="text-xs text-white/90 leading-relaxed font-normal pt-0.5">
                {activeLocation.description}
              </p>
            </div>
          </div>

          {/* Mobile Pagination Controls (< Prev, Dots, Next >) */}
          <div className="flex items-center justify-center gap-4 pt-1">
            <button
              onClick={handlePrev}
              aria-label="Previous Location"
              className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-[#80011F] hover:bg-[#80011F] hover:text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicator Dots for 5 Locations */}
            <div className="flex items-center gap-1.5">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedId(loc.id)}
                  aria-label={`Select ${loc.name}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    activeId === loc.id
                      ? 'w-6 h-2 bg-[#80011F]'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next Location"
              className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-[#80011F] hover:bg-[#80011F] hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Horizontal Quick-Select Pill Dock (5 Locations) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar px-1">
            {LOCATIONS.map((loc) => {
              const isActive = activeId === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedId(loc.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#80011F] text-white shadow font-bold'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {loc.type === 'office' && <Building2 className="w-3.5 h-3.5 stroke-[2]" />}
                  {loc.type === 'factory' && <Factory className="w-3.5 h-3.5 stroke-[2]" />}
                  {loc.type === 'franchise' && <Store className="w-3.5 h-3.5 stroke-[2]" />}
                  <div className="flex flex-col text-left leading-none">
                    <span>{loc.name}</span>
                    <span className={`text-[9px] ${isActive ? 'text-amber-200' : 'text-gray-400'}`}>
                      ({loc.shortLabel})
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExpansionJourney;
