import React from 'react';
import { 
  ChevronRight, Home, RotateCcw, Sparkles, 
  SlidersHorizontal, Filter, ArrowLeft 
} from 'lucide-react';
import ProductCard from '../Home/ProductCard';
import { CATEGORIES } from '../../data/products';

export default function ShopPage({
  products,
  activeCategory,
  onSelectCategory,
  selectedPurity,
  setSelectedPurity,
  selectedGender,
  setSelectedGender,
  selectedPriceRange,
  setSelectedPriceRange,
  sortBy,
  setSortBy,
  onResetFilters,
  isAnyFilterActive,
  onSelectProduct,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlist = [],
  onNavigateHome
}) {
  const currentCategoryObj = CATEGORIES.find(c => c.id === activeCategory);
  const categoryTitle = activeCategory === 'all' ? 'All Fine Jewellery' : currentCategoryObj?.name || 'Collection';

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation & Back to Home */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#DECDB3]/80 mb-8 text-xs">
          <nav className="flex items-center gap-2 text-stone-500">
            <button 
              onClick={onNavigateHome}
              className="flex items-center gap-1 hover:text-amber-800 transition-colors cursor-pointer font-medium"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <button 
              onClick={() => onSelectCategory('all')}
              className={`hover:text-amber-800 transition-colors cursor-pointer ${
                activeCategory === 'all' ? 'text-amber-900 font-bold' : ''
              }`}
            >
              Catalogue
            </button>
            {activeCategory !== 'all' && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                <span className="text-amber-900 font-bold">
                  {currentCategoryObj?.name}
                </span>
              </>
            )}
          </nav>

          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-300 rounded-xl text-stone-700 hover:text-stone-900 hover:border-amber-400 font-semibold transition-all cursor-pointer shadow-2xs text-[11px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Showcase</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#DECDB3] gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8E5822]">
              <span>Haute Joaillerie Atelier</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-1">
              {categoryTitle}
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Displaying {products.length} BIS 916 hallmarked & certified master creations.
            </p>
          </div>

          {/* Quick Category Buttons & Sort */}
          <div className="flex flex-wrap items-center gap-2.5">
            
            {/* Category Pills */}
            <div className="hidden lg:flex items-center gap-1.5 bg-[#F2ECE0]/80 p-1 rounded-xl border border-[#DECDB3]">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
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

            {/* Sort Dropdown */}
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

            {/* Reset Button */}
            {isAnyFilterActive && (
              <button
                onClick={onResetFilters}
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

        {/* Product Cards Grid - Unchanged item card implementation */}
        {products.length === 0 ? (
          <div className="py-24 text-center bg-white rounded-3xl border border-stone-200 p-8 space-y-4">
            <Sparkles className="w-12 h-12 text-amber-600 mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-stone-800">
              No matching creations found
            </h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              Try loosening your filters or resetting the category to explore our complete collection.
            </p>
            <button
              onClick={onResetFilters}
              className="px-6 py-2.5 bg-stone-900 text-amber-300 font-semibold text-xs rounded-xl hover:bg-stone-800 transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(p) => onSelectProduct(p)}
                onQuickView={(p) => onQuickView(p)}
                onAddToCart={(p) => onAddToCart(p)}
                onToggleWishlist={(p) => onToggleWishlist(p)}
                isWishlisted={wishlist.some(item => item.id === product.id)}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
