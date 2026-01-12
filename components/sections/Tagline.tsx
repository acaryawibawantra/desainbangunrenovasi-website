"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "@/hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

// Counter Component with Animation
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (!hasStarted) return;

        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target, hasStarted]);

    useEffect(() => {
        const timer = setTimeout(() => setHasStarted(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <span className="tabular-nums">
            {count}
            {suffix}
        </span>
    );
}

// 3D Card Component
function Card3D({
    children,
    className = ""
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative ${className}`}
        >
            <motion.div
                style={{
                    transform: isHovered ? "translateZ(50px)" : "translateZ(0px)",
                    transformStyle: "preserve-3d",
                }}
                transition={{ duration: 0.3 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

export function Tagline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const word1Ref = useRef<HTMLDivElement>(null);
    const word2Ref = useRef<HTMLDivElement>(null);
    const word3Ref = useRef<HTMLDivElement>(null);
    const arrow1Ref = useRef<HTMLDivElement>(null);
    const arrow2Ref = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();
    const [isMounted, setIsMounted] = useState(false);

    // Ensure particles only render on client-side to avoid hydration mismatch
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "+=200%",
                pin: true,
                pinSpacing: true,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=200%",
                    scrub: 0.5,
                }
            });

            tl.fromTo(word1Ref.current,
                { opacity: 0, y: 50, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" },
                0
            );

            tl.fromTo(arrow1Ref.current,
                { scaleX: 0, scaleY: 0, opacity: 0 },
                { scaleX: 1, scaleY: 1, opacity: 1, duration: 0.5, ease: "power2.out" },
                0.5
            );

            tl.fromTo(word2Ref.current,
                { opacity: 0, y: 50, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" },
                1
            );

            tl.fromTo(arrow2Ref.current,
                { scaleX: 0, scaleY: 0, opacity: 0 },
                { scaleX: 1, scaleY: 1, opacity: 1, duration: 0.5, ease: "power2.out" },
                1.5
            );

            tl.fromTo(word3Ref.current,
                { opacity: 0, y: 50, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" },
                2
            );

        }, containerRef);

        return () => ctx.revert();
    }, [isMobile]);

    // Generate particles only on client-side
    const particles = isMounted ? Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 20 + 10,
    })) : [];



    return (
        <section
            id="tagline"
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-8 overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #6B2D2E 0%, #9E4244 30%, #C56B6D 60%, #9E4244 80%, #6B2D2E 100%)',
            }}
        >
            {/* Animated Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full bg-white/20"
                        style={{
                            width: particle.size,
                            height: particle.size,
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Floating Background Orb */}
            {!isMobile && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        className="absolute w-[600px] h-[600px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
                            filter: 'blur(60px)',
                        }}
                        animate={{
                            x: ['-20%', '120%', '-20%'],
                            y: ['0%', '50%', '0%'],
                        }}
                        transition={{
                            duration: 25,
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
            <motion.p
                className="absolute top-10 md:top-20 text-white/40 text-xs md:text-sm tracking-[0.4em] font-light uppercase z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                Keunggulan Kami
            </motion.p>



            {/* Main Content */}
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mt-10 relative z-10">

                {/* Word 1 - DESAIN */}
                <div ref={word1Ref} className="flex flex-col items-center opacity-0 group">
                    <Card3D className="cursor-pointer">
                        <div className="relative">
                            <motion.h2
                                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white/90 group-hover:text-white transition-all duration-300"
                                style={{ textShadow: '0 0 40px rgba(255,255,255,0.2)' }}
                                whileHover={{ scale: 1.05 }}
                            >
                                DESAIN
                            </motion.h2>
                            {/* Glow effect on hover */}
                            <motion.div
                                className="absolute -inset-4 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ zIndex: -1 }}
                            />
                        </div>
                    </Card3D>
                    <motion.span
                        className="mt-3 text-xs tracking-widest uppercase text-white/50 group-hover:text-white/70 transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        Visualisasi & Konsep
                    </motion.span>
                </div>

                {/* Arrow 1 */}
                <div ref={arrow1Ref} className="opacity-0 origin-left md:origin-center">
                    <motion.div
                        className="hidden md:block mx-6 lg:mx-10 w-20 lg:w-32 h-[1px] bg-white/30 relative overflow-hidden"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>
                    <div className="md:hidden h-10 w-[1px] bg-white/30 my-2" />
                </div>

                {/* Word 2 - BANGUN */}
                <div ref={word2Ref} className="flex flex-col items-center opacity-0 group">
                    <Card3D className="cursor-pointer">
                        <div className="relative">
                            <motion.h2
                                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white/90 group-hover:text-white transition-all duration-300"
                                style={{ textShadow: '0 0 40px rgba(255,255,255,0.2)' }}
                                whileHover={{ scale: 1.05 }}
                            >
                                BANGUN
                            </motion.h2>
                            <motion.div
                                className="absolute -inset-4 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ zIndex: -1 }}
                            />
                        </div>
                    </Card3D>
                    <motion.span
                        className="mt-3 text-xs tracking-widest uppercase text-white/50 group-hover:text-white/70 transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        Konstruksi & Material
                    </motion.span>
                </div>

                {/* Arrow 2 */}
                <div ref={arrow2Ref} className="opacity-0 origin-left md:origin-center">
                    <motion.div
                        className="hidden md:block mx-6 lg:mx-10 w-20 lg:w-32 h-[1px] bg-white/30 relative overflow-hidden"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                        />
                    </motion.div>
                    <div className="md:hidden h-10 w-[1px] bg-white/30 my-2" />
                </div>

                {/* Word 3 - RENOVASI */}
                <div ref={word3Ref} className="flex flex-col items-center opacity-0 group">
                    <Card3D className="cursor-pointer">
                        <div className="relative">
                            <motion.h2
                                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white/90 group-hover:text-white transition-all duration-300"
                                style={{ textShadow: '0 0 40px rgba(255,255,255,0.2)' }}
                                whileHover={{ scale: 1.05 }}
                            >
                                RENOVASI
                            </motion.h2>
                            <motion.div
                                className="absolute -inset-4 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ zIndex: -1 }}
                            />
                        </div>
                    </Card3D>
                    <motion.span
                        className="mt-3 text-xs tracking-widest uppercase text-white/50 group-hover:text-white/70 transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                    >
                        Transformasi & Upgrade
                    </motion.span>
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
