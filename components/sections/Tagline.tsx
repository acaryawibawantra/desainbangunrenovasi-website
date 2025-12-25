"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export function Tagline() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-20%" });

    return (
        <section
            ref={containerRef}
            className="relative bg-[#1A5F5F] min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 md:px-8 overflow-hidden"
        >
            {/* Subtle Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

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
                />

                {/* ARROW 1 */}
                <Arrow index={0} isInView={isInView} />

                {/* STEP 2: BANGUN */}
                <StepItem
                    text="BANGUN"
                    description="Konstruksi & Material"
                    detail="Realisasi fisik dengan standar mutu terbaik dan pengawasan ketat."
                    index={1}
                    isInView={isInView}
                />

                {/* ARROW 2 */}
                <Arrow index={1} isInView={isInView} />

                {/* STEP 3: RENOVASI */}
                <StepItem
                    text="RENOVASI"
                    description="Transformasi & Upgrade"
                    detail="Memberikan nafas baru pada bangunan lama untuk nilai dan kenyamanan lebih."
                    index={2}
                    isInView={isInView}
                />

            </div>
        </section>
    );
}

function StepItem({ text, description, detail, index, isInView }: { text: string; description: string; detail: string; index: number; isInView: boolean }) {
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
                className={`text-5xl md:text-6xl lg:text-7xl font-light tracking-tight transition-all duration-500 ${isHovered ? 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/40'}`}
                style={{
                    WebkitTextStroke: isHovered ? '0px' : '1px rgba(255,255,255,0.3)'
                }}
            >
                {text}
            </h2>

            {/* Simple label (always visible, fades out on hover) */}
            <span className={`mt-4 text-xs tracking-widest uppercase text-white/40 transition-opacity duration-300 absolute -bottom-8 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                {description}
            </span>

            {/* Hover Detail Card */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-6 w-64 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl text-center shadow-2xl z-20"
                    >
                        <p className="text-white/90 text-sm font-light leading-relaxed">
                            {detail}
                        </p>
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/40 border-t border-l border-white/10 rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

function Arrow({ index, isInView }: { index: number; isInView: boolean }) {
    return (
        <>
            {/* Desktop Horizontal Arrow */}
            <div className="hidden md:block flex-1 mx-4 relative h-[2px] bg-white/10 overflow-hidden rounded-full">
                {/* Drawing Line Animation */}
                <motion.div
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1.5, delay: 0.6 + (index * 0.3), ease: "easeInOut" }}
                    className="absolute inset-0 bg-white/20"
                />

                {/* Moving Particle - Infinite Loop */}
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={isInView ? { x: "200%" } : {}}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity,
                        repeatDelay: 0.5,
                        delay: 1.5 + (index * 0.3) // Wait for line to draw first
                    }}
                    className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-80 blur-[2px]"
                />
            </div>

            {/* Mobile Vertical Arrow */}
            <div className="md:hidden w-[2px] h-20 my-4 bg-white/10 relative overflow-hidden rounded-full">
                <motion.div
                    initial={{ scaleY: 0, originY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 1.5, delay: 0.6 + (index * 0.3), ease: "easeInOut" }}
                    className="absolute inset-0 bg-white/20"
                />
                <motion.div
                    initial={{ y: "-100%" }}
                    animate={isInView ? { y: "200%" } : {}}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity,
                        repeatDelay: 0.5,
                        delay: 1.5 + (index * 0.3)
                    }}
                    className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-white to-transparent opacity-80 blur-[2px]"
                />
            </div>
        </>
    );
}
