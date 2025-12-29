"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

export function Tagline() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-20%" });
    const isMobile = useIsMobile();

    return (
        <section
            ref={containerRef}
            className="relative min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 md:px-8 overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #0F4040 0%, #1A5F5F 30%, #2A7A7A 60%, #1A5F5F 80%, #0F4040 100%)',
            }}
        >
            {/* Animated Light Orbs - DESKTOP ONLY */}
            {!isMobile && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Floating Light 1 */}
                    <motion.div
                        className="absolute w-[500px] h-[500px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
                            filter: 'blur(40px)',
                        }}
                        animate={{
                            x: ['-20%', '120%', '-20%'],
                            y: ['0%', '50%', '0%'],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />

                    {/* Floating Light 2 */}
                    <motion.div
                        className="absolute w-[400px] h-[400px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
                            filter: 'blur(50px)',
                        }}
                        animate={{
                            x: ['100%', '-20%', '100%'],
                            y: ['80%', '20%', '80%'],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />

                    {/* Floating Light 3 - Subtle top */}
                    <motion.div
                        className="absolute w-[600px] h-[300px] rounded-full top-0"
                        style={{
                            background: 'radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 60%)',
                            filter: 'blur(60px)',
                        }}
                        animate={{
                            x: ['30%', '70%', '30%'],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />

                    {/* Shimmer Effect */}
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)',
                        }}
                        animate={{
                            x: ['-100%', '100%'],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                </div>
            )}

            {/* Mobile: Static subtle overlay instead of heavy animations */}
            {isMobile && (
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)',
                        }}
                    />
                </div>
            )}

            {/* Subtle Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0.2)_100%)] pointer-events-none" />

            {/* Header */}
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-10 md:top-20 text-white/40 text-xs md:text-sm tracking-[0.4em] font-light uppercase z-10"
            >
                Workflow
            </motion.p>

            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 mt-10 relative z-10">

                {/* STEP 1: DESAIN */}
                <StepItem
                    text="DESAIN"
                    description="Visualisasi & Konsep"
                    detail="Kami menerjemahkan impian Anda menjadi blueprint visual yang presisi dan estetis."
                    index={0}
                    isInView={isInView}
                    isMobile={isMobile}
                />

                {/* ARROW 1 */}
                <Arrow index={0} isInView={isInView} isMobile={isMobile} />

                {/* STEP 2: BANGUN */}
                <StepItem
                    text="BANGUN"
                    description="Konstruksi & Material"
                    detail="Realisasi fisik dengan standar mutu terbaik dan pengawasan ketat."
                    index={1}
                    isInView={isInView}
                    isMobile={isMobile}
                />

                {/* ARROW 2 */}
                <Arrow index={1} isInView={isInView} isMobile={isMobile} />

                {/* STEP 3: RENOVASI */}
                <StepItem
                    text="RENOVASI"
                    description="Transformasi & Upgrade"
                    detail="Memberikan nafas baru pada bangunan lama untuk nilai dan kenyamanan lebih."
                    index={2}
                    isInView={isInView}
                    isMobile={isMobile}
                />

            </div>
        </section>
    );
}

function StepItem({ text, description, detail, index, isInView, isMobile }: { text: string; description: string; detail: string; index: number; isInView: boolean; isMobile: boolean }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 + (index * 0.3), ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center w-full md:w-auto group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Text with Outline Effect */}
            <h2
                className={`text-5xl md:text-6xl lg:text-7xl font-light tracking-tight transition-all duration-500 ${isHovered ? 'text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]' : 'text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/50'}`}
                style={{
                    WebkitTextStroke: isHovered ? '0px' : '1px rgba(255,255,255,0.4)'
                }}
            >
                {text}
            </h2>

            {/* Simple label (always visible, fades out on hover) */}
            <span className={`mt-4 text-xs tracking-widest uppercase text-white/50 transition-opacity duration-300 absolute -bottom-8 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                {description}
            </span>

            {/* Hover Detail Card - Desktop Only */}
            {!isMobile && (
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 5, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full mt-6 w-64 p-4 bg-black/30 backdrop-blur-xl border border-white/20 rounded-xl text-center shadow-2xl z-20"
                        >
                            <p className="text-white/90 text-sm font-light leading-relaxed">
                                {detail}
                            </p>
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/30 border-t border-l border-white/20 rotate-45" />
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </motion.div>
    );
}

function Arrow({ index, isInView, isMobile }: { index: number; isInView: boolean; isMobile: boolean }) {
    return (
        <>
            {/* Desktop Horizontal Arrow */}
            <div className="hidden md:block flex-1 mx-4 relative h-[2px] bg-white/10 overflow-hidden rounded-full">
                {/* Drawing Line Animation */}
                <motion.div
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1.5, delay: 0.6 + (index * 0.3), ease: "easeInOut" }}
                    className="absolute inset-0 bg-white/30"
                />

                {/* Moving Particle - Infinite Loop - Desktop Only */}
                {!isMobile && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={isInView ? { x: "200%" } : {}}
                        transition={{
                            duration: 2,
                            ease: "linear",
                            repeat: Infinity,
                            repeatDelay: 0.5,
                            delay: 1.5 + (index * 0.3)
                        }}
                        className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-90 blur-[2px]"
                    />
                )}
            </div>

            {/* Mobile Vertical Arrow - Simplified */}
            <div className="md:hidden w-[2px] h-16 my-2 bg-white/10 relative overflow-hidden rounded-full">
                <motion.div
                    initial={{ scaleY: 0, originY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 1, delay: 0.4 + (index * 0.2), ease: "easeOut" }}
                    className="absolute inset-0 bg-white/30"
                />
                {/* No infinite particle animation on mobile */}
            </div>
        </>
    );
}
