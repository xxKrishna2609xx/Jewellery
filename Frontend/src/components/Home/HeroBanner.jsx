import React, { useState, useEffect } from 'react';
import { 
  Sparkles, ArrowRight, ShieldCheck, RefreshCw, 
  Award, Truck, ChevronLeft, ChevronRight, Diamond 
} from 'lucide-react';

export default function HeroBanner({ onExploreCategory, onOpenCalculator }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "The Regal Bridal Collection",
      subtitle: "Pure 22 Karat BIS Hallmarked Heritage Polki & Temple Jewels crafted for grand celebrations.",
      tag: "Bridal Couture 2026",
      cta: "Explore Bridal Jewels",
      category: "necklaces",
      badgeHighlight: "BIS 916 Hallmarked",
      badgePurity: "22K Pure Gold",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Solitaire Radiance & Fine Diamonds",
      subtitle: "IGI Certified Natural Solitaires mounted in Solid 18K Gold with unmatched brilliance.",
      tag: "Forever Solitaires",
      cta: "Discover Solitaires",
      category: "rings",
      badgeHighlight: "IGI & SGL Certified",
      badgePurity: "VVS1 Clarity",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Daily Elegance & Lightweight Gold",
      subtitle: "Modern 14K & 18K Italian finish chains, bangles and studs engineered for daily effortless elegance.",
      tag: "Everyday Luxury",
      cta: "Shop Daily Wear",
      category: "bangles",
      badgeHighlight: "Feather-Light Wear",
      badgePurity: "14K & 18K Gold",
      image: "https://images.unsplash.com/photo-1611591475883-9b81a7042a5a?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F3EB] via-[#FAF8F5] to-[#F5EFE6] border-b border-[#DECDB3]">
      
      {/* Decorative ambient gold glow circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-300/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-200/20 rounded-full blur-2xl pointer-events-none translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        
        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF3E5] border border-[#DECA9F] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7A531C]">
                {slide.tag}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1C1814] tracking-tight leading-[1.12]">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
              {slide.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                onClick={() => onExploreCategory(slide.category)}
                className="px-7 py-3.5 bg-gradient-to-r from-[#D8A966] via-[#C99039] to-[#B2772B] hover:brightness-105 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-full shadow-lg transition-all flex items-center gap-2 cursor-pointer group active:scale-95"
              >
                <span>{slide.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="px-6 py-3.5 bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs uppercase tracking-wider rounded-full border border-stone-300 shadow-xs transition-all cursor-pointer active:scale-95"
              >
                Calculate Live Gold Value
              </button>
            </div>

            {/* Slide Navigation Dots */}
            <div className="pt-4 flex items-center gap-3">
              <div className="flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === idx ? 'w-8 bg-amber-600' : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                0{currentSlide + 1} / 0{slides.length}
              </span>
            </div>

          </div>

          {/* Right Column: High-Definition Jewellery Showcase Image (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Golden Glow Border */}
              <div className="p-2.5 sm:p-3 bg-white/90 rounded-3xl border border-[#DECDB3] shadow-2xl backdrop-blur-sm relative group overflow-hidden">
                
                {/* Main Showcase Image Tag */}
                <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 relative">
                  <img
                    key={slide.image}
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Subtle inner soft vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none"></div>

                  {/* Floating Purity Badge (Top Right) */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-200 shadow-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                      {slide.badgeHighlight}
                    </span>
                  </div>

                  {/* Floating Title Strip (Bottom Left) */}
                  <div className="absolute bottom-4 left-4 right-4 bg-stone-950/80 backdrop-blur-md p-3.5 rounded-xl border border-white/20 text-white flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-amber-300 uppercase font-bold tracking-widest block">
                        Aura Certified Masterpiece
                      </span>
                      <span className="font-serif font-bold text-sm text-stone-100">
                        {slide.badgePurity}
                      </span>
                    </div>

                    <button
                      onClick={() => onExploreCategory(slide.category)}
                      className="p-2 rounded-full bg-amber-500 text-stone-950 hover:bg-amber-400 transition-colors cursor-pointer"
                      title="View Details"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Trust Badges Strip (Light Luxury Styling) */}
      <div className="bg-[#F2ECE0]/70 border-t border-[#DECDB3] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left">
            
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="p-2.5 rounded-full bg-amber-600/10 text-amber-800 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">100% BIS Hallmarked</h4>
                <p className="text-[11px] text-stone-500">Laser HUID verified on every gram</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="p-2.5 rounded-full bg-amber-600/10 text-amber-800 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">IGI & SGL Certified</h4>
                <p className="text-[11px] text-stone-500">100% natural, conflict-free diamonds</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="p-2.5 rounded-full bg-amber-600/10 text-amber-800 shrink-0">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">Lifetime Buyback</h4>
                <p className="text-[11px] text-stone-500">Zero deduction transparent exchange</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="p-2.5 rounded-full bg-amber-600/10 text-amber-800 shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">Insured Doorstep Transit</h4>
                <p className="text-[11px] text-stone-500">Free tamper-proof armoured delivery</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
