import React, { useState } from 'react';
import { ArrowRight, X, Sparkles } from 'lucide-react';

// Custom Jewellery Category SVGs with luxury gold styling
const JewelSvg = ({ type }) => {
  const strokeColor = "#8E5822";
  const fillColor = "#C5A059";

  switch (type) {
    case 'bracelet':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={strokeColor} strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="9" ry="6" strokeDasharray="3 2" />
          <circle cx="12" cy="6" r="1.5" fill={fillColor} />
          <circle cx="7" cy="8" r="1.5" fill={fillColor} />
          <circle cx="17" cy="8" r="1.5" fill={fillColor} />
          <circle cx="5" cy="12" r="1.5" fill={fillColor} />
          <circle cx="19" cy="12" r="1.5" fill={fillColor} />
        </svg>
      );
    case 'chain':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={strokeColor} strokeWidth="1.5">
          <path d="M5 4 C5 14, 19 14, 19 4" strokeWidth="2" strokeDasharray="2 2" />
          <polygon points="12,14 10,18 14,18" fill={fillColor} />
          <circle cx="12" cy="20" r="1.5" fill={fillColor} />
        </svg>
      );
    case 'mangalsutra':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={strokeColor} strokeWidth="1.5">
          <path d="M5 3 C6 13, 18 13, 19 3" stroke="#222" strokeWidth="1.5" strokeDasharray="2 1.5" />
          <circle cx="10" cy="14" r="2" fill={fillColor} stroke={strokeColor} />
          <circle cx="14" cy="14" r="2" fill={fillColor} stroke={strokeColor} />
          <polygon points="12,17 9,21 15,21" fill={fillColor} />
        </svg>
      );
    case 'baby-bangles':
    case 'bangles':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={strokeColor} strokeWidth="1.5">
          <ellipse cx="10" cy="10" rx="7" ry="7" strokeWidth="2" />
          <ellipse cx="14" cy="14" rx="7" ry="7" strokeWidth="2" stroke={fillColor} />
        </svg>
      );
    case 'bali':
    case 'earrings':
    case 'tops':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={strokeColor} strokeWidth="1.5">
          <circle cx="7" cy="13" r="5" strokeWidth="1.8" />
          <circle cx="17" cy="13" r="5" strokeWidth="1.8" />
          <path d="M7 8 V5 M17 8 V5" strokeWidth="1.5" />
          <circle cx="7" cy="5" r="1" fill={fillColor} />
          <circle cx="17" cy="5" r="1" fill={fillColor} />
        </svg>
      );
    case 'ring':
    case 'gents-ring':
    case 'ladies-ring':
    case 'baby-ring':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={strokeColor} strokeWidth="1.5">
          <circle cx="12" cy="14" r="7" strokeWidth="1.8" />
          <polygon points="12,3 15,7 9,7" fill={fillColor} stroke={strokeColor} />
          <line x1="9" y1="7" x2="15" y2="7" strokeWidth="1.5" />
        </svg>
      );
    case 'studs':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={strokeColor} strokeWidth="1.5">
          <circle cx="8" cy="12" r="3.5" fill={fillColor} stroke={strokeColor} />
          <circle cx="16" cy="12" r="3.5" fill={fillColor} stroke={strokeColor} />
          <circle cx="8" cy="12" r="1" fill="#fff" />
          <circle cx="16" cy="12" r="1" fill="#fff" />
        </svg>
      );
    case 'nath':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={strokeColor} strokeWidth="1.5">
          <circle cx="12" cy="12" r="6" strokeWidth="1.8" />
          <circle cx="16" cy="12" r="2" fill={fillColor} />
          <path d="M12 6 C12 2, 21 4, 21 9" strokeDasharray="2 1.5" />
        </svg>
      );
    case 'tika':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={strokeColor} strokeWidth="1.5">
          <line x1="12" y1="2" x2="12" y2="12" strokeWidth="1.5" strokeDasharray="2 1" />
          <polygon points="12,12 16,17 12,21 8,17" fill={fillColor} stroke={strokeColor} />
          <circle cx="12" cy="16.5" r="1.5" fill="#fff" />
        </svg>
      );
    case 'pendant':
    case 'pendant-set':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={strokeColor} strokeWidth="1.5">
          <path d="M12 3 L12 8" strokeWidth="1.5" />
          <circle cx="12" cy="14" r="6" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" />
          <circle cx="12" cy="14" r="2.5" fill="#fff" />
        </svg>
      );
    case 'sikhi-kada':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={strokeColor} strokeWidth="2">
          <circle cx="12" cy="12" r="8" strokeWidth="3" />
          <circle cx="12" cy="12" r="6" stroke={fillColor} strokeWidth="1" />
        </svg>
      );
    case 'earchain':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={strokeColor} strokeWidth="1.5">
          <circle cx="6" cy="8" r="3" fill={fillColor} />
          <path d="M6 11 Q12 20 18 10" strokeDasharray="2 1.5" />
          <circle cx="18" cy="8" r="2" fill={fillColor} />
        </svg>
      );
    case 'set':
    default:
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={strokeColor} strokeWidth="1.5">
          <path d="M4 6 C6 16, 18 16, 20 6" strokeWidth="2" />
          <polygon points="12,14 8,20 16,20" fill={fillColor} stroke={strokeColor} />
          <circle cx="4" cy="18" r="2" fill={fillColor} />
          <circle cx="20" cy="18" r="2" fill={fillColor} />
        </svg>
      );
  }
};

export default function AllJewelleryMegaMenu({
  isOpen,
  onClose,
  onSelectCategory,
  onViewAllCatalogue
}) {
  const [activeTab, setActiveTab] = useState('Gold');

  if (!isOpen) return null;

  // Material Tabs matching the exact reference on left
  const materialTabs = [
    'Gold',
    'Diamond',
    'Lab-Grown Diamond',
    'Platinum',
    '9KT Gold',
    '9KT Diamond',
    '9KT Lab Grown',
    'Silver'
  ];

  // Category Matrix matching Right Gold reference
  const catalogData = {
    'Gold': [
      // Column 1
      { name: 'Gents Bracelet', type: 'bracelet', category: 'bangles' },
      { name: 'Bali', type: 'bali', category: 'earrings' },
      { name: 'Men Studs', type: 'studs', category: 'earrings' },
      { name: 'Baby Ring', type: 'baby-ring', category: 'rings' },
      { name: 'Sikhi Kada', type: 'sikhi-kada', category: 'bangles' },
      
      // Column 2
      { name: 'Chain', type: 'chain', category: 'necklaces' },
      { name: 'Bangles', type: 'bangles', category: 'bangles' },
      { name: 'Nath', type: 'nath', category: 'necklaces' },
      { name: 'Gents Ring', type: 'gents-ring', category: 'rings' },
      { name: 'Tika', type: 'tika', category: 'necklaces' },

      // Column 3
      { name: 'Mangalsutra', type: 'mangalsutra', category: 'mangalsutras' },
      { name: 'Ladies Bracelet', type: 'bracelet', category: 'bangles' },
      { name: 'Pendant', type: 'pendant', category: 'necklaces' },
      { name: 'Ladies Ring', type: 'ladies-ring', category: 'rings' },
      { name: 'Tops', type: 'tops', category: 'earrings' },

      // Column 4
      { name: 'Baby Bangles', type: 'baby-bangles', category: 'bangles' },
      { name: 'Earchain', type: 'earchain', category: 'earrings' },
      { name: 'Pendant Set', type: 'pendant-set', category: 'necklaces' },
      { name: 'Set', type: 'set', category: 'necklaces' },
    ],

    'Diamond': [
      { name: 'Solitaire Rings', type: 'ring', category: 'rings' },
      { name: 'Diamond Studs', type: 'studs', category: 'earrings' },
      { name: 'Tennis Bracelets', type: 'bracelet', category: 'bangles' },
      { name: 'Diamond Chokers', type: 'set', category: 'necklaces' },
      { name: 'Eternity Bands', type: 'ladies-ring', category: 'rings' },
      { name: 'Cocktail Rings', type: 'ring', category: 'rings' },
      { name: 'Drop Earrings', type: 'earrings', category: 'earrings' },
      { name: 'Diamond Pendants', type: 'pendant', category: 'necklaces' },
      { name: 'Nose Pins', type: 'nath', category: 'earrings' },
      { name: 'Diamond Bangles', type: 'bangles', category: 'bangles' },
      { name: 'Diamond Mangalsutra', type: 'mangalsutra', category: 'mangalsutras' },
      { name: 'Bridal Diamond Suite', type: 'set', category: 'necklaces' }
    ],

    'Lab-Grown Diamond': [
      { name: 'Solitaire Rings', type: 'ring', category: 'rings' },
      { name: 'Tennis Bracelets', type: 'bracelet', category: 'bangles' },
      { name: 'Solitaire Pendants', type: 'pendant', category: 'necklaces' },
      { name: 'Daily Diamond Studs', type: 'studs', category: 'earrings' },
      { name: 'Oval Diamond Bands', type: 'ring', category: 'rings' },
      { name: 'Emerald Cut Rings', type: 'ring', category: 'rings' },
      { name: 'Huggie Earrings', type: 'bali', category: 'earrings' },
      { name: 'Workwear Necklaces', type: 'chain', category: 'necklaces' }
    ],

    'Platinum': [
      { name: 'Platinum Love Bands', type: 'ring', category: 'rings' },
      { name: 'Men Platinum Chains', type: 'chain', category: 'necklaces' },
      { name: 'Platinum Kada', type: 'sikhi-kada', category: 'bangles' },
      { name: 'Platinum Solitaires', type: 'ring', category: 'rings' },
      { name: 'Platinum Bracelets', type: 'bracelet', category: 'bangles' },
      { name: 'Minimalist Platinum Studs', type: 'studs', category: 'earrings' }
    ],

    '9KT Gold': [
      { name: 'Italian Lightweight Chains', type: 'chain', category: 'necklaces' },
      { name: 'Featherlight Studs', type: 'studs', category: 'earrings' },
      { name: 'Stackable Bands', type: 'ring', category: 'rings' },
      { name: 'Daily Office Bracelets', type: 'bracelet', category: 'bangles' },
      { name: 'Geometric Pendants', type: 'pendant', category: 'necklaces' },
      { name: 'Mini Huggies', type: 'bali', category: 'earrings' }
    ],

    '9KT Diamond': [
      { name: 'Petite Diamond Pendants', type: 'pendant', category: 'necklaces' },
      { name: 'Micro-Pave Rings', type: 'ring', category: 'rings' },
      { name: 'Diamond Station Chains', type: 'chain', category: 'necklaces' },
      { name: 'Office Studs', type: 'studs', category: 'earrings' }
    ],

    '9KT Lab Grown': [
      { name: 'Minimalist Rings', type: 'ring', category: 'rings' },
      { name: 'Everyday Studs', type: 'studs', category: 'earrings' },
      { name: 'Charms & Pendants', type: 'pendant', category: 'necklaces' },
      { name: 'Layering Chains', type: 'chain', category: 'necklaces' }
    ],

    'Silver': [
      { name: '24K 999 Bullion Bars', type: 'pendant', category: 'coins' },
      { name: 'Silver Pooja Articles', type: 'set', category: 'all' },
      { name: 'Sterling Silver Payal', type: 'bracelet', category: 'bangles' },
      { name: 'Silver Coins (10g - 100g)', type: 'pendant', category: 'coins' },
      { name: 'Silver Kada', type: 'sikhi-kada', category: 'bangles' }
    ]
  };

  const currentItems = catalogData[activeTab] || catalogData['Gold'];

  return (
    <>
      {/* Dimmed backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 top-[108px] bg-black/30 backdrop-blur-2xs z-40 animate-in fade-in duration-200"
      />

      {/* Flyout Box Pinned Directly Under Subnav */}
      <div className="absolute top-full left-0 right-0 bg-white border-b border-stone-200 shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 duration-200">
        <div className="max-w-7xl mx-auto flex min-h-[420px] max-h-[82vh] overflow-hidden">
          
          {/* Left Vertical Material Tabs */}
          <div className="w-52 sm:w-60 bg-[#FAFAFA] border-r border-stone-200 py-3 shrink-0 select-none overflow-y-auto">
            {materialTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-6 py-3.5 text-xs transition-all cursor-pointer flex items-center justify-between ${
                    isActive 
                      ? 'bg-white font-bold text-stone-900 border-l-4 border-[#4A102E] shadow-2xs' 
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100 font-medium'
                  }`}
                >
                  <span>{tab}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#4A102E]"></div>}
                </button>
              );
            })}
          </div>

          {/* Right 4-Column Jewellery Grid */}
          <div className="flex-1 p-6 sm:p-8 bg-white flex flex-col justify-between overflow-y-auto">
            
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-stone-900 text-base sm:text-lg">
                    {activeTab} Jewellery Collections
                  </span>
                  <span className="text-xs text-stone-400">
                    ({currentItems.length} categories)
                  </span>
                </div>
                
                <button
                  onClick={onClose}
                  className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
                  title="Close Menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Items Grid (4 Columns on Desktop, exactly matching Right Gold) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
                {currentItems.map((item, idx) => (
                  <button
                    key={`${item.name}-${idx}`}
                    onClick={() => {
                      onSelectCategory(item.category);
                      onClose();
                    }}
                    className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-[#FAF8F5] transition-all text-left cursor-pointer group select-none"
                  >
                    {/* Circular Golden Badge Container with Jewellery SVG */}
                    <div className="w-10 h-10 rounded-full bg-[#FAF3E5] border border-[#EADBBD] flex items-center justify-center p-2 shrink-0 group-hover:scale-110 group-hover:border-[#8E5822] transition-all shadow-2xs">
                      <JewelSvg type={item.type} />
                    </div>

                    {/* Category Label */}
                    <span className="text-xs font-medium text-stone-800 group-hover:text-[#4A102E] transition-colors leading-tight">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Bar: Explore Full Catalogue */}
            <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-500 hidden sm:inline">
                All gold jewellery is 100% BIS 916 hallmarked with laser HUID.
              </span>
              <button
                onClick={() => {
                  onViewAllCatalogue();
                  onClose();
                }}
                className="flex items-center gap-2 text-xs font-bold text-[#4A102E] hover:text-[#7A1E4B] transition-colors cursor-pointer ml-auto"
              >
                <span>View All Jewellery Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
