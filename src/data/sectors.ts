export interface SectorItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  recommendedApparel: string;
  iconName: string;
  image: string;
}

export const sectorsData: SectorItem[] = [
  {
    id: 'corporate',
    title: 'Corporate Uniforms',
    subtitle: 'Offices & Tech Teams',
    description: 'Crisp corporate polos and formal t-shirts branded with fine embroidery for daily workwear and conferences.',
    recommendedApparel: 'Pique Cotton Polos, Mercerized Tees',
    iconName: 'Briefcase',
    image: '/assets/images/sectors/sector-corporate.png',
  },
  {
    id: 'education',
    title: 'Schools & Colleges',
    subtitle: 'Campuses & Annual Fests',
    description: 'Durable, skin-friendly uniform t-shirts, sports day attire, and student council event merchandise.',
    recommendedApparel: '180 GSM Round Necks, House T-Shirts',
    iconName: 'GraduationCap',
    image: '/assets/images/sectors/sector-education.png',
  },
  {
    id: 'sports',
    title: 'Sports Teams & Clubs',
    subtitle: 'Athletics & Tournaments',
    description: 'Breathable Dry-Fit jerseys with customized player names, numbers, and sponsor logos.',
    recommendedApparel: 'Sublimated Micro-Poly Jerseys',
    iconName: 'Trophy',
    image: '/assets/images/sectors/sector-sports.png',
  },
  {
    id: 'healthcare',
    title: 'Hospitals & Clinics',
    subtitle: 'Medical Staff & Diagnostics',
    description: 'Hygienic, anti-microbial scrubs and comfortable nursing staff tees with reinforced stitching.',
    recommendedApparel: 'Cotton-Rich Anti-Bacterial Scrubs',
    iconName: 'HeartPulse',
    image: '/assets/images/sectors/sector-healthcare.png',
  },
  {
    id: 'hospitality',
    title: 'Hotels & Restaurants',
    subtitle: 'Culinary & Service Crew',
    description: 'Stain-resistant kitchen crew t-shirts, chef polos, and front-desk branded service apparel.',
    recommendedApparel: 'Stain-Resistant Polos & Apron Sets',
    iconName: 'UtensilsCrossed',
    image: '/assets/images/sectors/sector-corporate.png',
  },
  {
    id: 'industrial',
    title: 'Industrial & Factory',
    subtitle: 'Workforce & Heavy Units',
    description: 'High-visibility fluorescent reflective vests, sturdy industrial round necks, and sweat-resistant workwear.',
    recommendedApparel: 'Heavyweight Cotton & High-Vis Vests',
    iconName: 'HardHat',
    image: '/assets/images/sectors/sector-industrial.png',
  },
  {
    id: 'events',
    title: 'Events & Promotions',
    subtitle: 'Expos & Product Launches',
    description: 'Cost-effective, vivid multi-color t-shirts for brand ambassadors, product launches, and mass expos.',
    recommendedApparel: '160-180 GSM Bio-Wash Printed Tees',
    iconName: 'Megaphone',
    image: '/assets/images/sectors/sector-education.png',
  },
  {
    id: 'retail',
    title: 'Retail & Showrooms',
    subtitle: 'Store Staff & Brand Outlets',
    description: 'Sharp, color-matched team t-shirts that maintain retail elegance across nationwide showroom networks.',
    recommendedApparel: 'Premium Matty Polos with Collar Tipping',
    iconName: 'Store',
    image: '/assets/images/sectors/sector-corporate.png',
  },
  {
    id: 'ngo',
    title: 'NGOs & Social Causes',
    subtitle: 'Rallies & Awareness Drives',
    description: 'Bulk budget-friendly t-shirts carrying impactful slogans and awareness messages for volunteer drives.',
    recommendedApparel: 'Cotton Promotional Screen-Printed Tees',
    iconName: 'HandHeart',
    image: '/assets/images/sectors/sector-education.png',
  },
  {
    id: 'clubs',
    title: 'Clubs & Communities',
    subtitle: 'Riders, Alumni & Fan Clubs',
    description: 'Custom community hoodies, riders club jerseys, and alumni reunion tees built for camaraderie.',
    recommendedApparel: 'Oversized Streetwear & Heavy Cotton Tees',
    iconName: 'Users',
    image: '/assets/images/sectors/sector-sports.png',
  },
];
