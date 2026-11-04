import React from 'react';
import { RevealAnimation } from '@/components/common/RevealAnimation';
import { WaveDivider } from '@/components/common/WaveDivider';
import { Sparkles, Layers, ShieldCheck, CheckCircle } from 'lucide-react';

export const ProductsHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-warm-50 to-warm-100/60 pt-10 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <RevealAnimation direction="down" immediate>
          <span className="inline-flex items-center gap-1.5 text-xs font-heading font-extrabold uppercase tracking-widest text-burgundy-700 bg-burgundy-50 border border-burgundy-100 px-3.5 py-1.5 rounded-full shadow-soft-sm">
            <Sparkles className="w-3.5 h-3.5 text-burgundy-600" />
            Tiruppur Direct Manufacturing Catalog
          </span>
        </RevealAnimation>

        <RevealAnimation direction="up" delay={0.05} immediate>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-charcoal-900 leading-tight mt-4 max-w-4xl mx-auto">
            Custom Apparel Built for <br />
            <span className="text-burgundy-700">Durability & Style</span>
          </h1>
        </RevealAnimation>

        <RevealAnimation direction="up" delay={0.1} immediate>
          <p className="text-base sm:text-lg text-charcoal-600 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            Explore our specialized custom apparel and uniform categories: corporate wear, blank plain t-shirts,
            school uniforms, promotional event merchandise, and academic sports apparel.
          </p>
        </RevealAnimation>

        {/* 3 Quick Manufacturing Badges */}
        <RevealAnimation direction="up" delay={0.15} immediate>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-6 text-xs sm:text-sm text-charcoal-700 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-burgundy-700" />
              <span>Low Minimum Order Quantity (50 pcs)</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-burgundy-700" />
              <span>180 to 280 GSM Premium Weaves</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-burgundy-700" />
              <span>Pre-Production Physical Swatch</span>
            </div>
          </div>
        </RevealAnimation>
      </div>

      <WaveDivider position="bottom" variant="burgundy-to-white" className="absolute bottom-0 inset-x-0" />
    </section>
  );
};
