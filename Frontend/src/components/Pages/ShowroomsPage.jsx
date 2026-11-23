import React, { useState } from 'react';
import { 
  ChevronRight, Home, ArrowLeft, MapPin, 
  Phone, Clock, Video, Calendar, Sparkles, CheckCircle2 
} from 'lucide-react';
import { SHOWROOMS } from '../../data/products';

export default function ShowroomsPage({ onNavigateHome }) {
  const [bookedStore, setBookedStore] = useState(null);

  const showroomDetails = [
    {
      ...SHOWROOMS[0],
      image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=800&auto=format&fit=crop',
      features: ['Private Bridal Lounge', 'Live Ultrasonic Cleaning', 'Valet Parking', 'Certified Gemologist Desk']
    },
    {
      ...SHOWROOMS[1],
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop',
      features: ['Solitaire Viewing Suite', 'Custom CAD Design Desk', 'Valet Parking', 'Champagne Hospitality']
    },
    {
      ...SHOWROOMS[2],
      image: 'https://images.unsplash.com/photo-1611591475883-9b81a7042a5a?q=80&w=800&auto=format&fit=crop',
      features: ['Daily Wear Touch Bar', 'Instant Purity Karatmeter', 'Corporate Gifting Desk', 'Complimentary Parking']
    },
    {
      ...SHOWROOMS[3],
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
      features: ['Bullion Exchange Counter', 'Express 2-Hour Sizing', 'Wheelchair Friendly', 'VIP Security Vault']
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-8 sm:py-12 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between pb-6 border-b border-[#DECDB3]/80 mb-8 text-xs">
          <nav className="flex items-center gap-2 text-stone-500">
            <button 
              onClick={onNavigateHome}
              className="flex items-center gap-1 hover:text-amber-800 transition-colors cursor-pointer font-medium"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-amber-900 font-bold">Boutique Showrooms</span>
          </nav>

          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-300 rounded-xl text-stone-700 hover:text-stone-900 hover:border-amber-400 font-semibold transition-all cursor-pointer shadow-2xs text-[11px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </button>
        </div>

        {/* Editorial Hero Banner */}
        <div className="bg-gradient-to-r from-[#2B1423] via-[#3D1E32] to-[#1C0C17] text-white p-8 sm:p-12 rounded-3xl mb-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[11px] font-bold uppercase tracking-wider text-amber-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>In-Person Luxury Experience</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Aura Jewels Boutique Lounges
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-xl">
              Experience the tactile weight of pure 22K gold and the scintillation of certified natural solitaires in person. Enjoy private VIP bridal lounges, instant laser Karatmeter testing, and ultrasonic cleaning.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
              <span className="text-amber-200">✦ Delhi NCR</span>
              <span className="text-amber-200">✦ Mumbai Bandra</span>
              <span className="text-amber-200">✦ Bengaluru Indiranagar</span>
              <span className="text-amber-200">✦ Gurugram Ambience</span>
            </div>
          </div>
        </div>

        {/* Showrooms 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {showroomDetails.map((store, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all"
            >
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-2xl text-stone-900 group-hover:text-amber-800 transition-colors">
                      {store.city}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">Flagship Luxury Experience</p>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    Open All 7 Days
                  </span>
                </div>

                <div className="space-y-2 text-xs text-stone-600">
                  <p className="flex items-start gap-2 leading-relaxed">
                    <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span className="font-medium text-stone-800">{store.location}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                    <a href={`tel:${store.phone}`} className="font-semibold text-stone-900 hover:underline">
                      {store.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2 text-stone-500">
                    <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>{store.timing}</span>
                  </p>
                </div>

                {/* Features Badges */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {store.features.map((f, i) => (
                    <span key={i} className="text-[10px] px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 font-medium border border-stone-200">
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
                <button
                  onClick={() => alert(`VIP Appointment booked at ${store.city}! Our showroom concierge will confirm via SMS and arrange valet parking.`)}
                  className="px-5 py-2.5 bg-stone-900 hover:bg-[#4A102E] text-amber-300 text-xs font-bold rounded-xl transition-all cursor-pointer shadow-xs"
                >
                  Book Private VIP Suite
                </button>

                <a 
                  href={`tel:${store.phone}`}
                  className="text-xs font-semibold text-stone-700 hover:text-stone-950 underline cursor-pointer"
                >
                  Call Boutique
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Video Shopping Banner */}
        <div className="bg-[#FAF3E5] p-8 rounded-3xl border border-[#DEC093] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7A531C]">
              <Video className="w-4 h-4 text-amber-800" />
              <span>Live 1-on-1 Video Consultation</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              Can't Visit Our Showroom In Person?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
              Connect on a private 4K video session with our certified gemologists. Inspect live hallmarks, drape necklaces over display busts, and view diamond brilliance in natural light.
            </p>
          </div>

          <button
            onClick={() => alert("Video shopping request registered! We will send a private HD video call link on WhatsApp.")}
            className="px-6 py-3.5 bg-gradient-to-r from-[#D8A966] via-[#C99039] to-[#B2772B] hover:brightness-105 text-stone-950 font-bold text-xs uppercase tracking-widest rounded-xl shadow-md transition-all cursor-pointer shrink-0"
          >
            Schedule Video Shopping
          </button>
        </div>

      </div>
    </div>
  );
}
