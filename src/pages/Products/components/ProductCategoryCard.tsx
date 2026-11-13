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
}

interface ProductCategoryCardProps {
  card: CategoryCardData;
  index: number;
  onRequestQuote?: (title: string) => void;
}

export const ProductCategoryCard: React.FC<ProductCategoryCardProps> = ({
  card,
  index,
  onRequestQuote: _onRequestQuote,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();
  const Icon = card.icon;

  const handleClick = () => {
    navigate(card.link);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 26,
        scale: shouldReduceMotion ? 1 : 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.1,
        ease: 'easeOut',
      }}
      whileHover={shouldReduceMotion ? {} : { y: -8 }}
      onClick={handleClick}
      className="group relative w-full h-[470px] sm:h-[500px] lg:h-[520px] rounded-[32px] sm:rounded-[36px] bg-transparent border-0 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden p-5 sm:p-6"
    >
      {/* 1. Integrated Card Background Artwork with Burgundy Flowing Wave & Arch */}
      <img
        src="/assets/images/products/card-bg-artwork.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
        loading="lazy"
      />

      {/* 2. Top-Left Floating Professional Outline Icon Badge */}
      <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md border border-[#80011F]/15 shadow-sm flex items-center justify-center text-[#80011F] transition-transform duration-300 group-hover:scale-110">
        <Icon className="w-5 h-5 stroke-[2]" />
      </div>

      {/* 3. Main Central Visual: Fashion Model on Top of Wave */}
      <div className="relative z-10 w-full flex-1 flex items-end justify-center overflow-hidden pt-6 pb-2">
        <motion.img
          src={card.image}
          alt={`TeesZone ${card.title} custom apparel worn by model`}
          whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-full h-full max-h-[310px] sm:max-h-[350px] lg:max-h-[370px] object-contain object-bottom pointer-events-none select-none drop-shadow-[0_12px_22px_rgba(0,0,0,0.09)]"
          loading="lazy"
        />
      </div>

      {/* 4. Bottom Content Row: Title, Description, and Circular Cream/Ivory Arrow Button */}
      <div className="relative z-20 flex items-center justify-between gap-3 pt-3.5 border-t border-[#80011F]/10">
        <div className="text-left space-y-0.5 max-w-[calc(100%-54px)]">
          <h3 className="text-lg sm:text-xl font-black text-[#211D20] tracking-tight group-hover:text-[#80011F] transition-colors duration-200 truncate">
            {card.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#68616A] leading-relaxed font-normal truncate">
            {card.description}
          </p>
        </div>

        {/* Circular Cream/Ivory Arrow Button with Deep Burgundy Icon */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FFF7ED] border border-[#80011F]/20 text-[#80011F] flex items-center justify-center shrink-0 shadow-md shadow-[#80011F]/10 transition-all duration-300 group-hover:bg-[#FFEED9] group-hover:border-[#80011F]/40 group-hover:scale-110">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#80011F] transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCategoryCard;
