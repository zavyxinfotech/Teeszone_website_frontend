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
        .catch(() => { });
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
      className="relative w-full overflow-hidden bg-[#FAF6F4] pt-24 xs:pt-28 sm:pt-32 lg:pt-36 xl:pt-40 pb-16 sm:pb-20 lg:pb-24 select-none min-h-[580px] xs:min-h-[640px] sm:min-h-[700px] lg:min-h-[720px] flex items-center"
      aria-label="TeesZone Collection Showcase"
    >
      {/* =========================================================================
          BACKGROUND THEME (Warm Cream Base, Organic Curves & Satin Wave matching Home Page)
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden bg-[#FAF6F4]">
        {/* Soft Cream to Warm Amber Gradient Glow */}
        <div className="absolute top-0 right-0 w-[65%] h-full bg-gradient-to-l from-[#F5ECE1]/90 via-[#FAF4EB]/60 to-transparent pointer-events-none" />
        <div className="absolute -top-24 left-1/4 w-[550px] h-[550px] bg-[#FFF2DE]/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[450px] bg-[#FCECEF]/45 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-[450px] h-[450px] bg-[#FAF1E6]/70 rounded-full blur-2xl pointer-events-none" />

        {/* Elegant Organic Cream Wave Ribbons in the background */}
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          preserveAspectRatio="none"
        >
          <path
            d="M560,0 C700,160 840,220 980,120 C1120,20 1280,140 1440,80 L1440,800 L420,800 C480,680 520,520 460,380 C400,240 450,90 560,0 Z"
            fill="url(#creamOrganicBackdropProducts)"
            opacity="0.85"
          />
          <defs>
            <linearGradient id="creamOrganicBackdropProducts" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F5ECE1" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FAF4EB" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#F0E5D6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Decorative Royal Burgundy Satin Fabric Wave at Top Right Corner (Desktop ONLY - Hidden on Mobile) */}
        <svg
          viewBox="0 0 800 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 w-[55%] h-[55%] object-cover hidden md:block"
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
      </div>

      {/* Main Content Container matching Home Page Dimensions & Spacing */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Hero Content: Headline, Description, and CTA (Exact Home Page Typography) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 text-left space-y-4 sm:space-y-5 flex flex-col justify-center"
          >
            {/* Eyebrow Tag matching Home Page */}
            <div>
              <span className="text-sm sm:text-base font-heading font-semibold uppercase tracking-wider text-burgundy-700 block">
                OUR APPAREL COLLECTION
              </span>
            </div>

            {/* Main Headline matching Home Page */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-heading font-bold text-charcoal-900 leading-[1.08] tracking-tight">
              Apparel Crafted <br />
              <span className="text-burgundy-700">for Every Purpose</span>
            </h1>

            {/* Subtitle Description matching Home Page */}
            <p className="text-lg sm:text-xl lg:text-[20px] text-charcoal-700 leading-relaxed max-w-xl font-normal">
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

          {/* Right Column: Showcase Video Frame seamlessly embedded */}
          <div className="lg:col-span-7 w-full h-[320px] sm:h-[400px] lg:h-[480px] xl:h-[520px] relative rounded-3xl overflow-hidden shadow-soft-xl border border-charcoal-200/50 bg-black/5">
            <video
              ref={videoRef}
              src="/assets/videos/products-hero-bg.mp4"
              muted
              playsInline
              preload="auto"
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover object-center"
            />

            {/* Play/Pause Button on Bottom-Right Corner of Video */}
            <div className="absolute bottom-4 right-4 z-20">
              <button
                type="button"
                onClick={togglePlayPause}
                aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
                title={isPlaying ? 'Pause video' : 'Play video'}
                className="w-8 h-8 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-md transition-all active:scale-95 cursor-pointer"
              >
                {isPlaying ? (
                  <Pause className="w-3.5 h-3.5 fill-current" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
