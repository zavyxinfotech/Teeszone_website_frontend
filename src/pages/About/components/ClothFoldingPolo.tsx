import React from 'react';

interface ClothFoldingPoloProps {
  className?: string;
  imgClassName?: string;
  isMobile?: boolean;
  src?: string;
}

export const ClothFoldingPolo: React.FC<ClothFoldingPoloProps> = ({
  className = '',
  imgClassName = '',
  isMobile = false,
  src,
}) => {
  // Use user-provided transparent landscape cutout on desktop, and vertical cutout on mobile
  const imageSrc =
    src ||
    (isMobile
      ? '/assets/images/about/burgundy-polo-hd.png'
      : '/assets/images/about/burgundy-polo-desktop.png');

  return (
    <div className={`relative select-none ${className}`}>
      {/* Static High-Definition Transparent Burgundy Polo T-Shirt */}
      <img
        src={imageSrc}
        alt="TeesZone Premium Burgundy Polo T-Shirt"
        className={`object-contain filter drop-shadow-[0_20px_35px_rgba(70,0,20,0.22)] block ${imgClassName || 'w-full h-auto'}`}
        loading="eager"
        draggable={false}
      />
    </div>
  );
};

