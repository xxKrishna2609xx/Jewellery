import React, { useState } from 'react';
import { Phone, MessageCircle, X, ShieldCheck } from 'lucide-react';

export default function FloatingConcierge({ onOpenStoreLocator }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 select-none">
      
      {/* Help Bubble / Tooltip */}
      {showTooltip && (
        <div className="bg-[#1C1814] text-white p-3 rounded-2xl shadow-2xl border border-amber-400/30 text-xs max-w-[210px] space-y-1.5 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between">
            <span className="font-bold text-amber-300 text-[11px] uppercase tracking-wider">Aura Concierge</span>
            <button onClick={() => setShowTooltip(false)} className="text-stone-400 hover:text-white">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[11px] text-stone-300">
            Connect directly with our certified jewellery gemologist for live video shopping or gold rate locking.
          </p>
        </div>
      )}

      {/* Blue Phone Call Button */}
      <a
        href="tel:18002872465"
        className="w-12 h-12 rounded-full bg-[#1877F2] hover:bg-[#166FE5] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer"
        title="Call 1800-AURA-GOLD"
        aria-label="Call Helpline"
      >
        <Phone className="w-5 h-5 fill-white text-white" />
      </a>

      {/* Green WhatsApp Concierge Button */}
      <button
        onClick={() => {
          alert("Opening Aura Jewels WhatsApp VIP Concierge... A certified gemologist will assist you with live rates and video call viewing.");
        }}
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer relative group"
        title="Chat on WhatsApp with Gemologist"
        aria-label="WhatsApp Concierge"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        
        {/* Pulse beacon */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white"></span>
      </button>

    </div>
  );
}
