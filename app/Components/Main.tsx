"use client";
import Link from "next/link";
import Image from "next/image";
import Horoscopes from "./Horoscopes";
import Services from "./Services";
import { useLanguage } from "../context/LanguageContext";

export default function Main() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="relative pt-10 pb-16 px-6 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 animate-in fade-in slide-in-from-left-10 duration-1000 text-center lg:text-left">
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-gold-400 tracking-wide">{t('hero_subtitle')}</h3>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] text-white tracking-tight">
                {t('hero_title_part1')} <span className="text-gradient-gold lg:text-nowrap">{t('hero_title_part2')}</span> {t('hero_title_part3')}
              </h1>
            </div>
            <p className="text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed text-base md:text-lg pt-4">
              {t('hero_description')}
            </p>
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="btn-gold w-full sm:w-auto !px-8 !py-4 text-base shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                {t('free_kundli_btn')}
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-base hover:bg-white/10 transition-all">
                {t('consult_expert_btn')}
              </button>
            </div>

            {/* Benefits Highlight */}
            <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { label: t('benefit_experts'), icon: "✨" },
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
                  <Image
                    src="/zodiaco.png"
                    alt="Zodiac Wheel"
                    width={800}
                    height={800}
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

          <div className="text-center">
            <Link href="/services">
              <button className="btn-gold !px-12">
                {t('view_all_services')}
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
              <Image
                src="/ankit.png"
                alt="Astrologer"
                width={800}
                height={1000}
                className="relative rounded-[32px] w-full object-cover aspect-[4/5] border border-white/10"
              />
              <div className="absolute bottom-8 right-8 bg-cosmic-black/80 backdrop-blur-md border border-gold-500/30 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-gold-400">3+</div>
                <div className="text-xs  uppercase tracking-widest font-bold text-black/90">{t('years_experience')}</div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-xs font-bold tracking-[0.3em] uppercase">
              {t('meet_guide')}
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
              {t('about_title_part1')} <br className="hidden md:block" />
              <span className="text-gradient-gold">{t('about_title_part2')}</span>
            </h2>
            <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed">
              <p>
                {t('about_p1')}
              </p>
              <p>
                {t('about_p2')}
              </p>
              <p>
                {t('about_p3')}
              </p>
            </div>
            <div className="pt-4 grid grid-cols-2 gap-8 border-t border-white/10 mt-8">
              <div> 
                <div className="text-gold-400 font-bold mb-1">{t('vedic_specialist')}</div>
                <div className="text-sm text-white/40 font-light">{t('vedic_specialist_desc')}</div>
              </div>
              <div>
                <div className="text-gold-400 font-bold mb-1">{t('empowerment_focused')}</div>
                <div className="text-sm text-white/40 font-light">{t('empowerment_focused_desc')}</div>
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

      {/* Testimonials Section */}
      <section className="relative py-10 lg:py-10 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              {t('trusted_by')} <span className="text-gradient-gold">{t('hundreds')}</span>
            </h2>
            <div className="flex justify-center gap-1 text-gold-500">
              {"★★★★★".split("").map((s, i) => <span key={i} className="text-2xl">{s}</span>)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rahul", text: t('test1_text'), role: "Mumbai" },
              { name: "Priya", text: t('test2_text'), role: "Delhi" },
              { name: "Amit", text: t('test3_text'), role: "Bangalore" }
            ].map((t_item, i) => (
              <div key={i} className="p-6 md:p-10 rounded-3xl bg-cosmic-black/40 backdrop-blur-sm border border-white/5 hover:border-gold-500/20 transition-all group">
                <div className="text-4xl text-gold-500/20 mb-6 group-hover:text-gold-500/40 transition-colors">"</div>
                <p className="text-white/70 italic mb-8 leading-relaxed">
                  {t_item.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center font-bold text-gold-400">
                    {t_item.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold">{t_item.name}</div>
                    <div className="text-white/40 text-xs uppercase tracking-widest">{t_item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


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