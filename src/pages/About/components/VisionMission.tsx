import React from 'react';
import { Eye, Target } from 'lucide-react';
import { RevealAnimation } from '@/components/common/RevealAnimation';

export const VisionMission: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Vision Card */}
          <RevealAnimation direction="up" delay={0.1}>
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-warm-50 border border-burgundy-100/70 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start">
              <div className="w-14 h-14 rounded-2xl bg-burgundy-50 border-2 border-burgundy-100 text-burgundy-700 flex items-center justify-center mb-6 shadow-soft-sm">
                <Eye className="w-7 h-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-charcoal-900 mb-3">
                Our <span className="text-burgundy-700">Vision</span>
              </h2>
              <p className="text-base text-charcoal-600 leading-relaxed font-normal">
                To become a trusted apparel partner for businesses and organizations across India
                through quality, innovation, and reliable manufacturing.
              </p>
            </div>
          </RevealAnimation>

          {/* Mission Card */}
          <RevealAnimation direction="up" delay={0.2}>
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-warm-50 border border-burgundy-100/70 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start">
              <div className="w-14 h-14 rounded-2xl bg-burgundy-50 border-2 border-burgundy-100 text-burgundy-700 flex items-center justify-center mb-6 shadow-soft-sm">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-charcoal-900 mb-3">
                Our <span className="text-burgundy-700">Mission</span>
              </h2>
              <p className="text-base text-charcoal-600 leading-relaxed font-normal">
                To deliver high-quality customized apparel through premium fabrics, precise
                manufacturing, professional branding, and timely delivery.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};
