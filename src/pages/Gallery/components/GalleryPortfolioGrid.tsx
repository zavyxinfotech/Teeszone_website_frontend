import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/common/Button';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'apparel' | 'workwear' | 'official-partner';
  categoryLabel: string;
  image: string;
  description: string;
  tags: string[];
}

export const galleryData: GalleryItem[] = [
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
    image: '/assets/images/sectors/sector-healthcare.webp',
    description: 'Durable, stain-resistant scrubs, lab coats, and safety-compliant industrial workwear.',
    tags: ['Antimicrobial', 'High Durability', 'Reinforced Seams'],
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
    image: '/assets/images/sectors/sector-corporate.webp',
    description: 'Sophisticated executive shirts, corporate blazers, and branded casual Fridays t-shirts.',
    tags: ['Corporate Wear', 'Subtle Branding', 'Wrinkle Free'],
  },
  {
    id: 'g-10',
    title: 'Athletic Wear & Sports Team Kits',
    category: 'apparel',
    categoryLabel: 'Polos & T-Shirts',
    image: '/assets/images/sectors/sector-sports.webp',
    description: 'Breathable dry-fit polyester performance tees with moisture wicking and sublimation print.',
    tags: ['Dry Fit', 'Moisture Wicking', 'Full Sublimation'],
  },
  {
    id: 'g-12',
    title: 'Campus & Institutional Merchandise',
    category: 'workwear',
    categoryLabel: 'Uniforms & Workwear',
    image: '/assets/images/sectors/sector-education.webp',
    description: 'Custom collegiate hoodies, club merchandise, and student uniforms with embroidered crests.',
    tags: ['Fleece Hoodies', 'Gold Thread Crest', 'Batch Delivery'],
  },
  {
    id: 'g-p1',
    title: 'BNI Tycoon Erode – Official Apparel Partner',
    category: 'official-partner',
    categoryLabel: 'Official Apparel Partner',
    image: '/assets/images/about/bni-handshake.jpg',
    description: 'Exclusive custom apparel manufacturing & premium corporate uniforms partner for BNI Tycoon Erode.',
    tags: ['BNI Tycoon', 'Executive Polos', 'Official Partner'],
  },
  {
    id: 'g-p2',
    title: 'Marathon & Sports Event Official Apparel Partner',
    category: 'official-partner',
    categoryLabel: 'Official Apparel Partner',
    image: '/assets/images/card-5-sports.png',
    description: 'Official sports jersey & marathon apparel manufacturing partner for premier sporting events across Tamil Nadu.',
    tags: ['Marathon Partner', 'Sublimation Jerseys', 'Performance Wear'],
  },
  {
    id: 'g-p3',
    title: 'Enterprise Conclave Official Apparel Partner',
    category: 'official-partner',
    categoryLabel: 'Official Apparel Partner',
    image: '/assets/images/card-3-corp.png',
    description: 'Official branded uniforms and executive apparel partner for leading enterprise institutions and annual summits.',
    tags: ['Enterprise Partner', 'Custom Crests', 'Bulk Manufacturing'],
  },
  {
    id: 'g-p4',
    title: 'Collegiate & Youth Festival Apparel Partner',
    category: 'official-partner',
    categoryLabel: 'Official Apparel Partner',
    image: '/assets/images/card-4-school.png',
    description: 'Trusted official apparel manufacturing partner for university festivals, alumni meets, and graduation merchandise.',
    tags: ['College Partner', 'Event Tees', 'Custom Hoodies'],
  },
];

const categories = [
  { id: 'all', label: 'All Showcase' },
  { id: 'apparel', label: 'Polos & T-Shirts' },
  { id: 'workwear', label: 'Uniforms & Workwear' },
  { id: 'official-partner', label: 'Official Apparel Partner' },
];

interface GalleryPortfolioGridProps {
  onOpenQuote?: () => void;
}

export const GalleryPortfolioGrid: React.FC<GalleryPortfolioGridProps> = ({ onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return galleryData;
    return galleryData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="relative z-50 bg-[#F7E7CE] -mt-2">
      <div className="bg-[#F7E7CE] rounded-t-[36px] sm:rounded-t-[48px] lg:rounded-t-[56px] shadow-[0_-25px_60px_rgba(0,0,0,0.12)] border-t border-[#80011F]/15 overflow-hidden">
        {/* 1. Header Section */}
        <section className="pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#80011F]/10 border border-[#80011F]/20 text-[#80011F] text-xs sm:text-sm font-heading font-semibold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#80011F]" />
            <span>Curated Portfolio Archive</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#211D20] tracking-tight leading-[1.15]">
            Explore Our <span className="text-[#80011F]">Finished Works</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-[#554D56] max-w-2xl mx-auto leading-relaxed">
            Filter by custom polos, uniforms &amp; workwear, or official apparel partnerships.
            Click any card to view detailed specifications.
          </p>
        </section>

        {/* 2. Sticky Category Filter Tabs - Matching warm cream background */}
        <section className="sticky top-[68px] sm:top-[74px] z-30 bg-[#F7E7CE]/95 backdrop-blur-md border-b border-[#80011F]/15 shadow-xs py-3.5 sm:py-4">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-heading font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#80011F] text-white shadow-md shadow-[#80011F]/20'
                        : 'bg-white/80 text-[#211D20] hover:bg-white hover:text-[#80011F] border border-[#80011F]/15'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Responsive Image Grid */}
        <section className="py-10 sm:py-14 lg:py-18 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveItem(item)}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-[#80011F]/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
                >
                  {/* Image Container with Zoom & Badge */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                      <span className="text-xs font-heading font-medium text-white/90 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-full flex items-center gap-1.5">
                        <ZoomIn className="w-3.5 h-3.5" />
                        Click to expand
                      </span>
                    </div>
                    <span className="absolute top-3 left-3 text-[11px] font-heading font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#80011F] shadow-xs border border-[#80011F]/10">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-[#211D20] group-hover:text-[#80011F] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#554D56] leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Tag Pills */}
                    <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-wrap gap-1.5">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-heading font-medium bg-[#80011F]/5 text-[#80011F] px-2 py-0.5 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* 4. Lightbox Modal */}
        <AnimatePresence>
          {activeItem && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setActiveItem(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#80011F]/20"
              >
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative aspect-[16/10] w-full bg-neutral-100">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <span className="text-xs font-heading font-bold tracking-wide uppercase text-[#80011F] mb-1 block">
                    {activeItem.categoryLabel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#211D20]">
                    {activeItem.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#554D56] leading-relaxed">
                    {activeItem.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeItem.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-heading font-medium bg-[#80011F]/10 text-[#80011F] px-2.5 py-1 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs text-[#554D56]">
                      TeesZone Tiruppur Manufacturing Unit
                    </span>
                    <Button
                      variant="primary"
                      size="sm"
                      withArrow
                      onClick={() => {
                        setActiveItem(null);
                        if (onOpenQuote) onOpenQuote();
                      }}
                    >
                      Inquire About This
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default GalleryPortfolioGrid;
