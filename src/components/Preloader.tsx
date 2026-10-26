import React, { useEffect, useState } from 'react';
import { AGENCY_INFO } from '../data/mockData';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-neutral-950 flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-4 text-center px-4">
        {/* Animated Brand Emblem */}
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white font-black text-2xl shadow-2xl shadow-orange-500/50 animate-pulse">
            J
          </div>
          <div className="absolute -inset-2 rounded-3xl border border-orange-500/30 animate-spin duration-1000" />
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-black text-white font-display tracking-tight">
            JEFF <span className="text-orange-500">DESIGNS</span> HUB
          </h2>
          <p className="text-xs text-neutral-400 mt-1 font-mono tracking-wide">
            {AGENCY_INFO.tagline}
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-44 h-1 bg-neutral-800 rounded-full overflow-hidden mt-3">
          <div className="w-full h-full bg-orange-500 rounded-full animate-[marquee-left_1s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};
