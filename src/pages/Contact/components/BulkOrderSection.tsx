import React from 'react';
import { WaveDivider } from '@/components/common/WaveDivider';
import { RevealAnimation } from '@/components/common/RevealAnimation';
import {
  Briefcase,
  GraduationCap,
  Megaphone,
  Store,
  Layers,
  Factory,
  Headphones,
  Clock,
  Truck,
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

      {/* 2. Why Contact TeesZone? 4 Capabilities */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 px-3 py-1 rounded-full border border-burgundy-100">
              Direct Partnership
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-charcoal-900 mt-2">
              Why Contact <span className="text-burgundy-700">TeesZone?</span>
            </h3>
            <p className="text-sm text-charcoal-600 mt-2">
              Your direct pipeline to India's premier knitwear manufacturing hub in Tiruppur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-warm-50 border border-burgundy-100 hover:shadow-soft transition-all duration-300 h-full">
              <div className="w-12 h-12 rounded-xl bg-burgundy-100 text-burgundy-700 flex items-center justify-center mb-4">
                <Factory className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-base text-charcoal-900 mb-1.5">
                Direct Manufacturer
              </h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Get the best pricing and quality directly from our Tiruppur factory with zero
                intermediary fees.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-warm-50 border border-burgundy-100 hover:shadow-soft transition-all duration-300 h-full">
              <div className="w-12 h-12 rounded-xl bg-burgundy-100 text-burgundy-700 flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-base text-charcoal-900 mb-1.5">
                Expert Support
              </h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Our garment engineers help you choose the ideal GSM, weave, and branding method
                suited for your budget.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-warm-50 border border-burgundy-100 hover:shadow-soft transition-all duration-300 h-full">
              <div className="w-12 h-12 rounded-xl bg-burgundy-100 text-burgundy-700 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-base text-charcoal-900 mb-1.5">
                Fast Response
              </h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                We calculate itemized estimates and digital mockups within 24 hours of receiving
                your design specs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-warm-50 border border-burgundy-100 hover:shadow-soft transition-all duration-300 h-full">
              <div className="w-12 h-12 rounded-xl bg-burgundy-100 text-burgundy-700 flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-base text-charcoal-900 mb-1.5">
                Pan India Delivery
              </h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Reliable express logistics across all Indian states and pin codes with real-time
                tracking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
