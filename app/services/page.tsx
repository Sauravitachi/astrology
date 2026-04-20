"use client";
import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: "Natal Chart Analysis",
    description: "Discover your soul's blueprint. A comprehensive reading of the planetary alignments at the exact moment of your birth.",
    price: "$99",
    features: ["Personalized PDF Report", "Live Video Consultation", "12-Month Transit Forecast"]
  },
  {
    title: "Love & Partnership",
    description: "Explore the cosmic synergy between two souls. We analyze synastry and composite charts to reveal your path together.",
    price: "$129",
    features: ["Relationship Dynamics", "Communication Style", "Future Growth Potential"]
  },
  {
    title: "Vedic Astrology",
    description: "Ancient Indian wisdom for modern challenges. Focusing on Karma, Dharma, and the timing of major life events.",
    price: "$149",
    features: ["Dasha Period Analysis", "Remedial Measures", "Nadi Astrology Insights"]
  },
  {
    title: "Daily Cosmic Guidance",
    description: "Align your daily actions with lunar cycles and planetary transits. Never miss a favorable celestial window again.",
    price: "$29/mo",
    features: ["Weekly Transit Audio", "Personalized Calendar", "Community Access"]
  },
  {
    title: "Business Astrology",
    description: "The stars can guide your corporate destiny. Choose the best dates for launches, contracts, and expansion.",
    price: "$299",
    features: ["Electional Chart", "Market Trends", "Team Compatibility"]
  },
  {
    title: "Tarot & Intuitive",
    description: "Direct answers to your most pressing questions through the mystical symbolism of the Tarot.",
    price: "$59",
    features: ["10-Card Spread", "Audio Recording", "Clarifying Questions"]
  }
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
          Celestial <span className="text-gradient-gold">Services</span>
        </h1>
        <p className="text-white/40 text-lg max-w-2xl mx-auto">
          Choose your path to enlightenment. Our services are crafted to provide clarity, purpose, and spiritual growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={service.title} className="glass-card p-10 rounded-3xl flex flex-col group hover:border-gold-500/40 transition-all duration-500">
            <div className="flex justify-between items-start mb-8">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gold-400 group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-2xl font-bold text-white/90">{service.price}</div>
            </div>
            
            <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-8 flex-grow">
              {service.description}
            </p>

            <ul className="space-y-4 mb-10">
              {service.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-xs text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                  {f}
                </li>
              ))}
            </ul>

            <button className={`${idx % 2 === 0 ? 'btn-celestial' : 'btn-gold'} w-full text-sm py-4`}>
              Book Session
            </button>
          </div>
        ))}
      </div>

      <div className="mt-32 p-16 rounded-[3rem] bg-linear-to-br from-white/5 to-white/[0.02] border border-white/5 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-celestial-500/10 blur-[120px] -z-10"></div>
        <h2 className="text-4xl font-display font-bold mb-6">Need a Custom Reading?</h2>
        <p className="text-white/40 max-w-xl mx-auto mb-10">
          We offer bespoke consultations for unique spiritual journeys. Contact us to design a personalized experience.
        </p>
        <button className="btn-gold px-12">Message Us</button>
      </div>
    </div>
  );
}
