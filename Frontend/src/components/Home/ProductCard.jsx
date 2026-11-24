import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { formatINR } from '../../data/goldRates';

export default function ProductCard({
  product,
  onSelect,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false
}) {
  const [isHovered, setIsHovered] = useState(false);

  const displayImage = isHovered && product.images[1] ? product.images[1] : product.images[0];

  return (
    <div 
      className="bg-white rounded-2xl border border-stone-200/70 hover:border-stone-300 shadow-2xs hover:shadow-sm transition-all duration-300 flex flex-col overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Badges */}
      <div 
        className="relative aspect-square bg-[#FAF8F5] overflow-hidden cursor-pointer" 
        onClick={() => onSelect(product)}
      >
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
        />

        {/* Minimalist Purity Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
          <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/90 border border-stone-200 text-stone-700 uppercase tracking-wider backdrop-blur-xs shadow-2xs">
            {product.purity} BIS
          </span>
          {product.badge && (
            <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-stone-900 text-amber-200 uppercase tracking-wider">
              {product.badge}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all z-10 cursor-pointer ${
            isWishlisted
              ? 'bg-rose-50 text-rose-600 shadow-xs ring-1 ring-rose-200'
              : 'bg-white/80 hover:bg-white text-stone-500 hover:text-stone-900 shadow-2xs'
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-rose-600 text-rose-600' : ''}`} />
        </button>

        {/* Quick View Floating Pill on Hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="w-full py-2 px-3 bg-white/95 hover:bg-white text-stone-900 text-xs font-semibold rounded-xl shadow-xs backdrop-blur-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-stone-200/60"
          >
            <Eye className="w-3.5 h-3.5 text-stone-600" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        
        <div>
          {/* Metal spec & Weight */}
          <div className="flex items-center justify-between text-[11px] text-stone-400 mb-1 font-medium tracking-wide">
            <span className="text-stone-600">{product.metalColor}</span>
            <span>{product.grossWeight}g</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelect(product)}
            className="font-serif font-bold text-stone-900 text-base leading-snug hover:text-amber-800 transition-colors cursor-pointer line-clamp-1"
            title={product.name}
          >
            {product.name}
          </h3>

          <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
            {product.subtitle}
          </p>

          {/* Ratings */}
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex items-center text-amber-500">
              <Star className="w-3 h-3 fill-amber-400" />
            </div>
            <span className="text-xs font-semibold text-stone-700">{product.rating}</span>
            <span className="text-[11px] text-stone-400">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif font-bold text-base sm:text-lg text-stone-950">
                {formatINR(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-stone-400 line-through">
                  {formatINR(product.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-stone-400 font-medium block">
              Insured Doorstep Delivery
            </span>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="p-2.5 bg-stone-900 hover:bg-stone-800 text-amber-200 rounded-xl transition-all shadow-2xs cursor-pointer active:scale-95"
            title="Add to Shopping Bag"
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
