import type { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "Cosmic Insights & Astrology Blog | Sashtravani",
  description: "Stay updated with the latest celestial trends, rituals, and astrological wisdom. From Mercury retrograde guides to lunar rituals and life cycles.",
};

const posts = [
  {
    title: "Mercury Retrograde survival guide",
    category: "Celestial Trends",
    date: "April 18, 2026",
    excerpt: "The trickster planet is back. Here's how to navigate communication glitches and technical chaos this season.",
    img: "retro"
  },
  {
    title: "The power of Lunar Rituals",
    category: "Rituals & Magic",
    date: "April 15, 2026",
    excerpt: "Harnessing the energy of the full moon for manifestation and emotional release. A step-by-step guide.",
    img: "moon"
  },
  {
    title: "Understanding your Saturn Return",
    category: "Life Cycles",
    date: "April 10, 2026",
    excerpt: "Everything you need to know about the most significant spiritual transition in your late twenties.",
    img: "saturn"
  },
  {
    title: "Astrology for modern relationships",
    category: "Love & Stars",
    date: "April 5, 2026",
    excerpt: "How synastry can help you understand your partner's love language and emotional needs.",
    img: "love"
  },
  {
    title: "The hidden meaning of Angel Numbers",
    category: "Numerology",
    date: "March 28, 2026",
    excerpt: "Seeing 11:11 everywhere? Explore the mystical messages your guardians are sending through numbers.",
    img: "numbers"
  }
];

export default function InsightsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            Cosmic <span className="text-gradient-gold">Insights</span>
          </h1>
          <p className="text-white/40 text-lg">
            Ancient wisdom for the modern seeker. Exploring the intersection of stars, spirit, and science.
          </p>
        </div>
        <div className="flex gap-4 mb-2">
          {['All', 'Astrology', 'Rituals', 'Cycles'].map(cat => (
            <button key={cat} className="px-5 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest hover:border-gold-500 hover:text-gold-400 transition-all">
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post, idx) => (
          <article key={post.title} className={`group cursor-pointer ${idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
            <div className={`relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/5 mb-6 ${idx === 0 ? 'aspect-[21/9]' : 'aspect-video'}`}>
               <div className="absolute inset-0 bg-linear-to-t from-void via-transparent to-transparent z-10"></div>
               <img 
                 src={`/api/image?type=blog_${idx}`} 
                 alt={post.title}
                 className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute top-6 left-6 z-20 px-4 py-1.5 rounded-full bg-gold-400/10 backdrop-blur-md border border-gold-400/20 text-[10px] font-bold text-gold-400 uppercase tracking-widest">
                 {post.category}
               </div>
            </div>
            
            <div className="space-y-3">
              <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{post.date}</div>
              <h3 className={`${idx === 0 ? 'text-3xl' : 'text-xl'} font-display font-bold group-hover:text-gold-400 transition-colors`}>
                {post.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-24 text-center">
        <button className="px-12 py-4 rounded-full border border-white/10 hover:border-gold-500/50 hover:bg-gold-500/5 transition-all text-sm font-bold uppercase tracking-widest">
          Load More Wisdom
        </button>
      </div>
    </div>
  );
}
