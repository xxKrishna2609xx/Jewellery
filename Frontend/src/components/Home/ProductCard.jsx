import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Star, ShieldCheck } from 'lucide-react';
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
      className="bg-white rounded-2xl border border-[#DECDB3]/80 hover:border-amber-400/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Badges */}
      <div className="relative aspect-square bg-[#FBF9F6] overflow-hidden cursor-pointer" onClick={() => onSelect(product)}>
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Purity & Tag Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 items-start z-10">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1C1814] text-amber-300 uppercase tracking-wider shadow-xs">
            {product.purity} BIS
          </span>
          {product.badge && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-stone-950 uppercase tracking-wider shadow-xs">
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
              ? 'bg-rose-50 text-rose-600 shadow-md ring-1 ring-rose-200'
              : 'bg-white/80 hover:bg-white text-stone-600 hover:text-rose-600 shadow-xs'
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600 text-rose-600' : ''}`} />
        </button>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex-1 py-2 px-3 bg-white/95 hover:bg-white text-stone-900 text-xs font-semibold rounded-xl shadow-md backdrop-blur-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-amber-700" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        
        <div>
          {/* Metal specs & Weight */}
          <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1">
            <span className="font-medium text-amber-800">{product.metalColor}</span>
            <span>Wt: {product.grossWeight}g</span>
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
              <Star className="w-3.5 h-3.5 fill-amber-400" />
            </div>
            <span className="text-xs font-bold text-stone-800">{product.rating}</span>
            <span className="text-[11px] text-stone-400">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="pt-2 border-t border-stone-100 flex items-end justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif font-bold text-lg text-stone-950">
                {formatINR(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-stone-400 line-through">
                  {formatINR(product.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-600 font-medium block">
              Free Insured Delivery
            </span>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="p-2.5 bg-[#1C1814] hover:bg-[#382E23] text-amber-300 rounded-xl transition-all shadow-xs cursor-pointer active:scale-95"
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
