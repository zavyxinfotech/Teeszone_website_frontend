import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

interface OurClientsProps {
  className?: string;
}

// 32 Real Client Logos downloaded from Google Drive
const allClientLogos = [
  { id: 'tata', name: 'Tata Electronics', src: '/assets/images/clients/real/logo_17_tata_electronics_logo.png' },
  { id: 'galaxy', name: 'Galaxy Health Insurance', src: '/assets/images/clients/real/logo_7_galaxy_health_insurance.png' },
  { id: 'acendra', name: 'Acendra Technologies', src: '/assets/images/clients/real/logo_5_acendra_technologies.png' },
  { id: 'agam', name: 'Agam Homes', src: '/assets/images/clients/real/logo_1_agam_full_logo_jpg__1__jpeg.png' },
  { id: 'ais', name: 'AIS Advanced Solutions', src: '/assets/images/clients/real/logo_2_ais_advances_solutions.png' },
  { id: 'beston', name: 'Beston Pumps', src: '/assets/images/clients/real/logo_6_beston_pumps_logo.png' },
  { id: 'aruns', name: "Arun's Kafe", src: '/assets/images/clients/real/logo_3_aruns_cafe_logo_1.png' },
  { id: 'waffles', name: 'Hi Waffles', src: '/assets/images/clients/real/logo_8_hi_waffles_logo.png' },
  { id: 'jmj', name: 'JMJ Builders', src: '/assets/images/clients/real/logo_9_jmj_builders_logo.png' },
  { id: 'raj', name: 'Raj Electricals', src: '/assets/images/clients/real/logo_10_raj_electricals.png' },
  { id: 'rjn', name: 'RJN Facility Services', src: '/assets/images/clients/real/logo_11_rjn_facility_service_logo.png' },
  { id: 'rr', name: 'RR Associates', src: '/assets/images/clients/real/logo_12_rr_associates_logo.png' },
  { id: 'sbs', name: 'SBS Corp', src: '/assets/images/clients/real/logo_13_sbs_logo.png' },
  { id: 'sbs2', name: 'SBS Group', src: '/assets/images/clients/real/logo_14_sbs_logo_2.png' },
  { id: 'sk', name: 'SK Projects', src: '/assets/images/clients/real/logo_15_sk_projects_logo.png' },
  { id: 'splash', name: 'Splash Events', src: '/assets/images/clients/real/logo_16_splash_events.png' },
  { id: 'vogue', name: 'V2 Vogue', src: '/assets/images/clients/real/logo_19_v2_vogue_logo_2.png' },
  { id: 'c20', name: 'Partner 20', src: '/assets/images/clients/real/logo_20_whatsapp_image_2026-09-03_at_1.png' },
  { id: 'c21', name: 'Partner 21', src: '/assets/images/clients/real/logo_21_whatsapp_image_2026-09-03_at_1.png' },
  { id: 'c22', name: 'Partner 22', src: '/assets/images/clients/real/logo_22_whatsapp_image_2026-09-03_at_1.png' },
  { id: 'c23', name: 'Partner 23', src: '/assets/images/clients/real/logo_23_whatsapp_image_2026-09-03_at_1.png' },
  { id: 'c24', name: 'Partner 24', src: '/assets/images/clients/real/logo_24_whatsapp_image_2026-09-03_at_1.png' },
  { id: 'c25', name: 'Partner 25', src: '/assets/images/clients/real/logo_25_whatsapp_image_2026-09-03_at_1.png' },
  { id: 'c26', name: 'Partner 26', src: '/assets/images/clients/real/logo_26_whatsapp_image_2026-09-03_at_1.png' },
  { id: 'c27', name: 'Partner 27', src: '/assets/images/clients/real/logo_27_whatsapp_image_2026-09-03_at_1.png' },
  { id: 'c28', name: 'Partner 28', src: '/assets/images/clients/real/logo_28_whatsapp_image_2026-09-03_at_1.png' },
  { id: 'c29', name: 'Partner 29', src: '/assets/images/clients/real/logo_29_whatsapp_image_2026-09-03_at_1.png' },
  { id: 'c30', name: 'Partner 30', src: '/assets/images/clients/real/logo_30_whatsapp_image_2026-09-03_at_1.png' },
  { id: 'c31', name: 'Partner 31', src: '/assets/images/clients/real/logo_31_whatsapp_image_2026-09-03_at_1.png' },
  { id: 'c32', name: 'Partner 32', src: '/assets/images/clients/real/logo_32_whatsapp_image_2026-09-03_at_1.png' },
  { id: 'c33', name: 'Partner 33', src: '/assets/images/clients/real/logo_33_whatsapp_image_2026-09-03_at_1.png' },
  { id: 'c34', name: 'Partner 34', src: '/assets/images/clients/real/logo_34_whatsapp_image_2026-09-03_at_1.png' },
];

export const OurClients: React.FC<OurClientsProps> = ({ className }) => {
  const containerRef = useRef<HTMLElement>(null);

  // Cinematic 3D Parallax & Scroll Reactivity for Desktop
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [5, 0, 0, -4]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.96, 1, 1, 0.98]);

  // Large Prominent Hexagon Geometry for Desktop View (Visible, bold, clear)
  const R = 86; // Large radius so logos have maximum clarity & size
  const H = Math.round(R * Math.sqrt(3)); // 149
  const gap = 10;
  const dx = Math.round(1.5 * R + gap); // 139
  const dy = Math.round(H + gap); // 159
  const dyHalf = Math.round(dy / 2); // 80

  const cx = 800;
  const cy = 340;

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

  // Mathematically Symmetrical Large Hexagon Grid for Desktop
  const desktopClientHexes = [
    // Col 0 (Center column: top & bottom)
    { ...allClientLogos[0], x: cx, y: cy - dy },
    { ...allClientLogos[2], x: cx, y: cy + dy },

    // Col -1 (Left inner)
    { ...allClientLogos[3], x: cx - dx, y: cy - dy + dyHalf },
    { ...allClientLogos[4], x: cx - dx, y: cy + dyHalf },
    { ...allClientLogos[9], x: cx - dx, y: cy + dy + dyHalf },

    // Col +1 (Right inner)
    { ...allClientLogos[1], x: cx + dx, y: cy - dy + dyHalf },
    { ...allClientLogos[5], x: cx + dx, y: cy + dyHalf },
    { ...allClientLogos[12], x: cx + dx, y: cy + dy + dyHalf },

    // Col -2 (Left mid)
    { ...allClientLogos[6], x: cx - 2 * dx, y: cy - dy },
    { ...allClientLogos[7], x: cx - 2 * dx, y: cy },
    { ...allClientLogos[8], x: cx - 2 * dx, y: cy + dy },

    // Col +2 (Right mid)
    { ...allClientLogos[10], x: cx + 2 * dx, y: cy - dy },
    { ...allClientLogos[11], x: cx + 2 * dx, y: cy },
    { ...allClientLogos[14], x: cx + 2 * dx, y: cy + dy },

    // Col -3 (Left outer)
    { ...allClientLogos[15], x: cx - 3 * dx, y: cy - dy + dyHalf },
    { ...allClientLogos[16], x: cx - 3 * dx, y: cy + dyHalf },
    { ...allClientLogos[19], x: cx - 3 * dx, y: cy + dy + dyHalf },

    // Col +3 (Right outer)
    { ...allClientLogos[20], x: cx + 3 * dx, y: cy - dy + dyHalf },
    { ...allClientLogos[21], x: cx + 3 * dx, y: cy + dyHalf },
    { ...allClientLogos[22], x: cx + 3 * dx, y: cy + dy + dyHalf },

    // Col -4 (Left wing)
    { ...allClientLogos[23], x: cx - 4 * dx, y: cy - dy },
    { ...allClientLogos[24], x: cx - 4 * dx, y: cy },
    { ...allClientLogos[25], x: cx - 4 * dx, y: cy + dy },

    // Col +4 (Right wing)
    { ...allClientLogos[26], x: cx + 4 * dx, y: cy - dy },
    { ...allClientLogos[27], x: cx + 4 * dx, y: cy },
    { ...allClientLogos[28], x: cx + 4 * dx, y: cy + dy },

    // Col -5 (Far Left Wing)
    { ...allClientLogos[29], x: cx - 5 * dx, y: cy + dyHalf },

    // Col +5 (Far Right Wing)
    { ...allClientLogos[31], x: cx + 5 * dx, y: cy + dyHalf },
  ];

  // Mobile multi-row marquee splits (Row 1 and Row 2)
  const mobileRow1 = allClientLogos.slice(0, 16);
  const mobileRow2 = allClientLogos.slice(16, 32);

  return (
    <section
      ref={containerRef}
      className={cn(
        'relative w-full overflow-hidden bg-gradient-to-b from-[#FCF7F3] via-[#FAF1EB] to-[#F8EDE6] pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16',
        className
      )}
      style={{ perspective: 1200 }}
    >
      {/* 1. Subtle Silk Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-28 right-1/4 w-[600px] h-[600px] bg-rose-200/20 rounded-full blur-[110px]" />
        <div className="absolute -bottom-24 left-1/5 w-[550px] h-[550px] bg-amber-100/25 rounded-full blur-[100px]" />
      </div>

      {/* 2. Top-Right Burgundy Dot Matrix Grid */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 md:w-[480px] h-44 sm:h-56 pointer-events-none overflow-hidden opacity-30 sm:opacity-40">
        <svg
          className="w-full h-full"
          viewBox="0 0 480 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="wide-burgundy-dots"
              x="0"
              y="0"
              width="18"
              height="18"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="9" cy="9" r="1.5" fill="#800020" opacity="0.32" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wide-burgundy-dots)" />
        </svg>
      </div>

      {/* 3. Bottom-Left Luxury Silk Drape Waves */}
      <div className="absolute bottom-0 left-0 w-80 sm:w-[500px] md:w-[680px] h-44 sm:h-60 md:h-72 pointer-events-none opacity-80">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 680 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wideSilkDrape1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DFC3BC" stopOpacity="0.75" />
              <stop offset="45%" stopColor="#EED8D2" stopOpacity="0.55" />
              <stop offset="80%" stopColor="#FBF4F1" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="wideSilkDrape2" x1="0%" y1="100%" x2="80%" y2="20%">
              <stop offset="0%" stopColor="#CFAEA5" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#E4CDC6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#F9F0EC" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="wideSilkSheen" x1="10%" y1="90%" x2="90%" y2="30%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FAF1ED" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M-40 280 C 90 230, 180 250, 270 210 C 370 170, 430 205, 540 240 C 600 260, 640 280, 680 280 L -40 280 Z"
            fill="url(#wideSilkDrape1)"
          />
          <path
            d="M-60 280 C 70 190, 160 220, 290 180 C 400 140, 460 190, 560 230 L -60 280 Z"
            fill="url(#wideSilkDrape2)"
          />
          <path
            d="M-20 240 C 110 190, 220 210, 340 180 C 450 150, 520 195, 590 235"
            stroke="url(#wideSilkSheen)"
            strokeWidth="12"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4. Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-4 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-200/60 text-burgundy-700 text-xs sm:text-sm font-heading font-semibold tracking-wider uppercase shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-burgundy-700" />
            <span>— 500+ HAPPY CLIENTS —</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-heading font-bold text-charcoal-900 leading-[1.18] tracking-tight"
          >
            Custom Apparel Partner for{' '}
            <span className="text-burgundy-700">Leading Brands</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="text-xs sm:text-sm md:text-base text-charcoal-600 max-w-2xl mx-auto leading-relaxed"
          >
            Trusted by global enterprise leaders, growing startups, and institutions for premium corporate uniforms and merchandise.
          </motion.p>
        </div>

        {/* =====================================================================
            5. DESKTOP VIEW: PROMINENT, LARGE HONEYCOMB WITH PERFECT EMBLEM
            (Hidden on mobile, md:block on desktop & tablet)
            ===================================================================== */}
        <div className="hidden md:block">
          <motion.div
            style={{ rotateX, scale }}
            transition={{ ease: 'easeOut', duration: 0.4 }}
            className="relative w-full py-2"
          >
            <svg
              viewBox="0 0 1600 680"
              className="w-full h-auto select-none"
              style={{ overflow: 'visible' }}
            >
              <defs>
                {/* Minimal Subtle Soft Shadow */}
                <filter id="largeHexShadow" x="-25%" y="-25%" width="150%" height="150%">
                  <feDropShadow
                    dx="0"
                    dy="4"
                    stdDeviation="7"
                    floodColor="#701025"
                    floodOpacity="0.05"
                  />
                </filter>

                {/* Pure White to Soft Ivory Gradient Fill */}
                <linearGradient id="largeHexFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#FAF4EF" />
                </linearGradient>

                {/* Translucent Ambient Periphery Hexagons */}
                <linearGradient id="largeAmbientFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#F5ECE5" stopOpacity="0.22" />
                </linearGradient>
              </defs>

              {/* Ambient Background Ghost Hexagons */}
              <g opacity="0.5">
                <polygon points={getHexPoints(cx - 5 * dx, cy - dy + dyHalf)} fill="url(#largeAmbientFill)" />
                <polygon points={getHexPoints(cx + 5 * dx, cy - dy + dyHalf)} fill="url(#largeAmbientFill)" />
                <polygon points={getHexPoints(cx, cy - 2 * dy)} fill="url(#largeAmbientFill)" />
                <polygon points={getHexPoints(cx - 2 * dx, cy - 2 * dy)} fill="url(#largeAmbientFill)" />
                <polygon points={getHexPoints(cx + 2 * dx, cy - 2 * dy)} fill="url(#largeAmbientFill)" />
                <polygon points={getHexPoints(cx - dx, cy + 2 * dy + dyHalf)} fill="url(#largeAmbientFill)" />
                <polygon points={getHexPoints(cx + dx, cy + 2 * dy + dyHalf)} fill="url(#largeAmbientFill)" />
              </g>

              {/* 26 Large, Prominent Client Logo Hexagons for Desktop */}
              {desktopClientHexes.map((client) => (
                <g
                  key={client.id}
                  style={{ transformOrigin: `${client.x}px ${client.y}px` }}
                  className="cursor-pointer transition-transform duration-300 hover:scale-[1.08] group"
                >
                  {/* Large Hexagon Tile */}
                  <polygon
                    points={getHexPoints(client.x, client.y)}
                    fill="url(#largeHexFill)"
                    filter="url(#largeHexShadow)"
                  />

                  {/* High Clarity Client Logo Image (mixBlendMode: multiply makes white transparent) */}
                  <image
                    href={client.src}
                    x={client.x - 58}
                    y={client.y - 34}
                    width="116"
                    height="68"
                    preserveAspectRatio="xMidYMid meet"
                    style={{ mixBlendMode: 'multiply' }}
                    className="transition-opacity duration-300 opacity-95 group-hover:opacity-100"
                  />
                </g>
              ))}

              {/* ========================================================= */}
              {/* HERO CENTERPIECE: 500+ HAPPY CLIENTS + PROMINENT EMBLEM   */}
              {/* Exactly matching reference Image 2 with perfect alignment */}
              {/* ========================================================= */}
              <g>
                {/* 500+ Bold Italic in signature deep burgundy */}
                <text
                  x={cx}
                  y={cy - 22}
                  textAnchor="middle"
                  fill="#5A0019"
                  fontFamily="Georgia, Garamond, serif"
                  fontStyle="italic"
                  fontWeight="800"
                  fontSize="50"
                  letterSpacing="-0.02em"
                >
                  500+
                </text>

                {/* Thin Elegant Dash */}
                <line
                  x1={cx - 18}
                  y1={cy - 10}
                  x2={cx + 18}
                  y2={cy - 10}
                  stroke="#5A0019"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />

                {/* HAPPY CLIENTS Letter Spaced */}
                <text
                  x={cx}
                  y={cy + 12}
                  textAnchor="middle"
                  fill="#5A0019"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontWeight="700"
                  fontSize="13"
                  letterSpacing="0.34em"
                >
                  HAPPY CLIENTS
                </text>

                {/* Official TeesZone Logo Emblem (Prominent, Centered, Matching Image 2) */}
                <image
                  href="/assets/logo/teeszone-emblem.png"
                  x={cx - 40}
                  y={cy + 24}
                  width="80"
                  height="74"
                  preserveAspectRatio="xMidYMid meet"
                />
              </g>
            </svg>
          </motion.div>
        </div>

        {/* =====================================================================
            6. MOBILE VIEW: PROMINENT CENTER BADGE & MULTIPLE AUTO-SCROLLING ROWS
            (Fixes Image 3 cut-off issue completely, fluid & responsive on mobile)
            ===================================================================== */}
        <div className="md:hidden flex flex-col items-center w-full space-y-6 pt-1 pb-4">
          
          {/* Mobile Centerpiece Card */}
          <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#EEDCD2] shadow-[0_8px_24px_rgba(112,16,37,0.06)] text-center w-full max-w-[280px]">
            <span className="font-['Georgia',_serif] italic font-extrabold text-4xl text-[#5A0019] leading-none mb-1">
              500+
            </span>
            <div className="w-8 h-[2px] bg-[#5A0019] rounded-full my-1.5" />
            <span className="font-heading font-bold text-xs uppercase tracking-[0.28em] text-[#5A0019] mb-3">
              Happy Clients
            </span>
            <img
              src="/assets/logo/teeszone-emblem.png"
              alt="TeesZone Logo"
              className="w-16 h-14 object-contain"
            />
          </div>

          {/* Multiple Auto-Scrolling Marquee Rows for Client Logos */}
          <div className="w-full flex flex-col space-y-3.5 overflow-hidden">
            
            {/* Auto-Scroll Row 1: Scrolling Left */}
            <div className="w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <motion.div
                className="flex items-center gap-3 shrink-0"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 25,
                }}
              >
                {[...mobileRow1, ...mobileRow1].map((client, index) => (
                  <div
                    key={`row1-${client.id}-${index}`}
                    className="w-28 h-20 shrink-0 bg-white/85 rounded-xl border border-[#EBDCD2]/80 shadow-[0_4px_12px_rgba(112,16,37,0.04)] flex items-center justify-center p-2.5 transition-transform active:scale-95"
                  >
                    <img
                      src={client.src}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain"
                      style={{ mixBlendMode: 'multiply' }}
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Auto-Scroll Row 2: Scrolling Right (Opposite Direction) */}
            <div className="w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <motion.div
                className="flex items-center gap-3 shrink-0"
                animate={{ x: ['-50%', '0%'] }}
                transition={{
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 28,
                }}
              >
                {[...mobileRow2, ...mobileRow2].map((client, index) => (
                  <div
                    key={`row2-${client.id}-${index}`}
                    className="w-28 h-20 shrink-0 bg-white/85 rounded-xl border border-[#EBDCD2]/80 shadow-[0_4px_12px_rgba(112,16,37,0.04)] flex items-center justify-center p-2.5 transition-transform active:scale-95"
                  >
                    <img
                      src={client.src}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain"
                      style={{ mixBlendMode: 'multiply' }}
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
