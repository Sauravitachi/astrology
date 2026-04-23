"use client";
import React from 'react';
import Horoscopes from '../Components/Horoscopes';

export default function HoroscopePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
          Celestial Updates
        </div>
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
          Daily <span className="text-gradient-gold">Horoscope</span>
        </h1>
        <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
          Connect with the cosmic energies of the day. Our expert-guided daily horoscopes provide you with the clarity needed to navigate your destiny.
        </p>
      </div>

      <Horoscopes />

      <div className="mt-32 p-12 glass-card rounded-[2.5rem] border-white/5 text-center relative overflow-hidden group">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold-400/10 blur-[100px] -z-10 group-hover:bg-gold-500/20 transition-all duration-700"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-celestial-500/10 blur-[100px] -z-10 group-hover:bg-celestial-500/20 transition-all duration-700"></div>

        <h2 className="text-3xl font-display font-bold mb-4">Want a Deeply Personalized Reading?</h2>
        <p className="text-white/30 mb-8 max-w-lg mx-auto leading-relaxed">
          While daily horoscopes provide general guidance, your unique birth chart holds the full map of your life. Unlock precise insights tailored to your exact moment of birth.
        </p>
        <button className="btn-gold !px-12">Book Expert Consultation</button>
      </div>
    </div>
  );
}

