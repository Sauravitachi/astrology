import Link from "next/link";

// Custom SVG Icons to avoid dependency issues
const IconHome = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);

const IconLock = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);

const IconShieldAlert = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
);

export default function Forbidden() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 blur-3xl bg-amber-500/10 rounded-full animate-pulse"></div>
        <div className="relative flex items-center justify-center">
          <h1 className="text-[10rem] md:text-[14rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-amber-200/50 to-transparent select-none opacity-20">
            403
          </h1>
          <IconLock className="absolute text-amber-500/80 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
        </div>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium mb-2">
          <IconShieldAlert />
          Celestial Entry Restricted
        </div>
        
        <h2 className="text-2xl md:text-3xl font-light text-slate-200">
          You have reached a protected quadrant.
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          This celestial path is reserved for authorized observers. Your current alignment 
          does not grant access to this sector of the AstroSphere.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-void font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] active:scale-95"
          >
            <IconHome />
            Return Home
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95"
          >
            Request Access
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-slate-500 uppercase tracking-widest font-medium opacity-50">
        <div className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></div>
        Observatory Security Protocol Active
      </div>
    </div>
  );
}
