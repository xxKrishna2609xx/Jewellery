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

import { PRODUCTS, CATEGORIES, TESTIMONIALS } from './data/products';
import { formatINR } from './data/goldRates';
import { 
  Filter, SlidersHorizontal, Check, Sparkles, 
  RotateCcw, Star, Quote, ShieldCheck, Award, Heart 
} from 'lucide-react';

export default function App() {
  // Navigation & Category state
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter & Sort states
  const [selectedPurity, setSelectedPurity] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // Modals & Drawers state
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isStoreLocatorOpen, setIsStoreLocatorOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkoutData, setCheckoutData] = useState(null);

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

  const handleOrderSuccess = () => {
    setCart([]);
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

      {/* Luxury Brand Header & Navigation */}
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          const catalogElem = document.getElementById('jewellery-catalogue');
          if (catalogElem) {
            catalogElem.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        cartTotal={cartTotal}
      />

      {/* Hero Showcase Banner */}
      <HeroBanner 
        onExploreCategory={(cat) => {
          setActiveCategory(cat);
          const catalogElem = document.getElementById('jewellery-catalogue');
          if (catalogElem) {
            catalogElem.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* Flagship Live Rates Index Widget (Right Gold Evolution) */}
      <LiveRateBar onOpenCalculator={() => setIsCalculatorOpen(true)} />

      {/* Visual Category Showcase */}
      <CategoryGrid onSelectCategory={(catId) => {
        setActiveCategory(catId);
        const catalogElem = document.getElementById('jewellery-catalogue');
        if (catalogElem) {
          catalogElem.scrollIntoView({ behavior: 'smooth' });
        }
      }} />

      {/* Editorial Curated Collections */}
      <CollectionsShowcase onExploreCategory={(cat) => {
        setActiveCategory(cat);
        const catalogElem = document.getElementById('jewellery-catalogue');
        if (catalogElem) {
          catalogElem.scrollIntoView({ behavior: 'smooth' });
        }
      }} />

      {/* Main E-Commerce Catalogue Section */}
      <main id="jewellery-catalogue" className="py-16 bg-[#FAF8F5] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Catalogue Title & Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#DECDB3] gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8E5822]">
                <span>Certified Haute Joaillerie</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 mt-1">
                {activeCategory === 'all' 
                  ? 'All Fine Jewels' 
                  : CATEGORIES.find(c => c.id === activeCategory)?.name || 'Collection'}
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Displaying {filteredProducts.length} BIS 916 hallmarked & certified creations.
              </p>
            </div>

            {/* Filter and Sort Controls */}
            <div className="flex flex-wrap items-center gap-2.5">
              
              {/* Category Pills (Quick switch) */}
              <div className="hidden lg:flex items-center gap-1.5 bg-[#F2ECE0]/80 p-1 rounded-xl border border-[#DECDB3]">
                {CATEGORIES.slice(0, 5).map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      activeCategory === cat.id
                        ? 'bg-[#1C1814] text-amber-300 shadow-xs'
                        : 'text-stone-700 hover:text-stone-950'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-1.5 bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs shadow-xs">
                <span className="text-stone-400 font-medium">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent font-semibold text-stone-800 focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured Curations</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* Reset Filters if any active */}
              {isAnyFilterActive && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                  title="Clear all filters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Filter Bar: Purity, Gender, and Price Range */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-xs mb-8 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-4">
              
              {/* Purity Filter */}
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-stone-700 uppercase tracking-wider text-[11px]">Purity:</span>
                <div className="flex gap-1">
                  {['all', '24K', '22K', '18K', '14K'].map((p) => (
                    <button
                      key={p}
                      onClick={() => setSelectedPurity(p)}
                      className={`px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                        selectedPurity === p
                          ? 'bg-amber-100 border-amber-500 text-amber-900 font-bold'
                          : 'border-stone-200 bg-stone-50 text-stone-600 hover:border-stone-400'
                      }`}
                    >
                      {p === 'all' ? 'All' : p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Gender Filter */}
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-stone-700 uppercase tracking-wider text-[11px]">For:</span>
                <div className="flex gap-1">
                  {['all', 'Women', 'Men'].map((g) => (
                    <button
                      key={g}
                      onClick={() => setSelectedGender(g)}
                      className={`px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                        selectedGender === g
                          ? 'bg-amber-100 border-amber-500 text-amber-900 font-bold'
                          : 'border-stone-200 bg-stone-50 text-stone-600 hover:border-stone-400'
                      }`}
                    >
                      {g === 'all' ? 'All' : g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-stone-700 uppercase tracking-wider text-[11px]">Price:</span>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="bg-stone-50 border border-stone-200 rounded-lg px-2.5 py-1 font-medium text-stone-800 focus:outline-none cursor-pointer"
                >
                  <option value="all">All Budgets</option>
                  <option value="under50k">Under ₹50,000</option>
                  <option value="50k-1lakh">₹50,000 - ₹1,00,000</option>
                  <option value="1lakh-2lakh">₹1,00,000 - ₹2,00,000</option>
                  <option value="above2lakh">Above ₹2,00,000</option>
                </select>
              </div>

            </div>

            <div className="text-[11px] text-stone-500 font-medium">
              Real-time Indian Bullion Pricing Applied
            </div>
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div className="py-24 text-center bg-white rounded-3xl border border-stone-200 p-8 space-y-4">
              <Sparkles className="w-12 h-12 text-amber-600 mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-stone-800">
                No matching creations found
              </h3>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Try loosening your filters or resetting the category to explore our complete collection.
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-2.5 bg-stone-900 text-amber-300 font-semibold text-xs rounded-xl hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
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
          )}

        </div>
      </main>

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

      {/* Footer */}
      <Footer 
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenStoreLocator={() => setIsStoreLocatorOpen(true)}
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          const catalogElem = document.getElementById('jewellery-catalogue');
          if (catalogElem) {
            catalogElem.scrollIntoView({ behavior: 'smooth' });
          }
        }}
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
        onExploreCategory={(cat) => {
          setActiveCategory(cat);
          const catalogElem = document.getElementById('jewellery-catalogue');
          if (catalogElem) {
            catalogElem.scrollIntoView({ behavior: 'smooth' });
          }
        }}
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
      />

    </div>
  );
}
