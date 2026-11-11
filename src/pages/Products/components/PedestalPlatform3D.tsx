import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface PedestalPlatform3DProps {
  floatY?: any; // Framer Motion value or static
  className?: string;
}

export const PedestalPlatform3D: React.FC<PedestalPlatform3DProps> = ({
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={`relative w-full max-w-[440px] sm:max-w-[500px] lg:max-w-[540px] xl:max-w-[580px] pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Dynamic Garment Shadow (Grows and shrinks as the garment floats) */}
      <motion.div
        animate={
          !shouldReduceMotion
            ? {
                scale: [1, 0.88, 1],
                opacity: [0.55, 0.38, 0.55],
              }
            : {}
        }
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[28%] bg-gradient-to-r from-transparent via-[#3A000E]/40 to-transparent rounded-full filter blur-[14px] z-10"
      />

      {/* High-Definition 3D Circular Pedestal SVG */}
      <svg
        viewBox="0 0 600 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block filter drop-shadow-[0_24px_38px_rgba(74,0,20,0.14)]"
      >
        <defs>
          {/* Platform Surface Radial Gradient */}
          <radialGradient
            id="pedestalSurface"
            cx="50%"
            cy="45%"
            r="50%"
            fx="50%"
            fy="35%"
          >
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FAF4F0" />
            <stop offset="75%" stopColor="#F1E5E0" />
            <stop offset="100%" stopColor="#E2CFD3" />
          </radialGradient>

          {/* Burgundy Ambient Glow on Platform Center */}
          <radialGradient
            id="pedestalBurgundyAura"
            cx="50%"
            cy="48%"
            r="45%"
          >
            <stop offset="0%" stopColor="#80011F" stopOpacity="0.22" />
            <stop offset="45%" stopColor="#80011F" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#80011F" stopOpacity="0" />
          </radialGradient>

          {/* Outer Bevel / Base Cylinder Gradient */}
          <linearGradient id="pedestalSideBevel" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6B011A" />
            <stop offset="25%" stopColor="#8B0A28" />
            <stop offset="50%" stopColor="#A81D3C" />
            <stop offset="75%" stopColor="#8B0A28" />
            <stop offset="100%" stopColor="#550014" />
          </linearGradient>

          {/* Specular Rim Metallic Highlight Gradient */}
          <linearGradient id="pedestalSpecularRim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8A5B2" stopOpacity="0.4" />
            <stop offset="20%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#FFD8E0" stopOpacity="0.8" />
            <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#D98A98" stopOpacity="0.4" />
          </linearGradient>

          {/* Outer Ambient Floor Drop Shadow Blur Filter */}
          <filter id="floorShadowBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>

        {/* 1. Ambient Floor Contact Shadow */}
        <ellipse
          cx="300"
          cy="135"
          rx="250"
          ry="50"
          fill="#35000C"
          fillOpacity="0.2"
          filter="url(#floorShadowBlur)"
        />

        {/* 2. Platform 3D Cylindrical Extrusion Base */}
        <path
          d="M60,95 C60,135 167,165 300,165 C433,165 540,135 540,95 L540,118 C540,158 433,188 300,188 C167,188 60,158 60,118 Z"
          fill="url(#pedestalSideBevel)"
        />

        {/* 3. Base Bottom Lip Specular Line */}
        <path
          d="M70,118 C70,154 173,184 300,184 C427,184 530,154 530,118"
          stroke="url(#pedestalSpecularRim)"
          strokeWidth="1.5"
          strokeOpacity="0.65"
          fill="none"
        />

        {/* 4. Main Platform Top Disc Surface */}
        <ellipse
          cx="300"
          cy="95"
          rx="240"
          ry="65"
          fill="url(#pedestalSurface)"
        />

        {/* 5. Center Burgundy Aura Spot */}
        <ellipse
          cx="300"
          cy="95"
          rx="210"
          ry="55"
          fill="url(#pedestalBurgundyAura)"
        />

        {/* 6. Concentric Precision Satin Inset Ring */}
        <ellipse
          cx="300"
          cy="95"
          rx="220"
          ry="58"
          stroke="#80011F"
          strokeWidth="1.2"
          strokeOpacity="0.18"
          strokeDasharray="4 3"
          fill="none"
        />

        {/* 7. Inner Clean Accent Ring */}
        <ellipse
          cx="300"
          cy="95"
          rx="175"
          ry="46"
          stroke="#80011F"
          strokeWidth="0.8"
          strokeOpacity="0.12"
          fill="none"
        />

        {/* 8. Specular Beveled Edge Rim (Gleaming luxury highlight) */}
        <ellipse
          cx="300"
          cy="95"
          rx="240"
          ry="65"
          stroke="url(#pedestalSpecularRim)"
          strokeWidth="2.4"
          fill="none"
        />
      </svg>
    </div>
  );
};

