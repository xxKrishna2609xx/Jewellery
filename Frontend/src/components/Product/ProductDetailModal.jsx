import React, { useState } from 'react';
import { 
  X, Heart, ShoppingBag, ShieldCheck, Star, 
  Truck, RefreshCw, Award, Check, ChevronDown, 
  ChevronUp, Sparkles, MapPin, Calculator, Info 
} from 'lucide-react';
import { LIVE_RATES, calculateJewelleryPrice, formatINR } from '../../data/goldRates';

export default function ProductDetailModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isWishlisted = false
}) {
  if (!isOpen || !product) return null;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedPurity, setSelectedPurity] = useState(product.purity || '22K');
  const [selectedColor, setSelectedColor] = useState(product.metalColor || 'Yellow Gold');
  const [selectedSize, setSelectedSize] = useState('14 (Standard)');
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState(null);
  const [showBreakdown, setShowBreakdown] = useState(true);

  // Dynamic price calculation based on purity chosen
  const priceBreakdown = calculateJewelleryPrice({
    netGoldWeight: product.netGoldWeight,
    purity: selectedPurity,
    makingChargeRate: product.makingChargePercent || 12,
    gemstoneValue: product.gemstoneValue || 0
  });

  const currentPrice = priceBreakdown.total;

  const handleCheckPincode = (e) => {
    e.preventDefault();
    if (pincode.length === 6 && /^\d+$/.test(pincode)) {
      setPincodeStatus({
        valid: true,
        message: 'Express Insured Delivery available to this pincode in 2-3 business days. Free shipping!'
      });
    } else {
      setPincodeStatus({
        valid: false,
        message: 'Please enter a valid 6-digit Indian postal code.'
      });
    }
  };

  const ringSizes = ['10', '12', '14 (Standard)', '16', '18', '20'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF8F5] rounded-3xl max-w-5xl w-full max-h-[94vh] overflow-y-auto shadow-2xl border border-[#DECDB3] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-900 text-stone-200 hover:text-white transition-all shadow-md cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-8">
          
          {/* Left Column: Image Gallery (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-[#DECDB3] shadow-xs group">
              <img
                src={product.images[selectedImage] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-stone-900 text-amber-300 uppercase tracking-wider">
                  {selectedPurity} {product.hallmark ? 'BIS 916' : ''}
                </span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 uppercase tracking-wider border border-amber-300">
                  {selectedColor}
                </span>
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    selectedImage === idx ? 'border-amber-600 ring-2 ring-amber-400/30' : 'border-stone-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Trust Pillars */}
            <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-stone-600">
              <div className="p-2.5 bg-white rounded-xl border border-stone-200/80 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>BIS Hallmarked HUID</span>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-stone-200/80 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600 shrink-0" />
                <span>100% Certified Diamond</span>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-stone-200/80 flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-stone-700 shrink-0" />
                <span>Lifetime Buyback</span>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-stone-200/80 flex items-center gap-2">
                <Truck className="w-4 h-4 text-stone-700 shrink-0" />
                <span>Free Insured Transit</span>
              </div>
            </div>

          </div>

          {/* Right Column: Customization, Pricing & Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Title & Reviews */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#8E5822]">
                  {product.category.toUpperCase()} • {product.gender.toUpperCase()}
                </span>
                <div className="flex items-center gap-1 text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-stone-900">{product.rating}</span>
                  <span className="text-stone-400">({product.reviewsCount} verified reviews)</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
                {product.name}
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                {product.subtitle}
              </p>
            </div>

            {/* Price Header */}
            <div className="bg-white p-4 rounded-2xl border border-stone-200/80 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-stone-400 font-medium block">
                  Current Certified Price (Incl. GST)
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-stone-950">
                    {formatINR(currentPrice)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-stone-400 line-through">
                      {formatINR(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 block">
                  Zero Deductions
                </span>
                <span className="text-[11px] text-stone-500 mt-1 block">
                  Net Wt: {product.netGoldWeight}g
                </span>
              </div>
            </div>

            {/* Customization 1: Metal Purity */}
            {product.availablePurities && product.availablePurities.length > 1 && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Metal Purity: <span className="text-amber-800 font-semibold">{selectedPurity}</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {product.availablePurities.map((p) => {
                    const isSelected = selectedPurity === p;
                    return (
                      <button
                        key={p}
                        onClick={() => setSelectedPurity(p)}
                        className={`py-2 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'border-amber-600 bg-amber-50 text-amber-950 font-bold ring-1 ring-amber-400'
                            : 'border-stone-200 bg-white text-stone-700 hover:border-amber-300'
                        }`}
                      >
                        <span className="text-xs block">{p} Gold</span>
                        <span className="text-[10px] text-stone-500">
                          {p === '22K' ? '91.6% Pure' : p === '18K' ? '75% Pure' : '58.5% Pure'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Customization 2: Metal Color */}
            {product.availableColors && product.availableColors.length > 1 && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Metal Color: <span className="text-amber-800 font-semibold">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-3">
                  {product.availableColors.map((color) => {
                    const isSelected = selectedColor === color;
                    return (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? 'border-amber-600 bg-stone-900 text-white font-semibold'
                            : 'border-stone-300 bg-white text-stone-700 hover:border-stone-400'
                        }`}
                      >
                        <span 
                          className="w-3.5 h-3.5 rounded-full border border-stone-300"
                          style={{
                            backgroundColor: 
                              color === 'Yellow Gold' ? '#E6CA85' : 
                              color === 'Rose Gold' ? '#E8B4A8' : '#DDE1E5'
                          }}
                        />
                        <span>{color}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Customization 3: Ring / Bangle Size */}
            {product.category === 'rings' && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Ring Size (Indian Standard)
                  </label>
                  <span className="text-xs text-amber-800 underline cursor-pointer">
                    Size Guide
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {ringSizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-1.5 text-xs rounded-lg border transition-colors cursor-pointer ${
                        selectedSize === sz
                          ? 'bg-stone-900 text-white border-stone-900 font-semibold'
                          : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Right Gold Elevated: Transparent Price Breakdown Accordion */}
            <div className="bg-[#FAF3E5] border border-[#E3CEAB] rounded-2xl overflow-hidden">
              <button
                onClick={() => setShowBreakdown(!showBreakdown)}
                className="w-full p-4 flex items-center justify-between text-left cursor-pointer hover:bg-[#F6EEDC] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-amber-800" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#664319]">
                    Transparent Price Breakup (Bill Yourself)
                  </span>
                </div>
                {showBreakdown ? <ChevronUp className="w-4 h-4 text-stone-600" /> : <ChevronDown className="w-4 h-4 text-stone-600" />}
              </button>

              {showBreakdown && (
                <div className="p-4 pt-0 border-t border-[#E8DAC2] text-xs text-stone-700 space-y-2 mt-2">
                  <div className="flex justify-between py-1 border-b border-[#EEDFCA]">
                    <span>Gold Value ({product.netGoldWeight}g × {formatINR(priceBreakdown.goldRate)}/g)</span>
                    <span className="font-semibold text-stone-900">{formatINR(priceBreakdown.rawGoldValue)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#EEDFCA]">
                    <span>Making Charges ({product.makingChargePercent}%)</span>
                    <span className="font-semibold text-stone-900">{formatINR(priceBreakdown.finalMakingCharges)}</span>
                  </div>
                  {product.gemstoneValue > 0 && (
                    <div className="flex justify-between py-1 border-b border-[#EEDFCA]">
                      <span>Diamond / Gemstones ({product.diamond?.carats || 'Certified'})</span>
                      <span className="font-semibold text-stone-900">{formatINR(product.gemstoneValue)}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-1 border-b border-[#EEDFCA]">
                    <span>GST (3% Indian Standard)</span>
                    <span className="font-semibold text-stone-900">{formatINR(priceBreakdown.gst)}</span>
                  </div>
                  <div className="flex justify-between py-1 pt-2 font-bold text-stone-950 text-sm">
                    <span>Final Invoice Total</span>
                    <span>{formatINR(currentPrice)}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Pincode Delivery Estimator */}
            <div className="bg-white p-4 rounded-2xl border border-stone-200">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                Check Delivery & Availability
              </label>
              <form onSubmit={handleCheckPincode} className="flex gap-2">
                <div className="relative flex-1">
                  <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter 6-digit Pincode (e.g. 110001)"
                    className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-stone-900 text-amber-300 text-xs font-semibold rounded-xl hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Check
                </button>
              </form>
              {pincodeStatus && (
                <p className={`text-[11px] mt-2 font-medium ${pincodeStatus.valid ? 'text-emerald-700' : 'text-rose-600'}`}>
                  {pincodeStatus.message}
                </p>
              )}
            </div>

            {/* Action Buttons: Add to Bag & Buy Now */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  onAddToCart({
                    ...product,
                    selectedPurity,
                    selectedColor,
                    selectedSize,
                    price: currentPrice
                  });
                }}
                className="flex-1 py-3.5 px-4 bg-white hover:bg-stone-50 border-2 border-stone-900 text-stone-900 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add To Bag</span>
              </button>

              <button
                onClick={() => {
                  onBuyNow({
                    ...product,
                    selectedPurity,
                    selectedColor,
                    selectedSize,
                    price: currentPrice
                  });
                }}
                className="flex-1 py-3.5 px-4 bg-gradient-to-r from-[#D8A966] via-[#C99039] to-[#B2772B] hover:brightness-105 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Instant Buy Now</span>
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isWishlisted 
                    ? 'border-rose-300 bg-rose-50 text-rose-600' 
                    : 'border-stone-300 bg-white text-stone-600 hover:text-rose-600'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-600' : ''}`} />
              </button>
            </div>

            {/* Description & Specifications Details */}
            <div className="pt-4 border-t border-stone-200 space-y-3 text-xs text-stone-600">
              <h4 className="font-serif font-bold text-stone-900 text-sm">
                Product Details & Hallmark Guarantee
              </h4>
              <p className="leading-relaxed">
                {product.description}
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2 bg-stone-50 p-3 rounded-xl border border-stone-200/80">
                <div>
                  <span className="text-stone-400 block text-[10px]">Gross Weight</span>
                  <span className="font-semibold text-stone-800">{product.grossWeight} grams</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">Net Gold Weight</span>
                  <span className="font-semibold text-stone-800">{product.netGoldWeight} grams</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">Hallmark Certificate</span>
                  <span className="font-semibold text-stone-800">{product.hallmark}</span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px]">Diamond Specs</span>
                  <span className="font-semibold text-stone-800">{product.diamond?.carats || 'Plain Gold'}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
