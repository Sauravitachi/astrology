"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
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
                Astro<span className="text-gradient-gold">Sphere</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Unlocking the cosmic secrets of your soul. Guided by stars, driven by intuition, we provide premium astrological insights for your spiritual journey.
            </p>
            <div className="flex gap-4">
              {['FB', 'TW', 'IG', 'LI'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs text-white/50 hover:border-gold-500 hover:text-gold-400 transition-all cursor-pointer bg-white/5">
                  {social}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Insights', href: '/insights' },
                { name: 'Contact', href: '/contact' }
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
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Our Expertise</h4>
            <ul className="space-y-4">
              {['Natal Charts', 'Love Compatibility', 'Tarot Reading', 'Palmistry', 'Cosmic Calendar'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-white/40 hover:text-gold-400 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Cosmic Newsletter</h4>
            <p className="text-white/40 text-sm">Stay aligned with the stars. Receive weekly horoscopes in your inbox.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Star-seeker's email" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500/50 text-white placeholder:text-white/20"
              />
              <button className="btn-gold py-3 text-sm w-full">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs">© 2026 AstroSphere. Crafted with celestial magic.</p>
          <div className="flex gap-8">
            <Link href="#" className="text-white/20 hover:text-white text-[10px] uppercase tracking-widest transition-colors font-bold">Privacy Policy</Link>
            <Link href="#" className="text-white/20 hover:text-white text-[10px] uppercase tracking-widest transition-colors font-bold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
