import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductItem } from '@/data/products';

interface ProductNavigationDockProps {
  products: ProductItem[];
  currentIndex: number;
  onSelectProduct: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

// Concise display labels for navigation tabs
const shortProductLabels: Record<string, string> = {
  'corporate-executive-uniforms': 'Corporate Polo',
  'blank-plain-apparel': 'Blank T-Shirt',
  'school-institutional-uniforms': 'School Uniform',
  'promotional-events-merchandise': 'Event Hoodie',
  'sports-academics-athletic': 'Sports Jersey',
};

export const ProductNavigationDock: React.FC<ProductNavigationDockProps> = ({
  products,
  currentIndex,
  onSelectProduct,
  onPrev,
  onNext,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const progressPercent = ((currentIndex + 1) / products.length) * 100;

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 sm:pb-12">
      {/* 1. Subtle Animated Burgundy Progress Bar */}
      <div className="relative w-full h-[3px] bg-charcoal-200/70 rounded-full mb-6 overflow-hidden">
        <motion.div
          className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#80011F] via-[#A81D3C] to-[#80011F] rounded-full shadow-[0_0_12px_rgba(128,1,31,0.5)]"
          initial={false}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.5, ease: 'easeOut' }}
        />
      </div>

      {/* 2. Controls & 5-Product Thumbnails Dock */}
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        {/* Previous Product Button */}
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous product"
          className="shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-[#80011F] text-[#80011F] hover:text-white border border-charcoal-200 hover:border-[#80011F] shadow-sm flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer group"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] transition-transform group-hover:-translate-x-0.5" />
        </button>

        {/* 5 Interactive Product Thumbnails Container */}
        <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 overflow-x-auto py-2 no-scrollbar scroll-smooth">
          {products.map((item, idx) => {
            const isActive = idx === currentIndex;
            const indexNumber = String(idx + 1).padStart(2, '0');
            const shortName = shortProductLabels[item.id] || item.name;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectProduct(idx)}
                aria-label={`Select product ${indexNumber}: ${item.name}`}
                aria-pressed={isActive}
                className={`relative flex items-center gap-2 sm:gap-3 px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl transition-all duration-300 cursor-pointer shrink-0 text-left ${
                  isActive
                    ? 'bg-white shadow-[0_8px_24px_rgba(128,1,31,0.14)] ring-2 ring-[#80011F]'
                    : 'bg-white/60 hover:bg-white/95 border border-charcoal-200/70 hover:border-burgundy-300 shadow-xs opacity-75 hover:opacity-100 hover:scale-[1.02]'
                }`}
              >
                {/* Product Thumbnail Container */}
                <div
                  className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center overflow-hidden shrink-0 transition-all ${
                    isActive
                      ? 'bg-burgundy-50/80 p-1 ring-1 ring-burgundy-200'
                      : 'bg-warm-100/60 p-1'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain filter drop-shadow-xs"
                    loading="lazy"
                  />
                </div>

                {/* Number & Product Label */}
                <div className="flex flex-col justify-center pr-1 sm:pr-2">
                  <span
                    className={`text-[10px] sm:text-[11px] font-heading font-black tracking-wider transition-colors ${
                      isActive ? 'text-[#80011F]' : 'text-charcoal-400'
                    }`}
                  >
                    {indexNumber}
                  </span>
                  <span
                    className={`text-xs sm:text-[13px] font-heading font-semibold whitespace-nowrap transition-colors ${
                      isActive ? 'text-charcoal-900 font-bold' : 'text-charcoal-600'
                    }`}
                  >
                    {shortName}
                  </span>
                </div>

                {/* Active Indicator Glow Pip */}
                {isActive && (
                  <span
                    className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#80011F] rounded-full ring-2 ring-white shadow-xs"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Next Product Button */}
        <button
          type="button"
          onClick={onNext}
          aria-label="Next product"
          className="shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-[#80011F] text-[#80011F] hover:text-white border border-charcoal-200 hover:border-[#80011F] shadow-sm flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer group"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
};
