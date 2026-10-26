import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Phone, Mail, MapPin, Clock, Youtube, Globe, Heart } from 'lucide-react';
import { AGENCY_INFO, SERVICES_DATA } from '../data/mockData';

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmailInput('');
    }
  };

  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-900 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Newsletter & Brand Promise Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-neutral-800/80 items-center">
          <div className="lg:col-span-6">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white font-display tracking-tight mb-2">
              Designing Ideas. <span className="text-orange-500">Building Experiences.</span>
            </h3>
            <p className="text-neutral-400 text-sm max-w-lg">
              Subscribe to our monthly creative digest for design insights, brand building strategies, and tech tips tailored for growing Kenyan businesses.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center gap-3 text-orange-400 text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Asante sana! You are subscribed to the Jeff Designs Hub digest.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shrink-0 shadow-md shadow-orange-500/20 active:scale-95"
                >
                  <span>Subscribe</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4-Column Navigation & Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-neutral-800/80 text-sm">
          {/* Column 1: Agency Brand & Mission */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white font-display mb-4">
              <span className="w-7 h-7 rounded bg-orange-500 flex items-center justify-center text-white font-bold text-xs">
                J
              </span>
              <span>JEFF DESIGNS HUB</span>
            </Link>
            <p className="text-neutral-400 text-xs leading-relaxed mb-4">
              Premier Kenyan creative agency founded by Geoffrey "Jeff" Robi. We specialize in graphic design, brand identity, modern web development, mobile apps, and digital mentorship.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={AGENCY_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-red-500 hover:border-red-500/30 transition-colors"
                title="Watch on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={AGENCY_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-orange-500 hover:border-orange-500/30 transition-colors"
                title="Official Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-colors"
                title="Chat on WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Creative Services */}
          <div>
            <h4 className="text-white font-bold font-display uppercase tracking-wider text-xs mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link to="/services" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-white font-bold font-display uppercase tracking-wider text-xs mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link to="/about" className="hover:text-orange-400 transition-colors">
                  About Geoffrey "Jeff" Robi
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-orange-400 transition-colors">
                  Portfolio & Poster Gallery
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-orange-400 transition-colors">
                  Transparent Pricing & Plans
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-orange-400 transition-colors">
                  Client Reviews & Testimonials
                </Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-orange-400 transition-colors">
                  Training & Mentorship Program
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-orange-400 transition-colors">
                  Design & Growth Blog
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-orange-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-orange-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details (Strictly as written in prompt) */}
          <div>
            <h4 className="text-white font-bold font-display uppercase tracking-wider text-xs mb-4">
              Contact Details
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:${AGENCY_INFO.phone1Raw}`} className="hover:text-white transition-colors">
                    {AGENCY_INFO.phone1}
                  </a>
                  <a href={`tel:${AGENCY_INFO.phone2Raw}`} className="hover:text-white transition-colors">
                    {AGENCY_INFO.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {AGENCY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>{AGENCY_INFO.location}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>{AGENCY_INFO.workingHours}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <a href={AGENCY_INFO.website} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {AGENCY_INFO.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 {AGENCY_INFO.name}. All rights reserved. Founded by {AGENCY_INFO.owner}.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with pride in Kenya</span>
            <span className="text-orange-500">●</span>
            <span>Designing Ideas, Building Digital Experiences</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
