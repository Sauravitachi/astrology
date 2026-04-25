import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Marriage Astrology & Kundli Milan | Expert Matchmaking | Sashtravani",
  description: "Ensure a harmonious and successful marriage with expert Kundli matching and relationship guidance. Discover cosmic compatibility through Vedic wisdom.",
};

export default function MarriagePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden rounded-3xl glass-card border-gold-500/10 mb-16">
          <div className="absolute inset-0 z-[-1]">
            <div className="glow-orb w-[600px] h-[600px] bottom-0 left-0 opacity-10" style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }}></div>
          </div>
          
          <div className="px-10 space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Sacred Unions
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white">
              Marriage <span className="text-gradient-gold">Matching</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Ensure a lifetime of happiness and harmony. Our comprehensive Kundli Milan (Gun Milan) and Manglik Dosha analysis help you build a solid foundation for your marriage.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold text-white">The Foundation of Union</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              Marriage is a union of two souls and their cosmic energies. Vedic matching provides insights into mental compatibility, physical attraction, and long-term stability between partners.
            </p>
            <div className="space-y-4">
              {[
                "Ashtakoot Gun Milan (36 points)",
                "Manglik Dosha Analysis & Remedies",
                "Compatibility for Long-term Stability",
                "Auspicious Wedding Dates (Mahurats)"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 glass-card p-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-gold-500/5 animate-pulse"></div>
            <Image 
              src="/page.jpeg" 
              alt="Marriage Matching" 
              fill
              priority
              className="object-contain opacity-80 relative z-10"
            />
          </div>
        </div>

        {/* Call to Action */}
        <section className="text-center py-20 rounded-3xl bg-linear-to-b from-white/5 to-transparent border border-white/5">
          <h2 className="text-3xl font-display font-bold text-white mb-8">Begin your journey with celestial blessings.</h2>
          <button className="btn-gold !px-12 !py-4 text-lg">
            Book Marriage Matching
          </button>
        </section>
      </div>
    </div>
  );
}
