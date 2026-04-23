import type { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "Vedic Remedies & Planetary Healing | Gemstone & Mantra | Sashtravani",
  description: "Transform your life through ancient Vedic wisdom. Explore simple and powerful remedies including gemstones, mantras, and rituals to balance your cosmic energy.",
};

export default function RemediesPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden rounded-3xl glass-card border-gold-500/10 mb-16">
          <div className="absolute inset-0 z-[-1]">
            <div className="glow-orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" style={{ background: 'radial-gradient(circle, #fbbf24 0%, transparent 70%)' }}></div>
          </div>
          
          <div className="px-10 space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Celestial Healing
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white">
              Effective <span className="text-gradient-gold">Remedies</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Transform your life through ancient Vedic wisdom. We provide simple, logical, and powerful remedies to balance planetary energies and overcome obstacles.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 glass-card p-8 flex items-center justify-center lg:order-1">
            <div className="absolute inset-0 bg-gold-500/5 animate-pulse"></div>
            <img 
              src="/api/image?type=remedies" 
              alt="Vedic Remedies" 
              className="relative z-10 w-full h-full object-contain opacity-80"
            />
          </div>
          <div className="space-y-8 lg:order-2">
            <h2 className="text-4xl font-display font-bold text-white">The Power of Rectification</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              Vedic remedies are not about changing destiny, but about aligning your energy to better handle it. We focus on practical solutions that fit into your modern lifestyle while maintaining spiritual integrity.
            </p>
            <div className="space-y-4">
              {[
                "Gemstone Recommendations",
                "Mantra & Chanting Practices",
                "Donation & Charity (Daan) Guidance",
                "Vedic Rituals & Pooja Suggestions"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="text-center py-20 rounded-3xl bg-linear-to-b from-white/5 to-transparent border border-white/5">
          <h2 className="text-3xl font-display font-bold text-white mb-8">Empower your life with sacred remedies.</h2>
          <button className="btn-gold !px-12 !py-4 text-lg">
            Get Personalized Remedies
          </button>
        </section>
      </div>
    </div>
  );
}
