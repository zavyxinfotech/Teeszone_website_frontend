import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export const ProductCategories: React.FC = () => {
  // Quadruple array to provide a seamless, rich infinite loop across all desktop screens
  const marqueeItems = [...productsData, ...productsData, ...productsData, ...productsData];
  const trackRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animId: number;
    let lastTime = performance.now();
    let offset = 0;
    // Speed in pixels per second: fluid, steady, smooth
    const speed = 75;

    const step = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1); // cap dt to avoid jump after tab switch
      lastTime = now;

      if (!isHoveredRef.current) {
        offset += speed * dt;
        const halfWidth = track.scrollWidth / 2;

        if (halfWidth > 0 && offset >= halfWidth) {
          offset -= halfWidth;
        }

        // Left to right scrolling: translates from -halfWidth towards 0
        track.style.transform = `translate3d(${offset - halfWidth}px, 0, 0)`;
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center sm:text-left">
        <div>
          {/* Section Badge consistent with other sections (centered on mobile) */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCECEF] border border-burgundy-100/60 mb-2.5 sm:mb-3 shadow-2xs mx-auto sm:mx-0">
            <span className="w-3 h-[1.5px] bg-[#82132C] rounded-full inline-block" />
            <span className="text-[11px] sm:text-xs font-heading font-bold uppercase tracking-wider text-[#82132C]">
              Our Products
            </span>
          </div>

          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-heading font-black tracking-tight text-charcoal-900 leading-[1.12]">
            Apparel for <span className="text-[#82132C]">Every Need</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-charcoal-600 font-normal mt-2 sm:mt-2.5 max-w-2xl leading-relaxed mx-auto sm:mx-0">
            From corporate executive uniforms and blank apparel to school collections, promotional event wear, and academic sports kits.
          </p>
        </div>
      </div>

      {/* Auto-scrolling infinite product marquee */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 lg:gap-7 py-2 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[210px] sm:w-[230px] md:w-[250px] lg:w-[265px] shrink-0"
              onMouseEnter={() => {
                isHoveredRef.current = true;
              }}
              onMouseLeave={() => {
                isHoveredRef.current = false;
              }}
            >
              <Link
                to={`/category/${item.category}`}
                className="group block p-2.5 sm:p-3 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative aspect-square h-[160px] sm:h-[180px] md:h-[200px] lg:h-[210px] w-full flex items-center justify-center mb-3 overflow-hidden rounded-2xl bg-warm-50/60 p-3 border border-burgundy-50/50 group-hover:border-burgundy-200 transition-colors">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain group-hover:scale-106 transition-transform duration-500 pointer-events-none"
                    loading="lazy"
                  />
                  {/* Arrow on image top corner without background color and border, visible only on hover */}
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 text-burgundy-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 pointer-events-none">
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                  </div>
                </div>
                <div className="space-y-1 text-center">
                  <div className="min-h-[2.5rem] sm:min-h-[2.75rem] flex items-center justify-center">
                    <h3 className="font-heading font-bold text-sm sm:text-base text-charcoal-900 group-hover:text-burgundy-700 transition-colors leading-snug">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
