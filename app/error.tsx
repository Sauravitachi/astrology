"use client";

import { useEffect } from "react";
import Link from "next/link";


const IconHome = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);

const IconRefresh = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.84.83 6.7 2.22L21 8"/><path d="M21 3v5h-5"/></svg>
);

const IconAlert = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
);

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error("Cosmic Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="relative mb-12">
        <div className="absolute inset-0 blur-[100px] bg-red-600/10 rounded-full animate-pulse-slow"></div>
        
        <div className="relative">
          <div className="w-32 h-32 md:w-48 md:h-48 border-2 border-white/5 rounded-full flex items-center justify-center animate-spin-slow">
             <div className="w-4 h-4 bg-primary rounded-full absolute -top-2 left-1/2 -translate-x-1/2"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <IconAlert className="text-primary animate-bounce-slow" />
          </div>
          <h1 className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-5xl md:text-7xl font-bold text-white/10 select-none">
            500
          </h1>
        </div>
      </div>

      <div className="max-w-xl mx-auto space-y-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-white">
          The Stars are Realigning...
        </h2>
        
        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          A cosmic disturbance has interrupted your journey through the AstroSphere. 
          The heavens are currently in flux, but this usually passes quickly.
        </p>

        {error.digest && (
          <div className="inline-block px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-slate-500 font-mono">
            COSMIC_DIGEST: {error.digest}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => unstable_retry()}
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-void font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] active:scale-95 group"
          >
            <IconRefresh className="group-hover:rotate-180 transition-transform duration-500" />
            Retry Alignment
          </button>
          
          <Link
            href="/"
            className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95"
          >
            <IconHome />
            Return Home
          </Link>
        </div>
        
        <p className="text-xs text-slate-500 italic mt-8">
          If this persist, the celestial bodies may require more time to reach equilibrium.
        </p>
      </div>
    </div>
  );
}
