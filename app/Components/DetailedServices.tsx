"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function DetailedServices() {
  const { t } = useLanguage();

  const categories = [
    {
      id: "dosha",
      title: t('service_cat_dosha'),
      icon: "🕉️",
      color: "from-white/5 to-white/[0.02]",
      borderColor: "border-white/10",
      textColor: "text-gold-400",
      items: [
        t('dosha_kaalsarp'),
        t('dosha_mangal'),
        t('dosha_pitra'),
        t('dosha_shanti'),
        t('dosha_gemstone'),
        t('dosha_rituals')
      ]
    },
    {
      id: "love",
      title: t('service_cat_love'),
      icon: "💖",
      color: "from-white/5 to-white/[0.02]",
      borderColor: "border-white/10",
      textColor: "text-gold-400",
      items: [
        t('love_marriage'),
        t('love_matching'),
        t('love_compat'),
        t('love_divorce'),
        t('love_extra'),
        t('love_analysis')
      ]
    },
    {
      id: "specialized",
      title: t('service_cat_specialized'),
      icon: "✨",
      color: "from-white/5 to-white/[0.02]",
      borderColor: "border-white/10",
      textColor: "text-gold-400",
      items: [
        t('spec_palmistry'),
        t('spec_numerology'),
        t('spec_tarot'),
        t('spec_face'),
        t('spec_vaastu'),
        t('spec_name'),
        t('spec_muhurat'),
        t('spec_horoscope')
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {categories.map((cat) => (
        <div 
          key={cat.id} 
          className={`group relative p-8 rounded-[2.5rem] bg-linear-to-br ${cat.color} border ${cat.borderColor} backdrop-blur-sm hover:border-gold-500/30 hover:bg-white/10 transition-all duration-500 overflow-hidden`}
        >
          {/* Background Decoration */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl group-hover:bg-gold-500/10 transition-colors"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:bg-gold-500/10 group-hover:border-gold-500/20 transition-all">
              {cat.icon}
            </div>
            
            <h3 className={`text-2xl font-display font-bold mb-6 ${cat.textColor}`}>
              {cat.title}
            </h3>
            
            <ul className="space-y-4">
              {cat.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group/item">
                  <span className={`w-1.5 h-1.5 rounded-full bg-gold-500 opacity-20 group-hover/item:opacity-100 transition-opacity`}></span>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <button className={`w-full py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-cosmic-black hover:border-gold-500 transition-all`}>
                {t('consult_now')}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
