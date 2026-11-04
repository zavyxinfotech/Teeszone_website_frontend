import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductItem } from '@/data/products';
import { Button } from '@/components/common/Button';
import { Layers, Sparkles, Check, ChevronDown, ChevronUp } from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
  onRequestQuote: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onRequestQuote }) => {
  const [showSpecs, setShowSpecs] = useState(false);

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-burgundy-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Product Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-warm-50 p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-106 transition-transform duration-700"
            loading="lazy"
          />

          {/* GSM Tag */}
          <span className="absolute top-6 left-6 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-heading font-extrabold text-burgundy-800 shadow-md border border-burgundy-100">
            {product.gsmRange}
          </span>

          {/* MOQ Tag */}
          <span className="absolute bottom-6 right-6 px-3 py-1 rounded-full bg-charcoal-900/90 text-white text-[11px] font-semibold backdrop-blur-sm">
            {product.moq}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <Link
              to={`/category/${product.category}`}
              className="text-[11px] font-bold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 hover:bg-burgundy-100 hover:text-burgundy-800 px-2.5 py-0.5 rounded-full transition-colors"
            >
              {product.categoryLabel}
            </Link>
          </div>

          <h3 className="font-heading font-bold text-xl text-charcoal-900 group-hover:text-burgundy-700 transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-charcoal-500 font-medium mt-1">
            {product.tagline}
          </p>

          <p className="text-sm text-charcoal-600 mt-3 leading-relaxed">
            {product.description}
          </p>

          {/* Available Fabrics */}
          <div className="mt-4 pt-4 border-t border-burgundy-50">
            <p className="text-xs font-bold text-charcoal-800 uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <Layers className="w-3.5 h-3.5 text-burgundy-700" />
              Fabric Options
            </p>
            <div className="flex flex-wrap gap-1.5">
              {product.fabrics.map((fabric) => (
                <span
                  key={fabric}
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-warm-100/70 text-charcoal-700 font-medium"
                >
                  {fabric}
                </span>
              ))}
            </div>
          </div>

          {/* Branding Techniques */}
          <div className="mt-3">
            <p className="text-xs font-bold text-charcoal-800 uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-burgundy-700" />
              Custom Branding
            </p>
            <div className="flex flex-wrap gap-1.5">
              {product.brandingTechniques.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-burgundy-50 text-burgundy-800 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Expandable Technical Specs Toggle */}
          <div className="mt-4 pt-3 border-t border-burgundy-50">
            <button
              type="button"
              onClick={() => setShowSpecs(!showSpecs)}
              className="w-full flex items-center justify-between text-xs font-semibold text-charcoal-600 hover:text-burgundy-700 transition-colors py-1 cursor-pointer"
            >
              <span>{showSpecs ? 'Hide Manufacturing Specs' : 'View Manufacturing Specs'}</span>
              {showSpecs ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showSpecs && (
              <div className="mt-3 p-3 bg-warm-50 rounded-xl space-y-2 text-xs text-charcoal-600 animate-fadeIn">
                <p className="font-semibold text-charcoal-800">Standard Specifications:</p>
                <ul className="space-y-1">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-burgundy-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 border-t border-burgundy-100/60 text-[11px] text-charcoal-500">
                  <strong>Best for:</strong> {product.bestFor}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-6 pt-0">
        <Button
          variant="primary"
          size="md"
          className="w-full justify-center shadow-soft hover:shadow-soft-lg"
          withArrow
          onClick={() => onRequestQuote(product)}
        >
          Request Bulk Quote
        </Button>
      </div>
    </div>
  );
};
