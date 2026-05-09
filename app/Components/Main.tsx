"use client";
import Link from "next/link";
import Image from "next/image";
import Horoscopes from "./Horoscopes";
import Services from "./Services";
import DetailedServices from "./DetailedServices";
import Newsletter from "./Newsletter";
import { useLanguage } from "../context/LanguageContext";
import Review from "./Review";

export default function Main() {
  const { t } = useLanguage();

  const acharyas = [

    {
      name: "Acharya Ravi",
      experience: "25+",
      specialty: "Palm Reading Expert",
      image: "/ravi.jpeg",
      description: "Master of Palmistry, revealing life's journey and planetary destiny through the sacred lines of your hand."
    },
    {
      name: "Acharya Amit",
      experience: "18+",
      specialty: "Chart Reading Expert",
      image: "/amit.jpeg",
      description: "Deep expertise in comprehensive Kundli analysis and precise chart-based life predictions."
    },
    {
      name: "Acharya Gaurav",
      experience: "16+",
      specialty: "Career, Life & Relationships",
      image: "/gaurav.jpeg",
      description: "Specializing in career growth, life purpose guidance, and harmonizing complex relationship dynamics."
    },
    {
      name: "Acharya Rajesh",
      experience: "19+",
      specialty: "Face Reading & Energies",
      image: "/rajesh.jpeg",
      description: "Expert in face reading and energy analysis to predict future paths and reveal hidden potential."
    },
    {
      name: "Acharya Ratanlal Sharma",
      experience: "16+",
      specialty: "Matching & Nadi Dosha",
      image: "/ratanlal sharma.jpeg",
      description: "Authority on marriage compatibility (Kundli Milan) and specialized Nadi Dosha remedies."
    },
    {
      name: "Acharya Ankit Sharma",
      experience: "3+",
      specialty: t('vedic_specialist'),
      image: "/ankit.png",
      description: t('about_p1').split('. ')[0] + '.'
    }
  ];

  return (
    <main>
      <section className="relative pt-10 pb-16 px-6 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 animate-in fade-in slide-in-from-left-10 duration-1000 text-center lg:text-left">
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-gold-400 tracking-wide">{t('hero_subtitle')}</h3>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] text-white tracking-tight">
                {t('hero_title_part1')} <span className="text-gradient-gold lg:text-nowrap">{t('hero_title_part2')}</span> {t('hero_title_part3')}
              </h1>
            </div>
            <p className="text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed text-base md:text-lg pt-4">
              {t('hero_description')}
            </p>
            {/* Trust Indicators */}
            <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">{t('online_count')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                <span className="text-xs font-bold text-white/60 uppercase tracking-wider">⭐ 4.9/5 Rating</span>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="btn-gold w-full sm:w-auto !px-8 !py-4 text-base shadow-[0_0_30px_rgba(234,179,8,0.3)] relative overflow-hidden group">
                <span className="relative z-10">{t('free_kundli_btn')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              </button>
            </div>

            <p className="text-gold-500/80 text-sm font-medium pt-4 animate-pulse">
              🔥 {t('limited_slots')}
            </p>

            {/* Benefits Highlight */}
            <div className="pt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { label: t('benefit_experts'), icon: "✅" },
                { label: t('benefit_private'), icon: "🔒" },
                { label: t('benefit_fear'), icon: "🕊️" }
              ].map((benefit) => (
                <div key={benefit.label} className="flex items-center gap-2 md:gap-3 justify-center lg:justify-start">
                  <span className="text-lg md:text-xl">{benefit.icon}</span>
                  <span className="text-xs md:text-sm font-medium text-white/80">{benefit.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative flex items-center justify-center mt-[-20px] lg:-mt-16">
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
                  <Image
                    src="/zodiaco.png"
                    alt="Zodiac Wheel"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                    style={{ animation: 'rotate-360 20s linear infinite' }}
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="horoscope" className="relative py-20 lg:py-2 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="glow-orb w-[600px] h-[600px] top-[-300px] left-[-100px] opacity-10"></div>
          <div className="glow-orb w-[500px] h-[500px] bottom-[-200px] right-[-50px] opacity-10" style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto space-y-24 relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
              {t('celestial_guidance')}
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tight">
              {t('daily_horoscope_title')} <span className="text-gradient-gold">{t('daily_horoscope_span')}</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              {t('daily_horoscope_desc')}
            </p>
          </div>

          <Horoscopes />
        </div>
      </section>

      <section id="services" className="relative py-10 lg:py-10 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-celestial-500/20 bg-celestial-500/5 text-celestial-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-celestial-500 animate-pulse"></span>
              {t('sacred_offerings')}
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tight text-white">
              {t('pro_services_title')} <span className="text-gradient-gold">{t('pro_services_span')}</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              {t('pro_services_desc')}
            </p>
          </div>

          <Services />

          <div className="pt-1">
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">
                {t('specialized_guidance')}
              </h3>
              <p className="text-white/40 max-w-xl mx-auto">
                Comprehensive solutions for every aspect of your life, from deep karmic doshas to modern lifestyle guidance.
              </p>
            </div>
            <DetailedServices />
          </div>
        </div>
      </section>
      {/* Experts Section */}
      <section id="experts" className="relative py-20 lg:py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-bold tracking-[0.3em] uppercase">
              {t('meet_guide')}
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
              {t('about_title_part1')} <span className="text-gradient-gold">{t('about_title_part2')}</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg">
              Connect with India's most experienced Vedic experts for personalized guidance and spiritual growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acharyas.map((acharya, index) => (
              <div key={index} className="group relative bg-cosmic-black/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-gold-500/30 transition-all duration-500">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={acharya.image}
                    alt={acharya.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-black via-transparent to-transparent opacity-80"></div>

                  {/* Experience Badge */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div className="space-y-1">
                      <div className="bg-gold-500 text-cosmic-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block">
                        {acharya.experience} {t('years_experience')}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{acharya.name}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium text-gold-400 bg-gold-500/10 px-3 py-1 rounded-lg border border-gold-500/20">
                      {acharya.specialty}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {acharya.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative py-20 lg:py-5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
              {t('how_it_works')} <span className="text-gradient-gold">{t('how_it_works_span')}</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg">
              {t('process_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: t('step1_title'), desc: t('step1_desc') },
              { step: "02", title: t('step2_title'), desc: t('step2_desc') },
              { step: "03", title: t('step3_title'), desc: t('step3_desc') },
              { step: "04", title: t('step4_title'), desc: t('step4_desc') }
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

      {/* Authority & Trust Section */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {['Vedic Council', 'Astrology Today', 'Cosmic Times', 'Spirit Global', 'Ancient Wisdom Fed.'].map((brand) => (
              <div key={brand} className="text-xl font-display font-bold tracking-tighter text-white whitespace-nowrap">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Review/>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:hidden bg-gradient-to-t from-cosmic-black via-cosmic-black/95 to-transparent">
        <div className="flex gap-3 max-w-md mx-auto">
          <button className="flex-1 btn-gold !py-3 !rounded-xl text-sm font-bold shadow-[0_0_20px_rgba(234,179,8,0.3)]">
            {t('consult_now')}
          </button>
          <button className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white !py-3 !rounded-xl text-sm font-bold">
            {t('free_kundli_btn')}
          </button>
        </div>
      </div>


      {/* Tips & Remedies Section */}
      <section id="tips" className="relative py-10 lg:py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">{t('tips_title')} <span className="text-gradient-gold">{t('tips_span')}</span></h2>
              <p className="text-white/40 text-base md:text-lg">{t('tips_subtitle')}</p>
            </div>
            <Link href="/insights" className="px-8 py-3 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all mb-2">
              {t('view_all_tips')}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/5 p-10 hover:border-gold-500/20 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-gold-500/10 transition-colors"></div>
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 flex items-center justify-center text-2xl">🕯️</div>
                <h3 className="text-2xl font-display font-bold text-white">{t('home_harm_title')}</h3>
                <p className="text-white/50 leading-relaxed">{t('home_harm_desc')}</p>
                <ul className="space-y-3">
                  {[t('tip1'), t('tip2'), t('tip3')].map((t_tip, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/40">
                      <span className="w-1 h-1 rounded-full bg-gold-500"></span>
                      {t_tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-white/5 border border-white/5 p-6 md:p-10 hover:border-gold-500/20 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-celestial-500/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-celestial-500/10 transition-colors"></div>
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-celestial-500/10 flex items-center justify-center text-2xl">🕉️</div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white">{t('energy_boost_title')}</h3>
                <p className="text-white/50 leading-relaxed text-sm md:text-base">{t('energy_boost_desc')}</p>
                <ul className="space-y-3">
                  {[t('tip4'), t('tip5'), t('tip6')].map((t_tip, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/40">
                      <span className="w-1 h-1 rounded-full bg-celestial-500"></span>
                      {t_tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10 px-6 overflow-hidden">
        <div className="absolute inset-0 z-[-1]">
          <div className="absolute inset-0 bg-cosmic-bg/50"></div>
          {/* Abstract organic shapes */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-600/10 blur-[150px] rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-celestial-600/10 blur-[150px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight">
            {t('ancient_wisdom_title')} <br className="hidden md:block" />
            <span className="text-gradient-gold">{t('modern_guidance_span')}</span>
          </h2>
          <div className="space-y-8 text-white/60 leading-relaxed text-lg font-light">
            <p>
              {t('wisdom_p1')}
            </p>
            <p>
              {t('wisdom_p2')}
            </p>
          </div>
          <div className="pt-8">
            <button className="btn-gold !px-12 !py-4 text-lg">
              {t('book_session')}
            </button>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 lg:py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              {t('faq_title')} <span className="text-gradient-gold">{t('faq_span')}</span>
            </h2>
            <p className="text-white/50 text-lg">{t('faq_subtitle')}</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: t('faq1_q'),
                a: t('faq1_a')
              },
              {
                q: t('faq2_q'),
                a: t('faq2_a')
              },
              {
                q: t('faq3_q'),
                a: t('faq3_a')
              },
              {
                q: t('faq4_q'),
                a: t('faq4_a')
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