import React from 'react';
import { Diamond, Phone } from 'lucide-react';

export default function Footer({ onOpenCalculator, onOpenStoreLocator, onSelectCategory }) {
  return (
    <footer className="bg-[#14100D] text-[#ECE5D8] pt-12 pb-8 border-t border-[#2A221A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Minimalist Row: Brand + High Jewellery + Concierge */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-white/10">
          
          {/* Brand Identity & Philosophy (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E6CA85] via-[#C5A059] to-[#8E6928] flex items-center justify-center shadow-xs">
                <Diamond className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-serif text-lg font-bold tracking-[0.2em] text-white uppercase">
                Aura Jewels
              </span>
            </div>
            
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Pioneering fine jewellery transparency since 1984. Every creation carries official Bureau of Indian Standards (BIS) hallmarking, laser HUID, and certified natural diamond grading.
            </p>

            {/* Subtle Social Links */}
            <div className="flex items-center gap-3 pt-1 text-stone-400">
              <span className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center hover:text-amber-300 transition-colors cursor-pointer" title="Instagram">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </span>
              <span className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center hover:text-amber-300 transition-colors cursor-pointer" title="Facebook">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/></svg>
              </span>
              <span className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center hover:text-amber-300 transition-colors cursor-pointer" title="YouTube">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </span>
            </div>
          </div>

          {/* Quick Curations (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
              High Jewellery
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><button onClick={() => onSelectCategory('all')} className="hover:text-amber-200 transition-colors cursor-pointer">All Collections</button></li>
              <li><button onClick={() => onSelectCategory('rings')} className="hover:text-amber-200 transition-colors cursor-pointer">Solitaire Rings</button></li>
              <li><button onClick={() => onSelectCategory('necklaces')} className="hover:text-amber-200 transition-colors cursor-pointer">Bridal Necklaces</button></li>
              <li><button onClick={() => onSelectCategory('mangalsutras')} className="hover:text-amber-200 transition-colors cursor-pointer">Sacred Mangalsutras</button></li>
              <li><button onClick={() => onSelectCategory('coins')} className="hover:text-amber-200 transition-colors cursor-pointer">24K Bullion Coins</button></li>
            </ul>
          </div>

          {/* Services & Concierge (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
              Assistance & Services
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <button 
                onClick={onOpenCalculator} 
                className="block hover:text-amber-200 transition-colors cursor-pointer text-left"
              >
                Today's Gold Rate Calculator
              </button>
              <button 
                onClick={onOpenStoreLocator} 
                className="block hover:text-amber-200 transition-colors cursor-pointer text-left"
              >
                Find Boutique Showrooms
              </button>
              <div className="pt-2 text-stone-400">
                <span className="text-[11px] text-stone-500 block">Toll-Free Concierge</span>
                <a 
                  href="tel:18002872465" 
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1.5 mt-0.5 text-xs"
                >
                  <Phone className="w-3.5 h-3.5" /> 1800-AURA-GOLD (10 AM - 8 PM IST)
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div className="flex items-center gap-4 text-stone-400">
            <span>BIS 916 Hallmarked</span>
            <span>•</span>
            <span>IGI & GIA Certified</span>
            <span>•</span>
            <span>100% Conflict-Free</span>
          </div>
          <div className="text-center sm:text-right">
            © 2026 Aura Jewels. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
