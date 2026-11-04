import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { categoryDetails, CategoryDetail } from '@/data/categoryDetails';
import { productCategories, ProductCategory } from '@/data/products';
import { QuoteCTA } from '@/components/sections/QuoteCTA';
import { Button } from '@/components/common/Button';
import {
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Clock,
  Layers,
  Award,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Shirt,
  HelpCircle,
} from 'lucide-react';

interface CategoryPageProps {
  forcedSlug?: ProductCategory;
  onOpenQuote?: () => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ forcedSlug, onOpenQuote }) => {
  const params = useParams<{ slug?: string; category?: string }>();
  const navigate = useNavigate();

  // Determine active slug from prop, route params, or default to 'corporate'
  const rawSlug = forcedSlug || params.slug || params.category || 'corporate';
  const slug = (rawSlug in categoryDetails ? rawSlug : 'corporate') as ProductCategory;
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
      {/* 1. HERO & BREADCRUMBS */}
      <section className="relative w-full pt-32 pb-14 sm:pt-36 sm:pb-18 lg:pt-40 lg:pb-20 bg-[#FAF7F2] border-b border-burgundy-100/60 overflow-hidden">
        {/* Ambient Silk Light Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy-100/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-warm-200/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm font-medium text-charcoal-500 mb-6"
          >
            <Link to="/" className="hover:text-burgundy-700 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-charcoal-400" />
            <Link to="/products" className="hover:text-burgundy-700 transition-colors">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-charcoal-400" />
            <span className="text-burgundy-700 font-semibold">{category.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy-50 border border-burgundy-200/70 text-burgundy-700 text-xs sm:text-sm font-heading font-semibold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-burgundy-700" />
                <span>{category.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-heading font-bold text-charcoal-900 leading-[1.14] tracking-tight">
                {category.h1}
              </h1>

              <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl font-normal">
                {category.overview}
              </p>

              {/* Quick Metrics Bar */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
                <div className="bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-burgundy-100 shadow-2xs">
                  <span className="text-[11px] text-charcoal-500 font-medium block">GSM Density</span>
                  <span className="text-sm sm:text-base font-heading font-bold text-burgundy-700">
                    {category.gsmRange}
                  </span>
                </div>

                <div className="bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-burgundy-100 shadow-2xs">
                  <span className="text-[11px] text-charcoal-500 font-medium block">Minimum Order</span>
                  <span className="text-sm sm:text-base font-heading font-bold text-burgundy-700">
                    {category.moq}
                  </span>
                </div>

                <div className="bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-burgundy-100 shadow-2xs">
                  <span className="text-[11px] text-charcoal-500 font-medium block">Sampling Time</span>
                  <span className="text-sm sm:text-base font-heading font-bold text-burgundy-700">
                    {category.samplingTime}
                  </span>
                </div>

                <div className="bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-burgundy-100 shadow-2xs">
                  <span className="text-[11px] text-charcoal-500 font-medium block">Production Slot</span>
                  <span className="text-sm sm:text-base font-heading font-bold text-burgundy-700">
                    {category.productionTime}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <Button
                  variant="primary"
                  size="md"
                  withArrow
                  onClick={handleQuoteClick}
                  className="rounded-full shadow-soft bg-burgundy-700 hover:bg-burgundy-800 text-white font-medium px-7 py-3 text-sm sm:text-base"
                >
                  Request Bulk Quote
                </Button>

                <Button
                  variant="outline"
                  size="md"
                  to="/contact?mode=inquiry"
                  className="rounded-full bg-white hover:bg-burgundy-50 border border-burgundy-200 text-burgundy-700 font-medium px-6 py-3 text-sm sm:text-base"
                >
                  Schedule Fabric Swatch
                </Button>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none aspect-square rounded-3xl bg-white p-6 sm:p-8 border border-burgundy-100/90 shadow-soft-lg flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-burgundy-50/50 via-warm-50/30 to-transparent pointer-events-none" />
                <img
                  src={category.heroImage}
                  alt={category.title}
                  className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-106"
                />
                <span className="absolute bottom-4 right-4 z-20 text-[11px] font-heading font-semibold text-burgundy-700 bg-white/95 px-3 py-1 rounded-full shadow-2xs border border-burgundy-100">
                  Tiruppur Direct Manufacturing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY SWITCHER PILLS (Browse all 5 categories without leaving page) */}
      <section className="sticky top-[68px] sm:top-[74px] z-30 bg-white/95 backdrop-blur-md border-b border-burgundy-100/70 shadow-xs py-3">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-charcoal-400 shrink-0 mr-1">
              Explore Categories:
            </span>
            {productCategories
              .filter((c) => c.id !== 'all')
              .map((cat) => {
                const isActive = cat.id === category.slug;
                return (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.id}`}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-heading font-semibold whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-burgundy-700 text-white shadow-soft'
                        : 'bg-warm-100/70 text-charcoal-700 hover:bg-burgundy-50 hover:text-burgundy-700'
                    }`}
                  >
                    {cat.label}
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* 3. FABRIC BLENDS & MATERIALS */}
      <section className="py-14 sm:py-18 lg:py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 px-3.5 py-1 rounded-full inline-block">
            Textile Engineering
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-charcoal-900">
            Engineered Fabrics for {category.title}
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600">
            Knitted from premium long-staple combed cotton and performance fibers in Tiruppur, our
            materials are pre-tested for color retention, dimensional stability, and breathability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {category.fabrics.map((fabric, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-burgundy-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-burgundy-50 flex items-center justify-center text-burgundy-700 mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-heading font-bold text-charcoal-900 mb-2">
                  {fabric.name}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {fabric.description}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-burgundy-50 flex items-center justify-between text-xs text-burgundy-700 font-semibold">
                <span>Lab-Tested Fastness</span>
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

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

      {/* 5. BEST APPLICATIONS & FACTORY ADVANTAGES */}
      <section className="py-14 sm:py-18 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Applications */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-burgundy-100 shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-burgundy-50 flex items-center justify-center text-burgundy-700 mb-4">
              <Shirt className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-heading font-bold text-charcoal-900 mb-3">
              Ideal Applications &amp; Use Cases
            </h3>
            <ul className="space-y-3">
              {category.applications.map((app, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700">
                  <CheckCircle2 className="w-4 h-4 text-burgundy-700 shrink-0 mt-0.5" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quality Highlights */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-burgundy-100 shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-burgundy-50 flex items-center justify-center text-burgundy-700 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-heading font-bold text-charcoal-900 mb-3">
              TeesZone Quality Guarantees
            </h3>
            <ul className="space-y-3">
              {category.keyHighlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700">
                  <CheckCircle2 className="w-4 h-4 text-burgundy-700 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-14 sm:py-18 bg-[#FAF7F2] border-t border-burgundy-100/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 px-3.5 py-1 rounded-full inline-block">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal-900">
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

