import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  CheckCircle2,
  ZoomIn,
  X,
} from 'lucide-react';
import { CLIENT_REVIEWS_DATA, ClientReviewItem } from '@/data/clientReviewsData';

interface ClientReviews3DGalleryProps {
  onOpenQuote?: () => void;
}

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=teeszone+clothing+private+limited+google+reviews#lrd=0x3ba96bfd956d91c3:0xf353ec9ccd766328,1,,,,';

// Official Google Multi-color G Icon
const GoogleGIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
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

const FiveStarRating = () => (
  <div className="flex items-center gap-0.5 text-[#FBBC04]" aria-label="5 out of 5 stars">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export const ClientReviews3DGallery: React.FC<ClientReviews3DGalleryProps> = () => {
  const [selectedReview, setSelectedReview] = useState<ClientReviewItem | null>(null);

  // Duplicated for seamless infinite continuous auto-scroll loop
  const marqueeReviews = useMemo(() => [...CLIENT_REVIEWS_DATA, ...CLIENT_REVIEWS_DATA], []);

  return (
    <section
      className="relative w-full min-h-[640px] py-12 lg:py-16 bg-[#F7E7CE] text-[#211D20] select-none z-20 flex flex-col justify-between overflow-hidden"
      aria-label="TeesZone Genuine Client Reviews Showcase"
    >
      {/* Background radial gradient & subtle grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 65% 50%, rgba(255,255,255,0.85) 0%, rgba(247,231,206,0.72) 45%, rgba(240,218,185,0.52) 100%)',
          }}
        />
        <div
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl opacity-20"
          style={{
            background:
              'radial-gradient(circle, rgba(128,1,31,0.18) 0%, rgba(128,1,31,0.04) 60%, transparent 80%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #80011F 1px, transparent 1px), linear-gradient(to bottom, #80011F 1px, transparent 1px)',
            backgroundSize: 'calc(100% / 6) calc(100% / 4)',
          }}
        />
      </div>

      {/* 1. TOP HEADER */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 pt-4 mb-2">
        <div className="text-xs sm:text-[13px] font-heading font-extrabold tracking-widest text-[#80011F] uppercase mb-1.5">
          VERIFIED CLIENT EXPERIENCES
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-heading font-black text-[#211D20] tracking-tight leading-[1.25]">
          Trusted by Businesses Across India for{' '}
          <span className="text-[#80011F]">Custom T-Shirts</span> &amp; Corporate Apparel
        </h2>
        <p className="text-xs sm:text-sm text-[#554D56] max-w-2xl mx-auto mt-2 leading-relaxed">
          Explore genuine customer experiences with Teeszone&apos;s custom T-shirt printing, bulk apparel manufacturing and personalized corporate clothing solutions.
        </p>
      </div>

      {/* 2. CONTINUOUS AUTO-SCROLLING HORIZONTAL MARQUEE (LEFT TO RIGHT) */}
      <div
        className="relative z-20 w-full overflow-hidden py-10 sm:py-14 my-auto"
        style={{ perspective: '1200px' }}
      >
        <motion.div
          className="flex items-center gap-4 sm:gap-6 w-max pl-4"
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 50,
              ease: 'linear',
            },
          }}
        >
          {marqueeReviews.map((review, idx) => {
            // Alternate wave vertical offset: even index shifted up (-20px), odd index shifted down (+20px)
            const alternateY = idx % 2 === 0 ? -20 : 20;

            return (
              <div
                key={`marquee-card-${review.id}-${idx}`}
                style={{
                  transform: `translateY(${alternateY}px)`,
                }}
                onClick={() => setSelectedReview(review)}
                className="relative shrink-0 w-[270px] sm:w-[330px] md:w-[360px] h-[180px] sm:h-[220px] md:h-[240px] overflow-hidden bg-black shadow-[0_12px_28px_rgba(0,0,0,0.22)] cursor-pointer group transition-all duration-300 rounded-none border-0 p-0 hover:scale-105 hover:z-30"
              >
                <img
                  src={review.image}
                  alt={review.clientName}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Client caption overlay */}
                <div className="absolute bottom-2.5 inset-x-3 text-left truncate">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FBBC04] shrink-0" />
                    <p className="text-sm sm:text-base font-heading font-extrabold text-white truncate drop-shadow-sm">
                      {review.clientName}
                    </p>
                  </div>
                  <p className="text-xs text-[#F7E7CE] font-medium truncate mt-0.5">
                    {review.category}
                  </p>
                </div>

                <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* 3. CTA BUTTON ALIGNED BELOW THE CARDS */}
      <div className="relative z-20 text-center pt-2 pb-4">
        <div className="flex items-center justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#80011F] via-[#940024] to-[#6d001a] hover:from-[#6d001a] hover:to-[#550015] text-white font-heading font-bold text-xs sm:text-sm shadow-lg shadow-[#80011F]/25 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 border border-white/25 cursor-pointer"
            aria-label="Explore Our Google Reviews for TeesZone Clothing Private Limited"
          >
            <GoogleGIcon className="w-4 h-4" />
            <span>Explore Our Google Reviews</span>
            <ExternalLink className="w-4 h-4 text-white/80" />
          </a>
        </div>
      </div>

      {/* FULL-SCREEN HIGH-RESOLUTION LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedReview && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedReview.clientName} client review order details`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedReview(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-[#FFFDF9] rounded-none overflow-hidden shadow-2xl border-2 border-[#80011F]/20 p-5 sm:p-6 text-[#211D20]"
            >
              <button
                type="button"
                onClick={() => setSelectedReview(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#80011F]/10 hover:bg-[#80011F] text-[#80011F] hover:text-white flex items-center justify-center transition-colors cursor-pointer z-10"
                aria-label="Close review details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[4/3] w-full overflow-hidden mb-4 bg-black/5 border border-black/10">
                <img
                  src={selectedReview.image}
                  alt={selectedReview.clientName}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-heading font-black text-[#211D20]">
                      {selectedReview.clientName}
                    </h3>
                    <CheckCircle2 className="w-5 h-5 text-[#80011F]" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#554D56] font-medium mt-0.5">
                    Order Category: <span className="font-bold text-[#80011F]">{selectedReview.category}</span>
                  </p>
                  <div className="mt-1 flex items-center gap-1.5">
                    <FiveStarRating />
                    <span className="text-xs text-[#554D56] font-semibold">5.0 Verified Client Experience</span>
                  </div>
                </div>

                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#80011F] hover:bg-[#680119] text-white text-xs font-heading font-bold shadow-md transition-all self-start sm:self-center shrink-0 cursor-pointer"
                >
                  <GoogleGIcon className="w-3.5 h-3.5" />
                  <span>Verify on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClientReviews3DGallery;