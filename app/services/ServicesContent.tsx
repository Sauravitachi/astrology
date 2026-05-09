"use client";
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import DetailedServices from '../Components/DetailedServices';

export default function ServicesContent() {
  const { t } = useLanguage();

  const primaryServices = [
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
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
          {t('sacred_offerings')}
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight text-white">
          {t('pro_services_title')} <span className="text-gradient-gold">{t('pro_services_span')}</span>
        </h1>
        <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
          {t('pro_services_desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {primaryServices.map((service, idx) => (
          <div key={service.title} className="glass-card p-10 rounded-3xl flex flex-col group hover:border-gold-500/40 transition-all duration-500 relative overflow-hidden">
             <div className="absolute inset-0 bg-linear-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gold-400 group-hover:scale-110 group-hover:text-gold-300 transition-all duration-500">
                {service.icon}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 border border-white/5 px-3 py-1 rounded-full">
                {t('zodiac_reading')}
              </div>
            </div>

            <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-gold-400 transition-colors relative z-10 text-white">{service.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-8 flex-grow relative z-10">
              {service.description}
            </p>

            <div className="space-y-3 mb-10 relative z-10">
              <div className="flex items-center gap-3 text-xs text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50"></span>
                <span className="italic">{service.details}</span>
              </div>
            </div>

            <Link href={`/services/${service.slug}`} className="relative z-10">
              <button className={`${idx % 2 === 0 ? 'btn-gold' : 'bg-white/5 border border-white/10 text-white hover:bg-gold-500 hover:text-cosmic-black'} w-full text-sm py-4 rounded-xl transition-all font-bold uppercase tracking-widest`}>
                {t('get_started')}
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            {t('specialized_guidance')}
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            Deep dive into the various branches of astrology and spiritual sciences for comprehensive life guidance.
          </p>
        </div>
        <DetailedServices />
      </div>

      <div className="mt-32 p-16 rounded-[3rem] bg-linear-to-br from-white/5 to-white/[0.02] border border-white/5 text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 blur-[120px] -z-10 group-hover:bg-gold-500/20 transition-all duration-700"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-celestial-500/10 blur-[120px] -z-10 group-hover:bg-celestial-500/20 transition-all duration-700"></div>

        <h2 className="text-4xl font-display font-bold mb-6 text-white">Have a Specific Concern?</h2>
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
