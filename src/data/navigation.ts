export interface NavItem {
  label: string;
  path: string;
}

export const navigationLinks: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const companyContact = {
  phone: '+91 93615 43200',
  phoneDisplay: '+91 93615 43200',
  whatsapp: '919361543200',
  whatsappDisplay: '+91 93615 43200',
  email: 'info@teeszone.in',
  address: 'Tiruppur, Tamil Nadu, India',
  hubDescription: "India's leading textile and garment manufacturing hub.",
  hours: 'Mon - Sat, 9:00 AM - 6:00 PM',
  copyright: '© 2026 TeesZone Clothing Private Limited. All rights reserved.',
  socials: {
    instagram: 'https://instagram.com/teeszone',
    facebook: 'https://facebook.com/teeszone',
    youtube: 'https://youtube.com/@teeszone',
    linkedin: 'https://linkedin.com/company/teeszone',
  },
};
