"use client";
import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-deep-space">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden rounded-3xl glass-card border-gold-500/10 mb-16">
            <div className="absolute inset-0 z-[-1]">
              <div className="glow-orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" style={{ background: 'radial-gradient(circle, #fbbf24 0%, transparent 70%)' }}></div>
            </div>
            
            <div className="px-10 space-y-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 animate-pulse">
                Professional Success
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white">
                Career & <span className="text-gradient-gold">Business</span>
              </h1>
              <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                Navigate your professional journey with cosmic confidence. Our expert guidance helps you identify the right career path and optimal timing for business growth.
              </p>
            </div>
          </section>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold text-white">Unlock Professional Potential</h2>
              <p className="text-white/50 leading-relaxed text-lg">
                Whether you're looking for a career change, starting a new business venture, or seeking growth in your current role, astrology provides a strategic roadmap for professional excellence.
              </p>
              <div className="space-y-4">
                {[
                  "Career Path Identification",
                  "Business Success Timing (Mahurats)",
                  "Financial Growth Prospects",
                  "Leadership Potential Analysis"
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
                src="/api/image?type=career" 
                alt="Career Growth" 
                className="relative z-10 w-full h-full object-contain opacity-80"
              />
            </div>
          </div>

          {/* Call to Action */}
          <section className="text-center py-20 rounded-3xl bg-linear-to-b from-white/5 to-transparent border border-white/5">
            <h2 className="text-3xl font-display font-bold text-white mb-8">Achieve your professional goals with celestial clarity.</h2>
            <button className="btn-gold !px-12 !py-4 text-lg">
              Get Professional Guidance
            </button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
