import React, { useState, useMemo } from 'react';
import { 
  Sparkles, Diamond, Globe, Check, Award, ShieldCheck, 
  RotateCcw, ArrowRight, Printer, Share2, X, Maximize2, 
  ExternalLink, User, CheckCircle2, ChevronRight, Home
} from 'lucide-react';
import { formatINR } from '../../data/goldRates';

// SVG Diamond Shape Outline Icons
const ShapeIcon = ({ shape, className = "w-6 h-6" }) => {
  switch (shape) {
    case 'ROUND':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="12" cy="12" r="9.5" />
          <polygon points="12,5 17,9 17,15 12,19 7,15 7,9" />
          <line x1="12" y1="2.5" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="21.5" />
          <line x1="2.5" y1="12" x2="7" y2="12" />
          <line x1="17" y1="12" x2="21.5" y2="12" />
          <line x1="5.3" y1="5.3" x2="7" y2="9" />
          <line x1="18.7" y1="5.3" x2="17" y2="9" />
          <line x1="5.3" y1="18.7" x2="7" y2="15" />
          <line x1="18.7" y1="18.7" x2="17" y2="15" />
        </svg>
      );
    case 'OVAL':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <ellipse cx="12" cy="12" rx="7.5" ry="10" />
          <polygon points="12,5 16,9 16,15 12,19 8,15 8,9" />
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="22" />
          <line x1="4.5" y1="12" x2="8" y2="12" />
          <line x1="16" y1="12" x2="19.5" y2="12" />
        </svg>
      );
    case 'EMERALD':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <polygon points="7,2 17,2 21,6 21,18 17,22 7,22 3,18 3,6" />
          <polygon points="8,5 16,5 18,7 18,17 16,19 8,19 6,17 6,7" />
          <rect x="8.5" y="7.5" width="7" height="9" />
          <line x1="3" y1="6" x2="6" y2="7" />
          <line x1="21" y1="6" x2="18" y2="7" />
          <line x1="21" y1="18" x2="18" y2="17" />
          <line x1="3" y1="18" x2="6" y2="17" />
        </svg>
      );
    case 'CUSHION':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <polygon points="12,6 18,12 12,18 6,12" />
          <line x1="12" y1="3.5" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="20.5" />
          <line x1="3.5" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="20.5" y2="12" />
        </svg>
      );
    case 'PRINCESS':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <rect x="3.5" y="3.5" width="17" height="17" />
          <line x1="3.5" y1="3.5" x2="20.5" y2="20.5" />
          <line x1="3.5" y1="20.5" x2="20.5" y2="3.5" />
          <polygon points="12,6 18,12 12,18 6,12" />
        </svg>
      );
    case 'PEAR':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M12 2.5 C16.5 8 19 13 19 16.5 A7 7 0 0 1 5 16.5 C5 13 7.5 8 12 2.5 Z" />
          <ellipse cx="12" cy="15.5" rx="3.5" ry="4" />
          <line x1="12" y1="2.5" x2="12" y2="11.5" />
        </svg>
      );
    case 'RADIANT':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <polygon points="6,3 18,3 21,6 21,18 18,21 6,21 3,18 3,6" />
          <line x1="3" y1="3" x2="21" y2="21" />
          <line x1="3" y1="21" x2="21" y2="3" />
          <polygon points="12,6 18,12 12,18 6,12" />
        </svg>
      );
    case 'MARQUISE':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M12 2 C18 7.5 20.5 12 20.5 12 C20.5 12 18 16.5 12 22 C6 16.5 3.5 12 3.5 12 C3.5 12 6 7.5 12 2 Z" />
          <polygon points="12,6 16,12 12,18 8,12" />
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="3.5" y1="12" x2="8" y2="12" />
          <line x1="16" y1="12" x2="20.5" y2="12" />
        </svg>
      );
    case 'ASSCHER':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <polygon points="7,3 17,3 21,7 21,17 17,21 7,21 3,17 3,7" />
          <polygon points="8.5,6 15.5,6 18,8.5 18,15.5 15.5,18 8.5,18 6,15.5 6,8.5" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="3" y1="3" x2="9" y2="9" />
          <line x1="21" y1="3" x2="15" y2="9" />
          <line x1="21" y1="21" x2="15" y2="15" />
          <line x1="3" y1="21" x2="9" y2="15" />
        </svg>
      );
    case 'HEART':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M12 6 C10 2.8 5.5 2.5 3.5 5.5 C1.5 8.5 3.5 13.5 12 21.5 C20.5 13.5 22.5 8.5 20.5 5.5 C18.5 2.5 14 2.8 12 6 Z" />
          <polygon points="12,8 16,12 12,16 8,12" />
          <line x1="12" y1="6" x2="12" y2="8" />
          <line x1="12" y1="16" x2="12" y2="21.5" />
        </svg>
      );
    default:
      return <Diamond className={className} />;
  }
};

// Shape-specific diamond imagery
const SHAPE_IMAGES = {
  ROUND: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  OVAL: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  EMERALD: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  CUSHION: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
  PRINCESS: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  PEAR: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  RADIANT: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  MARQUISE: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
  ASSCHER: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  HEART: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
};

export default function CalculatorPage({ onNavigateHome }) {
  // Calculator Form State
  const [clientName, setClientName] = useState('');
  const [selectedShape, setSelectedShape] = useState('ROUND');
  const [caratWeight, setCaratWeight] = useState(1.00);
  const [colorGrade, setColorGrade] = useState('E');
  const [clarityGrade, setClarityGrade] = useState('VVS1');
  const [gradingLab, setGradingLab] = useState('IGI'); // 'IGI' | 'GIA'

  // Modal States
  const [isQuotationModalOpen, setIsQuotationModalOpen] = useState(false);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  // Available Form Options
  const shapes = [
    'ROUND', 'OVAL', 'EMERALD', 'CUSHION', 'PRINCESS', 
    'PEAR', 'RADIANT', 'MARQUISE', 'ASSCHER', 'HEART'
  ];

  const caratPresets = [
    0.30, 0.50, 0.70, 0.90, 1.00, 1.25, 1.50, 2.00, 3.00, 5.00
  ];

  const colorGrades = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];

  const clarityGrades = ['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2', 'I1'];

  // Indian Rapaport Market Benchmark Calculation
  const valuation = useMemo(() => {
    // Carat Bracket Scaling & Base Price Benchmarks
    let bracketBasePerCarat = 611940; // Reference 1.00ct E VVS1 benchmark from screenshot
    let bracketText = '1.00 - 1.49 ct';

    if (caratWeight < 0.50) {
      bracketBasePerCarat = 195000;
      bracketText = '0.30 - 0.49 ct';
    } else if (caratWeight < 0.70) {
      bracketBasePerCarat = 285000;
      bracketText = '0.50 - 0.69 ct';
    } else if (caratWeight < 0.90) {
      bracketBasePerCarat = 385000;
      bracketText = '0.70 - 0.89 ct';
    } else if (caratWeight < 1.00) {
      bracketBasePerCarat = 475000;
      bracketText = '0.90 - 0.99 ct';
    } else if (caratWeight < 1.50) {
      bracketBasePerCarat = 611940;
      bracketText = '1.00 - 1.49 ct';
    } else if (caratWeight < 2.00) {
      bracketBasePerCarat = 795000;
      bracketText = '1.50 - 1.99 ct';
    } else if (caratWeight < 3.00) {
      bracketBasePerCarat = 1180000;
      bracketText = '2.00 - 2.99 ct';
    } else if (caratWeight < 5.00) {
      bracketBasePerCarat = 1850000;
      bracketText = '3.00 - 4.99 ct';
    } else {
      bracketBasePerCarat = 2650000;
      bracketText = '5.00+ ct';
    }

    // Color Factors (Normalized to E = 1.00)
    const colorMultipliers = {
      'D': 1.09, 'E': 1.00, 'F': 0.93, 'G': 0.86, 'H': 0.79,
      'I': 0.72, 'J': 0.65, 'K': 0.58, 'L': 0.52, 'M': 0.46
    };

    // Clarity Factors (Normalized to VVS1 = 1.00)
    const clarityMultipliers = {
      'FL': 1.25, 'IF': 1.14, 'VVS1': 1.00, 'VVS2': 0.89,
      'VS1': 0.79, 'VS2': 0.70, 'SI1': 0.59, 'SI2': 0.49, 'I1': 0.38
    };

    // Shape Factors (Round Brilliant is standard benchmark; Fancy cuts have standard 5-10% trade variance)
    const shapeMultipliers = {
      'ROUND': 1.00, 'OVAL': 0.95, 'EMERALD': 0.92, 'CUSHION': 0.93, 'PRINCESS': 0.94,
      'PEAR': 0.93, 'RADIANT': 0.92, 'MARQUISE': 0.91, 'ASSCHER': 0.94, 'HEART': 0.95
    };

    // Lab Factor: GIA holds 6% international premium
    const labMultiplier = gradingLab === 'GIA' ? 1.06 : 1.00;

    const colorMul = colorMultipliers[colorGrade] || 1.00;
    const clarityMul = clarityMultipliers[clarityGrade] || 1.00;
    const shapeMul = shapeMultipliers[selectedShape] || 1.00;

    // Rate per carat
    const ratePerCarat = Math.round(bracketBasePerCarat * colorMul * clarityMul * shapeMul * labMultiplier);

    // Total Diamond Value before tax
    const diamondValue = Math.round(caratWeight * ratePerCarat);

    // 3% Indian GST
    const gstValue = Math.round(diamondValue * 0.03);

    // Total Valuation
    const totalValuation = diamondValue + gstValue;

    return {
      ratePerCarat,
      diamondValue,
      gstValue,
      totalValuation,
      bracketText
    };
  }, [caratWeight, selectedShape, colorGrade, clarityGrade, gradingLab]);

  // Reset to default benchmark
  const handleReset = () => {
    setClientName('');
    setSelectedShape('ROUND');
    setCaratWeight(1.00);
    setColorGrade('E');
    setClarityGrade('VVS1');
    setGradingLab('IGI');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 pb-16">
      
      {/* 1. Subheader Bar (Exact Right Gold Style) */}
      <div className="bg-white border-b border-stone-200 py-3.5 px-4 sm:px-6 lg:px-8 sticky top-16 z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-serif font-black tracking-tight text-xl sm:text-2xl text-[#8E5822]">
                AURA JEWELS
              </span>
            </div>
            <div className="h-6 w-[1.5px] bg-stone-300"></div>
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4A102E]">
                SOLITAIRE
              </span>
              <span className="text-[10px] font-semibold tracking-wide text-amber-700 uppercase">
                VALUATION CALCULATOR
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 border border-stone-200 rounded-full px-4 py-1.5 text-xs text-stone-700 bg-stone-50 shadow-2xs">
            <span className="font-bold text-stone-500 uppercase text-[10px] tracking-wider hidden sm:inline">
              VERIFIED BY
            </span>
            <span className="flex items-center gap-1 font-bold text-stone-900">
              <Diamond className="w-3.5 h-3.5 text-amber-700 fill-amber-700" /> GIA
            </span>
            <span className="text-stone-300">|</span>
            <span className="flex items-center gap-1 font-bold text-stone-900">
              <Globe className="w-3.5 h-3.5 text-amber-700" /> IGI
            </span>
          </div>

        </div>
      </div>

      {/* 2. Main Page Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 text-center">
        <div className="inline-flex items-center gap-1.5 px-4 py-1 bg-[#FAF3E5] border border-[#DECA9F] text-[#8E5822] text-[11px] font-bold rounded-full uppercase tracking-widest mb-3 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>NATURAL CERTIFIED SOLITAIRE BENCHMARK</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-stone-900 tracking-tight uppercase">
          LIVE SOLITAIRE VALUATION CALCULATOR
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl mx-auto">
          Instant, certified natural diamond calculations backed by GIA & IGI grading standards.
        </p>
      </div>

      {/* 3. Main 2-Column Calculator Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Visual Diamond & Real-Time Valuation Card   */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Diamond Preview Card */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <Diamond className="w-4 h-4 text-amber-600 fill-amber-600" />
                  <span className="font-serif font-bold text-stone-900 text-base uppercase">
                    {caratWeight.toFixed(2)} CT {selectedShape}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 bg-[#FAF3E5] border border-[#DECA9F] text-[#8E5822] rounded-full uppercase tracking-wider">
                  <Award className="w-3 h-3 text-amber-600" />
                  <span>TRIPLE EXCELLENT</span>
                </div>
              </div>

              {/* Diamond Image Container */}
              <div className="relative mt-4 rounded-xl overflow-hidden bg-stone-100 aspect-square group shadow-inner">
                {/* Brilliance badge */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1 bg-[#4A102E] text-amber-300 text-[10px] font-bold rounded-full uppercase tracking-wider shadow-md">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Brilliance</span>
                </div>

                {/* Expand / Zoom button */}
                <button
                  onClick={() => setIsZoomModalOpen(true)}
                  className="absolute top-3 right-3 z-10 p-2 bg-white/90 hover:bg-white text-stone-700 rounded-full shadow-md transition-all cursor-pointer hover:scale-105"
                  title="Zoom 360 Inspection"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <img 
                  src={SHAPE_IMAGES[selectedShape] || SHAPE_IMAGES.ROUND} 
                  alt={`${caratWeight} Carat ${selectedShape} Solitaire Diamond`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-[11px] font-semibold text-amber-200">Aura Certified Masterpiece</span>
                  <div className="text-xs font-serif font-bold">Natural Earth-Mined Solitaire</div>
                </div>
              </div>

              {/* Metric Spec Tiles (3 Columns) */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-stone-100 text-center">
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-2.5">
                  <span className="block text-[10px] text-stone-500 font-medium">Cut & Polish</span>
                  <span className="text-xs font-bold text-amber-800 uppercase">3X EXCELLENT</span>
                </div>
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-2.5">
                  <span className="block text-[10px] text-stone-500 font-medium">Fluorescence</span>
                  <span className="text-xs font-bold text-emerald-700 uppercase">100% NONE</span>
                </div>
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-2.5">
                  <span className="block text-[10px] text-stone-500 font-medium">Grading Lab</span>
                  <span className="text-xs font-bold text-[#4A102E] uppercase">{gradingLab} CERTIFIED</span>
                </div>
              </div>

            </div>

            {/* Bottom Valuation Card (Rich Gold Accent Border matching screenshot) */}
            <div className="bg-white border-2 border-[#D8A966] rounded-2xl p-6 shadow-md relative overflow-hidden">
              
              {/* Top Row: Spec & Certificate Badge */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-serif font-bold text-lg text-stone-900 tracking-tight">
                    {caratWeight.toFixed(2)}CT {selectedShape}
                  </h3>
                  <p className="text-xs font-semibold text-amber-800 tracking-wider uppercase mt-0.5">
                    COLOR {colorGrade} • CLARITY {clarityGrade} • 3X EX
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full shrink-0">
                  <Check className="w-3.5 h-3.5" />
                  <span>{gradingLab} CERTIFIED</span>
                </div>
              </div>

              {/* Main Total Valuation Row */}
              <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-stone-100 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                    TOTAL VALUATION (INCL. GST)
                  </span>
                  <span className="text-3xl sm:text-4xl font-serif font-extrabold text-[#4A102E] tracking-tight">
                    {formatINR(valuation.totalValuation)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-stone-500 font-medium block">Per Carat</span>
                  <span className="text-sm font-bold text-amber-800">
                    {formatINR(valuation.ratePerCarat)} / ct
                  </span>
                </div>
              </div>

              {/* Diamond & GST Split Box */}
              <div className="mt-4 bg-stone-50 border border-stone-200 rounded-xl p-3 flex items-center justify-between text-xs text-stone-700 font-medium">
                <div>
                  <span className="text-stone-500">Diamond: </span>
                  <span className="font-bold text-stone-900">{formatINR(valuation.diamondValue)}</span>
                </div>
                <div className="text-stone-300">|</div>
                <div>
                  <span className="text-stone-500">GST (3%): </span>
                  <span className="font-bold text-stone-900">{formatINR(valuation.gstValue)}</span>
                </div>
              </div>

              {/* Action Buttons: Get Quotation + Reset */}
              <div className="mt-5 flex items-center gap-3">
                <button
                  onClick={() => setIsQuotationModalOpen(true)}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-gradient-to-r from-[#D8A966] via-[#C99039] to-[#B2772B] hover:brightness-105 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>GET QUOTATION ↗</span>
                </button>
                <button
                  onClick={handleReset}
                  className="p-3.5 border border-stone-300 hover:border-stone-400 bg-stone-50 hover:bg-stone-100 text-stone-700 rounded-xl transition-all cursor-pointer shadow-2xs"
                  title="Reset to Benchmark"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Carat Bracket Subtext */}
              <div className="mt-3.5 text-center text-[11px] text-stone-500">
                <span>{valuation.bracketText} Carat Bracket • Triple Excellent 3X Standard</span>
              </div>

            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: 6 Valuation Controls                       */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Section 1: Client Name (Optional) */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#8E5822]" />
                  <h3 className="font-serif font-bold text-stone-900 text-sm sm:text-base">
                    1. CLIENT NAME <span className="text-xs font-normal text-stone-500 font-sans">(Optional)</span>
                  </h3>
                </div>
                <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider">
                  Optional
                </span>
              </div>
              <p className="text-xs text-stone-500 mb-3">
                Enter the client's name to personalize the diamond valuation sheet. If left blank, it is automatically omitted.
              </p>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. Mr. Rajesh Sharma or Dr. Priya Mehta"
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-[#4A102E] focus:bg-white rounded-xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-all shadow-inner"
              />
            </div>

            {/* Section 2: Select Diamond Shape */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif font-bold text-stone-900 text-sm sm:text-base uppercase">
                  2. SELECT DIAMOND SHAPE
                </h3>
                <span className="text-xs font-bold text-amber-800 bg-[#FAF3E5] px-2.5 py-0.5 rounded-full border border-[#DECA9F] uppercase">
                  {selectedShape}
                </span>
              </div>

              {/* 10 Shapes Horizontal Explorer */}
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                {shapes.map((shape) => {
                  const isSelected = selectedShape === shape;
                  return (
                    <button
                      key={shape}
                      onClick={() => setSelectedShape(shape)}
                      className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all cursor-pointer border ${
                        isSelected 
                          ? 'bg-[#4A102E] border-[#4A102E] text-amber-300 shadow-md scale-105' 
                          : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700 hover:border-stone-300'
                      }`}
                    >
                      <ShapeIcon shape={shape} className={`w-6 h-6 mb-1 ${isSelected ? 'stroke-amber-300' : 'stroke-stone-700'}`} />
                      <span className="text-[9px] font-bold tracking-tight uppercase truncate max-w-full">
                        {shape}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section 3: Carat Weight Slider & Presets */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif font-bold text-stone-900 text-sm sm:text-base uppercase">
                  3. CARAT WEIGHT
                </h3>
                <div className="flex items-center gap-1.5 bg-[#FAF3E5] border border-[#DECA9F] rounded-lg px-3 py-1">
                  <input
                    type="number"
                    min="0.30"
                    max="5.00"
                    step="0.01"
                    value={caratWeight}
                    onChange={(e) => setCaratWeight(Math.max(0.30, Math.min(5.00, parseFloat(e.target.value) || 0.30)))}
                    className="w-12 text-center text-xs font-bold text-amber-950 bg-transparent outline-none"
                  />
                  <span className="text-xs font-bold text-amber-800">ct</span>
                </div>
              </div>

              {/* Slider Track */}
              <div className="mb-4">
                <input
                  type="range"
                  min="0.30"
                  max="5.00"
                  step="0.01"
                  value={caratWeight}
                  onChange={(e) => setCaratWeight(parseFloat(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#4A102E]"
                />
              </div>

              {/* Preset Buttons */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {caratPresets.map((preset) => {
                  const isSelected = Math.abs(caratWeight - preset) < 0.005;
                  return (
                    <button
                      key={preset}
                      onClick={() => setCaratWeight(preset)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                        isSelected 
                          ? 'bg-[#4A102E] border-[#4A102E] text-white shadow-xs' 
                          : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                      }`}
                    >
                      {preset.toFixed(2)}ct
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section 4: Color Grade */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif font-bold text-stone-900 text-sm sm:text-base uppercase">
                  4. COLOR GRADE
                </h3>
                <span className="text-xs font-bold text-amber-800 bg-[#FAF3E5] px-2.5 py-0.5 rounded-full border border-[#DECA9F]">
                  Grade {colorGrade}
                </span>
              </div>

              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                {colorGrades.map((color) => {
                  const isSelected = colorGrade === color;
                  return (
                    <button
                      key={color}
                      onClick={() => setColorGrade(color)}
                      className={`h-11 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        isSelected 
                          ? 'bg-[#4A102E] border-[#4A102E] text-white shadow-sm scale-105' 
                          : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
                      }`}
                    >
                      {color}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section 5: Clarity Grade */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif font-bold text-stone-900 text-sm sm:text-base uppercase">
                  5. CLARITY GRADE
                </h3>
                <span className="text-xs font-bold text-amber-800 bg-[#FAF3E5] px-2.5 py-0.5 rounded-full border border-[#DECA9F]">
                  {clarityGrade}
                </span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-9 gap-2">
                {clarityGrades.map((clarity) => {
                  const isSelected = clarityGrade === clarity;
                  return (
                    <button
                      key={clarity}
                      onClick={() => setClarityGrade(clarity)}
                      className={`h-11 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        isSelected 
                          ? 'bg-[#4A102E] border-[#4A102E] text-white shadow-sm scale-105' 
                          : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
                      }`}
                    >
                      {clarity}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section 6: Certification Grading Lab */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <h3 className="font-serif font-bold text-stone-900 text-sm sm:text-base uppercase mb-4">
                6. CERTIFICATION GRADING LAB
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* IGI Certified Card */}
                <button
                  onClick={() => setGradingLab('IGI')}
                  className={`p-4 rounded-xl border-2 flex items-center justify-between transition-all cursor-pointer ${
                    gradingLab === 'IGI' 
                      ? 'border-[#4A102E] bg-[#FAF3E5]/50 shadow-xs' 
                      : 'border-stone-200 bg-stone-50 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#4A102E] text-amber-300 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="font-serif font-bold text-stone-900 text-sm block">IGI CERTIFIED</span>
                      <span className="text-[10px] text-stone-500">International Gemological Institute</span>
                    </div>
                  </div>
                  {gradingLab === 'IGI' && (
                    <Check className="w-5 h-5 text-[#4A102E]" />
                  )}
                </button>

                {/* GIA Certified Card */}
                <button
                  onClick={() => setGradingLab('GIA')}
                  className={`p-4 rounded-xl border-2 flex items-center justify-between transition-all cursor-pointer ${
                    gradingLab === 'GIA' 
                      ? 'border-[#4A102E] bg-[#FAF3E5]/50 shadow-xs' 
                      : 'border-stone-200 bg-stone-50 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#4A102E] text-amber-300 rounded-lg flex items-center justify-center">
                      <Diamond className="w-5 h-5 fill-amber-300" />
                    </div>
                    <div className="text-left">
                      <span className="font-serif font-bold text-stone-900 text-sm block">GIA CERTIFIED</span>
                      <span className="text-[10px] text-stone-500">Gemological Institute of America</span>
                    </div>
                  </div>
                  {gradingLab === 'GIA' && (
                    <Check className="w-5 h-5 text-[#4A102E]" />
                  )}
                </button>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ======================================================== */}
      {/* 4. OUR CERTIFIED DIAMOND ASSURANCES (Exact matching Image 4) */}
      {/* ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-stone-100">
            <div>
              <span className="text-[11px] font-bold text-[#8E5822] uppercase tracking-widest block mb-1">
                ✧ UNCOMPROMISING INTEGRITY & TRANSPARENCY
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-stone-900">
                OUR CERTIFIED DIAMOND ASSURANCES
              </h2>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-full self-start sm:self-auto">
              <Check className="w-4 h-4" />
              <span>100% CERTIFIED NATURAL DIAMONDS</span>
            </div>
          </div>

          {/* 3 Assurance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            
            {/* Card 1 */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#4A102E] text-amber-300 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 bg-white border border-stone-200 px-2 py-0.5 rounded-full">
                  EST. HERITAGE
                </span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-stone-900 text-base">40 YEARS OF TRUST</h3>
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mt-0.5">
                  FOUR DECADES OF FINE JEWELLERY LEGACY
                </span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Generations of uncompromising integrity, transparency, and master diamond craftsmanship.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#4A102E] text-amber-300 flex items-center justify-center">
                  <Diamond className="w-5 h-5 fill-amber-300" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 bg-white border border-stone-200 px-2 py-0.5 rounded-full">
                  100% CONFLICT-FREE
                </span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-stone-900 text-base">DIRECT MINE TO MARKET</h3>
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mt-0.5">
                  ETHICALLY SOURCED WITHOUT MIDDLEMEN
                </span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Kimberley Process compliant stones direct from world-renowned diamond cutters at wholesale benchmark value.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#4A102E] text-amber-300 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 bg-white border border-stone-200 px-2 py-0.5 rounded-full">
                  CERTIFIED EXPERTS
                </span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-stone-900 text-base">VERIFIED BY GEMOLOGIST</h3>
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mt-0.5">
                  DUAL-LAYER EXPERT AUTHENTICATION
                </span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Every solitaire is personally inspected & laser-inscribed under strict GIA & IGI grading protocols.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* ======================================================== */}
      {/* 5. Footer Notice & Back to Home Action                   */}
      {/* ======================================================== */}
      <div className="max-w-4xl mx-auto px-4 mt-12 text-center space-y-6">
        <div>
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#8E5822] mb-1">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>SOLITAIRE BY AURA JEWELS</span>
          </div>
          <p className="text-xs text-stone-500 max-w-xl mx-auto leading-relaxed">
            Transparent, Fair & Honest Pricing. All diamond valuations are computed in real-time according to natural diamond market benchmarks and certified grading standards (GIA & IGI).
          </p>
        </div>

        <div>
          <button
            onClick={onNavigateHome}
            className="px-8 py-2.5 rounded-full border border-[#4A102E] text-[#4A102E] hover:bg-[#4A102E] hover:text-white font-semibold text-xs transition-all cursor-pointer shadow-2xs"
          >
            Back to Home
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 6. OFFICIAL VALUATION QUOTATION MODAL                    */}
      {/* ======================================================== */}
      {isQuotationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-stone-200 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setIsQuotationModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Header */}
            <div className="text-center pb-4 border-b border-stone-100 space-y-1">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#8E5822] uppercase">
                OFFICIAL VALUATION MEMORANDUM
              </span>
              <h3 className="font-serif font-black text-2xl text-[#4A102E]">
                AURA JEWELS
              </h3>
              <p className="text-[11px] text-stone-500">
                Natural Diamond Appraisal Sheet • Ref: AJ-SOL-{Date.now().toString().slice(-6)}
              </p>
            </div>

            {/* Client Personalization */}
            <div className="bg-[#FAF3E5] p-3.5 rounded-xl border border-[#DECA9F] text-xs flex items-center justify-between">
              <div>
                <span className="text-stone-500 text-[10px] uppercase font-bold block">Appraisal Prepared For:</span>
                <span className="font-serif font-bold text-stone-900 text-sm">
                  {clientName.trim() ? clientName : 'Valued Patron'}
                </span>
              </div>
              <div className="text-right">
                <span className="text-stone-500 text-[10px] uppercase font-bold block">Date:</span>
                <span className="font-medium text-stone-700">
                  {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </span>
              </div>
            </div>

            {/* Specification Matrix */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-stone-100">
                <span className="text-stone-500">Diamond Shape:</span>
                <span className="font-bold text-stone-900">{selectedShape} BRILLIANT</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-100">
                <span className="text-stone-500">Carat Weight:</span>
                <span className="font-bold text-stone-900">{caratWeight.toFixed(2)} Carat</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-100">
                <span className="text-stone-500">Color Grade:</span>
                <span className="font-bold text-stone-900">Grade {colorGrade}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-100">
                <span className="text-stone-500">Clarity Grade:</span>
                <span className="font-bold text-stone-900">{clarityGrade}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-100">
                <span className="text-stone-500">Cut & Polish Standard:</span>
                <span className="font-bold text-amber-800">Triple Excellent (3X EX)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-100">
                <span className="text-stone-500">Fluorescence:</span>
                <span className="font-bold text-emerald-700">None (100% Inactive)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-stone-100">
                <span className="text-stone-500">Grading Laboratory:</span>
                <span className="font-bold text-[#4A102E]">{gradingLab} Certified Benchmark</span>
              </div>
            </div>

            {/* Pricing Summary */}
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
              <div className="flex justify-between text-xs text-stone-600">
                <span>Diamond Benchmark Value:</span>
                <span className="font-medium">{formatINR(valuation.diamondValue)}</span>
              </div>
              <div className="flex justify-between text-xs text-stone-600">
                <span>GST Tax (3%):</span>
                <span className="font-medium">{formatINR(valuation.gstValue)}</span>
              </div>
              <div className="pt-2 border-t border-stone-200 flex justify-between items-baseline">
                <div>
                  <span className="text-xs font-bold text-stone-900 uppercase block">Total Quotation Value:</span>
                  <span className="text-[10px] text-stone-500">Including 3% Indian GST</span>
                </div>
                <span className="font-serif font-extrabold text-2xl text-[#4A102E]">
                  {formatINR(valuation.totalValuation)}
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#4A102E] hover:bg-[#3B0C24] text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>Print Quotation</span>
              </button>
              <button
                onClick={() => {
                  alert(`Quotation for ${caratWeight}ct ${selectedShape} (${formatINR(valuation.totalValuation)}) copied to clipboard!`);
                  setIsQuotationModalOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-3 px-4 border border-stone-300 hover:bg-stone-50 rounded-xl text-xs font-semibold text-stone-700 cursor-pointer transition-all"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 7. ZOOM LIGHTBOX MODAL                                   */}
      {/* ======================================================== */}
      {isZoomModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4">
            <button
              onClick={() => setIsZoomModalOpen(false)}
              className="absolute top-6 right-6 z-20 p-2.5 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-square rounded-2xl overflow-hidden bg-stone-900">
              <img 
                src={SHAPE_IMAGES[selectedShape] || SHAPE_IMAGES.ROUND} 
                alt={`${caratWeight}ct ${selectedShape}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h4 className="font-serif font-bold text-stone-900 text-lg uppercase">
                {caratWeight.toFixed(2)} CT {selectedShape} • Triple Excellent 3X Cut
              </h4>
              <p className="text-xs text-stone-500 mt-1">
                Authentic natural facet symmetry and light refraction inspection.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
