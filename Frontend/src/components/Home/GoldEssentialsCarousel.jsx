import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

export const ESSENTIALS_ITEMS = [
  {
    id: 'necklaces',
    name: 'Necklace',
    category: 'necklaces',
    subtitle: 'Royal 22K Heritage Chokers & Chains',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'rings',
    name: 'Ring',
    category: 'rings',
    subtitle: 'Solitaire Diamonds & Floral Gold Bands',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'earrings',
    name: 'Earrings',
    category: 'earrings',
    subtitle: 'Dual-Tone Jhumkas & Studs',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bangles',
    name: 'Bangle',
    category: 'bangles',
    subtitle: 'Antique 22K Filigree Kadas',
    image: 'https://images.unsplash.com/photo-1611591475883-9b81a7042a5a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'mangalsutras',
    name: 'Bracelet',
    category: 'mangalsutras',
    subtitle: 'Auspicious Gold Beads & Tennis Chains',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'coins',
    name: 'Gold Coin',
    category: 'coins',
    subtitle: '24K 999 Investment Bullion',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=800&auto=format&fit=crop'
  }
];

export default function GoldEssentialsCarousel({ onSelectCategory, onExploreAll }) {
  // Center item index defaults to 2 (Earrings, matching reference image)
  const [activeIndex, setActiveIndex] = useState(2);

  const total = ESSENTIALS_ITEMS.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Helper to determine relative position (-2, -1, 0, 1, 2)
  const getCardStyle = (index) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    // Center active card
    if (diff === 0) {
      return {
        transform: 'translateX(0%) scale(1.15)',
        zIndex: 30,
        opacity: 1,
        filter: 'brightness(1)',
        pointerEvents: 'auto'
      };
    }
    // Immediate left
    if (diff === -1) {
      return {
        transform: 'translateX(-65%) scale(0.95)',
        zIndex: 20,
        opacity: 0.9,
        filter: 'brightness(0.95)',
        pointerEvents: 'auto'
      };
    }
    // Immediate right
    if (diff === 1) {
      return {
        transform: 'translateX(65%) scale(0.95)',
        zIndex: 20,
        opacity: 0.9,
        filter: 'brightness(0.95)',
        pointerEvents: 'auto'
      };
    }
    // Outer left
    if (diff === -2) {
      return {
        transform: 'translateX(-120%) scale(0.82)',
        zIndex: 10,
        opacity: 0.65,
        filter: 'brightness(0.9)',
        pointerEvents: 'auto'
      };
    }
    // Outer right
    if (diff === 2) {
      return {
        transform: 'translateX(120%) scale(0.82)',
        zIndex: 10,
        opacity: 0.65,
        filter: 'brightness(0.9)',
        pointerEvents: 'auto'
      };
    }

    // Hidden behind
    return {
      transform: `translateX(${diff > 0 ? '160%' : '-160%'}) scale(0.6)`,
      zIndex: 0,
      opacity: 0,
      pointerEvents: 'none'
    };
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F7F2EC] via-[#FAF6F2] to-[#F5EFE9] overflow-hidden relative border-b border-[#DECDB3]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Section Heading matching the reference */}
        <div className="max-w-xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#42142E] tracking-tight">
            Gold Essentials
          </h2>
          <p className="text-xs sm:text-sm font-medium text-stone-600 mt-2 tracking-wide">
            A curated take on timeless elegance
          </p>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-3"></div>
        </div>

        {/* 3D Coverflow Container */}
        <div className="relative h-[360px] sm:h-[420px] md:h-[460px] flex items-center justify-center">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 md:left-12 lg:left-24 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#521838] hover:bg-[#682048] text-white shadow-xl flex items-center justify-center transition-all cursor-pointer active:scale-90"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards Stack */}
          <div className="relative w-[210px] sm:w-[240px] md:w-[270px] h-[300px] sm:h-[350px] md:h-[390px] flex items-center justify-center">
            {ESSENTIALS_ITEMS.map((item, idx) => {
              const style = getCardStyle(idx);
              const isCenter = idx === activeIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (isCenter) {
                      onSelectCategory(item.category);
                    } else {
                      setActiveIndex(idx);
                    }
                  }}
                  style={style}
                  className="absolute inset-0 transition-all duration-500 ease-out cursor-pointer group"
                >
                  <div className={`w-full h-full rounded-2xl overflow-hidden shadow-xl bg-white border border-[#E0D0B8] relative ${
                    isCenter ? 'ring-2 ring-[#C5A059]/60 shadow-2xl' : ''
                  }`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient at bottom for text badge contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none"></div>

                    {/* Golden Pill Badge at Bottom */}
                    <div className="absolute bottom-4 inset-x-0 flex justify-center">
                      <span className="px-4 py-1.5 bg-[#C59B46] text-white font-serif font-bold text-xs uppercase tracking-wider rounded-md shadow-md backdrop-blur-xs group-hover:bg-[#B38734] transition-colors">
                        {item.name}
                      </span>
                    </div>

                    {/* Subtitle tooltip on hover for center card */}
                    {isCenter && (
                      <div className="absolute top-3 inset-x-3 text-center">
                        <span className="text-[10px] font-semibold text-stone-900 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-xs border border-stone-200">
                          {item.subtitle}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 md:right-12 lg:right-24 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#521838] hover:bg-[#682048] text-white shadow-xl flex items-center justify-center transition-all cursor-pointer active:scale-90"
            aria-label="Next item"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* View All Button below carousel */}
        <div className="mt-8 sm:mt-10">
          <button
            onClick={onExploreAll}
            className="px-8 py-3 bg-[#4A1432] hover:bg-[#5D1A3F] text-amber-200 hover:text-white font-bold text-xs uppercase tracking-widest rounded-lg shadow-lg transition-all cursor-pointer active:scale-95 inline-flex items-center gap-2"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
