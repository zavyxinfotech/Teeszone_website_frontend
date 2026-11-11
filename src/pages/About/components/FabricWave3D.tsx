import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface FabricWave3DProps {
  scrollYProgress?: any;
}

export const FabricWave3D: React.FC<FabricWave3DProps> = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="absolute bottom-0 left-0 right-0 w-full pointer-events-none select-none z-20 overflow-hidden leading-none"
      aria-hidden="true"
    >
      {/* =========================================================================
          DESKTOP 3D FABRIC WAVE (Vector SVG)
          - Exactly calibrated to Image 1:
            * Starts low on left (~8% of hero height)
            * Dips gently to ~2% near center-left (x ~ 400-500)
            * Sweeps smoothly up to ~18-20% on the right (x ~ 1100-1300)
            * Cleanly cradles the bottom of the polo shirt without covering buttons or branding
            * Multi-layered velvet & satin burgundy folds with glowing cream specular rim
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="hidden sm:block w-full will-change-transform"
      >
        <motion.div
          animate={
            !shouldReduceMotion
              ? {
                y: [0, -3.5, 0],
              }
              : {}
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-full"
        >
          <svg
            viewBox="0 0 1440 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[160px] sm:h-[180px] lg:h-[200px] xl:h-[225px] 2xl:h-[245px] block filter drop-shadow-[0_-8px_20px_rgba(80,1,20,0.25)]"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Layer 1: Deep Velvet Shadow Gradient */}
              <linearGradient id="waveDeepVelvet" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#280006" />
                <stop offset="50%" stopColor="#3E000F" />
                <stop offset="100%" stopColor="#220005" />
              </linearGradient>

              {/* Layer 2: Middle Satin Fold Gradient */}
              <linearGradient id="waveSatinFold" x1="0%" y1="20%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#550114" />
                <stop offset="45%" stopColor="#6C0119" />
                <stop offset="85%" stopColor="#4A0012" />
                <stop offset="100%" stopColor="#36000E" />
              </linearGradient>

              {/* Layer 3: Foreground Main Ribbon Gradient */}
              <linearGradient id="waveForeground" x1="10%" y1="0%" x2="90%" y2="100%">
                <stop offset="0%" stopColor="#7E0824" />
                <stop offset="35%" stopColor="#80011F" />
                <stop offset="65%" stopColor="#680118" />
                <stop offset="100%" stopColor="#480012" />
              </linearGradient>

              {/* Specular Cream Edge Line Gradient */}
              <linearGradient id="waveCreamEdge" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFF8F5" stopOpacity="0.4" />
                <stop offset="35%" stopColor="#FFF9F7" stopOpacity="0.95" />
                <stop offset="70%" stopColor="#FFF2EE" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FFE8E2" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* FOLD 1: Deep Background Shadow Fold */}
            <path
              d="M0,185 C320,195 540,202 780,180 C1020,154 1240,132 1440,140 L1440,220 L0,220 Z"
              fill="url(#waveDeepVelvet)"
            />

            {/* FOLD 2: Middle Satin Burgundy Swell */}
            <path
              d="M0,188 C300,198 560,204 820,174 C1060,142 1260,120 1440,130 L1440,220 L0,220 Z"
              fill="url(#waveSatinFold)"
            />

            {/* FOLD 3: Main Foreground Ribbon */}
            <path
              d="M0,192 C340,204 580,208 840,168 C1080,132 1280,112 1440,122 L1440,220 L0,220 Z"
              fill="url(#waveForeground)"
            />

            {/* Specular Cream Edge Line (Crisp luminous silk rim) */}
            <path
              d="M0,192 C340,204 580,208 840,168 C1080,132 1280,112 1440,122"
              stroke="url(#waveCreamEdge)"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* =========================================================================
          MOBILE 3D FABRIC WAVE (Vector SVG)
          - Scaled down, low profile (~12% height from bottom)
          - Keeps polo shirt completely visible above it
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="block sm:hidden w-full will-change-transform"
      >
        <svg
          viewBox="0 0 390 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block filter drop-shadow-[0_-4px_12px_rgba(80,1,20,0.22)]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveMobileForeground" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7E0824" />
              <stop offset="50%" stopColor="#80011F" />
              <stop offset="100%" stopColor="#4A0012" />
            </linearGradient>
            <linearGradient id="waveMobileEdge" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFF8F5" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#FFF9F7" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FFE8E2" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* Background subtle fold */}
          <path
            d="M0,78 C110,84 210,80 300,56 C345,44 375,48 390,52 L390,90 L0,90 Z"
            fill="#450012"
          />

          {/* Foreground ribbon */}
          <path
            d="M0,82 C120,87 220,82 300,50 C345,36 375,40 390,45 L390,90 L0,90 Z"
            fill="url(#waveMobileForeground)"
          />

          {/* Cream specular highlight */}
          <path
            d="M0,82 C120,87 220,82 300,50 C345,36 375,40 390,45"
            stroke="url(#waveMobileEdge)"
            strokeWidth="1.8"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
};
