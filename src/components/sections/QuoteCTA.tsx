import React, { useState, useEffect } from 'react';
import { Button } from '@/components/common/Button';
import { WaveDivider } from '@/components/common/WaveDivider';
import { RevealAnimation } from '@/components/common/RevealAnimation';
import { CheckCircle2, ShieldCheck, Factory, Truck, ExternalLink } from 'lucide-react';

interface QuoteCTAProps {
  title?: string;
  subtitle?: string;
  variant?: 'home' | 'about' | 'contact' | 'products';
  onOpenQuote?: () => void;
}

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=teeszone+clothing+private+limited+google+reviews&sca_esv=19979f682c69d8b4&sxsrf=AKL5yDjv2CRh-6O55mllzvFm6xvtFjeHbw%3A1794028012384&ei=7LHuasuLF4qehvcP46-Y0Ac&biw=1600&bih=773&uact=5&oq=teeszone+clothing+private+limited+google+reviews#lrd=0x3ba96bfd956d91c3:0xf353ec9ccd766328,1,,,,';

const GoogleIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
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
  <div className="flex items-center gap-0.5 text-amber-400">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const GOOGLE_REVIEWS = [
  {
    name: 'Karthik Raja',
    role: 'Corporate HR & Procurement',
    rating: 5,
    text: 'Ordered 350+ customized polo t-shirts with embroidered company logos. Fabric quality (bio-wash combed cotton) and fitting are top-notch. Delivered 2 days ahead of our corporate event!',
    tag: 'Verified Corporate Buyer',
  },
  {
    name: 'Suresh Kumar',
    role: 'Event Director',
    rating: 5,
    text: 'Outstanding quality and on-time bulk delivery from their Texvalley facility. Screen print durability is excellent even after multiple washes. Best apparel manufacturer in Tiruppur & Erode.',
    tag: 'Verified Event Client',
  },
  {
    name: 'Praveen Murugan',
    role: 'Institution Coordinator',
    rating: 5,
    text: 'Superb responsiveness and transparent factory pricing! Managed our urgent order of 500 round neck tees flawlessly. The entire team loved the vibrant colors and breathable fabric.',
    tag: 'Verified Client',
  },
];

export const QuoteCTA: React.FC<QuoteCTAProps> = ({
  title = "Let's Create Your Custom T-Shirts",
  subtitle = 'Partner with TeesZone for high-quality, stylish and affordable T-shirts, uniforms and custom apparel for your business, team or event.',
  onOpenQuote,
}) => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  // Auto-cycle through reviews every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReviewIndex((prev) => (prev + 1) % GOOGLE_REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeReview = GOOGLE_REVIEWS[activeReviewIndex];

  return (
    <section className="relative bg-burgundy-700 text-white overflow-hidden pt-12 pb-14 md:py-16">
      {/* Wave transition at top */}
      <WaveDivider position="top" variant="white-to-burgundy" className="absolute top-0 inset-x-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text and Actions */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <RevealAnimation direction="up">
              {/* Trust Pill: Google Reviews Link & Star Rating */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-3">
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
                  <span className="text-amber-300 font-bold">5.0</span>
                  <span className="hidden sm:inline text-warm-100 font-medium">on Google</span>
                  <ExternalLink className="w-3 h-3 text-warm-200 group-hover:text-white transition-colors" />
                </a>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
                {title}
              </h2>
              <p className="text-base sm:text-lg text-burgundy-100 max-w-xl mx-auto lg:mx-0 mt-3 leading-relaxed">
                {subtitle}
              </p>
            </RevealAnimation>

            {/* CTA Buttons */}
            <RevealAnimation direction="up" delay={0.15}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
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
              <div className="pt-3 flex items-center justify-center lg:justify-start gap-3">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-amber-500 border-2 border-burgundy-700 flex items-center justify-center text-[10px] font-bold text-burgundy-950 shadow-sm">
                    K
                  </div>
                  <div className="w-7 h-7 rounded-full bg-rose-400 border-2 border-burgundy-700 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                    S
                  </div>
                  <div className="w-7 h-7 rounded-full bg-emerald-500 border-2 border-burgundy-700 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                    P
                  </div>
                  <div className="w-7 h-7 rounded-full bg-sky-500 border-2 border-burgundy-700 flex items-center justify-center text-[9px] font-extrabold text-white shadow-sm">
                    500+
                  </div>
                </div>
                <p className="text-xs text-burgundy-100 font-medium">
                  <span className="font-bold text-white">500+ Happy Brands &amp; Clients</span> across Tamil Nadu &amp; India
                </p>
              </div>
            </RevealAnimation>
          </div>

          {/* Editorial Visual + Live Floating Google Review Card */}
          <div className="lg:col-span-5 flex justify-center">
            <RevealAnimation direction="left" delay={0.2}>
              <div className="relative max-w-md w-full pb-8 sm:pb-6">
                {/* Main Visual */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
                  <img
                    src="/assets/images/hanging-tees.webp"
                    alt="TeesZone custom branded t-shirt manufacturing lineup"
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-semibold text-warm-200 tracking-wide">
                      Tiruppur Quality Guaranteed • Custom Embroidery &amp; Prints
                    </span>
                  </div>
                </div>

                {/* Floating Glassmorphic Google Review Card */}
                <div className="relative sm:absolute -mt-6 sm:mt-0 sm:-bottom-5 sm:-left-6 sm:right-6 bg-burgundy-950/95 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl transition-all duration-500 z-20">
                  {/* Review Header */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 text-white font-bold text-xs flex items-center justify-center shadow-md shrink-0">
                        {activeReview.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white leading-tight">
                          {activeReview.name}
                        </p>
                        <p className="text-[10px] text-burgundy-200">
                          {activeReview.role}
                        </p>
                      </div>
                    </div>

                    <a
                      href={GOOGLE_REVIEWS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-full bg-white shadow-sm shrink-0 hover:scale-110 transition-transform"
                      title="Read review on Google"
                    >
                      <GoogleIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Rating + Tag */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <StarRating />
                      <span className="text-[11px] font-bold text-amber-300">5.0</span>
                    </div>
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                      {activeReview.tag}
                    </span>
                  </div>

                  {/* Review Quote */}
                  <p className="text-[11px] text-burgundy-100 leading-relaxed italic line-clamp-3 min-h-[3rem]">
                    "{activeReview.text}"
                  </p>

                  {/* Review Footer with pagination dots and direct Google link */}
                  <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/10 text-[10px]">
                    <div className="flex items-center gap-1.5">
                      {GOOGLE_REVIEWS.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveReviewIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === activeReviewIndex
                              ? 'bg-amber-400 w-4'
                              : 'bg-white/30 hover:bg-white/60'
                          }`}
                          aria-label={`View review ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <a
                      href={GOOGLE_REVIEWS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-200 hover:text-white underline underline-offset-2 font-medium flex items-center gap-1"
                    >
                      <span>Read on Google</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>

        {/* 4 Bottom Micro-Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/15">
          <div className="flex items-center gap-2.5 justify-center lg:justify-start text-xs sm:text-sm text-warm-100 font-medium">
            <ShieldCheck className="w-4 h-4 text-warm-300 shrink-0" />
            <span>Quality Products</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center lg:justify-start text-xs sm:text-sm text-warm-100 font-medium">
            <CheckCircle2 className="w-4 h-4 text-warm-300 shrink-0" />
            <span>Custom Solutions</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center lg:justify-start text-xs sm:text-sm text-warm-100 font-medium">
            <Factory className="w-4 h-4 text-warm-300 shrink-0" />
            <span>Bulk Production</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center lg:justify-start text-xs sm:text-sm text-warm-100 font-medium">
            <Truck className="w-4 h-4 text-warm-300 shrink-0" />
            <span>On-Time Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
