import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, Building, ShieldCheck, Heart } from 'lucide-react';
import { TESTIMONIALS_DATA, CLIENT_LOGOS, AGENCY_INFO } from '../data/mockData';
import { MarqueeRoller } from '../components/MarqueeRoller';

interface TestimonialsPageProps {
  onOpenQuote: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ngo' | 'realestate' | 'branding'>('all');

  return (
    <div className="pt-24 pb-20">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
          PROVEN TRACK RECORD
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mt-2 mb-4">
          Trusted by Leaders & <span className="text-orange-500">Founders in Kenya</span>
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Read firsthand testimonials from Kenyan organizations, property managers, and non-profits who rely on JEFF DESIGNS HUB.
        </p>
      </section>

      {/* 2. THREE KEY CLIENT TESTIMONIAL FEATURE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Ambassador Lucas, CEO, TOUCH ONE LIFE */}
          <div className="p-8 rounded-3xl bg-neutral-900 border-2 border-orange-500/30 hover:border-orange-500 transition-all duration-300 flex flex-col justify-between shadow-2xl relative">
            <Quote className="absolute top-6 right-6 w-10 h-10 text-orange-500/10 pointer-events-none" />

            <div>
              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <blockquote className="text-neutral-200 text-sm leading-relaxed mb-6 italic">
                "{TESTIMONIALS_DATA[0].quote}"
              </blockquote>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                AL
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-display">
                  {TESTIMONIALS_DATA[0].author}
                </h4>
                <p className="text-xs text-orange-400 font-medium">
                  {TESTIMONIALS_DATA[0].role}, <span className="text-white">{TESTIMONIALS_DATA[0].company}</span>
                </p>
                <span className="text-[10px] text-neutral-400 font-mono mt-0.5 block">
                  {TESTIMONIALS_DATA[0].projectType}
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Michael Ochieng, Owner, Eagles Home Apartment */}
          <div className="p-8 rounded-3xl bg-neutral-900 border-2 border-orange-500/30 hover:border-orange-500 transition-all duration-300 flex flex-col justify-between shadow-2xl relative">
            <Quote className="absolute top-6 right-6 w-10 h-10 text-orange-500/10 pointer-events-none" />

            <div>
              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <blockquote className="text-neutral-200 text-sm leading-relaxed mb-6 italic">
                "{TESTIMONIALS_DATA[1].quote}"
              </blockquote>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                MO
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-display">
                  {TESTIMONIALS_DATA[1].author}
                </h4>
                <p className="text-xs text-emerald-400 font-medium">
                  {TESTIMONIALS_DATA[1].role}, <span className="text-white">{TESTIMONIALS_DATA[1].company}</span>
                </p>
                <span className="text-[10px] text-neutral-400 font-mono mt-0.5 block">
                  {TESTIMONIALS_DATA[1].projectType}
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Grace Wambui, Director, Hope Foundation */}
          <div className="p-8 rounded-3xl bg-neutral-900 border-2 border-orange-500/30 hover:border-orange-500 transition-all duration-300 flex flex-col justify-between shadow-2xl relative">
            <Quote className="absolute top-6 right-6 w-10 h-10 text-orange-500/10 pointer-events-none" />

            <div>
              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <blockquote className="text-neutral-200 text-sm leading-relaxed mb-6 italic">
                "{TESTIMONIALS_DATA[2].quote}"
              </blockquote>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                GW
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-display">
                  {TESTIMONIALS_DATA[2].author}
                </h4>
                <p className="text-xs text-blue-400 font-medium">
                  {TESTIMONIALS_DATA[2].role}, <span className="text-white">{TESTIMONIALS_DATA[2].company}</span>
                </p>
                <span className="text-[10px] text-neutral-400 font-mono mt-0.5 block">
                  {TESTIMONIALS_DATA[2].projectType}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER ACCREDITATION WITH FORMAL PORTRAIT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
          <img
            src={AGENCY_INFO.portraitPhoto}
            alt="Geoffrey Robi, Founder of Jeff Designs Hub"
            className="w-20 h-20 rounded-2xl object-cover border-2 border-orange-500 shrink-0"
          />
          <div className="text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
              LEADERSHIP COMMITMENT
            </span>
            <p className="text-sm text-neutral-300 italic mt-1 mb-2">
              "We treat every client project—whether a single flyer or a nationwide web portal—with the same standard of craftsmanship we would demand for our own business."
            </p>
            <div className="text-xs font-bold text-white">
              Geoffrey Robi ("Jeff") · <span className="text-neutral-400 font-normal">Founder, JEFF DESIGNS HUB</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLIENT LOGO ROLLER */}
      <section className="py-12 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            COMPANIES & INSTITUTIONS WHO TRUST US
          </span>
        </div>
        <MarqueeRoller
          direction="left"
          items={CLIENT_LOGOS.map((c) => ({ title: c.name, subtitle: c.sector }))}
        />
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <h2 className="text-3xl font-extrabold text-white font-display mb-3">
          Join Over 150+ Satisfied Kenyan Businesses
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto mb-6">
          Let’s discuss your vision today. Quick consultations via WhatsApp or phone.
        </p>
        <button
          onClick={onOpenQuote}
          className="px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-xl shadow-orange-500/25 transition-all"
        >
          Start Your Project With Jeff
        </button>
      </section>
    </div>
  );
};
