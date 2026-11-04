import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuoteCTA } from '@/components/sections/QuoteCTA';
import { Button } from '@/components/common/Button';
import { Sparkles, X, ZoomIn, Building2, Shirt, Layers, Award, Users } from 'lucide-react';

interface GalleryProps {
  onOpenQuote?: () => void;
}

interface GalleryItem {
  id: string;
  title: string;
  category: 'facility' | 'apparel' | 'workwear' | 'printing' | 'clients';
  categoryLabel: string;
  image: string;
  description: string;
  tags: string[];
}

const galleryData: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Modern Apparel Manufacturing Floor',
    category: 'facility',
    categoryLabel: 'Facility & Machinery',
    image: '/assets/images/about-factory.webp',
    description: 'Advanced knitting, cutting, and stitching lines in our Tiruppur production facility.',
    tags: ['Tiruppur Hub', 'High-Speed Stitching', 'Precision Cutting'],
  },
  {
    id: 'g-2',
    title: 'Custom Branded Polo Collection',
    category: 'apparel',
    categoryLabel: 'Polos & T-Shirts',
    image: '/assets/images/apparel-products.webp',
    description: '240 GSM combed cotton & poly-blend customized collared polos for corporate clients.',
    tags: ['Combed Cotton', 'Bio-Washed', 'Custom Ribs'],
  },
  {
    id: 'g-3',
    title: 'Industrial & Healthcare Uniforms',
    category: 'workwear',
    categoryLabel: 'Uniforms & Workwear',
    image: '/assets/images/sector-healthcare.webp',
    description: 'Durable, stain-resistant scrubs, lab coats, and safety-compliant industrial workwear.',
    tags: ['Antimicrobial', 'High Durability', 'Reinforced Seams'],
  },
  {
    id: 'g-4',
    title: 'High-Precision Screen & Rotary Printing',
    category: 'printing',
    categoryLabel: 'Printing & Embroidery',
    image: '/assets/images/fabric-printing.webp',
    description: 'Vibrant plastisol, discharge, water-based printing, and automated computerized embroidery.',
    tags: ['Plastisol', 'HD Screen', 'Japanese Embroidery'],
  },
  {
    id: 'g-5',
    title: 'Folded & Packaged Retail Apparel',
    category: 'apparel',
    categoryLabel: 'Polos & T-Shirts',
    image: '/assets/images/folded-stack.webp',
    description: 'Finished custom t-shirts steam-pressed, custom tagged, and individually poly-bagged.',
    tags: ['Steam Pressed', 'Individual Polybag', 'Barcode Tagging'],
  },
  {
    id: 'g-6',
    title: 'Corporate & Executive Apparel',
    category: 'workwear',
    categoryLabel: 'Uniforms & Workwear',
    image: '/assets/images/sector-corporate.webp',
    description: 'Sophisticated executive shirts, corporate blazers, and branded casual Fridays t-shirts.',
    tags: ['Corporate Wear', 'Subtle Branding', 'Wrinkle Free'],
  },
  {
    id: 'g-7',
    title: 'Bulk Order Staging & Warehousing',
    category: 'facility',
    categoryLabel: 'Facility & Machinery',
    image: '/assets/images/bulk-orders.webp',
    description: 'Finished goods staged in our logistics warehouse for scheduled Pan-India dispatches.',
    tags: ['Pan India Logistics', 'Secured Packaging', 'Live Tracking'],
  },
  {
    id: 'g-8',
    title: 'Rigorous 4-Point Quality Inspection',
    category: 'facility',
    categoryLabel: 'Facility & Machinery',
    image: '/assets/images/quality-check.webp',
    description: 'Zero-defect guarantee through yarn check, dimensional stability, and seam strength testing.',
    tags: ['GSM Testing', 'Color Fastness', 'Shrink Resistance'],
  },
  {
    id: 'g-9',
    title: '3,000+ Brand Clients Nationwide',
    category: 'clients',
    categoryLabel: 'Client Showcase',
    image: '/assets/images/clients/our-clients-honeycomb.webp',
    description: 'Trusted apparel partner for leading multinational enterprises, institutions, and startups.',
    tags: ['3000+ Clients', 'Enterprise Grade', 'Repeat Trust'],
  },
  {
    id: 'g-10',
    title: 'Athletic Wear & Sports Team Kits',
    category: 'apparel',
    categoryLabel: 'Polos & T-Shirts',
    image: '/assets/images/sector-sports.webp',
    description: 'Breathable dry-fit polyester performance tees with moisture wicking and sublimation print.',
    tags: ['Dry Fit', 'Moisture Wicking', 'Full Sublimation'],
  },
  {
    id: 'g-11',
    title: 'Curated Fabric Inventory & Yarn Warehouse',
    category: 'facility',
    categoryLabel: 'Facility & Machinery',
    image: '/assets/images/about-factory-cell-main.jpg',
    description: 'Over 50+ ready fabric varieties in stock for instant sampling and rapid order turnaround.',
    tags: ['50+ Fabric Blends', 'Eco Cotton', 'Ready Stock'],
  },
  {
    id: 'g-12',
    title: 'Campus & Institutional Merchandise',
    category: 'workwear',
    categoryLabel: 'Uniforms & Workwear',
    image: '/assets/images/sector-education.webp',
    description: 'Custom collegiate hoodies, club merchandise, and student uniforms with embroidered crests.',
    tags: ['Fleece Hoodies', 'Gold Thread Crest', 'Batch Delivery'],
  },
];

const categories = [
  { id: 'all', label: 'All Showcase' },
  { id: 'facility', label: 'Factory & Facility' },
  { id: 'apparel', label: 'Polos & T-Shirts' },
  { id: 'workwear', label: 'Uniforms & Workwear' },
  { id: 'printing', label: 'Printing & Embroidery' },
  { id: 'clients', label: 'Client Projects' },
];

export const Gallery: React.FC<GalleryProps> = ({ onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return galleryData;
    return galleryData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      {/* 1. HERO BANNER */}
      <section className="relative w-full pt-32 pb-14 sm:pt-36 sm:pb-18 lg:pt-40 lg:pb-20 bg-[#FAF7F2] border-b border-burgundy-100/60 overflow-hidden">
        {/* Soft Background Silk Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy-100/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-warm-200/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy-50 border border-burgundy-200/60 text-burgundy-700 text-xs sm:text-sm font-heading font-semibold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-burgundy-700" />
            <span>Manufacturing & Portfolio Showcase</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-heading font-bold text-charcoal-900 leading-[1.15] tracking-tight max-w-4xl mx-auto">
            Our Production Facility &amp;{' '}
            <span className="text-burgundy-700">Apparel Gallery</span>
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
            Take an inside look at our state-of-the-art Tiruppur manufacturing plant, high-precision
            branding techniques, and bespoke apparel delivered for 3,000+ businesses across India.
          </p>

          {/* Quick Metrics */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3.5 sm:p-4 border border-burgundy-100/80 shadow-soft text-center">
              <span className="block text-2xl sm:text-3xl font-heading font-bold text-burgundy-700">
                100K+
              </span>
              <span className="text-xs sm:text-sm text-charcoal-600 font-medium">Monthly Output</span>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3.5 sm:p-4 border border-burgundy-100/80 shadow-soft text-center">
              <span className="block text-2xl sm:text-3xl font-heading font-bold text-burgundy-700">
                3,000+
              </span>
              <span className="text-xs sm:text-sm text-charcoal-600 font-medium">Trusted Clients</span>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3.5 sm:p-4 border border-burgundy-100/80 shadow-soft text-center">
              <span className="block text-2xl sm:text-3xl font-heading font-bold text-burgundy-700">
                100%
              </span>
              <span className="text-xs sm:text-sm text-charcoal-600 font-medium">Tiruppur Hub</span>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3.5 sm:p-4 border border-burgundy-100/80 shadow-soft text-center">
              <span className="block text-2xl sm:text-3xl font-heading font-bold text-burgundy-700">
                48h
              </span>
              <span className="text-xs sm:text-sm text-charcoal-600 font-medium">Fast Sampling</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="sticky top-[68px] sm:top-[74px] z-30 bg-white/95 backdrop-blur-md border-b border-burgundy-100/70 shadow-xs py-3.5 sm:py-4">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-heading font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-burgundy-700 text-white shadow-soft'
                      : 'bg-warm-100/70 text-charcoal-700 hover:bg-burgundy-50 hover:text-burgundy-700'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. GALLERY GRID */}
      <section className="py-12 sm:py-16 lg:py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={() => setActiveItem(item)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-burgundy-100/80 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Image Container with Zoom & Badge */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-warm-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <span className="text-xs font-heading font-medium text-white/90 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5" />
                      Click to expand
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 text-[11px] font-heading font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-burgundy-700 shadow-xs">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-heading font-bold text-charcoal-900 group-hover:text-burgundy-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-charcoal-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 pt-3 border-t border-burgundy-50 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-charcoal-600 bg-warm-50 border border-burgundy-100/40 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4. MODAL LIGHTBOX */}
      <AnimatePresence>
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-900/80 backdrop-blur-sm"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-burgundy-100 flex flex-col"
            >
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-charcoal-800 shadow-md flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full bg-warm-100">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-6 sm:p-7 bg-[#FFFDF9]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-heading font-semibold text-burgundy-700 bg-burgundy-50 border border-burgundy-200/60 px-3 py-1 rounded-full uppercase">
                    {activeItem.categoryLabel}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-charcoal-900">
                  {activeItem.title}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-charcoal-700 leading-relaxed">
                  {activeItem.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-burgundy-100">
                  <div className="flex flex-wrap gap-2">
                    {activeItem.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium text-charcoal-700 bg-white border border-burgundy-200/80 px-2.5 py-1 rounded-full shadow-2xs"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="primary"
                    size="sm"
                    withArrow
                    onClick={() => {
                      setActiveItem(null);
                      if (onOpenQuote) onOpenQuote();
                    }}
                    to={!onOpenQuote ? '/contact?mode=quote' : undefined}
                    className="rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-medium px-5 py-2 text-sm"
                  >
                    Enquire for Bulk Order
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. BOTTOM QUOTE CTA */}
      <QuoteCTA
        title="Ready to Start Your Custom Apparel Project?"
        subtitle="Connect with Tiruppur's direct t-shirt & uniform manufacturing experts. Guaranteed on-time delivery and unbeatable direct factory pricing."
        onOpenQuote={onOpenQuote}
      />
    </div>
  );
};

export default Gallery;

