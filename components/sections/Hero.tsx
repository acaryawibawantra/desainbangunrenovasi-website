"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

export function Hero() {
    const imageRef = useRef<HTMLDivElement>(null);
    const [animationComplete, setAnimationComplete] = useState(false);
    const isMobile = useIsMobile();

    // Initial positions for each word
    const initialPositions = [
        { x: -100, y: -100, rotate: 0 },  // Desain - top left
        { x: 0, y: 0, rotate: 0 },         // Bangun - center (stays in place initially)
        { x: 100, y: 100, rotate: 0 },     // Renovasi - bottom right
    ];

    useEffect(() => {
        // Complete animation after 2 seconds
        const timer = setTimeout(() => {
            setAnimationComplete(true);
        }, 10);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Skip parallax on mobile for better performance
        if (isMobile) return;

        // Subtle parallax effect on hero image - DESKTOP ONLY
        const handleScroll = () => {
            if (imageRef.current) {
                const scrolled = window.scrollY;
                // Use transform3d for hardware acceleration
                imageRef.current.style.transform = `translate3d(0, ${scrolled * 0.3}px, 0)`;
            }
        };

        // Add passive listener for better scroll performance
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile]);

    const words = ["Desain", "Bangun", "Renovasi"];

    return (
        <section
            id="hero"
            className="relative min-h-screen overflow-hidden"
            style={{ backgroundColor: '#1a1a1a' }}
        >
            {/* Full-Screen Background Image */}
            <div ref={imageRef} className="absolute inset-0">
                <Image
                    src="/images/hero/here-bg2.webp"
                    alt="INSIGN Interior Design"
                    fill
                    className="object-cover"
                    style={{ opacity: 0.85 }}
                    priority
                />
                {/* Dark gradient overlay from bottom */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 100%)'
                    }}
                />
            </div>

            {/* Logo - Top Left */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: animationComplete ? 1 : 0, y: animationComplete ? 0 : -20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-8 left-8 z-20 md:top-10 md:left-12"
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

            {/* Scattered Words - Initial Random Positions */}
            <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
                <div className="relative flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 lg:gap-x-8">
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{
                                opacity: 0.8,
                                x: initialPositions[index].x,
                                y: initialPositions[index].y,
                                rotate: initialPositions[index].rotate,
                                scale: 0.8,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                y: 0,
                                rotate: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 1.2,
                                delay: index * 0.1,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            className="text-5xl font-bold text-white md:text-7xl lg:text-8xl xl:text-9xl"
                            style={{
                                fontWeight: 500,
                                letterSpacing: '-0.02em',
                            }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>
            </div>

            {/* Subtitle - Appears after animation */}
            <motion.div
                className="absolute bottom-32 left-0 right-0 z-10 px-8 text-center md:px-12 lg:px-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: animationComplete ? 1 : 0, y: animationComplete ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
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
                animate={{ opacity: animationComplete ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
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
