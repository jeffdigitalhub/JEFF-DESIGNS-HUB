import React, { useState } from 'react';
import { GraduationCap, CheckCircle2, ArrowRight, Sparkles, Layers, Globe, Smartphone, DollarSign, MessageCircle } from 'lucide-react';
import { AGENCY_INFO } from '../data/mockData';

export const TrainingPage: React.FC = () => {
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [track, setTrack] = useState('Graphic Design & Brand Identity');
  const [level, setLevel] = useState('Complete Beginner');
  const [goals, setGoals] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsAppApplication = () => {
    const text = `*Training & Mentorship Application - JEFF DESIGNS HUB*%0A%0A*Name:* ${applicantName}%0A*Phone:* ${applicantPhone}%0A*Email:* ${applicantEmail}%0A*Track:* ${track}%0A*Experience Level:* ${level}%0A*Goals:* ${goals}`;
    window.open(`https://wa.me/254702782850?text=${text}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-orange-400 text-xs font-mono mb-4">
          <GraduationCap className="w-4 h-4 text-orange-500" />
          <span>AFRICAN CREATIVE EMPOWERMENT</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mb-4">
          Training & Mentorship for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400">
            Aspiring Digital Creators
          </span>
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Master in-demand digital design, web development, and freelancing skills. Led directly by Geoffrey "Jeff" Robi to fast-track your path to financial and creative freedom.
        </p>
      </section>

      {/* 2. CURRICULUM MODULES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
            COMPREHENSIVE SYLLABUS
          </span>
          <h2 className="text-3xl font-extrabold text-white font-display mt-1">
            What You Will Learn
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Layers,
              title: 'Graphic Design & Vector Art',
              skills: ['Photoshop photo manipulation', 'Illustrator vector crafting', 'Typography hierarchy & color rules', 'Print-ready CMYK poster design'],
            },
            {
              icon: Globe,
              title: 'Modern Web Design & Dev',
              skills: ['Figma UI/UX wireframing', 'Responsive mobile-first layouts', 'Modern HTML5, CSS & React basics', 'Domain & cloud deployment'],
            },
            {
              icon: Smartphone,
              title: 'Mobile App Architecture',
              skills: ['App user journey mapping', 'Flutter & cross-platform fundamentals', 'Interactive screen prototypes', 'Google Play Store readiness'],
            },
            {
              icon: DollarSign,
              title: 'Freelancing & Client Acquisition',
              skills: ['Setting profitable pricing in KES & USD', 'Handling client revisions smoothly', 'Building a portfolio that sells', 'Landing international remote gigs'],
            },
          ].map((mod, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-4">
                  <mod.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-display mb-3">{mod.title}</h3>
                <ul className="space-y-2 text-xs text-neutral-300">
                  {mod.skills.map((s, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MENTOR PERSPECTIVE & APPLICATION FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Founder Message & Requirements */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={AGENCY_INFO.portraitPhoto}
                  alt="Geoffrey Robi, Founder of Jeff Designs Hub"
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-orange-500"
                />
                <div>
                  <h4 className="text-base font-bold text-white font-display">Geoffrey Robi ("Jeff")</h4>
                  <span className="text-xs text-orange-400 font-mono">Lead Mentor & Agency Founder</span>
                </div>
              </div>

              <blockquote className="text-xs text-neutral-300 leading-relaxed italic mb-4">
                "You do not need years of theoretical lectures. You need hands-on practice, real client briefs, and direct guidance on what works in the actual marketplace. That is exactly what this mentorship delivers."
              </blockquote>

              <div className="space-y-2 pt-4 border-t border-neutral-800 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Small cohort sizes for direct 1-on-1 feedback</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hands-on portfolio construction throughout</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Flexible online and evening mentorship sessions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl">
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
                APPLY FOR THE NEXT COHORT
              </span>
              <h3 className="text-2xl font-black text-white font-display tracking-tight mt-1">
                Mentorship Application & Enquiry
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Fill in your details below to receive the complete syllabus and schedule your introductory call with Jeff.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kelvin Mutua"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+254 700 000 000"
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="applicant@gmail.com"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">Primary Track of Interest</label>
                    <select
                      value={track}
                      onChange={(e) => setTrack(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-orange-500"
                    >
                      <option value="Graphic Design & Brand Identity">Graphic Design & Brand Identity</option>
                      <option value="Modern Web Design & Dev">Modern Web Design & Dev</option>
                      <option value="Mobile App Architecture">Mobile App Architecture</option>
                      <option value="Complete Creative Full-Stack">Complete Creative Full-Stack (All Tracks)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">Current Experience Level</label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-orange-500"
                  >
                    <option value="Complete Beginner (Zero prior experience)">Complete Beginner (Zero prior experience)</option>
                    <option value="Self-Taught / Basic Photoshop or Canva">Self-Taught / Basic Photoshop or Canva</option>
                    <option value="Intermediate / Looking to go professional">Intermediate / Looking to go professional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    What are your biggest career or creative goals? *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us what you want to achieve through this mentorship..."
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-orange-500/25 transition-all"
                >
                  <span>Submit Mentorship Application</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white font-display mb-2">Application Received!</h4>
                <p className="text-xs text-neutral-300 max-w-sm mx-auto mb-6">
                  Thank you, <strong className="text-white">{applicantName}</strong>. You can fast-track your review by sending your application details directly to Jeff on WhatsApp.
                </p>
                <button
                  onClick={handleSendWhatsAppApplication}
                  className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-2 shadow-lg shadow-emerald-600/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Notify Jeff via WhatsApp ({AGENCY_INFO.phone1})</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
