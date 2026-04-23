import type { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "Business & Financial Astrology | Strategic Growth Guidance | Sashtravani",
  description: "Scale your business with celestial strategy. Expert Vedic astrology for business naming, launch dates, and financial risk assessment.",
};

export default function BusinessPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden rounded-3xl glass-card border-gold-500/10 mb-16">
          <div className="absolute inset-0 z-[-1]">
            <div className="glow-orb w-[500px] h-[500px] top-0 right-0 opacity-10" style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }}></div>
          </div>
          
          <div className="px-10 space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Strategic Prosperity
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white">
              Business & <span className="text-gradient-gold">Finance</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Empower your ventures with strategic astrological insights. We help you choose the right time for launches, investments, and expansion.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 glass-card p-8 flex items-center justify-center lg:order-2">
            <div className="absolute inset-0 bg-gold-500/5 animate-pulse"></div>
            <img 
              src="/business.png" 
              alt="Business Prosperity" 
              className="relative z-10 w-full h-full object-contain opacity-80"
            />
          </div>
          <div className="space-y-8 lg:order-1">
            <h2 className="text-4xl font-display font-bold text-white">Strategic Financial Growth</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              Success in business is often a matter of timing and alignment. Our expert analysis helps you mitigate risks and capitalize on favorable planetary transits for wealth creation.
            </p>
            <div className="space-y-4">
              {[
                "Business Name Numerology",
                "Auspicious Launch Dates (Mahurats)",
                "Financial Risk Assessment",
                "Partnership Compatibility Analysis"
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
          <h2 className="text-3xl font-display font-bold text-white mb-8">Scale your business with celestial strategy.</h2>
          <button className="btn-gold !px-12 !py-4 text-lg">
            Consult for Business
          </button>
        </section>
      </div>
    </div>
  );
}
