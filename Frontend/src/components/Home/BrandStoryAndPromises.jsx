import React, { useState, useRef } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, 
  FileText, TrendingUp, Percent, Gem, Headphones, Calculator, 
  ArrowRight, ShieldCheck, CheckCircle2 
} from 'lucide-react';

export default function BrandStoryAndPromises({ onOpenCalculator, onExploreBridal }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(33);
  const [duration, setDuration] = useState(61);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const promises = [
    {
      id: 'transparency',
      title: 'Complete Transparency',
      desc: 'Complete transparency with fair pricing. No hidden charges',
      icon: (
        <svg className="w-8 h-8 text-[#5A1434]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
          <line x1="13.2" y1="13.2" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'liverate',
      title: 'Live Gold Rate',
      desc: 'Live gold rate - Get real-time gold rates, accurate and transparent!',
      icon: (
        <svg className="w-8 h-8 text-[#5A1434]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 17l10-4 10 4-10 4-10-4z" />
          <path d="M2 12l10-4 10 4" />
          <path d="M2 7l10-4 10 4" />
          <path d="M7 3l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="currentColor" />
          <path d="M17 11l.7 1.4 1.4.7-1.4.7-.7 1.4-.7-1.4-1.4-.7 1.4-.7.7-1.4z" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'makingcharges',
      title: 'Making Charges',
      badge: '3%',
      desc: 'Save more with making charges starting from 3% on gold jewellery.',
      isHighlight: true
    },
    {
      id: 'moderndesigns',
      title: 'Modern Designs',
      desc: 'Modern and traditional designs, crafted to perfection',
      icon: (
        <svg className="w-8 h-8 text-[#5A1434]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
          <path d="M4.93 4.93l2.12 2.12m9.9 9.9l2.12 2.12M4.93 19.07l2.12-2.12m9.9-9.9l2.12-2.12" />
          <circle cx="12" cy="5" r="1" fill="currentColor" />
          <circle cx="12" cy="19" r="1" fill="currentColor" />
          <circle cx="5" cy="12" r="1" fill="currentColor" />
          <circle cx="19" cy="12" r="1" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'service',
      title: 'Top Quality Service',
      desc: 'Top-quality service, trusted and seamless Every time',
      icon: (
        <svg className="w-8 h-8 text-[#5A1434]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      )
    },
    {
      id: 'calculator',
      title: 'Bill Yourself Calculator',
      desc: 'Get an instant, transparent jewellery Price breakdown',
      action: onOpenCalculator,
      icon: (
        <svg className="w-8 h-8 text-[#5A1434]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="2" width="16" height="20" rx="3" />
          <line x1="8" y1="6" x2="16" y2="6" strokeWidth="2" />
          <line x1="8" y1="10" x2="10" y2="10" strokeWidth="2" />
          <line x1="14" y1="10" x2="16" y2="10" strokeWidth="2" />
          <line x1="8" y1="14" x2="10" y2="14" strokeWidth="2" />
          <line x1="14" y1="14" x2="16" y2="14" strokeWidth="2" />
          <line x1="8" y1="18" x2="16" y2="18" strokeWidth="2" />
          <circle cx="17" cy="17" r="4" fill="#FAF3E5" stroke="#5A1434" strokeWidth="1.5" />
          <text x="17" y="19.5" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#5A1434">₹</text>
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-[#FAF8F5] pt-14 pb-16 overflow-hidden border-b border-[#DECDB3]/80">
      
      {/* Decorative Gold Geometric Outline Banner at Top */}
      <div className="w-full h-12 opacity-35 pointer-events-none select-none mb-4 overflow-hidden flex items-center justify-center">
        <svg viewBox="0 0 1440 48" className="w-full h-full text-[#C8A060]" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0,24 Q60,0 120,24 T240,24 T360,24 T480,24 T600,24 T720,24 T840,24 T960,24 T1080,24 T1200,24 T1320,24 T1440,24" />
          <polygon points="120,12 130,24 120,36 110,24" />
          <polygon points="360,12 370,24 360,36 350,24" />
          <polygon points="600,12 610,24 600,36 590,24" />
          <polygon points="840,12 850,24 840,36 830,24" />
          <polygon points="1080,12 1090,24 1080,36 1070,24" />
          <polygon points="1320,12 1330,24 1320,36 1310,24" />
          <circle cx="240" cy="24" r="8" />
          <circle cx="480" cy="24" r="8" />
          <circle cx="720" cy="24" r="8" />
          <circle cx="960" cy="24" r="8" />
          <circle cx="1200" cy="24" r="8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* 1. CINEMATIC STORY FILM & POETRY ROW                    */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16">
          
          {/* Left: Luxury Brand Video Reel Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#E3CEAB] aspect-[4/3] sm:aspect-[16/11] bg-stone-900 group">
              
              <video
                ref={videoRef}
                src="https://assets.mixkit.co/videos/preview/mixkit-woman-wearing-a-traditional-indian-wedding-dress-41130-large.mp4"
                poster="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1000&q=80"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onTimeUpdate={handleTimeUpdate}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

              {/* Video Player Controls Bar */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between gap-3 text-white">
                
                {/* Play / Pause Toggle */}
                <button
                  onClick={togglePlay}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-white" />
                  ) : (
                    <Play className="w-4 h-4 fill-white" />
                  )}
                </button>

                {/* Scrubber / Progress Indicator */}
                <div className="flex-1 flex items-center gap-2">
                  <span className="text-[11px] font-mono opacity-80">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                  <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Mute Toggle */}
                <button
                  onClick={toggleMute}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>

                {/* Fullscreen icon */}
                <button
                  onClick={() => {
                    if (videoRef.current) {
                      if (videoRef.current.requestFullscreen) {
                        videoRef.current.requestFullscreen();
                      }
                    }
                  }}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors cursor-pointer hidden sm:block"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

              </div>

            </div>
          </div>

          {/* Right: Poetic Typography (Matching Reference) */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            
            <div className="space-y-1">
              
              {/* Line 1: Sab kehte hain... */}
              <div className="inline-flex items-center gap-2">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#4A102E] tracking-tight">
                  Sab kehte hain...
                </h2>
                <div className="w-7 h-7 sm:w-9 sm:h-9 text-[#C59239] animate-pulse shrink-0">
                  <Sparkles className="w-full h-full fill-[#C59239]" />
                </div>
              </div>

              {/* Line 2: tum kuchh */}
              <div>
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#4A102E] tracking-tight">
                  tum kuchh
                </h3>
              </div>

              {/* Line 3 & 4: badli - badli si lagti ho */}
              <div className="pt-2">
                <span className="block text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#C59239] tracking-tight">
                  badli - badli
                </span>
                <span className="block text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#C59239] tracking-tight mt-1">
                  si lagti ho
                </span>
              </div>

            </div>

            {/* Poetic Narrative Subtitle */}
            <p className="text-xs sm:text-sm text-stone-600 max-w-lg leading-relaxed pt-2 mx-auto lg:mx-0">
              Because true fine jewellery doesn't just adorn you — it celebrates your grace. Pure 22K hallmarked gold and conflict-free natural diamonds, crafted for your most luminous memories.
            </p>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onExploreBridal}
                className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-amber-200 font-semibold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-2xs flex items-center gap-2"
              >
                <span>Explore Bridal Haute Joaillerie</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={togglePlay}
                className="px-5 py-3 border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 text-stone-700 font-medium text-xs rounded-full transition-all cursor-pointer flex items-center gap-2"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'Pause Film' : 'Play Brand Film'}</span>
              </button>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* 2. RIGHT GOLD / AURA JEWELS PROMISES (6 Pillars)         */}
        {/* ======================================================== */}
        <div className="pt-6">
          
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A102E] tracking-tight">
              Aura Jewels Promises
            </h2>
            <div className="w-12 h-0.5 bg-[#C59239] mx-auto mt-2.5"></div>
          </div>

          {/* 6 Cards Grid (Minimalist Styling) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            {promises.map((promise) => {
              const isClickable = Boolean(promise.action);

              return (
                <div
                  key={promise.id}
                  onClick={promise.action ? promise.action : undefined}
                  className={`bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/80 hover:border-stone-400 shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[190px] group ${
                    isClickable ? 'cursor-pointer hover:-translate-y-0.5' : ''
                  }`}
                >
                  {/* Top Icon / Badge */}
                  <div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-200/60 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                    {promise.badge ? (
                      <span className="font-serif font-extrabold text-2xl text-[#5A1434] tracking-tight">
                        {promise.badge}
                      </span>
                    ) : (
                      promise.icon
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5 flex-1 flex flex-col justify-start">
                    <h4 className="font-serif font-bold text-stone-900 text-xs sm:text-sm leading-snug">
                      {promise.title}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-stone-500 leading-relaxed">
                      {promise.desc}
                    </p>
                  </div>

                  {/* Interactive Hint for Calculator */}
                  {isClickable && (
                    <div className="mt-2 text-[9px] font-semibold text-[#5A1434] uppercase tracking-wider group-hover:underline flex items-center gap-1">
                      <span>Calculate Piece</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Decorative Gold Geometric Outline Banner at Bottom */}
      <div className="w-full h-12 opacity-35 pointer-events-none select-none mt-12 overflow-hidden flex items-center justify-center">
        <svg viewBox="0 0 1440 48" className="w-full h-full text-[#C8A060]" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0,24 Q60,48 120,24 T240,24 T360,24 T480,24 T600,24 T720,24 T840,24 T960,24 T1080,24 T1200,24 T1320,24 T1440,24" />
          <polygon points="120,36 130,24 120,12 110,24" />
          <polygon points="360,36 370,24 360,12 350,24" />
          <polygon points="600,36 610,24 600,12 590,24" />
          <polygon points="840,36 850,24 840,12 830,24" />
          <polygon points="1080,36 1090,24 1080,12 1070,24" />
          <polygon points="1320,36 1330,24 1320,12 1310,24" />
        </svg>
      </div>

    </section>
  );
}
