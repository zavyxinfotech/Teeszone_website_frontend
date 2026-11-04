import { ProductCategory } from './products';

export interface CategoryDetail {
  slug: ProductCategory;
  title: string;
  badge: string;
  h1: string;
  tagline: string;
  metaDescription: string;
  heroImage: string;
  gsmRange: string;
  moq: string;
  samplingTime: string;
  productionTime: string;
  overview: string;
  fabrics: { name: string; description: string }[];
  brandingTechniques: { name: string; description: string }[];
  keyHighlights: string[];
  applications: string[];
  specs: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
}

export const categoryDetails: Record<ProductCategory, CategoryDetail> = {
  corporate: {
    slug: 'corporate',
    title: 'Corporate Uniforms & Executive Polos',
    badge: 'Enterprise & Workplace Apparel',
    h1: 'Custom Corporate Uniforms & Executive Polo Shirts',
    tagline: 'Refined pique knit with tailored collars for elite workplace branding & professional teams',
    metaDescription:
      'Direct Tiruppur manufacturer for corporate uniforms, executive polo t-shirts, and company workwear. High thread-count combed cotton, custom embroidery, and pan-India bulk delivery.',
    heroImage: '/assets/products/polo-cream.png',
    gsmRange: '220 - 260 GSM',
    moq: '50 Pieces per colorway',
    samplingTime: '24 - 48 Hours',
    productionTime: '5 - 7 Business Days',
    overview:
      'TeesZone crafts premium corporate uniforms and collared polo t-shirts engineered specifically for modern enterprises, corporate offices, sales executives, and hospitality staff. Manufactured in Tiruppur with color-fast mercerized and combed pique cotton, our garments maintain crisp collars and pristine color through hundreds of washes.',
    fabrics: [
      {
        name: '100% Combed Cotton Pique',
        description: 'Classic honeycomb knit structure providing breathability, soft hand-feel, and premium drape.',
      },
      {
        name: 'Cotton-Rich Matty Blend (60/40)',
        description: 'Blended for enhanced wrinkle resistance, superior shape retention, and everyday office durability.',
      },
      {
        name: 'Mercerized Luxury Cotton',
        description: 'Treated for silk-like luster, enhanced tear strength, and zero color fading after extensive laundering.',
      },
    ],
    brandingTechniques: [
      {
        name: 'Precision Computerized Embroidery',
        description: 'High-density German Madeira thread embroidery for sharp chest monograms and corporate crests.',
      },
      {
        name: 'Laser-Engraved Branded Buttons',
        description: 'Custom molded poly or horn buttons subtly etched with your company brand identity.',
      },
      {
        name: 'Contrast Collar & Cuff Tipping',
        description: 'Custom dyed rib collars featuring 1, 2, or 3 accent color bands to match brand guidelines.',
      },
    ],
    keyHighlights: [
      'Anti-curl flat-knit collars with permanent collar stays',
      'Double-needle hem and reinforced side vent slits for mobility',
      'Bio-washed for anti-pilling and zero skin irritation',
      'Pantone color matching guaranteed across bulk batches',
    ],
    applications: [
      'Tech corporate office staff & software teams',
      'Hospitality, hotel, resort, and restaurant staff',
      'Sales representatives and customer service personnel',
      'Executive leadership summits, conferences & offsites',
    ],
    specs: [
      { label: 'Available Sizes', value: 'XS to 5XL (Regular, Slim, and Plus Fit)' },
      { label: 'Standard GSM', value: '220 GSM / 240 GSM / 260 GSM Heavyweight' },
      { label: 'Neckline Style', value: '2-Button or 3-Button Placket with Interlining' },
      { label: 'Packaging', value: 'Individual polybagged with silica gel & custom carton' },
    ],
    faqs: [
      {
        question: 'Can you match our exact corporate Pantone brand colors?',
        answer:
          'Yes. For orders starting at 100 pieces, our Tiruppur dye house does precision lab-dip Pantone shade matching with guaranteed color fastness.',
      },
      {
        question: 'Do you provide pre-production samples before starting bulk order?',
        answer:
          'Absolutely. We generate 3D digital mockups within 24 hours and can dispatch physical fabric swatches or stitched samples for management sign-off.',
      },
      {
        question: 'What is the minimum order quantity for corporate embroidery?',
        answer:
          'Our standard MOQ is 50 pieces per order, with flexible size splits across XS to 5XL.',
      },
    ],
  },

  blank: {
    slug: 'blank',
    title: 'Blank T-Shirts & Plain Apparel',
    badge: 'Ready Stock & Private Label',
    h1: 'Premium Blank T-Shirts & Plain Apparel for Brands',
    tagline: 'Unbranded high-density cotton blanks ready for screen printers, private labels & D2C brands',
    metaDescription:
      'Buy wholesale blank t-shirts in Tiruppur. 180-240 GSM 100% combed cotton, drop shoulder oversized cuts, tear-away tags, ready for screen printing & DTF.',
    heroImage: '/assets/products/oversized-maroon.png',
    gsmRange: '180 - 240 GSM',
    moq: '50 Pieces per colorway',
    samplingTime: 'Immediate Dispatch',
    productionTime: '3 - 5 Business Days',
    overview:
      'Designed specifically for apparel designers, fashion startups, streetwear brands, and commercial print shops. TeesZone manufactures high-density combed cotton plain t-shirts with tear-away satin labels, flat smooth print surfaces, and ultra-durable Lycra-ribbed necklines that hold shape after washing.',
    fabrics: [
      {
        name: '100% Super Combed Bio-Washed Cotton',
        description: 'Long-staple fibers combed to remove impurities, delivering an ultra-smooth canvas for printing.',
      },
      {
        name: 'Heavyweight Loopknit French Terry (240 GSM)',
        description: 'Dense architectural drape ideal for streetwear oversized tees and luxury silhouettes.',
      },
      {
        name: 'Organic Compact Yarn Cotton',
        description: 'Zero-torque yarn construction that completely eliminates side-seam twisting after wash cycles.',
      },
    ],
    brandingTechniques: [
      {
        name: 'Tear-Away Satin Neck Tags',
        description: 'Easily removable labels allowing clothing brands to sew or heat-press their own brand tags.',
      },
      {
        name: 'Ready for DTG & DTF Printing',
        description: 'Smooth lint-free singed fabric surface optimized for ultra-crisp ink absorption and adhesion.',
      },
      {
        name: 'Custom Woven Neck & Hem Labels',
        description: 'Add custom woven damask labels to necklines, sleeves, or lower hems during production.',
      },
    ],
    keyHighlights: [
      'Pre-shrunk compact fabric with less than 3% residual shrinkage',
      '1x1 Lycra-reinforced rib collars that never stretch out',
      'Shoulder-to-shoulder interior fabric taping for structural durability',
      'Available in 20+ ready colors with custom dye lots on demand',
    ],
    applications: [
      'D2C streetwear and lifestyle clothing brands',
      'Screen printing, DTF, and embroidery print shops',
      'Musicians, artists, and YouTube creator merchandise drops',
      'College cultural fest and startup hackathon supplies',
    ],
    specs: [
      { label: 'Available Fits', value: 'Regular Fit, Oversized Drop-Shoulder, Boxy Cut' },
      { label: 'GSM Options', value: '180 GSM (Light), 210 GSM (Mid), 240 GSM (Heavy)' },
      { label: 'Labeling', value: 'Tear-away paper/satin label or blank unbranded' },
      { label: 'Colorways', value: 'Black, White, Charcoal, Maroon, Navy, Sage + 15 More' },
    ],
    faqs: [
      {
        question: 'Are your blank t-shirts suitable for DTF and Direct-to-Garment (DTG) printing?',
        answer:
          'Yes, our cotton is singed and bio-washed, producing a clean, lint-free surface that delivers photo-realistic print definition without blotching.',
      },
      {
        question: 'Can you attach our custom brand labels and wash care tags?',
        answer:
          'Yes. We can sew your custom woven neck labels, hem tags, and attach custom printed hangtags prior to final polybagging.',
      },
      {
        question: 'What is the turnaround time for plain blank t-shirt orders?',
        answer:
          'Ready-stock colors ship within 24 to 48 hours from our Tiruppur warehouse; custom dyed colors take 5-7 days.',
      },
    ],
  },

  school: {
    slug: 'school',
    title: 'School Uniforms & Academic T-Shirts',
    badge: 'Institutional & Campus Uniforms',
    h1: 'School Uniforms, Campus Polos & Academic House T-Shirts',
    tagline: 'High-durability colorfast institutional t-shirts engineered for active student life and daily wash cycles',
    metaDescription:
      'Direct factory school uniform manufacturer in Tiruppur. Premium school polos, PE sports t-shirts, house tees, and university merchandise with embroidered school crests.',
    heroImage: '/assets/products/polo-maroon.png',
    gsmRange: '200 - 240 GSM',
    moq: '50 Pieces per colorway',
    samplingTime: '24 - 48 Hours',
    productionTime: '5 - 7 Business Days',
    overview:
      'Schools, colleges, and educational trusts require uniforms that look smart, feel comfortable throughout long study days, and survive weekly washing without losing color or shrinking. TeesZone produces certified child-safe, breathable school uniforms, house division polos, and physical education activewear.',
    fabrics: [
      {
        name: 'Long-Staple Cotton-Poly Interlock (65/35)',
        description: 'The golden standard for educational uniforms: highly breathable cotton paired with high-tensile polyester.',
      },
      {
        name: 'Heavy Bio-Washed Matty Pique (220 GSM)',
        description: 'Durable honeycomb knit designed for school polo uniforms with non-curling knit collars.',
      },
      {
        name: 'Skin-Friendly Hypoallergenic Cotton',
        description: 'Zero harsh chemicals or formaldehyde; certified safe for kindergarten and primary student wear.',
      },
    ],
    brandingTechniques: [
      {
        name: 'High-Definition School Crest Embroidery',
        description: 'Durable gold/silver thread embroidery of school mottos, emblems, and house shields.',
      },
      {
        name: 'House Color Block & Sublimation Accents',
        description: 'Custom red, blue, green, and yellow house division color blocks with student squad numbers.',
      },
      {
        name: 'Woven Institutional Badges',
        description: 'Heat-sealed or machine-stitched woven twill crests for blazers and uniform shirts.',
      },
    ],
    keyHighlights: [
      'Tested to withstand 100+ commercial wash cycles without fading',
      'Reinforced shoulder-to-shoulder seams and bar-tacked stress points',
      'Resistant to sweat stains and yellowing under hot climates',
      'Generous growth seam allowances for growing students',
    ],
    applications: [
      'K-12 international schools and CBSE / ICSE institutions',
      'Annual sports day & house division competitions',
      'University student union & college festival merchandise',
      'Faculty, physical education teachers, and administrative staff',
    ],
    specs: [
      { label: 'Student Sizing', value: 'Kids Size 20 to 36, Adult Size S to 4XL' },
      { label: 'Collar Types', value: 'Flat Knit Rib Collar with Contrast Stripe Tipping' },
      { label: 'Stitch Quality', value: 'Industrial 4-thread overlock with safety chain stitch' },
      { label: 'Dyes', value: '100% AZO-Free Reactive Dyes (Child-Safe Certified)' },
    ],
    faqs: [
      {
        question: 'Can you supply uniforms divided across 4 school houses (Red, Blue, Green, Yellow)?',
        answer:
          'Yes. We regularly supply multi-color school house uniforms with identical logo embroidery across all 4 colorways.',
      },
      {
        question: 'Do you offer size sample sets for student uniform fitting sessions?',
        answer:
          'Yes. We can provide full size fitting sets from kids age 4 through adult 3XL to ensure parents select the perfect fit.',
      },
      {
        question: 'Can you fulfill re-orders throughout the academic year for new admissions?',
        answer:
          'Yes, we archive all school embroidery files, fabric dyes, and patterns to deliver fast re-orders for new students within 5 business days.',
      },
    ],
  },

  'promotional-events': {
    slug: 'promotional-events',
    title: 'Promotional Merchandise & Event Apparel',
    badge: 'Marketing & Campaign Apparel',
    h1: 'Promotional T-Shirts, Event Hoodies & Brand Merchandise',
    tagline: 'High-impact custom printed t-shirts and hoodies for tech conferences, trade expos, marathons & brand launches',
    metaDescription:
      'Bulk promotional t-shirts and event merchandise manufacturer in Tiruppur. Express rush delivery, vibrant screen printing, and DTF graphics for corporate campaigns.',
    heroImage: '/assets/products/hoodie-white.png',
    gsmRange: '160 - 320 GSM',
    moq: '50 Pieces per order',
    samplingTime: '24 Hours',
    productionTime: '4 - 6 Business Days',
    overview:
      'When launching a product, organizing a 10,000-runner city marathon, or setting up an international expo booth, your apparel represents your brand credibility. TeesZone manufactures cost-effective yet high-perceived-value event t-shirts, participant bib tees, staff polos, and VIP hoodies with express production speed.',
    fabrics: [
      {
        name: '100% Single Jersey Promotional Cotton (160 - 180 GSM)',
        description: 'Lightweight, ultra-breathable, and cost-efficient for mass giveaways and event attendees.',
      },
      {
        name: 'Poly-Cotton Comfort Blend',
        description: 'Wrinkle-free and fast-drying fabric for active outdoor brand activations and volunteers.',
      },
      {
        name: 'Heavy Cotton Fleece (320 GSM for Hoodies)',
        description: 'Brushed interior warmth with structured exterior drape for VIP winter giveaways and executive kits.',
      },
    ],
    brandingTechniques: [
      {
        name: 'Large-Format Plastisol & Water-Based Screen Print',
        description: 'Vibrant, wash-resistant prints across chest, back, and sleeves with exact Pantone ink mixing.',
      },
      {
        name: 'Full-Color Direct-to-Film (DTF) Graphics',
        description: 'Unlimited gradients, fine photographic detail, and high-opacity color on dark fabrics.',
      },
      {
        name: 'Reflective & Metallic Foil Accents',
        description: 'High-visibility reflective silver transfers ideal for night marathons and premium brand swag.',
      },
    ],
    keyHighlights: [
      'Tiered bulk volume pricing for orders from 50 to 50,000+ units',
      'Express 48-hour rush production slots for tight event deadlines',
      'Each t-shirt steam-pressed, folded, and individually polybagged',
      'Batch labeling and size-sorted master cartons for effortless distribution',
    ],
    applications: [
      'Tech conferences, hackathons, and startup summits',
      'Marathons, cyclothons, and charity walks',
      'Product launches, retail trade fairs, and exhibition booth teams',
      'Corporate annual offsites and team celebration events',
    ],
    specs: [
      { label: 'Available Garments', value: 'Round Neck Tees, V-Neck, Collared Polos, Hoodies' },
      { label: 'Print Locations', value: 'Front Chest, Back, Sleeves, Inside Collar' },
      { label: 'Dispatch Timeline', value: 'Standard 5 days; Rush 48-hour dispatch available' },
      { label: 'Delivery Coverage', value: 'Insured Pan-India doorstep delivery via air or surface' },
    ],
    faqs: [
      {
        question: 'We have an event coming up in 5 days. Can you handle rush orders?',
        answer:
          'Yes! We maintain active rush production slots at our Tiruppur plant for urgent corporate campaigns and event dates.',
      },
      {
        question: 'Can you print sponsor logos across multiple locations (chest, sleeves, back)?',
        answer:
          'Yes, we can print multi-color sponsor lockups on the chest, back, and sleeves with precise millimeter alignment.',
      },
      {
        question: 'Are promotional t-shirts individually packaged for easy handover?',
        answer:
          'Yes, all items arrive individually steam-pressed and polybagged with visible size stickers on every bag for easy event distribution.',
      },
    ],
  },

  'sports-academics': {
    slug: 'sports-academics',
    title: 'Sports Apparel for Academics & Teams',
    badge: 'Athletic Wear & Team Jerseys',
    h1: 'Custom Academic Sports Jerseys & Athletic Team Uniforms',
    tagline: 'High-performance moisture-wicking jerseys and sports kits for school & college varsity teams',
    metaDescription:
      'Manufacturer of custom sports jerseys, athletic apparel, and sublimation kits in Tiruppur. Moisture-wicking dry-fit polyester for schools, colleges & varsity squads.',
    heroImage: '/assets/products/sportswear-jersey.png',
    gsmRange: '150 - 190 GSM',
    moq: '50 Pieces per colorway',
    samplingTime: '24 - 48 Hours',
    productionTime: '5 - 7 Business Days',
    overview:
      'College sports leagues, school athletic meets, and varsity teams need uniforms that handle intense physical exertion while looking championship-ready. TeesZone produces professional sports kits using lightweight micro-mesh fabrics that pull perspiration away from the skin for rapid evaporation.',
    fabrics: [
      {
        name: 'Nano-Poly Micro-Dot Mesh (160 GSM)',
        description: 'Engineered with thousands of microscopic airflow pores for continuous ventilation during play.',
      },
      {
        name: 'Interlock Spandex Dry-Fit (180 GSM)',
        description: '4-way multi-directional stretch for unrestricted flexibility, sliding, and sprint mobility.',
      },
      {
        name: 'Anti-Microbial Honeycomb Polyester',
        description: 'Silver-ion treated weave that neutralizes odor-causing bacteria even through intense games.',
      },
    ],
    brandingTechniques: [
      {
        name: 'All-Over Vibrant Dye Sublimation',
        description: 'Inks are molecularly bonded into fabric fibers for 100% breathable graphics that never peel or crack.',
      },
      {
        name: 'Vinyl Player Names & Squad Numbers',
        description: 'Individual player customization with athletic block typography on jerseys and team shorts.',
      },
      {
        name: 'Sublimated Team Badges & School Crests',
        description: 'Sharp institutional crests and sponsor logos seamlessly infused into the jersey design.',
      },
    ],
    keyHighlights: [
      'Flatlock anti-chafing seams prevent skin irritation during active movement',
      'Rapid dry moisture-wicking technology keeps athletes cool and dry',
      'Fade-proof colors resilient against sweat, mud, and turf abrasions',
      'Available as complete matched kits (Jersey + Shorts + Socks)',
    ],
    applications: [
      'School & university cricket, football, basketball & volleyball teams',
      'Annual academic sports day tournaments and track events',
      'College athletic departments and varsity squad training kits',
      'Inter-college tournaments and corporate sports leagues',
    ],
    specs: [
      { label: 'Available Garments', value: 'Jerseys, Shorts, Tracksuits, Warm-Up Bibs, Caps' },
      { label: 'Customization', value: 'Individual player name + squad number on each piece' },
      { label: 'Neck Styles', value: 'Round Neck, V-Neck, Raglan Sleeve, Collar Jersey' },
      { label: 'Fit Profile', value: 'Athletic Aerodynamic Fit / Relaxed Sports Fit' },
    ],
    faqs: [
      {
        question: 'Can each player on our team have their own name and number on the back?',
        answer:
          'Yes! We support custom player rosters with individual player names and squad numbers at no extra tooling cost.',
      },
      {
        question: 'Does the sublimation print fade after frequent muddy matches and heavy washing?',
        answer:
          'Never. Sublimation dyes fuse directly with the polyester polymers, ensuring the colors remain vibrant for the entire life of the garment.',
      },
      {
        question: 'Can you manufacture matching shorts and socks for a complete team kit?',
        answer:
          'Yes, we produce complete coordinated uniform kits including sublimated jerseys, breathable shorts, and athletic socks.',
      },
    ],
  },
};

