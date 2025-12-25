"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface PhilosophyStep {
    title: string;
    subtitle: string;
    description: string;
    points: string[];
}

const philosophySteps: PhilosophyStep[] = [
    {
        title: "DESAIN",
        subtitle: "Layanan Desain Arsitektur",
        description: "Menciptakan blueprint impian Anda dengan ketelitian dan kreativitas tinggi.",
        points: [
            "Desain rumah tinggal",
            "3D visual & gambar kerja",
            "Desain sesuai budget",
            "Siap dibangun tanpa revisi berulang"
        ]
    },
    {
        title: "BANGUN",
        subtitle: "Jasa Bangun Rumah",
        description: "Mewujudkan desain menjadi kenyataan dengan standar konstruksi terbaik.",
        points: [
            "Rumah baru 1-3 lantai",
            "Sistem kerja transparan",
            "Material sesuai spesifikasi",
            "Pengawasan langsung tim internal"
        ]
    },
    {
        title: "RENOVASI",
        subtitle: "Jasa Renovasi Rumah",
        description: "Mentransformasi ruang lama menjadi pengalaman baru yang lebih baik.",
        points: [
            "Renovasi sebagian / total",
            "Upgrade fasad & interior",
            "Penambahan lantai / ruangan",
            "Solusi renovasi bertahap"
        ]
    }
];

// Mobile Step with timeline
function MobileStepSection({ step, index, isLast }: { step: PhilosophyStep; index: number; isLast: boolean }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <div ref={ref} className="relative pl-12">
            {/* Timeline line - fills on scroll */}
            <div
                className="absolute left-4 top-0 bottom-0 w-px"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute inset-0 origin-top"
                    style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
                />
            </div>

            {/* Timeline dot */}
            <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute left-2 top-0 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                style={{
                    borderColor: 'rgba(255,255,255,0.5)',
                    backgroundColor: '#1A5F5F'
                }}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
                />
            </motion.div>

            {/* Content */}
            <div className="pb-16">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-xs uppercase tracking-widest mb-3 block"
                    style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em' }}
                >
                    Step {index + 1}
                </motion.span>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-4xl font-light tracking-wide mb-3"
                    style={{ color: '#FFFFFF', fontWeight: 200 }}
                >
                    {step.title}
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-sm mb-4"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                    {step.subtitle}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-sm mb-4 leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}
                >
                    {step.description}
                </motion.p>

                <ul className="space-y-2">
                    {step.points.map((point, pointIndex) => (
                        <motion.li
                            key={pointIndex}
                            initial={{ opacity: 0, x: 10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.7 + pointIndex * 0.08 }}
                            className="flex items-center gap-3 text-sm"
                        >
                            <span
                                className="w-1 h-1 rounded-full flex-shrink-0"
                                style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
                            />
                            <span style={{ color: 'rgba(255,255,255,0.5)' }}>
                                {point}
                            </span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

// Desktop Step (original)
function DesktopStepSection({ step, index, isLast }: { step: PhilosophyStep; index: number; isLast: boolean }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });

    return (
        <div ref={ref} className="relative py-24 md:py-32 flex items-center">
            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-32 xl:gap-40 items-start">
                    {/* Left - Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className={index % 2 === 1 ? "lg:order-2" : ""}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-xs uppercase tracking-widest mb-4 block"
                            style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em' }}
                        >
                            Step {index + 1}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-wide mb-8"
                            style={{ color: '#FFFFFF', fontWeight: 200 }}
                        >
                            {step.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="text-lg"
                            style={{ color: 'rgba(255,255,255,0.5)' }}
                        >
                            {step.subtitle}
                        </motion.p>
                    </motion.div>

                    {/* Right - Description */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className={index % 2 === 1 ? "lg:order-1" : ""}
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="text-lg mb-8 leading-relaxed"
                            style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}
                        >
                            {step.description}
                        </motion.p>

                        <ul className="space-y-4">
                            {step.points.map((point, pointIndex) => (
                                <motion.li
                                    key={pointIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.8 + pointIndex * 0.1
                                    }}
                                    className="flex items-center gap-4"
                                >
                                    <span
                                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                        style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
                                    />
                                    <span style={{ color: 'rgba(255,255,255,0.6)' }}>
                                        {point}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Connecting line to next step */}
            {!isLast && (
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 origin-top"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                />
            )}
        </div>
    );
}

export function Tagline() {
    const containerRef = useRef(null);
    const headerInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section
            id="philosophy"
            ref={containerRef}
            className="relative overflow-hidden"
            style={{ backgroundColor: '#1A5F5F' }}
        >
            {/* Header */}
            <div className="py-16 md:py-24 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center px-8"
                >
                    <span
                        className="text-xs uppercase tracking-widest mb-6 block"
                        style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.3em' }}
                    >
                        Our Process
                    </span>
                    <h2
                        className="text-3xl md:text-5xl lg:text-6xl font-light"
                        style={{ color: '#FFFFFF', fontWeight: 200 }}
                    >
                        Bagaimana Kami Bekerja
                    </h2>
                </motion.div>
            </div>

            {/* Mobile Steps with Timeline */}
            <div className="lg:hidden px-6 pb-8">
                {philosophySteps.map((step, index) => (
                    <MobileStepSection
                        key={index}
                        step={step}
                        index={index}
                        isLast={index === philosophySteps.length - 1}
                    />
                ))}
            </div>

            {/* Desktop Steps */}
            <div className="hidden lg:block">
                {philosophySteps.map((step, index) => (
                    <DesktopStepSection
                        key={index}
                        step={step}
                        index={index}
                        isLast={index === philosophySteps.length - 1}
                    />
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="py-16 md:py-28 flex items-center justify-center">
                <motion.a
                    href="#contact"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="group inline-flex items-center gap-4"
                >
                    <span
                        className="text-sm uppercase tracking-widest transition-all duration-300 group-hover:tracking-[0.3em]"
                        style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.15em' }}
                    >
                        Mulai Proyek Anda
                    </span>
                    <span
                        className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border transition-all duration-500 group-hover:w-20 group-hover:bg-white overflow-hidden"
                        style={{ borderColor: 'rgba(255,255,255,0.3)' }}
                    >
                        <svg
                            className="h-4 w-4 md:h-5 md:w-5 transition-all duration-300 group-hover:text-[#1A5F5F] group-hover:translate-x-1"
                            style={{ color: 'rgba(255,255,255,0.7)' }}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </motion.a>
            </div>
        </section>
    );
}
