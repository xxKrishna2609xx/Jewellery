import React, { useState } from 'react';
import { 
  X, Package, MapPin, Award, LogOut, 
  Truck, ShieldCheck, ChevronRight, ChevronDown, 
  ChevronUp, Printer, Clock, CheckCircle2, User, 
  Sparkles, ExternalLink, Diamond, AlertCircle 
} from 'lucide-react';
import { TRACKING_STEPS } from '../../data/mockUser';
import { formatINR } from '../../data/goldRates';

export default function AccountModal({
  isOpen,
  onClose,
  user,
  orders = [],
  onLogout,
  onExploreShop
}) {
  if (!isOpen || !user) return null;

  const [activeTab, setActiveTab] = useState('orders'); // 'orders' | 'addresses' | 'rewards' | 'profile'
  const [expandedOrderId, setExpandedOrderId] = useState(orders[0]?.id || null);

  const toggleOrder = (id) => {
    setExpandedOrderId(prev => prev === id ? null : id);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF8F5] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-[#DECDB3] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="bg-[#1C1814] text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E6CA85] via-[#C5A059] to-[#8E6928] flex items-center justify-center font-serif text-xl font-bold text-stone-950 shadow-md">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-serif font-bold text-white">
                  {user.name}
                </h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400 text-stone-950 uppercase tracking-wider">
                  {user.tier}
                </span>
              </div>
              <p className="text-xs text-stone-400 mt-0.5">
                {user.phone} • {user.email}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="px-3 py-1.5 bg-white/10 hover:bg-rose-900/40 text-stone-300 hover:text-rose-300 border border-white/20 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Sign Out"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#E8DFD3] bg-white px-6 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('orders')}
            className={`py-3.5 px-3 border-b-2 flex items-center gap-2 cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === 'orders'
                ? 'border-amber-600 text-amber-900 font-bold'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Package className="w-4 h-4 text-amber-700" />
            <span>Order History & Live Armoured Tracking ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('addresses')}
            className={`py-3.5 px-3 border-b-2 flex items-center gap-2 cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === 'addresses'
                ? 'border-amber-600 text-amber-900 font-bold'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <MapPin className="w-4 h-4 text-amber-700" />
            <span>Saved Vault Addresses</span>
          </button>

          <button
            onClick={() => setActiveTab('rewards')}
            className={`py-3.5 px-3 border-b-2 flex items-center gap-2 cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === 'rewards'
                ? 'border-amber-600 text-amber-900 font-bold'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Award className="w-4 h-4 text-amber-700" />
            <span>Aura Sovereign Rewards</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* TAB 1: ORDERS & TRACKING */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              {orders.length === 0 ? (
                <div className="py-20 text-center text-stone-400 space-y-3 bg-white rounded-3xl border border-stone-200 p-8">
                  <Package className="w-12 h-12 mx-auto text-stone-300 stroke-1" />
                  <h3 className="font-serif text-lg font-bold text-stone-700">No Orders Placed Yet</h3>
                  <p className="text-xs max-w-xs mx-auto">
                    Your BIS 916 hallmarked purchases and live transit updates will appear here.
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onExploreShop();
                    }}
                    className="mt-2 px-5 py-2.5 bg-stone-900 text-amber-300 rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
                  >
                    Explore Fine Jewels
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map((ord) => {
                    const isExpanded = expandedOrderId === ord.id;
                    const statusCode = ord.statusCode !== undefined ? ord.statusCode : 3;

                    return (
                      <div 
                        key={ord.id}
                        className="bg-white rounded-2xl border border-stone-200/90 shadow-xs overflow-hidden transition-all"
                      >
                        {/* Order Summary Bar */}
                        <div 
                          onClick={() => toggleOrder(ord.id)}
                          className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-stone-50/70 transition-colors"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2.5">
                              <span className="font-mono font-bold text-stone-900 text-sm">
                                {ord.id}
                              </span>
                              <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                                statusCode === 4 
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  : 'bg-amber-50 text-amber-800 border border-amber-200 animate-pulse'
                              }`}>
                                {ord.status}
                              </span>
                            </div>
                            <p className="text-xs text-stone-500">
                              Placed on {ord.date} • {ord.items.length} {ord.items.length > 1 ? 'items' : 'item'}
                            </p>
                          </div>

                          <div className="flex items-center justify-between sm:justify-end gap-4">
                            <div className="text-right">
                              <span className="text-[10px] text-stone-400 block">Total Invoiced</span>
                              <span className="font-serif font-bold text-stone-900 text-base">
                                {formatINR(ord.totalAmount)}
                              </span>
                            </div>

                            <button className="p-1 text-stone-400 hover:text-stone-700">
                              {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        {/* Expanded Details & Live Armoured Roadmap */}
                        {isExpanded && (
                          <div className="p-4 sm:p-6 border-t border-stone-100 bg-[#FAF8F5]/50 space-y-6">
                            
                            {/* Live Armoured Roadmap */}
                            <div className="bg-white p-5 rounded-2xl border border-[#DECDB3] space-y-4 shadow-xs">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-100">
                                <div>
                                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900">
                                    <Truck className="w-4 h-4 text-amber-700" />
                                    <span>Live Armoured Transit Status</span>
                                  </div>
                                  <span className="text-xs text-stone-600 block mt-0.5">
                                    Courier: <strong className="text-stone-900">{ord.courier || 'Sequel Armoured Express'}</strong> (Track #{ord.trackingNumber || 'SEQL-991823'})
                                  </span>
                                </div>

                                <div className="text-right text-xs">
                                  <span className="text-stone-400 block text-[10px]">Estimated Arrival</span>
                                  <span className="font-bold text-emerald-700">{ord.estimatedDelivery || 'In 2 Business Days'}</span>
                                </div>
                              </div>

                              {/* Step Timeline */}
                              <div className="py-2">
                                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
                                  {TRACKING_STEPS.map((st, idx) => {
                                    const isDone = statusCode >= st.step;
                                    const isCurrent = statusCode === st.step;

                                    return (
                                      <div key={idx} className="flex flex-col items-start sm:items-center text-left sm:text-center space-y-1">
                                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                                          isDone 
                                            ? 'bg-emerald-600 text-white shadow-xs' 
                                            : isCurrent
                                              ? 'bg-amber-600 text-white ring-4 ring-amber-200 animate-bounce'
                                              : 'bg-stone-200 text-stone-500'
                                        }`}>
                                          {isDone ? '✓' : st.step + 1}
                                        </div>
                                        <span className={`text-[11px] font-bold ${isDone ? 'text-stone-900' : 'text-stone-400'}`}>
                                          {st.label}
                                        </span>
                                        <span className="text-[10px] text-stone-500 hidden sm:block">
                                          {st.desc}
                                        </span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Hallmark & Destination Notice */}
                              <div className="p-3 bg-[#FAF3E5] rounded-xl border border-[#E3CEAB] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-stone-700 gap-2">
                                <div className="flex items-center gap-2">
                                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                                  <span>
                                    <strong>Laser Hallmark:</strong> {ord.huidNumber || 'BIS 916 with Traceable HUID Inscribed'}
                                  </span>
                                </div>
                                <span className="text-[11px] text-stone-500">
                                  Vault Security Seal verified
                                </span>
                              </div>
                            </div>

                            {/* Ordered Items List */}
                            <div className="space-y-3">
                              <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                                Invoiced Jewellery Creations
                              </span>

                              <div className="divide-y divide-stone-100 bg-white rounded-2xl border border-stone-200 p-4">
                                {ord.items.map((item, i) => (
                                  <div key={i} className="py-3 flex items-center gap-4 first:pt-0 last:pb-0">
                                    <img
                                      src={item.image || (item.images ? item.images[0] : '')}
                                      alt={item.name}
                                      className="w-16 h-16 object-cover rounded-xl border border-stone-200 shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                      <h4 className="font-serif font-bold text-stone-900 text-sm truncate">
                                        {item.name}
                                      </h4>
                                      <div className="flex flex-wrap gap-2 text-[11px] text-stone-500 mt-0.5">
                                        <span className="font-semibold text-amber-900">{item.purity || '22K Gold'}</span>
                                        {item.weight && <span>• Wt: {item.weight}</span>}
                                        {item.color && <span>• {item.color}</span>}
                                        <span>• Qty: {item.quantity || 1}</span>
                                      </div>
                                    </div>
                                    <div className="text-right">
                                      <span className="font-serif font-bold text-stone-900 text-sm">
                                        {formatINR(item.price * (item.quantity || 1))}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Shipping Address & Actions */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 text-xs text-stone-600">
                              <div>
                                <span className="text-[11px] text-stone-400 block">Secured Delivery Destination:</span>
                                <span className="font-medium text-stone-800">{ord.shippingAddress}</span>
                              </div>

                              <button
                                onClick={() => window.print()}
                                className="px-4 py-2 bg-white border border-stone-300 hover:bg-stone-50 rounded-xl text-stone-800 font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto shadow-2xs"
                              >
                                <Printer className="w-3.5 h-3.5 text-stone-500" />
                                <span>Download Tax Invoice</span>
                              </button>
                            </div>

                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: SAVED ADDRESSES */}
          {activeTab === 'addresses' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {user.savedAddresses?.map((addr) => (
                  <div 
                    key={addr.id}
                    className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-xs space-y-2 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs uppercase tracking-wider text-amber-900">
                        {addr.title}
                      </span>
                      {addr.isDefault && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                          Primary Vault Address
                        </span>
                      )}
                    </div>
                    <h4 className="font-serif font-bold text-stone-900 text-sm">{addr.recipient}</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {addr.addressLine}, {addr.city}, {addr.state} - {addr.pincode}
                    </p>
                    <p className="text-xs text-stone-500 font-medium">Contact: {addr.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PRIVILEGE REWARDS & GOLD WALLET */}
          {activeTab === 'rewards' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#211B15] to-[#362A1F] text-white p-6 rounded-3xl shadow-lg border border-[#3D3224] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
                    Aura Sovereign Membership
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    4,850 Gold Karat Points
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 max-w-sm">
                    Equivalent to <strong className="text-amber-300">₹4,850 credit</strong> applicable directly against making charges on your next bridal or diamond purchase.
                  </p>
                </div>

                <div className="p-4 bg-white/10 rounded-2xl border border-white/20 text-center shrink-0">
                  <span className="text-[10px] uppercase tracking-wider text-stone-300 block">Tier Privilege</span>
                  <span className="font-serif font-bold text-amber-300 text-lg">Zero Making Fee</span>
                  <span className="text-[10px] text-stone-400 block">On Birthday Month</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-stone-200 space-y-1">
                  <span className="text-xs font-bold text-stone-900 block">Lifetime Buyback</span>
                  <p className="text-[11px] text-stone-500">100% gold weight value benchmarked to real-time bullion rates.</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-stone-200 space-y-1">
                  <span className="text-xs font-bold text-stone-900 block">Free Annual Spa Care</span>
                  <p className="text-[11px] text-stone-500">Ultrasonic steam cleaning and prong inspection at any boutique.</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-stone-200 space-y-1">
                  <span className="text-xs font-bold text-stone-900 block">VIP Vault Delivery</span>
                  <p className="text-[11px] text-stone-500">Direct armoured security transit with zero deductible insurance.</p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
