import React from 'react';
import { Diamond, ShieldCheck, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { SHOWROOMS } from '../../data/products';

export default function Footer({ onOpenCalculator, onOpenStoreLocator, onSelectCategory }) {
  return (
    <footer className="bg-[#17130F] text-[#E8DFD3] pt-12 pb-12 border-t border-[#2F271E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E6CA85] via-[#C5A059] to-[#8E6928] flex items-center justify-center">
                <Diamond className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-xl font-bold tracking-[0.2em] text-white uppercase">
                Aura Jewels
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed pr-4">
              Pioneering high-jewellery transparency since 1984. Every gold jewel is crafted in certified 14K, 18K, 22K or 24K gold bearing the official Bureau of Indian Standards (BIS) hallmark and traceable 6-digit laser HUID.
            </p>

            {/* Social SVGs */}
            <div className="pt-2 flex items-center gap-4 text-stone-400">
              <span className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center hover:text-amber-400 transition-colors cursor-pointer" title="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </span>
              <span className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center hover:text-amber-400 transition-colors cursor-pointer" title="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/></svg>
              </span>
              <span className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center hover:text-amber-400 transition-colors cursor-pointer" title="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </span>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Our Collections
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><button onClick={() => onSelectCategory('rings')} className="hover:text-amber-200 transition-colors cursor-pointer">Engagement Rings & Bands</button></li>
              <li><button onClick={() => onSelectCategory('necklaces')} className="hover:text-amber-200 transition-colors cursor-pointer">Bridal Necklaces & Chokers</button></li>
              <li><button onClick={() => onSelectCategory('earrings')} className="hover:text-amber-200 transition-colors cursor-pointer">Diamond Studs & Jhumkas</button></li>
              <li><button onClick={() => onSelectCategory('bangles')} className="hover:text-amber-200 transition-colors cursor-pointer">Bangles & Gold Kadas</button></li>
              <li><button onClick={() => onSelectCategory('mangalsutras')} className="hover:text-amber-200 transition-colors cursor-pointer">Modern Mangalsutras</button></li>
              <li><button onClick={() => onSelectCategory('coins')} className="hover:text-amber-200 transition-colors cursor-pointer">24K 999 Investment Coins</button></li>
            </ul>
          </div>

          {/* Services & Transparency */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Transparency & Care
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><button onClick={onOpenCalculator} className="hover:text-amber-200 transition-colors cursor-pointer">Live Gold Rate Calculator</button></li>
              <li><button onClick={onOpenStoreLocator} className="hover:text-amber-200 transition-colors cursor-pointer">Boutique Store Locator</button></li>
              <li><span className="hover:text-amber-200 cursor-pointer">100% BIS Hallmarking Policy</span></li>
              <li><span className="hover:text-amber-200 cursor-pointer">Zero Deduction Exchange Policy</span></li>
              <li><span className="hover:text-amber-200 cursor-pointer">Complimentary Ultrasonic Cleaning</span></li>
              <li><span className="hover:text-amber-200 cursor-pointer">Insured Armoured Transit</span></li>
            </ul>
          </div>

          {/* Flagship Showrooms */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Showroom Boutiques
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div>
                <strong className="text-stone-200 block">Delhi Flagship</strong>
                <span>South Extension Part 1, Ring Road</span>
              </div>
              <div>
                <strong className="text-stone-200 block">Mumbai Lounge</strong>
                <span>Linking Road, Bandra West</span>
              </div>
              <div>
                <strong className="text-stone-200 block">Bengaluru</strong>
                <span>100ft Road, Indiranagar</span>
              </div>
              <div>
                <a href="tel:18002872465" className="text-amber-400 hover:underline font-semibold flex items-center gap-1 mt-2">
                  <Phone className="w-3.5 h-3.5" /> 1800-AURA-GOLD
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Certifications & Regulatory Strip */}
        <div className="pt-8 border-t border-[#2F271E] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
            <span className="px-2.5 py-1 bg-[#211B15] rounded border border-[#382F24] text-stone-300 font-medium">
              BIS 916 Laser HUID
            </span>
            <span className="px-2.5 py-1 bg-[#211B15] rounded border border-[#382F24] text-stone-300 font-medium">
              IGI & SGL Certified
            </span>
            <span className="px-2.5 py-1 bg-[#211B15] rounded border border-[#382F24] text-stone-300 font-medium">
              IBJA Member (India)
            </span>
            <span className="px-2.5 py-1 bg-[#211B15] rounded border border-[#382F24] text-stone-300 font-medium">
              100% Conflict Free
            </span>
          </div>

          <div className="text-center md:text-right">
            © 2026 Aura Jewels Fine Jewellery Ltd. All Rights Reserved. Compliant with Indian Hallmarking Regulations.
          </div>
        </div>

      </div>
    </footer>
  );
}
