import React from 'react';
import { GalleryHeroCinematic } from './components/GalleryHeroCinematic';
import { ManufacturingShowcase3D } from './components/ManufacturingShowcase3D';
import { ClientReviews3DGallery } from './components/ClientReviews3DGallery';
import { GalleryPortfolioGrid } from './components/GalleryPortfolioGrid';

interface GalleryProps {
  onOpenQuote?: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenQuote }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#0D0B0E]">
      {/* 1. Full-Screen Cinematic Opening Hero Section with Image 1 */}
      <GalleryHeroCinematic />

      {/* 2. Premium 3D Manufacturing Showcase with Horizontal Image-Focus Animation & SEO Content */}
      <ManufacturingShowcase3D onOpenQuote={onOpenQuote} />

      {/* 3. Dedicated 3D Rotating Client Reviews Gallery with All 30 Genuine Reviews */}
      <ClientReviews3DGallery onOpenQuote={onOpenQuote} />

      {/* 4. Clean Light-Coloured Portfolio Grid & Archive Panel */}
      <GalleryPortfolioGrid onOpenQuote={onOpenQuote} />
    </div>
  );
};

export default Gallery;
