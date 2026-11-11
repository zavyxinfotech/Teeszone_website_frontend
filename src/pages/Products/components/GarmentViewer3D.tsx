import React, { useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ProductItem } from '@/data/products';
import { PedestalPlatform3D } from './PedestalPlatform3D';

interface GarmentViewer3DProps {
  product: ProductItem;
  direction: number;
}

export const GarmentViewer3D: React.FC<GarmentViewer3DProps> = ({
  product,
  direction,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle interactive 3D mouse tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const tiltY = useTransform(smoothMouseX, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-7, 7]);
  const tiltX = useTransform(smoothMouseY, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [6, -6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Direction-aware 3D garment transition variants
  const garmentVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.88,
      rotateY: shouldReduceMotion ? 0 : dir > 0 ? 24 : -24,
      y: shouldReduceMotion ? 0 : 20,
    }),
    center: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.9,
      rotateY: shouldReduceMotion ? 0 : dir > 0 ? -24 : 24,
      y: shouldReduceMotion ? 0 : -20,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full flex flex-col items-center justify-center select-none py-4 sm:py-6 lg:py-8"
      style={{
        perspective: shouldReduceMotion ? 'none' : '1200px',
      }}
    >
      {/* 1. Subtle Atmospheric Burgundy Backlight Halo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] lg:w-[540px] xl:w-[600px] h-[340px] sm:h-[460px] lg:h-[540px] xl:h-[600px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(128,1,31,0.14) 0%, rgba(128,1,31,0.05) 45%, rgba(128,1,31,0) 72%)',
          filter: 'blur(30px)',
        }}
        aria-hidden="true"
      />

      {/* 2. Secondary Soft Ambient Light Glow */}
      <div
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[320px] lg:w-[380px] h-[220px] sm:h-[320px] lg:h-[380px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(254,242,244,0.3) 50%, transparent 75%)',
          filter: 'blur(20px)',
        }}
        aria-hidden="true"
      />

      {/* 3. Garment Floating Stage Container */}
      <div className="relative w-full flex items-center justify-center min-h-[340px] xs:min-h-[380px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[560px] xl:min-h-[620px]">
        {/* Interactive Tilt Container */}
        <motion.div
          style={{
            rotateX: tiltX,
            rotateY: tiltY,
            transformStyle: shouldReduceMotion ? 'flat' : 'preserve-3d',
          }}
          className="relative w-full flex flex-col items-center justify-center"
        >
          {/* Continuous Floating Physics Motion Wrapper */}
          <motion.div
            animate={
              !shouldReduceMotion
                ? {
                    y: [-8, 7, -8],
                    rotateZ: [-0.6, 0.6, -0.6],
                  }
                : {}
            }
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative z-20 flex items-center justify-center w-full"
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={product.id}
                custom={direction}
                variants={garmentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative flex items-center justify-center w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[430px] md:max-w-[480px] lg:max-w-[530px] xl:max-w-[580px] 2xl:max-w-[640px]"
              >
                {/* Garment Image with Realistic Soft Drop Shadow */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto max-h-[320px] xs:max-h-[360px] sm:max-h-[420px] md:max-h-[470px] lg:max-h-[520px] xl:max-h-[570px] object-contain block filter drop-shadow-[0_22px_36px_rgba(50,0,14,0.22)] transition-transform duration-300"
                  loading="eager"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* 4. Circular 3D Display Platform Pedestal */}
          <div className="w-full flex justify-center -mt-10 sm:-mt-14 md:-mt-16 lg:-mt-20 z-10 pointer-events-none">
            <PedestalPlatform3D />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
