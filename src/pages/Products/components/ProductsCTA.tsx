import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProductsCTAProps {
  onOpenQuote?: () => void;
}

export const ProductsCTA: React.FC<ProductsCTAProps> = ({ onOpenQuote }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#73011c] via-[#4d0012] to-[#30000a] text-white select-none pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20"
      aria-label="Custom Apparel Call to Action"
    >
      {/* Seamless Wave Transition matching preceding section (#FFFDFD) */}
      <div
        className="absolute top-0 inset-x-0 overflow-hidden leading-none pointer-events-none z-10"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-5 sm:h-8 md:h-11"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,15 C1200,55 920,70 620,40 C320,10 120,40 0,25 Z"
            fill="#FFFDFD"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 sm:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Visual: Folded T-Shirts Stack on Soft Surface - Substantially Increased Size */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative max-w-[460px] sm:max-w-[560px] lg:max-w-[650px] w-full">
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-white/15 rounded-full blur-3xl -z-10" />

              <motion.img
                src="/assets/images/products/products-cta-tshirts.webp"
                alt="Folded premium custom polo T-shirts stack with Teeszone branding"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -4 }}
                transition={{ duration: 0.4 }}
                className="w-full h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.5)] transform scale-105 sm:scale-110 lg:scale-120 origin-center lg:origin-left"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Content: Headline, Description & Quote CTA Button - Matching Home Page Typography */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-4 sm:space-y-6">
            <span className="text-xs sm:text-sm font-heading font-extrabold uppercase tracking-widest text-[#FFC1D0] block">
              ELEVATE YOUR BRAND
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-heading font-black text-white tracking-tight leading-[1.12]">
              Need Custom Apparel <br className="hidden sm:inline" />
              for Your Organization?
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Get high-quality, branded apparel tailored to your team, event or institution.
              Fast turnaround, transparent pricing, and complete Tiruppur factory direct production.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="group inline-flex items-center gap-3 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white hover:bg-warm-50 text-burgundy-700 hover:text-burgundy-900 font-heading font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductsCTA;

