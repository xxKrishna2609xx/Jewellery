import React from 'react';
import { ChevronRight, Home, ArrowLeft, ArrowRight, Sparkles, Diamond } from 'lucide-react';

export const CURATED_COLLECTIONS_DATA = [
  {
    id: 'bridal-heritage',
    title: 'The Royal Bridal Heritage 2026',
    tag: 'Bridal Couture',
    subtitle: 'Imperial Polki, Basra Pearls & Antique 22K Gold Chokers',
    description: 'Inspired by the royal courts of Rajasthan, each piece requires over 180 hours of meticulous hand-setting by master karigars.',
    priceRange: 'Starting from ₹1,85,000',
    piecesCount: '24 Designs',
    categoryTarget: 'necklaces',
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'solitaire-radiance',
    title: 'Solitaire Radiance & Fine Diamonds',
    tag: 'Diamond Luxury',
    subtitle: 'IGI Certified Natural & Lab-Grown Solitaires in 18K Solid Gold',
    description: 'Hand-selected diamonds with triple excellent cut, color grades E-F, and VVS clarity for blinding fire and scintillation.',
    priceRange: 'Starting from ₹55,000',
    piecesCount: '18 Designs',
    categoryTarget: 'rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'modern-minimalist',
    title: 'Modern Minimalist & Everyday Gold',
    tag: 'Work & Daily',
    subtitle: 'Feather-Light 14K & 18K Italian Box Chains & Huggie Hoops',
    description: 'Designed for the modern woman who refuses to take her jewellery off. Ergonomic, snag-free, waterproof, and sleep-friendly.',
    priceRange: 'Starting from ₹9,999',
    piecesCount: '32 Designs',
    categoryTarget: 'bangles',
    image: 'https://images.unsplash.com/photo-1611591475883-9b81a7042a5a?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'temple-nakshi',
    title: 'Imperial Temple Nakshi & Mayur',
    tag: 'South Indian Heritage',
    subtitle: 'Sacred Iconography, Peacock Kadas & Emerald drops',
    description: 'Authentic 22K standard gold with deep relief sculpture of divine peacocks and floral emblems with ruby eyes.',
    priceRange: 'Starting from ₹1,40,000',
    piecesCount: '15 Designs',
    categoryTarget: 'bangles',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'mens-sovereign',
    title: 'Maharaja Men\'s Sovereign Jewels',
    tag: 'Men\'s Luxe',
    subtitle: 'Solid 22K Lion Signet Rings, Heavy Kadas & Rudraksha Gold Chains',
    description: 'Uncompromising bold silhouettes crafted in heavy un-hollowed solid gold for men of commanding presence.',
    priceRange: 'Starting from ₹75,000',
    piecesCount: '12 Designs',
    categoryTarget: 'rings',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'auspicious-matrimony',
    title: 'Auspicious Matrimony Mangalsutras',
    tag: 'Sacred Bonds',
    subtitle: 'Modern Minimalist Diamond Solitaire & Traditional Gold Beads',
    description: 'A celebration of eternal union, seamlessly balancing sacred black beads with modern solitaire pendants.',
    priceRange: 'Starting from ₹38,000',
    piecesCount: '16 Designs',
    categoryTarget: 'mangalsutras',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function CollectionsPage({ onSelectCategory, onNavigateHome }) {
  return (
    <div className="min-h-screen bg-[#FAF8F5] py-8 sm:py-12 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between pb-6 border-b border-[#DECDB3]/80 mb-8 text-xs">
          <nav className="flex items-center gap-2 text-stone-500">
            <button 
              onClick={onNavigateHome}
              className="flex items-center gap-1 hover:text-amber-800 transition-colors cursor-pointer font-medium"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-amber-900 font-bold">Curated Collections</span>
          </nav>

          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-300 rounded-xl text-stone-700 hover:text-stone-900 hover:border-amber-400 font-semibold transition-all cursor-pointer shadow-2xs text-[11px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8E5822] block mb-2">
            The Haute Joaillerie Archives
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Curated Signature Collections
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
            Each collection represents a distinct chapter in Indian craftsmanship, from imperial Mughal polki to ultra-minimalist modern solitaires.
          </p>
          <div className="w-16 h-0.5 bg-amber-600 mx-auto mt-4"></div>
        </div>

        {/* Collections 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CURATED_COLLECTIONS_DATA.map((col) => (
            <div
              key={col.id}
              onClick={() => onSelectCategory(col.categoryTarget)}
              className="group bg-white rounded-3xl overflow-hidden border border-[#DECDB3]/80 hover:border-amber-400/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] overflow-hidden bg-stone-900">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/20 backdrop-blur-md text-amber-200 rounded-full border border-white/20">
                    {col.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 text-right">
                  <span className="text-[11px] font-semibold text-white/90 bg-stone-900/60 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    {col.piecesCount}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                    {col.title}
                  </h3>
                  <p className="text-xs font-medium text-amber-900/80">
                    {col.subtitle}
                  </p>
                  <p className="text-xs text-stone-500 leading-relaxed pt-1">
                    {col.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-400 block uppercase">Price Guidance</span>
                    <span className="text-xs font-bold text-stone-900">{col.priceRange}</span>
                  </div>

                  <span className="text-xs font-bold text-[#8E5822] group-hover:text-amber-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
