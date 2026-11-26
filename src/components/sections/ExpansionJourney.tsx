import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Store, Factory, ChevronLeft, ChevronRight } from 'lucide-react';

interface LocationItem {
  id: string;
  name: string;
  category: string;
  shortLabel: string;
  type: 'office' | 'branch' | 'factory';
  description: string;
  image: string;
  coords: { x: number; y: number }; // Percentage relative to map container
  labelOffset: { x: number; y: number };
}

// 5 Official Locations (Franchise replaced with Branch)
const LOCATIONS: LocationItem[] = [
  {
    id: 'erode',
    name: 'Erode Tex Valley',
    category: 'Corporate Office',
    shortLabel: 'Corporate Office',
    type: 'office',
    description:
      'Our corporate headquarters at Erode Tex Valley, driving innovation, operations, and growth across all locations.',
    image: '/assets/images/locations/erode-tex-valley.webp',
    coords: { x: 30.5, y: 67.5 },
    labelOffset: { x: 18, y: -8 },
  },
  {
    id: 'chennai',
    name: 'Chennai',
    category: 'Branch',
    shortLabel: 'Branch',
    type: 'branch',
    description:
      'Serving metropolitan brands, IT parks, and corporate enterprises across Chennai with prompt turnaround and doorstep service.',
    image: '/assets/images/locations/chennai.webp',
    coords: { x: 77.0, y: 19.5 },
    labelOffset: { x: 18, y: -6 },
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    category: 'Branch',
    shortLabel: 'Branch',
    type: 'branch',
    description:
      'Delivering premium custom apparel, branded hoodies, and corporate uniforms to India’s leading tech hubs and startups.',
    image: '/assets/images/locations/bengaluru.webp',
    coords: { x: 26.5, y: 23.5 },
    labelOffset: { x: 18, y: -6 },
  },
  {
    id: 'kanchipuram',
    name: 'Kanchipuram',
    category: 'Branch',
    shortLabel: 'Branch',
    type: 'branch',
    description:
      'Expanding our dedicated presence into Kanchipuram, offering bulk customized T-shirts and institutional apparel.',
    image: '/assets/images/locations/kanchipuram.webp',
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
    image: '/assets/images/locations/tiruppur.webp',
    coords: { x: 57.0, y: 79.5 },
    labelOffset: { x: 18, y: -6 },
  },
];

export const ExpansionJourney: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('erode');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  

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
      id="locations"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F4] to-[#FFFDF9] py-8 sm:py-10 lg:py-12 select-none"
      aria-label="TeesZone Locations and Network Across India"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            DESKTOP VIEW (lg:block): Fits Cleanly Within Desktop Viewport
            - Logo at top REMOVED
            - Card border and shadow REMOVED
            - Description below images REMOVED
            - Franchise changed to Branch
            ========================================================================= */}
        <div className="hidden lg:block">
          
          {/* Top Row: Left Content Column + Right 3D Map Area */}
          <div className="grid grid-cols-12 gap-6 items-center mb-4 xl:mb-6">
            
            {/* Left Content Column */}
            <div className="col-span-5 space-y-3.5 text-left pr-4">
              
              {/* Eyebrow Label with Accent Line */}
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.28em] font-extrabold text-[#80011F]">
                  OUR LOCATIONS
                </span>
                <span className="w-12 h-[2px] bg-[#80011F]/30 rounded-full" />
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl xl:text-4xl font-black text-[#1F1F1F] tracking-tight leading-[1.14]">
                Our Presence <br />
                <span className="text-[#80011F]">Across India</span>
              </h2>

              {/* Descriptive Subtitle (Franchisees replaced with Branches) */}
              <p className="text-sm xl:text-base text-gray-600 leading-relaxed max-w-md font-normal">
                A growing network of branches and state-of-the-art facilities, bringing
                TeesZone closer to you.
              </p>

              {/* Stat & Facility Highlights */}
              <div className="flex items-center gap-6 pt-1">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#80011F]/10 flex items-center justify-center text-[#80011F]">
                    <Store className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-gray-900 leading-tight">5 Branches</div>
                    <div className="text-xs text-gray-500 font-semibold">&amp; Offices</div>
                  </div>
                </div>

                <div className="w-[1px] h-8 bg-gray-200" />

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#80011F]/10 flex items-center justify-center text-[#80011F]">
                    <Factory className="w-4 h-4 stroke-[2]" />
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
              <div className="relative w-full max-w-[620px] mx-auto aspect-[1024/540]">
                
                {/* 3D Map Base Model */}
                <motion.img
                  src="/assets/images/locations/map-3d-model.webp"
                  alt="TeesZone 3D India Presence Map"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_12px_24px_rgba(128,1,31,0.10)]"
                />

                {/* Connecting Dotted Route Arcs Between 5 Locations */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 27 25 Q 26 48 30.5 67.5"
                    fill="none"
                    stroke="#80011F"
                    strokeWidth="0.45"
                    strokeDasharray="1.2 1.2"
                    strokeOpacity="0.45"
                  />
                  <path
                    d="M 30.5 67.5 Q 43 76 57 79.5"
                    fill="none"
                    stroke="#80011F"
                    strokeWidth="0.45"
                    strokeDasharray="1.2 1.2"
                    strokeOpacity="0.45"
                  />
                  <path
                    d="M 30.5 67.5 Q 44 54 59 44"
                    fill="none"
                    stroke="#80011F"
                    strokeWidth="0.45"
                    strokeDasharray="1.2 1.2"
                    strokeOpacity="0.45"
                  />
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
                        <img loading="lazy" decoding="async" src="/assets/images/locations/pin-beacon-ring.webp"
                          alt=""
                          className={`w-10 h-4 object-contain -translate-y-1/2 transition-opacity duration-300 ${
                            isSelected ? 'opacity-100 scale-110' : 'opacity-70'
                          }`}
                        />

                        {isSelected && (
                          <>
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-3.5 rounded-full bg-amber-400/35 border border-amber-400/90 animate-ping" />
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-6 rounded-full bg-[#80011F]/20 border border-[#80011F]/70 animate-pulse" />
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
                          <img loading="lazy" decoding="async" src="/assets/images/locations/pin-3d-front.webp"
                            alt={`${loc.name} pin`}
                            className="w-7 xl:w-8 h-auto object-contain pointer-events-none select-none"
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
                          <div className="flex items-center gap-2 bg-[#80011F] text-white px-3 py-1 rounded-full shadow-none border-0">
                            {loc.type === 'office' && <Building2 className="w-3.5 h-3.5 text-amber-300 stroke-[2]" />}
                            {loc.type === 'factory' && <Factory className="w-3.5 h-3.5 text-amber-300 stroke-[2]" />}
                            {loc.type === 'branch' && <Store className="w-3.5 h-3.5 text-amber-300 stroke-[2]" />}
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
                          <div className="flex items-center gap-2 bg-white/95 px-3 py-1 rounded-full shadow-none border-0 hover:bg-white transition-all">
                            {loc.type === 'factory' ? (
                              <div className="w-4 h-4 rounded-full bg-[#80011F]/10 flex items-center justify-center text-[#80011F]">
                                <Factory className="w-2.5 h-2.5 stroke-[2]" />
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

          {/* Location Showcase Card: Card Border & Shadow Removed, Descriptions Removed */}
          <div className="relative pt-1 pb-4 max-w-[1200px] mx-auto">
            
            {/* Main Card Container with Organic Silhouette: Border-0, Shadow-None */}
            <div className="relative rounded-[32px] xl:rounded-[36px] overflow-hidden bg-[#80011F] border-0 shadow-none ring-0">
              
              <div className="grid grid-cols-12 min-h-[220px] xl:min-h-[240px] items-stretch">
                
                {/* Left Information Panel */}
                <div className="col-span-5 p-6 xl:p-8 flex flex-col justify-center text-left relative z-20 text-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeLocation.id}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 14 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="space-y-2"
                    >
                      {/* Outline Icon */}
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-1 shadow-none border-0">
                        {activeLocation.type === 'office' && <Building2 className="w-5 h-5 stroke-[2] text-white" />}
                        {activeLocation.type === 'factory' && <Factory className="w-5 h-5 stroke-[2] text-white" />}
                        {activeLocation.type === 'branch' && <Store className="w-5 h-5 stroke-[2] text-white" />}
                      </div>

                      {/* Small Uppercase Location Category */}
                      <span className="text-[11px] xl:text-xs font-bold uppercase tracking-[0.2em] text-white/80 block">
                        {activeLocation.category}
                      </span>

                      {/* Location Name */}
                      <h3 className="text-2xl xl:text-3xl font-black text-white tracking-tight leading-tight">
                        {activeLocation.name}
                      </h3>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Location Image Frame: 60-65% width */}
                <div className="col-span-7 relative overflow-hidden bg-[#570016]">
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

                  {/* Organic Wave Overlays */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-10"
                    viewBox="0 0 700 400"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 0,0 L 700,0 L 700,42 C 540,68 360,62 190,42 C 100,32 30,16 0,0 Z"
                      fill="#80011F"
                    />
                    <path
                      d="M 0,400 L 700,400 L 700,360 C 520,335 340,340 170,362 C 85,374 25,388 0,400 Z"
                      fill="#80011F"
                    />
                    <path
                      d="M 0,0 C 42,110 42,290 0,400 Z"
                      fill="#80011F"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Location Navigation Dock: Border & Shadow Removed */}
            <div className="relative -mt-5 z-30 max-w-3xl mx-auto px-4">
              <div className="bg-[#FFFDFD] rounded-full py-1.5 px-3 sm:px-5 shadow-none border-0 flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
                {LOCATIONS.map((loc, index) => {
                  const isActive = activeId === loc.id;
                  return (
                    <React.Fragment key={loc.id}>
                      {index > 0 && (
                        <div className="w-[1px] h-5 bg-[#80011F]/15 shrink-0 mx-1 hidden sm:block" />
                      )}

                      <button
                        onClick={() => {
                          setSelectedId(loc.id);
                          setHoveredId(null);
                        }}
                        onMouseEnter={() => setHoveredId(loc.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer shrink-0 border-0 shadow-none ${
                          isActive
                            ? 'bg-[#80011F] text-white'
                            : 'hover:bg-[#80011F]/5 text-gray-700'
                        }`}
                      >
                        <div className={`shrink-0 ${isActive ? 'text-white' : 'text-[#80011F]'}`}>
                          {loc.type === 'office' && <Building2 className="w-3.5 h-3.5 stroke-[2]" />}
                          {loc.type === 'factory' && <Factory className="w-3.5 h-3.5 stroke-[2]" />}
                          {loc.type === 'branch' && <Store className="w-3.5 h-3.5 stroke-[2]" />}
                        </div>

                        <div className="flex flex-col text-left leading-tight">
                          <span className={`text-xs font-bold whitespace-nowrap ${isActive ? 'text-white' : 'text-gray-900'}`}>
                            {loc.name}
                          </span>
                          <span className={`text-[9px] font-medium whitespace-nowrap ${isActive ? 'text-amber-200' : 'text-gray-500'}`}>
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
            MOBILE VIEW (lg:hidden): Fits Cleanly Within Mobile Height
            - Logo at top REMOVED
            - Card border and shadow REMOVED
            - Description below images REMOVED
            - Franchise replaced with Branch
            ========================================================================= */}
        <div className="block lg:hidden space-y-4">
          
          {/* Centered Mobile Header: Logo removed */}
          <div className="text-center space-y-2 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2.5">
              <span className="w-8 h-[2px] bg-[#80011F]/30 rounded-full" />
              <span className="text-xs uppercase tracking-[0.24em] font-extrabold text-[#80011F]">
                OUR LOCATIONS
              </span>
              <span className="w-8 h-[2px] bg-[#80011F]/30 rounded-full" />
            </div>

            <h2 className="text-2xl xs:text-[26px] font-black text-[#1F1F1F] tracking-tight leading-tight">
              Our Presence <br />
              <span className="text-[#80011F]">Across India</span>
            </h2>

            <p className="text-xs text-gray-600 leading-relaxed px-4">
              A growing network of branches and state-of-the-art facilities, bringing TeesZone closer to you.
            </p>
          </div>

          {/* Mobile 3D Map Container: Compact height */}
          <div className="relative w-full max-w-[390px] mx-auto aspect-[1024/520] my-1">
            
            {/* 3D Map Base */}
            <img loading="lazy" decoding="async" src="/assets/images/locations/map-3d-model.webp"
              alt="TeesZone 3D India Network Map"
              className="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_8px_16px_rgba(128,1,31,0.08)]"
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
                    <img loading="lazy" decoding="async" src="/assets/images/locations/pin-beacon-ring.webp"
                      alt=""
                      className={`w-7 h-3.5 object-contain -translate-y-1/2 ${
                        isSelected ? 'opacity-100 scale-125' : 'opacity-70'
                      }`}
                    />
                    {isSelected && (
                      <>
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-3.5 rounded-full bg-amber-400/40 border border-amber-400 animate-ping" />
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-5 rounded-full bg-[#80011F]/20 border border-[#80011F]/60 animate-pulse" />
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
                      <img loading="lazy" decoding="async" src="/assets/images/locations/pin-3d-front.webp"
                        alt={`${loc.name} pin`}
                        className="w-5 sm:w-6 h-auto object-contain pointer-events-none select-none"
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
                      <div className="bg-[#80011F] text-white px-2 py-0.5 rounded-full text-[9px] font-bold border-0 leading-tight">
                        <span>{loc.name}</span>
                      </div>
                    ) : (
                      <div className="bg-white/95 px-1.5 py-0.5 rounded-full text-[8px] font-bold text-gray-800 border-0 leading-tight">
                        <span>{loc.name}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Showcase Card: Border & Shadow Removed, Descriptions Removed */}
          <div className="relative rounded-2xl overflow-hidden bg-[#80011F] border-0 shadow-none text-white">
            
            {/* Top Photographic Frame */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#570016]">
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

              {/* Organic Curved SVG Borders */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 400 250"
                preserveAspectRatio="none"
              >
                <path d="M 0,0 L 400,0 L 400,24 C 280,44 120,44 0,24 Z" fill="#80011F" />
                <path d="M 0,250 L 400,250 L 400,226 C 280,206 120,206 0,226 Z" fill="#80011F" />
              </svg>

              {/* Category Pill Tag (Branch) - Border & Shadow Removed */}
              <div className="absolute top-2.5 left-2.5 z-20 bg-[#80011F]/90 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold border-0 shadow-none">
                {activeLocation.category}
              </div>
            </div>

            {/* Mobile Information Panel Directly Beneath Image (Descriptions Removed) */}
            <div className="p-3.5 text-left bg-[#80011F] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white border-0 shadow-none">
                  {activeLocation.type === 'office' && <Building2 className="w-4 h-4 stroke-[2] text-white" />}
                  {activeLocation.type === 'factory' && <Factory className="w-4 h-4 stroke-[2] text-white" />}
                  {activeLocation.type === 'branch' && <Store className="w-4 h-4 stroke-[2] text-white" />}
                </div>
                <div>
                  <div className="text-[9px] text-amber-200/90 font-bold uppercase tracking-wider">
                    {activeLocation.category}
                  </div>
                  <h3 className="text-base font-black text-white leading-tight">
                    {activeLocation.name}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Pagination Controls (< Prev, Dots, Next >) */}
          <div className="flex items-center justify-center gap-3 pt-0.5">
            <button
              onClick={handlePrev}
              aria-label="Previous Location"
              className="w-8 h-8 rounded-full bg-white border-0 shadow-none flex items-center justify-center text-[#80011F] hover:bg-[#80011F] hover:text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
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
                      ? 'w-5 h-1.5 bg-[#80011F]'
                      : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next Location"
              className="w-8 h-8 rounded-full bg-white border-0 shadow-none flex items-center justify-center text-[#80011F] hover:bg-[#80011F] hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Horizontal Quick-Select Pill Dock: Border & Shadow Removed */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar px-1">
            {LOCATIONS.map((loc) => {
              const isActive = activeId === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedId(loc.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer border-0 shadow-none ${
                    isActive
                      ? 'bg-[#80011F] text-white font-bold'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {loc.type === 'office' && <Building2 className="w-3 h-3 stroke-[2]" />}
                  {loc.type === 'factory' && <Factory className="w-3 h-3 stroke-[2]" />}
                  {loc.type === 'branch' && <Store className="w-3 h-3 stroke-[2]" />}
                  <div className="flex flex-col text-left leading-none">
                    <span>{loc.name}</span>
                    <span className={`text-[8.5px] ${isActive ? 'text-amber-200' : 'text-gray-400'}`}>
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
