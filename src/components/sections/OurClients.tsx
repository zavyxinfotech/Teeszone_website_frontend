import React, { useRef } from 'react';
import { motion, useScroll, useVelocity, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface OurClientsProps {
  className?: string;
}

// All Verified Client Logos with genuine transparent image assets
export const clientLogos = [
  {
    id: "c_cognizant",
    name: "Cognizant",
    src: "/images/clients/cognizant.png"
  },
  {
    id: "c_zoho",
    name: "Zoho",
    src: "/images/clients/zoho.png"
  },
  {
    id: "c_tech_mahindra",
    name: "Tech Mahindra",
    src: "/images/clients/tech-mahindra.png"
  },
  {
    id: "c_iit_madras",
    name: "IIT Madras",
    src: "/images/clients/iit-madras.png"
  },
  {
    id: "c_srm",
    name: "SRM University",
    src: "/images/clients/srm-university.png"
  },
  {
    id: "c_lawrence_school",
    name: "The Lawrence School Lovedale",
    src: "/images/clients/the-lawrence-school.png"
  },
  {
    id: "c_1",
    name: "Accenture",
    src: "/images/clients/accenture.png"
  },
  {
    id: "c_2",
    name: "Acendra Technologies",
    src: "/images/clients/acendra-technologies.png"
  },
  {
    id: "c_3",
    name: "ACI Workwear",
    src: "/images/clients/aci-workwear.png"
  },
  {
    id: "c_4",
    name: "Address Developers",
    src: "/images/clients/address-developers.png"
  },
  {
    id: "c_5",
    name: "Agam Homes",
    src: "/images/clients/agam-homes.png"
  },
  {
    id: "c_6",
    name: "AIS Advanced",
    src: "/images/clients/ais-advanced.png"
  },
  {
    id: "c_7",
    name: "Ampo",
    src: "/images/clients/ampo.png"
  },
  {
    id: "c_8",
    name: "ARC",
    src: "/images/clients/arc.png"
  },
  {
    id: "c_9",
    name: "Arun's Cafe",
    src: "/images/clients/aruns-cafe.png"
  },
  {
    id: "c_10",
    name: "Ascendra Technology",
    src: "/images/clients/ascendra-technology.png"
  },
  {
    id: "c_11",
    name: "Asian Hitech Industries",
    src: "/images/clients/asian-hitech-industries.png"
  },
  {
    id: "c_12",
    name: "Avaneetha",
    src: "/images/clients/avaneetha.png"
  },
  {
    id: "c_13",
    name: "Agam Homes",
    src: "/images/clients/axle-addition.png"
  },
  {
    id: "c_14",
    name: "Besten Pumps",
    src: "/images/clients/besten-pumps.png"
  },
  {
    id: "c_15",
    name: "Beyomo",
    src: "/images/clients/beyomo.png"
  },
  {
    id: "c_16",
    name: "Bharat G Mart",
    src: "/images/clients/bharat-g-mart.png"
  },
  {
    id: "c_17",
    name: "Big Idea Advertising Agency",
    src: "/images/clients/big-idea-advertising-agency.png"
  },
  {
    id: "c_18",
    name: "Chem Tex Aqua",
    src: "/images/clients/chem-tex-aqua.png"
  },
  {
    id: "c_19",
    name: "Chinna Mobiles",
    src: "/images/clients/chinna-mobiles.png"
  },
  {
    id: "c_20",
    name: "Client 22",
    src: "/images/clients/client-22.png"
  },

  {
    id: "c_22",
    name: "Dipp'd Idly",
    src: "/images/clients/dippd-idly.png"
  },
  {
    id: "c_23",
    name: "Eethal Plumbing Work",
    src: "/images/clients/eethal-plumbing-work.png"
  },
  {
    id: "c_24",
    name: "EPR Venture India",
    src: "/images/clients/epr-venture-india-private-limited.png"
  },
  {
    id: "c_25",
    name: "Erode Light House",
    src: "/images/clients/erode-light-house.png"
  },
  {
    id: "c_26",
    name: "Fortune City",
    src: "/images/clients/fortune-city.png"
  },
  {
    id: "c_27",
    name: "Galaxy Health Insurance",
    src: "/images/clients/galaxy-health-insurance.png"
  },
  {
    id: "c_28",
    name: "Garudans",
    src: "/images/clients/garudans.png"
  },
  {
    id: "c_29",
    name: "GI Interiors",
    src: "/images/clients/gi-interiors.png"
  },
  {
    id: "c_30",
    name: "Global School",
    src: "/images/clients/global-school.png"
  },
  {
    id: "c_31",
    name: "G.R. Hi-Tech",
    src: "/images/clients/gr-hi-tech.png"
  },
  {
    id: "c_32",
    name: "Hajee A.P. Bava Construction",
    src: "/images/clients/hajee-ap-bava-company-construction-private-limited.png"
  },
  {
    id: "c_33",
    name: "Hani Engineering",
    src: "/images/clients/hani-engineering.png"
  },
  {
    id: "c_34",
    name: "Helping Hearts",
    src: "/images/clients/helping-hearts.png"
  },
  {
    id: "c_35",
    name: "Hi Waffles",
    src: "/images/clients/hi-waffles.png"
  },
  {
    id: "c_36",
    name: "Hindu Global School",
    src: "/images/clients/hindu-global-school.png"
  },
  {
    id: "c_37",
    name: "India Metals",
    src: "/images/clients/india-metals.png"
  },
  {
    id: "c_38",
    name: "Industrial Solutions",
    src: "/images/clients/industrial-solutions.png"
  },
  {
    id: "c_39",
    name: "Jharkhand State Cricket Association",
    src: "/images/clients/jharkhand-state-cricket-association.png"
  },
  {
    id: "c_40",
    name: "JMJ Builders",
    src: "/images/clients/jmj-builders.png"
  },
  {
    id: "c_41",
    name: "Kovara",
    src: "/images/clients/kovara.png"
  },
  {
    id: "c_42",
    name: "Kurinji Engineering",
    src: "/images/clients/kurinji-engineering.png"
  },
  {
    id: "c_45",
    name: "Linkra Wires",
    src: "/images/clients/linkra-wires.png"
  },
  {
    id: "c_46",
    name: "Mahe Megalo Strikers",
    src: "/images/clients/mahe-megalo-strikers.png"
  },
  {
    id: "c_47",
    name: "Mani Electronics",
    src: "/images/clients/mani-electrenies.png"
  },
  {
    id: "c_48",
    name: "Modern Motors",
    src: "/images/clients/modernmotors.png"
  },
  {
    id: "c_49",
    name: "Mohanam Restaurant",
    src: "/images/clients/mohanam-restaurant.png"
  },
  {
    id: "c_50",
    name: "Namma Doctor",
    src: "/images/clients/namma-doctor.png"
  },
  {
    id: "c_51",
    name: "NK Homes",
    src: "/images/clients/nk-homes.png"
  },
  {
    id: "c_52",
    name: "PC Tech",
    src: "/images/clients/pc-tech.png"
  },
  {
    id: "c_53",
    name: "Pranavam Agencies",
    src: "/images/clients/pranavam-agencies.png"
  },
  {
    id: "c_54",
    name: "PSP Homes",
    src: "/images/clients/psp-homes.png"
  },
  {
    id: "c_55",
    name: "Raj Electronics",
    src: "/images/clients/raj-electronics.png"
  },
  {
    id: "c_56",
    name: "Relax Fun Zone",
    src: "/images/clients/relax-fun-zone.png"
  },
  {
    id: "c_57",
    name: "RJN Facility Service",
    src: "/images/clients/rjn-facility-service.png"
  },
  {
    id: "c_58",
    name: "RR Associates",
    src: "/images/clients/rr-associates.png"
  },
  {
    id: "c_59",
    name: "RR Electricals & Electronics",
    src: "/images/clients/rr-electicals-electronics.png"
  },
  {
    id: "c_60",
    name: "SBS Insurance",
    src: "/images/clients/sbs-insurance.png"
  },
  {
    id: "c_61",
    name: "Single's Network",
    src: "/images/clients/singles-network.png"
  },
  {
    id: "c_62",
    name: "SK Projects",
    src: "/images/clients/sk-projects.png"
  },
  {
    id: "c_63",
    name: "SN Iyangar Bakery",
    src: "/images/clients/sn-iyangar-bakery.png"
  },
  {
    id: "c_64",
    name: "Splash Events",
    src: "/images/clients/splash-events.png"
  },
  {
    id: "c_67",
    name: "Style Mantra",
    src: "/images/clients/style-mantra.png"
  },
  {
    id: "c_68",
    name: "Sunglow",
    src: "/images/clients/sunglow.png"
  },
  {
    id: "c_69",
    name: "Surya Batteries",
    src: "/images/clients/surya-batteries.png"
  },
  {
    id: "c_70",
    name: "TATA AIA Life Insurance",
    src: "/images/clients/tata-aia-life-insurance.png"
  },
  {
    id: "c_71",
    name: "TATA Electronics",
    src: "/images/clients/tata-electronics.png"
  },
  {
    id: "c_72",
    name: "Thapasya",
    src: "/images/clients/thapasya.png"
  },
  {
    id: "c_73",
    name: "TN Sports University",
    src: "/images/clients/tn-sports-university.png"
  },
  {
    id: "c_74",
    name: "Udayam Nursery & Primary School",
    src: "/images/clients/udayam-nursery-primary-school.png"
  },
  {
    id: "c_75",
    name: "Uniform Unicorn",
    src: "/images/clients/uniform-unicorn.png"
  },
  {
    id: "c_76",
    name: "Unique Lasers & Fabricators",
    src: "/images/clients/unique-lasers-fabricators.png"
  },
  {
    id: "c_77",
    name: "V2 Saloon",
    src: "/images/clients/v2-saloon.png"
  },
  {
    id: "c_78",
    name: "V2 Vogue",
    src: "/images/clients/v2-vogue.png"
  },
  {
    id: "c_79",
    name: "Vinayaka Vidhya Bhavan",
    src: "/images/clients/vinayaka-vidhya-bhavan.png"
  },
  {
    id: "c_80",
    name: "VMK Construction",
    src: "/images/clients/vmk-construction.png"
  }
];

export const OurClients: React.FC<OurClientsProps> = ({ className }) => {
  const containerRef = useRef<HTMLElement>(null);

  // Scroll Tracking for Smooth Reactivity
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 40, stiffness: 200 });

  // Scroll nudge transforms for marquee tracks
  const row1Nudge = useTransform(smoothVelocity, [-1, 1], [-25, 25]);
  const row2Nudge = useTransform(smoothVelocity, [-1, 1], [25, -25]);
  const row3Nudge = useTransform(smoothVelocity, [-1, 1], [-25, 25]);

  // Split verified logos into 2 balanced rows for mobile
  const half = Math.ceil(clientLogos.length / 2);
  const row1Logos = clientLogos.slice(0, half);
  const row2Logos = clientLogos.slice(half);

  // 3-row split for wide desktop view
  const third = Math.ceil(clientLogos.length / 3);
  const dRow1 = clientLogos.slice(0, third);
  const dRow2 = clientLogos.slice(third, third * 2);
  const dRow3 = clientLogos.slice(third * 2);

  return (
    <section
      ref={containerRef}
      id="our-clients"
      className={cn(
        'relative w-full bg-[#FAF6F4] text-charcoal-900 overflow-hidden py-14 sm:py-18 lg:py-22 select-none',
        className
      )}
    >
      {/* Soft Ambient Background Halos Only - NO hexagons or logos behind heading */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#80011F]/10 via-rose-200/5 to-transparent rounded-full blur-[90px]" />
        <div className="absolute -bottom-16 left-1/5 w-[450px] h-[450px] bg-gradient-to-tr from-[#80011F]/10 via-[#FAF1EB] to-transparent rounded-full blur-[80px]" />
      </div>

      {/* Top-Right Burgundy Dot Matrix Grid */}
      <div className="absolute top-0 right-0 w-60 sm:w-80 md:w-[420px] h-36 sm:h-48 pointer-events-none overflow-hidden opacity-30 select-none">
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
        
        {/* Section Heading: Non-repeating Eyebrow */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-1.5">
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-[#80011F] font-heading font-black text-xs sm:text-sm tracking-[0.26em] uppercase"
          >
            — TRUSTED CORPORATE PARTNERS —
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-heading font-black text-charcoal-900 leading-[1.18] tracking-tight"
          >
            Custom Apparel Partner for{' '}
            <span className="text-[#80011F]">Leading Brands</span>
          </motion.h2>
        </div>

        {/* Centerpiece: 500+ Happy Clients in One Line (Logo Removed, Larger Size) */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 py-3 sm:py-5 text-center w-full select-none mb-6 sm:mb-8">
          <span className="font-['Georgia',_serif] italic font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#80011F] leading-none">
            500+
          </span>
          <span className="font-heading font-black text-xl xs:text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.18em] sm:tracking-[0.24em] text-[#80011F] leading-none">
            Happy Clients
          </span>
        </div>

        {/* =====================================================================
            DESKTOP VIEW: Continuous Opposing Marquee Rows
            - Larger, bolder logo sizing
            - Pure transparent backgrounds (NO background color, border, or shadow)
            - 100% genuine existing logo images
            ===================================================================== */}
        <div className="hidden md:flex flex-col space-y-7 w-full overflow-hidden py-2">
          
          {/* Row 1: Left to Right Motion */}
          <div className="w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <motion.div style={{ x: row1Nudge }} className="flex items-center shrink-0">
              <motion.div
                className="flex items-center gap-10 lg:gap-14 shrink-0"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 45,
                }}
              >
                {[...dRow1, ...dRow1].map((client, index) => {
                  const isEmblem = ['c_srm', 'c_iit_madras', 'c_lawrence_school'].includes(client.id);
                  return (
                    <div
                      key={`drow1-${client.id}-${index}`}
                      className="w-44 lg:w-52 h-22 lg:h-28 flex items-center justify-center p-2 shrink-0 select-none bg-transparent border-0 shadow-none group"
                    >
                      <img
                        src={client.src}
                        alt={client.name}
                        className={cn(
                          "w-auto h-auto object-contain select-none transition-transform duration-200 group-hover:scale-108",
                          isEmblem
                            ? "max-w-[135px] lg:max-w-[160px] max-h-[82px] lg:max-h-[96px] scale-120 drop-shadow-xs"
                            : "max-w-[155px] lg:max-w-[185px] max-h-[64px] lg:max-h-[76px]"
                        )}
                        loading="lazy"
                      />
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>

          {/* Row 2: Right to Left Motion */}
          <div className="w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <motion.div style={{ x: row2Nudge }} className="flex items-center shrink-0">
              <motion.div
                className="flex items-center gap-10 lg:gap-14 shrink-0"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 45,
                }}
              >
                {[...dRow2, ...dRow2].map((client, index) => (
                  <div
                    key={`drow2-${client.id}-${index}`}
                    className="w-44 lg:w-52 h-22 lg:h-26 flex items-center justify-center p-2 shrink-0 select-none bg-transparent border-0 shadow-none group"
                  >
                    <img
                      src={client.src}
                      alt={client.name}
                      className="max-w-[155px] lg:max-w-[185px] max-h-[64px] lg:max-h-[76px] w-auto h-auto object-contain select-none transition-transform duration-200 group-hover:scale-108"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Row 3: Left to Right Motion */}
          <div className="w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <motion.div style={{ x: row3Nudge }} className="flex items-center shrink-0">
              <motion.div
                className="flex items-center gap-10 lg:gap-14 shrink-0"
                animate={{ x: ['-50%', '0%'] }}
                transition={{
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 45,
                }}
              >
                {[...dRow3, ...dRow3].map((client, index) => (
                  <div
                    key={`drow3-${client.id}-${index}`}
                    className="w-44 lg:w-52 h-22 lg:h-26 flex items-center justify-center p-2 shrink-0 select-none bg-transparent border-0 shadow-none group"
                  >
                    <img
                      src={client.src}
                      alt={client.name}
                      className="max-w-[155px] lg:max-w-[185px] max-h-[64px] lg:max-h-[76px] w-auto h-auto object-contain select-none transition-transform duration-200 group-hover:scale-108"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* =====================================================================
            MOBILE VIEW: 2 Opposing Auto-Scrolling Marquee Rows
            - Larger, clearer logo images
            - Pure transparent backgrounds
            - 100% genuine existing logo images
            ===================================================================== */}
        <div className="md:hidden flex flex-col space-y-4 w-full overflow-hidden py-1">
          
          {/* Row 1: Left to Right Motion */}
          <div className="w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <motion.div style={{ x: row1Nudge }} className="flex items-center shrink-0">
              <motion.div
                className="flex items-center gap-7 shrink-0"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 36,
                }}
              >
                {[...row1Logos, ...row1Logos].map((client, index) => {
                  const isEmblem = ['c_srm', 'c_iit_madras', 'c_lawrence_school'].includes(client.id);
                  return (
                    <div
                      key={`mob1-${client.id}-${index}`}
                      className="w-34 xs:w-38 sm:w-42 h-18 xs:h-22 flex items-center justify-center p-1.5 shrink-0 select-none bg-transparent border-0 shadow-none"
                    >
                      <img
                        src={client.src}
                        alt={client.name}
                        className={cn(
                          "w-auto h-auto object-contain select-none",
                          isEmblem
                            ? "max-w-[110px] xs:max-w-[125px] max-h-[64px] xs:max-h-[72px] scale-115 drop-shadow-xs"
                            : "max-w-[125px] xs:max-w-[140px] max-h-[52px] xs:max-h-[58px]"
                        )}
                        loading="lazy"
                      />
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>

          {/* Row 2: Right to Left Motion */}
          <div className="w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <motion.div style={{ x: row2Nudge }} className="flex items-center shrink-0">
              <motion.div
                className="flex items-center gap-7 shrink-0"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 36,
                }}
              >
                {[...row2Logos, ...row2Logos].map((client, index) => (
                  <div
                    key={`mob2-${client.id}-${index}`}
                    className="w-34 xs:w-38 sm:w-42 h-18 xs:h-20 flex items-center justify-center p-1.5 shrink-0 select-none bg-transparent border-0 shadow-none"
                  >
                    <img
                      src={client.src}
                      alt={client.name}
                      className="max-w-[125px] xs:max-w-[140px] max-h-[52px] xs:max-h-[58px] w-auto h-auto object-contain select-none"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurClients;
