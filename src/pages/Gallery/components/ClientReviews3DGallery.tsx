import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  CheckCircle2,
  Plus,
  X,
  ChevronDown,
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
  const [showAllReviews, setShowAllReviews] = useState<boolean>(false);

  return (
    <section
      className="relative w-full min-h-[640px] py-14 lg:py-20 bg-[#F7E7CE] text-[#211D20] select-none z-20 flex flex-col justify-between overflow-hidden"
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

      {/* 1. TOP HEADER matching Reference Hierarchy */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 pt-2 mb-10 sm:mb-12">
        <span className="text-xs sm:text-sm font-heading font-extrabold uppercase tracking-widest text-burgundy-700 mb-1.5 block">
          VERIFIED CLIENT EXPERIENCES
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-heading font-black text-charcoal-900 tracking-tight leading-[1.12]">
          Trusted by Businesses Across India for{' '}
          <span className="text-burgundy-700">Custom T-Shirts</span> &amp; Corporate Apparel
        </h2>
        <p className="text-base sm:text-lg text-charcoal-600 max-w-2xl mx-auto mt-3 leading-relaxed font-normal">
          Explore genuine customer experiences with Teeszone&apos;s custom T-shirt printing, bulk apparel manufacturing and personalized corporate clothing solutions.
        </p>
      </div>

      {/* 2. ASYMMETRIC EDITORIAL BENTO GRID (Exact Alignment from Reference Image 1) */}
      <div className="relative z-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12">
        {/* Core Bento Section: Strict Mathematical Alignment matching Reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[230px] lg:auto-rows-[250px]">
          {/* Cell 1: Text Card 1 (Top Left) */}
          <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-7 bg-white/80 backdrop-blur-xs border border-[#80011F]/15 shadow-2xs text-left">
            <span className="text-[10px] sm:text-xs font-heading font-extrabold uppercase tracking-widest text-burgundy-700 mb-2 block">
              OUR CLIENT STORIES
            </span>
            <h3 className="text-base sm:text-lg lg:text-xl font-heading font-black text-charcoal-900 leading-snug mb-2">
              Apparel Crafted for Real Businesses
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
              From corporate executives to collegiate sports champions, every garment undergoes rigorous colorfastness, GSM density verification, and custom branding in Tiruppur.
            </p>
          </div>

          {/* Cell 2: Image 1 (Top Middle Landscape) */}
          {CLIENT_REVIEWS_DATA[0] && (
            <div
              onClick={() => setSelectedReview(CLIENT_REVIEWS_DATA[0])}
              className="relative group overflow-hidden bg-black shadow-soft cursor-pointer transition-all duration-300 rounded-none border border-black/10"
            >
              <img
                src={CLIENT_REVIEWS_DATA[0].image}
                alt={CLIENT_REVIEWS_DATA[0].clientName}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 group-hover:via-black/20 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/70 bg-black/40 backdrop-blur-xs flex items-center justify-center text-white mb-2 group-hover:scale-110 group-hover:bg-white group-hover:text-burgundy-700 transition-all shadow-md">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                </div>
                <p className="text-xs sm:text-sm font-heading font-black text-white uppercase tracking-widest drop-shadow-md max-w-[90%] truncate">
                  {CLIENT_REVIEWS_DATA[0].clientName}
                </p>
                <p className="text-[10px] sm:text-[11px] text-[#F7E7CE] font-semibold tracking-wider uppercase mt-0.5 max-w-[90%] truncate">
                  {CLIENT_REVIEWS_DATA[0].category}
                </p>
              </div>
            </div>
          )}

          {/* Cell 3: Image 2 (Top Right Tall Portrait - Spans 2 Rows on Desktop) */}
          {CLIENT_REVIEWS_DATA[1] && (
            <div
              onClick={() => setSelectedReview(CLIENT_REVIEWS_DATA[1])}
              className="relative group overflow-hidden bg-black shadow-soft cursor-pointer transition-all duration-300 rounded-none border border-black/10 md:row-span-2 row-span-1"
            >
              <img
                src={CLIENT_REVIEWS_DATA[1].image}
                alt={CLIENT_REVIEWS_DATA[1].clientName}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 group-hover:via-black/20 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/70 bg-black/40 backdrop-blur-xs flex items-center justify-center text-white mb-2 group-hover:scale-110 group-hover:bg-white group-hover:text-burgundy-700 transition-all shadow-md">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                </div>
                <p className="text-xs sm:text-sm font-heading font-black text-white uppercase tracking-widest drop-shadow-md max-w-[90%] truncate">
                  {CLIENT_REVIEWS_DATA[1].clientName}
                </p>
                <p className="text-[10px] sm:text-[11px] text-[#F7E7CE] font-semibold tracking-wider uppercase mt-0.5 max-w-[90%] truncate">
                  {CLIENT_REVIEWS_DATA[1].category}
                </p>
              </div>
            </div>
          )}

          {/* Cell 4: Image 3 (Row 2 Left Landscape) */}
          {CLIENT_REVIEWS_DATA[2] && (
            <div
              onClick={() => setSelectedReview(CLIENT_REVIEWS_DATA[2])}
              className="relative group overflow-hidden bg-black shadow-soft cursor-pointer transition-all duration-300 rounded-none border border-black/10"
            >
              <img
                src={CLIENT_REVIEWS_DATA[2].image}
                alt={CLIENT_REVIEWS_DATA[2].clientName}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 group-hover:via-black/20 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/70 bg-black/40 backdrop-blur-xs flex items-center justify-center text-white mb-2 group-hover:scale-110 group-hover:bg-white group-hover:text-burgundy-700 transition-all shadow-md">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                </div>
                <p className="text-xs sm:text-sm font-heading font-black text-white uppercase tracking-widest drop-shadow-md max-w-[90%] truncate">
                  {CLIENT_REVIEWS_DATA[2].clientName}
                </p>
                <p className="text-[10px] sm:text-[11px] text-[#F7E7CE] font-semibold tracking-wider uppercase mt-0.5 max-w-[90%] truncate">
                  {CLIENT_REVIEWS_DATA[2].category}
                </p>
              </div>
            </div>
          )}

          {/* Cell 5: Image 4 (Row 2 Middle Portrait - Spans Rows 2 & 3 on Desktop) */}
          {CLIENT_REVIEWS_DATA[3] && (
            <div
              onClick={() => setSelectedReview(CLIENT_REVIEWS_DATA[3])}
              className="relative group overflow-hidden bg-black shadow-soft cursor-pointer transition-all duration-300 rounded-none border border-black/10 md:row-span-2 row-span-1"
            >
              <img
                src={CLIENT_REVIEWS_DATA[3].image}
                alt={CLIENT_REVIEWS_DATA[3].clientName}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 group-hover:via-black/20 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/70 bg-black/40 backdrop-blur-xs flex items-center justify-center text-white mb-2 group-hover:scale-110 group-hover:bg-white group-hover:text-burgundy-700 transition-all shadow-md">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                </div>
                <p className="text-xs sm:text-sm font-heading font-black text-white uppercase tracking-widest drop-shadow-md max-w-[90%] truncate">
                  {CLIENT_REVIEWS_DATA[3].clientName}
                </p>
                <p className="text-[10px] sm:text-[11px] text-[#F7E7CE] font-semibold tracking-wider uppercase mt-0.5 max-w-[90%] truncate">
                  {CLIENT_REVIEWS_DATA[3].category}
                </p>
              </div>
            </div>
          )}

          {/* Cell 6: Image 5 (Row 3 Left Landscape) */}
          {CLIENT_REVIEWS_DATA[4] && (
            <div
              onClick={() => setSelectedReview(CLIENT_REVIEWS_DATA[4])}
              className="relative group overflow-hidden bg-black shadow-soft cursor-pointer transition-all duration-300 rounded-none border border-black/10"
            >
              <img
                src={CLIENT_REVIEWS_DATA[4].image}
                alt={CLIENT_REVIEWS_DATA[4].clientName}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 group-hover:via-black/20 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/70 bg-black/40 backdrop-blur-xs flex items-center justify-center text-white mb-2 group-hover:scale-110 group-hover:bg-white group-hover:text-burgundy-700 transition-all shadow-md">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                </div>
                <p className="text-xs sm:text-sm font-heading font-black text-white uppercase tracking-widest drop-shadow-md max-w-[90%] truncate">
                  {CLIENT_REVIEWS_DATA[4].clientName}
                </p>
                <p className="text-[10px] sm:text-[11px] text-[#F7E7CE] font-semibold tracking-wider uppercase mt-0.5 max-w-[90%] truncate">
                  {CLIENT_REVIEWS_DATA[4].category}
                </p>
              </div>
            </div>
          )}

          {/* Cell 7: Text Card 2 (Row 3 Right) */}
          <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-7 bg-white/80 backdrop-blur-xs border border-[#80011F]/15 shadow-2xs text-left">
            <span className="text-[10px] sm:text-xs font-heading font-extrabold uppercase tracking-widest text-burgundy-700 mb-2 block">
              PAN-INDIA TRUST
            </span>
            <h3 className="text-base sm:text-lg lg:text-xl font-heading font-black text-charcoal-900 leading-snug mb-2">
              500+ Organizations Nationwide
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
              Reliable delivery schedules, zero MOQ compromises for custom batches, and direct factory pricing trusted across India.
            </p>
          </div>

          {/* Cell 8: Image 6 (Row 4 Wide Panoramic - Spans 2 Columns on Desktop) */}
          {CLIENT_REVIEWS_DATA[5] && (
            <div
              onClick={() => setSelectedReview(CLIENT_REVIEWS_DATA[5])}
              className="relative group overflow-hidden bg-black shadow-soft cursor-pointer transition-all duration-300 rounded-none border border-black/10 md:col-span-2 col-span-1"
            >
              <img
                src={CLIENT_REVIEWS_DATA[5].image}
                alt={CLIENT_REVIEWS_DATA[5].clientName}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 group-hover:via-black/20 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/70 bg-black/40 backdrop-blur-xs flex items-center justify-center text-white mb-2 group-hover:scale-110 group-hover:bg-white group-hover:text-burgundy-700 transition-all shadow-md">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                </div>
                <p className="text-xs sm:text-sm font-heading font-black text-white uppercase tracking-widest drop-shadow-md max-w-[90%] truncate">
                  {CLIENT_REVIEWS_DATA[5].clientName}
                </p>
                <p className="text-[10px] sm:text-[11px] text-[#F7E7CE] font-semibold tracking-wider uppercase mt-0.5 max-w-[90%] truncate">
                  {CLIENT_REVIEWS_DATA[5].category}
                </p>
              </div>
            </div>
          )}

          {/* Cell 9: Image 7 (Row 4 Right Landscape) */}
          {CLIENT_REVIEWS_DATA[6] && (
            <div
              onClick={() => setSelectedReview(CLIENT_REVIEWS_DATA[6])}
              className="relative group overflow-hidden bg-black shadow-soft cursor-pointer transition-all duration-300 rounded-none border border-black/10"
            >
              <img
                src={CLIENT_REVIEWS_DATA[6].image}
                alt={CLIENT_REVIEWS_DATA[6].clientName}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 group-hover:via-black/20 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/70 bg-black/40 backdrop-blur-xs flex items-center justify-center text-white mb-2 group-hover:scale-110 group-hover:bg-white group-hover:text-burgundy-700 transition-all shadow-md">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                </div>
                <p className="text-xs sm:text-sm font-heading font-black text-white uppercase tracking-widest drop-shadow-md max-w-[90%] truncate">
                  {CLIENT_REVIEWS_DATA[6].clientName}
                </p>
                <p className="text-[10px] sm:text-[11px] text-[#F7E7CE] font-semibold tracking-wider uppercase mt-0.5 max-w-[90%] truncate">
                  {CLIENT_REVIEWS_DATA[6].category}
                </p>
              </div>
            </div>
          )}

          {/* Cell 10: Text Card 3 (Row 5 Left) */}
          <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-7 bg-white/80 backdrop-blur-xs border border-[#80011F]/15 shadow-2xs text-left">
            <span className="text-[10px] sm:text-xs font-heading font-extrabold uppercase tracking-widest text-burgundy-700 mb-2 block">
              TIRUPPUR DIRECT
            </span>
            <h3 className="text-base sm:text-lg lg:text-xl font-heading font-black text-charcoal-900 leading-snug mb-2">
              Factory Direct Quality
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
              State-of-the-art Japanese embroidery, automated screen printing, and certified reactive dyeing from our own production hubs.
            </p>
          </div>

          {/* Cell 11: Image 8 (Row 5 Middle Landscape) */}
          {CLIENT_REVIEWS_DATA[7] && (
            <div
              onClick={() => setSelectedReview(CLIENT_REVIEWS_DATA[7])}
              className="relative group overflow-hidden bg-black shadow-soft cursor-pointer transition-all duration-300 rounded-none border border-black/10"
            >
              <img
                src={CLIENT_REVIEWS_DATA[7].image}
                alt={CLIENT_REVIEWS_DATA[7].clientName}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 group-hover:via-black/20 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/70 bg-black/40 backdrop-blur-xs flex items-center justify-center text-white mb-2 group-hover:scale-110 group-hover:bg-white group-hover:text-burgundy-700 transition-all shadow-md">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                </div>
                <p className="text-xs sm:text-sm font-heading font-black text-white uppercase tracking-widest drop-shadow-md max-w-[90%] truncate">
                  {CLIENT_REVIEWS_DATA[7].clientName}
                </p>
                <p className="text-[10px] sm:text-[11px] text-[#F7E7CE] font-semibold tracking-wider uppercase mt-0.5 max-w-[90%] truncate">
                  {CLIENT_REVIEWS_DATA[7].category}
                </p>
              </div>
            </div>
          )}

          {/* Cell 12: Image 9 (Row 5 Right Landscape) */}
          {CLIENT_REVIEWS_DATA[8] && (
            <div
              onClick={() => setSelectedReview(CLIENT_REVIEWS_DATA[8])}
              className="relative group overflow-hidden bg-black shadow-soft cursor-pointer transition-all duration-300 rounded-none border border-black/10"
            >
              <img
                src={CLIENT_REVIEWS_DATA[8].image}
                alt={CLIENT_REVIEWS_DATA[8].clientName}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 group-hover:via-black/20 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/70 bg-black/40 backdrop-blur-xs flex items-center justify-center text-white mb-2 group-hover:scale-110 group-hover:bg-white group-hover:text-burgundy-700 transition-all shadow-md">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                </div>
                <p className="text-xs sm:text-sm font-heading font-black text-white uppercase tracking-widest drop-shadow-md max-w-[90%] truncate">
                  {CLIENT_REVIEWS_DATA[8].clientName}
                </p>
                <p className="text-[10px] sm:text-[11px] text-[#F7E7CE] font-semibold tracking-wider uppercase mt-0.5 max-w-[90%] truncate">
                  {CLIENT_REVIEWS_DATA[8].category}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Second Bento Section / Extended Reviews when expanded */}
        {showAllReviews && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[230px] lg:auto-rows-[250px] mt-3.5 sm:mt-4 lg:mt-5">
            {CLIENT_REVIEWS_DATA.slice(9).map((review, idx) => {
              // Asymmetric layout logic for seamless repeating pattern
              const isPanoramic = idx % 8 === 2;
              const isTall = idx % 8 === 4;

              return (
                <div
                  key={`more-review-${review.id}-${idx}`}
                  onClick={() => setSelectedReview(review)}
                  className={`relative group overflow-hidden bg-black shadow-soft cursor-pointer transition-all duration-300 rounded-none border border-black/10 ${isPanoramic
                      ? 'md:col-span-2 col-span-1'
                      : isTall
                        ? 'md:row-span-2 row-span-1'
                        : ''
                    }`}
                >
                  <img
                    src={review.image}
                    alt={review.clientName}
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 group-hover:via-black/20 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/70 bg-black/40 backdrop-blur-xs flex items-center justify-center text-white mb-2 group-hover:scale-110 group-hover:bg-white group-hover:text-burgundy-700 transition-all shadow-md">
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                    </div>
                    <p className="text-xs sm:text-sm font-heading font-black text-white uppercase tracking-widest drop-shadow-md max-w-[90%] truncate">
                      {review.clientName}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-[#F7E7CE] font-semibold tracking-wider uppercase mt-0.5 max-w-[90%] truncate">
                      {review.category}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Toggle to view all 29 client experiences */}
        <div className="text-center mt-8">
          <button
            type="button"
            onClick={() => setShowAllReviews(!showAllReviews)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/80 hover:bg-white text-burgundy-700 hover:text-burgundy-800 font-heading font-bold text-xs sm:text-sm border border-burgundy-200/80 shadow-xs hover:shadow-soft transition-all cursor-pointer"
          >
            <span>{showAllReviews ? 'Show Less Reviews' : `View All ${CLIENT_REVIEWS_DATA.length} Client Experiences`}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showAllReviews ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* 3. CTA BUTTON ALIGNED BELOW THE GRID */}
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
                <img loading="lazy" decoding="async" src={selectedReview.image}
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
