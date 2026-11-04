import React from 'react';
import { MapPin, Navigation, ExternalLink, Building2 } from 'lucide-react';
import { Button } from '@/components/common/Button';

export const LocationMap: React.FC = () => {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Texvalley+Fortune+City+Erode+Tamil+Nadu';

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-9 border border-burgundy-100 shadow-soft flex flex-col justify-between h-full">
      <div>
        {/* Header matching Image 2 */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-1">
            <MapPin className="w-5 h-5 text-burgundy-700 shrink-0" />
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-charcoal-900">
              Visit Our <span className="text-burgundy-700">Corporate Office</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Find us at Texvalley — South India's premium wholesale textile market hub.
          </p>
        </div>

        {/* Exact Google Map Image matching Reference Image 2 */}
        <div className="relative rounded-2xl overflow-hidden border border-burgundy-100 shadow-sm mb-5 group">
          <img
            src="/assets/images/contact-google-map.webp"
            alt="Google Map location of TeesZone Head Office at Texvalley, Erode"
            className="w-full h-48 sm:h-56 object-cover object-center"
            loading="eager"
          />
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 left-3 bg-white/95 hover:bg-white text-burgundy-800 px-3 py-1.5 rounded-lg text-xs font-heading font-bold shadow-sm transition-all border border-burgundy-100 flex items-center gap-1.5 hover:shadow"
          >
            <span>Open in Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* TeesZone Building Photo below the map */}
        <div className="relative rounded-2xl overflow-hidden border border-burgundy-100 shadow-sm mb-5">
          <img
            src="/assets/images/teeszone-building-facility.webp"
            alt="TeesZone Building & Corporate Logistics Facility"
            className="w-full h-36 sm:h-44 object-cover"
          />
          <div className="absolute bottom-2.5 left-2.5 bg-charcoal-900/85 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-[11px] font-medium flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-warm-300" />
            <span>TeesZone Corporate Building & Logistics</span>
          </div>
        </div>

        {/* Corporate Office Address Details matching Image 2 */}
        <div className="space-y-2 text-sm text-charcoal-700 bg-warm-50/70 p-4 rounded-2xl border border-burgundy-50">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-5 h-5 text-burgundy-700 shrink-0 mt-0.5" />
            <div>
              <p className="text-[11px] font-heading font-extrabold uppercase tracking-wider text-burgundy-700">
                TEESZONE HEAD OFFICE
              </p>
              <p className="font-heading font-bold text-charcoal-900 text-sm mt-0.5 leading-snug">
                #2155, Fortune City, Global Market – Texvalley,
              </p>
              <p className="text-xs text-charcoal-600 mt-0.5 leading-relaxed">
                NH 544 Bengaluru–Cochin National Highway, Chithode, Erode – 638 102, Tamil Nadu, India.
              </p>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-heading font-bold text-burgundy-700 hover:text-burgundy-800 hover:underline mt-2"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Directions Action Button */}
      <div className="pt-5">
        <Button
          variant="secondary"
          size="md"
          href={googleMapsUrl}
          className="w-full justify-center"
          withArrow
        >
          <Navigation className="w-4 h-4 mr-1.5 text-burgundy-700" />
          Get Directions to Corporate Office
        </Button>
      </div>
    </div>
  );
};

export default LocationMap;
