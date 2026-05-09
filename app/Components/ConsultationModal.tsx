"use client";
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  acharyaName?: string;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose, acharyaName }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dob: '',
    pob: '',
    tob: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://scamfreeind.in/api/astrologer/consult', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          acharya_name: acharyaName,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setTimeout(() => {
          onClose();
          setSuccess(false);
          setFormData({ name: '', phone: '', dob: '', pob: '', tob: '', message: '' });
        }, 3000);
      } else {
        alert(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting consultation:', error);
      alert('Error connecting to server. Please check if backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[100] bg-void/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-500">
      <div className="min-h-full flex items-center justify-center p-4 md:p-8">
        <div className="relative w-full max-w-lg bg-[#0a0a0f]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5),0_0_30px_rgba(245,158,11,0.1)]">
          
          {/* Animated Background Accents */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-celestial-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

          <div className="relative p-8 md:p-10">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-8 p-2 text-white/20 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="text-center mb-10 space-y-3">
            <h2 className="text-4xl font-display font-bold text-gradient-gold">
              {t('consult_now')}
            </h2>
            {acharyaName && (
              <div className="flex items-center justify-center gap-2">
                <span className="h-px w-8 bg-gold-500/30"></span>
                <p className="text-gold-400 font-medium tracking-[0.2em] uppercase text-[10px]">
                  With {acharyaName}
                </p>
                <span className="h-px w-8 bg-gold-500/30"></span>
              </div>
            )}
            <p className="text-white/40 text-sm font-light max-w-[280px] mx-auto">
              Please share your birth details for a precise astrological reading.
            </p>
          </div>

          {success ? (
            <div className="py-12 text-center space-y-6 animate-in zoom-in duration-500">
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
                <div className="relative w-full h-full bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                  ✨
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Blessings Received!</h3>
                <p className="text-white/60">Our expert astrologer will connect with you via WhatsApp/Call within 24 hours.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div className="space-y-1.5 group">
                <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] ml-2 group-focus-within:text-gold-500 transition-colors">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-gold-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white focus:outline-none focus:border-gold-500/50 focus:bg-white/[0.06] transition-all placeholder:text-white/10"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="space-y-1.5 group">
                <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] ml-2 group-focus-within:text-gold-500 transition-colors">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-gold-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white focus:outline-none focus:border-gold-500/50 focus:bg-white/[0.06] transition-all placeholder:text-white/10"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              {/* DOB & TOB Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5 group">
                  <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] ml-2 group-focus-within:text-gold-500 transition-colors">
                    Birth Date
                  </label>
                  <div className="relative">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-gold-500 transition-colors pointer-events-none">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl pl-14 pr-4 py-4 text-white focus:outline-none focus:border-gold-500/50 focus:bg-white/[0.06] transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>
                <div className="space-y-1.5 group">
                  <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] ml-2 group-focus-within:text-gold-500 transition-colors">
                    Birth Time
                  </label>
                  <div className="relative">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-gold-500 transition-colors pointer-events-none">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <input
                      type="time"
                      name="tob"
                      value={formData.tob}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl pl-14 pr-4 py-4 text-white focus:outline-none focus:border-gold-500/50 focus:bg-white/[0.06] transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>
              </div>

              {/* POB Field */}
              <div className="space-y-1.5 group">
                <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] ml-2 group-focus-within:text-gold-500 transition-colors">
                  Place of Birth
                </label>
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-gold-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <input
                    type="text"
                    name="pob"
                    value={formData.pob}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white focus:outline-none focus:border-gold-500/50 focus:bg-white/[0.06] transition-all placeholder:text-white/10"
                    placeholder="City, Country"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-1.5 group">
                <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.15em] ml-2 group-focus-within:text-gold-500 transition-colors">
                  Message (Optional)
                </label>
                <div className="relative">
                  <div className="absolute left-5 top-5 text-white/20 group-focus-within:text-gold-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white focus:outline-none focus:border-gold-500/50 focus:bg-white/[0.06] transition-all placeholder:text-white/10 resize-none"
                    placeholder="Any specific questions?"
                  />
                </div>
              </div>

              <div className="pt-6">
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full btn-gold !py-5 rounded-2xl font-bold text-base shadow-[0_20px_40px_-10px_rgba(245,158,11,0.3)] disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden active:scale-[0.98] transition-transform"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm Consultation</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                </button>
                <p className="text-center text-[10px] text-white/20 mt-4 tracking-wider uppercase">
                  Secure & Confidential Connection
                </p>
              </div>
            </form>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
