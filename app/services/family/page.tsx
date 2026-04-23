import type { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "Family Astrology & Relationship Harmony | Sashtravani",
  description: "Foster harmony and understanding within your home. Expert Vedic astrology for family conflict resolution and ancestral pattern analysis.",
};

export default function FamilyPage() {
  return (
    <div className="min-h-screen">
      <main className="pt-20 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden rounded-3xl glass-card border-gold-500/10 mb-16">
            <div className="absolute inset-0 z-[-1]">
              <div className="glow-orb w-[600px] h-[600px] bottom-[-300px] right-[-100px] opacity-10" style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }}></div>
            </div>
            
            <div className="px-10 space-y-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-celestial-500/20 bg-celestial-500/5 text-celestial-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 animate-pulse">
                Family & Relationships
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white">
                Family <span className="text-gradient-gold">Overview</span>
              </h1>
              <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                Foster harmony and understanding within your home. Our family astrological consultation helps resolve conflicts and strengthens the bonds that matter most.
              </p>
            </div>
          </section>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
             <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 glass-card p-8 flex items-center justify-center lg:order-1">
              <div className="absolute inset-0 bg-celestial-500/5 animate-pulse"></div>
              <img 
                src="/api/image?type=family" 
                alt="Family Harmony" 
                className="relative z-10 w-full h-full object-contain opacity-80"
              />
            </div>
            <div className="space-y-8 lg:order-2">
              <h2 className="text-4xl font-display font-bold text-white">Nurture Your Bonds</h2>
              <p className="text-white/50 leading-relaxed text-lg">
                Family dynamics can be complex. Astrology provides a unique perspective on how different personalities interact and how celestial cycles influence the atmosphere of your home.
              </p>
              <div className="space-y-4">
                {[
                  "Compatibility Analysis",
                  "Conflict Resolution Strategies",
                  "Parent-Child Relationship Guidance",
                  "Ancestral Karma & Lineage"
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
            <h2 className="text-3xl font-display font-bold text-white mb-8">Bring peace and joy to your family life.</h2>
            <button className="btn-gold !px-12 !py-4 text-lg">
              Schedule Family Consultation
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}
