import React from 'react';
import { companyContact } from '@/data/navigation';
import { RevealAnimation } from '@/components/common/RevealAnimation';
import { Phone, Mail, MapPin, FileText, Clock } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <section className="py-10 bg-white border-b border-burgundy-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* 1. Legal Entity & GSTIN */}
          <RevealAnimation direction="up" delay={0.05}>
            <div className="p-2 flex items-start gap-4 h-full">
              <div className="text-burgundy-700 shrink-0 mt-1">
                <FileText className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-heading font-medium text-charcoal-500 uppercase tracking-wider">
                  Legal Entity &amp; GSTIN
                </p>
                <p className="text-sm sm:text-base font-heading font-medium text-charcoal-900 leading-snug">
                  TEESZONE CLOTHING PRIVATE LIMITED
                </p>
                <p className="text-sm sm:text-base font-mono font-medium text-burgundy-700">
                  GSTIN: 33AAMCT4535C1ZI
                </p>
              </div>
            </div>
          </RevealAnimation>

          {/* 2. Direct Phone Lines & Office Hours */}
          <RevealAnimation direction="up" delay={0.1}>
            <div className="p-2 flex items-start gap-4 h-full">
              <div className="text-burgundy-700 shrink-0 mt-1">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-xs sm:text-sm font-heading font-medium text-charcoal-500 uppercase tracking-wider">
                  Direct Phone Lines
                </p>
                <div className="space-y-0.5">
                  <a
                    href={`tel:${companyContact.phone.replace(/\s+/g, '')}`}
                    className="block text-sm sm:text-base font-medium text-charcoal-900 hover:text-burgundy-700 transition-colors"
                  >
                    {companyContact.phoneDisplay}
                  </a>
                  <a
                    href={`tel:${companyContact.phoneSecondary.replace(/\s+/g, '')}`}
                    className="block text-sm sm:text-base font-medium text-charcoal-900 hover:text-burgundy-700 transition-colors"
                  >
                    {companyContact.phoneSecondary}
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-600 font-normal pt-1 flex items-center gap-1.5 leading-snug">
                  <Clock className="w-3.5 h-3.5 text-burgundy-700 shrink-0" />
                  <span>Office hours: Monday – Saturday, 9:00 AM – 7:00 PM IST</span>
                </p>
              </div>
            </div>
          </RevealAnimation>

          {/* 3. Official Email */}
          <RevealAnimation direction="up" delay={0.15}>
            <a
              href={`mailto:${companyContact.email}`}
              className="p-2 flex items-start gap-4 h-full block"
            >
              <div className="text-burgundy-700 shrink-0 mt-1">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-heading font-medium text-charcoal-500 uppercase tracking-wider">
                  Official Sales &amp; Inquiry Email
                </p>
                <p className="text-sm sm:text-base font-medium text-charcoal-900 hover:text-burgundy-700 transition-colors leading-snug">
                  {companyContact.email}
                </p>
                <p className="text-xs sm:text-sm text-charcoal-600 font-normal">
                  Inquiries &amp; bulk quotations
                </p>
              </div>
            </a>
          </RevealAnimation>

          {/* 4. Corporate Head Office Location */}
          <RevealAnimation direction="up" delay={0.2}>
            <div className="p-2 flex items-start gap-4 h-full">
              <div className="text-burgundy-700 shrink-0 mt-1">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-heading font-medium text-charcoal-500 uppercase tracking-wider">
                  Corporate Head Office
                </p>
                <p className="text-sm sm:text-base font-heading font-medium text-charcoal-900 leading-snug">
                  Texvalley, Erode
                </p>
                <p className="text-xs sm:text-sm text-charcoal-600 font-normal leading-relaxed">
                  #2155, Fortune City, Global Market – Texvalley, NH 544 Bengaluru–Cochin National Highway, Chithode, Erode – 638 102, Tamil Nadu, India.
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