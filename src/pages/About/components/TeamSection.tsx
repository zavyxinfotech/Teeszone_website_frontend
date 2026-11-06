import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

interface TeamSectionProps {
  className?: string;
}

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

// Exactly 5 Team Leaders: 1 line on desktop, 3 on top + 2 centered on mobile
const leadershipTeam = [
  {
    num: '01',
    name: 'Sakthivel Muthusamy',
    role: 'Managing Director',
    image: '/assets/images/team/sakthivel.jpg',
    about: 'Pioneered TeesZone with a vision to transform Tiruppur knitwear into seamless custom-apparel solutions nationwide.',
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
    role: 'Head of Operations',
    image: '/assets/images/team/saranya.jpg',
    about: 'Oversees daily plant operations, cutting-to-pack workflows, and stringent QA protocols on every production batch.',
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
    about: 'Drives our digital presence, client onboarding platforms, and omni-channel customer experiences nationwide.',
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
    about: 'Fosters our skilled artisan ecosystem, ensuring fair trade practices and continuous upskilling in apparel craft.',
    linkedin: 'https://www.linkedin.com/in/archana-teeszone',
    theme: {
      ribbon: 'from-[#6E001E] to-[#4A0014]',
      accent: '#6E001E',
      badgeBg: 'bg-[#4A0014]',
      foldShadow: '#2E000B',
    },
  },
  {
    num: '05',
    name: 'Vasuki Thangaraj',
    role: 'Full Stack Developer',
    image: '/assets/images/team/vasuki.jpg',
    about: 'Builds and optimizes TeesZone digital portals, quotation calculators, and automated manufacturing platforms.',
    linkedin: 'https://www.linkedin.com/in/vasuki-thangaraj',
    theme: {
      ribbon: 'from-[#800020] to-[#5C0017]',
      accent: '#800020',
      badgeBg: 'bg-[#5C0017]',
      foldShadow: '#3B000F',
    },
  },
];

export const TeamSection: React.FC<TeamSectionProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLElement>(null);

  // 3D Paper-Folding Scroll Animations (Tactile Origami Concertina Tilt on Scroll)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Paper-folding angle transforms (rotates like folded accordion paper on scroll up & down)
  const foldAngleLeft = useTransform(scrollYProgress, [0, 0.5, 1], [-9, 0, 9]);
  const foldAngleRight = useTransform(scrollYProgress, [0, 0.5, 1], [9, 0, -9]);
  const foldAngleCenter = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 0]);
  const foldElevation = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -15]);

  return (
    <section
      ref={sectionRef}
      className={cn(
        'relative w-full bg-[#FAF6F2] overflow-hidden pt-10 sm:pt-14 md:pt-16 pb-14 sm:pb-18 md:pb-20 border-t border-burgundy-100/50',
        className
      )}
      style={{ perspective: 1400 }}
    >
      {/* Subtle Ambient Background Theme */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-rose-200/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 left-1/4 w-[450px] h-[450px] bg-amber-100/30 rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1580px] mx-auto px-2 sm:px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-burgundy-50 border border-burgundy-200/60 text-burgundy-700 text-xs sm:text-sm font-heading font-semibold tracking-wider uppercase shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-burgundy-700" />
            <span>— LEADERSHIP TEAM —</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="text-2xl sm:text-3xl md:text-[38px] font-heading font-bold text-charcoal-900 leading-[1.15] tracking-tight"
          >
            Meet the People Behind{' '}
            <span className="text-burgundy-700">TeesZone</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="text-xs sm:text-sm text-charcoal-600 max-w-lg mx-auto leading-relaxed"
          >
            A dedicated team driving precision manufacturing, technology, and customer trust across India.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: ALL 5 CARDS IN A SINGLE HORIZONTAL LINE                      */}
        {/* (Rounded border removed, decreased card size, decreased ribbon width)      */}
        {/* ========================================================================= */}
        <div className="hidden md:grid md:grid-cols-5 gap-3.5 lg:gap-4 justify-center">
          {leadershipTeam.map((member, idx) => {
            // Paper folding 3D alternating effect
            const rotateY =
              idx === 0
                ? foldAngleLeft
                : idx === 1
                ? foldAngleRight
                : idx === 2
                ? foldAngleCenter
                : idx === 3
                ? foldAngleLeft
                : foldAngleRight;

            return (
              <motion.div
                key={member.num}
                style={{ rotateY, y: foldElevation, transformStyle: 'preserve-3d' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="group relative flex flex-col bg-white rounded-none border border-[#EBE2D8] shadow-[0_8px_20px_rgba(128,0,32,0.05)] overflow-hidden transition-all duration-300 hover:shadow-[0_14px_30px_rgba(128,0,32,0.12)] hover:-translate-y-1"
              >
                {/* 1. Member Photo Container (Compact Height) */}
                <div className="relative w-full h-52 lg:h-56 overflow-hidden bg-neutral-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/35 to-transparent pointer-events-none" />
                </div>

                {/* 2. Compact Ribbon Banner (Decreased Width & Padding, 3D Fold) */}
                <div className="relative -mt-5 mx-0 z-20">
                  <div
                    className={cn(
                      'relative flex items-center gap-2 py-1.5 px-2.5 bg-gradient-to-r text-white shadow-sm',
                      member.theme.ribbon
                    )}
                    style={{
                      borderRadius: '0 6px 6px 0',
                      maxWidth: '92%',
                    }}
                  >
                    {/* Circle Badge with Member Number */}
                    <div
                      className={cn(
                        'w-7 h-7 rounded-full flex items-center justify-center font-heading font-extrabold text-xs text-white shrink-0 border border-white/50 shadow-inner',
                        member.theme.badgeBg
                      )}
                    >
                      {member.num}
                    </div>

                    {/* Member Name & Role (Compact Typography) */}
                    <div className="min-w-0 flex-1 leading-tight text-left">
                      <h3 className="font-heading font-bold text-xs lg:text-[13px] text-white truncate">
                        {member.name}
                      </h3>
                      <p className="text-[10px] text-rose-100/90 font-medium truncate mt-0.5">
                        {member.role}
                      </p>
                    </div>

                    {/* 3D Folded Ribbon Tab Triangle */}
                    <div
                      className="absolute right-0 -bottom-1.5 w-0 h-0 border-solid pointer-events-none"
                      style={{
                        borderWidth: '6px 6px 0 0',
                        borderColor: `${member.theme.foldShadow} transparent transparent transparent`,
                      }}
                    />
                  </div>
                </div>

                {/* 3. Card Body: Compact About Me & ONLY LinkedIn Logo Button */}
                <div className="flex-1 flex flex-col justify-between p-3.5 pt-3 text-left space-y-3">
                  {/* About Me */}
                  <div className="space-y-1">
                    <span
                      className="text-[11px] font-heading font-bold uppercase tracking-wider block"
                      style={{ color: member.theme.accent }}
                    >
                      About Me
                    </span>
                    <p className="text-[11px] text-charcoal-700 leading-relaxed font-normal line-clamp-4">
                      {member.about}
                    </p>
                  </div>

                  {/* ONLY LinkedIn Logo Icon at Bottom (No unwanted text) */}
                  <div className="pt-2 border-t border-[#F2E7DF] flex justify-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#FAF4EF] hover:bg-burgundy-700 text-[#0077b5] hover:text-white border border-[#EBDCD2] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-2xs"
                      title={`${member.name} on LinkedIn`}
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW: 3 CARDS IN ROW 1, 2 CARDS CENTERED IN ROW 2                  */}
        {/* (Tactile 3D Paper-Fold Effect, No rounded corners, Only LinkedIn Logo)     */}
        {/* ========================================================================= */}
        <div className="md:hidden flex flex-col space-y-2.5">
          {/* Row 1: 3 Cards in One Row */}
          <div className="grid grid-cols-3 gap-2">
            {leadershipTeam.slice(0, 3).map((member, idx) => {
              const rotateY = idx === 0 ? foldAngleLeft : idx === 1 ? foldAngleCenter : foldAngleRight;

              return (
                <motion.div
                  key={member.num}
                  style={{ rotateY, y: foldElevation, transformStyle: 'preserve-3d' }}
                  className="flex flex-col bg-white rounded-none border border-[#EBE2D8] shadow-[0_4px_12px_rgba(128,0,32,0.04)] overflow-hidden"
                >
                  {/* Photo */}
                  <div className="relative w-full h-28 sm:h-36 overflow-hidden bg-neutral-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>

                  {/* Ribbon Banner */}
                  <div className="relative -mt-4 mx-0 z-20">
                    <div
                      className={cn(
                        'relative flex items-center gap-1.5 py-1 px-1.5 bg-gradient-to-r text-white',
                        member.theme.ribbon
                      )}
                      style={{ borderRadius: '0 4px 4px 0', maxWidth: '94%' }}
                    >
                      <div
                        className={cn(
                          'w-5 h-5 rounded-full flex items-center justify-center font-extrabold text-[9px] text-white shrink-0',
                          member.theme.badgeBg
                        )}
                      >
                        {member.num}
                      </div>
                      <div className="min-w-0 flex-1 leading-none text-left">
                        <h4 className="font-bold text-[10px] text-white truncate">
                          {member.name.split(' ')[0]}
                        </h4>
                        <p className="text-[8px] text-rose-100/90 truncate mt-0.5">
                          {member.role.split(' ')[0]}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Body & ONLY LinkedIn Logo */}
                  <div className="p-2 pt-1.5 flex flex-col justify-between flex-1 space-y-1.5 text-center">
                    <p className="text-[9px] text-charcoal-700 leading-snug line-clamp-3 text-left">
                      {member.about}
                    </p>
                    <div className="pt-1 border-t border-[#F2E7DF] flex justify-center">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 rounded-full bg-[#FAF4EF] hover:bg-burgundy-700 text-[#0077b5] hover:text-white border border-[#EBDCD2] flex items-center justify-center transition-transform active:scale-95 shadow-2xs"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedInIcon className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Row 2: 2 Cards Centered in 2nd Row */}
          <div className="flex justify-center gap-2">
            {leadershipTeam.slice(3, 5).map((member, idx) => {
              const rotateY = idx === 0 ? foldAngleLeft : foldAngleRight;

              return (
                <motion.div
                  key={member.num}
                  style={{ rotateY, y: foldElevation, transformStyle: 'preserve-3d' }}
                  className="w-[calc(33.333%-5px)] flex flex-col bg-white rounded-none border border-[#EBE2D8] shadow-[0_4px_12px_rgba(128,0,32,0.04)] overflow-hidden"
                >
                  {/* Photo */}
                  <div className="relative w-full h-28 sm:h-36 overflow-hidden bg-neutral-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>

                  {/* Ribbon Banner */}
                  <div className="relative -mt-4 mx-0 z-20">
                    <div
                      className={cn(
                        'relative flex items-center gap-1.5 py-1 px-1.5 bg-gradient-to-r text-white',
                        member.theme.ribbon
                      )}
                      style={{ borderRadius: '0 4px 4px 0', maxWidth: '94%' }}
                    >
                      <div
                        className={cn(
                          'w-5 h-5 rounded-full flex items-center justify-center font-extrabold text-[9px] text-white shrink-0',
                          member.theme.badgeBg
                        )}
                      >
                        {member.num}
                      </div>
                      <div className="min-w-0 flex-1 leading-none text-left">
                        <h4 className="font-bold text-[10px] text-white truncate">
                          {member.name.split(' ')[0]}
                        </h4>
                        <p className="text-[8px] text-rose-100/90 truncate mt-0.5">
                          {member.role.split(' ')[0]}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Body & ONLY LinkedIn Logo */}
                  <div className="p-2 pt-1.5 flex flex-col justify-between flex-1 space-y-1.5 text-center">
                    <p className="text-[9px] text-charcoal-700 leading-snug line-clamp-3 text-left">
                      {member.about}
                    </p>
                    <div className="pt-1 border-t border-[#F2E7DF] flex justify-center">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 rounded-full bg-[#FAF4EF] hover:bg-burgundy-700 text-[#0077b5] hover:text-white border border-[#EBDCD2] flex items-center justify-center transition-transform active:scale-95 shadow-2xs"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedInIcon className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
