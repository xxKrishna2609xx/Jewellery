import React from 'react';
import { TrendingUp, TrendingDown, Clock, Calculator, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { LIVE_RATES, formatINR } from '../../data/goldRates';

export default function LiveRateBar({ onOpenCalculator }) {
  const purities = ['24K', '22K', '18K', '14K', 'Silver'];

  return (
    <section className="py-12 bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE6] to-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 pb-4 border-b border-[#DECDB3] gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8E5822] mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Official Indian Bullion Market Index</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Today's Live Precious Metal Rates
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              Updated automatically based on real-time MCX & IBJA (India Bullion and Jewellers Association) benchmarks.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-stone-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {LIVE_RATES.lastUpdated}
            </span>
            <button
              onClick={onOpenCalculator}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#1C1814] text-amber-300 hover:bg-[#2F271F] font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Bill Yourself Calculator</span>
            </button>
          </div>
        </div>

        {/* Rate Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {purities.map((key) => {
            const data = LIVE_RATES.rates[key];
            return (
              <div 
                key={key}
                onClick={onOpenCalculator}
                className="bg-white p-4 rounded-2xl border border-stone-200 hover:border-amber-400 hover:shadow-lg transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif font-bold text-lg text-stone-900 group-hover:text-amber-800 transition-colors">
                    {key}
                  </span>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5 ${
                    data.isUp ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                  }`}>
                    {data.isUp ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
                    {data.changePercent}
                  </span>
                </div>

                <div className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
                  {formatINR(data.ratePerGram)}
                  <span className="text-xs font-sans text-stone-400 font-normal"> / gram</span>
                </div>

                <div className="text-[11px] text-stone-500 mt-1 truncate">
                  {data.hallmark}
                </div>

                <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-amber-700 font-semibold group-hover:translate-x-0.5 transition-transform">
                  <span>Calculate piece</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 7-Day Trend Chart & Trust Banner */}
        <div className="mt-6 bg-white rounded-2xl p-4 sm:p-6 border border-stone-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Mini Trend Sparkline */}
          <div className="w-full md:w-1/2 space-y-2">
            <div className="flex items-center justify-between text-xs text-stone-600">
              <span className="font-semibold text-stone-900">22K Gold 7-Day Price Trajectory</span>
              <span className="text-emerald-600 font-bold">+1.2% this week</span>
            </div>
            
            <div className="flex items-end justify-between h-16 pt-2 gap-2">
              {LIVE_RATES.trend7Days.map((item, i) => {
                const min = 7130;
                const max = 7230;
                const heightPercent = Math.max(20, Math.min(100, ((item.rate - min) / (max - min)) * 100));
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                    {/* Tooltip */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 bg-stone-900 text-white text-[10px] px-1.5 py-0.5 rounded whitespace-nowrap pointer-events-none z-10 font-sans">
                      {formatINR(item.rate)}
                    </div>
                    <div 
                      className="w-full bg-amber-200 group-hover:bg-amber-500 rounded-t-sm transition-all"
                      style={{ height: `${heightPercent}%` }}
                    />
                    <span className="text-[10px] text-stone-400 font-medium">{item.day}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Gold Guarantee Banner */}
          <div className="w-full md:w-1/2 bg-[#FAF5EC] p-4 rounded-xl border border-[#E8DAC2] flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-stone-900 text-sm">
                The Aura Jewels Pure Price Guarantee
              </h4>
              <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                Every gold jewellery item invoice carries the exact gold rate, gross weight, net weight, stone weight, and hallmarked HUID. 100% transparency, zero ambiguity.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
