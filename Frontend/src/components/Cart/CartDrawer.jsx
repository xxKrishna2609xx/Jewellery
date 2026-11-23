import React, { useState } from 'react';
import { 
  X, ShoppingBag, Trash2, Plus, Minus, 
  ArrowRight, ShieldCheck, Tag, Sparkles, Gift 
} from 'lucide-react';
import { formatINR } from '../../data/goldRates';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems = [],
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) {
  if (!isOpen) return null;

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  // Free velvet gift box threshold
  const giftThreshold = 100000;
  const progressPercent = Math.min(100, (subtotal / giftThreshold) * 100);

  // Coupon application logic
  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    const code = couponCode.trim().toUpperCase();

    if (code === 'AURA5') {
      const discount = Math.round(subtotal * 0.05);
      setAppliedCoupon({ code: 'AURA5', discount, label: '5% Festive Privilege Discount' });
    } else if (code === 'WELCOME') {
      const discount = 2000;
      setAppliedCoupon({ code: 'WELCOME', discount, label: '₹2,000 New Patron Welcome Credit' });
    } else {
      setCouponError('Invalid promo code. Try "AURA5" or "WELCOME"');
    }
  };

  const discountAmount = appliedCoupon ? appliedCoupon.discount : 0;
  const finalTotal = Math.max(0, subtotal - discountAmount);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col border-l border-[#DECDB3] animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#E8DFD3] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-700" />
            <h2 className="font-serif font-bold text-lg text-stone-900">
              Your Shopping Bag ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
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

        {/* Gift Milestone Progress Bar */}
        <div className="bg-[#FAF3E5] px-5 py-3 border-b border-[#EAD7B8] text-xs">
          <div className="flex items-center gap-2 text-amber-900 font-semibold mb-1.5">
            <Gift className="w-4 h-4 text-amber-700" />
            {subtotal >= giftThreshold ? (
              <span className="text-emerald-700 font-bold">Complimentary Velvet Jewellery Box Unlocked!</span>
            ) : (
              <span>Add {formatINR(giftThreshold - subtotal)} more for Free Luxury Gift Packaging</span>
            )}
          </div>
          <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-amber-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="py-20 text-center text-stone-400 space-y-3">
              <ShoppingBag className="w-12 h-12 mx-auto text-stone-300 stroke-1" />
              <p className="font-serif text-lg text-stone-600">Your bag is empty</p>
              <p className="text-xs max-w-xs mx-auto">
                Discover our BIS hallmarked gold and certified solitaire masterpieces.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 bg-stone-900 text-amber-300 rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="divide-y divide-stone-200/80">
              {cartItems.map((item) => (
                <div key={item.id + (item.selectedPurity || '')} className="py-4 flex gap-4 first:pt-0">
                  <img
                    src={item.images ? item.images[0] : item.primaryImage}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl border border-stone-200 shrink-0 bg-white"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif font-bold text-stone-900 text-sm leading-snug truncate">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-stone-400 hover:text-rose-600 transition-colors p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 text-[11px] text-stone-500 mt-1">
                        <span className="bg-stone-100 px-1.5 py-0.5 rounded font-medium text-stone-700">
                          {item.selectedPurity || item.purity}
                        </span>
                        {item.selectedColor && (
                          <span className="bg-stone-100 px-1.5 py-0.5 rounded text-stone-600">
                            {item.selectedColor}
                          </span>
                        )}
                        {item.selectedSize && (
                          <span className="bg-stone-100 px-1.5 py-0.5 rounded text-stone-600">
                            Size: {item.selectedSize}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="p-1 hover:bg-stone-100 text-stone-600 cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-stone-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-stone-100 text-stone-600 cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-serif font-bold text-stone-950 text-sm">
                        {formatINR(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer with Price Breakdown & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-[#DECDB3] bg-white space-y-4">
            
            {/* Promo Code Input */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Coupon: Try AURA5 or WELCOME"
                  className="w-full pl-8 pr-3 py-2 text-xs border border-stone-300 rounded-xl uppercase tracking-wider focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-stone-900 text-amber-300 text-xs font-bold rounded-xl hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Apply
              </button>
            </form>

            {appliedCoupon && (
              <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between text-xs text-emerald-800">
                <span className="font-medium">{appliedCoupon.label}</span>
                <span className="font-bold">-{formatINR(appliedCoupon.discount)}</span>
              </div>
            )}

            {couponError && (
              <p className="text-[11px] text-rose-600 font-medium">{couponError}</p>
            )}

            {/* Price Breakdown */}
            <div className="space-y-1.5 text-xs text-stone-600 pt-2 border-t border-stone-100">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-semibold text-stone-900">{formatINR(subtotal)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Special Privilege Discount</span>
                  <span>-{formatINR(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Armoured Insured Transit</span>
                <span className="text-emerald-700 font-semibold">FREE</span>
              </div>
              <div className="flex justify-between">
                <span>GST (3% Indian Standard)</span>
                <span className="text-stone-500">Included in Item Rates</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-200 text-sm font-bold text-stone-950">
                <span>Total Amount</span>
                <span className="text-lg font-serif text-[#1C1814]">{formatINR(finalTotal)}</span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              onClick={() => {
                onProceedToCheckout({
                  items: cartItems,
                  subtotal,
                  discount: discountAmount,
                  total: finalTotal
                });
              }}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-[#D8A966] via-[#C99039] to-[#B2772B] hover:brightness-105 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Proceed To Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-stone-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Encrypted & Insured Indian Banking Gateways</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
