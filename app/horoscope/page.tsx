"use client";
import React from 'react';

const signs = [
  { name: 'Aries', date: 'Mar 21 - Apr 19', icon: '♈' },
  { name: 'Taurus', date: 'Apr 20 - May 20', icon: '♉' },
  { name: 'Gemini', date: 'May 21 - Jun 20', icon: '♊' },
  { name: 'Cancer', date: 'Jun 21 - Jul 22', icon: '♋' },
  { name: 'Leo', date: 'Jul 23 - Aug 22', icon: '♌' },
  { name: 'Virgo', date: 'Aug 23 - Sep 22', icon: '♍' },
  { name: 'Libra', date: 'Sep 23 - Oct 22', icon: '♎' },
  { name: 'Scorpio', date: 'Oct 23 - Nov 21', icon: '♏' },
  { name: 'Sagittarius', date: 'Nov 22 - Dec 21', icon: '♐' },
  { name: 'Capricorn', date: 'Dec 22 - Jan 19', icon: '♑' },
  { name: 'Aquarius', date: 'Jan 20 - Feb 18', icon: '♒' },
  { name: 'Pisces', date: 'Feb 19 - Mar 20', icon: '♓' },
];

export default function HoroscopePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
          Daily <span className="text-gradient-gold">Horoscope</span>
        </h1>
        <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
          The stars have spoken. Select your celestial avatar to unveil your cosmic forecast for today.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {signs.map((sign) => (
          <div key={sign.name} className="zodiac-card group relative">
            <div className="absolute top-4 right-4 text-white/5 text-4xl font-display group-hover:text-gold-500/10 transition-colors">{sign.icon}</div>
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">{sign.icon}</div>
            <h3 className="text-xl font-bold mb-1">{sign.name}</h3>
            <p className="text-white/30 text-xs uppercase tracking-widest font-medium mb-6">{sign.date}</p>
            <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
              Read Forecast
            </button>
          </div>
        ))}
      </div>

      <div className="mt-32 p-12 glass-card rounded-[2.5rem] border-white/5 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold-400/5 blur-[100px] -z-10"></div>
        <h2 className="text-3xl font-display font-bold mb-4">Want a Personalized Reading?</h2>
        <p className="text-white/30 mb-8 max-w-lg mx-auto">Get deep insights based on your exact birth time and location directly in your dashboard.</p>
        <button className="btn-celestial">Unlock Full Reading</button>
      </div>
    </div>
  );
}
