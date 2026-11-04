import React from 'react';

interface WaveDividerProps {
  position?: 'top' | 'bottom';
  variant?: 'burgundy-to-white' | 'white-to-burgundy' | 'burgundy-to-cream' | 'cream-to-burgundy' | 'layered-burgundy';
  className?: string;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  position = 'bottom',
  variant = 'burgundy-to-white',
  className = '',
}) => {
  const isTop = position === 'top';

  if (variant === 'white-to-burgundy') {
    return (
      <div
        className={`w-full overflow-hidden leading-none pointer-events-none ${className} ${
          isTop ? 'rotate-180' : ''
        }`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-10 sm:h-16 md:h-20 lg:h-24 preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C320,80 600,120 900,85 C1200,50 1340,90 1440,110 L1440,120 L0,120 Z"
            fill="#800020"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'burgundy-to-white') {
    return (
      <div
        className={`w-full overflow-hidden leading-none pointer-events-none ${className} ${
          isTop ? 'rotate-180' : ''
        }`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-10 sm:h-16 md:h-20 lg:h-24 preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C240,65 520,105 820,70 C1120,35 1320,80 1440,95 L1440,120 L0,120 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'cream-to-burgundy') {
    return (
      <div
        className={`w-full overflow-hidden leading-none pointer-events-none ${className} ${
          isTop ? 'rotate-180' : ''
        }`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-10 sm:h-16 md:h-20 lg:h-24 preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10 C360,95 720,125 1080,75 C1240,50 1380,85 1440,100 L1440,120 L0,120 Z"
            fill="#800020"
          />
        </svg>
      </div>
    );
  }

  // Layered signature burgundy wave (matching the reference mockups with soft rose ribbon accent)
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none ${className} ${
        isTop ? 'rotate-180' : ''
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative block w-full h-12 sm:h-20 md:h-24 lg:h-28"
        preserveAspectRatio="none"
      >
        {/* Soft Pink Accent Ribbon */}
        <path
          d="M0,35 C320,110 680,120 1020,55 C1200,20 1360,60 1440,80 L1440,140 L0,140 Z"
          fill="#F8D0D6"
          opacity="0.65"
        />
        {/* Main Burgundy Wave */}
        <path
          d="M0,50 C280,130 620,135 960,75 C1160,40 1340,75 1440,95 L1440,140 L0,140 Z"
          fill="#800020"
        />
      </svg>
    </div>
  );
};
