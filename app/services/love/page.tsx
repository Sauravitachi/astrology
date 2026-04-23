import type { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "Love Astrology & Relationship Compatibility | Sashtravani",
  description: "Find your soulmate and nurture your bonds. Expert Vedic astrology for relationship compatibility, marriage timing, and emotional harmony.",
};

export default function LovePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden rounded-3xl glass-card border-gold-500/10 mb-16">
          <div className="absolute inset-0 z-[-1]">
            <div className="glow-orb w-[600px] h-[600px] bottom-[-300px] right-[-100px] opacity-10" style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }}></div>
          </div>
          
          <div className="px-10 space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-celestial-500/20 bg-celestial-500/5 text-celestial-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 animate-pulse">
              Love & Relationships
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white">
              Love <span className="text-gradient-gold">Insights</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Find your soulmate and nurture your bonds. Our relationship consultation provides clarity on compatibility, marriage timing, and emotional harmony.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
           <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 glass-card p-8 flex items-center justify-center lg:order-1">
            <div className="absolute inset-0 bg-celestial-500/5 animate-pulse"></div>
            <img 
              src="/love.png" 
              alt="Love Harmony" 
              className="relative z-10 w-full h-full object-contain opacity-80"
            />
          </div>
          <div className="space-y-8 lg:order-2">
            <h2 className="text-4xl font-display font-bold text-white">Nurture Your Heart's Desires</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              Relationships are the core of our human experience. Astrology offers a profound understanding of the attraction between two souls and the cosmic timing of union.
            </p>
            <div className="space-y-4">
              {[
                "Compatibility Check (Synastry)",
                "Timing of Marriage & Union",
                "Resolving Relationship Conflicts",
                "Emotional Bonding Analysis"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-celestial-500"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="text-center py-20 rounded-3xl bg-linear-to-b from-white/5 to-transparent border border-white/5">
          <h2 className="text-3xl font-display font-bold text-white mb-8">Ready to find or strengthen your love?</h2>
          <button className="btn-gold !px-12 !py-4 text-lg">
            Consult for Love
          </button>
        </section>
      </div>
    </div>
  );
}
