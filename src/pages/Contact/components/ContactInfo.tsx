import React from 'react';
import { companyContact } from '@/data/navigation';
import { Clock } from 'lucide-react';

interface Model3DWithSpiralProps {
  src: string;
  alt: string;
  size?: 'desktop' | 'mobile';
}

const Model3DWithSpiral: React.FC<Model3DWithSpiralProps> = ({ src, alt, size = 'desktop' }) => {
  const isDesktop = size === 'desktop';

  return (
    <div
      className={`relative flex items-center justify-center select-none pointer-events-none ${
        isDesktop
          ? 'w-[220px] h-[170px] sm:w-[240px] sm:h-[185px] mx-auto'
          : 'w-[125px] h-[115px] xs:w-[140px] xs:h-[125px] shrink-0'
      }`}
    >
      {/* 3D Model Image on Pedestal (100% Clean Transparent PNG) */}
      <img
        src={src}
        alt={alt}
        className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-105"
        loading="eager"
      />

      {/* Single Right-Sided Cross Spiral Horizontal Orbit Animation */}
      <svg
        viewBox="0 0 240 180"
        className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
      >
        <defs>
          <linearGradient id="singleSpiralGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFAEC0" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#FFD166" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFAEC0" stopOpacity="0.25" />
          </linearGradient>
          <filter id="spiralGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Group Tilted at Right-Sided Cross Angle (-18deg) */}
        <g transform="rotate(-18 120 100)">
          {/* Static Glowing Elliptical Ring Path */}
          <ellipse
            cx="120"
            cy="100"
            rx="92"
            ry="36"
            fill="none"
            stroke="url(#singleSpiralGlow)"
            strokeWidth="1.8"
            filter="url(#spiralGlowFilter)"
            opacity="0.85"
          />

          {/* Smooth Horizontal Orbiting Glowing Particle along the Tilted Cross Path */}
          <circle r="4" fill="#FFFFFF" filter="url(#spiralGlowFilter)">
            <animateMotion
              dur="4.5s"
              repeatCount="indefinite"
              path="M 28,100 A 92 36 0 1 1 212,100 A 92 36 0 1 1 28,100"
            />
          </circle>
          {/* Subtle Trailing Light Particle */}
          <circle r="2.5" fill="#FFE29A" opacity="0.8" filter="url(#spiralGlowFilter)">
            <animateMotion
              dur="4.5s"
              begin="-0.25s"
              repeatCount="indefinite"
              path="M 28,100 A 92 36 0 1 1 212,100 A 92 36 0 1 1 28,100"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export const ContactInfo: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#640117] via-[#480010] to-[#2c0008] text-white overflow-hidden pt-16 sm:pt-20 pb-16 sm:pb-20">
      
      {/* =========================================================================
          1. WAVY BORDER BOTH ABOVE AND BELOW SECTION
          ========================================================================= */}
      
      {/* Top Wavy Section Border matching preceding hero section (#FAF6F4) */}
      <div className="absolute top-0 inset-x-0 overflow-hidden leading-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-6 sm:h-9 md:h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,15 C1200,45 920,60 620,30 C320,5 120,35 0,20 Z"
            fill="#FAF6F4"
          />
        </svg>
      </div>

      {/* Bottom Wavy Section Border transitioning into following section (#FAF6F4) */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-6 sm:h-9 md:h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 L1440,60 L1440,45 C1200,15 920,0 620,30 C320,55 120,25 0,40 Z"
            fill="#FAF6F4"
          />
        </svg>
      </div>

      {/* =========================================================================
          2. DECORATIVE SILK DRAPERY & AMBIENT TEXTURE (Reference Image 1)
          ========================================================================= */}
      
      {/* Top-Left Cream/White Flowing Satin Wave */}
      <svg
        viewBox="0 0 600 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-[50%] max-w-[550px] h-auto object-cover pointer-events-none select-none z-0 opacity-90"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L600,0 C460,95 340,165 180,150 C80,140 0,105 0,70 Z"
          fill="url(#creamSilkDrape)"
        />
        <path
          d="M0,0 L420,0 C310,65 210,115 90,100 C40,95 0,65 0,40 Z"
          fill="#FFFFFF"
          fillOpacity="0.4"
        />
        <defs>
          <linearGradient id="creamSilkDrape" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#FAF4EE" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F2E3D8" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Right Burgundy Silk Ribbon Fold */}
      <div className="absolute top-0 right-0 w-[35%] h-full pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-[360px] h-[480px] rounded-full bg-gradient-to-bl from-[#900122]/45 via-[#680119]/30 to-transparent blur-2xl" />
        <svg
          viewBox="0 0 320 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 w-full h-full object-cover opacity-70"
          preserveAspectRatio="none"
        >
          <path
            d="M140,0 C200,130 240,250 190,390 C150,470 230,520 320,520 L320,0 Z"
            fill="url(#burgundySilkFold)"
          />
          <defs>
            <linearGradient id="burgundySilkFold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A80D30" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#75021B" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#4A0010" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Ambient Dotted Particle Matrix in Center Background */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-20 z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 200, 220, 0.45) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
        }}
      />

      {/* =========================================================================
          3. CONTENT CONTAINER: ALIGNED STRAIGHT BELOW 3D MODELS (NO ICON BADGES)
          ========================================================================= */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ---------------------------------------------------------------------
            DESKTOP VIEW (hidden md:grid - Exact Match to Reference Image 1)
            - 3 Columns: 3D model with horizontal spiral animation
            - Content aligned straight below each 3D model (no left-side icons)
            --------------------------------------------------------------------- */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8 xl:gap-12 items-start">
          
          {/* Column 1: Direct Phone Lines */}
          <div className="flex flex-col items-center text-center group">
            <Model3DWithSpiral
              src="/assets/images/contact/3d/phone-3d.webp"
              alt="3D Phone on Pedestal with Spiral Orbit"
              size="desktop"
            />
            {/* Text Information straight below 3D model */}
            <div className="pt-3 space-y-1.5 text-center max-w-sm mx-auto w-full">
              <p className="text-xs sm:text-[13px] font-heading font-extrabold text-[#FFC1D0] uppercase tracking-wider">
                DIRECT PHONE LINES
              </p>
              <div className="space-y-0.5">
                <a
                  href={`tel:${companyContact.phone.replace(/\s+/g, '')}`}
                  className="block text-base sm:text-lg lg:text-xl font-heading font-bold text-white hover:text-[#FFC1D0] transition-colors leading-tight"
                >
                  {companyContact.phoneDisplay}
                </a>
                <a
                  href={`tel:${companyContact.phoneSecondary.replace(/\s+/g, '')}`}
                  className="block text-base sm:text-lg lg:text-xl font-heading font-bold text-white hover:text-[#FFC1D0] transition-colors leading-tight"
                >
                  {companyContact.phoneSecondary}
                </a>
              </div>
              <div className="text-xs text-rose-100/90 font-normal pt-1 flex items-center justify-center gap-1.5 leading-snug">
                <Clock className="w-3.5 h-3.5 text-[#FFC1D0] shrink-0" />
                <div className="flex flex-col space-y-0.5 text-center">
                  <span>Mon – Fri, 9:00 AM – 6:00 PM IST</span>
                  <span>Sat, 9:00 AM – 3:30 PM IST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Official Inquiry Email */}
          <div className="flex flex-col items-center text-center group">
            <Model3DWithSpiral
              src="/assets/images/contact/3d/email-3d.webp"
              alt="3D Email Envelope on Pedestal with Spiral Orbit"
              size="desktop"
            />
            {/* Text Information straight below 3D model */}
            <div className="pt-3 space-y-1.5 text-center max-w-sm mx-auto w-full">
              <p className="text-xs sm:text-[13px] font-heading font-extrabold text-[#FFC1D0] uppercase tracking-wider">
                OFFICIAL INQUIRY EMAIL
              </p>
              <a
                href={`mailto:${companyContact.email}`}
                className="block text-base sm:text-lg lg:text-xl font-heading font-bold text-white hover:text-[#FFC1D0] transition-colors leading-snug break-all"
              >
                {companyContact.email}
              </a>
              <p className="text-xs sm:text-sm text-rose-100/90 font-normal pt-0.5">
                Inquiries &amp; bulk quotations
              </p>
            </div>
          </div>

          {/* Column 3: Corporate Head Office */}
          <div className="flex flex-col items-center text-center group">
            <Model3DWithSpiral
              src="/assets/images/contact/3d/location-3d.webp"
              alt="3D Location Pin on Pedestal with Spiral Orbit"
              size="desktop"
            />
            {/* Text Information straight below 3D model */}
            <div className="pt-3 space-y-1.5 text-center max-w-sm mx-auto w-full">
              <p className="text-xs sm:text-[13px] font-heading font-extrabold text-[#FFC1D0] uppercase tracking-wider">
                CORPORATE OFFICE
              </p>
              <p className="text-base sm:text-lg lg:text-xl font-heading font-bold text-white leading-snug">
                Teeszone Corporate Office
              </p>
              <p className="text-xs sm:text-[13px] text-rose-100/90 font-normal leading-relaxed pt-0.5">
                #2155, Fortune City, Global Market – Texvalley, NH 544 National Highway, Chithode, Erode – 638 102.
              </p>
            </div>
          </div>

        </div>

        {/* ---------------------------------------------------------------------
            MOBILE VIEW (md:hidden - Reference Image 2 Mobile Mockup)
            - 3 Rows: 3D model icon on left + content cleanly aligned on right
            - Clean transparent layout: NO border and NO background card
            --------------------------------------------------------------------- */}
        <div className="md:hidden flex flex-col space-y-6 sm:space-y-7">
          
          {/* Row 1: Direct Phone Lines */}
          <div className="flex items-center gap-4 sm:gap-6 py-1">
            <Model3DWithSpiral
              src="/assets/images/contact/3d/phone-3d.webp"
              alt="3D Phone on Pedestal"
              size="mobile"
            />
            <div className="flex-1 space-y-1 text-left">
              <p className="text-[11px] font-heading font-extrabold text-[#FFC1D0] uppercase tracking-wider">
                DIRECT PHONE LINES
              </p>
              <div className="space-y-0.5">
                <a
                  href={`tel:${companyContact.phone.replace(/\s+/g, '')}`}
                  className="block text-sm sm:text-base font-heading font-bold text-white hover:text-[#FFC1D0] transition-colors leading-tight"
                >
                  {companyContact.phoneDisplay}
                </a>
                <a
                  href={`tel:${companyContact.phoneSecondary.replace(/\s+/g, '')}`}
                  className="block text-sm sm:text-base font-heading font-bold text-white hover:text-[#FFC1D0] transition-colors leading-tight"
                >
                  {companyContact.phoneSecondary}
                </a>
              </div>
              <div className="text-[10.5px] text-rose-100/90 font-normal pt-1 flex items-start gap-1 leading-snug">
                <Clock className="w-3 h-3 text-[#FFC1D0] shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-0.5">
                  <span>Mon – Fri, 9:00 AM – 6:00 PM IST</span>
                  <span>Sat, 9:00 AM – 3:30 PM IST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Official Inquiry Email */}
          <div className="flex items-center gap-4 sm:gap-6 py-1">
            <Model3DWithSpiral
              src="/assets/images/contact/3d/email-3d.webp"
              alt="3D Email Envelope on Pedestal"
              size="mobile"
            />
            <div className="flex-1 space-y-1 text-left">
              <p className="text-[11px] font-heading font-extrabold text-[#FFC1D0] uppercase tracking-wider">
                OFFICIAL INQUIRY EMAIL
              </p>
              <a
                href={`mailto:${companyContact.email}`}
                className="block text-sm sm:text-base font-heading font-bold text-white hover:text-[#FFC1D0] transition-colors leading-snug break-all"
              >
                {companyContact.email}
              </a>
              <p className="text-[11px] text-rose-100/90 font-normal pt-0.5">
                Inquiries &amp; bulk quotations
              </p>
            </div>
          </div>

          {/* Row 3: Corporate Head Office */}
          <div className="flex items-center gap-4 sm:gap-6 py-1">
            <Model3DWithSpiral
              src="/assets/images/contact/3d/location-3d.webp"
              alt="3D Location Pin on Pedestal"
              size="mobile"
            />
            <div className="flex-1 space-y-1 text-left">
              <p className="text-[11px] font-heading font-extrabold text-[#FFC1D0] uppercase tracking-wider">
                CORPORATE OFFICE
              </p>
              <p className="text-sm sm:text-base font-heading font-bold text-white leading-snug">
                Teeszone Corporate Office
              </p>
              <p className="text-[11px] text-rose-100/90 font-normal leading-relaxed pt-0.5">
                #2155, Fortune City, Global Market – Texvalley, NH 544 National Highway, Chithode, Erode – 638 102.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactInfo;
