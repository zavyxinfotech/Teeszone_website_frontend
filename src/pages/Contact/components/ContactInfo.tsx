import React from 'react';
import { companyContact } from '@/data/navigation';
import { RevealAnimation } from '@/components/common/RevealAnimation';
import { Phone, Mail, MapPin, FileText, Clock } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#73011c] via-[#4d0012] to-[#30000a] text-white overflow-hidden py-10 sm:py-12 md:py-14">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          
          {/* 1. Legal Entity & GSTIN */}
          <RevealAnimation direction="up" delay={0.05}>
            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.07] backdrop-blur-xs border border-white/10 hover:bg-white/[0.12] hover:border-white/25 hover:shadow-soft transition-all duration-300 flex items-start gap-4 h-full">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 text-[#FFC1D0] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 flex-1">
                <p className="text-[11px] sm:text-xs font-heading font-extrabold text-[#FFC1D0] uppercase tracking-wider">
                  Legal Entity &amp; GSTIN
                </p>
                <p className="text-sm sm:text-base font-heading font-bold text-white leading-snug">
                  {companyContact.legalEntity}
                </p>
                <p className="text-xs sm:text-sm font-mono font-semibold text-white/95 bg-white/10 px-2.5 py-0.5 rounded border border-white/15 inline-block">
                  GSTIN: {companyContact.gstin}
                </p>
              </div>
            </div>
          </RevealAnimation>

          {/* 2. Direct Phone Lines & Office Hours */}
          <RevealAnimation direction="up" delay={0.1}>
            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.07] backdrop-blur-xs border border-white/10 hover:bg-white/[0.12] hover:border-white/25 hover:shadow-soft transition-all duration-300 flex items-start gap-4 h-full">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 text-[#FFC1D0] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1 space-y-1.5">
                <p className="text-[11px] sm:text-xs font-heading font-extrabold text-[#FFC1D0] uppercase tracking-wider">
                  Direct Phone Lines
                </p>
                <div className="space-y-1">
                  <a
                    href={`tel:${companyContact.phone.replace(/\s+/g, '')}`}
                    className="block text-sm sm:text-base font-heading font-bold text-white hover:text-[#FFC1D0] transition-colors leading-tight"
                  >
                    {companyContact.phoneDisplay}
                  </a>
                  <a
                    href={`tel:${companyContact.phoneSecondary.replace(/\s+/g, '')}`}
                    className="block text-sm sm:text-base font-heading font-bold text-white hover:text-[#FFC1D0] transition-colors leading-tight"
                  >
                    {companyContact.phoneSecondary}
                  </a>
                </div>
                <p className="text-xs text-rose-100/80 font-normal pt-1 flex items-center gap-1.5 leading-snug">
                  <Clock className="w-3.5 h-3.5 text-[#FFC1D0] shrink-0" />
                  <span>Mon – Sat, 9:00 AM – 7:00 PM IST</span>
                </p>
              </div>
            </div>
          </RevealAnimation>

          {/* 3. Official Email */}
          <RevealAnimation direction="up" delay={0.15}>
            <a
              href={`mailto:${companyContact.email}`}
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.07] backdrop-blur-xs border border-white/10 hover:bg-white/[0.12] hover:border-white/25 hover:shadow-soft transition-all duration-300 flex items-start gap-4 h-full block group"
            >
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 text-[#FFC1D0] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 flex-1">
                <p className="text-[11px] sm:text-xs font-heading font-extrabold text-[#FFC1D0] uppercase tracking-wider">
                  Official Inquiry Email
                </p>
                <p className="text-sm sm:text-base font-heading font-bold text-white group-hover:text-[#FFC1D0] transition-colors leading-snug break-all">
                  {companyContact.email}
                </p>
                <p className="text-xs text-rose-100/80 font-normal">
                  Inquiries &amp; bulk quotations
                </p>
              </div>
            </a>
          </RevealAnimation>

          {/* 4. Corporate Head Office Location */}
          <RevealAnimation direction="up" delay={0.2}>
            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.07] backdrop-blur-xs border border-white/10 hover:bg-white/[0.12] hover:border-white/25 hover:shadow-soft transition-all duration-300 flex items-start gap-4 h-full">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 text-[#FFC1D0] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 flex-1">
                <p className="text-[11px] sm:text-xs font-heading font-extrabold text-[#FFC1D0] uppercase tracking-wider">
                  Corporate Head Office
                </p>
                <p className="text-sm sm:text-base font-heading font-bold text-white leading-snug">
                  Texvalley, Erode
                </p>
                <p className="text-xs text-rose-100/80 font-normal leading-relaxed">
                  #2155, Fortune City, Global Market – Texvalley, NH 544 National Highway, Chithode, Erode – 638 102.
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
