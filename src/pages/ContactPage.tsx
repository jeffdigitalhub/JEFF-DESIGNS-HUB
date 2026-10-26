import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Youtube, Globe, MessageCircle, ArrowUpRight, CheckCircle2, Send } from 'lucide-react';
import { AGENCY_INFO, SERVICES_DATA } from '../data/mockData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Website Development',
    budget: 'KES 10,000 - 25,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `*Direct Contact Inquiry - JEFF DESIGNS HUB*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service}%0A*Budget:* ${formData.budget}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/254702782850?text=${text}`, '_blank');
  };

  const handleEmailDirect = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${AGENCY_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-24 pb-20">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
          GET IN TOUCH WITH JEFF
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mt-2 mb-4">
          Let's Discuss Your <span className="text-orange-500">Next Project</span>
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Have an upcoming brand launch, event poster requirement, or website project? Contact Geoffrey Robi directly through any of our channels below.
        </p>
      </section>

      {/* 2. CONTACT GRID: OFFICIAL CHANNELS + CONTACT FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Official Details (Exact) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-xl space-y-6">
              <h2 className="text-xl font-bold text-white font-display border-b border-neutral-800 pb-4">
                Official Agency Channels
              </h2>

              {/* Phone / WhatsApp Numbers (Tap-to-call) */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 font-mono block mb-1">
                    Phone / WhatsApp (Tap to Call or Chat)
                  </span>
                  <div className="flex flex-col gap-1 text-sm font-semibold text-white">
                    <a
                      href={`tel:${AGENCY_INFO.phone1Raw}`}
                      className="hover:text-orange-400 transition-colors flex items-center gap-1.5"
                    >
                      <span>{AGENCY_INFO.phone1}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                    </a>
                    <a
                      href={`tel:${AGENCY_INFO.phone2Raw}`}
                      className="hover:text-orange-400 transition-colors flex items-center gap-1.5"
                    >
                      <span>{AGENCY_INFO.phone2}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                    </a>
                  </div>
                  <div className="mt-2">
                    <a
                      href={AGENCY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium hover:bg-emerald-500/20 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Open WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email (mailto link) */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 font-mono block mb-1">Email Address</span>
                  <a
                    href={`mailto:${AGENCY_INFO.email}`}
                    className="text-sm font-semibold text-white hover:text-orange-400 transition-colors break-all"
                  >
                    {AGENCY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 font-mono block mb-1">Location</span>
                  <span className="text-sm font-semibold text-white">{AGENCY_INFO.location}</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 font-mono block mb-1">Working Hours</span>
                  <span className="text-sm font-semibold text-white">{AGENCY_INFO.workingHours}</span>
                </div>
              </div>

              {/* YouTube & Website */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                  <Youtube className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 font-mono block mb-1">Online Channels</span>
                  <div className="flex flex-col gap-1 text-xs">
                    <a
                      href={AGENCY_INFO.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-red-400 font-medium underline"
                    >
                      {AGENCY_INFO.youtube}
                    </a>
                    <a
                      href={AGENCY_INFO.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 font-medium underline"
                    >
                      {AGENCY_INFO.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Card in Contact Area */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center gap-4">
              <img
                src={AGENCY_INFO.portraitPhoto}
                alt="Geoffrey Robi, Founder"
                className="w-16 h-16 rounded-2xl object-cover border-2 border-orange-500 shrink-0"
              />
              <div className="text-xs">
                <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest block">
                  DIRECT ACCESS
                </span>
                <div className="text-white font-bold text-sm">Geoffrey "Jeff" Robi</div>
                <p className="text-neutral-400 mt-0.5">
                  Reach out directly for urgent event posters, fast turnaround web projects, and corporate partnerships.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl">
            {!submitted ? (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
                    DIRECT INQUIRY FORM
                  </span>
                  <h3 className="text-2xl font-black text-white font-display tracking-tight mt-1">
                    Send Us a Project Message
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    We typically review briefs and respond within 2 to 4 business hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-300 font-medium mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Geoffrey Robi"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-300 font-medium mb-1">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+254 700 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="client@organization.co.ke"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  {/* Service Dropdown & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-300 font-medium mb-1">Select Service *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-orange-500"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                        <option value="Complete Branding & Website Bundle">Complete Branding & Website Bundle</option>
                        <option value="Other Custom Creative Request">Other Custom Creative Request</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-neutral-300 font-medium mb-1">Estimated Budget (KES)</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-orange-500"
                      >
                        <option value="KES 2,500 - 10,000">KES 2,500 - 10,000</option>
                        <option value="KES 10,000 - 25,000">KES 10,000 - 25,000</option>
                        <option value="KES 25,000 - 50,000">KES 25,000 - 50,000</option>
                        <option value="KES 50,000+">KES 50,000+ (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      Project Details & Deliverables *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share your goals, timeline, existing brand assets, and any questions you have..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-orange-500/25 transition-all"
                  >
                    <span>Send Message to Jeff Designs Hub</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-bold text-white font-display mb-2">
                  Message Prepared!
                </h3>
                <p className="text-xs text-neutral-300 max-w-sm mx-auto mb-6">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Choose your preferred delivery method below for fastest dispatch:
                </p>

                <div className="flex flex-col gap-3 max-w-md mx-auto">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send to WhatsApp (+254 702 782 850)</span>
                  </button>

                  <button
                    onClick={handleEmailDirect}
                    className="w-full py-3.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email ({AGENCY_INFO.email})</span>
                  </button>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-neutral-500 hover:text-neutral-300 mt-2"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
