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
            style={{ backgroundColor: '#1A5F5F' }}
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

            {/* WhatsApp Floating Button */}
            <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
            >
                <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
        </main>
    );
}
