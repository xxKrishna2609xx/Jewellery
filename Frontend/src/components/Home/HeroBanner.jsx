import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, RefreshCw, Award, Truck, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroBanner({ onExploreCategory, onOpenCalculator }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "The Regal Bridal Collection",
      subtitle: "Pure 22 Karat BIS Hallmarked Heritage Polki & Temple Jewels",
      tag: "Bridal Couture 2026",
      cta: "Explore Bridal Jewels",
      category: "necklaces",
      image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Solitaire Radiance & Fine Diamonds",
      subtitle: "IGI Certified Natural Solitaires mounted in Solid 18K Gold",
      tag: "Forever Diamonds",
      cta: "Discover Solitaires",
      category: "rings",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Daily Elegance & Lightweight Gold",
      subtitle: "Modern 14K & 18K Italian finish chains, bangles and studs",
      tag: "Everyday Luxury",
      cta: "Shop Daily Wear",
      category: "bangles",
      image: "https://images.unsplash.com/photo-1611591475883-9b81a7042a5a?q=80&w=1200&auto=format&fit=crop"
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
    <div className="relative overflow-hidden bg-[#1E1914] text-white">
      
      {/* Background Hero Image with Luxury Gradient Overlay */}
      <div className="relative min-h-[520px] sm:min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Subtle luxury vignette gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#17130F]/95 via-[#1A140F]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#14100D] via-transparent to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl space-y-6">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/20 border border-amber-300/30 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
                {slide.tag}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed max-w-lg">
              {slide.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onExploreCategory(slide.category)}
                className="px-7 py-3.5 bg-gradient-to-r from-[#D8A966] via-[#C99039] to-[#B2772B] hover:brightness-110 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-full shadow-lg transition-all flex items-center gap-2 cursor-pointer group"
              >
                <span>{slide.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-stone-100 font-semibold text-xs uppercase tracking-wider rounded-full backdrop-blur-sm border border-white/20 transition-all cursor-pointer"
              >
                Calculate Live Gold Value
              </button>
            </div>

          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                currentSlide === idx ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Trust Badges Strip (Right Below Banner) */}
      <div className="bg-[#14100D] border-t border-[#2E251B] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left">
            
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="p-2 rounded-full bg-amber-500/10 text-amber-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-100 uppercase tracking-wider">100% BIS Hallmarked</h4>
                <p className="text-[11px] text-stone-400">Laser HUID verified on every gram</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="p-2 rounded-full bg-amber-500/10 text-amber-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-100 uppercase tracking-wider">IGI & SGL Certified</h4>
                <p className="text-[11px] text-stone-400">100% natural, conflict-free diamonds</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="p-2 rounded-full bg-amber-500/10 text-amber-400 shrink-0">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-100 uppercase tracking-wider">Lifetime Buyback</h4>
                <p className="text-[11px] text-stone-400">Zero deduction transparent exchange</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="p-2 rounded-full bg-amber-500/10 text-amber-400 shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-100 uppercase tracking-wider">Insured Doorstep Transit</h4>
                <p className="text-[11px] text-stone-400">Free tamper-proof armoured delivery</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
