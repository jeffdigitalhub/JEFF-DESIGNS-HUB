import React, { useState, useEffect } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp, Sparkles, Clock, ArrowUpRight } from 'lucide-react';
import { PRICING_PLANS, FAQ_DATA } from '../data/mockData';

interface PricingPageProps {
  onOpenQuote: (service?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenQuote }) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // Countdown timer for 20% OFF Banner (ends Sunday midnight)
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 36,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-24 pb-20">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
          TRANSPARENT VALUE
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mt-2 mb-4">
          Simple, Fair & Honest <span className="text-orange-500">Pricing</span>
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          No hidden fees or unexpected agency markups. High-calibre design and engineering accessible for Kenyan startups and established businesses.
        </p>
      </section>

      {/* 2. LIMITED-TIME DISCOUNT BANNER WITH COUNTDOWN TIMER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 border border-white/20 text-xs font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIMITED TIME PROMOTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight">
              20% OFF Logo Design This Week!
            </h2>
            <p className="text-xs text-orange-100 mt-1 max-w-md">
              Secure a bespoke vector identity for your new brand before the countdown expires.
            </p>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-3">
            {[
              { val: timeLeft.days, label: 'Days' },
              { val: timeLeft.hours, label: 'Hours' },
              { val: timeLeft.minutes, label: 'Mins' },
              { val: timeLeft.seconds, label: 'Secs' },
            ].map((unit, idx) => (
              <div
                key={idx}
                className="w-14 h-16 rounded-xl bg-black/40 border border-white/20 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-lg"
              >
                <span className="text-xl font-black font-mono tabular-nums leading-none">
                  {String(unit.val).padStart(2, '0')}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-orange-200 mt-1">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE PRICING CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 relative shadow-2xl ${
                plan.popular
                  ? 'bg-neutral-900 border-2 border-orange-500 shadow-orange-500/10 md:-translate-y-2'
                  : 'bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white font-display mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-neutral-400 min-h-[36px]">
                    {plan.description}
                  </p>
                </div>

                <div className="py-6 border-y border-neutral-800 mb-6">
                  <div className="text-xs text-neutral-400 font-mono mb-1">Starting from</div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight text-orange-500">
                    {plan.priceKes}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mt-2 font-mono">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Turnaround: {plan.deliveryTime}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-mono">
                    Package Inclusions
                  </div>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenQuote(plan.name)}
                className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${
                  plan.popular
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                }`}
              >
                <span>Choose {plan.name}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
            COMMON QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight mt-1">
            Pricing, Delivery & Revision FAQs
          </h2>
          <p className="text-xs text-neutral-400 mt-2">
            Everything you need to know about working with JEFF DESIGNS HUB.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-semibold text-white hover:text-orange-400 transition-colors"
              >
                <span>{faq.q}</span>
                {openFaqIdx === idx ? (
                  <ChevronUp className="w-4 h-4 text-orange-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-500 shrink-0" />
                )}
              </button>

              {openFaqIdx === idx && (
                <div className="px-5 pb-5 text-xs text-neutral-300 leading-relaxed border-t border-neutral-800/80 pt-3 animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
