import React from 'react';
import { Button } from '@/components/common/Button';
import { RevealAnimation } from '@/components/common/RevealAnimation';
import { WaveDivider } from '@/components/common/WaveDivider';

interface AboutHeroProps {
  onOpenQuote?: () => void;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative bg-gradient-to-b from-white via-warm-50 to-warm-100/40 pt-8 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <RevealAnimation direction="down" immediate>
              <span className="inline-block text-xs font-heading font-extrabold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 border border-burgundy-100 px-3.5 py-1.5 rounded-full">
                About TeesZone
              </span>
            </RevealAnimation>

            <RevealAnimation direction="up" delay={0.05} immediate>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-charcoal-900 leading-[1.1] tracking-tight">
                Built to Represent <br />
                <span className="text-burgundy-700">Your Brand.</span>
              </h1>
            </RevealAnimation>

            <RevealAnimation direction="up" delay={0.1} immediate>
              <p className="text-base sm:text-lg text-charcoal-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                TeesZone Clothing Private Limited is a premium apparel manufacturer committed
                to delivering high-quality custom T-shirts, uniforms and corporate apparel for
                businesses, organizations, events and brands across India.
              </p>
            </RevealAnimation>

            <RevealAnimation direction="up" delay={0.15} immediate>
              <div className="pt-2 flex justify-center lg:justify-start">
                <Button
                  variant="primary"
                  size="lg"
                  withArrow
                  onClick={onOpenQuote}
                  to={!onOpenQuote ? '/contact?mode=quote' : undefined}
                  className="shadow-soft hover:shadow-soft-lg"
                >
                  Get a Quote
                </Button>
              </div>
            </RevealAnimation>
          </div>

          {/* Right Factory Interior Visual */}
          <div className="lg:col-span-6 relative">
            <RevealAnimation direction="left" delay={0.1} immediate>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Floating Script Tagline */}
                <div className="absolute -top-6 left-6 z-20 transform rotate-[-4deg] bg-white/95 backdrop-blur-sm border border-burgundy-200 shadow-md px-4 py-1.5 rounded-full">
                  <span className="font-heading italic font-bold text-xs sm:text-sm text-burgundy-700">
                    Wear Your Identity
                  </span>
                </div>

                {/* Factory Interior Photo */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/assets/images/factory-interior.webp"
                    alt="TeesZone advanced apparel manufacturing plant in Tiruppur"
                    className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-700"
                  />
                </div>

                {/* Ambient glow */}
                <div
                  className="absolute -inset-4 bg-gradient-to-r from-burgundy-200/40 to-warm-300/40 rounded-3xl blur-2xl -z-10 opacity-70"
                  aria-hidden="true"
                />
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>

      <WaveDivider position="bottom" variant="burgundy-to-white" className="absolute bottom-0 inset-x-0" />
    </section>
  );
};
