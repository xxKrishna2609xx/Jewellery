import React from 'react';
import { 
  ChevronRight, Home, ShieldCheck, Sparkles, 
  ArrowLeft, CheckCircle2, Award, RefreshCw 
} from 'lucide-react';
import ProductCard from '../Home/ProductCard';
import { LIVE_RATES, formatINR } from '../../data/goldRates';

export default function PurityPage({
  type = '22K', // '22K' | '9K-14K'
  products = [],
  onSelectProduct,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlist = [],
  onNavigateHome,
  onExploreAll
}) {
  const is22K = type === '22K';

  // Filter products based on purity type
  const displayProducts = products.filter(p => {
    if (is22K) {
      return p.purity === '22K' || p.availablePurities?.includes('22K');
    } else {
      return p.purity === '14K' || p.purity === '18K' || p.availablePurities?.includes('14K');
    }
  });

  const rate = is22K ? LIVE_RATES.rates['22K'] : LIVE_RATES.rates['14K'];

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
            <span className="text-amber-900 font-bold">
              {is22K ? '22K Heritage Gold' : '9KT & 14KT Modern Gold (NEW)'}
            </span>
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
        <div className={`p-8 sm:p-12 rounded-3xl text-white mb-12 shadow-xl relative overflow-hidden ${
          is22K 
            ? 'bg-gradient-to-r from-[#3B0E23] via-[#521735] to-[#2B0818]' 
            : 'bg-gradient-to-r from-[#1C1829] via-[#2F2647] to-[#151221]'
        }`}>
          {/* Ambient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[11px] font-bold uppercase tracking-wider text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{is22K ? 'BIS 916 Sovereign Standard' : 'Contemporary Daily Wear • Just Launched'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              {is22K ? 'Pure 22 Karat Sovereign Gold' : 'Modern 9KT & 14KT Feather-Light Gold'}
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-xl">
              {is22K 
                ? 'Handcrafted by master karigars in imperial Nakshi repoussé, uncut Polki, and temple carvings. Certified with the mandatory BIS 916 laser hallmark and 6-digit unique HUID.'
                : 'Engineered specifically for the modern lifestyle. Higher alloy hardness provides superior scratch resistance for daily computer work, workouts, and travel at accessible luxury price points.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
              <div className="px-4 py-2 bg-white/15 rounded-xl border border-white/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Today's Bullion Rate: <strong>{formatINR(rate.ratePerGram)}/g</strong></span>
              </div>
              <div className="px-4 py-2 bg-white/15 rounded-xl border border-white/20 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                <span>{is22K ? '100% Zero Deduction Exchange' : 'Certified 375 & 585 BIS Standards'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Educational 3-Pillar Information Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-900 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-amber-800" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base">
              {is22K ? 'Official 916 Hallmark' : 'Durable Alloy Hardness'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {is22K 
                ? '91.6% pure gold alloyed with noble metals for timeless luster and heirloom durability.'
                : 'Fortified with copper and silver to prevent bending or deformation during daily chores.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-900 flex items-center justify-center">
              <Award className="w-5 h-5 text-amber-800" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base">
              {is22K ? 'Imperial Bridal Heritage' : 'Accessible Luxury Pricing'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {is22K 
                ? 'Designed for weddings, festivals, and generational gifting that preserves capital value.'
                : 'Start your solid gold collection from ₹7,999 without compromising on authentic certification.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-900 flex items-center justify-center">
              <RefreshCw className="w-5 h-5 text-amber-800" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base">
              Lifetime Buyback Guarantee
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Exchange or trade in your jewellery at any Aura boutique benchmarked directly to live bullion market rates.
            </p>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#DECDB3] mb-8">
          <div>
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              Curated {is22K ? '22K Sovereign Creations' : '9KT & 14KT Essentials'} ({displayProducts.length})
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Every creation includes official laser HUID and transparent bill breakup.
            </p>
          </div>

          <button
            onClick={onExploreAll}
            className="text-xs font-semibold text-amber-800 hover:underline cursor-pointer"
          >
            Browse All Categories &rarr;
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
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
