import React from 'react';
import { Button } from '@/components/common/Button';
import { WaveDivider } from '@/components/common/WaveDivider';
import { RevealAnimation } from '@/components/common/RevealAnimation';
import { CheckCircle2, ShieldCheck, Factory, Truck } from 'lucide-react';

interface QuoteCTAProps {
  title?: string;
  subtitle?: string;
  variant?: 'home' | 'about' | 'contact' | 'products';
  onOpenQuote?: () => void;
}

export const QuoteCTA: React.FC<QuoteCTAProps> = ({
  title = "Let's Create Your Custom T-Shirts",
  subtitle = 'Partner with TeesZone for high-quality, stylish and affordable T-shirts, uniforms and custom apparel for your business, team or event.',
  onOpenQuote,
}) => {
  return (
    <section className="relative bg-burgundy-700 text-white overflow-hidden pt-12 pb-14 md:py-16">
      {/* Wave transition at top */}
      <WaveDivider position="top" variant="white-to-burgundy" className="absolute top-0 inset-x-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text and Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <RevealAnimation direction="up">
              <span className="inline-block text-xs uppercase font-heading font-bold tracking-wider px-3 py-1 rounded-full bg-white/10 text-warm-200 border border-white/20 mb-3">
                Bulk Manufacturing Made Simple
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
                {title}
              </h2>
              <p className="text-base sm:text-lg text-burgundy-100 max-w-xl mx-auto lg:mx-0 mt-3 leading-relaxed">
                {subtitle}
              </p>
            </RevealAnimation>

            <RevealAnimation direction="up" delay={0.15}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  variant="white"
                  size="lg"
                  withArrow
                  onClick={onOpenQuote}
                  to={!onOpenQuote ? '/contact?mode=quote' : undefined}
                >
                  Get a Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  to="/contact"
                  className="border-white/80 text-white hover:bg-white hover:text-burgundy-700"
                  withArrow
                >
                  Contact Us
                </Button>
              </div>
            </RevealAnimation>
          </div>

          {/* Editorial Visual: Clothes rack with custom t-shirts */}
          <div className="lg:col-span-5 flex justify-center">
            <RevealAnimation direction="left" delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 max-w-md">
                <img
                  src="/assets/images/hanging-tees.webp"
                  alt="TeesZone custom branded t-shirt manufacturing lineup"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-semibold text-warm-200 tracking-wide">
                    Tiruppur Quality Guaranteed • Custom Embroidery & Prints
                  </span>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>

        {/* 4 Bottom Micro-Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/15">
          <div className="flex items-center gap-2.5 justify-center lg:justify-start text-xs sm:text-sm text-warm-100 font-medium">
            <ShieldCheck className="w-4 h-4 text-warm-300 shrink-0" />
            <span>Quality Products</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center lg:justify-start text-xs sm:text-sm text-warm-100 font-medium">
            <CheckCircle2 className="w-4 h-4 text-warm-300 shrink-0" />
            <span>Custom Solutions</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center lg:justify-start text-xs sm:text-sm text-warm-100 font-medium">
            <Factory className="w-4 h-4 text-warm-300 shrink-0" />
            <span>Bulk Production</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center lg:justify-start text-xs sm:text-sm text-warm-100 font-medium">
            <Truck className="w-4 h-4 text-warm-300 shrink-0" />
            <span>On-Time Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
