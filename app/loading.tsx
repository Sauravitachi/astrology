import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-void z-[100]">
      <div className="relative">
        {/* Pulsing Outer Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-gold-500/20 animate-ping"></div>
        
        {/* Spinning Zodiac Ring */}
        <div className="w-24 h-24 rounded-full border-t-2 border-l-2 border-gold-500 animate-spin"></div>
        
        {/* Inner Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-gold-400 rounded-full blur-sm animate-pulse"></div>
        </div>
        
        <p className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-gold-400/60 text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">
          Reading the stars...
        </p>
      </div>
    </div>
  );
}
