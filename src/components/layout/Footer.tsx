import React from 'react';
import { Link } from 'react-router-dom';
import { navigationLinks, companyContact } from '@/data/navigation';
import { productsData } from '@/data/products';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.802 13.4901H9.19795V21.5Z" />
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.48a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-burgundy-100/70 pt-16 pb-8 text-charcoal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-burgundy-50">
          {/* Brand & Overview (Centered on mobile, left-aligned on md+) */}
          <div className="lg:col-span-4 space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
            <Link to="/" className="inline-block" aria-label="TeesZone Home">
              <img
                src="/assets/logo/teeszone-logo.png"
                alt="TeesZone"
                className="h-10 w-auto object-contain mx-auto md:mx-0"
              />
            </Link>
            <p className="text-sm text-charcoal-600 leading-relaxed max-w-sm mx-auto md:mx-0">
              Premium T-shirt manufacturer in Tiruppur, delivering high-quality custom apparel for
              businesses, organizations, events and brands across India.
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-start gap-2.5 pt-2">
              <a
                href={companyContact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-burgundy-50 flex items-center justify-center text-burgundy-700 hover:bg-burgundy-700 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={companyContact.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-burgundy-50 flex items-center justify-center text-burgundy-700 hover:bg-burgundy-700 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={companyContact.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-burgundy-50 flex items-center justify-center text-burgundy-700 hover:bg-burgundy-700 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={companyContact.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-burgundy-50 flex items-center justify-center text-burgundy-700 hover:bg-burgundy-700 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Centered on mobile, left-aligned on md+) */}
          <div className="lg:col-span-2 space-y-3 text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="font-heading font-bold text-charcoal-900 text-sm tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm flex flex-col items-center md:items-start">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-charcoal-600 hover:text-burgundy-700 transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Apparel Categories (Centered on mobile, left-aligned on md+) */}
          <div className="lg:col-span-3 space-y-3 text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="font-heading font-bold text-charcoal-900 text-sm tracking-wide uppercase">
              Apparel Categories
            </h3>
            <ul className="space-y-2 text-sm flex flex-col items-center md:items-start">
              {productsData.map((prod) => (
                <li key={prod.id}>
                  <Link
                    to={`/category/${prod.category}`}
                    className="text-charcoal-600 hover:text-burgundy-700 transition-colors inline-block py-0.5"
                  >
                    {prod.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Centered on mobile, left-aligned on md+) */}
          <div className="lg:col-span-3 space-y-3 text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="font-heading font-bold text-charcoal-900 text-sm tracking-wide uppercase">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-charcoal-600 flex flex-col items-center md:items-start">
              <div className="flex items-center md:items-start justify-center md:justify-start gap-2.5 text-center md:text-left max-w-xs md:max-w-none">
                <MapPin className="w-4 h-4 text-burgundy-700 shrink-0 mt-0.5" />
                <span>{companyContact.address}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <Phone className="w-4 h-4 text-burgundy-700 shrink-0" />
                <a
                  href={`tel:${companyContact.phone}`}
                  className="hover:text-burgundy-700 transition-colors"
                >
                  {companyContact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <Mail className="w-4 h-4 text-burgundy-700 shrink-0" />
                <a
                  href={`mailto:${companyContact.email}`}
                  className="hover:text-burgundy-700 transition-colors"
                >
                  {companyContact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Centered on mobile, split on sm+) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 gap-4 text-center sm:text-left">
          <p className="text-center sm:text-left">{companyContact.copyright}</p>
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => alert('TeesZone guarantees the confidentiality of all client artwork, tech packs, and customer orders.')}
              className="hover:text-burgundy-700 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button
              onClick={() => alert('Standard manufacturing terms: pre-production sample approval, milestone payments, and insured nationwide delivery.')}
              className="hover:text-burgundy-700 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="ml-2 p-1.5 rounded-full bg-burgundy-50 text-burgundy-700 hover:bg-burgundy-700 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
