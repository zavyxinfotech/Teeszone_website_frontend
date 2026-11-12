import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Shirt, Layers, GraduationCap, Calendar, Trophy } from 'lucide-react';
import { ProductCategoryCard, CategoryCardData } from './ProductCategoryCard';

const CATEGORIES: CategoryCardData[] = [
  {
    id: 'corporate',
    title: 'Corporate Wear',
    description: 'Polos, T-Shirts & Office Apparel',
    image: '/assets/images/products/model-corporate.jpg',
    icon: Shirt,
    link: '/category/corporate',
  },
  {
    id: 'blank',
    title: 'Blank Apparel',
    description: 'T-Shirts, Polos, Hoodies & More',
    image: '/assets/images/products/model-blank.jpg',
    icon: Layers,
    link: '/category/blank',
  },
  {
    id: 'school',
    title: 'School & Institutional',
    description: 'Uniforms, T-Shirts & House Kits',
    image: '/assets/images/products/model-school.jpg',
    icon: GraduationCap,
    link: '/category/school',
  },
  {
    id: 'promotional',
    title: 'Promotional & Events',
    description: 'Event Tees, Merchandise & Campaign Apparel',
    image: '/assets/images/products/model-promotional.jpg',
    icon: Calendar,
    link: '/category/promotional',
    isWide: true,
  },
  {
    id: 'sports',
    title: 'Sports for Academics',
    description: 'Jerseys, Sports Tees & Team Kits',
    image: '/assets/images/products/model-sports.jpg',
    icon: Trophy,
    link: '/category/sports',
    isWide: true,
  },
];

interface ProductGridProps {
  onRequestQuote?: (title: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ onRequestQuote }) => {
  const shouldReduceMotion = useReducedMotion();

  // Split into Row 1 (3 items) and Row 2 (2 items centered)
  const row1 = CATEGORIES.slice(0, 3);
  const row2 = CATEGORIES.slice(3, 5);

  return (
    <section
      id="our-products"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FAF2F4] via-[#FFFDFD] to-[#FAF2F4] select-none"
      aria-label="TeesZone Product Range"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center space-y-3 mb-12 sm:mb-16 max-w-2xl mx-auto"
        >
          {/* Eyebrow Label with Accent Lines */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-[#80011F]/30 rounded-full" />
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#80011F]">
              OUR PRODUCTS
            </span>
            <span className="w-8 h-[2px] bg-[#80011F]/30 rounded-full" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#211D20] tracking-tight leading-tight">
            Explore Our <span className="text-[#80011F]">Product Range</span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base text-[#68616A] leading-relaxed max-w-xl mx-auto font-normal">
            A versatile collection of custom apparel, designed for corporates, schools, events,
            and sports.
          </p>
        </motion.div>

        {/* Desktop Product Grid: Row 1 (3 cards) + Row 2 (2 centered cards) */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Row 1: 3 Columns on Large Displays */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {row1.map((card, idx) => (
              <ProductCategoryCard
                key={card.id}
                card={card}
                index={idx}
                onRequestQuote={onRequestQuote}
              />
            ))}
          </div>

          {/* Row 2: 2 Centered Columns on Large Displays */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
            <div className="hidden lg:block lg:col-span-1" />
            {row2.map((card, idx) => (
              <div key={card.id} className="lg:col-span-5">
                <ProductCategoryCard
                  card={card}
                  index={3 + idx}
                  onRequestQuote={onRequestQuote}
                />
              </div>
            ))}
            <div className="hidden lg:block lg:col-span-1" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductGrid;
