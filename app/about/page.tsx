"use client";
import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <section className="text-center mb-32 relative">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-gold-500/10 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
          Our Journey <br />
          <span className="text-gradient-gold">Beyond the Stars</span>
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
          Founded in 2020, AstroSphere was born from a desire to bridge the ancient wisdom of celestial mechanics with the precision of modern data science.
        </p>
      </section>

      {/* Philosophy Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden glass-card p-1">
             <div className="w-full h-full rounded-[1.4rem] overflow-hidden relative">
                <img 
                  src="/api/image?type=about_hero" 
                  alt="Celestial Wisdom" 
                  className="w-full h-full object-cover opacity-60 mix-blend-lighten"
                />
                <div className="absolute inset-0 bg-linear-to-t from-void via-transparent to-transparent"></div>
             </div>
          </div>
          {/* Floating Stats */}
          <div className="absolute -bottom-10 -right-10 glass-card p-8 rounded-2xl border-gold-500/20 animate-float">
            <div className="text-4xl font-display font-bold text-gradient-gold">15+</div>
            <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Years of Wisdom</div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-display font-bold">Bridging Two Worlds</h2>
            <p className="text-white/50 leading-relaxed">
              We believe that the universe isn't just a collection of random events, but a perfectly synchronised symphony. Our mission is to help you find your unique rhythm in this cosmic dance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Authenticity', desc: 'Real readings by real masters.' },
              { title: 'Accuracy', desc: 'Precision in every calculation.' },
              { title: 'Privacy', desc: 'Your secrets are safe with stars.' },
              { title: 'Guidance', desc: 'Support on every spiritual step.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-gold-500/30 transition-all group">
                <h4 className="font-bold text-gold-400 mb-2 group-hover:translate-x-1 transition-transform">{item.title}</h4>
                <p className="text-white/40 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="text-center">
        <h2 className="text-4xl font-display font-bold mb-16">Meet Our <span className="text-gradient-gold">Master Sages</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Dr. Orion Vance', role: 'Chief Astrologer', img: 'sage1' },
            { name: 'Selene Moon', role: 'Tarot Master', img: 'sage2' },
            { name: 'Atlas Thorne', role: 'Natal Analyst', img: 'sage3' },
          ].map((sage) => (
            <div key={sage.name} className="zodiac-card group">
              <div className="w-24 h-24 mx-auto rounded-full bg-white/5 border border-white/10 mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gold-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${sage.img}`} alt={sage.name} className="w-full h-full" />
              </div>
              <h4 className="text-xl font-bold mb-1">{sage.name}</h4>
              <p className="text-gold-500/60 text-sm font-medium mb-4 uppercase tracking-tighter">{sage.role}</p>
              <div className="flex justify-center gap-3">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] hover:border-gold-500 transition-all cursor-pointer">IN</div>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] hover:border-gold-500 transition-all cursor-pointer">TW</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
