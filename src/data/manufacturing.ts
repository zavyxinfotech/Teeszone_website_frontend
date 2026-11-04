export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface StrengthItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    number: '01',
    title: 'Share Requirements',
    subtitle: 'quantity, style & logo',
    description: 'Provide your design, preferred fabric grade (GSM), required colors, and volume requirements through our instant form or WhatsApp.',
    iconName: 'FileText',
  },
  {
    step: '02',
    number: '02',
    title: 'Receive Free Quote',
    subtitle: 'pricing in 24 hrs',
    description: 'Our estimating team sends a clear, transparent cost breakdown including fabric, printing/embroidery, GST, and shipping estimates.',
    iconName: 'Calculator',
  },
  {
    step: '03',
    number: '03',
    title: 'Approve Mockups',
    subtitle: 'see before you commit',
    description: 'We generate digital mockups and produce physical pre-production swatches for your team to inspect cut, color, and finish.',
    iconName: 'Shirt',
  },
  {
    step: '04',
    number: '04',
    title: 'Confirm & Pay',
    subtitle: 'advance locks your slot',
    description: 'Upon mockup approval and production slot booking, our Tiruppur plant initiates yarn knitting, precision cutting, and branding.',
    iconName: 'CalendarCheck',
  },
  {
    step: '05',
    number: '05',
    title: 'Delivered to Door',
    subtitle: 'Pan India delivery',
    description: 'Rigorous end-line quality inspection, eco-friendly carton packaging, and insured courier dispatch with live tracking straight to your premises.',
    iconName: 'Truck',
  },
];

export const companyStrengths: StrengthItem[] = [
  {
    id: 'direct-manufacturer',
    title: 'Direct Manufacturer',
    subtitle: "Based in Tiruppur, India's textile hub",
    description: 'Zero middleman markups. Direct factory pricing straight from the heart of Tamil Nadu knitwear hub.',
    iconName: 'Factory',
  },
  {
    id: 'premium-fabrics',
    title: 'Premium Fabrics',
    subtitle: 'Cotton, EcoBlend & Nano Poly options',
    description: 'From 180 GSM combed cotton to 280 GSM French Terry and breathable Dry-Fit poly knit.',
    iconName: 'Layers',
  },
  {
    id: 'complete-customization',
    title: 'Complete Customization',
    subtitle: 'Printing, embroidery & branding',
    description: 'Screen print, puff print, computerized Japanese embroidery, silicone badges, and custom neck labels.',
    iconName: 'Sparkles',
  },
  {
    id: 'bulk-production',
    title: 'Bulk Production',
    subtitle: 'For small & large orders',
    description: 'Scalable capacity from 50 units for boutique startups up to 50,000+ units for enterprise conglomerates.',
    iconName: 'Boxes',
  },
  {
    id: 'on-time-delivery',
    title: 'On-Time Delivery',
    subtitle: 'Pan India delivery with reliable support',
    description: 'Express shipping partnerships ensuring timely arrival for events, annual meets, and launch schedules.',
    iconName: 'Clock',
  },
];

export const companyStats = [
  { value: '1000+', label: 'Happy Clients', desc: 'Across India' },
  { value: '100%', label: 'In-House Quality', desc: 'Direct Tiruppur unit' },
  { value: '500K+', label: 'T-Shirts Crafted', desc: 'Annual capacity' },
  { value: 'Pan India', label: 'Express Delivery', desc: 'To all pin codes' },
];
