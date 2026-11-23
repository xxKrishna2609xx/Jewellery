import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { formatINR } from '../../data/goldRates';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistItems = [],
  onRemoveFromWishlist,
  onMoveToCart
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col border-l border-[#DECDB3] animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E8DFD3] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-600 fill-rose-600" />
            <h2 className="font-serif font-bold text-lg text-stone-900">
              Saved Jewels ({wishlistItems.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlistItems.length === 0 ? (
            <div className="py-24 text-center text-stone-400 space-y-3">
              <Heart className="w-12 h-12 mx-auto text-stone-300 stroke-1" />
              <p className="font-serif text-lg text-stone-600">Your wishlist is empty</p>
              <p className="text-xs max-w-xs mx-auto">
                Tap the heart icon on any jewel to curate your bespoke collection.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 bg-stone-900 text-amber-300 rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Explore Catalogue
              </button>
            </div>
          ) : (
            <div className="divide-y divide-stone-200/80">
              {wishlistItems.map((item) => (
                <div key={item.id} className="py-4 flex gap-4 first:pt-0">
                  <img
                    src={item.images ? item.images[0] : item.primaryImage}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl border border-stone-200 shrink-0 bg-white"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-serif font-bold text-stone-900 text-sm leading-snug truncate">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveFromWishlist(item.id)}
                          className="text-stone-400 hover:text-rose-600 transition-colors p-1 cursor-pointer"
                          title="Remove"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">
                          {item.purity} BIS
                        </span>
                        <span className="text-xs text-stone-500">{item.grossWeight}g</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="font-serif font-bold text-stone-950 text-sm">
                        {formatINR(item.price)}
                      </span>

                      <button
                        onClick={() => {
                          onMoveToCart(item);
                        }}
                        className="px-3 py-1.5 bg-stone-900 hover:bg-amber-900 text-amber-300 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
