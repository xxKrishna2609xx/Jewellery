import React, { useState } from 'react';
import { 
  X, ShieldCheck, CheckCircle2, CreditCard, 
  Smartphone, Building2, Truck, ArrowRight, 
  ArrowLeft, Lock, FileText, Printer, Sparkles, QrCode 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { formatINR } from '../../data/goldRates';

const INDIAN_STATES = [
  'Delhi', 'Maharashtra', 'Karnataka', 'Gujarat', 'Tamil Nadu', 
  'Haryana', 'Uttar Pradesh', 'Rajasthan', 'West Bengal', 'Telangana', 
  'Punjab', 'Madhya Pradesh', 'Kerala', 'Goa'
];

export default function CheckoutModal({
  isOpen,
  onClose,
  checkoutData,
  onOrderSuccess
}) {
  if (!isOpen || !checkoutData) return null;

  const [step, setStep] = useState(1); // 1: Address, 2: Payment, 3: Success

  // Form State
  const [formData, setFormData] = useState({
    fullName: 'Aditi Sharma',
    phone: '9810123456',
    email: 'aditi.sharma@example.com',
    address: 'B-402, Imperial Heights, South Extension Part 2',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110049'
  });

  const [shippingMethod, setShippingMethod] = useState('armoured');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiApp, setUpiApp] = useState('gpay');
  const [orderId, setOrderId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const total = checkoutData.total || 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCompleteOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const generatedId = 'AURA-' + Math.floor(100000 + Math.random() * 900000);
      setOrderId(generatedId);
      setStep(3);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log(err);
      }

      if (onOrderSuccess) onOrderSuccess();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF8F5] rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#DECDB3] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 border-b border-[#E8DFD3] flex items-center justify-between bg-white rounded-t-3xl">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#8E5822]">
              <Lock className="w-3.5 h-3.5" />
              <span>Aura 256-Bit SSL Insured Checkout</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-0.5">
              {step === 3 ? 'Order Confirmed' : 'Complete Your Purchase'}
            </h2>
          </div>

          {step !== 3 && (
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Step Progress Indicators */}
        {step !== 3 && (
          <div className="px-6 py-3 bg-[#FAF3E5] border-b border-[#E8DAC2] flex items-center justify-between text-xs">
            <div className={`flex items-center gap-2 font-semibold ${step >= 1 ? 'text-amber-900' : 'text-stone-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                step > 1 ? 'bg-emerald-600 text-white' : 'bg-stone-900 text-amber-300'
              }`}>
                {step > 1 ? '✓' : '1'}
              </span>
              <span>Shipping Details</span>
            </div>

            <div className="h-0.5 flex-1 max-w-[60px] bg-stone-300 mx-2"></div>

            <div className={`flex items-center gap-2 font-semibold ${step >= 2 ? 'text-amber-900' : 'text-stone-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                step === 2 ? 'bg-stone-900 text-amber-300' : 'bg-stone-200 text-stone-600'
              }`}>
                2
              </span>
              <span>Secure Payment</span>
            </div>
          </div>
        )}

        {/* Step 1: Shipping Address */}
        {step === 1 && (
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-base text-stone-900">
                1. Delivery & Buyer Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Full Legal Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded-xl focus:ring-1 focus:ring-amber-500 focus:outline-none"
                    placeholder="As on Aadhaar / PAN"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Phone Number (For OTP / Delivery) *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded-xl focus:ring-1 focus:ring-amber-500 focus:outline-none"
                    placeholder="10-digit mobile number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address (For Invoicing) *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded-xl focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  placeholder="name@domain.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Street Address, Apartment, Landmark *</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded-xl focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  placeholder="House number, building name, street"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded-xl focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">State *</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 text-xs bg-white border border-stone-300 rounded-xl focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  >
                    {INDIAN_STATES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Pincode *</label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    maxLength={6}
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded-xl focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Option */}
            <div className="pt-4 border-t border-stone-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                2. Select Transit Service
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div 
                  onClick={() => setShippingMethod('armoured')}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    shippingMethod === 'armoured' 
                      ? 'border-amber-600 bg-amber-50/60 ring-1 ring-amber-500'
                      : 'border-stone-200 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-stone-900">Armoured Van Express (BVC / Sequel)</span>
                    <span className="text-xs font-bold text-emerald-700">FREE</span>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1">
                    100% insured tamper-proof vault courier with recipient OTP verification.
                  </p>
                </div>

                <div 
                  onClick={() => setShippingMethod('store')}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    shippingMethod === 'store' 
                      ? 'border-amber-600 bg-amber-50/60 ring-1 ring-amber-500'
                      : 'border-stone-200 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-stone-900">Click & Collect from Boutique</span>
                    <span className="text-xs font-bold text-emerald-700">FREE</span>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1">
                    Pick up at Delhi, Mumbai or Bangalore showrooms with gift packaging ready.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Proceed Button */}
            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <div className="text-xs text-stone-500">
                Order Value: <span className="font-bold text-stone-900 text-sm">{formatINR(total)}</span>
              </div>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-amber-300 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Continue to Payment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Payment Methods */}
        {step === 2 && (
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-base text-stone-900">
                Select Indian Payment Gateway
              </h3>
              <button
                onClick={() => setStep(1)}
                className="text-xs text-amber-800 hover:underline flex items-center gap-1 cursor-pointer font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Address
              </button>
            </div>

            {/* Payment Method Selector Tabs */}
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                className={`py-3 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                  paymentMethod === 'upi'
                    ? 'border-amber-600 bg-amber-50 text-amber-950 font-bold ring-1 ring-amber-400'
                    : 'border-stone-200 bg-white text-stone-700'
                }`}
              >
                <Smartphone className="w-4 h-4 mx-auto mb-1 text-amber-700" />
                <span className="text-xs block">UPI / QR Code</span>
                <span className="text-[10px] text-stone-500">GPay, PhonePe, Paytm</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`py-3 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'border-amber-600 bg-amber-50 text-amber-950 font-bold ring-1 ring-amber-400'
                    : 'border-stone-200 bg-white text-stone-700'
                }`}
              >
                <CreditCard className="w-4 h-4 mx-auto mb-1 text-amber-700" />
                <span className="text-xs block">Card / NetBanking</span>
                <span className="text-[10px] text-stone-500">Visa, RuPay, Amex</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('cod')}
                className={`py-3 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                  paymentMethod === 'cod'
                    ? 'border-amber-600 bg-amber-50 text-amber-950 font-bold ring-1 ring-amber-400'
                    : 'border-stone-200 bg-white text-stone-700'
                }`}
              >
                <ShieldCheck className="w-4 h-4 mx-auto mb-1 text-amber-700" />
                <span className="text-xs block">Pay on Delivery</span>
                <span className="text-[10px] text-stone-500">Card / Cash at Door</span>
              </button>
            </div>

            {/* Tab 1 Content: UPI Simulation */}
            {paymentMethod === 'upi' && (
              <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-900">Instant UPI Payment</span>
                  <span className="text-xs text-emerald-600 font-semibold">Zero Surcharge</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-stone-50 rounded-xl border border-stone-200">
                  {/* Dynamic QR Mock */}
                  <div className="w-32 h-32 bg-white p-2 rounded-xl border border-stone-300 shadow-xs flex flex-col items-center justify-center shrink-0">
                    <QrCode className="w-20 h-20 text-stone-800" />
                    <span className="text-[9px] text-stone-500 font-bold uppercase mt-1">Scan & Pay</span>
                  </div>

                  <div className="space-y-2 text-xs text-stone-600 w-full">
                    <p className="font-semibold text-stone-900">
                      Scan with any UPI App: Google Pay, PhonePe, Paytm, or CRED
                    </p>
                    <p className="text-[11px] text-stone-500">
                      VPA: <strong className="text-stone-900">aurajewels.pay@hdfcbank</strong>
                    </p>
                    <div className="p-2 bg-amber-50 rounded-lg border border-amber-200/60 text-[11px] text-amber-900">
                      ⚡ Funds are locked in verified bullion escrow until insured delivery confirmation.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2 Content: Card Simulation */}
            {paymentMethod === 'card' && (
              <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-900">Credit / Debit Card Details</span>
                  <span className="text-[11px] text-stone-400">Supported: RuPay, Visa, Mastercard</span>
                </div>
                <div>
                  <input
                    type="text"
                    defaultValue="4532 •••• •••• 9821"
                    placeholder="Card Number"
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-xl focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    defaultValue="08/29"
                    placeholder="MM/YY"
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-xl focus:outline-none"
                  />
                  <input
                    type="password"
                    defaultValue="•••"
                    placeholder="CVV"
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded-xl focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* Tab 3 Content: Pay on Delivery */}
            {paymentMethod === 'cod' && (
              <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2 text-xs text-stone-600">
                <span className="font-bold text-stone-900 block text-sm">
                  Pay on Armoured Delivery
                </span>
                <p>
                  Our armed courier executive carries a secure wireless POS machine. You may inspect the tamper-proof security seals before tapping your card or making a UPI payment at your doorstep.
                </p>
              </div>
            )}

            {/* Final Order Summary Box */}
            <div className="bg-[#FAF3E5] p-4 rounded-xl border border-[#DECDB3] space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span>Ship to:</span>
                <span className="font-semibold text-stone-900">{formData.fullName}, {formData.city}</span>
              </div>
              <div className="flex justify-between font-bold text-stone-950 pt-2 border-t border-[#DECDB3] text-sm">
                <span>Final Payable Amount:</span>
                <span className="text-base font-serif">{formatINR(total)}</span>
              </div>
            </div>

            {/* Pay Button */}
            <button
              onClick={handleCompleteOrder}
              disabled={isProcessing}
              className="w-full py-4 px-4 bg-gradient-to-r from-[#D8A966] via-[#C99039] to-[#B2772B] hover:brightness-105 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
            >
              {isProcessing ? (
                <span>Generating Insured Vault Order...</span>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Authorize & Complete Purchase ({formatINR(total)})</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Step 3: Success Screen & Printable Invoice Breakdown */}
        {step === 3 && (
          <div className="p-6 sm:p-8 space-y-6 text-center">
            
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-1">
                Transaction Successful • Insured Order Booked
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Thank You, {formData.fullName}!
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Your order is being hallmarked and sealed in a tamper-proof vault pack.
              </p>
            </div>

            {/* Order Card Preview */}
            <div className="max-w-md mx-auto bg-white p-5 rounded-2xl border border-stone-200 text-left text-xs space-y-3 shadow-xs">
              <div className="flex justify-between items-center pb-2 border-b border-stone-100">
                <div>
                  <span className="text-stone-400 text-[10px] block">Order Identifier</span>
                  <span className="font-bold text-stone-900 font-mono text-sm">{orderId}</span>
                </div>
                <div className="text-right">
                  <span className="text-stone-400 text-[10px] block">Payment Status</span>
                  <span className="font-bold text-emerald-600">PAID via {paymentMethod.toUpperCase()}</span>
                </div>
              </div>

              <div>
                <span className="text-stone-400 text-[10px] block">Delivery Destination</span>
                <span className="font-medium text-stone-800">{formData.address}, {formData.city}, {formData.state} - {formData.pincode}</span>
              </div>

              <div>
                <span className="text-stone-400 text-[10px] block">Estimated Delivery</span>
                <span className="font-semibold text-amber-900">Within 2 to 3 Business Days (Insured Sequel Armoured)</span>
              </div>

              <div className="pt-2 border-t border-stone-100 flex justify-between font-bold text-stone-950 text-sm">
                <span>Total Amount Charged:</span>
                <span className="font-serif">{formatINR(total)}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 bg-white border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4 text-stone-500" />
                <span>Print Official Tax Invoice</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-amber-300 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-xs"
              >
                Continue Shopping
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
