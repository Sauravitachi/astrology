"use client";
import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gold-500/5 -z-10"></div>
      <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 rounded-[3rem] border-white/10 text-center relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-void border border-gold-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-2xl">
          ✉️
        </div>
        
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Join the <span className="text-gradient-gold">Cosmic Circle</span>
        </h2>
        <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto">
          Get weekly astrological insights, moon rituals, and celestial guidance delivered straight to your inbox.
        </p>

        {status === 'success' ? (
          <div className="animate-in fade-in zoom-in duration-500">
            <div className="text-gold-400 font-bold text-xl mb-2">Welcome to the Circle! 🌟</div>
            <p className="text-white/40">Check your inbox for your first celestial guide.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold-500/50 transition-all"
            />
            <button
              disabled={status === 'loading'}
              className="btn-gold !px-8 py-4 rounded-2xl font-bold disabled:opacity-50"
            >
              {status === 'loading' ? 'Joining...' : 'Subscribe'}
            </button>
          </form>
        )}
        
        <p className="mt-8 text-[10px] text-white/20 uppercase tracking-widest">
          No spam. Only cosmic wisdom. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
