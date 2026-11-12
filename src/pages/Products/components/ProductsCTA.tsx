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
      className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20 bg-[#FAF2F4] select-none"
      aria-label="Custom Apparel Call to Action"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Flowing Burgundy Banner with Curved Edges */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative rounded-[36px] sm:rounded-[48px] overflow-hidden bg-gradient-to-r from-[#570016] via-[#80011F] to-[#570016] text-white p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(128,1,31,0.2)] border-2 border-white/40"
        >
          {/* Subtle Organic Wave Curves in Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 400"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M 0,200 C 300,100 600,300 1200,150 L 1200,400 L 0,400 Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Visual: Folded T-Shirts Stack on Soft Surface */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative max-w-[280px] sm:max-w-[340px] w-full">
                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl -z-10" />

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
        </motion.div>

      </div>
    </section>
  );
};

export default ProductsCTA;
