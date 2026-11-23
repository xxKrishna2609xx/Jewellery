import React, { useState } from 'react';
import { Sparkles, TrendingUp, TrendingDown, MapPin, Phone, ShieldCheck, ChevronRight } from 'lucide-react';
import { LIVE_RATES, formatINR } from '../../data/goldRates';

export default function AnnouncementBar({ onOpenCalculator, onOpenStoreLocator }) {
  const [activeRateTab, setActiveRateTab] = useState('22K');

  const rates = [
    { key: '24K', label: '24K Gold', rate: LIVE_RATES.rates['24K'].ratePerGram, change: '+₹35', isUp: true },
    { key: '22K', label: '22K Hallmarked', rate: LIVE_RATES.rates['22K'].ratePerGram, change: '+₹32', isUp: true },
    { key: '18K', label: '18K Diamond Gold', rate: LIVE_RATES.rates['18K'].ratePerGram, change: '+₹26', isUp: true },
    { key: 'Silver', label: 'Silver (1g)', rate: LIVE_RATES.rates['Silver'].ratePerGram, change: '-₹0.5', isUp: false },
  ];

  return (
    <div className="bg-[#1C1814] text-[#E8DFD3] text-xs font-sans tracking-wide border-b border-[#383129] relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
        
        {/* Left: Live Gold Rate Ticker */}
        <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          <div className="flex items-center gap-1.5 shrink-0 bg-[#2D261F] px-2.5 py-1 rounded-full border border-[#4A3F33]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-3.5"></span>
            <span className="font-semibold text-amber-300 text-[11px] uppercase tracking-wider">Live Rates</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] shrink-0">
            {rates.map((item) => (
              <div 
                key={item.key} 
                onClick={onOpenCalculator}
                className="flex items-center gap-1.5 cursor-pointer hover:text-amber-300 transition-colors py-0.5"
                title="Click to open Gold Calculator"
              >
                <span className="text-stone-400 font-medium">{item.label}:</span>
                <span className="font-semibold text-stone-100">{formatINR(item.rate)}/g</span>
                <span className={`inline-flex items-center text-[10px] ${item.isUp ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {item.isUp ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
                  {item.change}
                </span>
              </div>
            ))}
          </div>

          <button 
            onClick={onOpenCalculator}
            className="hidden lg:inline-flex items-center gap-1 text-[11px] text-amber-300 hover:text-amber-200 underline underline-offset-2 ml-1 cursor-pointer font-medium"
          >
            Bill Yourself <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Right: Assurance, Store Locator & Support */}
        <div className="hidden sm:flex items-center gap-5 text-[11px] text-stone-300 shrink-0">
          <div className="flex items-center gap-1.5 text-amber-200/90">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>100% BIS 916 Hallmarked</span>
          </div>

          <span className="text-stone-600">|</span>

          <button 
            onClick={onOpenStoreLocator}
            className="flex items-center gap-1 hover:text-amber-300 transition-colors cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Showrooms (NCR, Mumbai, BLR)</span>
          </button>

          <span className="text-stone-600">|</span>

          <a 
            href="tel:18002872465" 
            className="flex items-center gap-1 hover:text-amber-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>1800-AURA-GOLD</span>
          </a>
        </div>

      </div>
    </div>
  );
}
