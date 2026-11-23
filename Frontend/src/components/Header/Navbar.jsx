import React, { useState } from 'react';
import { 
  Search, Heart, ShoppingBag, Calculator, 
  Menu, X, Sparkles, ChevronDown, Diamond, Home, User, MapPin 
} from 'lucide-react';
import { formatINR } from '../../data/goldRates';

export default function Navbar({
  currentPage = 'home',
  onNavigateHome,
  onNavigatePage,
  onOpenSearch,
  onOpenCalculator,
  onOpenStoreLocator,
  onOpenCart,
  onOpenWishlist,
  onOpenAuth,
  onOpenAccount,
  user = null,
  cartCount = 0,
  wishlistCount = 0,
  cartTotal = 0
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'all-jewellery', label: 'All Jewellery' },
    { id: 'gold-9k-14k', label: '9KT & 14KT Gold', badge: 'New' },
    { id: 'gold-22k', label: '22K Gold' },
    { id: 'collections', label: 'Collections' },
    { id: 'calculator', label: 'Solitaire Calculator' },
    { id: 'daily-wear', label: 'Daily Wear' },
    { id: 'mangalsutras', label: 'Mangalsutras' },
    { id: 'gold-coins', label: 'Gold Coins' },
    { id: 'showrooms', label: 'Showrooms' }
  ];

  return (
    <header className="sticky top-0 z-30 bg-white transition-all duration-300 shadow-xs">
      
      {/* Tier 1: Main Header Row (White Luxury Background) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-amber-800 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo - Luxury Wordmark */}
          <div 
            onClick={() => { onNavigateHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
            title="Aura Jewels Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#E6CA85] via-[#C5A059] to-[#8E6928] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300 shrink-0">
              <Diamond className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-display text-xl sm:text-2xl font-black tracking-[0.16em] text-[#4A102E] uppercase group-hover:text-[#8E5822] transition-colors whitespace-nowrap leading-none">
                Aura Jewels
              </span>
              <span className="text-[8px] uppercase tracking-[0.28em] text-[#8C7A65] font-semibold whitespace-nowrap leading-none mt-1">
                Haute Joaillerie • 1984
              </span>
            </div>
          </div>

          {/* Prominent Center Search Bar (Right Gold Style) */}
          <div className="hidden md:flex flex-1 max-w-xl mx-2">
            <div 
              onClick={onOpenSearch}
              className="w-full flex items-center justify-between bg-stone-50 hover:bg-white border border-stone-300 hover:border-[#4A102E] rounded-full px-4 py-2 text-xs text-stone-500 cursor-pointer transition-all shadow-2xs group"
            >
              <span className="text-stone-400 group-hover:text-stone-600 font-medium truncate">
                Search certified gold jewellery, diamond rings, 24K coins...
              </span>
              <div className="p-1.5 rounded-full text-stone-500 group-hover:text-[#4A102E]">
                <Search className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Action Tools (Right Gold Style) */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            
            {/* Today's Gold Rate Quick Button */}
            <button
              onClick={onOpenCalculator}
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold text-[#5A1434] bg-[#FAF3E5] hover:bg-[#F5EAD4] border border-[#DECA9F] rounded-full transition-all cursor-pointer shadow-2xs hover:shadow-xs"
              title="Click for Real-time Bullion Calculator"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
              <span>Today's Gold Rate</span>
            </button>

            {/* Store Locator Icon */}
            <button
              onClick={() => onNavigatePage('showrooms')}
              className="p-2 text-stone-700 hover:text-[#4A102E] hover:bg-stone-50 rounded-full transition-colors cursor-pointer hidden lg:flex"
              title="Locate Boutique Showrooms"
              aria-label="Store locator"
            >
              <MapPin className="w-5 h-5 stroke-[1.75]" />
            </button>

            {/* User Account / Profile */}
            {user ? (
              <button
                onClick={onOpenAccount}
                className="flex items-center gap-1.5 p-1 sm:px-2.5 sm:py-1 bg-[#FAF3E5] hover:bg-[#F5EAD4] border border-[#E3CEAB] rounded-full text-xs font-semibold text-stone-900 transition-all cursor-pointer shadow-2xs"
                title="My Vault Account & Orders"
              >
                <div className="w-6 h-6 rounded-full bg-[#4A102E] text-amber-300 flex items-center justify-center text-[10px] font-bold">
                  {user.name ? user.name[0] : 'U'}
                </div>
                <span className="hidden xl:inline font-serif font-bold text-stone-900 text-[11px]">
                  {user.name.split(' ')[0]}
                </span>
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="p-2 text-stone-700 hover:text-[#4A102E] hover:bg-stone-50 rounded-full transition-colors cursor-pointer"
                title="Sign In / Register"
                aria-label="Account"
              >
                <User className="w-5 h-5 stroke-[1.75]" />
              </button>
            )}

            {/* Wishlist Heart */}
            <button
              onClick={onOpenWishlist}
              className="p-2 text-stone-700 hover:text-rose-600 hover:bg-stone-50 rounded-full transition-colors relative cursor-pointer"
              title="Saved Jewels"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 stroke-[1.75]" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-rose-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-1.5 p-2 sm:px-3 sm:py-1.5 text-stone-700 hover:text-[#4A102E] hover:bg-stone-50 rounded-full transition-colors relative cursor-pointer"
              title="Shopping Bag"
              aria-label="Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#4A102E] text-amber-300 text-[10px] font-extrabold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden xl:inline text-xs font-bold text-stone-800">
                {cartCount > 0 ? formatINR(cartTotal) : 'Bag'}
              </span>
            </button>

          </div>

        </div>
      </div>

      {/* Tier 2: Royal Burgundy Subnav Bar (Matching Right Gold Reference) */}
      <div className="bg-[#4A102E] text-white hidden lg:block border-t border-[#3B0C24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-2.5 text-[11px] xl:text-xs font-semibold tracking-wide">
            
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => onNavigatePage(link.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-all cursor-pointer relative whitespace-nowrap ${
                    isActive 
                      ? 'text-amber-300 font-bold bg-white/10' 
                      : 'text-stone-200 hover:text-amber-300 hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.2 bg-[#F39C12] text-stone-950 rounded-full uppercase">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute -bottom-2.5 left-2 right-2 h-[2px] bg-amber-400 rounded-full"></span>
                  )}
                </button>
              );
            })}

          </nav>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 py-4 px-4 bg-white animate-in fade-in slide-in-from-top-2 duration-200">
          
          {/* Mobile Search */}
          <div className="mb-4">
            <button
              onClick={() => { onOpenSearch(); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-between p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-500"
            >
              <span>Search designs, rings, coins...</span>
              <Search className="w-4 h-4 text-stone-600" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              onClick={() => { onNavigateHome(); setMobileMenuOpen(false); }}
              className={`text-left px-3 py-2 text-xs font-semibold rounded-lg ${
                currentPage === 'home' ? 'bg-[#4A102E] text-white font-bold' : 'bg-stone-100 text-stone-900'
              }`}
            >
              Home Showcase
            </button>

            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => { onNavigatePage(link.id); setMobileMenuOpen(false); }}
                className={`text-left px-3 py-2 text-xs font-semibold rounded-lg flex items-center justify-between ${
                  currentPage === link.id ? 'bg-[#4A102E] text-white font-bold' : 'bg-stone-100 text-stone-900'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[9px] px-1 bg-[#F39C12] text-black rounded font-bold">{link.badge}</span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => { onOpenCalculator(); setMobileMenuOpen(false); }}
              className="w-full py-2 bg-[#FAF3E5] text-[#5A1434] font-bold rounded-xl text-xs border border-[#DECA9F] flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-[#5A1434]" />
              <span>Today's Gold Rate Calculator</span>
            </button>
          </div>

        </div>
      )}

    </header>
  );
}
