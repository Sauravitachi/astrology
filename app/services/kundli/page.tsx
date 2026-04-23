import type { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "Kundli Analysis & Birth Chart Reading | Expert Vedic Astrology | Sashtravani",
  description: "Unlock the blueprint of your soul. Get a detailed Kundli analysis covering planetary positions, Dasha periods, and life predictions from expert astrologers.",
};

export default function KundliPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden rounded-3xl glass-card border-gold-500/10 mb-16">
          <div className="absolute inset-0 z-[-1]">
            <div className="glow-orb w-[600px] h-[600px] -top-[300px] -left-[100px] opacity-10"></div>
          </div>
          
          <div className="px-10 space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 animate-pulse">
              Birth Chart Analysis
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white">
              Kundli <span className="text-gradient-gold">Overview</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Unlock the blueprint of your soul. Our in-depth Kundli analysis reveals your life's purpose, potential challenges, and celestial opportunities.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold text-white">Why Kundli Matters?</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              Your Kundli (Birth Chart) is a snapshot of the heavens at the exact moment of your birth. It serves as a celestial map that guides you through the complex journey of life, providing insights into your personality, career, health, and relationships.
            </p>
            <div className="space-y-4">
              {[
                "Detailed Planetary Positions",
                "Lagna & Moon Sign Analysis",
                "Dasha & Antardasha Periods",
                "Yog & Dosha Identification"
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
            <img 
              src="/kundli.png" 
              alt="Kundli Chart" 
              className="relative z-10 w-full h-full object-contain opacity-80"
            />
          </div>
        </div>

        {/* Call to Action */}
        <section className="text-center py-20 rounded-3xl bg-linear-to-b from-white/5 to-transparent border border-white/5">
          <h2 className="text-3xl font-display font-bold text-white mb-8">Ready to discover your destiny?</h2>
          <button className="btn-gold !px-12 !py-4 text-lg">
            Book a Consultation
          </button>
        </section>
      </div>
    </div>
  );
}
