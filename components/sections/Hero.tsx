"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

export function Hero() {
    const imageRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);
    const isMobile = useIsMobile();

    // Intro animation sequence
    useEffect(() => {
        // Lock scroll to top during loading to prevent seeing other sections
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);

        const loaderTimer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = 'unset';
        }, 1500);

        const contentTimer = setTimeout(() => {
            setShowContent(true);
        }, 2000);

        return () => {
            clearTimeout(loaderTimer);
            clearTimeout(contentTimer);
            document.body.style.overflow = 'unset';
        };
    }, []);


    return (
        <section
            id="hero"
            className="relative h-[110vh] md:h-screen overflow-hidden"
            style={{ backgroundColor: '#1a1a1a' }}
        >
            {/* Preloader Overlay - Multi Panel Animation */}
            <AnimatePresence>
                {isLoading && (
                    <>
                        {/* Panel 1 - From Top (White) */}
                        <motion.div
                            className="fixed inset-0 z-[999]"
                            style={{ backgroundColor: '#FFFFFF' }}
                            initial={{ y: 0 }}
                            exit={{ y: '-100%' }}
                            transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                        />

                        {/* Panel 2 - From Left (Brand Color) */}
                        <motion.div
                            className="fixed inset-0 z-[998]"
                            style={{ backgroundColor: '#9E4244' }}
                            initial={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ duration: 1, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
                        />

                        {/* Panel 3 - From Bottom */}
                        <motion.div
                            className="fixed inset-0 z-[997]"
                            style={{ backgroundColor: 'var(--background)' }}
                            initial={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        />

                        {/* Center Content - Logo & Loader */}
                        <motion.div
                            className="fixed inset-0 z-[1000] flex items-center justify-center"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col items-center gap-8">
                                <div className="overflow-hidden">
                                    <motion.div
                                        initial={{ y: 60, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                                        className="text-5xl md:text-6xl font-bold tracking-wider"
                                        style={{ color: '#9E4244' }}
                                    >
                                        ASKRA
                                    </motion.div>
                                </div>

                                <div className="flex gap-2">
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="w-2 h-2 rounded-full"
                                            style={{ backgroundColor: '#9E4244' }}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: [0, 1, 0] }}
                                            transition={{
                                                duration: 1,
                                                delay: i * 0.15,
                                                repeat: Infinity,
                                                ease: 'easeInOut'
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Full-Screen Background Image - FIXED POSITION */}
            <motion.div
                ref={imageRef}
                className="fixed inset-0 w-full h-full z-0 pointer-events-none"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={!isLoading ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <Image
                    src="/images/hero/main-cover.jpg"
                    alt="Desain Bangun Renovasi - Hero"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark gradient overlay - stronger at bottom-left for text legibility */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.15) 100%)'
                    }}
                />
            </motion.div>

            {/* ── TOP ROW: SHAPING ─── line ─── EXCELLENCE ── */}
            <motion.div
                className="absolute top-0 left-0 right-0 z-10 flex items-center px-6 md:px-10"
                style={{ paddingTop: '5.5rem' }}  /* sits just below the navbar */
                initial={{ opacity: 0 }}
                animate={showContent ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                {/* Left label */}
                <span
                    className="text-white/60 text-xs tracking-[0.35em] uppercase shrink-0"
                    style={{ fontFamily: 'var(--font-sans, sans-serif)' }}
                >
                    SHAPING
                </span>

                {/* Left decorative line */}
                <motion.div
                    className="flex-1 h-px mx-4"
                    style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={showContent ? { scaleX: 1 } : {}}
                    transition={{ duration: 1.2, delay: 0.6 }}
                />

                {/* Right decorative line */}
                <motion.div
                    className="flex-1 h-px mx-4"
                    style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
                    initial={{ scaleX: 0, originX: 1 }}
                    animate={showContent ? { scaleX: 1 } : {}}
                    transition={{ duration: 1.2, delay: 0.6 }}
                />

                {/* Right label */}
                <span
                    className="text-white/60 text-xs tracking-[0.35em] uppercase shrink-0"
                    style={{ fontFamily: 'var(--font-sans, sans-serif)' }}
                >
                    EXCELLENCE
                </span>
            </motion.div>

            {/* ── BOTTOM-LEFT: Headline + CTA ── */}
            <motion.div
                className="absolute bottom-[10vh] md:bottom-0 left-0 z-10 px-6 pb-16 md:px-10 md:pb-20 max-w-[90vw] md:max-w-5xl lg:max-w-[70vw]"
                initial={{ opacity: 0, y: 40 }}
                animate={showContent ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <h2
                    className="text-white font-semibold tracking-tight mb-10 w-full"
                    style={{
                        fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                        lineHeight: '1.2'
                    }}
                >
                    Mewujudkan hunian impian <br className="hidden lg:block" />melalui desain berkelanjutan <br className="hidden md:block" /> dan pembangunan berkualitas.
                </h2>

                {/* CTA Button */}
                <motion.a
                    href="#projects"
                    className="inline-flex items-center gap-4 bg-white text-black text-[13px] font-medium uppercase tracking-[0.15em] px-8 py-4 transition-colors duration-300 hover:bg-white/90"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span>LIHAT PROYEK</span>
                    <span className="text-sm font-light">→</span>
                </motion.a>
            </motion.div>

        </section>
    );
}
