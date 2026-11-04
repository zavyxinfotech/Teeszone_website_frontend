import React from 'react';
import { companyContact } from '@/data/navigation';
import { RevealAnimation } from '@/components/common/RevealAnimation';
import { Phone, Mail, MapPin, FileText, Clock } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <section className="py-8 bg-white border-y border-burgundy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* 1. Legal Entity & GSTIN matching Image 2 */}
          <RevealAnimation direction="up" delay={0.05}>
            <div className="p-5 rounded-2xl bg-warm-50 border border-burgundy-100 hover:bg-white hover:border-burgundy-300 hover:shadow-soft transition-all duration-300 flex items-start gap-3.5 h-full">
              <div className="w-11 h-11 rounded-xl bg-burgundy-50 border border-burgundy-100 text-burgundy-700 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-heading font-extrabold text-charcoal-400 uppercase tracking-wider">
                  Legal Entity & GSTIN
                </p>
                <p className="text-xs font-heading font-extrabold text-charcoal-900 mt-1 leading-snug">
                  {companyContact.legalEntity}
                </p>
                <p className="text-[11px] font-mono font-semibold text-burgundy-700 mt-1 bg-burgundy-50/80 px-2 py-0.5 rounded inline-block">
                  GSTIN: {companyContact.gstin}
                </p>
              </div>
            </div>
          </RevealAnimation>

          {/* 2. Direct Phone Lines matching Image 2 */}
          <RevealAnimation direction="up" delay={0.1}>
            <div className="p-5 rounded-2xl bg-warm-50 border border-burgundy-100 hover:bg-white hover:border-burgundy-300 hover:shadow-soft transition-all duration-300 flex items-start gap-3.5 h-full">
              <div className="w-11 h-11 rounded-xl bg-burgundy-50 border border-burgundy-100 text-burgundy-700 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-heading font-extrabold text-charcoal-400 uppercase tracking-wider">
                  Direct Phone Lines
                </p>
                <div className="mt-1 space-y-0.5">
                  <a
                    href={`tel:${companyContact.phone.replace(/\s+/g, '')}`}
                    className="block text-xs font-heading font-bold text-charcoal-900 hover:text-burgundy-700 transition-colors"
                  >
                    {companyContact.phoneDisplay}
                  </a>
                  <a
                    href={`tel:${companyContact.phoneSecondary.replace(/\s+/g, '')}`}
                    className="block text-xs font-heading font-bold text-charcoal-900 hover:text-burgundy-700 transition-colors"
                  >
                    {companyContact.phoneSecondary}
                  </a>
                </div>
                <p className="text-[10px] text-charcoal-500 mt-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-burgundy-600" />
                  <span>Mon – Sat, 9 AM – 7 PM</span>
                </p>
              </div>
            </div>
          </RevealAnimation>

          {/* 3. Official Email matching Image 2 */}
          <RevealAnimation direction="up" delay={0.15}>
            <a
              href={`mailto:${companyContact.email}`}
              className="p-5 rounded-2xl bg-warm-50 border border-burgundy-100 hover:bg-white hover:border-burgundy-300 hover:shadow-soft transition-all duration-300 flex items-start gap-3.5 h-full block"
            >
              <div className="w-11 h-11 rounded-xl bg-burgundy-50 border border-burgundy-100 text-burgundy-700 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-heading font-extrabold text-charcoal-400 uppercase tracking-wider">
                  Official Sales & Inquiry Email
                </p>
                <p className="text-xs sm:text-sm font-heading font-bold text-charcoal-900 hover:text-burgundy-700 transition-colors mt-1">
                  {companyContact.email}
                </p>
                <p className="text-[11px] text-charcoal-500 mt-1">
                  Inquiries & bulk quotations
                </p>
              </div>
            </a>
          </RevealAnimation>

          {/* 4. Corporate Head Office Location matching Image 2 */}
          <RevealAnimation direction="up" delay={0.2}>
            <div className="p-5 rounded-2xl bg-warm-50 border border-burgundy-100 hover:bg-white hover:border-burgundy-300 hover:shadow-soft transition-all duration-300 flex items-start gap-3.5 h-full">
              <div className="w-11 h-11 rounded-xl bg-burgundy-50 border border-burgundy-100 text-burgundy-700 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-heading font-extrabold text-charcoal-400 uppercase tracking-wider">
                  Corporate Head Office
                </p>
                <p className="text-xs font-heading font-bold text-charcoal-900 mt-1 leading-snug">
                  Texvalley, Erode
                </p>
                <p className="text-[11px] text-charcoal-600 mt-0.5 leading-snug">
                  #2155, Global Market, NH 544
                </p>
              </div>
            </div>
          </RevealAnimation>

        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
