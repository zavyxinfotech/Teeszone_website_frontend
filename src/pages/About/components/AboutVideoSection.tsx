import React from 'react';

export const AboutVideoSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FAF5F2] overflow-hidden select-none">
      {/* Desktop Video (Hidden on Mobile) */}
      <div className="hidden md:block w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover block"
          src="/assets/videos/teeszone-text-animation-desktop.mp4"
        />
      </div>

      {/* Mobile Video (Hidden on Desktop) */}
      <div className="block md:hidden w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover block"
          src="/assets/videos/teeszone-text-animation-mobile.mp4"
        />
      </div>
    </section>
  );
};

export default AboutVideoSection;
