"use client";
import { useState } from "react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    country: "",
    consultationType: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Acharya Ji, I would like to consult.\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phoneNumber}\n*Email:* ${formData.email}\n*Country:* ${formData.country}\n*Consultation Type:* ${formData.consultationType}`;
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/917986006557?text=${encodedText}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end">
      {/* Form Card */}
      {isOpen && (
        <div className="glass-card rounded-[24px] w-[90vw] max-w-[360px] mb-4 overflow-hidden origin-bottom-right transition-all duration-300">
          <div className="p-6 relative">
            {/* Subtle glow effect behind header */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 blur-[40px] rounded-full pointer-events-none"></div>

            <div className="flex justify-between items-start mb-5 relative z-10">
              {/* Header left */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center overflow-hidden border border-gold-500/20 text-2xl pb-1 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                  👳‍♂️
                </div>
                <div className="leading-[1.1]">
                  <div className="text-[11px] font-bold text-gold-500 tracking-[0.2em] uppercase">Acharya</div>
                  <div className="text-[15px] font-display font-bold text-white tracking-wide uppercase">Ravi</div>
                </div>
              </div>
              {/* Header right */}
              <div className="flex gap-2">
                <button type="button" onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-white/5 text-white/60 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all border border-white/5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" /></svg>
                </button>
                <button type="button" onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-white/5 text-white/60 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all border border-white/5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>

            <h2 className="text-[22px] font-display font-bold text-white leading-[1.2] mb-2 tracking-tight">
              Talk to <span className="text-gradient-gold">Acharya Ji</span>
            </h2>
            <p className="text-[13px] text-white/50 mb-6 leading-relaxed font-light">
              Get cosmic guidance for career, marriage, health and life direction.
            </p>

            <form onSubmit={handleSend} className="space-y-3 relative z-10">
              <input required type="text" name="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 rounded-[12px] border border-white/10 text-[14px] text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 bg-white/5 placeholder:text-white/30 transition-colors" />
              <input required type="tel" name="phoneNumber" placeholder="Phone Number *" value={formData.phoneNumber} onChange={handleChange} className="w-full px-4 py-3 rounded-[12px] border border-white/10 text-[14px] text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 bg-white/5 placeholder:text-white/30 transition-colors" />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-[12px] border border-white/10 text-[14px] text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 bg-white/5 placeholder:text-white/30 transition-colors" />
              <input required type="text" name="country" placeholder="Country *" value={formData.country} onChange={handleChange} className="w-full px-4 py-3 rounded-[12px] border border-white/10 text-[14px] text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 bg-white/5 placeholder:text-white/30 transition-colors" />
              <input type="text" name="consultationType" placeholder="Consultation Type" value={formData.consultationType} onChange={handleChange} className="w-full px-4 py-3 rounded-[12px] border border-white/10 text-[14px] text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 bg-white/5 placeholder:text-white/30 transition-colors" />

              <button type="submit" className="w-full mt-2 btn-gold py-3.5 !rounded-[12px] flex items-center justify-center gap-2 uppercase text-[13px] tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.2)] border border-gold-400/20">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                Send on WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Pill Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 glass-card rounded-full p-2 pr-6 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-gold-500/30 group relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/5 to-gold-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        <div className="relative">
          <div className="w-[46px] h-[46px] rounded-full bg-gold-500/10 flex items-center justify-center overflow-hidden border border-gold-500/20 shadow-[0_0_15px_rgba(245,158,11,0.2)] text-[24px] pb-1">
            👳‍♂️
          </div>
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#10b981] rounded-full border-[2.5px] border-[#0f0f19] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
        </div>
        <div className="text-left py-1 relative z-10">
          <div className="text-[14px] font-display font-bold text-white leading-tight">Team Acharya Ji</div>
          <div className="text-[12px] font-medium text-[#10b981] flex items-center gap-1.5 mt-0.5">
            <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
            Online Now
          </div>
        </div>
        {isOpen && (
          <div className="ml-2 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all border border-white/5 relative z-10">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </div>
        )}
      </button>
    </div>
  );
}
