import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Layers, MapPin } from 'lucide-react';

interface StatItemProps {
  endVal: number;
  suffix: string;
  label: string;
  sublabel?: string;
  icon: React.ReactNode;
  trigger: boolean;
  isTextOnly?: boolean;
  textVal?: string;
}

const AnimatedStat: React.FC<StatItemProps> = ({
  endVal,
  suffix,
  label,
  icon,
  trigger,
  isTextOnly = false,
  textVal = '',
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setCount(0);
      return;
    }

    if (isTextOnly) return;

    let start = 0;
    const duration = 1600; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(ease * endVal);
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(endVal);
      }
    };

    const frameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(frameId);
  }, [trigger, endVal, isTextOnly]);

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-6 py-3 sm:py-8 px-3 sm:px-4 flex-1">
      {/* Burgundy Outline Icon in Clean Size */}
      <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-2xl bg-[#80011F]/[0.06] flex items-center justify-center text-[#80011F] shrink-0">
        {icon}
      </div>

      <div className="text-left select-none">
        {/* Main Value / Counter */}
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-heading font-black text-charcoal-900 leading-none tracking-tight">
          {isTextOnly ? textVal : `${count}${suffix}`}
        </p>

        {/* Label Text */}
        <p className="text-xs sm:text-base md:text-lg font-heading font-bold text-charcoal-700 tracking-wide mt-1 sm:mt-2 whitespace-nowrap">
          {label}
        </p>
      </div>
    </div>
  );
};

const statsList = [
  {
    id: 'garments',
    endVal: 10,
    suffix: ' Lakhs+',
    label: 'Garments Delivered',
    icon: (
      <svg
        className="w-6 h-6 sm:w-10 sm:h-10 text-[#80011F] stroke-[2.2]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a3 3 0 0 0-3 3c0 .8.4 1.5 1 2L2 14.5a1.5 1.5 0 0 0 1 2.5h18a1.5 1.5 0 0 0 1-2.5L14 7c.6-.5 1-1.2 1-2a3 3 0 0 0-3-3z" />
        <path d="M2 17h20" />
      </svg>
    ),
  },
  {
    id: 'clients',
    endVal: 500,
    suffix: '+',
    label: 'Happy Clients',
    icon: <Users className="w-6 h-6 sm:w-10 sm:h-10 text-[#80011F] stroke-[2.2]" />,
  },
  {
    id: 'variants',
    endVal: 20,
    suffix: '+',
    label: 'Product Variants',
    icon: <Layers className="w-6 h-6 sm:w-10 sm:h-10 text-[#80011F] stroke-[2.2]" />,
  },
  {
    id: 'delivery',
    isTextOnly: true,
    textVal: 'Pan-India',
    endVal: 1,
    suffix: '',
    label: 'Delivery Across India',
    icon: <MapPin className="w-6 h-6 sm:w-10 sm:h-10 text-[#80011F] stroke-[2.2]" />,
  },
];

export const AboutStatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.25, once: false });

  // Infinite Marquee looping set for mobile view
  const marqueeStats = [...statsList, ...statsList];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FAF5F2] py-6 sm:py-12 border-none overflow-hidden"
    >
      {/* =========================================================================
          1. DESKTOP VIEW: FULL 4-COLUMN HORIZONTAL GRID
          ========================================================================= */}
      <div className="hidden md:block w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200/90 items-center justify-between">
          {statsList.map((stat) => (
            <AnimatedStat
              key={stat.id}
              trigger={isInView}
              endVal={stat.endVal}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              isTextOnly={stat.isTextOnly}
              textVal={stat.textVal}
            />
          ))}
        </div>
      </div>

      {/* =========================================================================
          2. MOBILE VIEW: SINGLE ROW AUTO-SCROLL ANIMATION WITH COUNTING EFFECT
          - Cards aligned in a single horizontal row
          - Seamless continuous auto-scroll marquee, scrolling one by one
          - Preserves full counting animation effect as each stat enters view
          ========================================================================= */}
      <div
        className="block md:hidden w-full overflow-hidden relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <motion.div
          className="flex items-center gap-3 w-max py-2"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {marqueeStats.map((stat, idx) => (
            <div
              key={`${stat.id}-${idx}`}
              className="w-[260px] xs:w-[280px] shrink-0 flex items-center justify-center px-2 py-1 rounded-2xl bg-white/70 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-[#80011F]/5"
            >
              <AnimatedStat
                trigger={isInView}
                endVal={stat.endVal}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
                isTextOnly={stat.isTextOnly}
                textVal={stat.textVal}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStatsSection;
