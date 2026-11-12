import React, { useRef } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ProductsHeroProps {
  onExploreClick?: () => void;
}

export const ProductsHero: React.FC<ProductsHeroProps> = ({ onExploreClick }) => {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Interactive 3D mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-8, 8]);
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [7, -7]);

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

  const scrollToProducts = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const el = document.getElementById('our-products');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFDFD] via-[#FDF6F7] to-[#FAF2F4] pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 select-none"
      aria-label="TeesZone Collection Showcase"
      style={{
        perspective: shouldReduceMotion ? 'none' : '1200px',
      }}
    >
      {/* Background Atmospheric Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-[#80011F]/[0.035] rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#80011F]/[0.025] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 text-left space-y-5 sm:space-y-6"
          >
            {/* Small Collection Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#80011F]/10 border border-[#80011F]/20 text-[#80011F] text-xs font-bold tracking-[0.18em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#80011F] animate-pulse" />
              <span>TEESZONE COLLECTION</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#211D20] tracking-tight leading-[1.1]">
              Apparel Crafted <br />
              for <span className="text-[#80011F] italic font-black">Every Purpose</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-[#68616A] leading-relaxed max-w-lg font-normal">
              Custom-made apparel for businesses, institutions, events, and teams. Premium
              quality, scalable production, and complete customization.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={scrollToProducts}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#80011F] hover:bg-[#570016] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#80011F]/25 hover:shadow-xl hover:shadow-[#80011F]/35 transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Center/Right 3D Visual: Floating Apparel Showcase on Pedestal */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-7 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[620px] mx-auto aspect-[1300/1080]">
              
              {/* Dynamic Ambient Glow Behind Apparel */}
              <div
                className="absolute inset-0 m-auto w-[80%] h-[80%] rounded-full pointer-events-none -z-10"
                style={{
                  background: 'radial-gradient(circle, rgba(128,1,31,0.18) 0%, rgba(128,1,31,0.06) 45%, transparent 70%)',
                  filter: 'blur(36px)',
                }}
              />

              {/* Floating Animation Layer for the 3D Apparel Showcase */}
              <motion.div
                animate={
                  !shouldReduceMotion
                    ? {
                        y: [-6, 6, -6],
                      }
                    : {}
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-full h-full relative"
              >
                {/* High-Resolution Photorealistic 3D Floating Apparel Visual */}
                <img
                  src="/assets/images/products/hero-3d-apparel.jpg"
                  alt="TeesZone Premium Apparel Collection Showcase"
                  className="w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_22px_45px_rgba(128,1,31,0.18)] rounded-3xl"
                  loading="eager"
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProductsHero;

