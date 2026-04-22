"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/#about' },
        { 
            name: 'Services', 
            href: '/services',
            subLinks: [
                { name: 'Kundli Analysis', href: '/services/kundli-analysis' },
                { name: 'Love & Relationship', href: '/services/love-relationship' },
                { name: 'Career & Job', href: '/services/career-job-prediction' },
                { name: 'Business & Finance', href: '/services/business-finance' },
                { name: 'Marriage Matching', href: '/services/marriage-matching' },
                { name: 'Remedies', href: '/services/effective-remedies' },
            ]
        },
        { name: 'How It Works', href: '/#process' },
        { name: 'Horoscope', href: '/horoscope' },    
        { name: 'Insights', href: '/insights' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? 'py-3 bg-cosmic-black/80 backdrop-blur-lg border-b border-gold-500/10 shadow-2xl'
                    : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gold-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-cosmic-black p-1.5 rounded-full border border-gold-500/20">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold-400">
                                <path d="M12 2L15 9H22L16.5 14L18.5 21L12 17L5.5 21L7.5 14L2 9H9L12 2Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                    <span className="text-2xl font-display font-bold tracking-tight text-white">
                        Astro<span className="text-gradient-gold">Sphere</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1 glass p-1 rounded-full border-white/5">
                    {navLinks.map((link) => (
                        <div 
                            key={link.name} 
                            className="relative group"
                            onMouseEnter={() => setActiveDropdown(link.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            {link.subLinks ? (
                                <button className="px-5 py-2 rounded-full text-sm font-medium text-white/70 group-hover:text-white group-hover:bg-white/5 transition-all duration-300 flex items-center gap-1.5">
                                    {link.name}
                                    <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="px-5 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 block"
                                >
                                    {link.name}
                                </Link>
                            )}

                            {/* Dropdown Menu */}
                            {link.subLinks && (
                                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${activeDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                                    <div className="bg-cosmic-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 min-w-[220px] shadow-2xl overflow-hidden">
                                        {link.subLinks.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className="block px-4 py-3 text-sm text-white/60 hover:text-gold-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <button className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-gold-400 hover:border-gold-500/30 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                    <Link
                        href="#consult"
                        className="px-6 py-2.5 rounded-full bg-linear-to-r from-gold-600 to-gold-400 text-cosmic-black font-bold text-sm hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Consult Now
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-cosmic-black/95 backdrop-blur-xl border-b border-gold-500/10 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
                    {navLinks.map((link) => (
                        <div key={link.name} className="flex flex-col gap-2">
                            {link.subLinks ? (
                                <>
                                    <div className="text-lg font-bold text-gold-400 pt-2">{link.name}</div>
                                    <div className="pl-4 flex flex-col gap-3 border-l border-white/10 ml-1">
                                        {link.subLinks.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className="text-white/60 hover:text-white transition-colors"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="text-lg font-medium text-white/70 hover:text-gold-400 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <hr className="border-white/10 my-2" />
                    <a
                        href="#consult"
                        className="w-full py-4 rounded-xl bg-linear-to-r from-gold-600 to-gold-400 text-cosmic-black font-bold text-center"
                    >
                        Consult Now
                    </a>
                </div>
            )}
        </header>
    );
}

