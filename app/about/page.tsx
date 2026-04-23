import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About Acharya Ravi | Vedic Astrologer & Spiritual Guide | Sashtravani",
  description: "Learn about Acharya Ravi, a renowned Vedic astrologer with 25+ years of experience in helping people find clarity and purpose through ancient cosmic wisdom.",
};

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold-400">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ExpertiseCard = ({ title, desc }: { title: string, desc?: string }) => (
  <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-gold-500/30 transition-all group glass-card-hover">
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 shrink-0 group-hover:bg-gold-500 group-hover:text-cosmic-black transition-all">
        <CheckIcon />
      </div>
      <div>
        <h4 className="font-bold text-white mb-1 group-hover:text-gold-400 transition-colors">{title}</h4>
        {desc && <p className="text-white/40 text-sm leading-relaxed">{desc}</p>}
      </div>
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none -z-10">
        <div className="glow-orb w-[600px] h-[600px] top-[-300px] left-[-100px] opacity-10"></div>
        <div className="glow-orb w-[500px] h-[500px] bottom-[-200px] right-[-50px] opacity-10" style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-bold tracking-[0.3em] uppercase">
              The Guiding Light
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
              About <br />
              <span className="text-gradient-gold text-nowrap">Acharya Ravi</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed max-w-2xl font-light">
              A renowned astrology expert with deep knowledge of Vedic astrology, guiding individuals toward clarity, success, and spiritual balance.
            </p>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
              With years of experience in analyzing horoscopes and planetary influences, Acharya Ravi has helped countless people make informed life decisions through the ancient lens of cosmic wisdom.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="btn-gold !px-10 !py-4 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                Connect with Acharya Ji
              </Link>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gold-500/20 rounded-[40px] blur-2xl group-hover:bg-gold-500/30 transition duration-1000 animate-pulse-slow"></div>
              <div className="relative rounded-[32px] overflow-hidden border border-white/10 aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1515940175183-6798529cb860?q=80&w=1000&auto=format&fit=crop" 
                  alt="Acharya Ravi" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-cosmic-bg via-transparent to-transparent opacity-60"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-6 glass-card p-8 rounded-2xl border-gold-500/20 animate-float">
                <div className="text-4xl font-display font-bold text-gradient-gold">25+</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Years of Wisdom</div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="mb-32">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Areas of <span className="text-gradient-gold">Expertise</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">
              Acharya Ravi specializes in various dimensions of Vedic sciences to provide comprehensive life solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Vedic Astrology (Jyotish Shastra)", desc: "Deep analysis of ancient scriptures and planetary positions." },
              { title: "Horoscope (Kundli) Analysis", desc: "Detailed breakdown of your life path through birth charts." },
              { title: "Marriage & Compatibility", desc: "Expert Kundli Milan for successful and harmonious unions." },
              { title: "Career & Business Guidance", desc: "Strategic advice for professional growth and financial stability." },
              { title: "Health & Financial Predictions", desc: "Forecasting wellness and wealth trends in your cosmic cycle." },
              { title: "ग्रह दोष (Dosha) Analysis", desc: "Identifying and resolving Mangal, Kaal Sarp, and other Doshas." },
            ].map((item, idx) => (
              <ExpertiseCard key={idx} title={item.title} desc={item.desc} />
            ))}
          </div>
        </section>

        {/* Experience & Knowledge */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32 p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[100px] -z-10"></div>
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold text-white">Experience & <span className="text-gradient-gold">Knowledge</span></h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                With over <strong>25+ years of experience</strong>, Acharya Ravi has studied ancient astrological texts and applies traditional wisdom with modern understanding.
              </p>
              <p>
                His accurate predictions and practical remedies have earned trust and respect from clients across the globe. He believes in the synthesis of ancient Jyotish with modern psychological insights.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-1">5000+</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Charts Analyzed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-400 mb-1">20+</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Global Countries</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden glass-card p-1">
              <div className="w-full h-full rounded-[1.4rem] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop" 
                  alt="Ancient Wisdom" 
                  className="w-full h-full object-cover opacity-60 mix-blend-lighten"
                />
                <div className="absolute inset-0 bg-linear-to-t from-cosmic-bg via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="mb-32">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Services <span className="text-gradient-gold">Offered</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Personal Horoscope Reading",
              "Kundli Matching for Marriage",
              "Gemstone Consultation",
              "Vastu Guidance",
              "Muhurat Selection",
              "Online & In-Person Consultations"
            ].map((service, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-cosmic-black/40 backdrop-blur-sm border border-white/5 hover:border-gold-500/20 transition-all flex items-center gap-4 group">
                <div className="w-2 h-2 rounded-full bg-gold-500 group-hover:scale-150 transition-transform"></div>
                <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors">{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Approach & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 rounded-[2.5rem] glass-card border-gold-500/10 space-y-6 group">
            <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform">🎯</div>
            <h3 className="text-3xl font-display font-bold text-white">Our <span className="text-gradient-gold">Approach</span></h3>
            <p className="text-white/60 text-lg leading-relaxed">
              Acharya Ravi believes that astrology is not just about predicting the future but about empowering individuals to take the right actions. Their guidance is simple, practical, and focused on positive transformation.
            </p>
          </div>

          <div className="p-12 rounded-[2.5rem] glass-card border-celestial-500/10 space-y-6 group">
            <div className="w-16 h-16 rounded-2xl bg-celestial-500/10 flex items-center justify-center text-3xl group-hover:-rotate-12 transition-transform">🌟</div>
            <h3 className="text-3xl font-display font-bold text-white">Our <span className="text-gradient-gold">Mission</span></h3>
            <p className="text-white/60 text-lg leading-relaxed">
              To spread the authentic knowledge of astrology and help people overcome challenges, achieve success, and live a balanced, prosperous life.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

