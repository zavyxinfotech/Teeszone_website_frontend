import React from 'react';
import { Button } from '@/components/common/Button';
import { MessageSquare, Sparkles } from 'lucide-react';
import { companyContact } from '@/data/navigation';

export const ProductCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-warm-50 border-t border-burgundy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-burgundy-100 shadow-soft-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-heading font-extrabold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                Custom Knits & Tech Packs
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-charcoal-900 leading-tight">
                Need a Bespoke Fabric Weave or Custom Pantone Dye?
              </h2>
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed max-w-2xl">
                We formulate custom dye baths, jacquard collar ribs, reflective piping, and private-label
                tags for enterprises and designer labels requiring customized specifications.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:justify-end">
              <Button variant="primary" size="lg" to="/contact?mode=custom" withArrow>
                Upload Tech Pack
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={`https://wa.me/${companyContact.whatsapp}?text=Hi%20TeesZone,%20I%20have%20a%20custom%20bulk%20apparel%20requirement.`}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
