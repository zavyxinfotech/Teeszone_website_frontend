import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ContactHero } from './components/ContactHero';
import { ContactInfo } from './components/ContactInfo';
import { ContactForm } from './components/ContactForm';
import { LocationMap } from './components/LocationMap';
export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get('product') || '';
  const sectorParam = searchParams.get('sector') || '';

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Contact Hero */}
      <ContactHero />

      {/* 2. Quick Action Cards (Call, Email, Location, WhatsApp) */}
      <ContactInfo />

      {/* 3. Main Form & Location Map Grid */}
      <section id="quote-form" className="pt-6 pb-8 sm:py-20 bg-warm-50/70 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm
                initialProduct={productParam}
                initialSector={sectorParam}
              />
            </div>

            {/* Right: Interactive Location Map & Address */}
            <div className="lg:col-span-5 h-auto lg:h-full">
              <LocationMap />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
