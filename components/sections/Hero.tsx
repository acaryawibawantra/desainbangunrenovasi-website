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
        // Phase 1: Show loader for dramatic effect
        const loaderTimer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        // Phase 2: Start showing content after loader
        const contentTimer = setTimeout(() => {
            setShowContent(true);
        }, 2000);

        return () => {
            clearTimeout(loaderTimer);
            clearTimeout(contentTimer);
        };
    }, []);

    useEffect(() => {
        // Skip parallax on mobile for better performance
        if (isMobile) return;

        // Subtle parallax effect on hero image - DESKTOP ONLY
        const handleScroll = () => {
            if (imageRef.current) {
                const scrolled = window.scrollY;
                imageRef.current.style.transform = `translate3d(0, ${scrolled * 0.3}px, 0)`;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile]);

    const words = ["Built", "With", "Precision"];

    // Letter animation variants
    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.03,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        }),
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen overflow-hidden"
            style={{ backgroundColor: '#1a1a1a' }}
        >
            {/* Preloader Overlay */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center"
                        style={{ backgroundColor: '#0F4040' }}
                        initial={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    >
                        {/* Loading Animation */}
                        <div className="flex flex-col items-center gap-6">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl md:text-5xl font-light text-white tracking-widest"
                            >
                                INSIGN
                            </motion.div>
                            {/* Loading bar */}
                            <div className="w-32 h-[2px] bg-white/20 overflow-hidden rounded-full">
                                <motion.div
                                    className="h-full bg-white"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1.3, ease: 'easeInOut' }}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Full-Screen Background Image with Reveal Animation */}
            <motion.div
                ref={imageRef}
                className="absolute inset-0"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={!isLoading ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <Image
                    src="/images/hero/here-bg2.webp"
                    alt="INSIGN Interior Design"
                    fill
                    className="object-cover"
                    style={{ opacity: 0.85 }}
                    priority
                />
                {/* Dark gradient overlay from bottom */}
                <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={!isLoading ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 100%)'
                    }}
                />
            </motion.div>

            {/* Decorative Lines */}
            <motion.div
                className="absolute top-0 left-1/4 w-px h-full bg-white/5"
                initial={{ scaleY: 0, originY: 0 }}
                animate={showContent ? { scaleY: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
            />
            <motion.div
                className="absolute top-0 right-1/4 w-px h-full bg-white/5"
                initial={{ scaleY: 0, originY: 0 }}
                animate={showContent ? { scaleY: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.7 }}
            />

            {/* Logo - Top Left */}
            <motion.div
                className="absolute top-8 left-8 md:top-12 md:left-12 z-10"
                initial={{ opacity: 0, scale: 0 }}
                animate={showContent ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.3 }}
            >
                <a href="#hero" className="block">
                    <span
                        className="text-2xl font-light tracking-wider text-white md:text-3xl"
                        style={{ fontWeight: 300, letterSpacing: '0.1em' }}
                    >
                        INSIGN
                    </span>
                </a>
            </motion.div>

            {/* Main Words with Animation */}
            <div className="absolute inset-0 z-10 flex items-center justify-center overflow-visible">
                {/* Desktop: Single row | Mobile: 2 rows */}
                <div className="relative flex flex-col md:flex-row items-center justify-center text-center gap-x-3 md:gap-x-6 lg:gap-x-8">
                    {/* Mobile Row 1: Built With | Desktop: all in one row */}
                    <div className="flex flex-row items-center justify-center gap-x-3 md:gap-x-6 lg:gap-x-8">
                        {words.slice(0, 2).map((word, wordIndex) => (
                            <motion.div
                                key={wordIndex}
                                className="overflow-visible pb-2 md:pb-0"
                                initial={{ opacity: 0 }}
                                animate={showContent ? { opacity: 1 } : {}}
                                transition={{ delay: wordIndex * 0.2 }}
                            >
                                <motion.span
                                    initial={{ y: '100%' }}
                                    animate={showContent ? { y: 0 } : {}}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.3 + wordIndex * 0.15,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                    className="block text-5xl font-bold text-white md:text-7xl lg:text-8xl xl:text-9xl"
                                    style={{
                                        fontWeight: 500,
                                        letterSpacing: '-0.02em',
                                    }}
                                >
                                    {word}
                                </motion.span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Row 2: Precision | Desktop: continues same row */}
                    <motion.div
                        className="overflow-visible pb-4 md:pb-0"
                        initial={{ opacity: 0 }}
                        animate={showContent ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4 }}
                    >
                        <motion.span
                            initial={{ y: '100%' }}
                            animate={showContent ? { y: 0 } : {}}
                            transition={{
                                duration: 0.8,
                                delay: 0.6,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            className="block text-5xl font-bold text-white md:text-7xl lg:text-8xl xl:text-9xl"
                            style={{
                                fontWeight: 500,
                                letterSpacing: '-0.02em',
                            }}
                        >
                            {words[2]}
                        </motion.span>
                    </motion.div>
                </div>
            </div>

            {/* Horizontal Line Reveal */}
            <motion.div
                className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2"
                initial={{ scaleX: 0 }}
                animate={showContent ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.8 }}
            />

            {/* Subtitle - Appears after animation */}
            <motion.div
                className="absolute bottom-32 left-0 right-0 z-10 px-8 text-center md:px-12 lg:px-16"
                initial={{ opacity: 0, y: 30 }}
                animate={showContent ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <p
                    className="mx-auto max-w-xl text-base text-white/70 md:text-lg"
                    style={{ lineHeight: 1.6 }}
                >
                    Translating visions with reality, balancing idealism with practicality, and
                    <br className="hidden md:block" />
                    honoring the interplay between humans, space, and nature.
                </p>
            </motion.div>

            {/* Scroll Indicator - Bottom Center */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={showContent ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-3">
                    {/* Animated arc/semi-circle */}
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="relative"
                    >
                        <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                            <path
                                d="M5 5 C5 5, 30 30, 55 5"
                                stroke="rgba(255,255,255,0.4)"
                                strokeWidth="1.5"
                                fill="none"
                            />
                        </svg>
                    </motion.div>
                    <span
                        className="text-xs uppercase tracking-[0.2em] text-white/50"
                        style={{ letterSpacing: '0.2em' }}
                    >
                        Scroll
                    </span>
                </div>
            </motion.div>

        </section>
    );
}

