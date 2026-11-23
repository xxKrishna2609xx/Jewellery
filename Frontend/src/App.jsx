import React, { useState, useEffect, useMemo } from 'react';
import AnnouncementBar from './components/Header/AnnouncementBar';
import Navbar from './components/Header/Navbar';
import HeroBanner from './components/Home/HeroBanner';
import LiveRateBar from './components/Home/LiveRateBar';
import CategoryGrid from './components/Home/CategoryGrid';
import CollectionsShowcase from './components/Home/CollectionsShowcase';
import ProductCard from './components/Home/ProductCard';
import ProductDetailModal from './components/Product/ProductDetailModal';
import GoldRateCalculatorModal from './components/Widgets/GoldRateCalculatorModal';
import StoreLocatorModal from './components/Widgets/StoreLocatorModal';
import SearchModal from './components/Widgets/SearchModal';
import CartDrawer from './components/Cart/CartDrawer';
import WishlistDrawer from './components/Wishlist/WishlistDrawer';
import CheckoutModal from './components/Checkout/CheckoutModal';
import Footer from './components/Footer/Footer';
import ShopPage from './components/Pages/ShopPage';
import AuthModal from './components/Auth/AuthModal';
import AccountModal from './components/Account/AccountModal';
import GoldEssentialsCarousel from './components/Home/GoldEssentialsCarousel';
import QuickCategoryStrip from './components/Home/QuickCategoryStrip';
import FloatingConcierge from './components/Widgets/FloatingConcierge';

import { PRODUCTS, CATEGORIES, TESTIMONIALS } from './data/products';
import { DEFAULT_USER } from './data/mockUser';
import { formatINR } from './data/goldRates';
import { 
  Sparkles, Star, Quote, ShieldCheck, 
  ArrowRight, Award, Gem 
} from 'lucide-react';

export default function App() {
  // Page Routing State ('home' | 'shop') - Landing page is ALWAYS default
  const [currentPage, setCurrentPage] = useState('home');

  // Navigation & Category state
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter & Sort states
  const [selectedPurity, setSelectedPurity] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Modals & Drawers state
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isStoreLocatorOpen, setIsStoreLocatorOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkoutData, setCheckoutData] = useState(null);

  // User Authentication State (Persisted in LocalStorage)
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('aura_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Orders State (Persisted in LocalStorage)
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('aura_orders');
      return saved ? JSON.parse(saved) : DEFAULT_USER.initialOrders;
    } catch {
      return DEFAULT_USER.initialOrders;
    }
  });

  // Notification Toast state
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Cart State (Persisted in LocalStorage)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('aura_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist State (Persisted in LocalStorage)
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('aura_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('aura_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('aura_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('aura_orders', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  // Auth Handlers
  const handleLoginSuccess = (userData) => {
    setUser(userData);
    try {
      localStorage.setItem('aura_user', JSON.stringify(userData));
    } catch (e) {
      console.error(e);
    }
    showToast(`Welcome back, ${userData.name}!`);
  };

  const handleLogout = () => {
    setUser(null);
    try {
      localStorage.removeItem('aura_user');
    } catch (e) {
      console.error(e);
    }
    showToast('Signed out of your vault account.');
  };

  // Cart Handlers
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id && item.selectedPurity === product.selectedPurity);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.selectedPurity === product.selectedPurity
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    showToast(`Added "${product.name}" to your shopping bag.`);
  };

  const handleUpdateCartQuantity = (id, newQty) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  const handleRemoveFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
    showToast('Item removed from shopping bag.');
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product) => {
    const exists = wishlist.some(item => item.id === product.id);
    if (exists) {
      setWishlist(prev => prev.filter(item => item.id !== product.id));
      showToast(`Removed from saved jewels.`);
    } else {
      setWishlist(prev => [...prev, product]);
      showToast(`Saved "${product.name}" to your wishlist.`);
    }
  };

  const handleMoveToCart = (product) => {
    handleAddToCart(product);
    setWishlist(prev => prev.filter(item => item.id !== product.id));
    setIsWishlistOpen(false);
    setIsCartOpen(true);
  };

  // Instant Buy Now
  const handleBuyNow = (product) => {
    handleAddToCart(product);
    setSelectedProduct(null);
    setCheckoutData({
      items: [{ ...product, quantity: 1 }],
      subtotal: product.price,
      discount: 0,
      total: product.price
    });
    setIsCheckoutOpen(true);
  };

  const handleProceedToCheckout = (data) => {
    setCheckoutData(data);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Order Success & Save to History
  const handleOrderSuccess = (newOrder) => {
    setCart([]);
    if (newOrder) {
      setOrders(prev => [newOrder, ...prev]);

      // If user is not yet logged in, auto-link to their order profile
      if (!user) {
        const guestUser = {
          id: 'usr_guest',
          name: 'Aditi Sharma',
          phone: '+91 98101 23456',
          email: 'aditi.sharma@example.com',
          tier: 'Sovereign Patron',
          points: 1200
        };
        setUser(guestUser);
        try {
          localStorage.setItem('aura_user', JSON.stringify(guestUser));
        } catch (e) {
          console.error(e);
        }
      }
    }
  };

  // Navigation helpers
  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToShopWithCategory = (catId = 'all') => {
    setActiveCategory(catId);
    setCurrentPage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered & Sorted Products Calculation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // Category filter
      if (activeCategory !== 'all' && p.category !== activeCategory) {
        return false;
      }
      // Purity filter
      if (selectedPurity !== 'all' && p.purity !== selectedPurity) {
        return false;
      }
      // Gender filter
      if (selectedGender !== 'all' && p.gender !== selectedGender && p.gender !== 'Unisex') {
        return false;
      }
      // Price range filter
      if (selectedPriceRange === 'under50k' && p.price >= 50000) return false;
      if (selectedPriceRange === '50k-1lakh' && (p.price < 50000 || p.price > 100000)) return false;
      if (selectedPriceRange === '1lakh-2lakh' && (p.price < 100000 || p.price > 200000)) return false;
      if (selectedPriceRange === 'above2lakh' && p.price <= 200000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // default featured
    });
  }, [activeCategory, selectedPurity, selectedGender, selectedPriceRange, sortBy]);

  const resetFilters = () => {
    setActiveCategory('all');
    setSelectedPurity('all');
    setSelectedGender('all');
    setSelectedPriceRange('all');
    setSortBy('featured');
  };

  const isAnyFilterActive = activeCategory !== 'all' || selectedPurity !== 'all' || selectedGender !== 'all' || selectedPriceRange !== 'all';

  const cartTotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const cartCount = cart.reduce((acc, i) => acc + i.quantity, 0);
  const wishlistCount = wishlist.length;

  // Bestsellers Spotlight (Top 4 picks on Landing Page)
  const bestsellerSpotlight = useMemo(() => {
    return PRODUCTS.slice(0, 4);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#E5D7B7]">
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-amber-300 px-5 py-3 rounded-2xl shadow-2xl border border-amber-400/40 text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-300 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Announcements & Live Rate Ticker */}
      <AnnouncementBar 
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenStoreLocator={() => setIsStoreLocatorOpen(true)}
      />

      {/* Luxury Brand Header & Navigation with User Account integration */}
      <Navbar
        currentPage={currentPage}
        onNavigateHome={navigateToHome}
        activeCategory={activeCategory}
        onSelectCategory={navigateToShopWithCategory}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        user={user}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        cartTotal={cartTotal}
      />

      {/* VIEW 1: LANDING PAGE (HOME) - Preserved as the default landing view */}
      {currentPage === 'home' && (
        <main className="flex-1 animate-in fade-in duration-300">
          
          {/* Hero Showcase Banner */}
          <HeroBanner 
            onExploreCategory={navigateToShopWithCategory}
            onOpenCalculator={() => setIsCalculatorOpen(true)}
          />

          {/* Tabbed Circular Category Explorer (Gold, Diamond, LG Diamond) */}
          <QuickCategoryStrip onSelectCategory={navigateToShopWithCategory} />

          {/* Signature 3D Gold Essentials Coverflow Carousel */}
          <GoldEssentialsCarousel 
            onSelectCategory={navigateToShopWithCategory}
            onExploreAll={() => navigateToShopWithCategory('all')}
          />

          {/* Visual Category Showcase */}
          <CategoryGrid onSelectCategory={navigateToShopWithCategory} />

          {/* Editorial Curated Collections */}
          <CollectionsShowcase onExploreCategory={navigateToShopWithCategory} />

          {/* Bestseller Spotlight Preview Section with link to Shop */}
          <section className="py-16 bg-[#FAF8F5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#DECDB3] gap-4 mb-10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8E5822] block mb-1">
                    Couture Spotlight
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
                    Iconic Bestsellers
                  </h2>
                </div>

                <button
                  onClick={() => navigateToShopWithCategory('all')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1814] text-amber-300 hover:bg-[#2F271F] font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer self-start sm:self-auto"
                >
                  <span>Explore Full Catalogue ({PRODUCTS.length} Jewels)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* 4 Featured Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {bestsellerSpotlight.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={(p) => setSelectedProduct(p)}
                    onQuickView={(p) => setSelectedProduct(p)}
                    onAddToCart={(p) => handleAddToCart(p)}
                    onToggleWishlist={(p) => handleToggleWishlist(p)}
                    isWishlisted={wishlist.some(item => item.id === product.id)}
                  />
                ))}
              </div>

              {/* Bottom CTA Banner */}
              <div className="mt-12 p-8 bg-gradient-to-r from-[#211B15] to-[#362A1F] text-[#FAF6F0] rounded-3xl border border-[#3D3224] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Looking for a Specific Jewel or Bullion Coin?
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl">
                    Browse our full collection with multi-carat diamond filters, purity options (14K to 24K), and real-time bullion pricing.
                  </p>
                </div>
                <button
                  onClick={() => navigateToShopWithCategory('all')}
                  className="px-7 py-3.5 bg-gradient-to-r from-[#D8A966] via-[#C99039] to-[#B2772B] hover:brightness-110 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-lg shrink-0"
                >
                  View All Collections
                </button>
              </div>

            </div>
          </section>

          {/* Customer Trust & Testimonials */}
          <section className="py-16 bg-[#F4EFE6]/60 border-t border-[#DECDB3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8E5822] block mb-2">
                  Patron Experiences
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
                  Trusted by Discerning Families
                </h2>
                <div className="w-16 h-0.5 bg-amber-600 mx-auto mt-3"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {TESTIMONIALS.map((t, idx) => (
                  <div 
                    key={idx}
                    className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xs space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center text-amber-400 gap-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-amber-200 stroke-1" />
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                        "{t.text}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-100">
                      <h4 className="font-serif font-bold text-stone-900 text-sm">{t.name}</h4>
                      <div className="flex items-center justify-between text-[11px] text-stone-500 mt-0.5">
                        <span>{t.city}</span>
                        <span className="text-amber-800 font-medium truncate max-w-[150px]">{t.itemPurchased}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

        </main>
      )}

      {/* VIEW 2: DEDICATED CATALOGUE / SHOP PAGE */}
      {currentPage === 'shop' && (
        <main className="flex-1 animate-in fade-in duration-300">
          <ShopPage
            products={filteredProducts}
            activeCategory={activeCategory}
            onSelectCategory={(catId) => setActiveCategory(catId)}
            selectedPurity={selectedPurity}
            setSelectedPurity={setSelectedPurity}
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
            sortBy={sortBy}
            setSortBy={setSortBy}
            onResetFilters={resetFilters}
            isAnyFilterActive={isAnyFilterActive}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onQuickView={(p) => setSelectedProduct(p)}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlist={wishlist}
            onNavigateHome={navigateToHome}
          />
        </main>
      )}

      {/* Footer */}
      <Footer 
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenStoreLocator={() => setIsStoreLocatorOpen(true)}
        onSelectCategory={navigateToShopWithCategory}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProduct ? wishlist.some(i => i.id === selectedProduct.id) : false}
      />

      {/* Live Gold Rate Calculator Modal (Bill Yourself) */}
      <GoldRateCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onExploreCategory={navigateToShopWithCategory}
      />

      {/* Store Locator Modal */}
      <StoreLocatorModal
        isOpen={isStoreLocatorOpen}
        onClose={() => setIsStoreLocatorOpen(false)}
      />

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Slide-out Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlist}
        onRemoveFromWishlist={(id) => setWishlist(prev => prev.filter(i => i.id !== id))}
        onMoveToCart={handleMoveToCart}
      />

      {/* Multi-step Checkout Flow Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        checkoutData={checkoutData}
        onOrderSuccess={handleOrderSuccess}
        onTrackOrder={() => setIsAccountOpen(true)}
      />

      {/* User Authentication Modal (OTP & Email Login) */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* User Account & Order History Tracking Modal */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        user={user}
        orders={orders}
        onLogout={handleLogout}
        onExploreShop={() => navigateToShopWithCategory('all')}
      />

      {/* Floating Concierge (Phone & WhatsApp) */}
      <FloatingConcierge onOpenStoreLocator={() => setIsStoreLocatorOpen(true)} />

    </div>
  );
}
