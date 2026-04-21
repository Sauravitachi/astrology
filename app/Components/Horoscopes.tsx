export default function Horoscopes() {
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
    return(
        <>
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
        </>
    )
}