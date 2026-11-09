import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface FabricWave3DProps {
  scrollYProgress?: any;
}

export const FabricWave3D: React.FC<FabricWave3DProps> = ({ scrollYProgress }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="absolute bottom-0 left-0 right-0 w-full pointer-events-none select-none z-20 overflow-hidden leading-none"
      aria-hidden="true"
    >
      {/* =========================================================================
          DESKTOP 3D FABRIC WAVE (Vector SVG)
          - Decreased wave height on the right side so polo shirt is fully prominent
          - Wave starts gentle at left, crests at center-right, then swoops low at right edge
          - Multi-layered velvet and satin burgundy gradients
          - Glowing cream specular rim highlight
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="hidden sm:block w-full will-change-transform"
      >
        <motion.div
          animate={
            !shouldReduceMotion
              ? {
                  y: [0, -4, 0],
                }
              : {}
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-full"
        >
          <svg
            viewBox="0 0 1440 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto block filter drop-shadow-[0_-12px_28px_rgba(87,0,24,0.30)]"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Layer 1: Deep Velvet Shadow Gradient */}
              <linearGradient id="deepVelvetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38000C" />
                <stop offset="50%" stopColor="#4D0014" />
                <stop offset="100%" stopColor="#30000A" />
              </linearGradient>

              {/* Layer 2: Middle Satin Fold Gradient */}
              <linearGradient id="satinFoldGrad" x1="0%" y1="20%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#630117" />
                <stop offset="45%" stopColor="#78011D" />
                <stop offset="85%" stopColor="#520015" />
                <stop offset="100%" stopColor="#3D0010" />
              </linearGradient>

              {/* Layer 3: Foreground Main Ribbon Gradient */}
              <linearGradient id="foregroundRibbonGrad" x1="10%" y1="0%" x2="90%" y2="100%">
                <stop offset="0%" stopColor="#8A0927" />
                <stop offset="35%" stopColor="#80011F" />
                <stop offset="65%" stopColor="#6B011A" />
                <stop offset="100%" stopColor="#4A0012" />
              </linearGradient>

              {/* Specular Cream Edge Line Gradient */}
              <linearGradient id="specularCreamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFF8F5" stopOpacity="0.4" />
                <stop offset="40%" stopColor="#FFF9F7" stopOpacity="0.95" />
                <stop offset="70%" stopColor="#FFF2EE" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FFE8E2" stopOpacity="0.6" />
              </linearGradient>

              {/* Specular Glow Filter */}
              <filter id="silkEdgeGlow" x="-20%" y="-40%" width="140%" height="180%">
                <feGaussianBlur stdDeviation="3.5" result="glow" />
                <feComposite in="SourceGraphic" in2="glow" operator="over" />
              </filter>
            </defs>

            {/* FOLD 1: Deep Background Shadow Fold */}
            <path
              d="M0,195 C320,215 580,185 820,165 C1080,145 1280,185 1440,215 L1440,280 L0,280 Z"
              fill="url(#deepVelvetGrad)"
            />

            {/* FOLD 2: Middle Satin Burgundy Swell */}
            <path
              d="M0,225 C300,238 560,195 820,152 C1080,120 1280,175 1440,205 L1440,280 L0,280 Z"
              fill="url(#satinFoldGrad)"
            />

            {/* FOLD 3: Foreground Main Ribbon Wave - Low on Right Side */}
            <path
              d="M0,248 C280,260 550,210 820,145 C1060,105 1260,165 1440,198 L1440,280 L0,280 Z"
              fill="url(#foregroundRibbonGrad)"
            />

            {/* SPECULAR RIM: Glowing Cream Highlight Curve */}
            <path
              d="M0,248 C280,260 550,210 820,145 C1060,105 1260,165 1440,198"
              stroke="url(#specularCreamGrad)"
              strokeWidth="3.2"
              fill="none"
              filter="url(#silkEdgeGlow)"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* =========================================================================
          MOBILE 3D FABRIC WAVE (Dedicated Narrow Screen View)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.35, ease: 'easeOut' }}
        className="block sm:hidden w-full will-change-transform"
      >
        <svg
          viewBox="0 0 390 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block filter drop-shadow-[0_-8px_20px_rgba(87,0,24,0.30)]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="mobVelvetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A0012" />
              <stop offset="100%" stopColor="#2E0008" />
            </linearGradient>
            <linearGradient id="mobSatinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8A0927" />
              <stop offset="50%" stopColor="#80011F" />
              <stop offset="100%" stopColor="#520014" />
            </linearGradient>
            <linearGradient id="mobRimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFF8F5" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#FFF9F7" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FFE8E2" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* Mobile Fold 1 */}
          <path
            d="M0,95 C90,110 180,95 270,75 C320,65 365,75 390,85 L390,140 L0,140 Z"
            fill="url(#mobVelvetGrad)"
          />

          {/* Mobile Fold 2 */}
          <path
            d="M0,115 C90,125 180,105 270,68 C320,52 365,65 390,75 L390,140 L0,140 Z"
            fill="url(#mobSatinGrad)"
          />

          {/* Mobile Specular Rim */}
          <path
            d="M0,115 C90,125 180,105 270,68 C320,52 365,65 390,75"
            stroke="url(#mobRimGrad)"
            strokeWidth="2.6"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
};
