import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Sparkles, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

interface OurClientsProps {
  className?: string;
  theme?: 'light' | 'dark';
}

const clientHighlights = [
  { name: 'Panasonic', category: 'Consumer Tech' },
  { name: 'Siemens', category: 'Engineering' },
  { name: 'Sony', category: 'Electronics' },
  { name: 'Dyson', category: 'Innovation' },
  { name: 'Haier', category: 'Appliances' },
  { name: 'Dolby', category: 'Media Tech' },
  { name: 'Fujifilm', category: 'Optics' },
  { name: 'Midea', category: 'Global Home' },
  { name: 'Hisense', category: 'Displays' },
  { name: 'Konica Minolta', category: 'Enterprise' },
];

export const OurClients: React.FC<OurClientsProps> = ({ className }) => {
  return (
    <section
      className={cn(
        'relative w-full overflow-hidden bg-[#FAF7F2] py-16 sm:py-20 md:py-24 border-t border-burgundy-100/60',
        className
      )}
    >
      {/* Ambient Silk Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-burgundy-100/25 via-rose-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy-50 border border-burgundy-200/70 text-burgundy-700 text-xs sm:text-sm font-heading font-semibold tracking-wide uppercase shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-burgundy-700" />
            <span>— 3,000+ TRUSTED ENTERPRISES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-charcoal-900 leading-[1.15] tracking-tight"
          >
            Powering Custom Apparel for{' '}
            <span className="text-burgundy-700">3000+ Industry Leaders</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            From global electronics giants and multinational corporations to emerging enterprises,
            TeesZone is the trusted apparel partner for high-precision corporate uniforms and custom merchandise.
          </motion.p>
        </div>

        {/* Honeycomb Client Artwork Display (Exact Match to Reference Image 1) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 sm:mt-14 relative mx-auto max-w-5xl group"
        >
          {/* Card Wrapper with Luxury Satin Shadow and Border */}
          <div className="relative rounded-3xl sm:rounded-[32px] overflow-hidden bg-white/80 p-2 sm:p-3.5 border border-burgundy-100/80 shadow-[0_20px_50px_rgba(128,0,32,0.08)] backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_25px_60px_rgba(128,0,32,0.14)]">
            <div className="relative rounded-2xl sm:rounded-[26px] overflow-hidden bg-[#FAF4EE]">
              <picture className="w-full block">
                <source
                  type="image/webp"
                  srcSet="/assets/images/clients/our-clients-honeycomb.webp"
                />
                <img
                  src="/assets/images/clients/our-clients-honeycomb.jpg"
                  alt="3000+ Clients - Panasonic, Siemens, Sony, Dyson, Haier, Dolby, Fujifilm, Rinnai, Hisense and more"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.015]"
                />
              </picture>
            </div>
          </div>
        </motion.div>

        {/* Bottom Trust Indicators Row */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-burgundy-100/60 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-center gap-2.5 sm:gap-3 text-left">
            <div className="w-9 h-9 rounded-full bg-burgundy-50 flex items-center justify-center text-burgundy-700 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-heading font-bold text-charcoal-900 block leading-tight">
                Enterprise Grade
              </span>
              <span className="text-[11px] sm:text-xs text-charcoal-600">Strict NDA &amp; Quality</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 text-left">
            <div className="w-9 h-9 rounded-full bg-burgundy-50 flex items-center justify-center text-burgundy-700 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-heading font-bold text-charcoal-900 block leading-tight">
                Direct Tiruppur Pricing
              </span>
              <span className="text-[11px] sm:text-xs text-charcoal-600">Zero Middlemen</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 text-left">
            <div className="w-9 h-9 rounded-full bg-burgundy-50 flex items-center justify-center text-burgundy-700 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-heading font-bold text-charcoal-900 block leading-tight">
                On-Time SLA
              </span>
              <span className="text-[11px] sm:text-xs text-charcoal-600">99.8% Scheduled Delivery</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 text-left">
            <div className="w-9 h-9 rounded-full bg-burgundy-50 flex items-center justify-center text-burgundy-700 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-heading font-bold text-charcoal-900 block leading-tight">
                End-to-End Service
              </span>
              <span className="text-[11px] sm:text-xs text-charcoal-600">Design to Doorstep</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;

