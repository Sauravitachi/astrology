"use client";
import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: "In-Depth Consultation",
    description: "A comprehensive session to analyze karmic patterns, planetary alignments, and spiritual timing to provide clarity on major life decisions.",
    features: ["Karmic Pattern Analysis", "Planetary Alignment Review", "Life Decision Guidance", "1-on-1 Spiritual Coaching"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
      </svg>
    )
  },
  {
    title: "Kundli Overview",
    description: "Analysis of birth charts to understand life paths, strengths, potential doshas, and future timing based on ancient Vedic wisdom.",
    features: ["Birth Chart Analysis", "Dosha Identification", "Timing of Events", "Strength & Weakness Mapping"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 1 10 10M12 22a10 10 0 0 1-10-10" />
        <path d="m16 8-8 8M8 8l8 8" />
      </svg>
    )
  },
  {
    title: "Family Overview",
    description: "A systemic approach to understanding family dynamics, healing misunderstandings, and restoring harmony through astrological insights.",
    features: ["Relationship Dynamics", "Healing Misunderstandings", "Harmonious Living", "Ancestral Patterns"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: "Career & Business",
    description: "Practical advice for professional growth, career direction, and strategic business decision-making guided by celestial transits.",
    features: ["Professional Growth", "Strategic Launches", "Business Decision Support", "Career Transitions"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    )
  },
  {
    title: "Birth Time Rectification",
    description: "Precise determination of your accurate birth time through past events and physical characteristics when records are uncertain.",
    features: ["Event Correlation", "Physical Attribute Mapping", "Precise Chart Recalculation", "Accurate Predictions"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  },
  {
    title: "Spiritual Growth",
    description: "Guidance on techniques for inner peace, including Naam Simran, Daan, and Seva for a more fulfilled and purposeful life.",
    features: ["Naam Simran Techniques", "Conscious Charity (Daan)", "Selfless Service (Seva)", "Inner Peace Foundations"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    )
  }
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
          Professional Guidance
        </div>
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
          Our Sacred <span className="text-gradient-gold">Services</span>
        </h1>
        <p className="text-white/40 text-lg max-w-2xl mx-auto">
          Experience profound clarity and spiritual direction through our specialized astrological consultations tailored to your unique journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={service.title} className="glass-card p-10 rounded-3xl flex flex-col group hover:border-gold-500/40 transition-all duration-500">
            <div className="flex justify-between items-start mb-8">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gold-400 group-hover:scale-110 group-hover:text-gold-300 transition-all duration-500">
                {service.icon}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 border border-white/5 px-3 py-1 rounded-full">
                Consultation
              </div>
            </div>

            <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-gold-400 transition-colors">{service.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-8 flex-grow">
              {service.description}
            </p>

            <ul className="space-y-4 mb-10">
              {service.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-xs text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50"></span>
                  {f}
                </li>
              ))}
            </ul>

            <button className={`${idx % 2 === 0 ? 'btn-gold' : 'btn-celestial'} w-full text-sm py-4`}>
              Inquire Now
            </button>
          </div>
        ))}
      </div>

      <div className="mt-32 p-16 rounded-[3rem] bg-linear-to-br from-white/5 to-white/[0.02] border border-white/5 text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 blur-[120px] -z-10 group-hover:bg-gold-500/20 transition-all duration-700"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-celestial-500/10 blur-[120px] -z-10 group-hover:bg-celestial-500/20 transition-all duration-700"></div>

        <h2 className="text-4xl font-display font-bold mb-6">Have a Specific Concern?</h2>
        <p className="text-white/40 max-w-xl mx-auto mb-10">
          We understand that life's challenges are unique. Contact us for a personalized discussion to determine the best path forward for your situation.
        </p>
        <Link href="/contact">
          <button className="btn-gold px-12">Contact Our Team</button>
        </Link>
      </div>
    </div>
  );
}
