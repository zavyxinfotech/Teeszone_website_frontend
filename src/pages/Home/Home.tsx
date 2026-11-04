import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ProductCategories } from './components/ProductCategories';
import { AboutPreview } from './components/AboutPreview';
import { ManufacturingPreview } from './components/ManufacturingPreview';
import { SectorShowcase } from './components/SectorShowcase';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { OurClients } from '@/components/sections/OurClients';
import { QuoteCTA } from '@/components/sections/QuoteCTA';

interface HomeProps {
  onOpenQuote?: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenQuote }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero with Factory & Workforce Collage */}
      <HeroSection onOpenQuote={onOpenQuote} />

      {/* 2. Product Categories Horizontal Showcase */}
      <ProductCategories />

      {/* 3. About Preview: More Than Just T-Shirts */}
      <AboutPreview />

      {/* 4. Manufacturing Process with Exact Section Divider & Background Theme */}
      <ManufacturingPreview />

      {/* 5. Custom T-Shirts for Every Sector */}
      <SectorShowcase />

      {/* 6. Why Choose TeesZone Strengths Section */}
      <WhyChooseUs theme="light" />

      {/* 7. Our Clients 3000+ Honeycomb Showcase */}
      <OurClients />

      {/* 8. Bottom Banner CTA */}
      <QuoteCTA
        title="Let's Create Your Custom T-Shirts"
        subtitle="Partner with TeesZone for high-quality, stylish and affordable T-shirts, uniforms and custom apparel for your business, team or event."
        onOpenQuote={onOpenQuote}
      />
    </div>
  );
};

export default Home;
