import React from 'react';
import { MapPin, Navigation, ExternalLink, Factory } from 'lucide-react';
import { Button } from '@/components/common/Button';

export const LocationMap: React.FC = () => {
  const googleMapsUrl = 'https://www.google.com/maps/search/Tiruppur+Tamil+Nadu+India';

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-burgundy-100 shadow-soft flex flex-col justify-between">
      <div>
        <div className="mb-6">
          <h3 className="text-2xl sm:text-3xl font-heading font-black text-charcoal-900">
            Our <span className="text-burgundy-700">Location</span>
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
            Visit our office or factory in Tiruppur, the textile hub of India.
          </p>
        </div>

        {/* Map Preview Graphic */}
        <div className="relative rounded-2xl overflow-hidden border border-burgundy-100 bg-[#E8ECEF] aspect-[16/9] mb-6 shadow-inner group">
          {/* Stylized Vector Map Background */}
          <div className="absolute inset-0 opacity-80 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px]">
            {/* Road lines simulation */}
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M-20,40 Q150,90 300,60 T600,120" fill="none" stroke="#FFFFFF" strokeWidth="6" />
              <path d="M120,-10 L160,200" fill="none" stroke="#FFFFFF" strokeWidth="8" />
              <path d="M220,180 L290,-10" fill="none" stroke="#F1F5F9" strokeWidth="5" />
              <path d="M-10,120 C140,110 260,150 400,130" fill="none" stroke="#F8FAFC" strokeWidth="4" />
            </svg>
          </div>

          {/* Interactive Marker Pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center animate-bounce">
            <div className="px-3 py-1 rounded-full bg-burgundy-700 text-white font-heading font-extrabold text-[11px] shadow-lg flex items-center gap-1.5 whitespace-nowrap">
              <Factory className="w-3.5 h-3.5 text-warm-200" />
              <span>TEESZONE FACTORY</span>
            </div>
            <div className="w-3 h-3 bg-burgundy-700 rotate-45 -mt-1.5 shadow-sm" />
            <div className="w-2.5 h-2.5 rounded-full bg-burgundy-900/40 blur-[1px] mt-1" />
          </div>

          {/* Map labels */}
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-semibold text-charcoal-700 border border-burgundy-50">
            Tiruppur Textile Belt • Tamil Nadu
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 bg-white/90 hover:bg-white text-burgundy-700 p-2 rounded-xl text-xs font-semibold shadow-sm transition-colors flex items-center gap-1"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open Maps</span>
          </a>
        </div>

        {/* Factory Photo Preview */}
        <div className="relative rounded-2xl overflow-hidden border border-burgundy-100 shadow-sm mb-6">
          <img
            src="/assets/images/factory-exterior.webp"
            alt="TeesZone factory exterior and logistics unit in Tiruppur"
            className="w-full h-36 sm:h-44 object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-charcoal-900/85 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-[11px] font-medium flex items-center gap-1.5">
            <Factory className="w-3.5 h-3.5 text-warm-300" />
            <span>Tiruppur Production & Logistics Yard</span>
          </div>
        </div>

        {/* Address Card */}
        <div className="space-y-1 text-sm text-charcoal-700">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-5 h-5 text-burgundy-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-heading font-bold text-charcoal-900">Tiruppur, Tamil Nadu, India</p>
              <p className="text-xs text-charcoal-500 mt-0.5">
                India's leading textile and garment manufacturing hub.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Directions Action */}
      <div className="pt-6">
        <Button
          variant="secondary"
          size="md"
          href={googleMapsUrl}
          className="w-full justify-center"
          withArrow
        >
          <Navigation className="w-4 h-4 mr-1.5 text-burgundy-700" />
          Get Directions
        </Button>
      </div>
    </div>
  );
};
