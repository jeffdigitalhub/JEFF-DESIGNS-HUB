import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, Clock, Layers, Globe, Smartphone, Palette, TrendingUp, GraduationCap, PenTool } from 'lucide-react';
import { SERVICES_DATA, AGENCY_INFO } from '../data/mockData';

interface ServicesPageProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuote }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('all');

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'PenTool': return <PenTool className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  const filteredServices = selectedServiceId === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.id === selectedServiceId);

  return (
    <div className="pt-24 pb-20">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
          WHAT WE DO BEST
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mt-2 mb-6">
          High-Impact Creative Services &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400">
            Digital Engineering
          </span>
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          From a standout logo to a complete cross-platform mobile app, every service is delivered with obsessive craft, transparent pricing, and direct guidance from Geoffrey "Jeff" Robi.
        </p>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setSelectedServiceId('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-colors ${
              selectedServiceId === 'all'
                ? 'bg-orange-500 text-white font-bold shadow-md shadow-orange-500/20'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            All Services (7)
          </button>
          {SERVICES_DATA.map((srv) => (
            <button
              key={srv.id}
              onClick={() => setSelectedServiceId(srv.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-colors ${
                selectedServiceId === srv.id
                  ? 'bg-orange-500 text-white font-bold shadow-md shadow-orange-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {srv.title}
            </button>
          ))}
        </div>
      </section>

      {/* 2. DETAILED SERVICES BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredServices.map((service, idx) => (
          <div
            key={service.id}
            id={service.id}
            className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-neutral-900/90 border border-neutral-800 hover:border-orange-500/40 transition-colors shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
              {/* Left Column: Title, Icon, Description & Pricing */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center">
                      {getServiceIcon(service.iconName)}
                    </div>
                    {service.popular && (
                      <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/40">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight mb-3">
                    {service.title}
                  </h2>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80 mt-auto">
                  <div className="text-xs text-neutral-400 mb-1">Starting Investment</div>
                  <div className="text-2xl font-black text-white font-display tracking-tight flex items-baseline gap-2">
                    <span className="text-orange-500">{service.startingPrice || 'Custom Quote'}</span>
                    <span className="text-xs text-neutral-500 font-normal">/ project</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-[11px] text-neutral-400">
                    <Clock className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>Rapid delivery & iterative revisions included</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Features & Order Action */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full bg-neutral-950/60 p-6 sm:p-8 rounded-2xl border border-neutral-800">
                <div>
                  <h3 className="text-sm font-bold text-white font-display uppercase tracking-wider mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-orange-500" />
                    <span>What's Included & Deliverables</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-neutral-400">
                    <span>Questions? WhatsApp Jeff directly at </span>
                    <a
                      href={`https://wa.me/254702782850?text=${encodeURIComponent(
                        `Hi Jeff, I have a question about the ${service.title} service.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 font-medium hover:underline"
                    >
                      {AGENCY_INFO.phone1}
                    </a>
                  </div>

                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-all duration-200 active:scale-95"
                  >
                    <span>Order Now</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-neutral-800">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3">
            Need a Custom Agency Package?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto mb-6">
            We offer bundled solutions combining brand identity, website development, and monthly marketing graphics for comprehensive savings.
          </p>
          <button
            onClick={() => onOpenQuote('Custom Agency Package')}
            className="px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-xl shadow-orange-500/25 transition-all"
          >
            Request Custom Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
