import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { AGENCY_INFO } from '../data/mockData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'Training', path: '/training' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-neutral-950/85 dark:bg-neutral-950/90 light:bg-white/90 backdrop-blur-md border-b border-neutral-800/80 light:border-neutral-200/80 shadow-lg'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Wordmark (Single Text Element) */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl md:text-2xl font-black tracking-tight text-white light:text-neutral-950 font-display whitespace-nowrap shrink-0 group"
          >
            <span className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-black text-sm shadow-md shadow-orange-500/30 group-hover:rotate-6 transition-transform">
              J
            </span>
            <span>
              JEFF <span className="text-orange-500">DESIGNS</span> HUB
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `whitespace-nowrap transition-colors relative py-1 text-sm ${
                    isActive
                      ? 'text-orange-500 font-semibold'
                      : 'text-neutral-300 light:text-neutral-700 hover:text-white light:hover:text-black'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle Dark and Light Mode"
              className="p-2 rounded-lg bg-neutral-900 light:bg-neutral-100 border border-neutral-800 light:border-neutral-200 text-neutral-300 light:text-neutral-700 hover:text-white light:hover:text-black transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Quick Call */}
            <a
              href={`tel:${AGENCY_INFO.phone1Raw}`}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-300 light:text-neutral-700 hover:text-white light:hover:text-black transition-colors"
              title="Call Jeff Designs Hub"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>{AGENCY_INFO.phone1}</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenQuote}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-md shadow-orange-500/25 transition-all whitespace-nowrap active:scale-95"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="lg:hidden p-2 rounded-lg bg-neutral-900 light:bg-neutral-100 border border-neutral-800 light:border-neutral-200 text-neutral-200 light:text-neutral-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-neutral-950/98 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-lg font-black text-white font-display"
            >
              <span className="w-7 h-7 rounded bg-orange-500 flex items-center justify-center text-white font-bold text-xs">
                J
              </span>
              <span>JEFF DESIGNS HUB</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="py-8 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-2xl font-bold font-display transition-colors py-1 ${
                    isActive ? 'text-orange-500' : 'text-neutral-200 hover:text-orange-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-6 border-t border-neutral-800 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex flex-col gap-1 text-xs text-neutral-400">
              <a href={`tel:${AGENCY_INFO.phone1Raw}`} className="hover:text-white">
                📞 {AGENCY_INFO.phone1}
              </a>
              <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-white">
                ✉️ {AGENCY_INFO.email}
              </a>
              <span>📍 {AGENCY_INFO.location}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
