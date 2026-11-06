import React from 'react';
import { AboutHero } from './components/AboutHero';
import { VisionMission } from './components/VisionMission';
import { OurStory } from './components/OurStory';
import { ManufacturingProcess } from './components/ManufacturingProcess';
import { CompanyStrengths } from './components/CompanyStrengths';
import { TeamSection } from './components/TeamSection';
import { OurClients } from '@/components/sections/OurClients';
import { QuoteCTA } from '@/components/sections/QuoteCTA';

interface AboutProps {
  onOpenQuote?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuote }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. About Hero: Built to Represent Your Brand */}
      <AboutHero onOpenQuote={onOpenQuote} />

      {/* 2. Vision & Mission Cards */}
      <VisionMission />

      {/* 3. Our Story: From Fabric to Your Brand */}
      <OurStory />

      {/* 4. 5-Step Process */}
      <ManufacturingProcess />

      {/* 5. Company Strengths */}
      <CompanyStrengths />

      {/* 6. Meet the Team Behind TeesZone */}
      <TeamSection />

      {/* 7. 3000+ Clients Honeycomb Showcase */}
      <OurClients />

      {/* 8. Bottom Brand CTA */}
      <QuoteCTA
        title="Let's Build Your Brand Together"
        subtitle="Partner with TeesZone for high-quality, stylish and affordable T-shirts, uniforms and custom apparel for your business, team or event."
        onOpenQuote={onOpenQuote}
      />
    </div>
  );
};

export default About;
