import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, Sparkles, Diamond } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { formatINR } from '../../data/goldRates';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.purity.toLowerCase().includes(q) ||
      p.occasion.toLowerCase().includes(q)
    );
  }, [query]);

  const trendingTags = ['Solitaire Rings', '22K Choker', 'Diamond Tennis', 'Gold Coins', 'Jhumka', 'Mangalsutra'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF8F5] rounded-2xl max-w-2xl w-full shadow-2xl border border-[#DECDB3] overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-amber-700 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search gold rings, bridal necklaces, solitaire diamonds, 24K coins..."
            className="w-full text-base font-medium text-stone-900 placeholder:text-stone-400 focus:outline-none"
          />
          {query ? (
            <button 
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <button 
              onClick={onClose}
              className="px-2 py-1 text-xs font-semibold text-stone-500 hover:text-stone-800 cursor-pointer"
            >
              ESC
            </button>
          )}
        </div>

        {/* Content Area */}
        <div className="p-5 overflow-y-auto space-y-5">
          
          {/* Quick Trending Suggestions */}
          {!query && (
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2.5">
                Popular Inquiries
              </span>
              <div className="flex flex-wrap gap-2">
                {trendingTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 bg-white border border-stone-200 hover:border-amber-400 hover:bg-amber-50/50 rounded-full text-xs font-medium text-stone-700 transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          {query && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Search Results ({filteredProducts.length})
                </span>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="py-12 text-center text-stone-500">
                  <p className="font-serif text-lg text-stone-700">No matching jewels found</p>
                  <p className="text-xs mt-1">Try searching for "Solitaire", "22K", "Choker", or "Coins"</p>
                </div>
              ) : (
                <div className="divide-y divide-stone-100">
                  {filteredProducts.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        onSelectProduct(p);
                        onClose();
                      }}
                      className="py-3 px-2 flex items-center gap-4 hover:bg-white rounded-xl transition-all cursor-pointer group"
                    >
                      <img 
                        src={p.images[0]} 
                        alt={p.name}
                        className="w-16 h-16 object-cover rounded-lg border border-stone-200 shrink-0 group-hover:scale-105 transition-transform" 
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-bold uppercase">
                            {p.purity}
                          </span>
                          <span className="text-xs text-stone-500 truncate">{p.category.toUpperCase()}</span>
                        </div>
                        <h4 className="font-serif font-bold text-stone-900 text-sm truncate group-hover:text-amber-800 transition-colors">
                          {p.name}
                        </h4>
                        <p className="text-xs text-stone-500">{p.subtitle}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-serif font-bold text-stone-900 text-sm">
                          {formatINR(p.price)}
                        </div>
                        <div className="text-[10px] text-emerald-600 font-medium">Free Insured Transit</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
