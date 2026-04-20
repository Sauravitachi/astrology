export default function Main() {
  const zodiacSigns = [
    { name: 'Aries', date: 'Mar 21 - Apr 19', icon: '♈' },
    { name: 'Taurus', date: 'Apr 20 - May 20', icon: '♉' },
    { name: 'Gemini', date: 'May 21 - Jun 20', icon: '♊' },
    { name: 'Cancer', date: 'Jun 21 - Jul 22', icon: '♋' },
    { name: 'Leo', date: 'Jul 23 - Aug 22', icon: '♌' },
    { name: 'Virgo', date: 'Aug 23 - Sep 22', icon: '♍' },
    { name: 'Libra', date: 'Sep 23 - Oct 22', icon: '♎' },
    { name: 'Scorpio', date: 'Oct 23 - Nov 21', icon: '♏' },
    { name: 'Sagittarius', date: 'Nov 22 - Dec 21', icon: '♐' },
    { name: 'Capricorn', date: 'Dec 22 - Jan 19', icon: '♑' },
    { name: 'Aquarius', date: 'Jan 20 - Feb 18', icon: '♒' },
    { name: 'Pisces', date: 'Feb 19 - Mar 20', icon: '♓' },
  ];
  return (
    <main>
      <section className="relative pt-10 pb-20 px-6 lg:pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white tracking-wide">What's Your Sign?</h3>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1] text-white tracking-tight">
                Read Your Daily <br />
                <span className="text-gradient-gold">Horoscope</span> Today
              </h1>
            </div>
            <p className="text-white/60 max-w-xl leading-relaxed text-sm">
              Unlock the secrets of the cosmos and discover your true destiny. Our expert astrologers provide personalized insights to guide you through your journey of self-discovery and growth.
            </p>
            <div className="pt-4">
              <button className="btn-gold">
                Read More
              </button>
            </div>
          </div>

          <div className="flex-1 relative flex items-center justify-center">
            <div className="relative w-full max-w-xl aspect-square">
              <div className="relative z-10 w-full h-full animate-float">
                <style dangerouslySetInnerHTML={{
                  __html: `
                    @keyframes rotate-360 {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                  `}} />
                <img
                  src="/api/image?type=wheel"
                  alt="Zodiac Wheel"
                  className="w-full h-full object-contain"
                  style={{ animation: 'rotate-360 20s linear infinite' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="horoscope" className="relative py-32 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="glow-orb w-[600px] h-[600px] top-[-300px] left-[-100px] opacity-10"></div>
          <div className="glow-orb w-[500px] h-[500px] bottom-[-200px] right-[-50px] opacity-10" style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto space-y-24 relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
              Celestial Guidance
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
              Daily <span className="text-gradient-gold">Horoscopes</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">
              Connect with the cosmic energies of the day. Choose your sign to reveal your personalized astrological reading and planetary alignments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {zodiacSigns.map((sign, index) => (
              <div
                key={sign.name}
                className="zodiac-card group hover:scale-[1.02] active:scale-95 duration-500"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10 group-hover:border-gold-500/50 transition-colors duration-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10 group-hover:border-gold-500/50 transition-colors duration-500"></div>

                {/* Floating particles on hover - using deterministic positions to avoid hydration mismatch */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-gold-400/40 rounded-full animate-float"
                      style={{
                        top: `${((i + 1) * (index + 1) * 31) % 100}%`,
                        left: `${((i + 1) * (index + 1) * 37) % 100}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${3 + i}s`
                      }}
                    ></div>
                  ))}
                </div>

                <div className="relative mb-8 pt-4">
                  <div className="w-24 h-24 mx-auto flex items-center justify-center relative">
                    {/* Rotating rings */}
                    <div className="absolute inset-0 border border-gold-500/10 rounded-full group-hover:border-gold-500/30 group-hover:scale-125 transition-all duration-700"></div>
                    <div className="absolute inset-[-10px] border border-dashed border-white/5 rounded-full animate-spin-slow-zodiac opacity-30 group-hover:opacity-60"></div>

                    <span className="text-6xl group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 relative z-20">
                      {sign.icon}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 relative z-10">
                  <h3 className="font-display font-bold text-2xl tracking-wider text-white group-hover:text-gold-400 transition-colors">
                    {sign.name}
                  </h3>
                  <p className="text-xs text-white/30 font-medium tracking-[0.2em] group-hover:text-gold-500/60 transition-colors">
                    {sign.date}
                  </p>
                </div>

                {/* "Explore" link that appears on hover */}
                <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500">
                    Read Destiny →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 z-[-1]">
          <div className="absolute inset-0 bg-cosmic-bg/50"></div>
          {/* Abstract organic shapes */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-600/10 blur-[150px] rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-celestial-600/10 blur-[150px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight">
            Ancient Wisdom <br />
            <span className="text-gradient-gold">Modern Guidance</span>
          </h2>
          <div className="space-y-8 text-white/60 leading-relaxed text-lg font-light">
            <p>
              Astrology is a profound ancient wisdom that reveals the connection between the movements of celestial bodies and the patterns of our lives. By understanding these cosmic influences, we can navigate challenges with clarity and embrace opportunities with confidence.
            </p>
            <p>
              Our mission is to bring this ancient knowledge to the modern world, providing you with the tools to explore your unique birth chart, daily horoscopes, and celestial alignments that shape your path forward.
            </p>
          </div>
          <div className="pt-8">
            <button className="btn-gold !px-12 !py-4 text-lg">
              Explore Your Fate
            </button>
          </div>

          <div className="pt-24 flex justify-center">
            <div className="w-12 h-12 rounded-full border border-gold-500/20 flex items-center justify-center animate-bounce">
              <span className="text-gold-500">↓</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}