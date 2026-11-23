import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

export default function HeroBanner({ onExploreCategory, onOpenCalculator }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'diamonds',
      titleLine1: 'Diamond Days',
      titleLine2: 'Are Here',
      category: 'rings',
      bgColor: 'from-[#3B0A22] via-[#4F0F2E] to-[#250414]',
      silkAccent: 'bg-[#531032]',
      tagline: 'Exquisite Rose Gold & Natural Diamond Suites',
      dealPrimary: 'Flat 20% Off',
      dealPrimarySub: 'on Diamond Value',
      dealSecondary: '₹2,100/-*',
      dealSecondarySub: 'Gift voucher on every purchase',
      ctaText: 'Shop Now',
      couponCode: 'DIA20',
      jewelleryImage: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1000&auto=format&fit=crop',
      websiteUrl: 'www.aurajewels.com'
    },
    {
      id: 'bridal',
      titleLine1: 'Royal Bridal',
      titleLine2: 'Couture 2026',
      category: 'necklaces',
      bgColor: 'from-[#2D1606] via-[#422108] to-[#1C0D03]',
      silkAccent: 'bg-[#4A2408]',
      tagline: 'Imperial 22K Kundan, Polki & Basra Pearl Masterpieces',
      dealPrimary: 'Up to 25% Off',
      dealPrimarySub: 'on Making Charges',
      dealSecondary: 'Free 24K Coin',
      dealSecondarySub: 'with every bridal set above ₹2 Lakh',
      ctaText: 'Explore Bridal',
      couponCode: 'ROYAL25',
      jewelleryImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop',
      websiteUrl: 'www.aurajewels.com'
    },
    {
      id: 'daily',
      titleLine1: 'Everyday Fine',
      titleLine2: 'Gold Radiance',
      category: 'bangles',
      bgColor: 'from-[#1A162B] via-[#2D2447] to-[#120E1F]',
      silkAccent: 'bg-[#322852]',
      tagline: 'Feather-Light 14K & 18K Solid Gold Essentials',
      dealPrimary: 'Starting at ₹9,999',
      dealPrimarySub: 'Zero Deductions on Exchange',
      dealSecondary: 'Zero Making Fee',
      dealSecondarySub: 'on select Italian chains & studs',
      ctaText: 'Discover Daily Wear',
      couponCode: 'EVERYDAY',
      jewelleryImage: 'https://images.unsplash.com/photo-1611591475883-9b81a7042a5a?q=80&w=1000&auto=format&fit=crop',
      websiteUrl: 'www.aurajewels.com'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative overflow-hidden select-none">
      
      {/* Full-Bleed Cinematic Banner Frame */}
      <div className={`relative min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] bg-gradient-to-r ${slide.bgColor} text-white transition-all duration-700 flex items-center`}>
        
        {/* Subtle Liquid Silk Shimmer Background Effect */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-200 via-transparent to-transparent pointer-events-none"></div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: High-Fashion Jewellery Arrangement on Silk (6 cols) */}
            <div className="lg:col-span-6 flex items-center justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src={slide.jewelleryImage}
                  alt={slide.titleLine1}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Silk Satin Caustics Sheen Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none"></div>

                {/* Floating Tag */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-amber-200 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>BIS 916 Hallmarked Certified Suite</span>
                </div>
              </div>
            </div>

            {/* Right Column: Commercial Luxury Campaign Typography (6 cols) */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left order-1 lg:order-2">
              
              {/* Disclaimer header */}
              <div className="flex items-center justify-center lg:justify-end text-[10px] uppercase tracking-widest text-stone-300/80 font-medium">
                *T&C Apply
              </div>

              {/* Bold Campaign Headline (Right Gold style) */}
              <div className="space-y-1">
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black tracking-tight text-white leading-[1.05]">
                  {slide.titleLine1}
                </h2>
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-serif italic text-amber-200 tracking-tight leading-[1.1]">
                  {slide.titleLine2}
                </h3>
              </div>

              {/* Deal Breakdown Strip (Matching Right Gold Photo) */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-white">
                
                {/* Primary Deal */}
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-semibold uppercase text-amber-300">Flat</span>
                  <div className="text-left">
                    <span className="text-2xl sm:text-3xl font-black font-sans tracking-tight text-white block leading-none">
                      {slide.dealPrimary.replace('Flat ', '')}
                    </span>
                    <span className="text-[11px] text-stone-300 font-medium">
                      {slide.dealPrimarySub}
                    </span>
                  </div>
                </div>

                {/* Vertical Divider */}
                <span className="hidden sm:inline-block w-px h-10 bg-white/30"></span>

                {/* Secondary Deal */}
                <div className="text-center sm:text-left">
                  <span className="text-2xl sm:text-3xl font-black font-sans tracking-tight text-white block leading-none">
                    {slide.dealSecondary}
                  </span>
                  <span className="text-[11px] text-stone-300 font-medium">
                    {slide.dealSecondarySub}
                  </span>
                </div>

              </div>

              {/* Call to Action Button & Coupon */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onExploreCategory(slide.category)}
                  className="px-8 py-3.5 bg-white hover:bg-amber-100 text-[#4A102E] font-black text-xs uppercase tracking-widest rounded-full shadow-2xl transition-all cursor-pointer transform hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <span>{slide.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-xs text-stone-200">
                  Apply coupon code: <span className="font-mono font-bold text-amber-300 bg-white/10 px-2.5 py-1 rounded-md border border-white/20 tracking-wider ml-1">{slide.couponCode}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Carousel Circular Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer active:scale-90"
          aria-label="Previous Campaign"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Carousel Circular Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer active:scale-90"
          aria-label="Next Campaign"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Left Branding Watermark */}
        <div className="absolute bottom-3 left-6 text-[11px] font-sans text-white/60 hidden sm:block tracking-wider">
          {slide.websiteUrl}
        </div>

        {/* Carousel Indicators at Bottom */}
        <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`rounded-full transition-all cursor-pointer ${
                currentSlide === idx ? 'w-6 h-2 bg-amber-400' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

    </div>
  );
}
