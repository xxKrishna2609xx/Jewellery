import React from 'react';
import { ChevronRight, Home, ArrowLeft, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';
import ProductCard from '../Home/ProductCard';

export default function MangalsutrasPage({
  products = [],
  onSelectProduct,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlist = [],
  onNavigateHome,
  onExploreAll
}) {
  const mangalsutraProducts = products.filter(p => p.category === 'mangalsutras' || p.category === 'necklaces');

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
            <span className="text-amber-900 font-bold">Mangalsutras Collection</span>
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
        <div className="bg-gradient-to-r from-[#380E1F] via-[#4D152D] to-[#250814] text-white p-8 sm:p-12 rounded-3xl mb-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[11px] font-bold uppercase tracking-wider text-amber-300">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Sacred Bonds • Reimagined For Modern Life</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              The Modern & Heritage Mangalsutra
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-xl">
              From bezel-set solitaire diamond pendants to traditional 22K gold bead strands, our matrimony collection celebrates sacred promises with effortless versatility.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-amber-200">
              <span>✦ IGI Certified Natural Diamonds</span>
              <span>✦ Anti-Tangle Spun Gold Chain</span>
              <span>✦ Customizable 16" to 18" Length</span>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#DECDB3] mb-8">
          <div>
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              Matrimony Creations ({mangalsutraProducts.length})
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Available in 18K Yellow Gold, Rose Gold, and Solid 22K Gold.
            </p>
          </div>

          <button
            onClick={onExploreAll}
            className="text-xs font-semibold text-amber-800 hover:underline cursor-pointer"
          >
            Browse All Jewellery &rarr;
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mangalsutraProducts.map((product) => (
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
