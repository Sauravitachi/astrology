import type { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "In-Depth Astrology Consultation | Personal Life Guidance | Sashtravani",
  description: "Experience a transformative personal session. Get holistic solutions for life's most complex questions and spiritual growth through expert astrological guidance.",
};

export default function ConsultationPage() {
  return (
    <div className="min-h-screen">
      <main className="pt-20 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden rounded-3xl glass-card border-gold-500/10 mb-16">
            <div className="absolute inset-0 z-[-1]">
              <div className="glow-orb w-[600px] h-[600px] top-[-300px] right-[-100px] opacity-10" style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}></div>
            </div>
            
            <div className="px-10 space-y-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-celestial-400/20 bg-celestial-400/5 text-celestial-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 animate-pulse">
                One-on-One Guidance
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white">
                In-Depth <span className="text-gradient-gold">Consultation</span>
              </h1>
              <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                Experience a transformative personal session. Our in-depth consultations provide holistic solutions for life's most complex questions and spiritual growth.
              </p>
            </div>
          </section>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
             <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 glass-card p-8 flex items-center justify-center lg:order-1">
              <div className="absolute inset-0 bg-celestial-500/5 animate-pulse"></div>
              <img 
                src="/api/image?type=consultation" 
                alt="Expert Consultation" 
                className="relative z-10 w-full h-full object-contain opacity-80"
              />
            </div>
            <div className="space-y-8 lg:order-2">
              <h2 className="text-4xl font-display font-bold text-white">Your Path to Clarity</h2>
              <p className="text-white/50 leading-relaxed text-lg">
                Sometimes you need more than just a quick answer. Our in-depth sessions dive deep into your soul's journey, helping you understand the underlying patterns and spiritual lessons of your current situation.
              </p>
              <div className="space-y-4">
                {[
                  "Personalized Spiritual Roadmap",
                  "Deep Soul Path Discovery",
                  "Remedial Solutions (Upayas)",
                  "Future Projection & Preparation"
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
            <h2 className="text-3xl font-display font-bold text-white mb-8">Take the first step towards a clearer, brighter future.</h2>
            <button className="btn-gold !px-12 !py-4 text-lg">
              Book Your Deep Dive Session
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}
