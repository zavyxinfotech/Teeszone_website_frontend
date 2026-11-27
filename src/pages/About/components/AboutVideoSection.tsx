import React from 'react';

export const AboutVideoSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FAF5F2] overflow-hidden select-none">
      {/* =========================================================================
          DESKTOP VIEW (Hidden on Mobile)
          - Video section height increased to fit comfortably within the desktop viewport height (100vh)
          - Wavy SVG borders above and below the video kept intact for seamless organic transitions
          ========================================================================= */}
      <div className="hidden md:block relative w-full h-[100vh] min-h-[640px] max-h-[960px] overflow-hidden bg-[#FAF5F2]">
        {/* Top Wavy Border (Blending with Vision & Mission white background) */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg
            viewBox="0 0 1440 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 lg:h-16 xl:h-20 block text-white"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L1440,0 L1440,35 C1240,75 1020,10 780,45 C540,80 320,15 0,40 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Desktop Video - Cropped at top to conceal top-left text logo behind top wavy border */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[calc(100%+90px)] -mt-12 md:-mt-16 lg:-mt-20 object-cover block"
          src="/assets/videos/teeszone-text-animation-desktop.mp4"
        />

        {/* Bottom Wavy Border (Blending with AboutStatsSection cream background #FAF5F2) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg
            viewBox="0 0 1440 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 lg:h-16 xl:h-20 block text-[#FAF5F2]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,90 L1440,90 L1440,55 C1220,15 1000,80 760,45 C520,10 300,75 0,50 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* =========================================================================
          MOBILE VIEW (Hidden on Desktop)
          - Top wavy border added to cover top logo and match desktop wavy border
          - Full width auto-height video so animation text is never cropped horizontally
          ========================================================================= */}
      <div className="block md:hidden relative w-full -mt-[1px] overflow-hidden bg-[#6B0018]">
        {/* Top Wavy Border covering top logo */}
        <div className="absolute -top-[1px] left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg
            viewBox="0 0 1440 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 xs:h-12 block text-white"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L1440,0 L1440,35 C1240,75 1020,10 780,45 C540,80 320,15 0,40 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Mobile Video - Cropped slightly at top behind wavy border, full width visible */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto -mt-6 xs:-mt-8 block"
          src="/assets/videos/teeszone-text-animation-mobile.mp4"
        />
      </div>
    </section>
  );
};

export default AboutVideoSection;
