import React from 'react';
import { Button } from '@/components/common/Button';
import { WaveDivider } from '@/components/common/WaveDivider';
import { RevealAnimation } from '@/components/common/RevealAnimation';
import { ExternalLink } from 'lucide-react';
import { Cinematic3DReviews } from './Cinematic3DReviews';

interface QuoteCTAProps {
  title?: string;
  subtitle?: string;
  variant?: 'home' | 'about' | 'contact' | 'products';
  onOpenQuote?: () => void;
}

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=teeszone+clothing+private+limited+google+reviews&sca_esv=19979f682c69d8b4&sxsrf=AKL5yDjv2CRh-6O55mllzvFm6xvtFjeHbw%3A1794028012384&ei=7LHuasuLF4qehvcP46-Y0Ac&biw=1600&bih=773&uact=5&oq=teeszone+clothing+private+limited+google+reviews#lrd=0x3ba96bfd956d91c3:0xf353ec9ccd766328,1,,,,';

const GoogleIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

const StarRating = () => (
  <div className="flex items-center gap-0.5 text-[#FFC629]">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export const QuoteCTA: React.FC<QuoteCTAProps> = ({
  title = "Let's Create Your Custom T-Shirts",
  subtitle = 'Partner with TeesZone for high-quality, stylish and affordable T-shirts, uniforms and custom apparel for your business, team or event.',
  onOpenQuote,
}) => {
  return (
    <section className="relative bg-gradient-to-br from-[#73011c] via-[#4d0012] to-[#30000a] text-white overflow-hidden py-8 sm:py-10 md:py-12">
      {/* Wave transition at top */}
      <WaveDivider position="top" variant="white-to-burgundy" className="absolute top-0 inset-x-0" />

      {/* Subtle background ambient glow */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Side: Text and Actions (Exact as Reference Image 1) */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            <RevealAnimation direction="up">
              {/* Pills: Bulk Manufacturing + Google Reviews */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-3">
                <span className="inline-block text-xs uppercase font-heading font-bold tracking-wider px-3 py-1 rounded-full bg-white/10 text-warm-200 border border-white/20">
                  Bulk Manufacturing Made Simple
                </span>

                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-sm transition-all duration-300 group shadow-sm text-xs font-semibold text-white"
                  title="View verified reviews for TeesZone Clothing Private Limited on Google"
                >
                  <span className="p-0.5 rounded-full bg-white flex items-center justify-center shrink-0">
                    <GoogleIcon className="w-3.5 h-3.5" />
                  </span>
                  <StarRating />
                  <span className="text-[#FFC629] font-bold">5.0</span>
                  <span className="hidden sm:inline text-warm-100 font-medium">on Google</span>
                  <ExternalLink className="w-3 h-3 text-warm-200 group-hover:text-white transition-colors" />
                </a>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
                {title}
              </h2>
              <p className="text-sm sm:text-base text-burgundy-100 max-w-xl mx-auto lg:mx-0 mt-3 leading-relaxed">
                {subtitle}
              </p>
            </RevealAnimation>

            {/* CTA Buttons */}
            <RevealAnimation direction="up" delay={0.15}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Button
                  variant="white"
                  size="lg"
                  withArrow
                  onClick={onOpenQuote}
                  to={!onOpenQuote ? '/contact?mode=quote' : undefined}
                >
                  Get a Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  to="/contact"
                  className="border-white/80 text-white hover:bg-white hover:text-burgundy-700"
                  withArrow
                >
                  Contact Us
                </Button>
              </div>

              {/* Trust Proof Micro-Strip */}
              <div className="pt-3.5 flex items-center justify-center lg:justify-start gap-3">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-[#FF8C00] border-2 border-[#73011c] flex items-center justify-center text-[10px] font-bold text-burgundy-950 shadow-sm">
                    K
                  </div>
                  <div className="w-7 h-7 rounded-full bg-rose-400 border-2 border-[#73011c] flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                    S
                  </div>
                  <div className="w-7 h-7 rounded-full bg-emerald-500 border-2 border-[#73011c] flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                    P
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#0288D1] border-2 border-[#73011c] flex items-center justify-center text-[9px] font-extrabold text-white shadow-sm">
                    500+
                  </div>
                </div>
                <p className="text-xs text-burgundy-100 font-medium">
                  <span className="font-bold text-white">500+ Happy Brands &amp; Clients</span> across Tamil Nadu &amp; India
                </p>
              </div>
            </RevealAnimation>
          </div>

          {/* Right Side: Cinematic 3D Vertically Stacked Google Reviews (S-Wave Flow Alignment) */}
          <div className="lg:col-span-6 flex justify-center items-center w-full">
            <RevealAnimation direction="left" delay={0.2} className="w-full flex justify-center">
              <Cinematic3DReviews />
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};
