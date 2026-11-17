import React from 'react';
import { RevealAnimation } from '@/components/common/RevealAnimation';
import { Clock, HelpCircle, Sparkles } from 'lucide-react';

export const ContactHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-warm-50 to-warm-100/50 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 md:pb-16 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
        <RevealAnimation direction="down" immediate>
          <span className="inline-block text-xs font-heading font-extrabold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 border border-burgundy-100 px-3.5 py-1.5 rounded-full">
            Contact Us
          </span>
        </RevealAnimation>

        <RevealAnimation direction="up" delay={0.05} immediate>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-charcoal-900 leading-tight tracking-tight">
            Let's Create Your Custom{' '}
            <span className="text-burgundy-700">T-Shirts Together</span>
          </h1>
        </RevealAnimation>

        <RevealAnimation direction="up" delay={0.1} immediate>
          <p className="text-base sm:text-lg text-charcoal-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Have a requirement, idea or bulk order? Our team is here to help you with the
            best solutions for your business, organization or event.
          </p>
        </RevealAnimation>

        {/* 3 Value Pillars */}
        <RevealAnimation direction="up" delay={0.15} immediate>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-burgundy-100/60 max-w-xl mx-auto">
            <div className="text-center p-3 rounded-2xl bg-white/70 border border-burgundy-100/40 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-burgundy-50 text-burgundy-700 flex items-center justify-center mb-1.5 mx-auto">
                <Clock className="w-4 h-4" />
              </div>
              <p className="text-xs font-heading font-bold text-charcoal-900">Quick Response</p>
              <p className="text-[10px] text-charcoal-500">(Within 24 Hours)</p>
            </div>

            <div className="text-center p-3 rounded-2xl bg-white/70 border border-burgundy-100/40 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-burgundy-50 text-burgundy-700 flex items-center justify-center mb-1.5 mx-auto">
                <HelpCircle className="w-4 h-4" />
              </div>
              <p className="text-xs font-heading font-bold text-charcoal-900">Expert Guidance</p>
              <p className="text-[10px] text-charcoal-500">For Your Requirements</p>
            </div>

            <div className="text-center p-3 rounded-2xl bg-white/70 border border-burgundy-100/40 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-burgundy-50 text-burgundy-700 flex items-center justify-center mb-1.5 mx-auto">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-xs font-heading font-bold text-charcoal-900">Customized</p>
              <p className="text-[10px] text-charcoal-500">Tailored Solutions</p>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};
