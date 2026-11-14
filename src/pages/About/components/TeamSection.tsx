import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useReducedMotion } from 'framer-motion';
import { Users } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'sakthivel',
    name: 'Sakthivel Muthusamy',
    role: 'Managing Director',
    image: '/assets/images/team/sakthivel-cutout.png',
    linkedin: 'https://www.linkedin.com/in/sakthivel-muthusamy-teeszone',
  },
  {
    id: 'saranya',
    name: 'Saranya S',
    role: 'Head of Operations',
    image: '/assets/images/team/saranya-cutout.png',
    linkedin: 'https://www.linkedin.com/in/saranya-sakthivel-teeszone',
  },
  {
    id: 'vijayadharshini',
    name: 'Vijaya Dharshini NM',
    role: 'E-Commerce & Digital Marketing',
    image: '/assets/images/team/vijayadharshini-cutout.png',
    linkedin: 'https://www.linkedin.com/in/vijayadarshini-teeszone',
  },
  {
    id: 'archana',
    name: 'Archana R',
    role: 'HR Manager',
    image: '/assets/images/team/archana-cutout.png',
    linkedin: 'https://www.linkedin.com/in/archana-teeszone',
  },
  {
    id: 'vasuki',
    name: 'Vasuki Thangaraj',
    role: 'Full Stack Developer',
    image: '/assets/images/team/vasuki-cutout.png',
    linkedin: 'https://www.linkedin.com/in/vasuki-thangaraj',
  },
];

// Clean Official LinkedIn Brand Icon (Exact #0A66C2 Blue, Zero Border, Zero Background, Zero Container)
const LinkedInBrandIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="#0A66C2"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

interface TeamMemberCardProps {
  member: TeamMember;
  isActive: boolean;
  onSelect: () => void;
  shouldReduceMotion: boolean | null;
  isMobile?: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  isActive,
  onSelect,
  shouldReduceMotion,
  isMobile = false,
}) => {
  return (
    <motion.div
      onClick={onSelect}
      layout
      animate={{
        scale: isActive ? (isMobile ? 1.04 : 1.08) : 1,
        y: isActive ? -6 : 0,
        zIndex: isActive ? 30 : 10,
      }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex flex-col items-center cursor-pointer group text-center select-none"
    >
      {/* 1. Organic Blob Frame Container */}
      <div
        className={`relative flex items-center justify-center w-full mx-auto ${
          isMobile
            ? 'h-[140px] xs:h-[160px] max-w-[150px]'
            : 'h-[220px] lg:h-[260px] xl:h-[280px] max-w-[240px]'
        }`}
      >
        {/* Normal Standard Frame: Dual-layer blush pink & burgundy blob */}
        <motion.img
          src="/assets/images/team/blob-dual.png"
          alt="Organic Frame"
          animate={{ opacity: isActive ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
        />

        {/* Active Frame: Deep burgundy gradient blob */}
        <motion.img
          src="/assets/images/team/blob-active-ring.png"
          alt="Active Frame"
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none drop-shadow-[0_15px_30px_rgba(128,1,31,0.28)]"
        />

        {/* Continuous Rotating 3D Glowing Orbit Ring for Active Portrait */}
        {isActive && !shouldReduceMotion && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 overflow-visible">
            {/* Outer Glowing Light Ring with 3D Perspective Tilt and Smooth Rotation */}
            <div
              className="absolute w-[120%] h-[48%] rounded-[50%] border-[3.5px] border-[#FFE4EB] shadow-[0_0_15px_rgba(255,185,200,0.95),0_0_35px_rgba(128,1,31,0.7),inset_0_0_10px_rgba(255,220,230,0.6)] animate-spin-orbit"
              style={{
                transform: 'rotateX(72deg) rotateY(-18deg)',
              }}
            />
          </div>
        )}

        {/* Team Member Cutout Photograph properly positioned inside/over the blob */}
        <div className="relative w-full h-full flex items-end justify-center z-10 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className={`object-contain object-bottom transition-transform duration-500 ${
              isMobile ? 'h-[92%] max-w-[90%]' : 'h-[94%] max-w-[92%]'
            } ${isActive ? 'scale-105' : 'group-hover:scale-103'}`}
            loading="eager"
          />
        </div>
      </div>

      {/* 2. Member Information (Exact Typography Hierarchy from Reference Image 1) */}
      <div className="mt-3 sm:mt-4 w-full px-1 flex flex-col items-center">
        {/* Name in Deep Burgundy */}
        <h3
          className={`font-heading font-black tracking-tight leading-tight transition-colors duration-300 ${
            isActive ? 'text-[#80011F]' : 'text-[#211D20]'
          } ${isMobile ? 'text-xs xs:text-sm' : 'text-sm sm:text-base lg:text-lg'}`}
        >
          {member.name}
        </h3>

        {/* Designation in Muted Slate Grey */}
        <p
          className={`text-[#68616A] font-medium leading-snug mt-0.5 line-clamp-2 ${
            isMobile ? 'text-[10px] xs:text-[11px]' : 'text-xs sm:text-sm'
          }`}
        >
          {member.role}
        </p>

        {/* Small Elegant Burgundy Underline */}
        <div
          className={`bg-[#80011F] rounded-full mt-1.5 mb-2 transition-all duration-300 ${
            isActive ? 'w-8 h-[2.5px] opacity-100' : 'w-6 h-[2px] opacity-70 group-hover:w-8 group-hover:opacity-100'
          }`}
        />

        {/* Official LinkedIn Brand Icon (Pure #0A66C2, Zero Border, Zero Container) */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center justify-center text-[#0A66C2] hover:scale-115 active:scale-95 transition-transform duration-200 cursor-pointer p-0.5"
          title={`${member.name} on LinkedIn`}
          aria-label={`${member.name} LinkedIn Profile`}
        >
          <LinkedInBrandIcon className={isMobile ? 'w-4 h-4' : 'w-4 sm:w-[18px] h-4 sm:h-[18px]'} />
        </a>
      </div>
    </motion.div>
  );
};

export const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeMemberIndex, setActiveMemberIndex] = useState<number>(2); // Start with central member (Vijaya Dharshini NM) highlighted as in Reference 1

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Track scroll progress to update active highlighted team member (Sakthivel -> Saranya -> Vijaya -> Archana -> Vasuki)
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableDistance = sectionRef.current.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / scrollableDistance));

      // Divide scroll progress smoothly into 5 segments for the 5 leaders
      if (progress < 0.2) {
        setActiveMemberIndex(0); // Sakthivel Muthusamy
      } else if (progress < 0.4) {
        setActiveMemberIndex(1); // Saranya S
      } else if (progress < 0.6) {
        setActiveMemberIndex(2); // Vijaya Dharshini NM
      } else if (progress < 0.8) {
        setActiveMemberIndex(3); // Archana R
      } else {
        setActiveMemberIndex(4); // Vasuki Thangaraj
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Framer Motion secondary sync
  useEffect(() => {
    return scrollYProgress.on('change', (progress) => {
      if (progress < 0.2) {
        setActiveMemberIndex(0);
      } else if (progress < 0.4) {
        setActiveMemberIndex(1);
      } else if (progress < 0.6) {
        setActiveMemberIndex(2);
      } else if (progress < 0.8) {
        setActiveMemberIndex(3);
      } else {
        setActiveMemberIndex(4);
      }
    });
  }, [scrollYProgress]);

  // Smooth scroll to member position when clicked
  const handleMemberSelect = (index: number) => {
    setActiveMemberIndex(index);
    if (!sectionRef.current) return;
    const containerTop = sectionRef.current.offsetTop;
    const scrollableDistance = sectionRef.current.offsetHeight - window.innerHeight;
    const targetFraction = (index + 0.5) / 5;
    const targetScroll = containerTop + targetFraction * scrollableDistance;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[280vh] sm:h-[320vh] bg-[#FFF8F5] text-[#211D20] select-none z-20"
      aria-label="TeesZone Leadership Team"
    >
      {/* Dynamic Keyframes for the Smooth Rotating Orbit Ring */}
      <style>{`
        @keyframes spinOrbitRing {
          0% {
            transform: rotateX(72deg) rotateY(-18deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(72deg) rotateY(-18deg) rotateZ(360deg);
          }
        }
        .animate-spin-orbit {
          animation: spinOrbitRing 12s linear infinite;
        }
      `}</style>

      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-10">
        
        {/* ========================================================================= */}
        {/* BACKGROUND DECORATIVE ELEMENTS (Exact Match of Reference Image 1)         */}
        {/* ========================================================================= */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
          
          {/* Subtle Radial Glow Behind Portraits */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 50% 55%, rgba(255,255,255,0.85) 0%, rgba(255,248,245,0.6) 50%, rgba(247,236,231,0.3) 100%)',
            }}
          />

          {/* Top-Right Corner Burgundy Gradient Wave Swoosh */}
          <div className="absolute top-0 right-0 w-72 sm:w-96 lg:w-[460px] h-72 sm:h-96 lg:h-[460px] opacity-90">
            <svg viewBox="0 0 460 460" className="w-full h-full" fill="none">
              <defs>
                <linearGradient id="waveTopRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#80011F" stopOpacity="0.88" />
                  <stop offset="100%" stopColor="#550015" stopOpacity="0.98" />
                </linearGradient>
              </defs>
              <path
                d="M100 0C190 140 310 210 460 160V0H100Z"
                fill="url(#waveTopRightGrad)"
              />
              <path
                d="M200 0C270 95 360 145 460 110V0H200Z"
                fill="#9E1438"
                fillOpacity="0.45"
              />
            </svg>
          </div>

          {/* Bottom-Left Corner Burgundy Gradient Wave Swoosh */}
          <div className="absolute bottom-0 left-0 w-72 sm:w-96 lg:w-[460px] h-72 sm:h-96 lg:h-[460px] opacity-90">
            <svg viewBox="0 0 460 460" className="w-full h-full" fill="none">
              <defs>
                <linearGradient id="waveBottomLeftGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#80011F" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#550015" stopOpacity="0.98" />
                </linearGradient>
              </defs>
              <path
                d="M0 300C150 270 240 370 370 460H0V300Z"
                fill="url(#waveBottomLeftGrad)"
              />
              <path
                d="M0 370C100 350 170 400 250 460H0V370Z"
                fill="#9E1438"
                fillOpacity="0.45"
              />
            </svg>
          </div>

          {/* Top-Left Corner Subtle Dotted Pattern */}
          <div className="absolute top-6 left-6 sm:top-10 sm:left-10 opacity-20">
            <div className="grid grid-cols-6 gap-2 sm:gap-2.5">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#80011F]" />
              ))}
            </div>
          </div>

          {/* Bottom-Right Corner Subtle Dotted Pattern */}
          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 opacity-20">
            <div className="grid grid-cols-6 gap-2 sm:gap-2.5">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#80011F]" />
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 1. SECTION HEADER (Exact Match of Reference Image 1)                      */}
        {/* ========================================================================= */}
        <div className="relative z-20 text-center max-w-3xl mx-auto pt-2 sm:pt-4">
          
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#80011F]/10 border border-[#80011F]/20 text-[#80011F] text-xs font-heading font-black tracking-widest uppercase mb-2 shadow-2xs">
            <Users className="w-3.5 h-3.5 text-[#80011F]" />
            <span>OUR LEADERSHIP TEAM</span>
          </div>

          {/* Main Title with Burgundy Emphasis on "TeesZone" and Curved Underline */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-heading font-black text-[#211D20] tracking-tight leading-[1.15]">
            Meet the People Behind{' '}
            <span className="text-[#80011F] relative inline-block">
              TeesZone
              {/* Reference Image 1 Curved Burgundy Accent Underline */}
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#80011F]"
                viewBox="0 0 100 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C28 3 72 3 98 9"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-[#68616A] max-w-2xl mx-auto leading-relaxed">
            A dedicated team driving precision manufacturing, technology, and customer trust across India.
          </p>

        </div>

        {/* ========================================================================= */}
        {/* 2. TEAM MEMBERS PORTRAITS (DESKTOP: 1 ROW, MOBILE: 2 ROWS)                */}
        {/* ========================================================================= */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex-1 flex items-center justify-center my-auto py-2">
          
          {/* DESKTOP / TABLET: All 5 Members in One Horizontal Line */}
          <div className="hidden md:grid md:grid-cols-5 gap-3 lg:gap-5 xl:gap-8 items-end justify-center w-full">
            {TEAM_MEMBERS.map((member, idx) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                isActive={activeMemberIndex === idx}
                onSelect={() => handleMemberSelect(idx)}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>

          {/* MOBILE: Exactly 2 Rows (3 Members in Row 1, 2 Members Centered in Row 2) */}
          <div className="md:hidden flex flex-col items-center justify-center gap-3 w-full max-w-md mx-auto">
            
            {/* Row 1: 3 Members (Sakthivel, Saranya, Vijaya Dharshini) */}
            <div className="grid grid-cols-3 gap-2 w-full">
              {TEAM_MEMBERS.slice(0, 3).map((member, idx) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  isActive={activeMemberIndex === idx}
                  onSelect={() => handleMemberSelect(idx)}
                  shouldReduceMotion={shouldReduceMotion}
                  isMobile
                />
              ))}
            </div>

            {/* Row 2: 2 Members Centered (Archana, Vasuki) */}
            <div className="grid grid-cols-2 gap-3 w-[70%] mx-auto">
              {TEAM_MEMBERS.slice(3, 5).map((member, idx) => {
                const realIdx = idx + 3;
                return (
                  <TeamMemberCard
                    key={member.id}
                    member={member}
                    isActive={activeMemberIndex === realIdx}
                    onSelect={() => handleMemberSelect(realIdx)}
                    shouldReduceMotion={shouldReduceMotion}
                    isMobile
                  />
                );
              })}
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM INDICATOR DOTS (Exact Reference 1 Interaction)                  */}
        {/* ========================================================================= */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-center gap-2 pb-2">
          {TEAM_MEMBERS.map((member, idx) => (
            <button
              key={member.id}
              onClick={() => handleMemberSelect(idx)}
              aria-label={`Highlight ${member.name}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeMemberIndex === idx
                  ? 'w-7 h-2 bg-[#80011F]'
                  : 'w-2 h-2 bg-[#80011F]/25 hover:bg-[#80011F]/50'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
