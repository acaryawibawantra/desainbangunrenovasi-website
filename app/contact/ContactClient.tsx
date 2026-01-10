"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { COMPANY_INFO, CONTACT_INFO } from "@/lib/constants";


export function ContactClient() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <main
            ref={ref}
            className="min-h-screen flex flex-col"
            style={{
                background: 'linear-gradient(135deg, #6B2D2E 0%, #9E4244 30%, #C56B6D 60%, #9E4244 80%, #6B2D2E 100%)',
            }}
        >
            {/* Navigation */}
            <nav className="flex items-center justify-between p-6 md:p-10">
                <Link href="/" className="text-white text-2xl font-light tracking-wider">
                    {COMPANY_INFO.name}
                </Link>
                <Link
                    href="/"
                    className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-300"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </Link>
            </nav>

            {/* Content Container - Vertically Centered Layout */}
            <div className="flex-grow flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-24 px-6 md:px-16 lg:px-24 py-6 lg:py-12">
                {/* Right Side: Contact Info & CTA */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 lg:space-y-16">
                    {/* Contact Info Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full max-w-lg md:ml-auto"
                    >
                        <p className="text-white/90 text-base lg:text-xl mb-6 lg:mb-10 leading-relaxed font-light tracking-wide">
                            Hubungi kami melalui email atau WhatsApp,
                            <br />
                            atau langsung kunjungi lokasi kami.
                        </p>

                        <div className="space-y-4 lg:space-y-6">
                            {/* Email */}
                            <a
                                href={`mailto:${CONTACT_INFO.email}`}
                                className="block text-white text-sm lg:text-lg font-light hover:text-white/80 transition-all duration-300 tracking-wide"
                            >
                                <span className="block text-[10px] lg:text-xs text-white/40 mb-1 uppercase tracking-widest">Email</span>
                                {CONTACT_INFO.email}
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-white text-sm lg:text-lg font-light hover:text-white/80 transition-all duration-300 tracking-wide"
                            >
                                <span className="block text-[10px] lg:text-xs text-white/40 mb-1 uppercase tracking-widest">WhatsApp</span>
                                {CONTACT_INFO.phone}
                            </a>

                            {/* Address */}
                            <a
                                href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-white text-sm lg:text-lg font-light hover:text-white/80 transition-all duration-300 tracking-wide leading-relaxed"
                            >
                                <span className="block text-[10px] lg:text-xs text-white/40 mb-1 uppercase tracking-widest">Lokasi</span>
                                {CONTACT_INFO.address}
                            </a>

                            {/* Note */}
                            <div className="pt-4 border-t border-white/10">
                                <p className="text-white/50 text-xs lg:text-sm italic font-light">{CONTACT_INFO.note}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <p className="text-white/60 text-xs lg:text-sm mb-4 lg:mb-6 tracking-widest uppercase">
                            Wujudkan impian Anda bersama ASKRA
                        </p>

                        <div className="flex items-end justify-between group cursor-pointer">
                            <h1 className="text-3xl md:text-5xl lg:text-7xl font-light text-white leading-none tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                                Mari bekerja sama.
                            </h1>

                            {/* Decorative Arrow */}
                            <svg
                                className="hidden md:block w-20 h-20 text-white/20 transition-all duration-500 group-hover:text-white/60 group-hover:translate-x-2 group-hover:-translate-y-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={0.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </div>

                        {/* Bottom Line */}
                        <div className="mt-8 lg:mt-10 h-px w-full bg-gradient-to-r from-white/30 to-transparent" />
                    </motion.div>
                </div>

                {/* Left Side: Map - Vertically Centered */}
                <div className="hidden lg:block w-full lg:w-1/2 h-[400px] lg:h-[550px] relative rounded-[1rem] overflow-hidden shadow-2xl border border-white/10 bg-white/5 lg:-mt-24">
                    <iframe
                        src="https://maps.google.com/maps?q=JL.+Peta+Barat+No.+61,+Jakarta,+Indonesia,+Jakarta&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1) opacity(0.95)' }}
                        allowFullScreen
                        loading="lazy"
                        className="absolute inset-0 w-full h-full"
                    />
                    {/* Clean Inner Border */}
                    <div className="absolute inset-0 pointer-events-none rounded-[1rem] ring-1 ring-inset ring-white/10" />
                </div>
            </div>


        </main >
    );
}
