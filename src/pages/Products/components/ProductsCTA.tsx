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
          
          {/* Left Visual: Folded T-Shirts Stack on Soft Surface */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative max-w-[280px] sm:max-w-[340px] w-full">
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl -z-10" />

              <motion.img
                src="/assets/images/products/folded-tees-cta.png"
                alt="Folded premium custom T-shirts in ivory, burgundy, and navy"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -4 }}
                transition={{ duration: 0.4 }}
                className="w-full h-auto object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.35)] rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Content: Headline, Description & Quote CTA Button */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-white tracking-tight leading-tight">
              Need Custom Apparel <br className="hidden sm:inline" />
              for Your Organization?
            </h2>

            <p className="text-sm sm:text-base xl:text-lg text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Get high-quality, branded apparel tailored to your team, event or institution.
              Fast turnaround, transparent pricing, and complete Tiruppur factory direct production.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-warm-50 text-[#80011F] font-black text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductsCTA;

