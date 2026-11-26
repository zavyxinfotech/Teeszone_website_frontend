import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { categoryDetails, CategoryDetail } from '@/data/categoryDetails';
import { ProductCategory } from '@/data/products';
import { QuoteCTA } from '@/components/sections/QuoteCTA';
import { Button } from '@/components/common/Button';
import { ClientUniformShowcase } from './components/ClientUniformShowcase';
import {
  Sparkles,
  ChevronDown,
  Layers,
  Package,
  Clock,
  Calendar,
  Factory,
  ArrowRight,
} from 'lucide-react';

interface CategoryPageProps {
  forcedSlug?: ProductCategory;
  onOpenQuote?: () => void;
}

const renderH1 = (text: string) => {
  if (text.includes('&')) {
    const parts = text.split('&');
    return (
      <>
        {parts[0].trim()} &amp; <br className="hidden sm:inline" />
        <span className="text-burgundy-700">{parts.slice(1).join('&').trim()}</span>
      </>
    );
  }
  const words = text.split(' ');
  if (words.length > 3) {
    const mid = Math.ceil(words.length / 2);
    return (
      <>
        {words.slice(0, mid).join(' ')} <br className="hidden sm:inline" />
        <span className="text-burgundy-700">{words.slice(mid).join(' ')}</span>
      </>
    );
  }
  return text;
};

export const CategoryPage: React.FC<CategoryPageProps> = ({ forcedSlug, onOpenQuote }) => {
  const params = useParams<{ slug?: string; category?: string }>();
  const navigate = useNavigate();

  // Determine active slug from prop, route params, or default to 'corporate'
  const rawSlug = forcedSlug || params.slug || params.category || 'corporate';
  const normalizedSlug =
    rawSlug === 'promotional' || rawSlug === 'promo' || rawSlug === 'events'
      ? 'promotional-events'
      : rawSlug === 'sports' || rawSlug === 'academics'
      ? 'sports-academics'
      : rawSlug;
  const slug = (normalizedSlug in categoryDetails ? normalizedSlug : 'corporate') as ProductCategory;
  const category: CategoryDetail = categoryDetails[slug];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleQuoteClick = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      navigate(`/contact?category=${category.slug}&mode=quote`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      {/* 1. HERO WITH LUXURY SATIN BACKDROP (Exact Layout from Reference Image 2) */}
      <section className="relative w-full pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-[#FAF6F4] border-b border-burgundy-100/60 select-none">
        {/* Full-width Luxury Flowing Satin Background (Image 1) */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <img loading="lazy" decoding="async" src="/assets/images/products/product-details-hero-bg.webp"
            alt="Products Details Hero Background"
            className="w-full h-full object-cover object-[72%_center] lg:object-center pointer-events-none select-none"
          />
          {/* Subtle ambient light gradient for optimal text contrast on left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F4]/90 via-[#FAF6F4]/60 sm:via-[#FAF6F4]/40 to-transparent lg:w-[62%] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6F4]/80 via-transparent to-[#FAF6F4]/40 sm:hidden pointer-events-none" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column matching Reference Image 2 */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              {/* Badge Pill with Sparkle (Positioned at Top) */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCECEF]/90 border border-[#80011F]/20 text-burgundy-700 text-xs sm:text-sm font-heading font-bold tracking-wider uppercase shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-burgundy-700" />
                <span>{category.badge}</span>
              </div>

              {/* H1 Headline with Two-Tone Burgundy Accent */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-heading font-extrabold text-charcoal-900 leading-[1.12] tracking-tight">
                {renderH1(category.h1)}
              </h1>

              {/* Subtitle / Overview */}
              <p className="text-sm sm:text-base lg:text-[17px] text-charcoal-700 leading-relaxed max-w-2xl font-normal">
                {category.overview}
              </p>

              {/* Metrics on Desktop: Minimal Clean 4-Column Layout matching Reference Image 2 */}
              <div className="hidden sm:grid grid-cols-4 gap-4 lg:gap-6 pt-3 pb-2 max-w-2xl border-t border-burgundy-100/60">
                {/* 1. GSM */}
                <div className="space-y-1">
                  <Layers className="w-6 h-6 text-burgundy-700 stroke-[1.8] mb-1.5" />
                  <span className="text-sm lg:text-base font-heading font-black text-charcoal-900 block">
                    {category.gsmRange}
                  </span>
                </div>

                {/* 2. Minimum Order */}
                <div className="space-y-1">
                  <Package className="w-6 h-6 text-burgundy-700 stroke-[1.8] mb-1.5" />
                  <span className="text-[11px] lg:text-xs text-charcoal-500 font-medium block">
                    Minimum Order
                  </span>
                  <span className="text-sm lg:text-base font-heading font-bold text-charcoal-900 block">
                    {category.moq}
                  </span>
                </div>

                {/* 3. Sampling Time */}
                <div className="space-y-1">
                  <Clock className="w-6 h-6 text-burgundy-700 stroke-[1.8] mb-1.5" />
                  <span className="text-[11px] lg:text-xs text-charcoal-500 font-medium block">
                    Sampling Time
                  </span>
                  <span className="text-sm lg:text-base font-heading font-bold text-charcoal-900 block">
                    {category.samplingTime}
                  </span>
                </div>

                {/* 4. Production Slot */}
                <div className="space-y-1">
                  <Calendar className="w-6 h-6 text-burgundy-700 stroke-[1.8] mb-1.5" />
                  <span className="text-[11px] lg:text-xs text-charcoal-500 font-medium block">
                    Production Slot
                  </span>
                  <span className="text-sm lg:text-base font-heading font-bold text-charcoal-900 block">
                    {category.productionTime}
                  </span>
                </div>
              </div>

              {/* Action Buttons (Desktop view) */}
              <div className="hidden sm:flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={handleQuoteClick}
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-heading font-semibold text-sm sm:text-base shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>Request Bulk Quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <Link
                  to="/contact?mode=inquiry"
                  className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-full bg-white/90 hover:bg-white text-burgundy-700 border border-burgundy-700/50 hover:border-burgundy-700 font-heading font-semibold text-sm sm:text-base shadow-2xs hover:shadow-soft transition-all duration-300 cursor-pointer"
                >
                  Schedule Fabric Swatch
                </Link>
              </div>
            </div>

            {/* Right Hero Image Column: Garment Cutout floating gracefully over Podium */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-[340px] xs:max-w-[400px] sm:max-w-[460px] lg:max-w-[500px] xl:max-w-[540px] flex items-center justify-center">
                <img loading="lazy" decoding="async" src={category.heroImage}
                  alt={category.title}
                  className="w-full h-auto max-h-[380px] xs:max-h-[440px] sm:max-h-[500px] lg:max-h-[540px] object-contain relative z-10 transition-transform duration-700 hover:scale-105 drop-shadow-[0_22px_36px_rgba(88,8,25,0.24)]"
                />
              </div>

              {/* Factory Verification Badge at Base of Pedestal */}
              <div className="mt-3 sm:mt-4 z-20">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/95 backdrop-blur-md text-burgundy-700 font-heading font-bold text-xs sm:text-sm shadow-soft border border-burgundy-100/90">
                  <Factory className="w-4 h-4 text-burgundy-700 shrink-0" />
                  <span>Tiruppur Direct Manufacturing</span>
                </div>
              </div>
            </div>

            {/* Mobile View: Vertical Metrics & Full-Width Action Buttons (Matching Reference Phone Mockup) */}
            <div className="sm:hidden col-span-1 space-y-4 pt-2">
              {/* Vertical Metrics List */}
              <div className="space-y-2.5 py-3 border-y border-burgundy-100/60">
                <div className="flex items-center gap-3">
                  <Layers className="w-5 h-5 text-burgundy-700 shrink-0 stroke-[1.8]" />
                  <span className="text-sm font-heading font-extrabold text-charcoal-900">
                    {category.gsmRange}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-burgundy-700 shrink-0 stroke-[1.8]" />
                  <span className="text-xs text-charcoal-600 font-medium">
                    Minimum Order: <strong className="text-charcoal-900 font-bold">{category.moq}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-burgundy-700 shrink-0 stroke-[1.8]" />
                  <span className="text-xs text-charcoal-600 font-medium">
                    Sampling Time: <strong className="text-charcoal-900 font-bold">{category.samplingTime}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-burgundy-700 shrink-0 stroke-[1.8]" />
                  <span className="text-xs text-charcoal-600 font-medium">
                    Production Slot: <strong className="text-charcoal-900 font-bold">{category.productionTime}</strong>
                  </span>
                </div>
              </div>

              {/* Action Buttons (Full-Width on Mobile) */}
              <div className="flex flex-col gap-3 pt-1">
                <button
                  onClick={handleQuoteClick}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-heading font-semibold text-sm shadow-soft transition-all cursor-pointer"
                >
                  <span>Request Bulk Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/contact?mode=inquiry"
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white text-burgundy-700 border border-burgundy-700/50 font-heading font-semibold text-sm shadow-2xs transition-all cursor-pointer text-center"
                >
                  Schedule Fabric Swatch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLIENT UNIFORM SHOWCASE (Corporate, School, Promotional & Events, Sports, and Blank Apparel) */}
      {(slug === 'corporate' ||
        slug === 'school' ||
        slug === 'promotional-events' ||
        slug === 'sports-academics' ||
        slug === 'blank') && <ClientUniformShowcase category={slug} />}

      {/* 4. BRANDING TECHNIQUES & SPECIFICATIONS */}
      <section className="py-14 sm:py-18 bg-[#FAF7F2] border-y border-burgundy-100/60">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Branding Techniques */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 px-3.5 py-1 rounded-full inline-block">
                  Customization
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal-900 mt-2">
                  Branding &amp; Embellishment Options
                </h2>
                <p className="text-sm sm:text-base text-charcoal-600 mt-1">
                  Every garment is customized to exact brand standards using automated printing and
                  embroidery machinery.
                </p>
              </div>

              <div className="space-y-4">
                {category.brandingTechniques.map((tech, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 border border-burgundy-100/80 shadow-2xs flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-full bg-burgundy-50 flex items-center justify-center text-burgundy-700 shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-charcoal-900">
                        {tech.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technical Specs Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-burgundy-100 shadow-soft">
              <h3 className="font-heading font-bold text-xl text-charcoal-900 mb-4 pb-3 border-b border-burgundy-100">
                Manufacturing Specifications
              </h3>
              <div className="space-y-4">
                {category.specs.map((spec, idx) => (
                  <div key={idx} className="pb-3 border-b border-burgundy-50 last:border-none">
                    <span className="text-xs font-heading font-semibold text-charcoal-500 block uppercase tracking-wider">
                      {spec.label}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-charcoal-900 block mt-0.5">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-burgundy-100">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleQuoteClick}
                  className="w-full justify-center rounded-xl bg-burgundy-700 hover:bg-burgundy-800 text-white font-medium py-3 text-sm"
                >
                  Start Custom Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-14 sm:py-18 bg-[#FAF7F2] border-t border-burgundy-100/60">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-14 items-center">
            {/* Left: 3D FAQ Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <img loading="lazy" decoding="async" src="/assets/images/faq-3d-illustration.webp"
                alt="Frequently Asked Questions Illustration"
                className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-full h-auto object-contain drop-shadow-md select-none"
              />
            </div>

            {/* Right: FAQ Content & Accordion */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 px-3.5 py-1 rounded-full inline-block">
                  Got Questions?
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal-900 mt-2">
                  Frequently Asked Questions About {category.title}
                </h2>
              </div>

              <div className="space-y-3.5">
                {category.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-burgundy-100/80 overflow-hidden shadow-2xs transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-5 text-left font-heading font-bold text-sm sm:text-base text-charcoal-900 hover:text-burgundy-700 transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-burgundy-700 transition-transform duration-200 shrink-0 ml-4 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-charcoal-600 leading-relaxed border-t border-burgundy-50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM QUOTE CTA */}
      <QuoteCTA
        title={`Ready to Order ${category.title}?`}
        subtitle="Submit your requirements to receive free 3D digital mockups, physical fabric swatches, and direct Tiruppur factory pricing within 24 hours."
        onOpenQuote={handleQuoteClick}
      />
    </div>
  );
};

export default CategoryPage;

