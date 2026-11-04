import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { teamMembers } from '@/data/team';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

interface TeamSectionProps {
  className?: string;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  className = '',
}) => {
  // Duplicated list for seamless non-stop infinite marquee loop
  const marqueeMembers = [...teamMembers, ...teamMembers];

  return (
    <section className={cn('relative w-full bg-white overflow-x-clip overflow-y-visible pt-8 sm:pt-12 md:pt-16 pb-24 sm:pb-32 lg:pb-36', className)}>
      
      {/* ========================================================================= */}
      {/* 1. CENTERED BURGUNDY BOX (Minimal Rounded Border, Minimal Shadow, Matching Typography) */}
      {/* ========================================================================= */}
      <div className="relative max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#941734] to-[#7B1028] text-white pt-9 sm:pt-12 pb-26 sm:pb-30 px-4 sm:px-8 shadow-lg border border-burgundy-900/30 min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex flex-col justify-start">
          
          {/* Subtle Ambient Silk Glows inside the container */}
          <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[radial-gradient(circle,rgba(255,220,230,0.12)_0%,transparent_70%)] blur-3xl pointer-events-none" />

          {/* Header Typography matching WhyChooseUs section */}
          <div className="text-center max-w-2xl mx-auto relative z-10 px-2">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
              <div className="w-8 sm:w-12 h-px bg-white/40" />
              <span className="text-[11px] sm:text-xs md:text-sm font-heading font-extrabold uppercase tracking-[0.25em] text-white/95">
                OUR TEAM
              </span>
              <div className="w-8 sm:w-12 h-px bg-white/40" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-heading font-black tracking-tight leading-[1.12] text-white">
              Meet the People Behind{' '}
              <span className="bg-gradient-to-r from-white via-rose-100 to-warm-200 bg-clip-text text-transparent">
                TeesZone
              </span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-rose-100/90 font-normal mt-2.5 sm:mt-3 leading-relaxed max-w-xl mx-auto">
              A passionate team of artisans, production masters, and leaders working together to deliver high-quality custom apparel across India.
            </p>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CARDS ROW: Floats in from the right like flowing cloth, one-by-one */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, x: 90 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1.0,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative -mt-64 sm:-mt-72 lg:-mt-76 w-full z-20 overflow-visible"
      >
        <div className="flex overflow-visible w-full select-none py-4">
          
          {/* Continuous Non-Stop Infinite Loop Track across entire screen */}
          <div className="flex animate-marquee-scroll hover:[animation-play-state:paused] gap-5 sm:gap-7 items-start overflow-visible">
            {marqueeMembers.map((member, idx) => (
              <motion.div
                key={`${member.id}-${idx}`}
                initial={{ opacity: 0, x: 60, y: 15 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.85,
                  delay: (idx % teamMembers.length) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative w-[260px] sm:w-[290px] md:w-[320px] shrink-0 cursor-pointer overflow-visible"
              >
                {/* White Background Card with Ultra-Thin Delicate Border */}
                <div className="relative rounded-none bg-white border border-[#EFE7DC]/70 p-2 sm:p-2.5 transition-transform duration-300 group-hover:-translate-y-2 shadow-xs">
                  
                  {/* Image Section with Layered Cloth-Fold Bottom Border (matching attached reference) */}
                  <div className="relative w-full h-44 sm:h-50 md:h-56 rounded-none overflow-hidden bg-charcoal-900">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top rounded-none transition-transform duration-500 group-hover:scale-106"
                      loading="lazy"
                    />

                    {/* Layered Cloth Folds Bottom Border Effect */}
                    <svg
                      viewBox="0 0 320 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute bottom-0 inset-x-0 w-full h-6 pointer-events-none z-10"
                      preserveAspectRatio="none"
                    >
                      {/* Topmost Fold Layer */}
                      <path d="M0,10 Q160,24 320,10 L320,28 L0,28 Z" fill="rgba(255, 255, 255, 0.35)" />
                      {/* Middle Fold Layer */}
                      <path d="M0,16 Q160,26 320,16 L320,28 L0,28 Z" fill="rgba(255, 255, 255, 0.65)" />
                      {/* Bottom Solid Base Fold */}
                      <path d="M0,22 Q160,28 320,22 L320,28 L0,28 Z" fill="#FFFFFF" />
                    </svg>

                    {/* Department Badge Pill */}
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/65 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-heading font-semibold rounded-none border border-white/20 tracking-wider z-20">
                      {member.department}
                    </div>

                    {/* Top-Right Arrow Indicator */}
                    <div className="absolute top-2 right-2 w-6 h-6 bg-white/90 backdrop-blur-sm flex items-center justify-center text-charcoal-900 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <ArrowUpRight className="w-3.5 h-3.5 text-burgundy-700" />
                    </div>
                  </div>

                  {/* Member Name & Role (Centered at bottom of card) */}
                  <div className="pt-2.5 sm:pt-3 pb-1 text-center">
                    <h3 className="font-heading font-semibold text-sm sm:text-base text-charcoal-900 tracking-tight leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-burgundy-900 font-normal mt-0.5 line-clamp-1">
                      {member.role}
                    </p>
                  </div>

                  {/* Details Card: Slides down smoothly from behind during hover with bio */}
                  <div className="absolute top-full left-0 right-0 z-50 bg-white border-x border-b border-[#EFE7DC] p-3.5 sm:p-4 transition-all duration-300 ease-out opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto rounded-none shadow-xl">
                    <div className="space-y-1.5 text-left">
                      <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-heading font-bold text-burgundy-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-burgundy-700 shrink-0" />
                        <span>{member.role}</span>
                      </div>
                      <p className="text-xs sm:text-[13px] text-charcoal-600 leading-relaxed font-normal">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>

    </section>
  );
};

export default TeamSection;
