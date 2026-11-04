import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WhyChooseUsProps {
  theme?: 'light' | 'dark';
  className?: string;
  onOpenQuote?: () => void;
}

interface StrengthPoint {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const uniqueSellingPoints: StrengthPoint[] = [
  {
    id: 'one-partner-every-industry',
    number: '01',
    title: '1. One Partner. Every Industry.',
    description:
      'Corporate, schools, colleges, sports teams, events – ellathukkum customized apparel under one roof.',
    image: '/assets/images/why-choose/photo-direct-manufacturer.webp',
    link: '/products',
  },
  {
    id: 'your-brand-your-identity',
    number: '02',
    title: '2. Your Brand, Your Identity.',
    description:
      'Logo placement, brand colors, designs and personalized apparel that represent your brand.',
    image: '/assets/images/why-choose/photo-complete-customization.webp',
    link: '/about',
  },
  {
    id: 'small-orders-large-campaigns',
    number: '03',
    title: '3. Small Orders to Large Campaigns.',
    description:
      'From individual team requirements to company-wide and nationwide apparel requirements.',
    image: '/assets/images/why-choose/photo-bulk-production.webp',
    link: '/products',
  },
  {
    id: 'consistency-every-order',
    number: '04',
    title: '4. Consistency in Every Order.',
    description:
      'Maintain your brand identity, design standards and apparel appearance across repeat orders.',
    image: '/assets/images/why-choose/photo-on-time-delivery.webp',
    link: '/contact',
  },
];

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  className = '',
  onOpenQuote,
}) => {
  return (
    <section
      className={cn(
        'relative w-full overflow-hidden bg-[#FAF6F2] py-14 sm:py-18 md:py-20 lg:py-24',
        className
      )}
    >
      {/* =========================================================================
          1. SECTION BACKGROUND IMAGE (Apparel Rack, Folded Shirts, Box & Sunlight Shadows)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Full-width image on desktop aligned right */}
        <picture className="w-full h-full block">
          <source
            type="image/webp"
            srcSet="/assets/images/why-choose/why-choose-bg.webp"
          />
          <img
            src="/assets/images/why-choose/why-choose-bg.jpg"
            alt="TeesZone Strengths Background"
            className="w-full h-full object-cover object-right lg:object-[right_center]"
          />
        </picture>

        {/* Soft Left Gradient Overlay to guarantee crystal-clear card and text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F2] via-[#FAF6F2]/95 to-transparent lg:w-3/4 pointer-events-none" />
      </div>

      {/* =========================================================================
          2. DECORATIVE BURGUNDY SATIN DRAPES (LEFT & TOP CORNER)
          ========================================================================= */}
      {/* Left flowing satin drape curve */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-22 md:w-28 lg:w-36 pointer-events-none z-10 overflow-hidden select-none">
        <svg
          viewBox="0 0 160 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L65,0 C115,130 35,260 95,390 C155,520 45,650 115,800 L0,800 Z"
            fill="url(#satinLeftGrad)"
          />
          <path
            d="M0,0 L45,0 C85,140 15,270 70,400 C115,510 25,640 75,800 L0,800 Z"
            fill="rgba(75, 5, 18, 0.45)"
          />
          <defs>
            <linearGradient id="satinLeftGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6C081E" />
              <stop offset="40%" stopColor="#8A132C" />
              <stop offset="70%" stopColor="#750E24" />
              <stop offset="100%" stopColor="#500414" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Top-Right Decorative Satin Curve */}
      <div className="absolute top-0 right-0 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 pointer-events-none select-none z-10">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M200,0 L70,0 C120,40 160,90 200,160 Z"
            fill="url(#topRightSatinGrad)"
          />
          <defs>
            <linearGradient id="topRightSatinGrad" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#64061B" />
              <stop offset="100%" stopColor="#87122B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* =========================================================================
          3. MAIN CONTENT CONTAINER
          ========================================================================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 lg:pl-24 text-center sm:text-left">
        {/* On desktop: Content stays on left 65% so the right background apparel scene shines */}
        <div className="max-w-3xl xl:max-w-4xl mx-auto sm:mx-0">
          {/* Header Area */}
          <div className="mb-6 sm:mb-8">
            {/* Badge: — 4 UNIQUE SELLING POINTS */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCECEF] border border-burgundy-100/60 mb-3 sm:mb-3.5 shadow-2xs mx-auto sm:mx-0">
              <span className="w-3.5 h-[1.5px] bg-[#82132C] rounded-full inline-block" />
              <span className="text-[11px] sm:text-xs font-heading font-bold uppercase tracking-wider text-[#82132C]">
                4 UNIQUE SELLING POINTS
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-heading font-black tracking-tight text-charcoal-900 leading-[1.12]">
              Why Choose{' '}
              <span className="text-[#82132C] block sm:inline">TeesZone</span>
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-charcoal-600 font-normal mt-2 sm:mt-2.5 max-w-xl leading-relaxed mx-auto sm:mx-0">
              4 Unique Selling Points that make us India's preferred custom apparel partner.
            </p>
          </div>

          {/* 4 Unique Selling Points in a Clean 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 max-w-3xl">
            {uniqueSellingPoints.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group"
              >
                <Link
                  to={item.link}
                  className="block h-full bg-white/95 backdrop-blur-xs rounded-[24px] sm:rounded-[26px] p-3 sm:p-3.5 shadow-[0_6px_20px_rgba(80,10,25,0.05)] border border-[#EFE7DE] hover:border-burgundy-200 hover:shadow-[0_12px_28px_rgba(100,15,30,0.12)] hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Top Photo nestled in burgundy curve frame */}
                  <div className="relative w-full rounded-[18px] overflow-hidden bg-[#7A0D23] p-[2px] mb-2.5 sm:mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-24 sm:h-28 md:h-30 object-cover rounded-[16px] transition-transform duration-500 group-hover:scale-106"
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-charcoal-900/80 backdrop-blur-xs text-[10px] font-heading font-bold text-white uppercase tracking-wider">
                      USP {item.number}
                    </span>
                  </div>

                  {/* Card Content & Action Button */}
                  <div className="flex items-start justify-between gap-2 px-1 pt-0.5 pb-1">
                    <div className="min-w-0 pr-1 space-y-1">
                      <h3 className="font-heading font-bold text-sm sm:text-[15px] text-charcoal-900 leading-tight group-hover:text-[#82132C] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-charcoal-600 font-normal leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Circular Burgundy Arrow Button */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#82132C] text-white flex items-center justify-center shrink-0 group-hover:bg-[#680D21] group-hover:scale-108 transition-all duration-200 shadow-2xs mt-0.5">
                      <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
