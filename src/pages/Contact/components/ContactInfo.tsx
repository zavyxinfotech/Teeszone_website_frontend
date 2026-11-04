import React from 'react';
import { companyContact } from '@/data/navigation';
import { RevealAnimation } from '@/components/common/RevealAnimation';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <section className="py-8 bg-white border-y border-burgundy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 1. Phone */}
          <RevealAnimation direction="up" delay={0.05}>
            <a
              href={`tel:${companyContact.phone}`}
              className="group p-5 rounded-2xl bg-warm-50 border border-burgundy-100 hover:bg-white hover:border-burgundy-300 hover:shadow-soft-lg transition-all duration-300 flex items-start gap-4 block"
            >
              <div className="w-12 h-12 rounded-xl bg-burgundy-700 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-heading font-extrabold text-charcoal-400 uppercase tracking-wider">
                  Call Us
                </p>
                <p className="text-sm font-heading font-bold text-charcoal-900 group-hover:text-burgundy-700 transition-colors mt-0.5">
                  {companyContact.phoneDisplay}
                </p>
                <p className="text-[11px] text-charcoal-500 mt-1">
                  {companyContact.hours}
                </p>
              </div>
            </a>
          </RevealAnimation>

          {/* 2. Email */}
          <RevealAnimation direction="up" delay={0.1}>
            <a
              href={`mailto:${companyContact.email}`}
              className="group p-5 rounded-2xl bg-warm-50 border border-burgundy-100 hover:bg-white hover:border-burgundy-300 hover:shadow-soft-lg transition-all duration-300 flex items-start gap-4 block"
            >
              <div className="w-12 h-12 rounded-xl bg-burgundy-700 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-heading font-extrabold text-charcoal-400 uppercase tracking-wider">
                  Email Us
                </p>
                <p className="text-sm font-heading font-bold text-charcoal-900 group-hover:text-burgundy-700 transition-colors mt-0.5">
                  {companyContact.email}
                </p>
                <p className="text-[11px] text-charcoal-500 mt-1">
                  We'll respond within 24 hrs
                </p>
              </div>
            </a>
          </RevealAnimation>

          {/* 3. Location */}
          <RevealAnimation direction="up" delay={0.15}>
            <div className="group p-5 rounded-2xl bg-warm-50 border border-burgundy-100 hover:bg-white hover:border-burgundy-300 hover:shadow-soft-lg transition-all duration-300 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-burgundy-700 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-heading font-extrabold text-charcoal-400 uppercase tracking-wider">
                  Our Location
                </p>
                <p className="text-sm font-heading font-bold text-charcoal-900 group-hover:text-burgundy-700 transition-colors mt-0.5">
                  {companyContact.address}
                </p>
                <p className="text-[11px] text-charcoal-500 mt-1">
                  Visit our office or factory
                </p>
              </div>
            </div>
          </RevealAnimation>

          {/* 4. WhatsApp */}
          <RevealAnimation direction="up" delay={0.2}>
            <a
              href={`https://wa.me/${companyContact.whatsapp}?text=Hello%20TeesZone%20team,%20I%20would%20like%20to%20inquire%20about%20custom%20bulk%20t-shirts.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 hover:bg-white hover:border-emerald-400 hover:shadow-soft-lg transition-all duration-300 flex items-start gap-4 block"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-heading font-extrabold text-emerald-800 uppercase tracking-wider">
                  WhatsApp
                </p>
                <p className="text-sm font-heading font-bold text-charcoal-900 group-hover:text-emerald-700 transition-colors mt-0.5">
                  {companyContact.whatsappDisplay}
                </p>
                <p className="text-[11px] text-emerald-700 mt-1 font-medium">
                  Quick inquiries & quotations
                </p>
              </div>
            </a>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};
