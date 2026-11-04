import React from 'react';
import { MapPin, Navigation, ExternalLink, Factory } from 'lucide-react';
import { Button } from '@/components/common/Button';

export const LocationMap: React.FC = () => {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Tiruppur+Tamil+Nadu+India';

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

        {/* Real Google Map Embed */}
        <div className="relative rounded-2xl overflow-hidden border border-burgundy-100 bg-[#E8ECEF] aspect-[16/9] mb-6 shadow-inner group">
          <iframe
            title="TeesZone Factory Tiruppur Location Map"
            src="https://maps.google.com/maps?q=Tiruppur,+Tamil+Nadu,+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Open Google Maps Button */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 bg-white/95 hover:bg-white text-burgundy-700 px-3 py-1.5 rounded-xl text-xs font-semibold shadow-md transition-all flex items-center gap-1.5 hover:shadow-lg hover:scale-103 cursor-pointer z-10"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open Maps</span>
          </a>

          {/* Floating Location Badge */}
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl text-xs font-heading font-bold text-charcoal-900 border border-burgundy-100 shadow-md flex items-center gap-2 z-10 pointer-events-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>TeesZone Factory • Tiruppur</span>
          </div>
        </div>

        {/* Factory Photo Preview - Clean TeesZone Building with Signage */}
        <div className="relative rounded-2xl overflow-hidden border border-burgundy-100 shadow-sm mb-6 group">
          <img
            src="/assets/images/factory-exterior.webp"
            alt="TeesZone factory exterior and logistics unit in Tiruppur"
            className="w-full h-40 sm:h-48 object-cover object-center group-hover:scale-102 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute bottom-2.5 left-2.5 bg-charcoal-900/85 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-xl text-xs font-heading font-medium flex items-center gap-2 shadow-sm">
            <Factory className="w-4 h-4 text-warm-300" />
            <span>TeesZone Production & Logistics Yard</span>
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

export default LocationMap;
