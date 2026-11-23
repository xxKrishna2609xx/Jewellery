import React, { useState } from 'react';

const TABS = [
  { id: 'gold', label: 'Gold Jewellery' },
  { id: 'diamond', label: 'Diamond Jewellery' },
  { id: 'lg_diamond', label: 'LG Diamond Jewellery' }
];

const CATEGORY_ITEMS = {
  gold: [
    {
      id: 'pendant',
      name: 'Pendant',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'necklace',
      name: 'Necklace',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'choker',
      name: 'Choker Set',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'ring',
      name: 'Ring',
      category: 'rings',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'earring',
      name: 'Earring',
      category: 'earrings',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'mangalsutra',
      name: 'Mangalsutra',
      category: 'mangalsutras',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'bangle',
      name: 'Bangle',
      category: 'bangles',
      image: 'https://images.unsplash.com/photo-1611591475883-9b81a7042a5a?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'long_set',
      name: 'Long set',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'chain',
      name: 'Chain',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1611591475883-9b81a7042a5a?q=80&w=400&auto=format&fit=crop'
    }
  ],
  diamond: [
    {
      id: 'd_pendant',
      name: 'Pendant',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'd_necklace',
      name: 'Necklace',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'd_choker',
      name: 'Choker Set',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'd_ring',
      name: 'Ring',
      category: 'rings',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'd_earring',
      name: 'Earring',
      category: 'earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'd_mangalsutra',
      name: 'Mangalsutra',
      category: 'mangalsutras',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'd_bangle',
      name: 'Bangle',
      category: 'bangles',
      image: 'https://images.unsplash.com/photo-1611591475883-9b81a7042a5a?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'd_long_set',
      name: 'Long set',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'd_chain',
      name: 'Chain',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1611591475883-9b81a7042a5a?q=80&w=400&auto=format&fit=crop'
    }
  ],
  lg_diamond: [
    {
      id: 'lg_pendant',
      name: 'Pendant',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'lg_necklace',
      name: 'Necklace',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'lg_choker',
      name: 'Choker Set',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'lg_ring',
      name: 'Ring',
      category: 'rings',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'lg_earring',
      name: 'Earring',
      category: 'earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'lg_mangalsutra',
      name: 'Mangalsutra',
      category: 'mangalsutras',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'lg_bangle',
      name: 'Bangle',
      category: 'bangles',
      image: 'https://images.unsplash.com/photo-1611591475883-9b81a7042a5a?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'lg_long_set',
      name: 'Long set',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 'lg_chain',
      name: 'Chain',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1611591475883-9b81a7042a5a?q=80&w=400&auto=format&fit=crop'
    }
  ]
};

export default function QuickCategoryStrip({ onSelectCategory }) {
  const [activeTab, setActiveTab] = useState('gold');

  const items = CATEGORY_ITEMS[activeTab] || CATEGORY_ITEMS.gold;

  return (
    <section className="py-8 sm:py-10 bg-[#FAF8F5] border-b border-[#DECDB3]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Tabs with Vertical Dividers */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8 text-sm sm:text-base font-serif">
          {TABS.map((tab, idx) => {
            const isActive = activeTab === tab.id;
            return (
              <React.Fragment key={tab.id}>
                {idx > 0 && <span className="text-stone-300 font-light select-none">|</span>}
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-1 transition-all cursor-pointer relative font-bold whitespace-nowrap ${
                    isActive 
                      ? 'text-[#581838]' 
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#581838] rounded-full"></span>
                  )}
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/* Circular Category Badges Horizontal Strip */}
        <div className="flex items-center justify-start lg:justify-between gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 px-2 scrollbar-none">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCategory(item.category)}
              className="flex flex-col items-center gap-2.5 cursor-pointer group shrink-0 select-none"
            >
              {/* Circular Border Ring with Image */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2.5px] border-2 border-[#581838] group-hover:border-amber-600 group-hover:scale-105 transition-all duration-300 shadow-xs bg-white">
                <div className="w-full h-full rounded-full overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Label */}
              <span className="text-xs sm:text-[13px] font-sans font-medium text-stone-800 group-hover:text-[#581838] transition-colors whitespace-nowrap text-center">
                {item.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
