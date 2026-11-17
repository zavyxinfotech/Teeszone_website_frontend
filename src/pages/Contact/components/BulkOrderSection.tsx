import React from 'react';
import { WaveDivider } from '@/components/common/WaveDivider';
import { RevealAnimation } from '@/components/common/RevealAnimation';
import {
  Briefcase,
  GraduationCap,
  Megaphone,
  Store,
  Layers,
} from 'lucide-react';

export const BulkOrderSection: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* 1. Burgundy Bulk Orders Banner */}
      <section className="relative bg-burgundy-700 text-white pt-14 pb-16 overflow-hidden">
        <WaveDivider position="top" variant="white-to-burgundy" className="absolute top-0 inset-x-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Sewing Floor Graphic */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <RevealAnimation direction="right">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20">
                  <img
                    src="/assets/images/quality-check.webp"
                    alt="TeesZone high capacity stitching line in Tiruppur"
                    className="w-full h-auto object-cover hover:scale-103 transition-transform duration-700"
                  />
                </div>
              </RevealAnimation>
            </div>

            {/* Right Text & 5 Categories */}
            <div className="lg:col-span-7 space-y-5 order-1 lg:order-2 text-center lg:text-left">
              <RevealAnimation direction="left">
                <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-warm-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  Wholesale & Industrial Manufacturing
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white mt-2 leading-tight">
                  Bulk Orders & Custom Requirements
                </h2>
                <p className="text-sm sm:text-base text-burgundy-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Whether you need T-shirts for your company, school, college, event, retail brand
                  or any organization, we are ready to support you with high-quality manufacturing
                  and timely delivery.
                </p>
              </RevealAnimation>

              {/* 5 Icons Strip */}
              <RevealAnimation direction="up" delay={0.15}>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-3">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/10 text-center flex flex-col items-center">
                    <Briefcase className="w-5 h-5 text-warm-200 mb-1.5" />
                    <span className="text-xs font-heading font-bold text-white leading-tight">
                      Corporate Enquiries
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/10 border border-white/10 text-center flex flex-col items-center">
                    <GraduationCap className="w-5 h-5 text-warm-200 mb-1.5" />
                    <span className="text-xs font-heading font-bold text-white leading-tight">
                      School & College Orders
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/10 border border-white/10 text-center flex flex-col items-center">
                    <Megaphone className="w-5 h-5 text-warm-200 mb-1.5" />
                    <span className="text-xs font-heading font-bold text-white leading-tight">
                      Event Merchandise
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/10 border border-white/10 text-center flex flex-col items-center">
                    <Store className="w-5 h-5 text-warm-200 mb-1.5" />
                    <span className="text-xs font-heading font-bold text-white leading-tight">
                      Retail & Brand Collections
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/10 border border-white/10 text-center flex flex-col items-center col-span-2 sm:col-span-1">
                    <Layers className="w-5 h-5 text-warm-200 mb-1.5" />
                    <span className="text-xs font-heading font-bold text-white leading-tight">
                      Other Requirements
                    </span>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>

        <WaveDivider position="bottom" variant="burgundy-to-white" className="absolute bottom-0 inset-x-0" />
      </section>
    </div>
  );
};
