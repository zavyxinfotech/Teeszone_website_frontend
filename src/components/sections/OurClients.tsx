import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface OurClientsProps {
  className?: string;
}

// All 80 Unique Client Logos extracted directly from Google Spreadsheet "client logos" sheet
export const clientLogos = [
  {
    "id": "c_1",
    "name": "Lawrence school",
    "src": "/images/clients/lawrence-school.png"
  },
  {
    "id": "c_2",
    "name": "Ampo",
    "src": "/images/clients/ampo.png"
  },
  {
    "id": "c_3",
    "name": "Sunglow",
    "src": "/images/clients/sunglow.png"
  },
  {
    "id": "c_4",
    "name": "Hajee A.P. Bava Company Construction Private Limited",
    "src": "/images/clients/hajee-ap-bava-company-construction-private-limited.png"
  },
  {
    "id": "c_5",
    "name": "Global School",
    "src": "/images/clients/global-school.png"
  },
  {
    "id": "c_6",
    "name": "Mahe Megalo Strikers",
    "src": "/images/clients/mahe-megalo-strikers.png"
  },
  {
    "id": "c_7",
    "name": "Linkra Wires",
    "src": "/images/clients/linkra-wires.png"
  },
  {
    "id": "c_8",
    "name": "Relax Fun Zone",
    "src": "/images/clients/relax-fun-zone.png"
  },
  {
    "id": "c_9",
    "name": "Accenture",
    "src": "/images/clients/accenture.png"
  },
  {
    "id": "c_10",
    "name": "Fortune City",
    "src": "/images/clients/fortune-city.png"
  },
  {
    "id": "c_11",
    "name": "Vinayaka Vidhya Bhavan",
    "src": "/images/clients/vinayaka-vidhya-bhavan.png"
  },
  {
    "id": "c_12",
    "name": "Bharat G Mart",
    "src": "/images/clients/bharat-g-mart.png"
  },
  {
    "id": "c_13",
    "name": "SportLine",
    "src": "/images/clients/sportline.png"
  },
  {
    "id": "c_14",
    "name": "ARC",
    "src": "/images/clients/arc.png"
  },
  {
    "id": "c_15",
    "name": "TATA AIA life Insurance",
    "src": "/images/clients/tata-aia-life-insurance.png"
  },
  {
    "id": "c_16",
    "name": "Mohanam Restaurant",
    "src": "/images/clients/mohanam-restaurant.png"
  },
  {
    "id": "c_17",
    "name": "Club Twenty",
    "src": "/images/clients/club-twenty.png"
  },
  {
    "id": "c_18",
    "name": "ACI WorkWear",
    "src": "/images/clients/aci-workwear.png"
  },
  {
    "id": "c_19",
    "name": "Big Idea Advertising Agency",
    "src": "/images/clients/big-idea-advertising-agency.png"
  },
  {
    "id": "c_20",
    "name": "Unique lasers & Fabricators",
    "src": "/images/clients/unique-lasers-fabricators.png"
  },
  {
    "id": "c_21",
    "name": "Client 22",
    "src": "/images/clients/client-22.png"
  },
  {
    "id": "c_22",
    "name": "Uniform Unicorn",
    "src": "/images/clients/uniform-unicorn.png"
  },
  {
    "id": "c_23",
    "name": "Udayam Nursery & Primary School",
    "src": "/images/clients/udayam-nursery-primary-school.png"
  },
  {
    "id": "c_24",
    "name": "NK Homes",
    "src": "/images/clients/nk-homes.png"
  },
  {
    "id": "c_25",
    "name": "Hindu Global School",
    "src": "/images/clients/hindu-global-school.png"
  },
  {
    "id": "c_26",
    "name": "Jharkhand State Cricket Association",
    "src": "/images/clients/jharkhand-state-cricket-association.png"
  },
  {
    "id": "c_27",
    "name": "Style Mantra",
    "src": "/images/clients/style-mantra.png"
  },
  {
    "id": "c_28",
    "name": "Sri Siva Construction",
    "src": "/images/clients/sri-siva-construction.png"
  },
  {
    "id": "c_29",
    "name": "VMK Construction",
    "src": "/images/clients/vmk-construction.png"
  },
  {
    "id": "c_30",
    "name": "ModernMotors",
    "src": "/images/clients/modernmotors.png"
  },
  {
    "id": "c_31",
    "name": "India Metals",
    "src": "/images/clients/india-metals.png"
  },
  {
    "id": "c_32",
    "name": "Asian Hitech Industries",
    "src": "/images/clients/asian-hitech-industries.png"
  },
  {
    "id": "c_33",
    "name": "TN Sports University",
    "src": "/images/clients/tn-sports-university.png"
  },
  {
    "id": "c_34",
    "name": "Ascendra Technology",
    "src": "/images/clients/ascendra-technology.png"
  },
  {
    "id": "c_35",
    "name": "Address Developers",
    "src": "/images/clients/address-developers.png"
  },
  {
    "id": "c_36",
    "name": "Singles Network",
    "src": "/images/clients/singles-network.png"
  },
  {
    "id": "c_37",
    "name": "Lazdana Hotels",
    "src": "/images/clients/lazdana-hotels.png"
  },
  {
    "id": "c_38",
    "name": "Kurinji Engineering",
    "src": "/images/clients/kurinji-engineering.png"
  },
  {
    "id": "c_39",
    "name": "Mani Electrenies",
    "src": "/images/clients/mani-electrenies.png"
  },
  {
    "id": "c_40",
    "name": "Namma Doctor",
    "src": "/images/clients/namma-doctor.png"
  },
  {
    "id": "c_41",
    "name": "Surya Batteries",
    "src": "/images/clients/surya-batteries.png"
  },
  {
    "id": "c_42",
    "name": "EPR Venture India Private Limited",
    "src": "/images/clients/epr-venture-india-private-limited.png"
  },
  {
    "id": "c_43",
    "name": "PSP Homes",
    "src": "/images/clients/psp-homes.png"
  },
  {
    "id": "c_44",
    "name": "Garudans",
    "src": "/images/clients/garudans.png"
  },
  {
    "id": "c_45",
    "name": "PC Tech",
    "src": "/images/clients/pc-tech.png"
  },
  {
    "id": "c_46",
    "name": "Eethal Plumbing Work",
    "src": "/images/clients/eethal-plumbing-work.png"
  },
  {
    "id": "c_47",
    "name": "V2 saloon",
    "src": "/images/clients/v2-saloon.png"
  },
  {
    "id": "c_48",
    "name": "SN Iyangar Bakery",
    "src": "/images/clients/sn-iyangar-bakery.png"
  },
  {
    "id": "c_49",
    "name": "RR Electicals & electronics",
    "src": "/images/clients/rr-electicals-electronics.png"
  },
  {
    "id": "c_50",
    "name": "Pranavam agencies",
    "src": "/images/clients/pranavam-agencies.png"
  },
  {
    "id": "c_51",
    "name": "Kovara",
    "src": "/images/clients/kovara.png"
  },
  {
    "id": "c_52",
    "name": "Helping Hearts",
    "src": "/images/clients/helping-hearts.png"
  },
  {
    "id": "c_53",
    "name": "GI Interiors",
    "src": "/images/clients/gi-interiors.png"
  },
  {
    "id": "c_54",
    "name": "Beyomo",
    "src": "/images/clients/beyomo.png"
  },
  {
    "id": "c_55",
    "name": "Avaneetha",
    "src": "/images/clients/avaneetha.png"
  },
  {
    "id": "c_56",
    "name": "Erode light house",
    "src": "/images/clients/erode-light-house.png"
  },
  {
    "id": "c_57",
    "name": "Hani engineering",
    "src": "/images/clients/hani-engineering.png"
  },
  {
    "id": "c_58",
    "name": "GR Hi tech",
    "src": "/images/clients/gr-hi-tech.png"
  },
  {
    "id": "c_59",
    "name": "Dipp'd Idly",
    "src": "/images/clients/dippd-idly.png"
  },
  {
    "id": "c_60",
    "name": "V2 Vogue",
    "src": "/images/clients/v2-vogue.png"
  },
  {
    "id": "c_61",
    "name": "Thapasya",
    "src": "/images/clients/thapasya.png"
  },
  {
    "id": "c_62",
    "name": "Tata Electronics",
    "src": "/images/clients/tata-electronics.png"
  },
  {
    "id": "c_63",
    "name": "Splash events",
    "src": "/images/clients/splash-events.png"
  },
  {
    "id": "c_64",
    "name": "SK projects",
    "src": "/images/clients/sk-projects.png"
  },
  {
    "id": "c_65",
    "name": "SBS Insurance",
    "src": "/images/clients/sbs-insurance.png"
  },
  {
    "id": "c_66",
    "name": "RR associates",
    "src": "/images/clients/rr-associates.png"
  },
  {
    "id": "c_67",
    "name": "RJN facility service",
    "src": "/images/clients/rjn-facility-service.png"
  },
  {
    "id": "c_68",
    "name": "Raj electronics",
    "src": "/images/clients/raj-electronics.png"
  },
  {
    "id": "c_69",
    "name": "JMJ builders",
    "src": "/images/clients/jmj-builders.png"
  },
  {
    "id": "c_70",
    "name": "Hi waffles",
    "src": "/images/clients/hi-waffles.png"
  },
  {
    "id": "c_71",
    "name": "Galaxy health insurance",
    "src": "/images/clients/galaxy-health-insurance.png"
  },
  {
    "id": "c_72",
    "name": "Besten pumps",
    "src": "/images/clients/besten-pumps.png"
  },
  {
    "id": "c_73",
    "name": "Aruns cafe",
    "src": "/images/clients/aruns-cafe.png"
  },
  {
    "id": "c_74",
    "name": "Acendra technologies",
    "src": "/images/clients/acendra-technologies.png"
  },
  {
    "id": "c_75",
    "name": "AIS Advanced",
    "src": "/images/clients/ais-advanced.png"
  },
  {
    "id": "c_76",
    "name": "industrial solutions",
    "src": "/images/clients/industrial-solutions.png"
  },
  {
    "id": "c_77",
    "name": "Chem tex aqua",
    "src": "/images/clients/chem-tex-aqua.png"
  },
  {
    "id": "c_78",
    "name": "Chinna mobiles",
    "src": "/images/clients/chinna-mobiles.png"
  },
  {
    "id": "c_79",
    "name": "Axle addition",
    "src": "/images/clients/axle-addition.png"
  },
  {
    "id": "c_80",
    "name": "Agam homes",
    "src": "/images/clients/agam-homes.png"
  }
];

export const OurClients: React.FC<OurClientsProps> = ({ className }) => {
  const containerRef = useRef<HTMLElement>(null);

  // Scroll Tracking for Desktop 3D Tilt and Mobile Scroll Reactivity
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 40, stiffness: 200 });

  // Mobile scroll nudge transforms
  const mobileRow1Scroll = useTransform(smoothVelocity, [-1, 1], [-30, 30]);
  const mobileRow2Scroll = useTransform(smoothVelocity, [-1, 1], [30, -30]);
  const mobileSectionY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  // Desktop 3D Transform
  const rotateX = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [4, 0, 0, -3]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.97, 1, 1, 0.98]);

  // Geometry for Desktop Honeycomb Grid with Extra Large Center Clearance
  const R = 80; // Hexagon radius
  const H = Math.round(R * Math.sqrt(3)); // ~139
  const gap = 12;
  const dx = Math.round(1.5 * R + gap); // 132
  const dy = Math.round(H + gap); // 151
  const dyHalf = Math.round(dy / 2); // 76

  // Center coordinate with massive clearance so center 500+ logo NEVER overrides or collides
  const cx = 850;
  const cy = 350;
  const centerExtraX = 85; // Extra horizontal spread away from center (leaves 270px+ open center)
  const centerExtraY = 55; // Extra vertical clearance away from center

  // Helper to build regular flat-topped hexagon points string
  const getHexPoints = (x: number, y: number, r: number = R) => {
    const h = r * Math.sqrt(3);
    const p1 = `${(x - r / 2).toFixed(1)},${(y - h / 2).toFixed(1)}`;
    const p2 = `${(x + r / 2).toFixed(1)},${(y - h / 2).toFixed(1)}`;
    const p3 = `${(x + r).toFixed(1)},${y.toFixed(1)}`;
    const p4 = `${(x + r / 2).toFixed(1)},${(y + h / 2).toFixed(1)}`;
    const p5 = `${(x - r / 2).toFixed(1)},${(y + h / 2).toFixed(1)}`;
    const p6 = `${(x - r).toFixed(1)},${y.toFixed(1)}`;
    return `${p1} ${p2} ${p3} ${p4} ${p5} ${p6}`;
  };

  // 28 Desktop Hexagon Coordinate Slots with wide center clearance
  const hexSlots = [
    // Top & Bottom Center (Pushed well above and below centerpiece)
    { id: 'pos_0', x: cx, y: cy - dy - centerExtraY },
    { id: 'pos_1', x: cx, y: cy + dy + centerExtraY },

    // Col -1 (Left inner: pushed left by centerExtraX)
    { id: 'pos_2', x: cx - dx - centerExtraX, y: cy - dy + dyHalf - 8 },
    { id: 'pos_3', x: cx - dx - centerExtraX, y: cy + dyHalf + 8 },
    { id: 'pos_4', x: cx - dx - centerExtraX, y: cy + dy + dyHalf },

    // Col +1 (Right inner: pushed right by centerExtraX)
    { id: 'pos_5', x: cx + dx + centerExtraX, y: cy - dy + dyHalf - 8 },
    { id: 'pos_6', x: cx + dx + centerExtraX, y: cy + dyHalf + 8 },
    { id: 'pos_7', x: cx + dx + centerExtraX, y: cy + dy + dyHalf },

    // Col -2 (Left mid)
    { id: 'pos_8', x: cx - 2 * dx - centerExtraX, y: cy - dy },
    { id: 'pos_9', x: cx - 2 * dx - centerExtraX, y: cy },
    { id: 'pos_10', x: cx - 2 * dx - centerExtraX, y: cy + dy },

    // Col +2 (Right mid)
    { id: 'pos_11', x: cx + 2 * dx + centerExtraX, y: cy - dy },
    { id: 'pos_12', x: cx + 2 * dx + centerExtraX, y: cy },
    { id: 'pos_13', x: cx + 2 * dx + centerExtraX, y: cy + dy },

    // Col -3 (Left outer)
    { id: 'pos_14', x: cx - 3 * dx - centerExtraX, y: cy - dy + dyHalf },
    { id: 'pos_15', x: cx - 3 * dx - centerExtraX, y: cy + dyHalf },
    { id: 'pos_16', x: cx - 3 * dx - centerExtraX, y: cy + dy + dyHalf },

    // Col +3 (Right outer)
    { id: 'pos_17', x: cx + 3 * dx + centerExtraX, y: cy - dy + dyHalf },
    { id: 'pos_18', x: cx + 3 * dx + centerExtraX, y: cy + dyHalf },
    { id: 'pos_19', x: cx + 3 * dx + centerExtraX, y: cy + dy + dyHalf },

    // Col -4 (Left wing)
    { id: 'pos_20', x: cx - 4 * dx - centerExtraX, y: cy - dy },
    { id: 'pos_21', x: cx - 4 * dx - centerExtraX, y: cy },
    { id: 'pos_22', x: cx - 4 * dx - centerExtraX, y: cy + dy },

    // Col +4 (Right wing)
    { id: 'pos_23', x: cx + 4 * dx + centerExtraX, y: cy - dy },
    { id: 'pos_24', x: cx + 4 * dx + centerExtraX, y: cy },
    { id: 'pos_25', x: cx + 4 * dx + centerExtraX, y: cy + dy },

    // Col -5 (Far Left)
    { id: 'pos_26', x: cx - 5 * dx - centerExtraX, y: cy + dyHalf },

    // Col +5 (Far Right)
    { id: 'pos_27', x: cx + 5 * dx + centerExtraX, y: cy + dyHalf },
  ];

  // Auto-cycle through all 80 logos on desktop so NO logo is skipped!
  const [logoOffset, setLogoOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLogoOffset((prev) => (prev + 14) % clientLogos.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Mobile Marquee: 2 rows with all 80 unique logos (40 logos in each row)
  const mobileRow1 = clientLogos.slice(0, 40);
  const mobileRow2 = clientLogos.slice(40, 80);

  return (
    <section
      ref={containerRef}
      className={cn(
        'relative w-full overflow-hidden bg-gradient-to-b from-[#FAF5F2] via-[#FAF1EB] to-[#FAF5F2] pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16',
        className
      )}
      style={{ perspective: 1200 }}
    >
      {/* =====================================================================
          1. MINIMAL BURGUNDY GLASSMORPHISM BACKGROUND ANIMATIONS
          Minimal burgundy themed glowing ambient orbs & floating glass hexagons
          ===================================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft Burgundy Ambient Halo (Upper Right) */}
        <motion.div
          animate={{
            opacity: [0.25, 0.45, 0.25],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-20 right-1/4 w-[550px] h-[550px] bg-gradient-to-br from-[#80011F]/15 via-rose-200/10 to-transparent rounded-full blur-[90px]"
        />

        {/* Warm Rose Ambient Halo (Lower Left) */}
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1.05, 0.95, 1.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -bottom-16 left-1/5 w-[500px] h-[500px] bg-gradient-to-tr from-[#80011F]/10 via-[#FAF1EB] to-transparent rounded-full blur-[80px]"
        />

        {/* Floating Minimal Glassmorphism Hexagons in Minimal Burgundy Theme */}
        <svg
          viewBox="0 0 1700 700"
          className="w-full h-full absolute inset-0 opacity-40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Glass Hexagon 1: Top Left */}
          <motion.polygon
            points={getHexPoints(180, 140, 48)}
            fill="#80011F"
            fillOpacity="0.04"
            stroke="#80011F"
            strokeOpacity="0.14"
            strokeWidth="1"
            animate={{ y: [-6, 6, -6], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Glass Hexagon 2: Top Right */}
          <motion.polygon
            points={getHexPoints(1520, 160, 54)}
            fill="#80011F"
            fillOpacity="0.04"
            stroke="#80011F"
            strokeOpacity="0.15"
            strokeWidth="1"
            animate={{ y: [6, -6, 6], rotate: [0, -4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />

          {/* Glass Hexagon 3: Bottom Left */}
          <motion.polygon
            points={getHexPoints(240, 580, 42)}
            fill="#80011F"
            fillOpacity="0.03"
            stroke="#80011F"
            strokeOpacity="0.12"
            strokeWidth="1"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />

          {/* Glass Hexagon 4: Bottom Right */}
          <motion.polygon
            points={getHexPoints(1460, 560, 50)}
            fill="#80011F"
            fillOpacity="0.04"
            stroke="#80011F"
            strokeOpacity="0.14"
            strokeWidth="1"
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          />
        </svg>
      </div>

      {/* Top-Right Burgundy Dot Matrix Grid */}
      <div className="absolute top-0 right-0 w-60 sm:w-80 md:w-[420px] h-36 sm:h-48 pointer-events-none overflow-hidden opacity-35 select-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 420 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="clients-burgundy-dots"
              x="0"
              y="0"
              width="18"
              height="18"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="9" cy="9" r="1.5" fill="#80011F" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#clients-burgundy-dots)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 space-y-1">
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-[#80011F] font-heading font-black text-xs sm:text-sm tracking-[0.24em] uppercase"
          >
            — 500+ HAPPY CLIENTS —
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-heading font-black text-charcoal-900 leading-[1.16] tracking-tight"
          >
            Custom Apparel Partner for{' '}
            <span className="text-[#80011F]">Leading Brands</span>
          </motion.h2>
        </div>

        {/* =====================================================================
            2. DESKTOP VIEW: BORDERLESS HONEYCOMB WITH EXPANDED CENTER CLEARANCE
            - No borders on hexagon cards (stroke="none")
            - All logos same uniform shape (112x60 aspect ratio box, high contrast)
            - Expanded center spacing: logo never overrides other cards
            - Clean white background on cards with zero shadow/border on logos
            - Auto-cycles across all 80 logos so no client logo is skipped
            ===================================================================== */}
        <div className="hidden md:block">
          <motion.div
            style={{ rotateX, scale }}
            transition={{ ease: 'easeOut', duration: 0.4 }}
            className="relative w-full"
          >
            <svg
              viewBox="0 0 1700 700"
              className="w-full h-auto select-none"
              style={{ overflow: 'visible' }}
            >
              <defs>
                {/* Crisp White Hexagon Fill */}
                <linearGradient id="clientHexGlassFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.94" />
                </linearGradient>

                {/* Subtle Ambient Hexagon Fill */}
                <linearGradient id="clientAmbientHexFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#FAF1EB" stopOpacity="0.25" />
                </linearGradient>
              </defs>

              {/* Ambient Background Ghost Hexagons (Minimal Burgundy Glassmorphism) */}
              <g opacity="0.45">
                <polygon points={getHexPoints(cx - 5 * dx - centerExtraX, cy - dy + dyHalf)} fill="url(#clientAmbientHexFill)" stroke="none" />
                <polygon points={getHexPoints(cx + 5 * dx + centerExtraX, cy - dy + dyHalf)} fill="url(#clientAmbientHexFill)" stroke="none" />
                <polygon points={getHexPoints(cx, cy - 2 * dy - centerExtraY)} fill="url(#clientAmbientHexFill)" stroke="none" />
                <polygon points={getHexPoints(cx - 2 * dx - centerExtraX, cy - 2 * dy)} fill="url(#clientAmbientHexFill)" stroke="none" />
                <polygon points={getHexPoints(cx + 2 * dx + centerExtraX, cy - 2 * dy)} fill="url(#clientAmbientHexFill)" stroke="none" />
                <polygon points={getHexPoints(cx - dx - centerExtraX, cy + 2 * dy + dyHalf)} fill="url(#clientAmbientHexFill)" stroke="none" />
                <polygon points={getHexPoints(cx + dx + centerExtraX, cy + 2 * dy + dyHalf)} fill="url(#clientAmbientHexFill)" stroke="none" />
              </g>

              {/* 28 Borderless Hexagons displaying all logos without skipping */}
              {hexSlots.map((slot, idx) => {
                const client = clientLogos[(logoOffset + idx) % clientLogos.length];

                return (
                  <g
                    key={slot.id}
                    style={{ transformOrigin: `${slot.x}px ${slot.y}px` }}
                    className="cursor-pointer transition-transform duration-300 hover:scale-[1.06] group"
                  >
                    {/* Hexagon Tile: Border removed completely (stroke='none') */}
                    <polygon
                      points={getHexPoints(slot.x, slot.y)}
                      fill="url(#clientHexGlassFill)"
                      stroke="none"
                      className="transition-opacity duration-300 group-hover:opacity-100"
                    />

                    {/* Logo Image: High clarity, no mixBlendMode issues, uniform size and shape */}
                    <image
                      href={client.src}
                      xlinkHref={client.src}
                      x={slot.x - 56}
                      y={slot.y - 30}
                      width="112"
                      height="60"
                      preserveAspectRatio="xMidYMid meet"
                      className="transition-opacity duration-300 opacity-95 group-hover:opacity-100"
                    />
                  </g>
                );
              })}

              {/* ========================================================= */}
              {/* CENTERPIECE: 500+ HAPPY CLIENTS + TEESZONE EMBLEM         */}
              {/* Completely open space (270px+ wide) with ZERO overlap     */}
              {/* ========================================================= */}
              <g>
                {/* 500+ Text in Signature Deep Burgundy */}
                <text
                  x={cx}
                  y={cy - 20}
                  textAnchor="middle"
                  fill="#80011F"
                  fontFamily="Georgia, Garamond, serif"
                  fontStyle="italic"
                  fontWeight="800"
                  fontSize="48"
                  letterSpacing="-0.02em"
                >
                  500+
                </text>

                {/* Thin Center Divider */}
                <line
                  x1={cx - 20}
                  y1={cy - 8}
                  x2={cx + 20}
                  y2={cy - 8}
                  stroke="#80011F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* HAPPY CLIENTS Subheading */}
                <text
                  x={cx}
                  y={cy + 14}
                  textAnchor="middle"
                  fill="#80011F"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontWeight="800"
                  fontSize="12"
                  letterSpacing="0.32em"
                >
                  HAPPY CLIENTS
                </text>

                {/* Official TeesZone Logo Emblem (Positioned with generous clearance) */}
                <image
                  href="/assets/logo/teeszone-emblem.png"
                  xlinkHref="/assets/logo/teeszone-emblem.png"
                  x={cx - 36}
                  y={cy + 26}
                  width="72"
                  height="66"
                  preserveAspectRatio="xMidYMid meet"
                />
              </g>
            </svg>
          </motion.div>
        </div>

        {/* =====================================================================
            3. MOBILE VIEW: 2-ROW OPPOSING AUTOSCROLL WITH MINIMAL BURGUNDY ROUND SHADE
            - Row 1: Left to Right motion
            - Row 2: Right to Left motion
            - No border colors, no shadows, no background rectangles on logos
            - Shaded minimal burgundy circular backdrop behind each logo
            - All logos uniform shape and size
            ===================================================================== */}
        <motion.div
          style={{ y: mobileSectionY }}
          className="md:hidden flex flex-col items-center w-full space-y-5 pt-2 pb-6"
        >
          {/* Mobile Centerpiece: 500+ Happy Clients */}
          <div className="flex flex-col items-center justify-center py-2 text-center w-full select-none">
            <span className="font-['Georgia',_serif] italic font-black text-4xl text-[#80011F] leading-none mb-1">
              500+
            </span>
            <div className="w-8 h-[2px] bg-[#80011F] rounded-full my-1" />
            <span className="font-heading font-black text-xs uppercase tracking-[0.28em] text-[#80011F] mb-2">
              Happy Clients
            </span>
            <img
              src="/assets/logo/teeszone-emblem.png"
              alt="TeesZone Logo"
              className="w-14 h-12 object-contain"
            />
          </div>

          {/* 2 Opposing Auto-Scrolling Marquee Rows */}
          <div className="w-full flex flex-col space-y-4 overflow-hidden">
            
            {/* Row 1: Left to Right Motion */}
            <div className="w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <motion.div
                style={{ x: mobileRow1Scroll }}
                className="flex items-center shrink-0"
              >
                <motion.div
                  className="flex items-center gap-4 shrink-0"
                  animate={{ x: ['-50%', '0%'] }}
                  transition={{
                    repeat: Infinity,
                    ease: 'linear',
                    duration: 35,
                  }}
                >
                  {[...mobileRow1, ...mobileRow1].map((client, index) => (
                    <div
                      key={`row1-${client.id}-${index}`}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#80011F]/[0.06] flex items-center justify-center p-3 shrink-0 select-none shadow-none border-none"
                    >
                      <img
                        src={client.src}
                        alt={client.name}
                        className="w-14 h-9 object-contain select-none"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Row 2: Right to Left Motion */}
            <div className="w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <motion.div
                style={{ x: mobileRow2Scroll }}
                className="flex items-center shrink-0"
              >
                <motion.div
                  className="flex items-center gap-4 shrink-0"
                  animate={{ x: ['0%', '-50%'] }}
                  transition={{
                    repeat: Infinity,
                    ease: 'linear',
                    duration: 35,
                  }}
                >
                  {[...mobileRow2, ...mobileRow2].map((client, index) => (
                    <div
                      key={`row2-${client.id}-${index}`}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#80011F]/[0.06] flex items-center justify-center p-3 shrink-0 select-none shadow-none border-none"
                    >
                      <img
                        src={client.src}
                        alt={client.name}
                        className="w-14 h-9 object-contain select-none"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;
