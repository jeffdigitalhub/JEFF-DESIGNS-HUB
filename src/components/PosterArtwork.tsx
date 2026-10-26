import React from 'react';
import { PortfolioItem } from '../types';
import { Layers, Globe, Smartphone, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface PosterArtworkProps {
  item: PortfolioItem;
  className?: string;
  isDetailed?: boolean;
}

export const PosterArtwork: React.FC<PosterArtworkProps> = ({ item, className = '', isDetailed = false }) => {
  const { category, posterConfig, mockupConfig } = item;

  // Render Website Mockup inside a realistic Laptop / Browser Frame
  if (category === 'Websites' && mockupConfig) {
    return (
      <div className={`w-full h-full bg-neutral-900 flex flex-col rounded-xl overflow-hidden border border-neutral-800 shadow-2xl ${className}`}>
        {/* Browser Top Chrome */}
        <div className="bg-neutral-950 px-4 py-2.5 flex items-center gap-2 border-b border-neutral-800 shrink-0">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex-1 mx-3 bg-neutral-900 border border-neutral-800 rounded px-2.5 py-0.5 text-[11px] text-neutral-400 font-mono truncate flex items-center justify-between">
            <span>https://{item.id === 'web-1' ? 'eagleshome.co.ke' : 'safariexpeditions.ke'}</span>
            <span className="text-[10px] text-emerald-400">SSL SECURE</span>
          </div>
        </div>

        {/* Website Content Preview */}
        <div className="flex-1 p-5 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Site Header */}
          <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-orange-500 flex items-center justify-center text-white font-black text-xs">
                {item.id === 'web-1' ? 'EH' : 'MS'}
              </div>
              <span className="text-xs font-bold tracking-tight text-white uppercase">
                {item.id === 'web-1' ? 'Eagles Home' : 'Mara Safari'}
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-neutral-400">
              <span className="hover:text-white cursor-pointer">Features</span>
              <span className="hover:text-white cursor-pointer">Portal</span>
              <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 font-medium">Live Portal</span>
            </div>
          </div>

          {/* Site Hero Display */}
          <div className="my-auto py-4">
            <span className="text-[10px] tracking-wider uppercase text-orange-400 font-mono block mb-1">
              {item.clientPlaceholder}
            </span>
            <h4 className="text-lg md:text-xl font-extrabold text-white leading-tight font-display max-w-sm mb-2">
              {mockupConfig.headline}
            </h4>
            <div className="flex items-center gap-3 mt-3">
              <div className="px-3 py-1 rounded bg-orange-500 text-white text-xs font-medium flex items-center gap-1.5 shadow-md shadow-orange-500/20">
                <span>View Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
              <span className="text-[11px] text-emerald-400 font-mono">
                ✓ {mockupConfig.metric}
              </span>
            </div>
          </div>

          {/* Quick UI widgets */}
          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-neutral-800/80 text-[10px]">
            <div className="bg-neutral-900/90 p-2 rounded border border-neutral-800">
              <span className="text-neutral-500 block">Status</span>
              <span className="text-white font-medium">99.98% Uptime</span>
            </div>
            <div className="bg-neutral-900/90 p-2 rounded border border-neutral-800">
              <span className="text-neutral-500 block">Integration</span>
              <span className="text-orange-400 font-medium">M-Pesa STK Push</span>
            </div>
            <div className="bg-neutral-900/90 p-2 rounded border border-neutral-800">
              <span className="text-neutral-500 block">Delivery</span>
              <span className="text-white font-medium">7-Day Sprint</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Mobile App Mockup inside a phone frame
  if (category === 'Mobile Apps' && mockupConfig) {
    return (
      <div className={`w-full h-full bg-neutral-950 flex flex-col items-center justify-center p-3 ${className}`}>
        {/* Phone outer bezel */}
        <div className="w-full max-w-[260px] h-[340px] bg-neutral-900 rounded-[2.5rem] p-2.5 shadow-2xl border-2 border-neutral-700/80 relative flex flex-col overflow-hidden">
          {/* Speaker & camera notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-neutral-950 rounded-full z-20 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-800 ml-auto mr-3" />
          </div>

          {/* Phone Screen */}
          <div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800 p-4 pt-7 flex flex-col justify-between overflow-hidden relative">
            <div className="flex items-center justify-between text-[10px] text-neutral-400 border-b border-neutral-800 pb-2">
              <span className="font-semibold text-white">9:41 AM</span>
              <div className="flex items-center gap-1">
                <span>5G</span>
                <span className="text-emerald-400">● 100%</span>
              </div>
            </div>

            <div className="my-auto py-2">
              <span className="text-[9px] uppercase tracking-wider text-orange-400 font-mono block">
                {item.clientPlaceholder}
              </span>
              <h5 className="text-sm font-bold text-white leading-tight font-display my-1.5">
                {mockupConfig.headline}
              </h5>
              <p className="text-[10px] text-neutral-400 line-clamp-2">
                {item.description}
              </p>

              {/* In-app action card */}
              <div className="mt-3 p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/30">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-white font-medium">Quick Action</span>
                  <span className="text-orange-400 font-mono font-bold">M-PESA READY</span>
                </div>
                <div className="mt-1 flex items-center gap-1 text-[9px] text-neutral-400">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">{mockupConfig.metric}</span>
                </div>
              </div>
            </div>

            {/* Bottom Nav Mock */}
            <div className="flex items-center justify-around pt-2 border-t border-neutral-800 text-[9px] text-neutral-400">
              <div className="text-orange-500 font-bold">Home</div>
              <div>Activity</div>
              <div>Profile</div>
            </div>
            {/* Home indicator bar */}
            <div className="w-16 h-1 bg-neutral-600 rounded-full mx-auto mt-1" />
          </div>
        </div>
      </div>
    );
  }

  // Render Logo and Branding Showcases
  if (category === 'Logos' || category === 'Branding') {
    return (
      <div className={`w-full h-full bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden group ${className}`}>
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '20px 20px',
          }}
        />

        <div className="flex items-center justify-between z-10">
          <span className="text-[11px] font-mono tracking-widest uppercase text-orange-400">
            {item.styleTag}
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300 font-mono">
            VECTOR .SVG
          </span>
        </div>

        {/* Center Logo / Mark Composition */}
        <div className="my-auto py-8 flex flex-col items-center justify-center text-center z-10">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow-400 p-0.5 shadow-xl shadow-orange-500/20 mb-4 transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-neutral-950 rounded-[14px] flex items-center justify-center">
              <Layers className="w-9 h-9 text-orange-400" />
            </div>
          </div>
          <h4 className="text-xl font-bold text-white tracking-tight font-display">
            {item.title}
          </h4>
          <p className="text-xs text-neutral-400 mt-1 max-w-xs">
            {item.clientPlaceholder}
          </p>
        </div>

        <div className="flex items-center justify-between text-xs text-neutral-500 pt-4 border-t border-neutral-800 z-10">
          <span className="text-[11px] font-mono">{mockupConfig?.metric || 'Brand Identity Guideline'}</span>
          <span className="text-orange-400 font-medium">Explore Assets →</span>
        </div>
      </div>
    );
  }

  // Render Graphic Design Posters with rich HTML/CSS/SVG compositions
  const theme = posterConfig?.theme || 'concert';

  // Different artistic themes
  return (
    <div className={`w-full h-full rounded-xl overflow-hidden border border-neutral-800 shadow-xl flex flex-col justify-between relative transition-all duration-300 ${className}`}>
      {/* Background & Textures based on theme */}
      {theme === 'church' && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a0b12] via-[#140609] to-[#080203]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/20 via-transparent to-transparent" />
          {/* Subtle divine rays */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl" />
        </div>
      )}

      {theme === 'concert' && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#18042b] via-[#090214] to-[#040008]">
          <div className="absolute top-0 right-0 w-56 h-56 bg-fuchsia-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-600/20 rounded-full blur-3xl" />
        </div>
      )}

      {theme === 'business' && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#040d1a] to-[#02060d]">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
        </div>
      )}

      {theme === 'product' && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#241711] via-[#120b08] to-[#080402]">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-600/15 rounded-full blur-2xl" />
        </div>
      )}

      {theme === 'realestate' && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#06241b] via-[#03140e] to-[#010805]">
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-emerald-500/15 rounded-full blur-2xl" />
        </div>
      )}

      {theme === 'restaurant' && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#310b06] via-[#1a0503] to-[#0a0201]">
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-52 h-52 bg-orange-600/20 rounded-full blur-3xl" />
        </div>
      )}

      {theme === 'education' && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#14122e] via-[#080718] to-[#03030b]">
          <div className="absolute top-0 left-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-2xl" />
        </div>
      )}

      {theme === 'motivational' && (
        <div className="absolute inset-0 bg-neutral-950">
          <div className="absolute inset-0 border-[12px] border-neutral-900 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-orange-500/10 rounded-full blur-3xl" />
        </div>
      )}

      {theme === 'retro' && (
        <div className="absolute inset-0 bg-[#1f150f]">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-700/20 via-transparent to-black/60" />
        </div>
      )}

      {theme === 'neon' && (
        <div className="absolute inset-0 bg-[#050508]">
          <div className="absolute inset-0 border border-cyan-500/30 m-2 rounded-lg pointer-events-none" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
        </div>
      )}

      {theme === 'minimal' && (
        <div className="absolute inset-0 bg-neutral-900">
          <div className="absolute top-4 left-4 right-4 bottom-4 border border-neutral-800 pointer-events-none" />
        </div>
      )}

      {theme === 'luxury' && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#091811] via-[#040d09] to-[#010604]">
          <div className="absolute inset-0 border border-amber-500/20 m-2 rounded pointer-events-none" />
        </div>
      )}

      {/* Poster Content Overlay */}
      <div className="relative z-10 p-5 md:p-6 flex flex-col justify-between h-full">
        {/* Top Header Row */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-black/40 text-neutral-300 border border-white/10 backdrop-blur-md">
              {posterConfig?.badgeText || item.styleTag}
            </span>
            <div className="text-[10px] text-neutral-400 mt-1 font-mono tracking-wider">
              {posterConfig?.dateOrTag}
            </div>
          </div>
          <div className="text-right">
            <span className="text-[9px] font-mono text-orange-400 border border-orange-500/30 px-1.5 py-0.5 rounded bg-orange-500/10">
              JEFF DESIGNS HUB
            </span>
          </div>
        </div>

        {/* Center Poster Title & Visual Impact */}
        <div className="my-auto py-4">
          <span className="text-xs uppercase tracking-widest text-orange-400 font-bold block mb-1">
            {posterConfig?.subtitle || item.clientPlaceholder}
          </span>
          <h3 className="text-xl md:text-2xl font-black text-white font-display leading-[1.1] tracking-tight drop-shadow-md">
            {item.title}
          </h3>

          {/* Details list on the poster */}
          {posterConfig?.details && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {posterConfig.details.map((detail, idx) => (
                <span
                  key={idx}
                  className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300 backdrop-blur-sm"
                >
                  {detail}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Poster Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
          <div className="truncate max-w-[200px]">
            <span className="text-white font-medium">{item.clientPlaceholder}</span>
          </div>
          <div className="flex items-center gap-1.5 text-orange-400 font-medium shrink-0">
            <span>View Full Size</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
