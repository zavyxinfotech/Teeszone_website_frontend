import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigationLinks, companyContact } from '@/data/navigation';
import { productsData } from '@/data/products';
import { MapPin, Phone, Mail, ArrowUp, Heart, X, ShieldCheck, FileText } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5 sm:w-6 sm:h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <radialGradient id="instaGrad" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <path
      fill="url(#instaGrad)"
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
    />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5 sm:w-6 sm:h-6' }) => (
  <svg className={className} fill="#1877F2" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5 sm:w-6 sm:h-6' }) => (
  <svg className={className} fill="#FF0000" viewBox="0 0 24 24">
    <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5 sm:w-6 sm:h-6' }) => (
  <svg className={className} fill="#0A66C2" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const Footer: React.FC = () => {
  const [policyModal, setPolicyModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const privacyPoints = [
    {
      title: 'Proprietary Artwork & Tech Pack Security',
      desc: 'All custom artwork, vector logos, embroidery designs, and tech packs submitted to TeesZone remain strictly confidential and are protected against unauthorized reproduction or third-party sharing.',
    },
    {
      title: 'Corporate & Client Data Protection',
      desc: 'Corporate contact credentials, employee sizing rosters, GST registration details, and delivery locations are used exclusively for quotation, order manufacturing, and tax-compliant dispatch logistics.',
    },
    {
      title: 'Design Rights & Intellectual Property',
      desc: 'Clients retain 100% intellectual property ownership of their brand identity and emblems. TeesZone will only display finished production photography in client showcases with mutual consent.',
    },
    {
      title: 'Encrypted Digital Payments & Invoicing',
      desc: 'Commercial transactions, invoice settlements, and advance booking deposits are conducted through PCI-DSS certified encrypted gateways with strict security standards.',
    },
    {
      title: 'Zero Spam & Confidentiality Protocol',
      desc: 'TeesZone never sells, leases, rents, or exchanges corporate contact numbers or email databases with outside lead generation networks or third-party marketing entities.',
    },
  ];

  const termsPoints = [
    {
      title: 'Digital Mockup & Pre-Production Sign-Off',
      desc: 'Bulk apparel manufacturing commences solely following explicit written sign-off on digital mockups or physical fabric samples, validating precise fabric GSM, Pantone shades, and print placements.',
    },
    {
      title: 'Production Timelines & Tiered Volumes',
      desc: 'Manufacturing cycles follow standard 7–14 business day turnarounds across South India based on confirmed order quantities, custom finishes (embroidery, screen printing, sublimation), and proforma schedules.',
    },
    {
      title: 'Commercial Milestones & Payment Terms',
      desc: 'Custom manufacturing orders initiate upon receipt of a 50% mobilization advance, with the remaining 50% balance cleared prior to final quality dispatch from our Tiruppur facility.',
    },
    {
      title: 'AQL Quality Assurance & Defect Remediation',
      desc: 'Every production lot undergoes rigorous AQL multi-point inspection for dimensional stability, stitching strength, and wash-fastness. Any genuine manufacturing defects reported within 7 days receive priority replacement.',
    },
    {
      title: 'Insured Pan-India Logistics & Delivery',
      desc: 'Shipments are packed in protective moisture-resistant packaging and dispatched via reputed courier networks with real-time tracking IDs provided immediately upon dispatch.',
    },
  ];

  return (
    <footer className="bg-white border-t border-burgundy-100/70 pt-16 pb-8 text-charcoal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-burgundy-50">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-4 space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
            <Link to="/" className="inline-block" aria-label="TeesZone Home">
              <img loading="lazy" decoding="async" src="/assets/logo/teeszone-logo.webp"
                alt="TeesZone"
                className="h-14 sm:h-16 md:h-16 lg:h-[68px] w-auto object-contain mx-auto md:mx-0"
              />
            </Link>
            <p className="text-base text-charcoal-600 font-normal leading-relaxed max-w-sm mx-auto md:mx-0">
              Premium T-shirt manufacturer in Tiruppur, delivering high-quality custom apparel for
              businesses, organizations, events and brands across India.
            </p>

            {/* GSTIN Number */}
            <p className="text-xs sm:text-sm font-mono font-semibold text-charcoal-700 pt-0.5">
              GSTIN: 33AAMCT4535C1ZI
            </p>

            {/* Social Icons: Exact original logo colors and adjusted compact sizes */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href={companyContact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform p-1 inline-flex items-center justify-center"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href={companyContact.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform p-1 inline-flex items-center justify-center"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href={companyContact.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform p-1 inline-flex items-center justify-center"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href={companyContact.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform p-1 inline-flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3.5 text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="font-heading font-semibold text-charcoal-900 text-base tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-base font-normal flex flex-col items-center md:items-start">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-charcoal-600 hover:text-[#80011F] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Apparel Categories */}
          <div className="lg:col-span-3 space-y-3.5 text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="font-heading font-semibold text-charcoal-900 text-base tracking-wide uppercase">
              Apparel Categories
            </h3>
            <ul className="space-y-2.5 text-base font-normal flex flex-col items-center md:items-start">
              {productsData.map((prod) => (
                <li key={prod.id}>
                  <Link
                    to={`/category/${prod.category}`}
                    className="text-charcoal-600 hover:text-[#80011F] transition-colors inline-block py-0.5"
                  >
                    {prod.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details with Corporate Office */}
          <div className="lg:col-span-3 space-y-3.5 text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="font-heading font-semibold text-charcoal-900 text-base tracking-wide uppercase">
              Contact Us
            </h3>
            <div className="space-y-3.5 text-base text-charcoal-600 font-normal flex flex-col items-center md:items-start">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-[#80011F] font-normal text-base mb-1">
                  Corporate Office
                </span>
                <div className="flex items-center md:items-start justify-center md:justify-start gap-2.5 max-w-xs md:max-w-none">
                  <MapPin className="w-4 h-4 text-[#80011F] shrink-0 mt-1" />
                  <span className="font-normal">{companyContact.address}</span>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <Phone className="w-4 h-4 text-[#80011F] shrink-0" />
                <a
                  href={`tel:${companyContact.phone}`}
                  className="hover:text-[#80011F] transition-colors font-normal"
                >
                  {companyContact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <Mail className="w-4 h-4 text-[#80011F] shrink-0" />
                <a
                  href={`mailto:${companyContact.email}`}
                  className="hover:text-[#80011F] transition-colors font-normal"
                >
                  {companyContact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col lg:flex-row items-center justify-between text-sm text-charcoal-500 font-normal gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2">
            <p className="text-center sm:text-left">{companyContact.copyright}</p>
            <span className="hidden sm:inline text-charcoal-300">|</span>
            <p className="flex items-center justify-center gap-1 text-charcoal-500">
              <span>Developed with</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" aria-label="love" />
              <span>By</span>
              <a
                href="https://zavyx.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#002B5B] hover:text-[#001D3D] font-mono font-bold tracking-wider hover:underline transition-colors ml-0.5"
              >
                ZAVYX InfoTech
              </a>
            </p>
          </div>
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => setPolicyModal('privacy')}
              className="hover:text-[#80011F] transition-colors cursor-pointer font-normal"
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button
              onClick={() => setPolicyModal('terms')}
              className="hover:text-[#80011F] transition-colors cursor-pointer font-normal"
            >
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="ml-2 p-2 rounded-full bg-burgundy-50 text-[#80011F] hover:bg-[#80011F] hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Glassmorphism Modal for Privacy Policy & Terms and Conditions (No border, No shadow) */}
      {policyModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/40 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setPolicyModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-2xl text-charcoal-800 border-0 shadow-none transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-burgundy-100/60 mb-6">
              <div className="flex items-center gap-2.5">
                {policyModal === 'privacy' ? (
                  <ShieldCheck className="w-6 h-6 text-[#80011F]" />
                ) : (
                  <FileText className="w-6 h-6 text-[#80011F]" />
                )}
                <h3 className="font-heading font-black text-xl sm:text-2xl text-[#80011F] tracking-tight">
                  {policyModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
                </h3>
              </div>
              <button
                onClick={() => setPolicyModal(null)}
                className="p-1.5 rounded-full text-charcoal-500 hover:text-[#80011F] hover:bg-burgundy-50/70 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 5 Points Content Matching TeesZone Standards */}
            <div className="space-y-4">
              {(policyModal === 'privacy' ? privacyPoints : termsPoints).map((point, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-burgundy-50 text-[#80011F] font-heading font-bold text-xs shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-charcoal-900">
                      {point.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal-600 font-normal leading-relaxed mt-1">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-burgundy-100/60 flex items-center justify-between text-xs text-charcoal-500">
              <span>TeesZone Custom Apparel Standards</span>
              <button
                onClick={() => setPolicyModal(null)}
                className="px-5 py-2 rounded-full bg-[#80011F] text-white hover:bg-[#5B0116] transition-colors font-medium cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
