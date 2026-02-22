"use client";

import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO } from "@/lib/constants";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#F4F1EE] text-[#2C2C2C] pt-16 md:pt-24 pb-8 overflow-hidden relative mt-auto font-light border-t border-[#2C2C2C]/10">
            {/* Subtle Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#2C2C2C 1px, transparent 1px), linear-gradient(90deg, #2C2C2C 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">

                {/* Top Grid: 4 Columns */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24 md:mb-32">

                    {/* Column 1: PAGES */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2 border-b border-[#2C2C2C]/20 pb-4">
                            <h4 className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#2C2C2C]/80 uppercase">
                                Pages
                            </h4>
                            <div className="w-1.5 h-1.5 bg-[#C9A961] shrink-0" />
                        </div>
                        <ul className="flex flex-col gap-4 text-[11px] md:text-xs font-semibold tracking-[0.1em] uppercase text-[#2C2C2C]/90">
                            <li><Link href="/" className="hover:text-[#C9A961] transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-[#C9A961] transition-colors">About Us</Link></li>
                            <li><Link href="/#services" className="hover:text-[#C9A961] transition-colors">Services</Link></li>
                            <li><Link href="/#portfolio" className="hover:text-[#C9A961] transition-colors">Portfolio</Link></li>
                            <li><Link href="/#testimonials" className="hover:text-[#C9A961] transition-colors">Reviews</Link></li>
                            <li><Link href="/blog" className="hover:text-[#C9A961] transition-colors">Blogs</Link></li>
                            <li><Link href="/contact" className="hover:text-[#C9A961] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: LOCATIONS */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2 border-b border-[#2C2C2C]/20 pb-4">
                            <h4 className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#2C2C2C]/80 uppercase">
                                Locations
                            </h4>
                            <div className="w-1.5 h-1.5 bg-[#C9A961] shrink-0" />
                        </div>
                        <ul className="flex flex-col gap-4 text-[11px] md:text-xs font-semibold tracking-[0.1em] uppercase text-[#2C2C2C]/90">
                            <li><span className="hover:text-[#C9A961] transition-colors cursor-default">Jakarta</span></li>
                            <li><span className="hover:text-[#C9A961] transition-colors cursor-default">Bali</span></li>
                        </ul>
                    </div>

                    {/* Column 3: CATEGORIES */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2 border-b border-[#2C2C2C]/20 pb-4">
                            <h4 className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#2C2C2C]/80 uppercase">
                                Categories
                            </h4>
                            <div className="w-1.5 h-1.5 bg-[#C9A961] shrink-0" />
                        </div>
                        <ul className="flex flex-col gap-4 text-[11px] md:text-xs font-semibold tracking-[0.1em] uppercase text-[#2C2C2C]/90">
                            <li><Link href="/#services" className="hover:text-[#C9A961] transition-colors">All</Link></li>
                            <li><Link href="/services/bangun-rumah" className="hover:text-[#C9A961] transition-colors">Bangun Rumah</Link></li>
                            <li><Link href="/services/renovasi" className="hover:text-[#C9A961] transition-colors">Renovasi</Link></li>
                            <li><Link href="/services/arsitek" className="hover:text-[#C9A961] transition-colors">Jasa Arsitek</Link></li>
                            <li><span className="hover:text-[#C9A961] transition-colors cursor-default">Interior Design</span></li>
                        </ul>
                    </div>

                    {/* Column 4: SOCIALS */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2 border-b border-[#2C2C2C]/20 pb-4">
                            <h4 className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#2C2C2C]/80 uppercase">
                                Socials
                            </h4>
                            <div className="w-1.5 h-1.5 bg-[#C9A961] shrink-0" />
                        </div>
                        <ul className="flex flex-col gap-4 text-[11px] md:text-xs font-semibold tracking-[0.1em] uppercase text-[#2C2C2C]/90">
                            <li><a href="#" className="hover:text-[#C9A961] transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-[#C9A961] transition-colors">Facebook</a></li>
                            <li><a href="#" className="hover:text-[#C9A961] transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-[#C9A961] transition-colors">X / Twitter</a></li>
                            <li><a href="#" className="hover:text-[#C9A961] transition-colors">YouTube</a></li>
                            <li><a href="#" className="hover:text-[#C9A961] transition-colors">TikTok</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Logo & Branding Area */}
                <div className="border-t border-b border-[#2C2C2C]/10 py-10 md:py-16 mb-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 relative overflow-hidden">

                    {/* Logo Image */}
                    <div className="relative w-20 h-20 md:w-32 md:h-32 shrink-0 z-10 transition-transform duration-700 hover:scale-105">
                        <Image
                            src="/images/logo-fix.png"
                            alt="Askra Logo"
                            fill
                            className="object-contain" // Removed brightness invert so it uses original logo color over light bg
                        />
                    </div>

                    {/* Massive Text (REALDEV style) */}
                    <div className="flex-1 w-full text-center md:text-left flex flex-col justify-center pb-2 z-10">
                        <h4
                            className="text-[5vw] md:text-[5vw] lg:text-[100px] font-bold tracking-tighter leading-none m-0 p-0 text-[#2C2C2C]"
                            style={{ letterSpacing: '-0.04em' }}
                        >
                            ASKRA KONSTRUKSI
                        </h4>
                        <p className="text-[#2C2C2C] text-xs md:text-sm tracking-[0.4em] uppercase font-bold mt-2 md:mt-4 ml-1 md:ml-3">
                            CV ADI SARANA KREASI
                        </p>
                    </div>

                    {/* Decorative Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[150%] bg-black opacity-[0.01] blur-[100px] pointer-events-none rounded-full z-0" />
                </div>

                {/* Footer Legal */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[9px] md:text-[10px] uppercase font-light tracking-[0.2em] text-[#2C2C2C]/60">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        <Link href="#" className="hover:text-[#2C2C2C] transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-[#2C2C2C] transition-colors">Terms</Link>
                    </div>
                    <div className="text-center">
                        <p>© {currentYear} {COMPANY_INFO.fullName}. All Rights Reserved.</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded bg-[#2C2C2C] text-[#F4F1EE] flex items-center justify-center font-bold text-[8px] tracking-normal">A</span>
                            Built by Askra
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}
