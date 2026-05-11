"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const featuredServices = [
    {
      title: t("s1_title"),
      description: t("s1_desc"),
      details: [
        "Birth chart reading",
        "Dosha analysis",
        "Planet strengths",
      ],
      slug: "kundli",
      image: "/kundli.png",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
        </svg>
      ),
    },

    {
      title: t("s2_title"),
      description: t("s2_desc"),
      details: ["Love compatibility", "Relationship guidance"],
      slug: "love",
      image: "/love.png",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },

    {
      title: t("s3_title"),
      description: t("s3_desc"),
      details: ["Career growth", "Job opportunities"],
      slug: "career",
      image: "/career.png",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    },
    {
      title: t('s4_title'),
      description: t('s4_desc'),
      details: t('s4_details'),
      slug: "business",
      image: "/finance.png",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: t('s5_title'),
      description: t('s5_desc'),
      details: t('s5_details'),
      slug: "marriage",
      image: "/marriage.png",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      )
    },
    {
      title: t('s6_title'),
      description: t('s6_desc'),
      details: t('s6_details'),
      slug: "remedies",
      image: "/remedies.png",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    }
  ];
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featuredServices.map((service) => (
          <div
            key={service.title}
            className="group relative overflow-hidden rounded-[32px] border border-[#24314f] bg-gradient-to-br from-[#07152d] via-[#08152f] to-[#020817] min-h-[420px] p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-yellow-500/30"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,183,77,0.18),transparent_35%)]"></div>

            {/* Zodiac Circle */}
            <div className="absolute top-10 right-10 w-56 h-56 rounded-full border border-yellow-500/10 opacity-40"></div>

            {/* Small stars */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full"></div>
              <div className="absolute top-20 right-32 w-1 h-1 bg-yellow-300 rounded-full"></div>
              <div className="absolute bottom-24 right-20 w-1 h-1 bg-white rounded-full"></div>
              <div className="absolute top-32 left-40 w-1 h-1 bg-yellow-200 rounded-full"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full w-full md:max-w-[58%]">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-transparent border border-white/20 flex items-center justify-center text-[#ffb74d] mb-8 transition-all duration-500 group-hover:scale-105">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-[32px] font-bold text-white leading-tight mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#a0aabf] text-[16px] leading-[1.6] mb-8">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-[#ffb74d] mt-1 shrink-0">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-white/90 text-[15px] leading-relaxed">
                    {Array.isArray(service.details) ? service.details.join(", ") : service.details}
                  </span>
                </div>
              </div>

              {/* Button */}
              <div className="mt-auto">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex w-max items-center justify-center gap-2 px-8 py-3.5 rounded-[12px] border border-white/20 bg-[#ffffff05] text-white text-[13px] font-bold tracking-widest uppercase hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  {t("get_started")}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Side Image */}
            <div
              className="absolute -right-4 -bottom-4 h-[115%] w-full md:w-[65%] pointer-events-none opacity-30 md:opacity-100 mix-blend-screen z-0"
              style={{ WebkitMaskImage: 'radial-gradient(ellipse at 85% 85%, black 45%, transparent 75%)' }}
            >
              <img
                src={service.image}
                alt={service.title}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                className="w-full h-full object-cover object-right-bottom drop-shadow-[0_0_35px_rgba(255,183,77,0.25)] transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-yellow-500/5 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
}