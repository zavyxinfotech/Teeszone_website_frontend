import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuoteModal } from '@/app/providers';
import { ProductsHero } from './components/ProductsHero';
import { ProductAdvantages } from './components/ProductAdvantages';
import { ProductGrid } from './components/ProductGrid';
import { ProductsCTA } from './components/ProductsCTA';

interface ProductsProps {
  onOpenQuote?: (productName?: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onOpenQuote }) => {
  const navigate = useNavigate();
  const { openQuote } = useQuoteModal();

  const handleOpenQuote = (productName?: string) => {
    if (onOpenQuote) {
      onOpenQuote(productName);
    } else if (openQuote) {
      openQuote(productName);
    } else {
      navigate(`/contact?mode=quote${productName ? `&product=${encodeURIComponent(productName)}` : ''}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF2F4] text-[#211D20] selection:bg-[#80011F] selection:text-white">
      {/* 1. Hero Section: Cinematic 3D Floating Apparel Showcase on Pedestal */}
      <ProductsHero onExploreClick={() => {
        const el = document.getElementById('our-products');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* 2. Key Advantages Horizontal Feature Strip */}
      <ProductAdvantages />

      {/* 3. Our Products: 5 Premium Fashion Category Cards with Models */}
      <ProductGrid onRequestQuote={handleOpenQuote} />

      {/* 4. Final CTA Section: Flowing Burgundy Banner with Folded Tees Stack */}
      <ProductsCTA onOpenQuote={() => handleOpenQuote()} />
    </div>
  );
};

export default Products;
