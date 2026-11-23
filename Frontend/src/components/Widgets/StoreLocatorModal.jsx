import React from 'react';
import { X, MapPin, Phone, Clock, Navigation, CheckCircle } from 'lucide-react';
import { SHOWROOMS } from '../../data/products';

export default function StoreLocatorModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF8F5] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#DECDB3] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#1C1814] text-white p-6 rounded-t-2xl relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <MapPin className="w-4 h-4" /> Boutique Showrooms
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold">
            Visit Aura Jewels Boutiques
          </h2>
          <p className="text-stone-300 text-xs mt-1">
            Experience our fine collections in person. Private bridal consultations and ultrasonic jewellery cleaning available at all locations.
          </p>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SHOWROOMS.map((store, idx) => (
              <div 
                key={idx} 
                className="bg-white p-4 rounded-xl border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all space-y-2.5"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-serif font-bold text-stone-900 text-base">
                    {store.city}
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                    Open Now
                  </span>
                </div>

                <p className="text-xs text-stone-600 flex items-start gap-1.5 leading-relaxed">
                  <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <span>{store.location}</span>
                </p>

                <p className="text-xs text-stone-700 font-medium flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <a href={`tel:${store.phone}`} className="hover:underline text-stone-900 font-semibold">
                    {store.phone}
                  </a>
                </p>

                <p className="text-[11px] text-stone-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span>{store.timing}</span>
                </p>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                  <button 
                    onClick={() => alert(`Appointment request registered for ${store.city}! Our store concierge will call you shortly.`)}
                    className="text-xs font-semibold text-amber-800 hover:text-amber-900 cursor-pointer underline underline-offset-2"
                  >
                    Book VIP Lounge Visit
                  </button>
                  <span className="text-[11px] text-stone-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-600" /> Valet Parking
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs text-amber-950 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <span className="font-bold block">Can't visit in person?</span>
              <span className="text-stone-600 text-[11px]">Schedule a live HD video call with our certified gemologists.</span>
            </div>
            <button 
              onClick={() => alert("Video shopping booked! We will send a WhatsApp link on your registered number.")}
              className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-medium text-xs rounded-lg whitespace-nowrap cursor-pointer"
            >
              Book Video Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
