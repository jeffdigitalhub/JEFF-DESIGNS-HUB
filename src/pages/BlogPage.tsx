import React, { useState } from 'react';
import { ArrowRight, Clock, Calendar, CheckCircle2, X, Sparkles, BookOpen } from 'lucide-react';
import { BLOG_POSTS, AGENCY_INFO } from '../data/mockData';
import { BlogPost } from '../types';

interface BlogPageProps {
  onOpenQuote: (service?: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onOpenQuote }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Branding', 'Web Development', 'Graphic Design', 'Digital Marketing', 'Training & Mentorship'];

  const filteredPosts = activeCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-orange-400 text-xs font-mono mb-4">
          <BookOpen className="w-3.5 h-3.5 text-orange-500" />
          <span>INSIGHTS & STRATEGY</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight mb-4">
          Design & Growth Tips for <span className="text-orange-500">Kenyan Brands</span>
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Actionable advice on brand positioning, high-converting web architecture, and digital marketing written from real agency experience.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-orange-500 text-white font-bold shadow-md'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 2. ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer p-6 sm:p-7 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-4 pb-3 border-b border-neutral-800/80">
                  <span className="text-orange-400 font-mono uppercase tracking-wider text-[11px] font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[11px]">
                    <Clock className="w-3 h-3 text-neutral-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white font-display tracking-tight leading-snug mb-3 group-hover:text-orange-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <span className="text-neutral-400 font-mono text-[11px]">{post.date}</span>
                <span className="text-orange-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. ARTICLE READER MODAL */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="absolute inset-0" onClick={() => setSelectedPost(null)} />

          <div className="relative z-10 w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-10 my-auto max-h-[88vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              aria-label="Close article"
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Article Metadata */}
            <div className="flex items-center gap-3 text-xs text-neutral-400 mb-4">
              <span className="text-orange-400 font-mono uppercase tracking-wider font-semibold">
                {selectedPost.category}
              </span>
              <span>·</span>
              <span className="font-mono">{selectedPost.date}</span>
              <span>·</span>
              <span className="font-mono">{selectedPost.readTime}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight leading-snug mb-6">
              {selectedPost.title}
            </h1>

            {/* Key Takeaways Box */}
            <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 mb-8">
              <div className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold mb-2">
                KEY STRATEGIC TAKEAWAYS
              </div>
              <ul className="space-y-1.5 text-xs text-neutral-300">
                {selectedPost.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Article Prose */}
            <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
              {selectedPost.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Author Byline */}
            <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={AGENCY_INFO.portraitPhoto}
                  alt="Geoffrey Robi"
                  className="w-10 h-10 rounded-full object-cover border border-orange-500"
                />
                <div className="text-xs">
                  <div className="text-white font-bold">Geoffrey Robi ("Jeff")</div>
                  <div className="text-neutral-400">Founder, JEFF DESIGNS HUB</div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedPost(null);
                  onOpenQuote(selectedPost.category);
                }}
                className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs transition-colors"
              >
                Discuss This Strategy With Jeff
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
