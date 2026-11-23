import React, { useState } from 'react';
import { 
  Search, Heart, ShoppingBag, Calculator, 
  Menu, X, Sparkles, ChevronDown, Diamond, Home 
} from 'lucide-react';
import { CATEGORIES } from '../../data/products';
import { formatINR } from '../../data/goldRates';

export default function Navbar({
  currentPage = 'home',
  onNavigateHome,
  activeCategory,
  onSelectCategory,
  onOpenSearch,
  onOpenCalculator,
  onOpenCart,
  onOpenWishlist,
  cartCount = 0,
  wishlistCount = 0,
  cartTotal = 0
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8DFD3] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header Row */}
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-amber-700 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Identity / Logo */}
          <div 
            onClick={() => { onNavigateHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group select-none shrink-0 py-1"
            title="Go to Aura Jewels Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#E6CA85] via-[#C5A059] to-[#8E6928] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300 shrink-0">
              <Diamond className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-display text-lg sm:text-xl xl:text-2xl font-bold tracking-[0.14em] text-[#1C1814] uppercase group-hover:text-[#A77B28] transition-colors whitespace-nowrap leading-none">
                Aura Jewels
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#8C7A65] font-semibold whitespace-nowrap leading-none mt-1">
                Haute Joaillerie • 1984
              </span>
            </div>
          </div>

          {/* Desktop Category Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 overflow-hidden">
            <button
              onClick={onNavigateHome}
              className={`px-2.5 xl:px-3 py-1.5 text-[11px] xl:text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer relative whitespace-nowrap ${
                currentPage === 'home'
                  ? 'text-[#8E5822] font-bold' 
                  : 'text-stone-700 hover:text-amber-800 hover:bg-[#F2ECE0]/60'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-amber-500 to-amber-700 rounded-full"></span>
              )}
            </button>

            {CATEGORIES.map((cat) => {
              const isActive = currentPage === 'shop' && activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-2 xl:px-3 py-1.5 text-[11px] xl:text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer relative whitespace-nowrap ${
                    isActive 
                      ? 'text-[#8E5822] font-bold' 
                      : 'text-stone-700 hover:text-amber-800 hover:bg-[#F2ECE0]/60'
                  }`}
                >
                  {cat.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-amber-500 to-amber-700 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Tools (Calculator, Search, Wishlist, Cart) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            
            {/* Live Price Calculator Quick Trigger */}
            <button
              onClick={onOpenCalculator}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#664319] bg-[#EEDCB5]/60 hover:bg-[#EEDCB5] border border-[#DECA9F] rounded-full transition-all cursor-pointer shadow-xs hover:shadow-sm"
              title="Calculate Live Price by Weight and Purity"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-700" />
              <span>Bill Yourself</span>
            </button>

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-stone-700 hover:text-amber-800 hover:bg-[#F2ECE0] rounded-full transition-colors cursor-pointer"
              title="Search Jewellery, Diamonds, Coins"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Button with Counter */}
            <button
              onClick={onOpenWishlist}
              className="p-2.5 text-stone-700 hover:text-rose-700 hover:bg-rose-50/60 rounded-full transition-colors relative cursor-pointer"
              title="Saved Jewels"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-rose-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 pl-3 pr-4 py-2 bg-[#1C1814] hover:bg-[#2F2922] text-[#FAF6F0] rounded-full text-xs font-medium transition-all shadow-sm cursor-pointer hover:shadow-md"
              title="View Shopping Bag"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-amber-300" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-amber-500 text-stone-950 text-[10px] font-extrabold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-semibold">
                {cartCount > 0 ? formatINR(cartTotal) : 'Bag'}
              </span>
            </button>

          </div>

        </div>

        {/* Mobile Navigation Drawer Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E8DFD3] py-4 bg-[#FAF8F5] animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button
                onClick={() => {
                  onNavigateHome();
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  currentPage === 'home'
                    ? 'bg-amber-100/70 text-amber-900 font-bold'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                Home Showcase
              </button>

              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    currentPage === 'shop' && activeCategory === cat.id
                      ? 'bg-amber-100/70 text-amber-900 font-bold'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenCalculator();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-amber-100 text-amber-900 font-semibold rounded-lg text-xs"
              >
                <Calculator className="w-4 h-4" />
                Live Gold Calculator (Bill Yourself)
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
