import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Shirt, Layers, GraduationCap, Calendar, Trophy } from 'lucide-react';
import { ProductCategoryCard, CategoryCardData } from './ProductCategoryCard';

const CATEGORIES: CategoryCardData[] = [
  {
    id: 'corporate',
    title: 'Corporate Wear',
    description: 'Polos, T-Shirts & Office Apparel',
    image: '/assets/images/products/model-corporate.png',
    icon: Shirt,
    link: '/category/corporate',
  },
  {
    id: 'blank',
    title: 'Blank Apparel',
    description: 'T-Shirts, Polos, Hoodies & More',
    image: '/assets/images/products/model-blank.png',
    icon: Layers,
    link: '/category/blank',
  },
  {
    id: 'school',
    title: 'School & Institutional',
    description: 'Uniforms, T-Shirts & House Kits',
    image: '/assets/images/products/model-school.png',
    icon: GraduationCap,
    link: '/category/school',
  },
  {
    id: 'promotional',
    title: 'Promotional & Events',
    description: 'Event Tees, Merchandise & Campaign Apparel',
    image: '/assets/images/products/model-promotional.png',
    icon: Calendar,
    link: '/category/promotional',
  },
  {
    id: 'sports',
    title: 'Sports for Academics',
    description: 'Jerseys, Sports Tees & Team Kits',
    image: '/assets/images/products/model-sports.png',
    icon: Trophy,
    link: '/category/sports',
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
      className="relative w-full py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#FFFDFD] via-[#FAF3F5] to-[#FFFDFD] select-none overflow-hidden"
      aria-label="TeesZone Product Range"
    >
      {/* Background Soft Ambient Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#80011F]/[0.025] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-[550px] h-[550px] bg-[#80011F]/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center space-y-3 mb-12 sm:mb-16 max-w-2xl mx-auto"
        >
          {/* Eyebrow Label with Delicate Burgundy Accent Lines */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1.5px] bg-[#80011F]/35 rounded-full" />
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#80011F]">
              OUR PRODUCTS
            </span>
            <span className="w-8 h-[1.5px] bg-[#80011F]/35 rounded-full" />
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

        {/* Editorial Product Cards Showcase */}
        <div className="space-y-6 sm:space-y-7 lg:space-y-8">
          
          {/* Row 1: Exactly 3 Equal Columns on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
            {row1.map((card, idx) => (
              <ProductCategoryCard
                key={card.id}
                card={card}
                index={idx}
                onRequestQuote={onRequestQuote}
              />
            ))}
          </div>

          {/* Row 2: Exactly 2 Centered Cards with Identical Width & Height to Row 1 */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-7 lg:gap-8">
            {row2.map((card, idx) => (
              <div
                key={card.id}
                className="w-full sm:w-[calc(50%-14px)] lg:w-[calc((100%-2rem*2)/3)] flex"
              >
                <ProductCategoryCard
                  card={card}
                  index={3 + idx}
                  onRequestQuote={onRequestQuote}
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductGrid;
