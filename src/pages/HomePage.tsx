import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Shield,
  Sparkles,
  Layers,
  Palette,
  Globe,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from 'lucide-react';
import { AGENCY_INFO, TRUST_STATS, SERVICES_DATA, PORTFOLIO_GALLERY, TESTIMONIALS_DATA, TOOL_STACK, CLIENT_LOGOS } from '../data/mockData';
import { MarqueeRoller } from '../components/MarqueeRoller';
import { PosterArtwork } from '../components/PosterArtwork';
import { PortfolioItem } from '../types';

interface HomePageProps {
  onOpenQuote: (service?: string) => void;
  onOpenLightbox: (item: PortfolioItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuote, onOpenLightbox }) => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [portfolioFilter, setPortfolioFilter] = useState<'All' | 'Posters' | 'Websites' | 'Logos'>('All');

  // Auto-play testimonial carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const featuredPortfolio = PORTFOLIO_GALLERY.filter((item) => {
    if (portfolioFilter === 'All') return true;
    return item.category === portfolioFilter;
  }).slice(0, 6);

  return (
    <div className="pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 md:py-20">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Copy & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-orange-400 text-xs font-mono mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                <span>Premier Kenyan Creative & Digital Agency</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-[1.08] mb-6">
                We Design, Build & Grow Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400">
                  Digital Brand
                </span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 max-w-xl mb-8 leading-relaxed font-normal">
                {AGENCY_INFO.tagline} From iconic graphic posters and strategic brand identities to lightning-fast websites and mobile applications built for Kenyan businesses.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => onOpenQuote()}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/portfolio"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <span>View Our Work</span>
                  <ArrowUpRight className="w-4 h-4 text-orange-400" />
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="mt-10 pt-6 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-neutral-400 w-full">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>150+ Businesses in Kenya</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>7-Day Website Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>100% Vector & Clean Code</span>
                </div>
              </div>
            </div>

            {/* Right Desk Photo with Floating Design Elements */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Backing Frame */}
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl p-2 bg-gradient-to-tr from-neutral-800 via-orange-500/30 to-neutral-800 shadow-2xl">
                <div className="w-full h-full rounded-[22px] overflow-hidden relative group">
                  <img
                    src={AGENCY_INFO.deskPhoto}
                    alt="Geoffrey Robi, founder of Jeff Designs Hub at his work desk with laptop"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Caption on Photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-white/10 text-xs">
                    <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest block">
                      Founder & Lead Creative
                    </span>
                    <span className="text-white font-bold text-sm block">Geoffrey "Jeff" Robi</span>
                    <span className="text-neutral-400 text-[11px]">
                      At work on client identities and high-speed digital web systems
                    </span>
                  </div>
                </div>

                {/* Floating Badge 1: 7-Day Sprint */}
                <div className="absolute -top-4 -right-4 bg-neutral-900/90 border border-neutral-700/80 p-3 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2.5 animate-bounce duration-1000">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs">
                    ⚡
                  </div>
                  <div className="text-left text-xs">
                    <span className="text-white font-bold block">7-Day Turnaround</span>
                    <span className="text-neutral-400 text-[10px]">Rapid Web Deploy</span>
                  </div>
                </div>

                {/* Floating Badge 2: Vector & Brand System */}
                <div className="absolute -bottom-4 -left-4 bg-neutral-900/90 border border-neutral-700/80 p-3 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    🎨
                  </div>
                  <div className="text-left text-xs">
                    <span className="text-white font-bold block">Graphic Mastery</span>
                    <span className="text-neutral-400 text-[10px]">Print-Ready CMYK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFINITE MARQUEE ROLLERS */}
      <section className="py-6 bg-neutral-950 border-y border-neutral-900 overflow-hidden space-y-3">
        {/* Roller 1: Core Services (scrolling Left) */}
        <MarqueeRoller
          direction="left"
          items={SERVICES_DATA.map((s) => ({ title: s.title, subtitle: s.startingPrice }))}
        />
        {/* Roller 2: Software & Tech Stack (scrolling Right) */}
        <MarqueeRoller
          direction="right"
          items={TOOL_STACK.map((t) => ({ title: t.name, subtitle: t.role }))}
        />
      </section>

      {/* 3. TRUST BAR & STATS */}
      <section className="py-14 bg-neutral-900/50 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {TRUST_STATS.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <div className="text-3xl md:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight mb-1">
                  <span className="text-orange-500">{stat.value}</span>
                  {stat.suffix}
                </div>
                <div className="text-xs text-neutral-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW CARDS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
              CORE CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white font-display tracking-tight mt-1">
              End-to-End Creative & Digital Solutions
            </h2>
          </div>
          <Link
            to="/services"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors"
          >
            <span>Explore All 7 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 6).map((srv, idx) => (
            <div
              key={srv.id}
              className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                    {idx === 0 && <Palette className="w-5 h-5" />}
                    {idx === 1 && <Layers className="w-5 h-5" />}
                    {idx === 2 && <Palette className="w-5 h-5" />}
                    {idx === 3 && <Globe className="w-5 h-5" />}
                    {idx === 4 && <Smartphone className="w-5 h-5" />}
                    {idx === 5 && <Sparkles className="w-5 h-5" />}
                  </div>
                  {srv.startingPrice && (
                    <span className="text-xs font-mono text-neutral-400 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800">
                      From {srv.startingPrice}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white font-display mb-2 group-hover:text-orange-400 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {srv.shortDesc}
                </p>

                <ul className="space-y-1.5 text-xs text-neutral-300 border-t border-neutral-800 pt-3 mb-6">
                  {srv.features.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenQuote(srv.title)}
                  className="w-full py-2.5 rounded-lg bg-neutral-950 hover:bg-orange-500 hover:text-white text-neutral-300 font-semibold text-xs flex items-center justify-center gap-1.5 border border-neutral-800 hover:border-orange-500 transition-all active:scale-95"
                >
                  <span>Request {srv.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURED PORTFOLIO SLIDER / GALLERY PREVIEW */}
      <section className="py-20 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
                MASTERS OF GRAPHIC DESIGN & CODE
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white font-display tracking-tight mt-1">
                Featured Portfolio Showcase
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 p-1 bg-neutral-900 rounded-xl border border-neutral-800 mt-4 md:mt-0">
              {(['All', 'Posters', 'Websites', 'Logos'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setPortfolioFilter(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    portfolioFilter === cat
                      ? 'bg-orange-500 text-white font-semibold shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPortfolio.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="cursor-pointer group flex flex-col rounded-2xl overflow-hidden border border-neutral-800/80 hover:border-orange-500/60 transition-all duration-300 shadow-xl aspect-[3/4] max-h-[440px]"
              >
                <PosterArtwork item={item} className="h-full group-hover:scale-[1.02] transition-transform duration-500" />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-xl shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <span>Explore All 20+ Posters & Mockups</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. PROCESS TIMELINE */}
      <section className="py-20 bg-neutral-900/30 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
              HOW WE WORK
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white font-display tracking-tight mt-1">
              From Concept to Flawless Execution
            </h2>
            <p className="text-xs text-neutral-400 mt-2">
              Our 4-step creative engineering process ensures zero guesswork and on-time delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Discovery & Brief',
                desc: 'We unpack your brand goals, target audience in Kenya, and stylistic preferences.',
              },
              {
                step: '02',
                title: 'Concepts & Wireframes',
                desc: 'We present 3 unique creative directions or UI wireframes for your initial feedback.',
              },
              {
                step: '03',
                title: 'Craft & Refinement',
                desc: 'Fine-tuning every pixel, typography hierarchy, responsive breakpoint, or vector curve.',
              },
              {
                step: '04',
                title: 'Deployment & Support',
                desc: 'Delivering full print-ready CMYK files or launching your high-speed live website.',
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-orange-500/80 font-display block mb-3">
                    {p.step}
                  </span>
                  <h3 className="text-lg font-bold text-white font-display mb-2">{p.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{p.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Milestone Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS CAROUSEL */}
      <section className="py-20 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white font-display tracking-tight mt-1">
              Endorsed by Kenyan Leaders & Founders
            </h2>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900/90 border border-neutral-800 relative overflow-hidden shadow-2xl">
            <Quote className="absolute -top-4 -right-4 w-32 h-32 text-orange-500/5 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-2xl font-medium text-white max-w-2xl leading-relaxed mb-8">
                "{TESTIMONIALS_DATA[activeTestimonialIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                {TESTIMONIALS_DATA[activeTestimonialIdx].avatar ? (
                  <img
                    src={TESTIMONIALS_DATA[activeTestimonialIdx].avatar}
                    alt={TESTIMONIALS_DATA[activeTestimonialIdx].author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-500 shadow-md"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center text-orange-400 font-bold text-base">
                    {TESTIMONIALS_DATA[activeTestimonialIdx].author.charAt(0)}
                  </div>
                )}
                <div className="text-left">
                  <div className="text-base font-bold text-white font-display">
                    {TESTIMONIALS_DATA[activeTestimonialIdx].author}
                  </div>
                  <div className="text-xs text-neutral-400">
                    {TESTIMONIALS_DATA[activeTestimonialIdx].role},{' '}
                    <span className="text-orange-400 font-semibold">
                      {TESTIMONIALS_DATA[activeTestimonialIdx].company}
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation controls */}
              <div className="flex items-center gap-3 mt-8">
                <button
                  onClick={() =>
                    setActiveTestimonialIdx((prev) =>
                      prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1
                    )
                  }
                  aria-label="Previous Testimonial"
                  className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex gap-1.5">
                  {TESTIMONIALS_DATA.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonialIdx(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        activeTestimonialIdx === idx ? 'w-6 bg-orange-500' : 'w-2 bg-neutral-700'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() =>
                    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length)
                  }
                  aria-label="Next Testimonial"
                  className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Client Logo Roller below testimonials */}
          <div className="mt-12">
            <MarqueeRoller
              direction="left"
              items={CLIENT_LOGOS.map((c) => ({ title: c.name, subtitle: c.sector }))}
            />
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION BANNER */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
            READY TO STAND OUT?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight mt-2 mb-4">
            Let's Build Something Exceptional Together
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto mb-8">
            Whether you need a sold-out event poster, an authoritative corporate brand identity, or a modern high-speed website, JEFF DESIGNS HUB is ready to deliver.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenQuote()}
              className="px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm flex items-center gap-2 shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <span>Get Your Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/254702782850?text=${encodeURIComponent(
                'Hello Jeff! I want to discuss a new design and web project for my business.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-semibold text-sm flex items-center gap-2 transition-all"
            >
              <span>WhatsApp Jeff (+254 702 782 850)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
