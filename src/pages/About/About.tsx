import React from 'react';
import { AboutHero } from './components/AboutHero';
import { AboutVideoSection } from './components/AboutVideoSection';
import { AboutStatsSection } from './components/AboutStatsSection';
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
      {/* 1. About Hero Carousel */}
      <AboutHero onOpenQuote={onOpenQuote} />

      {/* 2. Text Animation Video Section (Desktop & Mobile) */}
      <AboutVideoSection />

      {/* 3. Full Desktop Width Animated Stats Section */}
      <AboutStatsSection />

      {/* 4. Our Story: Interactive Milestone Journey */}
      <OurStory />

      {/* 5. Vision & Mission Cards */}
      <VisionMission />

      {/* 6. Expansion Journey: Growing Closer to Your Business */}
      <ExpansionJourney />

      {/* 7. Meet the Team Behind TeesZone */}
      <TeamSection />

      {/* 8. 500+ Clients Honeycomb Showcase */}
      <OurClients />

      {/* 9. Bottom Brand CTA */}
      <QuoteCTA
        title="Let's Build Your Brand Together"
        subtitle="Partner with TeesZone for high-quality, stylish and affordable T-shirts, uniforms and custom apparel for your business, team or event."
        onOpenQuote={onOpenQuote}
      />
    </div>
  );
};

export default About;
