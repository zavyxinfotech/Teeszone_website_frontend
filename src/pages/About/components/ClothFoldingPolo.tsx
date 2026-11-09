import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ClothFoldingPoloProps {
  className?: string;
  imgClassName?: string;
  isMobile?: boolean;
}

export const ClothFoldingPolo: React.FC<ClothFoldingPoloProps> = ({
  className = '',
  imgClassName = '',
  isMobile = false,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [hasUnfolded, setHasUnfolded] = useState(false);

  return (
    <div
      className={`relative select-none ${className}`}
      style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
    >
      {/* Soft Ambient Cloth Shadow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.5, ease: 'easeOut' }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-16 bg-radial from-[#570018]/45 via-[#80011F]/20 to-transparent blur-2xl pointer-events-none -z-10"
      />

      {/* 3D Cloth Unfolding Container */}
      <motion.div
        initial={
          shouldReduceMotion
            ? { opacity: 0 }
            : {
              opacity: 0,
              rotateX: 32,
              rotateY: -26,
              rotateZ: 4,
              scale: 0.82,
              y: -18,
              transformOrigin: isMobile ? '50% 15%' : '30% 20%',
            }
        }
        animate={
          shouldReduceMotion
            ? { opacity: 1 }
            : {
              opacity: 1,
              rotateX: [32, 14, -2, 0],
              rotateY: [-26, -10, 2, 0],
              rotateZ: [4, 1.5, -0.5, 0],
              scale: [0.82, 0.92, 1.01, 1],
              y: [-18, -8, 2, 0],
            }
        }
        transition={{
          duration: 1.5,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
          times: [0, 0.45, 0.82, 1],
        }}
        onAnimationComplete={() => setHasUnfolded(true)}
        className="relative will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Subtle Ambient Breathing/Floating after Unfolding */}
        <motion.div
          animate={
            hasUnfolded && !shouldReduceMotion
              ? {
                y: [0, -6, 0],
                rotateZ: [-0.25, 0.25, -0.25],
              }
              : {}
          }
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative"
        >
          {/* Main Polo Shirt Image - Exact supplied asset */}
          <img
            src="/assets/images/about/burgundy-polo-hd.png"
            alt="TeesZone Premium Burgundy Polo T-Shirt with Custom Branding"
            className={`w-full h-auto object-contain filter drop-shadow-[0_20px_35px_rgba(87,0,24,0.22)] block ${imgClassName}`}
            loading="eager"
            draggable={false}
          />

          {/* Dynamic Fabric Fold Crease / Shadow (dissolves as the cloth unfolds) */}
          {!shouldReduceMotion && (
            <motion.div
              initial={{ opacity: 0.65 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.2, delay: 0.35, ease: 'easeOut' }}
              className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-tr from-black/40 via-black/20 via-35% to-transparent mix-blend-multiply"
              aria-hidden="true"
            />
          )}

          {/* Specular Light Sweep simulating fabric catching light during unfold */}
          {!shouldReduceMotion && (
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '180%', opacity: [0, 0.35, 0] }}
              transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-[-25deg] pointer-events-none mix-blend-overlay"
              aria-hidden="true"
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
