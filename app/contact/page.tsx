"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { COMPANY_INFO, CONTACT_INFO } from "@/lib/constants";

export default function ContactPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <main
            ref={ref}
            className="min-h-screen flex flex-col"
            style={{
                background: 'linear-gradient(135deg, #0F4040 0%, #1A5F5F 30%, #2A7A7A 60%, #1A5F5F 80%, #0F4040 100%)',
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

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between px-6 md:px-16 lg:px-24 pb-12">
                {/* Contact Info Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-12 md:mt-20 max-w-lg md:ml-auto"
                >
                    <p className="text-white/80 text-lg mb-10 leading-relaxed">
                        Hubungi kami melalui email atau WhatsApp,
                        <br />
                        atau langsung kunjungi lokasi kami.
                    </p>

                    <div className="space-y-4">
                        {/* Email */}
                        <a
                            href={`mailto:${CONTACT_INFO.email}`}
                            className="block text-white text-lg font-light hover:underline underline-offset-4 transition-all duration-300"
                        >
                            {CONTACT_INFO.email}
                        </a>

                        {/* WhatsApp */}
                        <a
                            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-white text-lg font-light hover:underline underline-offset-4 transition-all duration-300"
                        >
                            {CONTACT_INFO.phone}
                        </a>

                        {/* Address */}
                        <a
                            href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-white text-lg font-light hover:underline underline-offset-4 transition-all duration-300"
                        >
                            {CONTACT_INFO.address}
                        </a>

                        {/* Note */}
                        <div className="flex items-center gap-4 pt-4">
                            <span className="text-white/60 text-base">{CONTACT_INFO.note}</span>
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 md:mt-24"
                >
                    <p className="text-white/60 text-sm mb-4">
                        Wujudkan impian Anda bersama INSIGN.
                    </p>

                    <div className="flex items-end justify-between">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white leading-tight">
                            Mari bekerja sama.
                        </h1>

                        {/* Decorative Arrow */}
                        <svg
                            className="hidden md:block w-16 h-16 text-white/30"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={0.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
                        </svg>
                    </div>

                    {/* Bottom Line */}
                    <div className="mt-8 h-px bg-white/20" />
                </motion.div>
            </div>


        </main>
    );
}
