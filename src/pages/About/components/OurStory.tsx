import React from 'react';
import { Button } from '@/components/common/Button';
import { Users, Layers, MapPin } from 'lucide-react';

export const OurStory: React.FC = () => {
  return (
    <section id="our-story" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden" aria-label="About TeesZone - Our Story">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* =====================================================================
            1. DESKTOP VIEW (Two-column layout matching reference)
            - Left: TeesZone company building photo
            - Right: OUR STORY eyebrow, About TeesZone heading, description & CTA
            ===================================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 xl:gap-14 items-center">

          {/* LEFT: TeesZone Company Building Photo */}
          <div className="lg:col-span-6">
            <div className="relative w-full rounded-[26px] xl:rounded-[30px] overflow-hidden shadow-lg border border-gray-100 bg-gray-50 aspect-[4/3] xl:aspect-[1.25/1]">
              <img
                src="/assets/images/about/teeszone-building.jpg"
                alt="TeesZone Clothing Private Limited headquarters and manufacturing showroom in Erode, Tamil Nadu"
                className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
                loading="eager"
              />
            </div>
          </div>

          {/* RIGHT: Story Content */}
          <div className="lg:col-span-6 space-y-4 xl:space-y-5 text-left">
            <span className="inline-block text-xs sm:text-sm font-heading font-extrabold uppercase tracking-widest text-[#80011F]">
              OUR STORY
            </span>

            <h2 className="text-3xl sm:text-4xl xl:text-[44px] font-heading font-black text-[#1A1D20] leading-[1.15] tracking-tight">
              About TeesZone
            </h2>

            <p className="text-base xl:text-lg text-charcoal-600 font-normal leading-relaxed pt-1">
              TeesZone Clothing Private Limited is a leading custom apparel and corporate uniform manufacturer based in Erode, Tamil Nadu. We specialise in designing and producing <strong className="font-semibold text-charcoal-800">high-quality T-Shirts</strong>, <strong className="font-semibold text-charcoal-800">Polo T-Shirts</strong>, <strong className="font-semibold text-charcoal-800">Corporate Uniforms</strong>, <strong className="font-semibold text-charcoal-800">School &amp; Institutional Apparel</strong>, and <strong className="font-semibold text-charcoal-800">Custom Branded Clothing</strong> for businesses, institutions, and organizations across India.
            </p>

            <div className="pt-3">
              <Button
                variant="primary"
                size="lg"
                to="/products"
                withArrow
                className="bg-[#80011F] hover:bg-[#570018] text-white rounded-full px-7 py-3 text-sm xl:text-base font-heading font-semibold shadow-soft hover:shadow-soft-lg transition-all"
              >
                Our Capabilities
              </Button>
            </div>
          </div>

        </div>

        {/* =====================================================================
            2. MOBILE VIEW (Exact order matching mobile reference)
            1. Company building image
            2. OUR STORY eyebrow
            3. About TeesZone heading
            4. Story description
            5. Our Capabilities CTA
            ===================================================================== */}
        <div className="block lg:hidden space-y-5 text-left">

          {/* 1. Building Image */}
          <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-gray-100 bg-gray-50 aspect-[4/3] sm:aspect-[16/10]">
            <img
              src="/assets/images/about/teeszone-building.jpg"
              alt="TeesZone Clothing Private Limited headquarters in Erode, Tamil Nadu"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>

          {/* 2. Eyebrow */}
          <span className="inline-block text-xs font-heading font-extrabold uppercase tracking-widest text-[#80011F]">
            OUR STORY
          </span>

          {/* 3. Heading */}
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#1A1D20] leading-tight">
            About TeesZone
          </h2>

          {/* 4. Description */}
          <p className="text-[15px] sm:text-base text-charcoal-600 font-normal leading-relaxed">
            TeesZone Clothing Private Limited is a leading custom apparel and corporate uniform manufacturer based in Erode, Tamil Nadu. We specialise in designing and producing <strong className="font-semibold text-charcoal-800">high-quality T-Shirts</strong>, <strong className="font-semibold text-charcoal-800">Polo T-Shirts</strong>, <strong className="font-semibold text-charcoal-800">Corporate Uniforms</strong>, <strong className="font-semibold text-charcoal-800">School &amp; Institutional Apparel</strong>, and <strong className="font-semibold text-charcoal-800">Custom Branded Clothing</strong> for businesses, institutions, and organizations across India.
          </p>

          {/* 5. CTA Button */}
          <div className="pt-1">
            <Button
              variant="primary"
              size="md"
              to="/products"
              withArrow
              className="bg-[#80011F] hover:bg-[#570018] text-white rounded-full px-6 py-2.5 text-sm font-heading font-semibold shadow-soft"
            >
              Our Capabilities
            </Button>
          </div>

        </div>

        {/* =====================================================================
            3. HORIZONTAL STATISTICS STRIP (Matching Reference)
            - 10 Lakhs+ Garments Delivered (Garment hanger icon)
            - 500+ Happy Clients (Users icon)
            - 20+ Product Variants (Layers icon)
            - Pan-India Delivery (MapPin icon)
            - Clean vertical separators between all items
            ===================================================================== */}
        <div className="mt-10 sm:mt-12 lg:mt-16">

          {/* DESKTOP PILL STRIP */}
          <div className="hidden sm:flex items-center justify-between bg-white rounded-full border border-gray-200/90 shadow-xs py-5 px-6 lg:px-12">

            {/* Stat 1: 10 Lakhs+ Garments Delivered */}
            <div className="flex items-center gap-3.5 xl:gap-4 flex-1 justify-center">
              <svg
                className="w-8 h-8 xl:w-9 xl:h-9 text-[#80011F] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2a3 3 0 0 0-3 3c0 .8.4 1.5 1 2L2 14.5a1.5 1.5 0 0 0 1 2.5h18a1.5 1.5 0 0 0 1-2.5L14 7c.6-.5 1-1.2 1-2a3 3 0 0 0-3-3z" />
                <path d="M2 17h20" />
              </svg>
              <div className="text-left">
                <p className="text-lg xl:text-xl font-heading font-black text-charcoal-900 leading-none">
                  10 Lakhs+
                </p>
                <p className="text-xs xl:text-sm text-charcoal-500 font-medium mt-1">
                  Garments Delivered
                </p>
              </div>
            </div>

            {/* Separator */}
            <div className="w-[1px] h-10 bg-gray-200/90 shrink-0" aria-hidden="true" />

            {/* Stat 2: 500+ Happy Clients */}
            <div className="flex items-center gap-3.5 xl:gap-4 flex-1 justify-center">
              <Users className="w-8 h-8 xl:w-9 xl:h-9 text-[#80011F] stroke-[1.9] shrink-0" aria-hidden="true" />
              <div className="text-left">
                <p className="text-lg xl:text-xl font-heading font-black text-charcoal-900 leading-none">
                  500+
                </p>
                <p className="text-xs xl:text-sm text-charcoal-500 font-medium mt-1">
                  Happy Clients
                </p>
              </div>
            </div>

            {/* Separator */}
            <div className="w-[1px] h-10 bg-gray-200/90 shrink-0" aria-hidden="true" />

            {/* Stat 3: 20+ Product Variants */}
            <div className="flex items-center gap-3.5 xl:gap-4 flex-1 justify-center">
              <Layers className="w-8 h-8 xl:w-9 xl:h-9 text-[#80011F] stroke-[1.9] shrink-0" aria-hidden="true" />
              <div className="text-left">
                <p className="text-lg xl:text-xl font-heading font-black text-charcoal-900 leading-none">
                  20+
                </p>
                <p className="text-xs xl:text-sm text-charcoal-500 font-medium mt-1">
                  Product Variants
                </p>
              </div>
            </div>

            {/* Separator */}
            <div className="w-[1px] h-10 bg-gray-200/90 shrink-0" aria-hidden="true" />

            {/* Stat 4: Pan-India Delivery */}
            <div className="flex items-center gap-3.5 xl:gap-4 flex-1 justify-center">
              <MapPin className="w-8 h-8 xl:w-9 xl:h-9 text-[#80011F] stroke-[1.9] shrink-0" aria-hidden="true" />
              <div className="text-left">
                <p className="text-lg xl:text-xl font-heading font-black text-charcoal-900 leading-none">
                  Pan-India
                </p>
                <p className="text-xs xl:text-sm text-charcoal-500 font-medium mt-1">
                  Delivery
                </p>
              </div>
            </div>

          </div>

          {/* MOBILE COMPACT STATS STRIP (Matching Mobile Reference) */}
          <div className="grid grid-cols-4 sm:hidden bg-white rounded-2xl border border-gray-200/90 shadow-xs py-3.5 px-2 divide-x divide-gray-200/80">

            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center px-1">
              <svg
                className="w-6 h-6 text-[#80011F] mb-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2a3 3 0 0 0-3 3c0 .8.4 1.5 1 2L2 14.5a1.5 1.5 0 0 0 1 2.5h18a1.5 1.5 0 0 0 1-2.5L14 7c.6-.5 1-1.2 1-2a3 3 0 0 0-3-3z" />
                <path d="M2 17h20" />
              </svg>
              <p className="text-xs font-heading font-black text-charcoal-900 leading-tight">10 Lakhs+</p>
              <p className="text-[10px] text-charcoal-500 font-normal leading-tight mt-0.5">Delivered</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center px-1">
              <Users className="w-6 h-6 text-[#80011F] stroke-[1.9] mb-1" aria-hidden="true" />
              <p className="text-xs font-heading font-black text-charcoal-900 leading-tight">500+</p>
              <p className="text-[10px] text-charcoal-500 font-normal leading-tight mt-0.5">Clients</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center px-1">
              <Layers className="w-6 h-6 text-[#80011F] stroke-[1.9] mb-1" aria-hidden="true" />
              <p className="text-xs font-heading font-black text-charcoal-900 leading-tight">20+</p>
              <p className="text-[10px] text-charcoal-500 font-normal leading-tight mt-0.5">Variants</p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center px-1">
              <MapPin className="w-6 h-6 text-[#80011F] stroke-[1.9] mb-1" aria-hidden="true" />
              <p className="text-xs font-heading font-black text-charcoal-900 leading-tight">Pan-India</p>
              <p className="text-[10px] text-charcoal-500 font-normal leading-tight mt-0.5">Delivery</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OurStory;
