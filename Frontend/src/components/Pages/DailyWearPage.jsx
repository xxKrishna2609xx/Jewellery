import React from 'react';
import { ChevronRight, Home, ArrowLeft, Sparkles, ShieldCheck, Heart, Clock } from 'lucide-react';
import ProductCard from '../Home/ProductCard';

export default function DailyWearPage({
  products = [],
  onSelectProduct,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlist = [],
  onNavigateHome,
  onExploreAll
}) {
  // Curated daily wear filter
  const dailyProducts = products.filter(p => 
    p.occasion === 'Daily Wear' || 
    p.occasion === 'Daily / Work' || 
    p.occasion === 'Daily / Gifting' ||
    p.category === 'rings' ||
    p.category === 'earrings'
  );

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
            <span className="text-amber-900 font-bold">Daily Wear & Office Luxury</span>
          </nav>

          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-300 rounded-xl text-stone-700 hover:text-stone-900 hover:border-amber-400 font-semibold transition-all cursor-pointer shadow-2xs text-[11px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </button>
        </div>

        {/* Editorial Hero Banner */}
        <div className="bg-gradient-to-r from-[#2B1B17] via-[#422C25] to-[#1E120F] text-white p-8 sm:p-12 rounded-3xl mb-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[11px] font-bold uppercase tracking-wider text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineered For 24/7 Comfort</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Effortless Everyday Gold & Diamonds
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-xl">
              Fine jewellery should not be locked in lockers. Our Daily Wear atelier creates feather-light, snag-free rings, martini stud earrings, and fluid Italian chains you never have to take off.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-amber-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Solid 14K & 18K Solid Gold
              </span>
              <span className="flex items-center gap-1.5 text-amber-200">
                <Clock className="w-4 h-4 text-amber-300" /> Shower, Sleep & Workout Safe
              </span>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#DECDB3] mb-8">
          <div>
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              Daily Wear Essentials ({dailyProducts.length})
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Certified BIS Hallmarked creations starting from ₹14,999.
            </p>
          </div>

          <button
            onClick={onExploreAll}
            className="text-xs font-semibold text-amber-800 hover:underline cursor-pointer"
          >
            Browse Complete Catalogue &rarr;
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dailyProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlist.some(item => item.id === product.id)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
