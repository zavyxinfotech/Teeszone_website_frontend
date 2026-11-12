import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Layers, Palette, Truck } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: Sparkles,
    title: 'Premium Fabric Quality',
    description: 'High-quality fabrics and refined finishing.',
  },
  {
    icon: Layers,
    title: 'Bulk Production Ready',
    description: 'Scalable production for large orders.',
  },
  {
    icon: Palette,
    title: 'Complete Customization',
    description: 'Printing, embroidery and branding solutions.',
  },
  {
    icon: Truck,
    title: 'Pan India Delivery',
    description: 'Reliable delivery across India.',
  },
];

export const ProductAdvantages: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative -mt-6 sm:-mt-8 z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-[0_10px_30px_rgba(128,1,31,0.06)] border border-gray-100"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-center">
          {ADVANTAGES.map((item, index) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={item.title}>
                <div className="flex items-center gap-3.5 sm:gap-4 text-left group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#80011F]/10 flex items-center justify-center text-[#80011F] shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#80011F] group-hover:text-white">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#211D20] leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#68616A] leading-relaxed pt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Vertical Divider on Desktop */}
                {index < ADVANTAGES.length - 1 && (
                  <div className="hidden lg:block w-[1px] h-10 bg-gray-200/80 justify-self-end mr-4" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductAdvantages;

