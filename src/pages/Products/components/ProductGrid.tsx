import React from 'react';
import { ProductItem } from '@/data/products';
import { ProductCard } from './ProductCard';
import { Shirt } from 'lucide-react';

interface ProductGridProps {
  products: ProductItem[];
  onRequestQuote: (product: ProductItem) => void;
  onResetFilters: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onRequestQuote,
  onResetFilters,
}) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-warm-50 rounded-3xl border border-burgundy-100 max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full bg-burgundy-50 text-burgundy-700 flex items-center justify-center mx-auto mb-4">
          <Shirt className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-heading font-bold text-charcoal-900 mb-2">
          No apparel styles found
        </h3>
        <p className="text-sm text-charcoal-600 mb-6">
          We couldn't find any products matching your current search or filter criteria.
        </p>
        <button
          onClick={onResetFilters}
          className="px-6 py-2.5 rounded-full bg-burgundy-700 text-white font-heading font-semibold text-xs uppercase tracking-wider hover:bg-burgundy-800 transition-colors shadow-soft"
        >
          Reset All Filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRequestQuote={onRequestQuote} />
      ))}
    </div>
  );
};
