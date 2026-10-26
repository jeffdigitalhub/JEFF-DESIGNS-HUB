import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Target, Eye, Sparkles, HeartHandshake, ShieldCheck, Zap } from 'lucide-react';
import { AGENCY_INFO, MILESTONES_DATA } from '../data/mockData';

interface AboutPageProps {
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote }) => {
  return (
    <div className="pt-24 pb-20">
      {/* 1. HERO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
            OUR STORY & DNA
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mt-2 mb-6">
            Designing Ideas. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400">
              Building Digital Experiences.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            JEFF DESIGNS HUB was established in Kenya with a relentless commitment to visual distinction and engineering rigor. We bridge the gap between creative graphic design and modern, high-speed digital software.
          </p>
        </div>
      </section>

      {/* 2. MEET THE FOUNDER SECTION (GEOFFREY "JEFF" ROBI) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-neutral-900/90 border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            {/* Founder Photos (Formal Portrait + Desk In-Action) */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
              {/* Formal Portrait */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-orange-500/40 shadow-xl max-w-xs mx-auto lg:max-w-none">
                <img
                  src={AGENCY_INFO.portraitPhoto}
                  alt="Geoffrey Robi, known as Jeff, Founder of Jeff Designs Hub"
                  className="w-full aspect-[4/5] object-cover object-center"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent p-4">
                  <span className="text-white font-bold text-sm block">Geoffrey Robi ("Jeff")</span>
                  <span className="text-orange-400 text-xs font-mono">Founder & Lead Creative Technologist</span>
                </div>
              </div>

              {/* Desk Action Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-lg hidden sm:block max-w-xs mx-auto lg:max-w-none">
                <img
                  src={AGENCY_INFO.deskPhoto}
                  alt="Geoffrey Robi at work in the studio with laptop"
                  className="w-full aspect-[16/9] object-cover object-top"
                />
                <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[1px] flex items-center justify-center p-3 text-center">
                  <span className="text-[11px] text-white font-medium">
                    "Crafting every vector and line of code with intention."
                  </span>
                </div>
              </div>
            </div>

            {/* Founder Story & Mission */}
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
                MEET THE FOUNDER
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mt-1 mb-4">
                The Visionary Behind the Hub: Geoffrey Robi
              </h2>

              <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
                <p>
                  Widely known across Kenya as <strong className="text-white">"Jeff"</strong>, Geoffrey Robi founded JEFF DESIGNS HUB with a clear purpose: to free African brands from bland, copy-paste aesthetics and empower them with world-class visual identities and modern digital technology.
                </p>
                <p>
                  With years of hands-on mastery in raster manipulation, vector branding, and web development, Jeff has personally spearheaded visual campaigns for influential Kenyan leaders, NGOs, real estate developers, and emerging startups.
                </p>
                <p className="border-l-2 border-orange-500 pl-4 italic text-neutral-200">
                  "Our mission is twofold: to build memorable digital brands that help Kenyan businesses grow exponentially, and to train and mentor aspiring digital creators across Africa to achieve creative and financial independence."
                </p>
              </div>

              {/* Core Attributes */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-neutral-800 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>150+ Kenyan Businesses Served</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hands-on Youth Mentorship</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>7-Day Agile Website Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>End-to-End Creative Support</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-all"
                >
                  <span>Work Directly with Jeff</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/training"
                  className="px-6 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs transition-colors"
                >
                  <span>Join Mentorship Program</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION, VISION & VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Mission */}
          <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-3">Our Mission</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                To equip Kenyan and African businesses with bold, functional design and seamless digital web platforms that drive tangible sales, build lasting consumer trust, and inspire continental pride.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-3">Our Vision</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                To become Africa's premier creative technology hub, recognized internationally for unmatched graphic mastery, ethical mentorship, and transformative digital experiences.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Sparkles,
              title: 'Pixel Perfection',
              desc: 'No blurry images or sloppy layouts. Every curve and typography scale is polished to international standards.',
            },
            {
              icon: Zap,
              title: 'Speed & Reliability',
              desc: 'We respect deadlines. Our signature 7-day website delivery sprint keeps your business ahead of the competition.',
            },
            {
              icon: ShieldCheck,
              title: 'Radical Transparency',
              desc: 'No hidden agency fees or surprise charges. Clear pricing from KES 2,500 logos to KES 18,000 full websites.',
            },
            {
              icon: HeartHandshake,
              title: 'Community Empowerment',
              desc: 'Actively mentoring young African creators with practical tech skills to create sustainable remote careers.',
            },
          ].map((val, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <val.icon className="w-6 h-6 text-orange-400 mb-3" />
              <h4 className="text-base font-bold text-white font-display mb-1.5">{val.title}</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ANIMATED TIMELINE OF MILESTONES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
            OUR JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight mt-1">
            Milestones of Jeff Designs Hub
          </h2>
          <p className="text-xs text-neutral-400 mt-2">
            The steady evolution from passionate graphic exploration to a full-service creative agency.
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-1/2 before:w-0.5 before:bg-neutral-800 before:-translate-x-1/2">
          {MILESTONES_DATA.map((milestone, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
              }`}
            >
              {/* Dot in center */}
              <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-neutral-950 border-2 border-orange-500 flex items-center justify-center text-[10px] font-mono text-orange-400 z-10 shadow-lg">
                {milestone.step}
              </div>

              {/* Content card */}
              <div className="w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0">
                <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl hover:border-orange-500/40 transition-colors">
                  <span className="text-xs font-mono text-orange-400 font-bold block mb-1">
                    PHASE {milestone.step}
                  </span>
                  <h3 className="text-lg font-bold text-white font-display mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
