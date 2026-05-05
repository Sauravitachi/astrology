import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from "../data/articles";

export const metadata: Metadata = {
  title: "Cosmic Insights & Astrology Blog | Sashtravani",
  description: "Stay updated with the latest celestial trends, rituals, and astrological wisdom. From Mercury retrograde guides to lunar rituals and life cycles.",
  keywords: ["Astrology Blog", "Mercury Retrograde", "Lunar Rituals", "Saturn Return", "Vedic Wisdom"],
};

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
        {articles.map((post, idx) => (
          <Link 
            href={`/insights/${post.slug}`} 
            key={post.slug} 
            className={`group cursor-pointer ${idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
          >
            <article>
              <div className={`relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/5 mb-6 ${idx === 0 ? 'aspect-[21/9]' : 'aspect-video'}`}>
                <div className="absolute inset-0 bg-linear-to-t from-void via-transparent to-transparent z-10"></div>
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
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
          </Link>
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
