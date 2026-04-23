import type { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "Contact Acharya Ravi | Book Your Astrology Consultation | Sashtravani",
  description: "Connect with Acharya Ravi for personalized astrology consultations. Reach out for guidance on career, love, finance, and spiritual growth.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
          Connect with the <span className="text-gradient-gold">Universe</span>
        </h1>
        <p className="text-white/40 text-lg max-w-2xl mx-auto">
          Have a question for our sages? Reach out and we'll reply within one full lunar cycle.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="glass-card p-10 md:p-12 rounded-[2.5rem] border-white/10 shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Star-seeker"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-gold-500/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">Zodiac Sign</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white/50 focus:outline-none focus:border-gold-500/50 transition-all appearance-none cursor-pointer">
                  <option>Select Sign</option>
                  <option>Aries</option>
                  <option>Taurus</option>
                  <option>Gemini</option>
                  {/* ... more signs */}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">Email Address</label>
              <input 
                type="email" 
                placeholder="email@cosmos.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-gold-500/50 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">How can we guide you?</label>
              <textarea 
                rows={5}
                placeholder="Share your cosmic inquiry..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-gold-500/50 transition-all resize-none"
              ></textarea>
            </div>

            <button className="btn-gold w-full py-5 rounded-2xl text-lg shadow-2xl hover:shadow-gold-500/20">
              Transmit Message
            </button>
          </form>
        </div>

        {/* Info & Map */}
        <div className="flex flex-col gap-12">
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Celestial HQ</h3>
              <div className="space-y-6">
                {[
                  { icon: '📍', label: 'Address', detail: '777 Nebula Way, Star City, Cosmic Orbit 88' },
                  { icon: '📞', label: 'Phone', detail: '+1 (555) ASTRO-99' },
                  { icon: '✉️', label: 'Email', detail: 'oracle@astrosphere.io' },
                  { icon: '🕰️', label: 'Hours', detail: '24/7 (Guided by Lunar Cycles)' }
                ].map((item) => (
                  <div key={item.label} className="flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/30 uppercase tracking-tighter">{item.label}</div>
                      <div className="text-white/80 font-medium">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-64 md:h-80 rounded-[2.5rem] overflow-hidden glass-card p-1">
               <div className="w-full h-full rounded-[2.3rem] overflow-hidden bg-void relative">
                  <img 
                    src="/api/image?type=map" 
                    alt="Map" 
                    className="w-full h-full object-cover opacity-40 grayscale contrast-125"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-gold-400 rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-gold-500 rounded-full absolute"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
