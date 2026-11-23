import React, { useState } from 'react';
import { 
  ChevronRight, Home, ArrowLeft, Coins, 
  ShieldCheck, RefreshCw, Award, CheckCircle2, QrCode, Lock 
} from 'lucide-react';
import ProductCard from '../Home/ProductCard';
import { LIVE_RATES, formatINR } from '../../data/goldRates';

export default function GoldCoinsPage({
  products = [],
  onSelectProduct,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlist = [],
  onNavigateHome
}) {
  const [selectedWeight, setSelectedWeight] = useState(10);

  const coinProducts = products.filter(p => p.category === 'coins');

  const denominations = [
    { weight: 1, name: '1 Gram Sovereign', price: 8125 },
    { weight: 2, name: '2 Gram Sovereign', price: 16250 },
    { weight: 5, name: '5 Gram Sovereign', price: 40625 },
    { weight: 10, name: '10 Gram Sovereign', price: 81250, popular: true },
    { weight: 20, name: '20 Gram Sovereign', price: 162500 },
    { weight: 50, name: '50 Gram Bullion Bar', price: 406250 }
  ];

  const rate24K = LIVE_RATES.rates['24K'];

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
            <span className="text-amber-900 font-bold">24K 999 Investment Bullion Coins</span>
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
        <div className="bg-gradient-to-r from-[#2B1B05] via-[#452D08] to-[#1A1002] text-white p-8 sm:p-12 rounded-3xl mb-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[11px] font-bold uppercase tracking-wider text-amber-300">
              <Coins className="w-3.5 h-3.5" />
              <span>Swiss Assay Standard • 99.9% Pure 24K Gold</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Investment Bullion & Sacred Coins
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-xl">
              Minted in 999 fineness 24 Karat pure gold depicting Goddess Lakshmi and Lord Ganesha. Sealed in tamper-proof acrylic assay blister packs with unique serialized QR verification.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
              <span className="px-3.5 py-1.5 bg-white/15 rounded-xl border border-white/20 text-amber-200">
                Today's 24K Rate: <strong>{formatINR(rate24K.ratePerGram)}/g</strong>
              </span>
              <span className="px-3.5 py-1.5 bg-white/15 rounded-xl border border-white/20 text-emerald-300 flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5" /> 100% Lifetime Buyback Guarantee
              </span>
            </div>
          </div>
        </div>

        {/* Denominations Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">
            Available Bullion Denominations
          </h2>
          <p className="text-xs text-stone-500 mb-6">
            All coins arrive in tamper-proof assay certi-cards with certified weight and purity guarantees.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {denominations.map((d) => (
              <div
                key={d.weight}
                onClick={() => setSelectedWeight(d.weight)}
                className={`p-4 rounded-2xl border text-center transition-all cursor-pointer bg-white relative ${
                  selectedWeight === d.weight
                    ? 'border-amber-600 ring-2 ring-amber-400/50 shadow-md'
                    : 'border-stone-200 hover:border-amber-400'
                }`}
              >
                {d.popular && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-stone-950 uppercase tracking-wider shadow-xs whitespace-nowrap">
                    Most Popular
                  </span>
                )}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E6CA85] via-[#C5A059] to-[#8E6928] mx-auto mb-2 flex items-center justify-center font-serif font-black text-white text-base shadow-xs">
                  {d.weight}g
                </div>
                <h3 className="font-bold text-xs text-stone-900">{d.name}</h3>
                <div className="mt-1 font-serif font-bold text-sm text-[#7A531C]">
                  {formatINR(d.price)}
                </div>
                <span className="text-[10px] text-emerald-600 font-semibold block mt-1">
                  Zero Weight Loss
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Bullion Products */}
        <div className="mb-12">
          <div className="flex items-center justify-between pb-4 border-b border-[#DECDB3] mb-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                Sealed Certified Bullion ({coinProducts.length})
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Eligible for free armored door-to-door delivery with recipient OTP authentication.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coinProducts.map((product) => (
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

        {/* 3 Pillars of Bullion Trust */}
        <div className="bg-[#FAF3E5] p-6 sm:p-8 rounded-3xl border border-[#DEC093] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-stone-900">NABL Lab Assayed</h4>
              <p className="text-xs text-stone-600 mt-0.5">999.0 purity certified with independent government-recognized assay laboratory tests.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Lock className="w-6 h-6 text-amber-800 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-stone-900">Tamper-Evident Pack</h4>
              <p className="text-xs text-stone-600 mt-0.5">Sealed in acrylic blister cards that show visible patterns if ever opened or compromised.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <RefreshCw className="w-6 h-6 text-amber-800 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-stone-900">100% Bullion Buyback</h4>
              <p className="text-xs text-stone-600 mt-0.5">Guaranteed buyback across India at prevailing spot rates with zero deductions on sealed packs.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
