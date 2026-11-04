export type ProductCategory =
  | 'corporate'
  | 'blank'
  | 'school'
  | 'promotional-events'
  | 'sports-academics';

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  image: string;
  fabrics: string[];
  gsmRange: string;
  moq: string;
  brandingTechniques: string[];
  features: string[];
  bestFor: string;
}

export const productCategories = [
  { id: 'all', label: 'All Apparel' },
  { id: 'corporate', label: 'Corporate Uniforms & Executive Polos' },
  { id: 'blank', label: 'Blank T-Shirts & Plain Apparel' },
  { id: 'school', label: 'School Uniforms & Academic T-Shirts' },
  { id: 'promotional-events', label: 'Promotional Merchandise & Event Apparel' },
  { id: 'sports-academics', label: 'Sports Apparel for Academics & Teams' },
] as const;

export const productsData: ProductItem[] = [
  {
    id: 'corporate-executive-uniforms',
    name: 'Corporate Uniforms & Executive Polos',
    category: 'corporate',
    categoryLabel: 'Corporate Wear',
    tagline: 'Refined pique knit with tailored collars for elite workplace branding',
    description: 'Engineered with premium combed cotton pique, contrast tipping options, and reinforced button plackets. Ideal for office staff, executive corporate offsites, and hospitality uniforms.',
    image: '/assets/products/polo-cream.png',
    fabrics: ['100% Combed Cotton Pique', 'Cotton-Poly Matty Blend', 'Mercerized Luxury Cotton'],
    gsmRange: '220 - 260 GSM',
    moq: '50 Pieces per colorway',
    brandingTechniques: ['Precision Monogram Embroidery', 'High-Density Chest Printing', 'Laser Engraved Custom Buttons'],
    features: ['Anti-collar curl rib knit', 'Reinforced neck tape', 'Tailored side-vent cut', 'Color fastness guarantee'],
    bestFor: 'Corporate delegations, IT enterprise teams, retail store staff, executive hospitality & golf summits',
  },
  {
    id: 'blank-plain-apparel',
    name: 'Blank T-Shirts & Plain Apparel',
    category: 'blank',
    categoryLabel: 'Blank Apparel',
    tagline: 'Unbranded premium blank t-shirts in ready-stock for private labels and custom printers',
    description: 'Manufactured with ultra-soft bio-washed combed cotton, ready for custom printing and relabeling. Features tear-away tags, smooth print-ready surfaces, and consistent sizing.',
    image: '/assets/products/oversized-maroon.png',
    fabrics: ['100% Super Combed Bio-Washed Cotton', 'Organic Ring-Spun Cotton', 'Heavy Loopknit Cotton'],
    gsmRange: '180 - 240 GSM',
    moq: '50 Pieces per colorway',
    brandingTechniques: ['Ready for Screen Printing', 'Direct to Film (DTF)', 'Direct to Garment (DTG)', 'Custom Woven Neck Labels'],
    features: ['Tear-away satin brand label', 'Pre-shrunk compact yarn', 'Ribbed Lycra neckband', 'Zero torque side seams'],
    bestFor: 'Streetwear brands, online D2C clothing brands, printing businesses, merchandise drops & screen printers',
  },
  {
    id: 'school-institutional-uniforms',
    name: 'School Uniforms & Academic T-Shirts',
    category: 'school',
    categoryLabel: 'School & Institutional',
    tagline: 'Durable, colorfast uniforms and school house t-shirts built for daily student comfort',
    description: 'Specially engineered for schools, universities, and training institutes. Built to withstand 100+ industrial washes while maintaining bright vibrant colors and structural integrity.',
    image: '/assets/products/polo-maroon.png',
    fabrics: ['Long-Staple Cotton-Poly Interlock', 'Heavy Bio-Washed Matty Pique', 'Breathable Combed Cotton'],
    gsmRange: '200 - 240 GSM',
    moq: '50 Pieces per colorway',
    brandingTechniques: ['Computerized Institutional Crest Embroidery', 'Eco-Safe Water-Based Screen Print', 'Woven Badge Appliqué'],
    features: ['Reinforced shoulder & armhole stitching', 'Stain-resistant fabric finish', 'Child-safe lead-free dyes', 'Breathable all-day comfort'],
    bestFor: 'K-12 schools, academic institutions, university colleges, school houses & boarding academies',
  },
  {
    id: 'promotional-events-merchandise',
    name: 'Promotional Merchandise & Event Apparel',
    category: 'promotional-events',
    categoryLabel: 'Promotional & Events',
    tagline: 'High-impact custom printed apparel for corporate events, hackathons, and brand activations',
    description: 'Budget-friendly yet premium-feel apparel produced with rapid turnaround times. Designed for marathon runners, tech conferences, trade shows, startup swag kits, and music tours.',
    image: '/assets/products/hoodie-white.png',
    fabrics: ['100% Cotton Lightweight Single Jersey', 'Poly-Cotton Promo Blend', 'Brushed Heavy Fleece for Hoodies'],
    gsmRange: '160 - 320 GSM',
    moq: '50 Pieces per order',
    brandingTechniques: ['Full-Chest Vibrant DTF Printing', 'Plastisol Screen Printing', 'Reflective Metallic Transfers'],
    features: ['Cost-effective bulk tiered pricing', 'Express 48-hour rush production available', 'Individually folded & polybagged', 'Pantone color matching'],
    bestFor: 'Trade shows, college cultural fests, marathon running events, tech summits, NGO campaigns & brand launches',
  },
  {
    id: 'sports-academics-athletic',
    name: 'Sports Apparel for Academics & Teams',
    category: 'sports-academics',
    categoryLabel: 'Sports for Academics',
    tagline: 'High-performance moisture-wicking jerseys and sports kits for school & college varsity teams',
    description: 'Built with rapid moisture-wicking technology, 4-way stretch micro-mesh, and anti-odor treatments. Engineered for soccer, cricket, basketball, track & field, and collegiate athletic departments.',
    image: '/assets/products/sportswear-jersey.png',
    fabrics: ['Nano-Poly Micro-Dot Mesh', 'Interlock Dry-Fit Polyester', 'Breathable Honeycomb Poly'],
    gsmRange: '150 - 190 GSM',
    moq: '50 Pieces per colorway',
    brandingTechniques: ['All-Over Vibrant Dye Sublimation', 'Vinyl Player Name & Numbering', 'Reflective Heat Transfer Logos'],
    features: ['Rapid sweat-wicking dry technology', 'Anti-microbial odor protection', 'Flatlock anti-chafing seams', 'Fade-proof sublimation colors'],
    bestFor: 'School sports teams, university leagues, college cricket & football squads, athletic meets & annual sports day',
  },
];
