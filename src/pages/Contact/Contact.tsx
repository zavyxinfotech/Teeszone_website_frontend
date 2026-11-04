import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ContactHero } from './components/ContactHero';
import { ContactInfo } from './components/ContactInfo';
import { ContactForm } from './components/ContactForm';
import { LocationMap } from './components/LocationMap';
import { BulkOrderSection } from './components/BulkOrderSection';
import { QuoteCTA } from '@/components/sections/QuoteCTA';

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
      <section id="quote-form" className="py-14 sm:py-20 bg-warm-50/70 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm
                initialProduct={productParam}
                initialSector={sectorParam}
              />
            </div>

            {/* Right: Interactive Location Map & Address */}
            <div className="lg:col-span-5 h-full">
              <LocationMap />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bulk Orders & Why Contact TeesZone */}
      <BulkOrderSection />

      {/* 5. Bottom Brand Banner */}
      <QuoteCTA
        title="Let's Build Your Brand Together"
        subtitle="Partner with TeesZone for high-quality, stylish and affordable T-shirts, uniforms and custom apparel for your business, team or event."
        onOpenQuote={() => {
          const el = document.getElementById('quote-form');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  );
};

export default Contact;
