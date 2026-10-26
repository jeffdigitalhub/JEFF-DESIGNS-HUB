import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { AGENCY_INFO } from '../data/mockData';

export const WhatsAppFloating: React.FC = () => {
  const [tooltipOpen, setTooltipOpen] = useState(true);

  return (
    <div className="fixed bottom-6 left-6 z-30 flex items-end gap-3 pointer-events-auto">
      {/* Friendly Tooltip Bubble */}
      {tooltipOpen && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-200 shadow-2xl backdrop-blur-md mb-1 animate-in fade-in slide-in-from-bottom-2">
          <span>Chat directly with Geoffrey Robi (Jeff)</span>
          <button
            onClick={() => setTooltipOpen(false)}
            aria-label="Close tooltip"
            className="text-neutral-500 hover:text-white ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={AGENCY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Jeff Designs Hub on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 group-hover:animate-ping" />
        <MessageCircle className="w-6 h-6 fill-current relative z-10" />
      </a>
    </div>
  );
};
