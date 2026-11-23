import React from 'react';
import { CATEGORIES } from '../../data/products';
import { ArrowRight } from 'lucide-react';

export default function CategoryGrid({ onSelectCategory }) {
  const visibleCategories = CATEGORIES.filter(c => c.id !== 'all');

  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8E5822] block mb-2">
            Curated Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Explore By Jewellery Type
          </h2>
          <div className="w-16 h-0.5 bg-amber-600 mx-auto mt-3"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {visibleCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group cursor-pointer flex flex-col items-center"
            >
              <div className="w-full aspect-square rounded-2xl overflow-hidden border border-[#DECDB3] bg-white relative shadow-xs group-hover:shadow-xl transition-all duration-300">
                <img
                  src={cat.banner}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[11px] font-semibold text-amber-200 tracking-wider uppercase block">
                    {cat.count} Designs
                  </span>
                </div>
              </div>
              <h3 className="font-serif font-bold text-stone-900 text-sm mt-3 group-hover:text-amber-800 transition-colors text-center">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
