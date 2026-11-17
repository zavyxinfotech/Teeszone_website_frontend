import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Layers, MapPin } from 'lucide-react';

interface StatItemProps {
  endVal: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  trigger: boolean;
  isTextOnly?: boolean;
  textVal?: string;
}

const AnimatedStat: React.FC<StatItemProps> = ({
  endVal,
  suffix,
  label,
  sublabel,
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
    <div className="flex items-center justify-center gap-4 sm:gap-6 py-6 sm:py-8 px-4 flex-1">
      {/* Burgundy Outline Icon in Larger Size */}
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#80011F]/[0.06] flex items-center justify-center text-[#80011F] shrink-0">
        {icon}
      </div>

      <div className="text-left select-none">
        {/* Larger Number / Main Value */}
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-heading font-black text-charcoal-900 leading-none tracking-tight">
          {isTextOnly ? textVal : `${count}${suffix}`}
        </p>

        {/* Larger Label Text */}
        <p className="text-sm sm:text-base md:text-lg font-heading font-bold text-charcoal-700 tracking-wide mt-1.5 sm:mt-2">
          {label}
        </p>
      </div>
    </div>
  );
};

export const AboutStatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.35, once: false });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FAF5F2] py-8 sm:py-12 border-none overflow-hidden"
    >
      {/* Full Desktop Width Container without outer border */}
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200/90 items-center justify-between">
          
          {/* Stat 1: 10 Lakhs+ Garments Delivered */}
          <AnimatedStat
            trigger={isInView}
            endVal={10}
            suffix=" Lakhs+"
            label="Garments Delivered"
            sublabel=""
            icon={
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-[#80011F] stroke-[2.2]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a3 3 0 0 0-3 3c0 .8.4 1.5 1 2L2 14.5a1.5 1.5 0 0 0 1 2.5h18a1.5 1.5 0 0 0 1-2.5L14 7c.6-.5 1-1.2 1-2a3 3 0 0 0-3-3z" />
                <path d="M2 17h20" />
              </svg>
            }
          />

          {/* Stat 2: 500+ Happy Clients */}
          <AnimatedStat
            trigger={isInView}
            endVal={500}
            suffix="+"
            label="Happy Clients"
            sublabel=""
            icon={<Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#80011F] stroke-[2.2]" />}
          />

          {/* Stat 3: 20+ Product Variants */}
          <AnimatedStat
            trigger={isInView}
            endVal={20}
            suffix="+"
            label="Product Variants"
            sublabel=""
            icon={<Layers className="w-8 h-8 sm:w-10 sm:h-10 text-[#80011F] stroke-[2.2]" />}
          />

          {/* Stat 4: Pan-India Delivery */}
          <AnimatedStat
            trigger={isInView}
            isTextOnly
            textVal="Pan-India"
            endVal={1}
            suffix=""
            label="Delivery Across India"
            sublabel=""
            icon={<MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-[#80011F] stroke-[2.2]" />}
          />

        </div>
      </div>
    </section>
  );
};

export default AboutStatsSection;
