import Link from "next/link";

// Custom SVG Icons to avoid dependency issues
const IconHome = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
);

const IconMoveLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
);

const IconCompass = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
);

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full animate-pulse"></div>
        <h1 className="relative text-9xl md:text-[12rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 select-none">
          404
        </h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2 w-full">
          <p className="text-2xl md:text-3xl font-medium tracking-wide text-primary">
            Lost in the Cosmos
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        <h2 className="text-xl md:text-2xl font-light text-slate-300">
          The stars seem to be missing for these coordinates.
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          Even the most experienced navigators can lose their way in the vastness of the universe. 
          Let us guide you back to your cosmic path.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-void font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] active:scale-95"
          >
            <IconHome />
            Return Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95"
          >
            <IconMoveLeft />
            Go Back
          </button>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full">
        <Link href="/horoscope" className="group p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-primary/30">
          <IconCompass className="text-primary mb-3 group-hover:animate-spin-slow" />
          <h3 className="font-semibold mb-1 text-white text-left">Horoscopes</h3>
          <p className="text-sm text-slate-400 text-left">Check your daily alignment</p>
        </Link>
        <Link href="/services" className="group p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-primary/30">
          <div className="w-8 h-8 flex items-center justify-center text-primary mb-3 text-2xl group-hover:scale-110 transition-transform">✨</div>
          <h3 className="font-semibold mb-1 text-white text-left">Readings</h3>
          <p className="text-sm text-slate-400 text-left">Book a private consultation</p>
        </Link>
        <Link href="/about" className="group p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-primary/30">
          <div className="w-8 h-8 flex items-center justify-center text-primary mb-3 text-2xl group-hover:rotate-12 transition-transform">🔭</div>
          <h3 className="font-semibold mb-1 text-white text-left">The Temple</h3>
          <p className="text-sm text-slate-400 text-left">Learn about our heritage</p>
        </Link>
      </div>
    </div>
  );
}
