import React from 'react';
import { Button } from '@/components/common/Button';
import { RevealAnimation } from '@/components/common/RevealAnimation';

interface OurStoryProps {
  onScrollToProcess?: () => void;
}

export const OurStory: React.FC<OurStoryProps> = ({ onScrollToProcess }) => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-burgundy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Story Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <RevealAnimation direction="up">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 px-3 py-1 rounded-full border border-burgundy-100">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-charcoal-900 mt-3 leading-tight">
                From Fabric to <br />
                <span className="text-burgundy-700">Your Brand.</span>
              </h2>
            </RevealAnimation>

            <RevealAnimation direction="up" delay={0.1}>
              <p className="text-base text-charcoal-600 leading-relaxed">
                At TeesZone, we combine modern manufacturing facilities, skilled workforce
                and strict quality control to deliver the best T-shirts and uniform solutions
                for every business need.
              </p>
              <p className="text-base text-charcoal-600 leading-relaxed mt-4">
                From fabric sourcing to cutting, stitching, printing, quality check and packing,
                every step is handled with care to ensure premium quality and consistency. Operating
                directly out of Tiruppur gives us unprecedented access to world-class combed cotton,
                sustainable organic blends, and cutting-edge apparel processing technologies.
              </p>
            </RevealAnimation>

            <RevealAnimation direction="up" delay={0.2}>
              <Button
                variant="primary"
                size="lg"
                withArrow
                onClick={() => {
                  if (onScrollToProcess) {
                    onScrollToProcess();
                  } else {
                    const el = document.getElementById('process-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Our Manufacturing Process
              </Button>
            </RevealAnimation>
          </div>

          {/* 4-Part Editorial Photo Composition */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {/* Large Top Image */}
              <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-burgundy-100/60 bg-warm-50">
                <img
                  src="/assets/images/quality-check.webp"
                  alt="TeesZone master tailors and stitching floor"
                  className="w-full h-52 sm:h-64 object-cover hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Bottom 3 Grid Images */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-burgundy-100/60 aspect-square bg-warm-50">
                  <img
                    src="/assets/images/apparel-products.webp"
                    alt="Premium knitwear fabric sourcing"
                    className="w-full h-full object-cover hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-burgundy-100/60 aspect-square bg-warm-50">
                  <img
                    src="/assets/images/fabric-printing.webp"
                    alt="Precision screen and DTF printing carousel"
                    className="w-full h-full object-cover hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-burgundy-100/60 aspect-square bg-warm-50">
                  <img
                    src="/assets/images/bulk-orders.webp"
                    alt="Pan-India carton packaging and dispatch"
                    className="w-full h-full object-cover hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
