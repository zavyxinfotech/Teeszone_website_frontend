import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

export const LocationMap: React.FC = () => {
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=TeesZone+Texvalley+Erode';

  return (
    <div className="bg-white rounded-3xl p-3.5 sm:p-8 md:p-9 flex flex-col justify-start h-auto lg:h-full">
      <div>
        {/* Header matching Image 2 */}
        <div className="mb-4 sm:mb-5">
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

        {/* Google Map Image with Exact TeesZone Location Pin */}
        <div className="relative rounded-2xl overflow-hidden mb-4 sm:mb-5 group">
          <img
            src="/assets/images/contact-google-map.webp"
            alt="Google Map location of TeesZone Corporate Office at Texvalley, Erode"
            className="w-full h-52 sm:h-60 object-cover object-center"
            loading="eager"
          />
          
          {/* Top-Left: Open in Maps Button */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 left-3 bg-white/95 hover:bg-white text-burgundy-800 px-3 py-1.5 rounded-lg text-xs font-heading font-bold shadow-sm transition-all border border-burgundy-100 flex items-center gap-1.5 hover:shadow z-20"
          >
            <span>Open in Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Exact Location Pin Marker for TeesZone Corporate Office at Fortune City */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[65%] top-[43%] -translate-x-1/2 -translate-y-full z-20 flex flex-col items-center group/pin cursor-pointer transition-transform duration-300 hover:scale-105"
            title="TeesZone Corporate Office (#2155, Fortune City, Texvalley)"
          >
            {/* Branded Google Maps Callout Badge */}
            <div className="bg-white/95 backdrop-blur-xs text-charcoal-900 border border-burgundy-700/30 rounded-lg px-2.5 py-1 shadow-lg flex items-center gap-1.5 whitespace-nowrap mb-0.5 transition-all group-hover/pin:bg-white group-hover/pin:shadow-xl">
              <span className="w-2 h-2 rounded-full bg-burgundy-700 animate-ping shrink-0" />
              <div className="text-left">
                <span className="block text-[11px] sm:text-xs font-heading font-bold text-burgundy-800 leading-tight">
                  TeesZone Corporate Office
                </span>
                <span className="block text-[9.5px] sm:text-[10.5px] text-charcoal-600 leading-tight font-medium">
                  #2155, Fortune City, Texvalley
                </span>
              </div>
            </div>
            {/* Google Maps Style Red Pin */}
            <div className="relative flex flex-col items-center -mt-0.5">
              <div className="w-6 h-6 rounded-full bg-[#EA4335] border-2 border-white shadow-md flex items-center justify-center text-white">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              {/* Pin Pointer Triangle */}
              <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-[#EA4335] -mt-[1px]" />
              {/* Ground Shadow */}
              <div className="w-3 h-1 bg-black/35 rounded-full blur-[1px] mt-0.5" />
            </div>
          </a>
        </div>

        {/* Corporate Office Address Details - Clean full-width padding on mobile */}
        <div className="space-y-2.5 text-charcoal-700 bg-warm-50/70 p-3.5 sm:p-5 rounded-2xl w-full">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-burgundy-700 shrink-0 mt-1" />
            <div className="space-y-1">
              <p className="text-sm sm:text-base font-heading font-medium uppercase tracking-wider text-burgundy-700">
                TEESZONE CORPORATE OFFICE
              </p>
              <p className="font-heading font-medium text-charcoal-900 text-base sm:text-lg leading-snug">
                #2155, Fortune City, Global Market – Texvalley,
              </p>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
                NH 544 Bengaluru–Cochin National Highway, Chithode, Erode – 638 102, Tamil Nadu, India.
              </p>
              <div className="text-xs sm:text-sm text-charcoal-700 font-normal pt-1 flex flex-col space-y-0.5">
                <span>Office hours: Mon – Fri, 9:00 AM – 6:00 PM IST</span>
                <span>Sat, 9:00 AM – 3:30 PM IST</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-burgundy-700 hover:text-burgundy-800 hover:underline pt-1.5"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
