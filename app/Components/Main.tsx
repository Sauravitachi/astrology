import Link from "next/link";
import Horoscopes from "./Horoscopes";
import Services from "./Services";

export default function Main() {

  return (
    <main>
      <section className="relative pt-10 pb-16 px-6 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 animate-in fade-in slide-in-from-left-10 duration-1000 text-center lg:text-left">
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-gold-400 tracking-wide">Personalized Celestial Insights</h3>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] text-white tracking-tight">
                Apni Kundli Ka Sach Jaanein. <span className="text-gradient-gold lg:text-nowrap">Unlock Your Destiny</span> with India's Most Trusted Astrologers
              </h1>
            </div>
            <p className="text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed text-base md:text-lg pt-4">
              Get accurate predictions, deep Kundli analysis, and simple, effective remedies to overcome obstacles in Love, Career, and Marriage. 100% Confidential. 100% Authentic.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="btn-gold w-full sm:w-auto !px-8 !py-4 text-base shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                Get Your Free Kundli
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-base hover:bg-white/10 transition-all">
                Consult Expert Astrologer
              </button>
            </div>

            {/* Benefits Highlight */}
            <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { label: "Top 1% Verified Experts", icon: "✨" },
                { label: "100% Private", icon: "🔒" },
                { label: "No Fear-Mongering", icon: "🕊️" }
              ].map((benefit) => (
                <div key={benefit.label} className="flex items-center gap-2 md:gap-3 justify-center lg:justify-start">
                  <span className="text-lg md:text-xl">{benefit.icon}</span>
                  <span className="text-xs md:text-sm font-medium text-white/80">{benefit.label}</span>
                </div>
              ))}
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
                <Link href="/horoscope" className="cursor-pointer">
                  <img
                    src="/zodiaco.png"
                    alt="Zodiac Wheel"
                    className="w-full h-full object-contain"
                    style={{ animation: 'rotate-360 20s linear infinite' }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="horoscope" className="relative py-20 lg:py-32 px-6 overflow-hidden">
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
            <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tight">
              Daily <span className="text-gradient-gold">Horoscopes</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Connect with the cosmic energies of the day. Choose your sign to reveal your personalized astrological reading and planetary alignments.
            </p>
          </div>

          <Horoscopes />
        </div>
      </section>

      <section id="services" className="relative py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-celestial-500/20 bg-celestial-500/5 text-celestial-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-celestial-500 animate-pulse"></span>
              Sacred Offerings
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tight text-white">
              Professional <span className="text-gradient-gold">Services</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Explore our specialized astrological services designed to provide clarity, purpose, and spiritual growth on your life journey.
            </p>
          </div>

          <Services />

          <div className="text-center">
            <Link href="/services">
              <button className="btn-gold !px-12">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="relative py-20 lg:py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gold-500/20 rounded-[40px] blur-2xl group-hover:bg-gold-500/30 transition duration-1000"></div>
              <img
                src="https://images.unsplash.com/photo-1515940175183-6798529cb860?q=80&w=1000&auto=format&fit=crop"
                alt="Astrologer"
                className="relative rounded-[32px] w-full object-cover aspect-[4/5] border border-white/10"
              />
              <div className="absolute bottom-8 right-8 bg-cosmic-black/80 backdrop-blur-md border border-gold-500/30 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-gold-400">15+</div>
                <div className="text-xs text-white/60 uppercase tracking-widest font-bold">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-bold tracking-[0.3em] uppercase">
              Meet Your Guide
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
              Compassionate Guidance <br className="hidden md:block" />
              <span className="text-gradient-gold">Through Ancient Wisdom</span>
            </h2>
            <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed">
              <p>
                Namaste! I am <strong>Acharya Ravi</strong>, a dedicated Vedic astrologer with over 25 years of experience in helping individuals find clarity and purpose.
              </p>
              <p>
                My approach combines traditional <strong>Vedic Astrology</strong> with <strong>KP System</strong> and spiritual philosophy. I believe astrology is not just about predicting the future, but about empowering you to make the right choices today.
              </p>
              <p>
                Why trust my guidance? I focus on practical, logic-based analysis and provide simple, effective remedies that integrate seamlessly into your modern lifestyle.
              </p>
            </div>
            <div className="pt-4 grid grid-cols-2 gap-8 border-t border-white/10 mt-8">
              <div>
                <div className="text-gold-400 font-bold mb-1">Vedic Specialist</div>
                <div className="text-sm text-white/40 font-light">Deep expertise in birth chart analysis and planetary transits.</div>
              </div>
              <div>
                <div className="text-gold-400 font-bold mb-1">Empowerment Focused</div>
                <div className="text-sm text-white/40 font-light">Practical solutions to overcome obstacles and achieve success.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
              How It <span className="text-gradient-gold">Works</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg">
              Getting your personalized astrological guidance is a simple 4-step process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Send Details", desc: "Provide your Birth Date, Time, and Place via our booking form or WhatsApp." },
              { step: "02", title: "Payment", desc: "Complete the payment securely using UPI, Paytm, or Google Pay." },
              { step: "03", title: "Consultation", desc: "Connect with Acharya Saurabh via WhatsApp Call or Video Call at your scheduled time." },
              { step: "04", title: "Guidance", desc: "Receive your detailed report and personalized remedies for your growth." }
            ].map((item, idx) => (
              <div key={item.step} className="relative p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-gold-500/30 transition-all duration-500 group">
                <div className="text-6xl font-display font-black text-white/5 absolute top-4 right-8 group-hover:text-gold-500/10 transition-colors">{item.step}</div>
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 font-bold mb-6 group-hover:bg-gold-500 group-hover:text-cosmic-black transition-all">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 lg:py-32 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Trusted by <span className="text-gradient-gold">Hundreds</span>
            </h2>
            <div className="flex justify-center gap-1 text-gold-500">
              {"★★★★★".split("").map((s, i) => <span key={i} className="text-2xl">{s}</span>)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rahul", text: "I was struggling with my career for 3 years. Sashtravani's astrologer told me exactly when I'd get a job, and the remedy worked within weeks! Truly blessed.", role: "Mumbai" },
              { name: "Priya", text: "Mera aur mere partner ka breakup hone wala tha. But Kundli Milan and small remedies saved my relationship. Premium quality guidance!", role: "Delhi" },
              { name: "Amit", text: "Very different from other apps. The astrologer was polite, explained everything logically, and didn't force expensive pujas. Best platform!", role: "Bangalore" }
            ].map((t, i) => (
              <div key={i} className="p-6 md:p-10 rounded-3xl bg-cosmic-black/40 backdrop-blur-sm border border-white/5 hover:border-gold-500/20 transition-all group">
                <div className="text-4xl text-gold-500/20 mb-6 group-hover:text-gold-500/40 transition-colors">"</div>
                <p className="text-white/70 italic mb-8 leading-relaxed">
                  {t.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center font-bold text-gold-400">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold">{t.name}</div>
                    <div className="text-white/40 text-xs uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options Section */}
      <section className="relative py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-white">Easy Payment Options</h3>
            <p className="text-white/40">We accept all major UPI apps and digital wallets for your convenience.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-20 bg-white/10 rounded flex items-center justify-center font-bold text-white text-xs">G-Pay</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-20 bg-white/10 rounded flex items-center justify-center font-bold text-white text-xs">PhonePe</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-20 bg-white/10 rounded flex items-center justify-center font-bold text-white text-xs">Paytm</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-20 bg-white/10 rounded flex items-center justify-center font-bold text-white text-xs">UPI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Remedies Section */}
      <section id="tips" className="relative py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl space-y-4">
              <div className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs">Daily Guidance</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Celestial <span className="text-gradient-gold">Tips & Remedies</span></h2>
              <p className="text-white/40 text-base md:text-lg">Simple Vedic practices to align your energy with the planetary transits and overcome obstacles.</p>
            </div>
            <Link href="/insights" className="px-8 py-3 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all mb-2">
              View All Tips
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/5 p-10 hover:border-gold-500/20 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-gold-500/10 transition-colors"></div>
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 flex items-center justify-center text-2xl">🕯️</div>
                <h3 className="text-2xl font-display font-bold text-white">Harmonizing Your Home</h3>
                <p className="text-white/50 leading-relaxed">Place a small bowl of rock salt in the north-east corner of your living room to absorb negative energy and promote family peace.</p>
                <ul className="space-y-3">
                  {["Use light yellow colors in study", "Keep entryways clutter-free", "Light a ghee lamp in evening"].map((t, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/40">
                      <span className="w-1 h-1 rounded-full bg-gold-500"></span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-white/5 border border-white/5 p-6 md:p-10 hover:border-gold-500/20 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-celestial-500/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-celestial-500/10 transition-colors"></div>
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-celestial-500/10 flex items-center justify-center text-2xl">🕉️</div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white">Personal Energy Boost</h3>
                <p className="text-white/50 leading-relaxed text-sm md:text-base">Chanting the 'Om' mantra for 11 minutes every morning can significantly strengthen your Jupiter, bringing wisdom and prosperity.</p>
                <ul className="space-y-3">
                  {["Wear yellow on Thursdays", "Offer water to Sun at dawn", "Practice mindfulness for 10 mins"].map((t, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/40">
                      <span className="w-1 h-1 rounded-full bg-celestial-500"></span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight">
            Ancient Wisdom <br className="hidden md:block" />
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
              Book Your Session Now
            </button>
          </div>

          <div className="pt-24 flex justify-center">
            <div className="w-12 h-12 rounded-full border border-gold-500/20 flex items-center justify-center animate-bounce">
              <span className="text-gold-500">↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
            <p className="text-white/50 text-lg">Clear your doubts before making a life-changing decision.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Are the predictions 100% accurate?",
                a: "Yes, our verified Vedic astrologers use precise planetary calculations to give highly accurate predictions based on your unique birth chart."
              },
              {
                q: "Can astrology really fix my love life?",
                a: "Absolutely. By analyzing your 5th and 7th houses, we identify the exact root cause of your relationship problems and provide effective, karma-balancing remedies."
              },
              {
                q: "Is my data kept private?",
                a: "100%. We use strict privacy protocols. Your details and conversations are strictly confidential and never shared."
              },
              {
                q: "Hindi mein baat kar sakte hain?",
                a: "Haan bilkul! Hamare astrologers Hindi, English aur regional languages mein fluently baat karte hain."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/20 transition-all">
                <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-white/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}