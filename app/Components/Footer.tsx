"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-white/5 pt-20 pb-10 px-6 bg-[#030014]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-gold-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-cosmic-black p-1.5 rounded-full border border-gold-500/20">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold-400">
                    <path d="M12 2L15 9H22L16.5 14L18.5 21L12 17L5.5 21L7.5 14L2 9H9L12 2Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-tight">
                Sashtra<span className="text-gradient-gold">vani</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              {t('footer_desc')}
            </p>
            <div className="flex gap-4">
              {[
                { name: 'Facebook', id: 'FB' },
                { name: 'Twitter', id: 'TW' },
                { name: 'Instagram', id: 'IG' },
                { name: 'LinkedIn', id: 'LI' }
              ].map((social) => (
                <div key={social.id} aria-label={social.name} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs text-white/50 hover:border-gold-500 hover:text-gold-400 transition-all cursor-pointer bg-white/5">
                  {social.id}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">{t('quick_links')}</h4>
            <ul className="space-y-4">
              {[
                { name: t('home'), href: '/' },
                { name: t('about'), href: '/about' },
                { name: t('services'), href: '/services' },               
                { name: t('contact'), href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/40 hover:text-gold-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-gold-400 transition-all"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">{t('our_services')}</h4>
            <ul className="space-y-4">
              {[t('kundli_analysis'), t('love_relationship'), t('career_job'), t('marriage_matching'), t('remedies')].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-white/40 hover:text-gold-400 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">{t('connect_with_us')}</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/917986006557" className="text-white/40 hover:text-gold-400 text-sm transition-colors flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500 transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 group-hover:text-white"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <span>WhatsApp: +91 7986006557</span>
                </a>
              </li>
              <li className="text-white/40 text-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <span>sashtravani@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 pb-8 border-t border-white/5">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">
            <p className="text-white/30 text-xs leading-relaxed text-center italic">
              <strong>Disclaimer:</strong> Astrology is for guidance purposes only. It is not a substitute for professional medical, legal, or financial advice. We do not guarantee 100% accuracy of predictions as destiny can be influenced by karma and free will.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex flex-col gap-4 items-center md:items-start">
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{t('easy_payment')}</span>
              <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <div className="bg-white/10 px-3 py-1 rounded-md border border-white/10 text-[10px] font-bold">UPI</div>
                <div className="bg-white/10 px-3 py-1 rounded-md border border-white/10 text-[10px] font-bold">GPAY</div>
                <div className="bg-white/10 px-3 py-1 rounded-md border border-white/10 text-[10px] font-bold">PAYTM</div>
                <div className="bg-white/10 px-3 py-1 rounded-md border border-white/10 text-[10px] font-bold">SSL SECURE</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gold-500/5 border border-gold-500/10 px-6 py-3 rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">100% Privacy Protected</div>
                <div className="text-white/40 text-[10px]">Your data is never shared with anyone.</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/20 text-xs">© 2026 Sashtravani. {t('all_rights_reserved')}.</p>
            <div className="flex gap-8">
              <Link href="#" className="text-white/20 hover:text-white text-[10px] uppercase tracking-widest transition-colors font-bold">{t('privacy_policy')}</Link>
              <Link href="#" className="text-white/20 hover:text-white text-[10px] uppercase tracking-widest transition-colors font-bold">{t('terms_service')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
