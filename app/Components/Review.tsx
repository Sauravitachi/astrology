"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Review() {
    const { t } = useLanguage();
    
    const reviews = [
      { name: "Rahul", text: t('test1_text'), role: "Mumbai", rating: 5, initial: "R" },
      { name: "Priya", text: t('test2_text'), role: "Delhi", rating: 5, initial: "P" },
      { name: "Amit", text: t('test3_text'), role: "Bangalore", rating: 5, initial: "A" },
      { name: "Suresh", text: t('test1_text'), role: "Chennai", rating: 5, initial: "S" },
      { name: "Meera", text: t('test2_text'), role: "Pune", rating: 5, initial: "M" },
      { name: "Kiran", text: t('test3_text'), role: "Hyderabad", rating: 5, initial: "K" }
    ];

    return (
        <section className="relative py-24 lg:py-32 px-6 overflow-hidden bg-black">
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                animation: marquee 40s linear infinite;
              }
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            `
          }} />

          {/* Background Decorative Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="text-[20vw] font-black text-white/[0.02] leading-none tracking-tighter uppercase translate-y-20">
              Trusted
            </span>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 mb-20 text-center space-y-4">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight">
              People Who <span className="text-gradient-gold">Trusted Us</span>
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full opacity-50"></div>
          </div>

          {/* Marquee Container */}
          <div className="relative flex overflow-hidden group">
            <div className="flex gap-8 animate-marquee whitespace-nowrap py-4">
              {/* Double the reviews for seamless loop */}
              {[...reviews, ...reviews].map((rev, i) => (
                <div key={i} className="inline-block w-[350px] md:w-[450px] whitespace-normal group/card relative p-8 md:p-10 rounded-[2rem] bg-[#0c0c0c] border border-white/5 hover:border-gold-500/30 transition-all duration-500 flex flex-col h-full">
                  
                  {/* Review Text */}
                  <div className="flex-grow min-h-[120px]">
                    <p className="text-white/70 text-base leading-relaxed italic mb-8">
                      "{rev.text}"
                    </p>
                  </div>

                  {/* User Info & Rating */}
                  <div className="pt-8 border-t border-white/5 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center font-bold text-white border border-white/10 group-hover/card:border-gold-500/50 transition-colors">
                          {rev.initial}
                        </div>
                        <div>
                          <div className="text-white font-bold text-sm">{rev.name}</div>
                          <div className="flex items-center gap-2 bg-white/5 px-2 py-0.5 rounded-full mt-1 border border-white/5">
                            <span className="text-[#4285F4] font-bold text-[8px]">G</span>
                            <span className="text-white/40 text-[8px] font-medium uppercase tracking-wider">Verified Review</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-0.5 text-gold-500">
                        {[...Array(rev.rating)].map((_, idx) => (
                          <span key={idx} className="text-xs">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Faded Edges Overlay */}
            <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-black to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-black to-transparent z-20 pointer-events-none"></div>
          </div>
        </section>       
    )
}