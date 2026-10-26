import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 pt-24 pb-20 text-center">
      <div className="max-w-md mx-auto">
        <div className="text-8xl sm:text-9xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400 mb-4 select-none">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 mb-8 leading-relaxed">
          The creative canvas or page you are looking for has been moved or does not exist. Let's guide you back to our active work.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/portfolio"
            className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 font-semibold text-xs flex items-center gap-2 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
