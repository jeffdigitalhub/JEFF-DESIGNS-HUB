import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Preloader } from './components/Preloader';
import { BackToTop } from './components/BackToTop';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { QuoteModal } from './components/QuoteModal';
import { LightboxModal } from './components/LightboxModal';
import { PortfolioItem } from './types';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PricingPage } from './pages/PricingPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { BlogPage } from './pages/BlogPage';
import { TrainingPage } from './pages/TrainingPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

// Scroll to top automatically on route changes and update document title
function RouteManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic SEO titles per page
    const titles: Record<string, string> = {
      '/': 'JEFF DESIGNS HUB — Designing Ideas. Building Digital Experiences',
      '/about': 'About Geoffrey Robi & Jeff Designs Hub — Premier Kenyan Agency',
      '/services': 'Services & Capabilities — Logo, Web & Mobile App Development',
      '/portfolio': 'Portfolio & Poster Gallery — Masters of Graphic Design',
      '/pricing': 'Transparent Pricing & Plans — Logo from KES 2,500, Web from KES 18,000',
      '/testimonials': 'Client Testimonials & Endorsements — Jeff Designs Hub Kenya',
      '/blog': 'Design & Digital Growth Blog — Insights for Kenyan Businesses',
      '/training': 'Training & Mentorship — Aspiring Digital Creators in Africa',
      '/contact': 'Contact Geoffrey Robi — WhatsApp & Phone (+254 702 782 850)',
      '/privacy-policy': 'Privacy Policy — JEFF DESIGNS HUB',
      '/terms': 'Terms of Service — JEFF DESIGNS HUB',
    };

    document.title = titles[pathname] || 'JEFF DESIGNS HUB — Designing Ideas. Building Digital Experiences';
  }, [pathname]);

  return null;
}

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('jdh_dark_mode');
    return saved !== null ? saved === 'true' : true;
  });

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteDefaultService, setQuoteDefaultService] = useState('Website Development');
  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    localStorage.setItem('jdh_dark_mode', String(darkMode));
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenQuote = (serviceTitle?: string) => {
    if (serviceTitle) setQuoteDefaultService(serviceTitle);
    setQuoteModalOpen(true);
  };

  const handleOpenLightbox = (item: PortfolioItem) => {
    setActiveLightboxItem(item);
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
        darkMode ? 'bg-neutral-950 text-neutral-100' : 'bg-neutral-50 text-neutral-900'
      }`}>
        <RouteManager />
        <CustomCursor />
        <ScrollProgress />
        <Preloader />
        <BackToTop />
        <WhatsAppFloating />

        {/* Global Modals */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          defaultService={quoteDefaultService}
        />

        <LightboxModal
          item={activeLightboxItem}
          onClose={() => setActiveLightboxItem(null)}
          onOpenQuote={(service) => handleOpenQuote(service)}
        />

        {/* Shared Glass Navbar */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Main Routed Content */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenQuote={handleOpenQuote}
                  onOpenLightbox={handleOpenLightbox}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage onOpenQuote={() => handleOpenQuote()} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onOpenQuote={handleOpenQuote} />}
            />
            <Route
              path="/portfolio"
              element={
                <PortfolioPage
                  onOpenLightbox={handleOpenLightbox}
                  onOpenQuote={handleOpenQuote}
                />
              }
            />
            <Route
              path="/pricing"
              element={<PricingPage onOpenQuote={handleOpenQuote} />}
            />
            <Route
              path="/testimonials"
              element={<TestimonialsPage onOpenQuote={() => handleOpenQuote()} />}
            />
            <Route
              path="/blog"
              element={<BlogPage onOpenQuote={handleOpenQuote} />}
            />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Shared Modern Footer */}
        <Footer />
      </div>
    </Router>
  );
}
