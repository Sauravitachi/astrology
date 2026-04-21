import Horoscopes from "./Horoscopes";
import Services from "./Services";

export default function Main() {
  
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

      <Horoscopes/>
        </div>
      </section>

      <section id="services" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-celestial-500/20 bg-celestial-500/5 text-celestial-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-celestial-500 animate-pulse"></span>
              Sacred Offerings
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white">
              Professional <span className="text-gradient-gold">Services</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">
              Explore our specialized astrological services designed to provide clarity, purpose, and spiritual growth on your life journey.
            </p>
          </div>

          <Services />

          <div className="text-center">
            <button className="btn-gold !px-12">
              View All Services
            </button>
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
              Astrology is a profound ancient wisdom that reveals the connection between the movements of celestial bodies and the patterns of our lives. We blend traditional Vedic insights with deep spiritual philosophy to provide a holistic view of your journey.
            </p>
            <p>
              Our mission is to bring this sacred knowledge to the modern world, combining celestial alignments with spiritual practices like Naam Simran and Seva to guide you toward inner peace and purposeful living.
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