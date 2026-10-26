import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PortfolioItem } from '../types';
import { PosterArtwork } from './PosterArtwork';
import { AGENCY_INFO } from '../data/mockData';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onOpenQuote: (defaultService?: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onOpenQuote }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl my-auto grid grid-cols-1 lg:grid-cols-12 max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-neutral-400 hover:text-white border border-white/10 backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Artwork Showcase */}
        <div className="lg:col-span-7 bg-neutral-950 p-4 sm:p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-neutral-800 min-h-[380px]">
          <div className="w-full max-w-sm aspect-[3/4] max-h-[480px]">
            <PosterArtwork item={item} isDetailed={true} className="w-full h-full shadow-2xl" />
          </div>
        </div>

        {/* Right Side: Artwork Brief & Order Action */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-orange-400">
                {item.category} · {item.styleTag}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white font-display tracking-tight leading-snug mb-3">
              {item.title}
            </h3>

            <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800/80 mb-4 text-xs">
              <span className="text-neutral-500 block mb-0.5">Client / Showcase Project:</span>
              <span className="text-white font-medium">{item.clientPlaceholder}</span>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              {item.description}
            </p>

            <div className="border-t border-neutral-800 pt-3 space-y-2 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Full vector exports & print-ready CMYK files</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                <span>100% Custom tailored to your brand identity</span>
              </div>
            </div>

            <div className="mt-4 p-2.5 rounded bg-orange-500/10 border border-orange-500/20 text-[11px] text-orange-300">
              Note: This composition is part of our design gallery. You can commission an identical or custom tailored design for your business.
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-neutral-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                onClose();
                onOpenQuote(item.category);
              }}
              className="w-full py-3 px-4 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transition-all active:scale-95"
            >
              <span>Order Design Like This</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/254702782850?text=${encodeURIComponent(
                `Hello Jeff! I saw the "${item.title}" design on your website and would love to get a quote for my project.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <span>Discuss on WhatsApp ({AGENCY_INFO.phone1})</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
