import React from 'react';
import { Clock, HelpCircle, Sparkles, Phone } from 'lucide-react';
import { companyContact } from '@/data/navigation';

export const ContactHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF6F4]" aria-label="Contact TeesZone">
      
      {/* =========================================================================
          BACKGROUND DESIGN: Identical to Home Page Hero Section Theme
          - Warm luxury cream base (#FAF6F4) with flowing organic curves & ambient radiance
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden bg-[#FAF6F4]">
        <div className="w-full h-full bg-[#FAF6F4] relative">
          <div className="absolute top-0 right-0 w-[65%] h-full bg-gradient-to-l from-[#F5ECE1]/90 via-[#FAF4EB]/60 to-transparent" />
          <div className="absolute -top-24 left-1/4 w-[550px] h-[550px] bg-[#FFF2DE]/50 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-[600px] h-[450px] bg-[#FCECEF]/45 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-[450px] h-[450px] bg-[#FAF1E6]/70 rounded-full blur-2xl" />

          {/* Elegant Organic Cream Wave Ribbons matching Home Page Hero */}
          <svg
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full object-cover"
            preserveAspectRatio="none"
          >
            <path
              d="M560,0 C700,160 840,220 980,120 C1120,20 1280,140 1440,80 L1440,800 L420,800 C480,680 520,520 460,380 C400,240 450,90 560,0 Z"
              fill="url(#creamOrganicBackdropContact)"
              opacity="0.85"
            />
            <path
              d="M680,0 C820,180 720,380 790,560 C840,680 940,740 1060,800 L1440,800 L1440,0 Z"
              fill="url(#creamLayerBackdropContact)"
              opacity="0.55"
            />
            <defs>
              <linearGradient id="creamOrganicBackdropContact" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F5ECE1" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#FAF4EB" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#F0E5D6" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="creamLayerBackdropContact" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFF7EE" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#F5ECE1" stopOpacity="0.45" />
              </linearGradient>
            </defs>
          </svg>
          {/* Decorative Royal Burgundy Satin Fabric Wave at Top Right Corner (Desktop ONLY - Hidden on Mobile) */}
          <svg
            viewBox="0 0 800 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden md:block absolute top-0 right-0 w-[55%] h-[55%] object-cover pointer-events-none select-none z-10"
            preserveAspectRatio="none"
          >
            <path
              d="M320,0 C480,90 600,60 800,190 L800,0 Z"
              fill="url(#desktopSatinWaveContact)"
            />
            <path
              d="M440,0 C560,110 680,85 800,240 L800,0 Z"
              fill="#800020"
              fillOpacity="0.18"
            />
            <defs>
              <linearGradient id="desktopSatinWaveContact" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#580819" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#7A1027" stopOpacity="0.75" />
                <stop offset="80%" stopColor="#9C1E3A" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#580819" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* =========================================================================
          DESKTOP HERO VIEW (md:flex, hidden on mobile)
          - Left container aligned exactly to the Navbar TEESZONE logo (max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8)
          - Increased image width and size to fill space between left content and image
          - "We're Here to Help You!" positioned ABOVE the image
          - Attached to right screen border (right-0) and bottom border (bottom-0)
          ========================================================================= */}
      <div className="hidden md:flex relative w-full h-[calc(100vh)] min-h-[640px] max-h-[780px] pt-[76px] lg:pt-[84px] items-center overflow-hidden z-10">
        
        {/* Main Content Grid: Exactly matches Navbar logo left alignment */}
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full max-w-[540px] lg:max-w-[580px] xl:max-w-[620px] space-y-4 lg:space-y-5 py-4">
            
            {/* Top Contact Us Label */}
            <div>
              <span className="text-xs sm:text-[13px] font-heading font-extrabold uppercase tracking-widest text-[#80011F] block">
                CONTACT US
              </span>
            </div>

            {/* Main Heading: 3 Lines with Strong Visual Hierarchy */}
            <h1 className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-heading font-black tracking-tight leading-[1.08] text-left">
              <span className="block text-charcoal-900">Let's Create</span>
              <span className="block text-[#80011F]">Your Custom T-Shirts</span>
              <span className="block text-[#80011F]">Together</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-charcoal-600 font-normal leading-relaxed max-w-lg text-left">
              Have a requirement, idea or bulk order? Our team is here to help you with the
              best solutions for your business, organization or event.
            </p>

            {/* "Call Now" Button in "Get a Quote" Button Color Theme */}
            <div className="pt-1">
              <a
                href={`tel:${companyContact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2.5 rounded-full px-7 py-3 text-sm font-heading font-medium bg-burgundy-700 hover:bg-burgundy-800 text-white shadow-soft hover:shadow-soft-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Now</span>
              </a>
            </div>

            {/* 3 Benefit Items: Designed like Home Page
                - NO icon border, NO background color
                - Increased icon sizes (w-7 h-7)
                - Increased text sizes below icons (charcoal title, burgundy subtitle) */}
            <div className="pt-3 border-t border-burgundy-100/60 max-w-lg">
              <div className="grid grid-cols-3 gap-6">
                
                {/* 1. Quick Response */}
                <div className="flex flex-col items-start text-left">
                  <div className="text-burgundy-700 mb-1.5">
                    <Clock className="w-7 h-7 stroke-[1.8]" />
                  </div>
                  <span className="text-sm sm:text-base font-heading font-medium text-charcoal-900 block leading-tight">
                    Quick Response
                  </span>
                  <span className="text-xs sm:text-[13px] font-heading font-medium text-burgundy-700 block mt-0.5">
                    (Within 24 Hours)
                  </span>
                </div>

                {/* 2. Expert Guidance */}
                <div className="flex flex-col items-start text-left">
                  <div className="text-burgundy-700 mb-1.5">
                    <HelpCircle className="w-7 h-7 stroke-[1.8]" />
                  </div>
                  <span className="text-sm sm:text-base font-heading font-medium text-charcoal-900 block leading-tight">
                    Expert Guidance
                  </span>
                  <span className="text-xs sm:text-[13px] font-heading font-medium text-burgundy-700 block mt-0.5">
                    For Requirements
                  </span>
                </div>

                {/* 3. Customized Solutions */}
                <div className="flex flex-col items-start text-left">
                  <div className="text-burgundy-700 mb-1.5">
                    <Sparkles className="w-7 h-7 stroke-[1.8]" />
                  </div>
                  <span className="text-sm sm:text-base font-heading font-medium text-charcoal-900 block leading-tight">
                    Customized
                  </span>
                  <span className="text-xs sm:text-[13px] font-heading font-medium text-burgundy-700 block mt-0.5">
                    Solutions
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* =====================================================================
            RIGHT SIDE CONSULTATION IMAGE & "WE'RE HERE TO HELP YOU!" ABOVE IMAGE
            - "We're Here to Help You!" positioned ABOVE the image in 2 rows, center-aligned
            - Attached to right screen border (right-0) and bottom border (bottom-0)
            ===================================================================== */}
        <div className="absolute right-0 bottom-0 z-10 hidden md:flex items-end justify-end pointer-events-none select-none">
          <div className="relative flex items-end justify-end">
            
            {/* "We're Here to Help You!" Script Text: Positioned ABOVE the image in 2 rows, center-aligned */}
            <div className="absolute inset-x-0 top-[-65px] lg:top-[-75px] xl:top-[-85px] z-30 pointer-events-none select-none flex justify-center text-center">
              <div className="text-center">
                <span className="block font-['Brush_Script_MT',_'Dancing_Script',_cursive] italic text-2xl lg:text-3xl xl:text-4xl text-[#80011F] font-semibold tracking-wide drop-shadow-xs leading-tight">
                  We're Here
                </span>
                <span className="block font-['Brush_Script_MT',_'Dancing_Script',_cursive] italic text-2xl lg:text-3xl xl:text-4xl text-[#80011F] font-semibold tracking-wide drop-shadow-xs leading-tight">
                  to Help You!
                </span>
              </div>
            </div>

            {/* Increased Width Consultation Image: Fully visible, attached right-0 and bottom-0 */}
            <img
              src="/assets/images/contact/contact-hero-consultation-transparent.png"
              alt="TeesZone custom apparel consultation with client"
              className="h-[430px] lg:h-[500px] xl:h-[560px] w-auto max-w-[62vw] object-contain object-bottom-right drop-shadow-2xl block mb-0 align-bottom"
              loading="eager"
            />
          </div>
        </div>

      </div>

      {/* =========================================================================
          MOBILE HERO VIEW (md:hidden)
          - Exactly formatted like Home page mobile hero view
          - Increased font size without increasing boldness (font-bold, not font-black)
          - Correct, balanced spacing throughout (no desert empty gaps, no cramped squishing)
          - All contents & images fit comfortably within mobile view height
          ========================================================================= */}
      <div className="md:hidden relative z-30 flex flex-col items-center justify-between w-full min-h-[calc(100svh-10px)] max-h-[850px] pt-16 sm:pt-20 pb-0 overflow-hidden bg-[#FAF6F4]">
        
        {/* Top Text Content Area: Balanced spacing matching Home page mobile hero */}
        <div className="relative z-30 px-4 sm:px-6 pt-1 space-y-2.5 text-center w-full max-w-md mx-auto">
          
          <span className="text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider text-burgundy-700 block">
            CONTACT US
          </span>

          <h1 className="text-2xl xs:text-[27px] sm:text-3xl font-heading font-bold text-charcoal-900 leading-[1.15] tracking-tight text-center">
            Let's Create <br />
            <span className="text-burgundy-700">Your Custom T-Shirts Together</span>
          </h1>

          <p className="text-xs xs:text-[13px] sm:text-sm text-charcoal-700 leading-relaxed font-normal max-w-xs mx-auto">
            Have a requirement, idea or bulk order? Our team is here to help you with the best solutions for your business, organization or event.
          </p>

          {/* Call Now Action Button */}
          <div className="pt-0.5 flex justify-center">
            <a
              href={`tel:${companyContact.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 rounded-full px-6 py-2 text-xs xs:text-sm font-heading font-medium bg-burgundy-700 hover:bg-burgundy-800 text-white shadow-soft transition-all active:scale-95 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>Call Now</span>
            </a>
          </div>

          {/* 3 Benefit Items in a row */}
          <div className="pt-2.5 border-t border-burgundy-100/60 max-w-xs mx-auto">
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center text-center">
                <div className="text-burgundy-700 mb-0.5">
                  <Clock className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="text-[11px] xs:text-xs font-heading font-medium text-charcoal-900 block leading-tight">
                  Quick Response
                </span>
                <span className="text-[9.5px] xs:text-[10px] font-heading font-medium text-burgundy-700 block mt-0.5">
                  (Within 24 Hours)
                </span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="text-burgundy-700 mb-0.5">
                  <HelpCircle className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="text-[11px] xs:text-xs font-heading font-medium text-charcoal-900 block leading-tight">
                  Expert Guidance
                </span>
                <span className="text-[9.5px] xs:text-[10px] font-heading font-medium text-burgundy-700 block mt-0.5">
                  For Requirements
                </span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="text-burgundy-700 mb-0.5">
                  <Sparkles className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="text-[11px] xs:text-xs font-heading font-medium text-charcoal-900 block leading-tight">
                  Customized
                </span>
                <span className="text-[9.5px] xs:text-[10px] font-heading font-medium text-burgundy-700 block mt-0.5">
                  Solutions
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile Consultation Visual Area: Balanced spacing, script text directly above image */}
        <div className="relative z-30 w-full overflow-hidden bg-transparent px-2 mt-auto pt-2 flex flex-col items-center justify-end pb-0 mb-0 leading-none">
          
          {/* Handwritten Script positioned above the image in 2 rows, center aligned */}
          <div className="w-full flex justify-center text-center z-30 pointer-events-none select-none mb-1.5">
            <div className="text-center">
              <span className="block font-['Brush_Script_MT',_'Dancing_Script',_cursive] italic text-lg sm:text-xl text-[#80011F] font-semibold drop-shadow-xs leading-tight">
                We're Here
              </span>
              <span className="block font-['Brush_Script_MT',_'Dancing_Script',_cursive] italic text-lg sm:text-xl text-[#80011F] font-semibold drop-shadow-xs leading-tight">
                to Help You!
              </span>
            </div>
          </div>

          {/* Consultation Image: comfortably proportioned, attached directly at bottom edge */}
          <div className="relative z-30 w-full max-w-[420px] flex justify-center p-0 m-0 leading-none">
            <img
              src="/assets/images/contact/contact-hero-consultation-transparent.png"
              alt="TeesZone Custom Apparel Consultation"
              className="w-full h-auto max-h-[220px] xs:max-h-[250px] sm:max-h-[280px] object-contain object-bottom drop-shadow-md block m-0 p-0 align-bottom"
              loading="eager"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactHero;