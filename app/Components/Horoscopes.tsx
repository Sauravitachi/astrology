"use client";

import React, { useState } from "react";

type HoroscopeData = {
  date_range?: string;
  description?: string;
  mood?: string;
  compatibility?: string;
  color?: string;
  lucky_number?: string;
  lucky_time?: string;
  current_date?: string;
};

export default function Horoscopes() {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);
  const [horoscopeData, setHoroscopeData] = useState<HoroscopeData | null>(null);
  const [loading, setLoading] = useState(false);

  const zodiacSigns = [
    { name: "Aries", icon: "/zodiac/aries.png" },
    { name: "Taurus", icon: "/zodiac/tauraus.png" },
    { name: "Gemini", icon: "/zodiac/gemini.png" },
    { name: "Cancer", icon: "/zodiac/cancer.png" },
    { name: "Leo", icon: "/zodiac/leo.png" },
    { name: "Virgo", icon: "/zodiac/virgo.png" },
    { name: "Libra", icon: "/zodiac/libra.png" },
    { name: "Scorpio", icon: "/zodiac/scorpio.png" },
    { name: "Sagittarius", icon: "/zodiac/sagittarius.png" },
    { name: "Capricorn", icon: "/zodiac/capricorn.png" },
    { name: "Aquarius", icon: "/zodiac/aquarius.png" },
    { name: "Pisces", icon: "/zodiac/pisces.png" },
  ];

  const getDeterministicValue = (sign: string, type: string) => {
    const today = new Date().toISOString().split('T')[0];
    const seed = sign + today + type;
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = (hash << 5) - hash + seed.charCodeAt(i);
      hash |= 0;
    }
    const index = Math.abs(hash);

    const values: Record<string, string[]> = {
      mood: ['Optimistic', 'Introspective', 'Energetic', 'Devotional', 'Productive', 'Creative', 'Peaceful', 'Ambitious', 'Spiritual', 'Balanced'],
      compatibility: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
      color: ['Saffron', 'Sandalwood', 'Golden', 'Emerald', 'Turquoise', 'Lotus Pink', 'Pearl White', 'Ruby Red', 'Deep Indigo', 'Copper'],
      lucky_number: ['3', '9', '12', '21', '27', '54', '108', '7', '11', '1'],
      lucky_time: ['Brahma Muhurta', 'Sunrise', 'Noon', 'Pradosham', 'Sunset', 'Abhijit Muhurta', 'Amrit Kaal', 'Vijay Mahurat']
    };

    const list = values[type] || ['N/A'];
    return list[index % list.length];
  };

  const fetchHoroscope = async (sign: string) => {
    setLoading(true);
    setSelectedSign(sign);

    try {
      const targetUrl = `https://ohmanda.com/api/horoscope/${sign.toLowerCase()}`;
      const response = await fetch(
        `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(targetUrl)}`
      );

      if (!response.ok) {
        throw new Error(`Proxy error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data && data.horoscope) {
        setHoroscopeData({
          description: data.horoscope,
          current_date: data.date,
          mood: getDeterministicValue(sign, 'mood'),
          compatibility: getDeterministicValue(sign, 'compatibility'),
          color: getDeterministicValue(sign, 'color'),
          lucky_number: getDeterministicValue(sign, 'lucky_number'),
          lucky_time: getDeterministicValue(sign, 'lucky_time')
        });
      } else {
        throw new Error("Invalid horoscope data format");
      }
    } catch (error: any) {
      console.error("Detailed Fetch Error:", error);
      // Fallback if proxy fails
      if (error.message.includes('Failed to fetch')) {
        alert("The horoscope service is currently restricted by a firewall or network. Try again later or disable ad-blockers.");
      }
      setHoroscopeData(null);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setSelectedSign(null);
    setHoroscopeData(null);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7">
        {zodiacSigns.map((sign, index) => {
          const isActive = selectedSign === sign.name;

          return (
            <div
              key={sign.name}
              onClick={() => fetchHoroscope(sign.name)}
              className={`group relative cursor-pointer overflow-hidden rounded-[32px] border transition-all duration-500
                ${
                  isActive
                    ? "border-amber-400/60 bg-white/[0.08] shadow-[0_0_40px_rgba(251,191,36,0.18)]"
                    : "border-white/10 bg-white/[0.04] hover:border-amber-400/40 hover:bg-white/[0.06]"
                }
                hover:-translate-y-2`}
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,210,120,0.12),_transparent_45%)] opacity-60" />
              <div className="absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl group-hover:bg-amber-400/20 transition-all duration-500" />

              <div className="relative z-10 px-6 pt-8 pb-6 text-center">
                <div className="relative mx-auto mb-6 h-32 w-32">
                  <div className="absolute inset-0 rounded-full border border-amber-300/20 group-hover:scale-105 group-hover:border-amber-300/40 transition-all duration-500" />
                  <div className="absolute inset-[-10px] rounded-full border border-dashed border-white/10 opacity-40 animate-[spin_24s_linear_infinite]" />
                  <div className="absolute inset-2 rounded-full bg-white/[0.03] backdrop-blur-sm" />

                  <img
                    src={sign.icon}
                    alt={sign.name}
                    className="relative z-10 h-full w-full rounded-full object-cover p-2 drop-shadow-[0_0_30px_rgba(255,180,60,0.18)] transition-all duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-[28px] font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                  {sign.name}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-white/35">
                  Zodiac Reading
                </p>

                <div className="mt-7 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-all duration-300 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-black group-hover:scale-110">
                    →
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          );
        })}
      </div>

      {selectedSign && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-[36px] border border-white/10 bg-[#0a0f1f]/95 p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

            <button
              onClick={closeModal}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-white/10 hover:text-white"
            >
              ✕
            </button>

            {loading ? (
              <div className="flex flex-col items-center justify-center gap-5 py-24">
                <div className="h-16 w-16 rounded-full border-4 border-amber-400/20 border-t-amber-400 animate-spin" />
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-amber-300">
                  Reading Stars...
                </p>
              </div>
            ) : horoscopeData ? (
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                  <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-full border border-amber-400/20 bg-white/5 p-2">
                    <div className="absolute inset-0 rounded-full bg-amber-400/10 blur-xl" />
                    <img
                      src={zodiacSigns.find((s) => s.name === selectedSign)?.icon}
                      alt={selectedSign}
                      className="relative z-10 h-full w-full rounded-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-amber-300/70">
                      Daily Horoscope
                    </p>
                    <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white">
                      {selectedSign}
                    </h2>
                    <p className="mt-2 text-sm text-white/50">
                      {horoscopeData.date_range || "Cosmic reading for today"}
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
                  <p className="text-base md:text-lg leading-8 text-white/85">
                    {horoscopeData.description || "No horoscope available."}
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { label: "Mood", value: horoscopeData.mood, icon: "✨" },
                    { label: "Match", value: horoscopeData.compatibility, icon: "💖" },
                    { label: "Color", value: horoscopeData.color, icon: "🎨" },
                    { label: "Lucky No.", value: horoscopeData.lucky_number, icon: "🔢" },
                    { label: "Lucky Time", value: horoscopeData.lucky_time, icon: "🕒" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-white/8 bg-white/[0.04] p-4"
                    >
                      <p className="text-[11px] uppercase tracking-[0.25em] text-white/35">
                        {item.label}
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-amber-300 font-semibold">
                        <span>{item.icon}</span>
                        <span>{item.value || "—"}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/5 pt-5 text-center">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
                    Celestial Insights for {horoscopeData.current_date || "Today"}
                  </p>
                </div>
              </div>
            ) : (
              <div className="py-24 text-center text-white/45">
                Failed to connect with the cosmos. Please try again.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}