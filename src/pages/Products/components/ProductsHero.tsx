import React, { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Play, Pause } from 'lucide-react';

interface ProductsHeroProps {
  onExploreClick?: () => void;
}

export const ProductsHero: React.FC<ProductsHeroProps> = ({ onExploreClick }) => {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Play once on scroll into hero section; pause when scrolling away
  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (!video) return;

          if (entry.isIntersecting) {
            // Replay from beginning once when scrolled into view
            video.currentTime = 0;
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  setIsPlaying(true);
                })
                .catch(() => {
                  // Autoplay policy fallback
                  setIsPlaying(false);
                });
            }
          } else {
            // Scrolled out of view - pause
            if (!video.paused) {
              video.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleVideoEnded = () => {
    setIsPlaying(false);
    // Video remains paused on the final showcase frame
  };

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      if (video.ended || video.currentTime >= (video.duration || 5) - 0.1) {
        video.currentTime = 0;
      }
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
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
      className="relative w-full overflow-hidden bg-[#0D0B0D] pt-24 xs:pt-28 sm:pt-32 lg:pt-36 xl:pt-40 pb-16 sm:pb-20 lg:pb-24 select-none min-h-[580px] xs:min-h-[640px] sm:min-h-[700px] lg:min-h-[720px] flex items-center"
      aria-label="TeesZone Collection Showcase"
    >
      {/* 1. Full-Hero Background Video (Plays once then pauses on final frame) */}
      <video
        ref={videoRef}
        src="/assets/videos/products-hero-bg.mp4"
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnded}
        className="absolute inset-0 w-full h-full object-cover object-[70%_center] sm:object-center pointer-events-none z-0"
      />

      {/* 2. Top Header Backdrop Scrim (Keeps Navbar Logo and Navigation Links crystal clear) */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-28 bg-gradient-to-b from-[#FFFDFD] via-[#FFFDFD]/85 to-transparent pointer-events-none z-[4]" />

      {/* Decorative Royal Burgundy Satin Fabric Wave at Top Right Corner (Desktop ONLY - Hidden on Mobile) */}
      <svg
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-0 w-[55%] h-[55%] object-cover hidden md:block pointer-events-none select-none z-[5]"
        preserveAspectRatio="none"
      >
        <path
          d="M320,0 C480,90 600,60 800,190 L800,0 Z"
          fill="url(#desktopSatinWaveProducts)"
        />
        <path
          d="M440,0 C560,110 680,85 800,240 L800,0 Z"
          fill="#800020"
          fillOpacity="0.18"
        />
        <defs>
          <linearGradient id="desktopSatinWaveProducts" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#580819" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#7A1027" stopOpacity="0.75" />
            <stop offset="80%" stopColor="#9C1E3A" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#580819" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>

      {/* 3. Dark Backdrop Tint for 100% Mobile & Desktop Legibility */}
      <div className="absolute inset-0 bg-black/45 sm:bg-black/20 lg:bg-transparent pointer-events-none z-[1]" />

      {/* 4. Left-Side Dark Gradient Scrim (Guarantees 100% WCAG AAA Text Contrast across all screen widths) */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-black/90 via-black/75 lg:via-black/60 to-transparent pointer-events-none z-[2]" />

      {/* 5. Bottom Soft Transition into Page Background */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAF2F4] via-[#FAF2F4]/40 to-transparent pointer-events-none z-[2]" />

      {/* 6. Main Content Container */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Content: Headline, Description, and CTA */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 text-left space-y-5 sm:space-y-6 flex flex-col justify-center"
          >
            {/* Eyebrow Tag matching Home Page */}
            <div>
              <span className="text-xs sm:text-sm font-heading font-extrabold uppercase tracking-widest text-[#FFC1D0] block">
                OUR APPAREL COLLECTION
              </span>
            </div>

            {/* Main Headline matching Home Page */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-heading font-black text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              Apparel Crafted <br />
              for <span className="text-[#FFC1D0] sm:text-[#FF99B0] italic font-heading font-black">Every Purpose</span>
            </h1>

            {/* Subtitle Description matching Home Page */}
            <p className="text-base sm:text-lg lg:text-[20px] text-white/90 leading-relaxed max-w-lg font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              Custom-made apparel for businesses, institutions, events, and teams. Premium
              quality, scalable production, and complete customization.
            </p>

            {/* CTA Button matching Home Page */}
            <div className="pt-2 sm:pt-3">
              <button
                onClick={scrollToProducts}
                className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-heading font-medium text-base sm:text-lg shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Transparent spacer reserving room for the Video's 3D Apparel Showcase */}
          <div className="lg:col-span-7 min-h-[240px] xs:min-h-[300px] sm:min-h-[380px] lg:min-h-[500px] pointer-events-none" />

        </div>
      </div>

      {/* 7. Very Small Play/Pause Button at Bottom-Left Corner */}
      <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-6 z-30">
        <button
          type="button"
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause background animation' : 'Play background animation'}
          title={isPlaying ? 'Pause animation' : 'Play animation'}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/30 text-white/90 hover:text-white flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
        >
          {isPlaying ? (
            <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
          ) : (
            <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" />
          )}
        </button>
      </div>
    </section>
  );
};

export default ProductsHero;
