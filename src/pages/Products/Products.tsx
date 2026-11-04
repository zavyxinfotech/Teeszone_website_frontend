import React, { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { productsData, ProductItem } from '@/data/products';
import { ProductsHero } from './components/ProductsHero';
import { ProductFilters } from './components/ProductFilters';
import { ProductGrid } from './components/ProductGrid';
import { ProductCTA } from './components/ProductCTA';
import { QuoteCTA } from '@/components/sections/QuoteCTA';

interface ProductsProps {
  onOpenQuote?: (productName?: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onOpenQuote }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const selectedCategory = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSelectCategory = (category: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (category === 'all') {
      nextParams.delete('category');
    } else {
      nextParams.set('category', category);
    }
    setSearchParams(nextParams);
  };

  const filteredProducts = useMemo(() => {
    return productsData.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.fabrics.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.brandingTechniques.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleRequestQuote = (product: ProductItem) => {
    if (onOpenQuote) {
      onOpenQuote(product.name);
    } else {
      navigate(`/contact?product=${encodeURIComponent(product.name)}&mode=quote`);
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSearchParams({});
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <ProductsHero />

      {/* Main Catalog Section */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <ProductFilters
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalProducts={filteredProducts.length}
        />

        <ProductGrid
          products={filteredProducts}
          onRequestQuote={handleRequestQuote}
          onResetFilters={handleResetFilters}
        />
      </section>

      {/* Custom Knits / Tech Pack CTA */}
      <ProductCTA />

      {/* Quote Banner */}
      <QuoteCTA
        title="Ready to Manufacture Your Custom Order?"
        subtitle="Submit your requirements to receive sample swatches and transparent Tiruppur factory pricing within 24 hours."
        onOpenQuote={() => (onOpenQuote ? onOpenQuote() : navigate('/contact?mode=quote'))}
      />
    </div>
  );
};

export default Products;
