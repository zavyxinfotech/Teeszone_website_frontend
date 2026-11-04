import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WhyChooseUsProps {
  theme?: 'light' | 'dark';
  className?: string;
  onOpenQuote?: () => void;
}

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const topRowCards: FeatureCard[] = [
  {
    id: 'blank-to-brand',
    title: 'Blank-to-Brand Flexibility',
    description: 'From Ready-to-Brand Blanks to Fully Customized Apparel.',
    image: '/assets/images/why-choose/card-1-blanks.jpg',
    link: '/products',
  },
  {
    id: 'one-partner',
    title: 'One Partner. Every Apparel Need.',
    description: 'Corporate Wear, School Uniforms, Sportswear & Promotional Clothing.',
    image: '/assets/images/why-choose/card-2-apparel.jpg',
    link: '/products',
  },
  {
    id: 'made-around-brand',
    title: 'Made Around Your Brand',
    description: 'Your Design, Brand Identity, Colours & Customization Requirements.',
    image: '/assets/images/why-choose/card-3-brand.jpg',
    link: '/about',
  },
];

const bottomRowCards: FeatureCard[] = [
  {
    id: 'scales-with-you',
    title: 'Apparel That Scales With You',
    description: 'Flexible Solutions for Growing Brands, Teams & Institutions.',
    image: '/assets/images/why-choose/card-4-scale.jpg',
    link: '/products',
  },
  {
    id: 'more-than-supplier',
    title: 'More Than Just a Supplier',
    description: 'A Dedicated B2B Apparel Partner for Your Business Growth.',
    image: '/assets/images/why-choose/card-5-truck.jpg',
    link: '/contact',
  },
];

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  className = '',
}) => {
  return (
    <section
      id="why-choose-us"
      className={`relative w-full overflow-hidden bg-[#FAF6F2] pt-14 sm:pt-18 md:pt-20 lg:pt-20 pb-10 sm:pb-14 md:pb-16 ${className}`}
    >
      {/* =========================================================================
          1. SECTION BACKGROUND BANNER (Exact 100% Quality - Clothes & Table in Perfect Alignment)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/assets/images/why-choose/why-choose-banner-desktop.png"
          alt="Why Choose TeesZone Background"
          className="w-full h-full object-cover object-right lg:object-center"
        />
      </div>

      {/* =========================================================================
          2. MAIN CONTENT CONTAINER (Cards & Text on Left 58% to match Reference Image 2)
          ========================================================================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-20">
        <div className="w-full lg:w-[60%] xl:w-[58%]">
          {/* Header Section */}
          <div className="mb-3.5 sm:mb-4">
            {/* Pill Tag: — WHY CHOOSE TEESZONE — */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FCECEF] border border-[#F6D8DF] mb-1.5 sm:mb-2 shadow-2xs"
            >
              <span className="w-2 h-[1.5px] bg-[#800D22] rounded-full inline-block" />
              <span className="text-[10px] sm:text-[10.5px] font-heading font-extrabold uppercase tracking-widest text-[#800D22]">
                WHY CHOOSE TEESZONE
              </span>
              <span className="w-2 h-[1.5px] bg-[#800D22] rounded-full inline-block" />
            </motion.div>

            {/* Main Headline: WHY BUSINESSES CHOOSE TEESZONE —— */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[38px] font-heading font-black tracking-tight leading-[1.12] text-[#1B2A4A]"
            >
              WHY BUSINESSES CHOOSE
              <br />
              <span className="text-[#800D22] inline-flex items-center gap-2 sm:gap-3">
                TEESZONE
                <span className="w-10 sm:w-14 h-[3px] bg-[#800D22] rounded-full inline-block align-middle mt-1" />
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-xs sm:text-[13px] md:text-sm text-[#334155] font-semibold mt-1 sm:mt-1.5 mb-3.5 sm:mb-4 leading-relaxed"
            >
              Beyond Custom T-Shirts. Your Complete Apparel Partner.
            </motion.p>
          </div>

          {/* 5 Organic Wave Cards Grid */}
          <div className="space-y-2.5 sm:space-y-3">
            {/* TOP ROW: 3 CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {topRowCards.map((card, idx) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="group h-full"
                >
                  <Link
                    to={card.link}
                    className="flex flex-col justify-between h-full bg-white rounded-[18px] sm:rounded-[20px] overflow-hidden border border-[#EDE4DC] shadow-[0_4px_14px_rgba(80,10,25,0.05)] hover:shadow-[0_10px_24px_rgba(80,10,25,0.12)] hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Top Image with Organic Wave Overlay */}
                    <div className="relative w-full overflow-hidden bg-warm-100 shrink-0">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-20 sm:h-22 md:h-24 object-cover transition-transform duration-500 group-hover:scale-108"
                        loading="lazy"
                      />
                      {/* Organic wave shape dividing photo and white card body */}
                      <svg
                        viewBox="0 0 300 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute -bottom-[1px] left-0 right-0 w-full h-3.5 sm:h-4 text-white pointer-events-none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0,14 C70,24 130,2 200,16 C250,24 280,10 300,14 L300,24 L0,24 Z"
                          fill="#FFFFFF"
                        />
                      </svg>
                    </div>

                    {/* Card Content & Action Button */}
                    <div className="p-2.5 sm:p-3 pt-1 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="font-heading font-black text-xs sm:text-[12.5px] text-[#7A0C22] leading-tight group-hover:text-[#5C0819] transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-[10px] sm:text-[10.5px] text-[#475569] font-medium leading-relaxed mt-1">
                          {card.description}
                        </p>
                      </div>

                      {/* Circular Burgundy Arrow Button */}
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#7A0C22] text-white flex items-center justify-center shrink-0 self-end ml-auto mt-2 group-hover:bg-[#5C0819] group-hover:scale-110 transition-all duration-200 shadow-2xs">
                        <ArrowRight className="w-3 h-3 text-white transition-transform duration-200 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* BOTTOM ROW: 2 WIDER CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {bottomRowCards.map((card, idx) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: 0.25 + idx * 0.08 }}
                  className="group h-full"
                >
                  <Link
                    to={card.link}
                    className="flex flex-col justify-between h-full bg-white rounded-[18px] sm:rounded-[20px] overflow-hidden border border-[#EDE4DC] shadow-[0_4px_14px_rgba(80,10,25,0.05)] hover:shadow-[0_10px_24px_rgba(80,10,25,0.12)] hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Top Image with Organic Wave Overlay */}
                    <div className="relative w-full overflow-hidden bg-warm-100 shrink-0">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-20 sm:h-22 md:h-24 object-cover transition-transform duration-500 group-hover:scale-108"
                        loading="lazy"
                      />
                      {/* Organic wave shape dividing photo and white card body */}
                      <svg
                        viewBox="0 0 300 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute -bottom-[1px] left-0 right-0 w-full h-3.5 sm:h-4 text-white pointer-events-none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0,14 C70,24 130,2 200,16 C250,24 280,10 300,14 L300,24 L0,24 Z"
                          fill="#FFFFFF"
                        />
                      </svg>
                    </div>

                    {/* Card Content & Action Button */}
                    <div className="p-2.5 sm:p-3 pt-1 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="font-heading font-black text-xs sm:text-[12.5px] text-[#7A0C22] leading-tight group-hover:text-[#5C0819] transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-[10px] sm:text-[10.5px] text-[#475569] font-medium leading-relaxed mt-1">
                          {card.description}
                        </p>
                      </div>

                      {/* Circular Burgundy Arrow Button */}
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#7A0C22] text-white flex items-center justify-center shrink-0 self-end ml-auto mt-2 group-hover:bg-[#5C0819] group-hover:scale-110 transition-all duration-200 shadow-2xs">
                        <ArrowRight className="w-3 h-3 text-white transition-transform duration-200 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Apparel Showcase (Visible on smaller screens below the cards) */}
          <div className="block lg:hidden mt-6 max-w-sm sm:max-w-md mx-auto">
            <img
              src="/assets/images/why-choose/apparel-showcase.png"
              alt="TeesZone Complete Apparel Partner"
              className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(20,0,5,0.18)]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
