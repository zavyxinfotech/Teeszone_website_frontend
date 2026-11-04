import React from 'react';
import { RevealAnimation } from '@/components/common/RevealAnimation';
import { Clock, HelpCircle, Sparkles } from 'lucide-react';

export const ContactHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-warm-50 to-warm-100/50 pt-8 pb-12 md:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            <RevealAnimation direction="down" immediate>
              <span className="inline-block text-xs font-heading font-extrabold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 border border-burgundy-100 px-3.5 py-1.5 rounded-full">
                Contact Us
              </span>
            </RevealAnimation>

            <RevealAnimation direction="up" delay={0.05} immediate>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-charcoal-900 leading-tight tracking-tight">
                Let's Create Your Custom <br />
                <span className="text-burgundy-700">T-Shirts Together</span>
              </h1>
            </RevealAnimation>

            <RevealAnimation direction="up" delay={0.1} immediate>
              <p className="text-base sm:text-lg text-charcoal-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Have a requirement, idea or bulk order? Our team is here to help you with the
                best solutions for your business, organization or event.
              </p>
            </RevealAnimation>

            {/* 3 Value Pillars */}
            <RevealAnimation direction="up" delay={0.15} immediate>
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-burgundy-100/60 max-w-lg mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="w-8 h-8 rounded-lg bg-burgundy-50 text-burgundy-700 flex items-center justify-center mb-1.5 mx-auto lg:mx-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-heading font-bold text-charcoal-900">Quick Response</p>
                  <p className="text-[10px] text-charcoal-500">(Within 24 Hours)</p>
                </div>

                <div className="text-center lg:text-left">
                  <div className="w-8 h-8 rounded-lg bg-burgundy-50 text-burgundy-700 flex items-center justify-center mb-1.5 mx-auto lg:mx-0">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-heading font-bold text-charcoal-900">Expert Guidance</p>
                  <p className="text-[10px] text-charcoal-500">For Your Requirements</p>
                </div>

                <div className="text-center lg:text-left">
                  <div className="w-8 h-8 rounded-lg bg-burgundy-50 text-burgundy-700 flex items-center justify-center mb-1.5 mx-auto lg:mx-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-heading font-bold text-charcoal-900">Customized</p>
                  <p className="text-[10px] text-charcoal-500">Tailored Solutions</p>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Right Consultation Image */}
          <div className="lg:col-span-6 relative">
            <RevealAnimation direction="left" delay={0.1} immediate>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Floating Handwritten Script Overlay */}
                <div className="absolute -top-6 left-4 sm:left-8 z-20 transform rotate-[-5deg] bg-white/95 backdrop-blur-sm border border-burgundy-200 shadow-md px-4 py-1.5 rounded-full">
                  <span className="font-heading italic font-bold text-xs sm:text-sm text-burgundy-700">
                    We're Here to Help You!
                  </span>
                </div>

                {/* Consultation Room Photo */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/assets/images/contact-hero.webp"
                    alt="TeesZone representative consulting with client on fabric and custom embroidery"
                    className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-700"
                  />
                </div>

                <div
                  className="absolute -inset-4 bg-gradient-to-r from-burgundy-200/40 to-warm-300/40 rounded-3xl blur-2xl -z-10 opacity-70"
                  aria-hidden="true"
                />
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};
