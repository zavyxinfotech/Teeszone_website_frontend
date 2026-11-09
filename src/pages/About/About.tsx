import React from 'react';
import { AboutHero } from './components/AboutHero';
import { OurStory } from './components/OurStory';
import { VisionMission } from './components/VisionMission';
import { ExpansionJourney } from '@/components/sections/ExpansionJourney';
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

      {/* 2. Our Story (Placed ABOVE Vision & Mission) */}
      <OurStory />

      {/* 3. Vision & Mission Cards */}
      <VisionMission />

      {/* 4. Expansion Journey: Growing Closer to Your Business */}
      <ExpansionJourney />

      {/* 5. Meet the Team Behind TeesZone */}
      <TeamSection />

      {/* 6. 3000+ Clients Honeycomb Showcase */}
      <OurClients />

      {/* 7. Bottom Brand CTA */}
      <QuoteCTA
        title="Let's Build Your Brand Together"
        subtitle="Partner with TeesZone for high-quality, stylish and affordable T-shirts, uniforms and custom apparel for your business, team or event."
        onOpenQuote={onOpenQuote}
      />
    </div>
  );
};

export default About;
