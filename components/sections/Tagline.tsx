"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "@/hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

export function Tagline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const word1Ref = useRef<HTMLDivElement>(null);
    const word2Ref = useRef<HTMLDivElement>(null);
    const word3Ref = useRef<HTMLDivElement>(null);
    const arrow1Ref = useRef<HTMLDivElement>(null);
    const arrow2Ref = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Pin the section
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "+=200%",
                pin: true,
                pinSpacing: true,
            });

            // Timeline for sequential reveal
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=200%",
                    scrub: 0.5,
                }
            });

            // Word 1 - DESAIN
            tl.fromTo(word1Ref.current,
                { opacity: 0, y: 50, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" },
                0
            );

            // Arrow 1
            tl.fromTo(arrow1Ref.current,
                { scaleX: 0, scaleY: 0, opacity: 0 },
                { scaleX: 1, scaleY: 1, opacity: 1, duration: 0.5, ease: "power2.out" },
                0.5
            );

            // Word 2 - BANGUN
            tl.fromTo(word2Ref.current,
                { opacity: 0, y: 50, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" },
                1
            );

            // Arrow 2
            tl.fromTo(arrow2Ref.current,
                { scaleX: 0, scaleY: 0, opacity: 0 },
                { scaleX: 1, scaleY: 1, opacity: 1, duration: 0.5, ease: "power2.out" },
                1.5
            );

            // Word 3 - RENOVASI
            tl.fromTo(word3Ref.current,
                { opacity: 0, y: 50, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" },
                2
            );

        }, containerRef);

        return () => ctx.revert();
    }, [isMobile]);

    const words = [
        { ref: word1Ref, text: "DESAIN", description: "Visualisasi & Konsep" },
        { ref: word2Ref, text: "BANGUN", description: "Konstruksi & Material" },
        { ref: word3Ref, text: "RENOVASI", description: "Transformasi & Upgrade" }
    ];

    return (
        <section
            id="tagline"
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-8 overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #6B2D2E 0%, #9E4244 30%, #C56B6D 60%, #9E4244 80%, #6B2D2E 100%)',
            }}
        >
            {/* Background Effects */}
            {!isMobile && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        className="absolute w-[500px] h-[500px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
                            filter: 'blur(40px)',
                        }}
                        animate={{
                            x: ['-20%', '120%', '-20%'],
                            y: ['0%', '50%', '0%'],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                </div>
            )}

            {/* Mobile: Static overlay */}
            {isMobile && (
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, transparent 70%)',
                    }}
                />
            )}

            {/* Radial Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0.2)_100%)] pointer-events-none" />

            {/* Header */}
            <p className="absolute top-10 md:top-20 text-white/40 text-xs md:text-sm tracking-[0.4em] font-light uppercase z-10">
                Keunggulan Kami
            </p>

            {/* Main Content */}
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mt-10 relative z-10">

                {/* Word 1 - DESAIN */}
                <div ref={word1Ref} className="flex flex-col items-center opacity-0">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white/90 hover:text-white transition-all duration-300"
                        style={{ textShadow: '0 0 40px rgba(255,255,255,0.2)' }}
                    >
                        DESAIN
                    </h2>
                    <span className="mt-3 text-xs tracking-widest uppercase text-white/50">
                        Visualisasi & Konsep
                    </span>
                </div>

                {/* Arrow 1 */}
                <div ref={arrow1Ref} className="opacity-0 origin-left md:origin-center">
                    {/* Desktop Arrow */}
                    <div className="hidden md:block mx-6 lg:mx-10 w-20 lg:w-32 h-[1px] bg-white/30" />
                    {/* Mobile Arrow */}
                    <div className="md:hidden h-10 w-[1px] bg-white/30 my-2" />
                </div>

                {/* Word 2 - BANGUN */}
                <div ref={word2Ref} className="flex flex-col items-center opacity-0">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white/90 hover:text-white transition-all duration-300"
                        style={{ textShadow: '0 0 40px rgba(255,255,255,0.2)' }}
                    >
                        BANGUN
                    </h2>
                    <span className="mt-3 text-xs tracking-widest uppercase text-white/50">
                        Konstruksi & Material
                    </span>
                </div>

                {/* Arrow 2 */}
                <div ref={arrow2Ref} className="opacity-0 origin-left md:origin-center">
                    {/* Desktop Arrow */}
                    <div className="hidden md:block mx-6 lg:mx-10 w-20 lg:w-32 h-[1px] bg-white/30" />
                    {/* Mobile Arrow */}
                    <div className="md:hidden h-10 w-[1px] bg-white/30 my-2" />
                </div>

                {/* Word 3 - RENOVASI */}
                <div ref={word3Ref} className="flex flex-col items-center opacity-0">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white/90 hover:text-white transition-all duration-300"
                        style={{ textShadow: '0 0 40px rgba(255,255,255,0.2)' }}
                    >
                        RENOVASI
                    </h2>
                    <span className="mt-3 text-xs tracking-widest uppercase text-white/50">
                        Transformasi & Upgrade
                    </span>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
                <span className="text-[10px] tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
}
