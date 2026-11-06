import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Sparkles } from 'lucide-react';

// Crisp Official LinkedIn Brand Icon
const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

interface TeamSectionProps {
  className?: string;
}

// Exactly 4 leaders requested (Nithya & Ramya removed)
const leadershipTeam = [
  {
    num: '01',
    name: 'Sakthivel Muthusamy',
    role: 'Founder, Managing Director',
    image: '/assets/images/team/sakthivel.jpg',
    about:
      'Pioneered TeesZone with a vision to transform Tiruppur knitwear manufacturing into a seamless corporate-apparel solution provider across India.',
    linkedin: 'https://www.linkedin.com/in/sakthivel-muthusamy-teeszone',
    theme: {
      ribbon: 'from-[#7A0022] to-[#550017]',
      accent: '#7A0022',
      badgeBg: 'bg-[#550017]',
      foldShadow: '#3A000F',
    },
  },
  {
    num: '02',
    name: 'Saranya S',
    role: 'Director, Head of Operations',
    image: '/assets/images/team/saranya.jpg',
    about:
      'Oversees daily plant operations, cutting-to-pack workflows, and stringent quality assurance protocols across every production batch.',
    linkedin: 'https://www.linkedin.com/in/saranya-sakthivel-teeszone',
    theme: {
      ribbon: 'from-[#8E1736] to-[#6A0B23]',
      accent: '#8E1736',
      badgeBg: 'bg-[#6A0B23]',
      foldShadow: '#440414',
    },
  },
  {
    num: '03',
    name: 'Vijaya Dharshini NM',
    role: 'E-Commerce & Digital Marketing',
    image: '/assets/images/team/vijayadharshini.jpg',
    about:
      'Drives our digital presence, client onboarding platforms, and omni-channel customer experiences for businesses nationwide.',
    linkedin: 'https://www.linkedin.com/in/vijayadarshini-teeszone',
    theme: {
      ribbon: 'from-[#9C2040] to-[#75112B]',
      accent: '#9C2040',
      badgeBg: 'bg-[#75112B]',
      foldShadow: '#4D0819',
    },
  },
  {
    num: '04',
    name: 'Archana R',
    role: 'HR Manager',
    image: '/assets/images/team/archana.jpg',
    about:
      'Fosters our skilled artisan and workforce ecosystem, ensuring fair trade practices and continuous upskilling in apparel craftsmanship.',
    linkedin: 'https://www.linkedin.com/in/archana-teeszone',
    theme: {
      ribbon: 'from-[#6E001E] to-[#4A0014]',
      accent: '#6E001E',
      badgeBg: 'bg-[#4A0014]',
      foldShadow: '#2E000B',
    },
  },
];

export const TeamSection: React.FC<TeamSectionProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll Up & Scroll Down Dynamic Wave Animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Staggered parallax for cards on every scroll up and down
  const yOdd = useTransform(scrollYProgress, [0, 0.5, 1], [35, 0, -25]);
  const yEven = useTransform(scrollYProgress, [0, 0.5, 1], [55, 0, -40]);

  return (
    <section
      ref={sectionRef}
      className={cn(
        'relative w-full bg-[#FAF6F2] overflow-hidden pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24 border-t border-burgundy-100/50',
        className
      )}
    >
      {/* Subtle Ambient Background Theme */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-rose-200/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 left-1/4 w-[450px] h-[450px] bg-amber-100/30 rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER (Clean, Centered, matching Image 1 & TeesZone theme)       */}
        {/* ========================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2.5">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-200/60 text-burgundy-700 text-xs sm:text-sm font-heading font-semibold tracking-wider uppercase shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-burgundy-700" />
            <span>— LEADERSHIP TEAM —</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-[42px] font-heading font-bold text-charcoal-900 leading-[1.15] tracking-tight"
          >
            Meet the People Behind{' '}
            <span className="text-burgundy-700">TeesZone</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="text-sm sm:text-base text-charcoal-600 max-w-xl mx-auto leading-relaxed"
          >
            A dedicated leadership team driving innovation, craftsmanship, and customer trust across India.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* 4 CARDS: EXACT DESIGN AS ATTACHED REFERENCE IMAGE 1 (Centered Grid)       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-6 justify-center">
          {leadershipTeam.map((member, idx) => {
            const yTransform = idx % 2 === 0 ? yOdd : yEven;

            return (
              <motion.div
                key={member.num}
                style={{ y: yTransform }}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col bg-white rounded-2xl shadow-[0_10px_30px_rgba(128,0,32,0.06)] border border-[#EFE5DC] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_36px_rgba(128,0,32,0.12)] hover:-translate-y-1.5"
              >
                {/* 1. Member Photo Container */}
                <div className="relative w-full h-64 sm:h-68 md:h-72 overflow-hidden bg-neutral-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  {/* Subtle top gradient shadow */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>

                {/* 2. Ribbon Banner (Exact 3D Folded Tab Style matching Image 1) */}
                <div className="relative -mt-6 mx-0 z-20">
                  <div
                    className={cn(
                      'relative flex items-center gap-3 py-2.5 px-3.5 bg-gradient-to-r text-white shadow-md',
                      member.theme.ribbon
                    )}
                    style={{
                      borderRadius: '0 8px 8px 0',
                      marginRight: '8px',
                    }}
                  >
                    {/* Circle Badge with Member Number */}
                    <div
                      className={cn(
                        'w-9 h-9 rounded-full flex items-center justify-center font-heading font-extrabold text-sm text-white shrink-0 border-2 border-white/40 shadow-inner',
                        member.theme.badgeBg
                      )}
                    >
                      {member.num}
                    </div>

                    {/* Member Name & Role */}
                    <div className="min-w-0 flex-1 leading-tight text-left">
                      <h3 className="font-heading font-bold text-sm sm:text-[15px] text-white truncate">
                        {member.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-rose-100/90 font-medium truncate mt-0.5">
                        {member.role}
                      </p>
                    </div>

                    {/* 3D Folded Ribbon Tab Triangle Effect on Right Side */}
                    <div
                      className="absolute right-0 -bottom-2 w-0 h-0 border-solid pointer-events-none"
                      style={{
                        borderWidth: '8px 8px 0 0',
                        borderColor: `${member.theme.foldShadow} transparent transparent transparent`,
                      }}
                    />
                  </div>
                </div>

                {/* 3. Card Body: About Me Section & LinkedIn Navigation */}
                <div className="flex-1 flex flex-col justify-between p-5 pt-4 text-left space-y-4">
                  {/* About Me Title & Description */}
                  <div className="space-y-1.5">
                    <span
                      className="text-xs font-heading font-bold uppercase tracking-wider block"
                      style={{ color: member.theme.accent }}
                    >
                      About Me
                    </span>
                    <p className="text-xs sm:text-[13px] text-charcoal-700 leading-relaxed font-normal">
                      {member.about}
                    </p>
                  </div>

                  {/* LinkedIn Navigation Link at Bottom of Card */}
                  <div className="pt-3 border-t border-[#F2E7DF]">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full px-3 py-2 rounded-lg bg-[#FAF4EF] hover:bg-burgundy-50 border border-[#EBDCD2] text-burgundy-800 hover:text-burgundy-950 text-xs font-heading font-semibold transition-all duration-200 group/link"
                      title={`Visit ${member.name}'s LinkedIn profile`}
                    >
                      <div className="flex items-center gap-2">
                        <LinkedInIcon className="w-4 h-4 text-[#0077b5] group-hover/link:scale-110 transition-transform" />
                        <span>Connect on LinkedIn</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-burgundy-700 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
