import React from 'react';
import { productCategories } from '@/data/products';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductFiltersProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalProducts: number;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalProducts,
}) => {
  return (
    <div className="space-y-6 mb-10">
      {/* Category Pills & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Pills */}
        <div
          role="tablist"
          aria-label="Filter products by category"
          className="flex flex-wrap items-center gap-2 w-full md:w-auto"
        >
          {productCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectCategory(cat.id)}
                className={cn(
                  'px-4 py-2 rounded-full text-xs sm:text-sm font-heading font-semibold transition-all duration-200 cursor-pointer select-none',
                  isActive
                    ? 'bg-burgundy-700 text-white shadow-soft hover:bg-burgundy-800'
                    : 'bg-white text-charcoal-700 border border-burgundy-100 hover:bg-warm-100/60 hover:text-burgundy-700'
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search fabrics, styles..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-full bg-white border border-burgundy-100 focus:outline-none focus:border-burgundy-700 focus:ring-1 focus:ring-burgundy-700 transition-colors shadow-soft-sm"
          />
        </div>
      </div>

      {/* Showing Count */}
      <div className="flex items-center justify-between text-xs text-charcoal-500 border-b border-burgundy-100/60 pb-3">
        <span>
          Showing <strong>{totalProducts}</strong> manufacturing categories
        </span>
        <span className="text-burgundy-700 font-medium">
          Zero middleman markups • Factory direct from Tiruppur
        </span>
      </div>
    </div>
  );
};
