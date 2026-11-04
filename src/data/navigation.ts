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
  phone: '+91 99446 87485',
  phoneDisplay: '+91 99446 87485',
  phoneSecondary: '+91 75500 67704',
  whatsapp: '919944687485',
  whatsappDisplay: '+91 99446 87485',
  email: 'info@teeszone.in',
  legalEntity: 'TEESZONE CLOTHING PRIVATE LIMITED',
  gstin: '33AAMCT4535C1Z1',
  officeTitle: 'TEESZONE HEAD OFFICE',
  address: '#2155, Fortune City, Global Market – Texvalley, NH 544 Bengaluru–Cochin National Highway, Chithode, Erode – 638 102, Tamil Nadu, India.',
  shortAddress: 'Texvalley, Erode, Tamil Nadu, India',
  hubDescription: "South India's premium wholesale textile market hub.",
  hours: 'Monday – Saturday, 9:00 AM – 7:00 PM IST',
  copyright: '© 2026 TeesZone Clothing Private Limited. All rights reserved.',
  socials: {
    instagram: 'https://instagram.com/teeszone',
    facebook: 'https://facebook.com/teeszone',
    youtube: 'https://youtube.com/@teeszone',
    linkedin: 'https://linkedin.com/company/teeszone',
  },
};
