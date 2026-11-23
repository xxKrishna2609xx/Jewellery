import React, { useState } from 'react';
import { 
  X, Lock, Smartphone, Mail, ArrowRight, 
  ShieldCheck, Sparkles, Diamond, CheckCircle2 
} from 'lucide-react';

export default function AuthModal({
  isOpen,
  onClose,
  onLoginSuccess
}) {
  if (!isOpen) return null;

  const [authMode, setAuthMode] = useState('otp'); // 'otp' | 'email' | 'register'
  const [phone, setPhone] = useState('9810123456');
  const [email, setEmail] = useState('aditi.sharma@example.com');
  const [password, setPassword] = useState('••••••••');
  const [name, setName] = useState('Aditi Sharma');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState(['1', '2', '3', '4']);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (phone.length === 10) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOtpSent(true);
      }, 600);
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess({
        id: 'usr_aura_101',
        name: name || 'Aditi Sharma',
        phone: '+91 ' + phone,
        email: email || 'aditi.sharma@example.com',
        tier: 'Sovereign Patron',
        points: 4850
      });
      onClose();
    }, 800);
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess({
        id: 'usr_aura_101',
        name: 'Aditi Sharma',
        phone: '+91 98101 23456',
        email: email,
        tier: 'Sovereign Patron',
        points: 4850
      });
      onClose();
    }, 800);
  };

  const handleFastDemoLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess({
        id: 'usr_aura_101',
        name: 'Aditi Sharma',
        phone: '+91 98101 23456',
        email: 'aditi.sharma@example.com',
        tier: 'Sovereign Patron',
        points: 4850
      });
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF8F5] rounded-3xl max-w-md w-full shadow-2xl border border-[#DECDB3] overflow-hidden flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="bg-[#1C1814] text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Diamond className="w-4 h-4 text-amber-400" />
            <span>Aura Connoisseurs Access</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
            {authMode === 'register' ? 'Join Aura Privilege' : 'Sign In To Your Vault'}
          </h2>
          <p className="text-stone-300 text-xs mt-1">
            Access certified purchases, track armored orders, and redeem gold loyalty points.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-stone-200 bg-stone-100/70 p-1 text-xs">
          <button
            onClick={() => { setAuthMode('otp'); setOtpSent(false); }}
            className={`flex-1 py-2 font-semibold rounded-xl transition-all cursor-pointer ${
              authMode === 'otp'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            Mobile OTP
          </button>
          <button
            onClick={() => setAuthMode('email')}
            className={`flex-1 py-2 font-semibold rounded-xl transition-all cursor-pointer ${
              authMode === 'email'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            Email & Password
          </button>
          <button
            onClick={() => setAuthMode('register')}
            className={`flex-1 py-2 font-semibold rounded-xl transition-all cursor-pointer ${
              authMode === 'register'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            Register
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-5">
          
          {/* Quick Demo Login Option */}
          <div className="bg-[#FAF3E5] p-3.5 rounded-2xl border border-[#E3CEAB] flex items-center justify-between gap-3">
            <div className="text-xs">
              <span className="font-bold text-amber-950 block">Quick Demo Evaluation</span>
              <span className="text-[11px] text-stone-600">Instantly sign in as Sovereign Patron</span>
            </div>
            <button
              onClick={handleFastDemoLogin}
              disabled={loading}
              className="px-3.5 py-1.5 bg-[#1C1814] text-amber-300 text-xs font-bold rounded-xl hover:bg-[#332A20] transition-colors whitespace-nowrap cursor-pointer shadow-xs active:scale-95"
            >
              1-Click Sign In
            </button>
          </div>

          {/* Mode 1: Mobile OTP */}
          {authMode === 'otp' && (
            <div className="space-y-4">
              {!otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Enter Mobile Number
                    </label>
                    <div className="flex rounded-xl border border-stone-300 overflow-hidden bg-white focus-within:ring-2 focus-within:ring-amber-500/40">
                      <span className="px-3 py-2.5 bg-stone-100 text-stone-700 text-xs font-bold border-r border-stone-300 flex items-center">
                        +91 (IND)
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                        className="w-full px-3 py-2.5 text-xs font-semibold text-stone-900 focus:outline-none"
                        placeholder="98101 23456"
                      />
                    </div>
                    <span className="text-[10px] text-stone-500 mt-1 block">
                      We will send a 4-digit verification code via SMS
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || phone.length !== 10}
                    className="w-full py-3 bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-amber-300 text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{loading ? 'Sending OTP...' : 'Send OTP Code'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div className="text-center space-y-1">
                    <span className="text-xs font-bold text-stone-800 block">
                      Enter OTP sent to +91 {phone}
                    </span>
                    <span className="text-[11px] text-stone-500">
                      Use demo code: <strong className="text-amber-800">1 2 3 4</strong>
                    </span>
                  </div>

                  <div className="flex justify-center gap-3 py-2">
                    {otpCode.map((digit, idx) => (
                      <input
                        key={idx}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => {
                          const next = [...otpCode];
                          next[idx] = e.target.value;
                          setOtpCode(next);
                        }}
                        className="w-12 h-12 text-center text-lg font-bold border-2 border-stone-300 rounded-xl bg-white focus:border-amber-600 focus:outline-none"
                      />
                    ))}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-gradient-to-r from-[#D8A966] via-[#C99039] to-[#B2772B] hover:brightness-105 text-stone-950 text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{loading ? 'Verifying...' : 'Verify & Unlock Vault'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setOtpSent(false)}
                    className="w-full text-center text-[11px] text-amber-900 font-medium hover:underline cursor-pointer"
                  >
                    Change Phone Number
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Mode 2: Email & Password */}
          {authMode === 'email' && (
            <form onSubmit={handleEmailLogin} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Registered Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-amber-300 text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>{loading ? 'Authenticating...' : 'Sign In'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Mode 3: Register */}
          {authMode === 'register' && (
            <form onSubmit={handleVerifyOtp} className="space-y-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Full Legal Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl text-xs font-semibold focus:outline-none"
                  placeholder="As on Identity ID"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Mobile Number</label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl text-xs font-semibold focus:outline-none"
                  placeholder="10-digit number"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl text-xs font-semibold focus:outline-none"
                  placeholder="name@domain.com"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-[#D8A966] via-[#C99039] to-[#B2772B] hover:brightness-105 text-stone-950 text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md cursor-pointer mt-2"
              >
                Create Sovereign Account
              </button>
            </form>
          )}

          <div className="pt-3 border-t border-stone-200 flex items-center justify-center gap-2 text-[10px] text-stone-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>256-Bit Bank-Grade End-to-End Encryption</span>
          </div>

        </div>

      </div>
    </div>
  );
}
