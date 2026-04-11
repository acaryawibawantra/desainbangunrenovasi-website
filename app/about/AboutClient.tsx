"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform, animate } from "framer-motion";
import { CTA } from "@/components/sections/CTA";

/* ─── FADE UP helper ─── */
function FadeUp({ children, delay = 0, className = "" }: {
    children: React.ReactNode; delay?: number; className?: string;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
        >
            {children}
        </motion.div>
    );
}

/* ─── ANIMATED COUNT ─── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!ref.current || !inView) return;
        const ctrl = animate(0, to, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v) + suffix; },
        });
        return () => ctrl.stop();
    }, [inView, to, suffix]);

    return <span ref={ref}>0{suffix}</span>;
}

/* ─── VALUES data ─── */
const VALUES = [
    {
        num: "01",
        title: "Presisi",
        desc: "Setiap detail dikerjakan dengan standar tertinggi. Kami percaya bahwa kualitas terletak pada ketepatan eksekusi, bukan hanya konsep.",
    },
    {
        num: "02",
        title: "Kolaborasi",
        desc: "Kami bekerja bersama klien di setiap tahap — mulai dari desain awal hingga serah terima — memastikan visi Anda terwujud.",
    },
    {
        num: "03",
        title: "Inovasi",
        desc: "Teknologi terbaru dan metode modern kami terapkan agar setiap bangunan tidak hanya kuat, tetapi juga efisien dan berkelanjutan.",
    },
];

const STATS = [
    { value: 10, suffix: "+", label: "Tahun Pengalaman" },
    { value: 50, suffix: "+", label: "Proyek Selesai" },
    { value: 30, suffix: "+", label: "Tenaga Ahli" },
    { value: 100, suffix: "%", label: "Kepuasan Klien" },
];

/* ═══════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════ */
export function AboutClient() {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <main className="bg-[#e8e5e0] min-h-screen">

            {/* ══════════════════════════════
                1. HERO
            ══════════════════════════════ */}
            <section ref={heroRef} className="relative h-screen overflow-hidden">
                {/* Parallax image */}
                <motion.div className="absolute inset-0" style={{ y: heroY }}>
                    <Image
                        src="/images/about/A0.png"
                        alt="ASKRA Konstruksi"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                </motion.div>

                {/* Hero content */}
                <motion.div
                    className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-14 max-w-[1320px] mx-auto"
                    style={{ opacity: heroOpacity }}
                >
                    <motion.span
                        className="text-[0.65rem] tracking-[0.25em] uppercase text-white/50 mb-5 block"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        CV Adi Sarana Kreasi — Est. 2015
                    </motion.span>

                    <div className="overflow-hidden">
                        <motion.h1
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold text-white leading-[1.05] tracking-[-0.02em]"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        >
                            Membangun<br />Impian,<br />Mewariskan<br />Karya.
                        </motion.h1>
                    </div>

                    {/* Scroll indicator */}
                    <motion.div
                        className="absolute bottom-10 right-8 md:right-14 flex flex-col items-center gap-2 text-white/40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <span className="text-[9px] tracking-[0.3em] uppercase rotate-90 mb-2">Scroll</span>
                        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 w-full h-1/2 bg-white/60"
                                animate={{ y: ["-100%", "200%"] }}
                                transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ══════════════════════════════
                2. STORY
            ══════════════════════════════ */}
            <section className="py-24 md:py-32 px-6 md:px-14 max-w-[1320px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                    {/* Left */}
                    <div>
                        <FadeUp>
                            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#786e62] border border-[#b4a997] px-2 py-1 rounded-[3px] inline-block mb-8">
                                Tentang Kami
                            </span>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-medium text-[#1c1814] tracking-[-0.02em] leading-[1.15] mb-8">
                                Lebih dari sekadar konstruksi
                            </h2>
                        </FadeUp>
                        <FadeUp delay={0.2}>
                            <p className="text-[#5a5248] text-base md:text-lg leading-[1.8] mb-6">
                                ASKRA (CV Adi Sarana Kreasi) adalah perusahaan konstruksi dan jasa arsitektur yang berdiri sejak 2015 di Jakarta. Kami hadir dengan keyakinan bahwa setiap bangunan adalah ekspresi dari nilai, aspirasi, dan kehidupan penghuninya.
                            </p>
                            <p className="text-[#5a5248] text-base md:text-lg leading-[1.8]">
                                Dari renovasi hunian sederhana hingga proyek komersial berskala besar, kami menangani setiap pekerjaan dengan standar profesional tertinggi — presisi dalam teknik, keindahan dalam estetika, dan integritas dalam setiap langkah.
                            </p>
                        </FadeUp>
                        <FadeUp delay={0.3}>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 mt-10 text-sm font-medium text-[#1c1814] border-b border-[#1c1814]/30 pb-1 hover:border-[#1c1814] transition-colors duration-200 group"
                            >
                                Konsultasi Gratis
                                <svg
                                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </FadeUp>
                    </div>

                    {/* Right: image */}
                    <FadeUp delay={0.15} className="relative">
                        <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                            <Image
                                src="/images/about/A4.jpg"
                                alt="Tim ASKRA Konstruksi"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -left-6 bg-[#2a1f14] text-white px-6 py-5 rounded-lg hidden md:block">
                            <p className="text-3xl font-light tracking-tight">10+</p>
                            <p className="text-xs text-white/60 tracking-widest uppercase mt-1">Tahun Berdiri</p>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* ══════════════════════════════
                3. STATS
            ══════════════════════════════ */}
            <section className="bg-[#2a1f14] py-20 md:py-28 px-6 md:px-14">
                <div className="max-w-[1320px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10 rounded-lg overflow-hidden">
                        {STATS.map((s, i) => (
                            <div
                                key={i}
                                className={`p-8 md:p-10 border-white/10 ${i < STATS.length - 1 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""}`}
                            >
                                <div className="text-5xl md:text-6xl font-light text-white tracking-tight leading-none mb-3">
                                    <Counter to={s.value} suffix={s.suffix} />
                                </div>
                                <p className="text-xs text-white/40 tracking-[0.12em] uppercase">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════
                4. VALUES
            ══════════════════════════════ */}
            <section className="py-24 md:py-36 px-6 md:px-14 max-w-[1320px] mx-auto">
                <FadeUp>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
                        <h2 className="text-4xl md:text-5xl font-medium text-[#1c1814] tracking-[-0.02em] leading-[1.15] max-w-md">
                            Nilai yang kami pegang teguh
                        </h2>
                        <p className="text-[#5a5248] text-sm md:text-base leading-relaxed max-w-xs">
                            Prinsip-prinsip ini bukan sekadar slogan — kami hidup dan bekerja berdasarkannya setiap hari.
                        </p>
                    </div>
                </FadeUp>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#ccc8c0] rounded-lg overflow-hidden">
                    {VALUES.map((v, i) => (
                        <FadeUp key={i} delay={i * 0.1}>
                            <div className={`p-8 md:p-10 h-full bg-[#e8e5e0] hover:bg-[#dedad4] transition-colors duration-200 ${i < VALUES.length - 1 ? "border-b md:border-b-0 md:border-r border-[#ccc8c0]" : ""}`}>
                                <span className="text-[0.65rem] text-[#9a9088] tracking-[0.15em] uppercase mb-6 block">{v.num}</span>
                                <h3 className="text-2xl md:text-3xl font-medium text-[#1c1814] tracking-[-0.01em] mb-4">{v.title}</h3>
                                <p className="text-[#5a5248] text-sm md:text-base leading-relaxed">{v.desc}</p>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════
                5. FULL-WIDTH IMAGE
            ══════════════════════════════ */}
            <section className="px-6 md:px-14 pb-24 md:pb-32 max-w-[1320px] mx-auto">
                <FadeUp>
                    <div className="relative w-full aspect-[16/7] rounded-lg overflow-hidden">
                        <Image
                            src="/images/hero/image-hero.jpg"
                            alt="Proyek ASKRA Konstruksi"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1320px"
                        />
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-white text-xl md:text-3xl font-light tracking-[-0.01em] text-center px-6 max-w-2xl">
                                &ldquo;Setiap bangunan adalah kisah — kami memastikan kisah Anda diceritakan dengan sempurna.&rdquo;
                            </p>
                        </div>
                    </div>
                </FadeUp>
            </section>

            {/* ══════════════════════════════
                6. CTA
            ══════════════════════════════ */}
            <CTA />

        </main>
    );
}
