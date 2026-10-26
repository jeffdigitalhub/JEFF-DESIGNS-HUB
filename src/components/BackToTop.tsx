import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-neutral-900/90 hover:bg-orange-500 text-neutral-300 hover:text-white border border-neutral-700/80 shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:-translate-y-1 active:scale-90"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
