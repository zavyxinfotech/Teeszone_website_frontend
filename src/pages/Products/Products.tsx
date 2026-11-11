import React from 'react';
import { useNavigate } from 'react-router-dom';
import { productsData, ProductItem } from '@/data/products';
import { ProductShowcase3D } from './components/ProductShowcase3D';
import { ProductCTA } from './components/ProductCTA';
import { QuoteCTA } from '@/components/sections/QuoteCTA';
import { useQuoteModal } from '@/app/providers';

interface ProductsProps {
  onOpenQuote?: (productName?: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onOpenQuote }) => {
  const navigate = useNavigate();
  const { openQuote } = useQuoteModal();

  const handleRequestQuote = (product: ProductItem) => {
    if (onOpenQuote) {
      onOpenQuote(product.name);
    } else if (openQuote) {
      openQuote(product.name);
    } else {
      navigate(`/contact?product=${encodeURIComponent(product.name)}&mode=quote`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-warm-50 text-charcoal-900">
      {/* 1. Full-Width 3D Interactive Showroom */}
      <ProductShowcase3D
        products={productsData}
        onRequestQuote={handleRequestQuote}
      />

      {/* 2. Custom Knits & Tech Pack CTA */}
      <ProductCTA />

      {/* 3. Tiruppur Direct Factory Quote Banner */}
      <QuoteCTA
        title="Ready to Manufacture Your Custom Order?"
        subtitle="Submit your requirements to receive sample swatches and transparent Tiruppur factory pricing within 24 hours."
        onOpenQuote={() => (onOpenQuote ? onOpenQuote() : openQuote ? openQuote() : navigate('/contact?mode=quote'))}
      />
    </div>
  );
};

export default Products;
