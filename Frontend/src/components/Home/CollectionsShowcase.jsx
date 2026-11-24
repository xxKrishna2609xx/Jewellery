import React from 'react';
import { COLLECTIONS } from '../../data/products';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CollectionsShowcase({ onExploreCategory }) {
  return (
    <section className="py-20 bg-[#FAF8F5] border-y border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8E5822] block mb-1">
              Curated Editions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Signature Collections
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md">
            From imperial royal bridal suites to feather-light everyday diamond elegance, handcrafted for memories that outlive generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {COLLECTIONS.map((col) => (
            <div
              key={col.id}
              onClick={() => onExploreCategory('all')}
              className="group relative rounded-2xl overflow-hidden bg-stone-900 aspect-[4/5] shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>

              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/20 backdrop-blur-md text-amber-200 rounded-full border border-white/20">
                  {col.tag}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {col.title}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-2 font-light leading-relaxed">
                  {col.subtitle}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
