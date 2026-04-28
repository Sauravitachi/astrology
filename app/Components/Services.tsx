"use client";
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const featuredServices = [
    {
      title: t('s1_title'),
      description: t('s1_desc'),
      details: t('s1_details'),
      slug: "kundli",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      title: t('s2_title'),
      description: t('s2_desc'),
      details: t('s2_details'),
      slug: "love",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      )
    },
    {
      title: t('s3_title'),
      description: t('s3_desc'),
      details: t('s3_details'),
      slug: "career",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    },
    {
      title: t('s4_title'),
      description: t('s4_desc'),
      details: t('s4_details'),
      slug: "business",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: t('s5_title'),
      description: t('s5_desc'),
      details: t('s5_details'),
      slug: "marriage",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      )
    },
    {
      title: t('s6_title'),
      description: t('s6_desc'),
      details: t('s6_details'),
      slug: "remedies",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    }
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {featuredServices.map((service, idx) => (
        <div key={service.title} className="glass-card p-6 md:p-8 rounded-3xl group hover:border-gold-500/40 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full border border-white/5 relative overflow-hidden">
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 bg-linear-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 group-hover:bg-gold-500/10 group-hover:text-gold-300 transition-all duration-500 relative z-10">
            {service.icon}
          </div>

          <div className="relative z-10 flex-grow">
            <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-gold-400 transition-colors">{service.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {service.description}
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-gold-500 mt-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span className="text-white/40 text-xs italic">{service.details}</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-auto">
            <Link
              href={`/services/${service.slug}`}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white uppercase tracking-widest hover:bg-gold-500 hover:text-cosmic-black hover:border-gold-500 transition-all duration-300 group/btn"
            >
              {t('get_started')} <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

