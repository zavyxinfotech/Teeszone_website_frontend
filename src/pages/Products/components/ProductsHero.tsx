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
            {/* Main Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              Apparel Crafted <br />
              for <span className="text-[#FF4D6D] sm:text-[#FF3B62] italic font-black">Every Purpose</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-white/95 leading-relaxed max-w-lg font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              Custom-made apparel for businesses, institutions, events, and teams. Premium
              quality, scalable production, and complete customization.
            </p>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-3">
              <button
                onClick={scrollToProducts}
                className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#80011F] hover:bg-[#A3082E] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#80011F]/50 hover:shadow-xl hover:shadow-[#80011F]/70 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer border border-white/20"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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
