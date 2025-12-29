"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Translations from 4 Asian + 4 European countries
const TRANSLATIONS = [
    { lang: "ID", text: "Mari bekerja sama." },           // Indonesia
    { lang: "TH", text: "มาทำงานร่วมกันเถอะ" },              // Thailand
    { lang: "JP", text: "一緒に働きましょう。" },              // Japan
    { lang: "VN", text: "Hãy cùng làm việc nhau." },      // Vietnam
    { lang: "EN", text: "Let's work together." },         // English
    { lang: "FR", text: "Travaillons ensemble." },        // France
    { lang: "DE", text: "Lass uns zusammenarbeiten." },   // Germany
    { lang: "ES", text: "Trabajemos juntos." },           // Spain
];

export function CTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TRANSLATIONS.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const currentTranslation = TRANSLATIONS[currentIndex];

    return (
        <section
            ref={ref}
            id="contact"
            className="relative py-24 md:py-32"
            style={{
                background: 'linear-gradient(135deg, #0F4040 0%, #1A5F5F 30%, #2A7A7A 60%, #1A5F5F 80%, #0F4040 100%)',
            }}
        >
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
                >
                    {/* Main Heading with Language Animation */}
                    <div className="relative min-h-[180px] md:min-h-[220px] lg:min-h-[280px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <h2 className="text-3xl md:text-6xl lg:text-8xl font-medium leading-tight text-white"
                                    style={{ textShadow: '0 0 40px rgba(255,255,255,0.2)' }}
                                >
                                    {currentTranslation.text}
                                </h2>
                                {/* Language indicator */}
                                <div className="mt-4 flex items-center gap-2">
                                    <span className="text-xs text-white/50 uppercase tracking-widest">
                                        {currentTranslation.lang}
                                    </span>
                                    {/* Progress dots */}
                                    <div className="flex gap-1.5 ml-2">
                                        {TRANSLATIONS.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex
                                                    ? 'bg-white w-4'
                                                    : 'bg-white/30'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Contact Link */}
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 text-white hover:text-white/80 transition-colors duration-300 flex-shrink-0"
                    >
                        <span className="text-sm font-medium tracking-widest uppercase border-b border-white/50 group-hover:border-white pb-1">
                            HUBUNGI KAMI
                        </span>
                        <svg
                            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
