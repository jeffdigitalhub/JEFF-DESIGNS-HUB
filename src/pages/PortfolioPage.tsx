import React, { useState } from 'react';
import { Sparkles, Info, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_GALLERY } from '../data/mockData';
import { PosterArtwork } from '../components/PosterArtwork';
import { PortfolioItem } from '../types';

interface PortfolioPageProps {
  onOpenLightbox: (item: PortfolioItem) => void;
  onOpenQuote: (service?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenLightbox, onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Logos' | 'Posters' | 'Websites' | 'Mobile Apps' | 'Branding'>('All');

  const categories = ['All', 'Posters', 'Logos', 'Websites', 'Mobile Apps', 'Branding'] as const;

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_GALLERY
    : PORTFOLIO_GALLERY.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-24 pb-20">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-orange-400 text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5 text-orange-500" />
          <span>PORTFOLIO & POSTER GALLERY</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mb-4">
          Masters of <span className="text-orange-500">Graphic Design</span> & Code
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Explore over 20+ bespoke design compositions, from sold-out church and festival posters to high-converting websites and native mobile apps.
        </p>

        {/* Note on Custom Work */}
        <div className="mt-6 max-w-xl mx-auto p-3.5 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center gap-2.5 text-xs text-orange-300">
          <Info className="w-4 h-4 shrink-0 text-orange-400" />
          <span>
            <strong>Note:</strong> All placeholder names and concepts can be swapped and custom-tailored for your specific business.
          </span>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20 scale-105'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat} ({cat === 'All' ? PORTFOLIO_GALLERY.length : PORTFOLIO_GALLERY.filter((i) => i.category === cat).length})
            </button>
          ))}
        </div>
      </section>

      {/* 2. GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group cursor-pointer flex flex-col rounded-2xl overflow-hidden border border-neutral-800 hover:border-orange-500/60 bg-neutral-900/40 transition-all duration-300 hover:-translate-y-1 shadow-xl aspect-[3/4] relative"
            >
              {/* Artwork Container */}
              <PosterArtwork item={item} className="h-full group-hover:scale-[1.02] transition-transform duration-500" />

              {/* Hover inspect overlay badge */}
              <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none p-4">
                <div className="px-4 py-2 rounded-lg bg-orange-500 text-white font-bold text-xs flex items-center gap-2 shadow-xl shadow-orange-500/40">
                  <span>Inspect Design</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. COMMISSION CTA BANNER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-neutral-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3">
            Have a Specific Design or Event in Mind?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto mb-6">
            We provide fast turnaround on all custom requests. Receive your initial concepts within 48-72 hours.
          </p>

          <button
            onClick={() => onOpenQuote('Graphic Design')}
            className="px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-xl shadow-orange-500/20 transition-all"
          >
            Commission a Custom Design
          </button>
        </div>
      </section>
    </div>
  );
};
