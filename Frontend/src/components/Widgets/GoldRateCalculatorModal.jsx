import React, { useState } from 'react';
import { 
  X, Calculator, Sparkles, ShieldCheck, Check, 
  HelpCircle, ArrowRight, RefreshCw, Info, Lock 
} from 'lucide-react';
import { LIVE_RATES, calculateJewelleryPrice, formatINR } from '../../data/goldRates';

export default function GoldRateCalculatorModal({ isOpen, onClose, onExploreCategory }) {
  if (!isOpen) return null;

  const [purity, setPurity] = useState('22K');
  const [weight, setWeight] = useState(15.5);
  const [makingRate, setMakingRate] = useState(12); // percentage
  const [gemstoneValue, setGemstoneValue] = useState(5000);
  const [discountPercent, setDiscountPercent] = useState(0);

  const breakdown = calculateJewelleryPrice({
    netGoldWeight: Number(weight) || 0,
    purity,
    makingChargeRate: Number(makingRate) || 0,
    gemstoneValue: Number(gemstoneValue) || 0,
    discountPercent: Number(discountPercent) || 0
  });

  const quickWeights = [5, 10, 15, 25, 50];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF8F5] rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#DECDB3] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#211B15] to-[#362A1F] text-[#FAF6F0] p-6 rounded-t-2xl relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>Right Gold Guarantee • Bill Yourself Calculator</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Transparent Gold Price Calculator
          </h2>
          <p className="text-stone-300 text-xs mt-1 max-w-lg">
            Verify every single rupee of your jewellery purchase against today's certified live market rate. No hidden markups.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* Step 1: Choose Purity */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              1. Select Gold Purity
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {['24K', '22K', '18K', '14K'].map((k) => {
                const rateObj = LIVE_RATES.rates[k];
                const isSelected = purity === k;
                return (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setPurity(k)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-amber-600 bg-amber-50 ring-2 ring-amber-400/40 shadow-xs'
                        : 'border-stone-200 bg-white hover:border-amber-300 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-stone-900">{k}</span>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-amber-600"></span>}
                    </div>
                    <div className="text-[11px] text-stone-500 font-medium">{rateObj.hallmark}</div>
                    <div className="mt-1 text-xs font-semibold text-amber-900">
                      {formatINR(rateObj.ratePerGram)}<span className="text-[10px] font-normal text-stone-500">/g</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Weight Input */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                2. Gold Weight in Grams
              </label>
              <span className="text-xs font-semibold text-amber-800">
                Current: {weight} grams
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <input
                  type="number"
                  step="0.01"
                  min="0.5"
                  max="1000"
                  value={weight}
                  onChange={(e) => setWeight(Math.max(0, parseFloat(e.target.value) || 0))}
                  className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl text-base font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                  placeholder="Enter weight in grams"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 font-medium text-sm">
                  Grams (g)
                </span>
              </div>
            </div>

            {/* Quick Weight Pills */}
            <div className="flex items-center gap-2 mt-2.5">
              <span className="text-[11px] text-stone-500">Presets:</span>
              {quickWeights.map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setWeight(w)}
                  className={`px-2.5 py-1 text-xs rounded-lg border transition-colors cursor-pointer ${
                    weight === w 
                      ? 'bg-stone-900 text-white border-stone-900 font-medium'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                  }`}
                >
                  {w}g
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Making Charges & Gemstone Value */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-200">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Making Charges
                </label>
                <span className="text-xs font-semibold text-stone-800">{makingRate}%</span>
              </div>
              <input
                type="range"
                min="3"
                max="18"
                step="0.5"
                value={makingRate}
                onChange={(e) => setMakingRate(parseFloat(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-500 mt-1">
                <span>Coin (3-5%)</span>
                <span>Plain Gold (8-12%)</span>
                <span>Bridal (12-16%)</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                Diamond / Gemstone Value (₹)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 font-medium">₹</span>
                <input
                  type="number"
                  step="500"
                  min="0"
                  value={gemstoneValue}
                  onChange={(e) => setGemstoneValue(Math.max(0, parseFloat(e.target.value) || 0))}
                  className="w-full pl-8 pr-4 py-2 bg-white border border-stone-300 rounded-xl text-sm font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  placeholder="0"
                />
              </div>
            </div>
          </div>

          {/* Live Transparent Price Breakdown Box */}
          <div className="bg-[#FAF3E5] border border-[#E3CEAB] rounded-2xl p-5 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-[#DEC093]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7A531C]">
                Official Indian Bullion Price Breakup
              </span>
              <span className="text-[11px] font-medium text-stone-600 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> BIS 916 Compliant
              </span>
            </div>

            <div className="divide-y divide-[#EAD7B8] text-xs text-stone-700 py-1">
              <div className="flex justify-between py-2">
                <span>Pure Gold Value ({breakdown.netGoldWeight}g × {formatINR(breakdown.goldRate)})</span>
                <span className="font-semibold text-stone-900">{formatINR(breakdown.rawGoldValue)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Making Charges ({makingRate}%)</span>
                <span className="font-semibold text-stone-900">{formatINR(breakdown.finalMakingCharges)}</span>
              </div>
              {breakdown.gemstoneValue > 0 && (
                <div className="flex justify-between py-2">
                  <span>Gemstones / Diamonds</span>
                  <span className="font-semibold text-stone-900">{formatINR(breakdown.gemstoneValue)}</span>
                </div>
              )}
              <div className="flex justify-between py-2">
                <span>GST (3% Indian Standard)</span>
                <span className="font-semibold text-stone-900">{formatINR(breakdown.gst)}</span>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t-2 border-[#D8B47E] flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 block">
                  Estimated Transparent Total
                </span>
                <span className="text-2xl font-serif font-bold text-[#1C1814]">
                  {formatINR(breakdown.total)}
                </span>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onExploreCategory('all');
                }}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#1C1814] hover:bg-[#332A20] text-amber-300 font-semibold text-xs rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>Browse Matching Jewels</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-stone-500 bg-white p-3 rounded-xl border border-stone-200">
            <Lock className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Aura Jewels Price Promise:</strong> The rate you see here is benchmarked against real-time bullion market rates with 100% transparent invoicing.
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
