import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowUpRight, MessageCircle, Mail } from 'lucide-react';
import { AGENCY_INFO, SERVICES_DATA } from '../data/mockData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultService = 'Website Development' }) => {
  const [service, setService] = useState(defaultService);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('KES 10,000 - 25,000');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = `*New Project Quote Request - JEFF DESIGNS HUB*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Service:* ${service}%0A*Budget:* ${budget}%0A*Project Brief:* ${message}`;
    window.open(`https://wa.me/254702782850?text=${text}`, '_blank');
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Project Quote Request: ${service} - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nBudget: ${budget}\n\nProject Details:\n${message}`
    );
    window.location.href = `mailto:${AGENCY_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 my-auto overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-800/80 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
                JEFF DESIGNS HUB · FAST QUOTE
              </span>
              <h3 className="text-2xl font-black text-white font-display tracking-tight mt-1">
                Start Your Project With Jeff
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Tell us about your brand, goals, and timeline. We respond within 2-4 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Service Select */}
              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Required Creative Service *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-orange-500"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} {s.startingPrice ? `(from ${s.startingPrice})` : ''}
                    </option>
                  ))}
                  <option value="Custom Complete Agency Package">Complete Brand & Website Package</option>
                </select>
              </div>

              {/* Name & Phone in 2 Cols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Geoffrey Robi"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">Phone Number / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+254 700 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Email & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.co.ke"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">Estimated Budget (KES)</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-orange-500"
                  >
                    <option value="KES 2,500 - 10,000">KES 2,500 - 10,000</option>
                    <option value="KES 10,000 - 25,000">KES 10,000 - 25,000</option>
                    <option value="KES 25,000 - 50,000">KES 25,000 - 50,000</option>
                    <option value="KES 50,000+">KES 50,000+ (Enterprise)</option>
                  </select>
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Project Brief & Special Requirements *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your brand, target audience, preferred colors, or project goals..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition-all active:scale-95"
                >
                  <span>Submit Project Inquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-white font-display mb-2">
              Inquiry Prepared Successfully!
            </h3>
            <p className="text-xs text-neutral-300 max-w-sm mx-auto mb-6">
              Thank you, <strong className="text-white">{name}</strong>. Would you like to transmit your brief directly via WhatsApp for an immediate response, or via Email?
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleSendWhatsApp}
                className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp (+254 702 782 850)</span>
              </button>

              <button
                onClick={handleSendEmail}
                className="w-full py-3 px-4 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send via Email ({AGENCY_INFO.email})</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-neutral-500 hover:text-neutral-300 mt-2"
              >
                Done / Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
