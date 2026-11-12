import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export interface CategoryCardData {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
  isWide?: boolean;
}

interface ProductCategoryCardProps {
  card: CategoryCardData;
  index: number;
  onRequestQuote?: (title: string) => void;
}

export const ProductCategoryCard: React.FC<ProductCategoryCardProps> = ({
  card,
  index,
  onRequestQuote,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();
  const Icon = card.icon;

  const handleClick = () => {
    navigate(card.link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={shouldReduceMotion ? {} : { y: -8 }}
      onClick={handleClick}
      className={`group relative rounded-[32px] sm:rounded-[36px] bg-white border border-gray-100/90 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_22px_48px_rgba(128,1,31,0.12)] p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden ${
        card.isWide ? 'w-full' : 'w-full'
      }`}
    >
      {/* Top Image Container with Model Photograph */}
      <div className="relative w-full aspect-[4/3] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#FAF3F5] mb-4 sm:mb-5">
        {/* Subtle Decorative Arch Curve at Top (matching Reference Mockup) */}
        <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-[#80011F]/10 via-[#80011F]/0 to-transparent pointer-events-none z-10" />

        {/* Floating Category Icon Badge in Frosted Glass Container */}
        <div className="absolute top-3 left-3 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 flex items-center justify-center text-[#80011F] shadow-sm transition-transform duration-300 group-hover:scale-110">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
        </div>

        {/* Model Photograph */}
        <motion.img
          src={card.image}
          alt={`TeesZone ${card.title} custom apparel worn by model`}
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Card Content & Action Button */}
      <div className="flex items-center justify-between gap-3 pt-1 px-1">
        <div className="text-left space-y-1">
          <h3 className="text-lg sm:text-xl font-black text-[#211D20] tracking-tight group-hover:text-[#80011F] transition-colors duration-200">
            {card.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#68616A] leading-relaxed font-normal">
            {card.description}
          </p>
        </div>

        {/* Circular Burgundy Arrow CTA Button */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#80011F] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#80011F]/25 transition-all duration-300 group-hover:bg-[#570016] group-hover:scale-110">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCategoryCard;
