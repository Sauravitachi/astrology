"use client";
import React from 'react';
import Link from 'next/link';

const featuredServices = [
  {
    title: "In-Depth Consultation",
    description: "Analyze karmic patterns and planetary alignments for profound life clarity.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
      </svg>
    )
  },
  {
    title: "Kundli Overview",
    description: "Understand your life path, strengths, and future timing through Vedic wisdom.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m16 8-8 8M8 8l8 8" />
      </svg>
    )
  },
  {
    title: "Career & Business",
    description: "Strategic guidance for professional growth and business decision-making.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featuredServices.map((service, idx) => (
        <div key={service.title} className="glass-card p-8 rounded-3xl group hover:border-gold-500/40 transition-all duration-500 hover:-translate-y-2">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 group-hover:text-gold-300 transition-all duration-500">
            {service.icon}
          </div>
          <h3 className="text-xl font-display font-bold mb-3 group-hover:text-gold-400 transition-colors">{service.title}</h3>
          <p className="text-white/40 text-sm leading-relaxed mb-6">
            {service.description}
          </p>
          <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold text-gold-500 uppercase tracking-widest hover:gap-3 transition-all">
            Learn More <span>→</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
