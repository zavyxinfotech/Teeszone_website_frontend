import React from 'react';
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

  return (
    <div
      className={`relative select-none ${className}`}
      style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
    >
      {/* 1. Ambient Floating Garment Shadow */}
      <motion.div
        animate={
          !shouldReduceMotion
            ? {
                scale: [0.95, 1.05, 0.95],
                opacity: [0.22, 0.35, 0.22],
                y: [0, 4, 0],
              }
            : { opacity: 0.28 }
        }
        transition={{
          duration: 4.6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-14 bg-radial from-[#450010]/40 via-[#80011F]/15 to-transparent blur-2xl pointer-events-none -z-10"
      />

      {/* 2. Slow Floating Animation (4-5s per cycle) with subtle 3D pitch/roll */}
      <motion.div
        animate={
          !shouldReduceMotion
            ? {
                y: [0, -8, 0],
                rotateZ: [-0.35, 0.35, -0.35],
                rotateY: [-1.2, 1.2, -1.2],
                rotateX: [0.5, -0.5, 0.5],
              }
            : {}
        }
        transition={{
          duration: 4.6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative h-full flex items-end justify-center will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* 3. Gentle Fabric Flutter on Lower Body / Loose Edges (3-4s per cycle) */}
        <motion.div
          animate={
            !shouldReduceMotion
              ? {
                  skewX: [-0.35, 0.45, -0.35],
                  scaleY: [1, 1.008, 1],
                  scaleX: [1, 0.995, 1],
                }
              : {}
          }
          transition={{
            duration: 3.4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: isMobile ? '50% 18%' : '40% 18%' }}
          className="relative h-full flex items-end justify-center"
        >
          {/* Main Polo Shirt Image - High-Definition Transparent Cutout */}
          <img
            src="/assets/images/about/burgundy-polo-hd.png"
            alt="TeesZone Premium Burgundy Polo T-Shirt"
            className={`object-contain filter drop-shadow-[0_20px_35px_rgba(70,0,20,0.22)] block ${imgClassName || 'w-full h-auto'}`}
            loading="eager"
            draggable={false}
          />

          {/* 4. Subtle Wind Ripple Lighting / Fabric Surface Sheen (3.8s - 4.4s loop)
              - Flows naturally across the fabric folds from left to right
              - Uses mix-blend-soft-light and overlay so all logos, stitching, and textures stay 100% sharp */}
          {!shouldReduceMotion && (
            <div
              className={`absolute inset-0 pointer-events-none overflow-hidden rounded-2xl [mask-image:url(/assets/images/about/burgundy-polo-hd.png)] [mask-size:contain] [mask-repeat:no-repeat] ${
                isMobile ? '[mask-position:bottom]' : '[mask-position:right_bottom]'
              }`}
            >
              {/* Ripple band 1: soft light sweep */}
              <motion.div
                animate={{
                  x: ['-120%', '160%'],
                  opacity: [0.08, 0.22, 0.08],
                }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatDelay: 0.6,
                }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-22deg] mix-blend-soft-light pointer-events-none"
              />
              {/* Ripple band 2: secondary micro-crease flow */}
              <motion.div
                animate={{
                  x: ['-140%', '150%'],
                  opacity: [0.05, 0.16, 0.05],
                }}
                transition={{
                  duration: 4.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.2,
                  repeatDelay: 0.8,
                }}
                className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-[#FFDDD4]/25 to-transparent skew-x-[-26deg] mix-blend-overlay pointer-events-none"
              />
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
