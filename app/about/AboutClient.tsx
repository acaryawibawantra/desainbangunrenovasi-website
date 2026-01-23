"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

// Counter Animation Component
function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!hasStarted) return;

        let start = 0;
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
    }, [target, hasStarted, duration]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="tabular-nums">
            {count}{suffix}
        </div>
    );
}

export function AboutClient() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const values = [
        {
            icon: "🎯",
            title: "Presisi",
            description: "Setiap detail dikerjakan dengan akurasi tinggi untuk hasil sempurna"
        },
        {
            icon: "⭐",
            title: "Kualitas Premium",
            description: "Material terbaik dan standar internasional dalam setiap proyek"
        },
        {
            icon: "💡",
            title: "Inovasi",
            description: "Mengadopsi teknologi dan metode konstruksi terkini"
        },
        {
            icon: "🤝",
            title: "Kepercayaan",
            description: "Komitmen penuh terhadap kepuasan dan kepercayaan klien"
        }
    ];

    const timeline = [
        { year: "2017", title: "Berdiri", description: "ASKRA didirikan dengan visi menjadi kontraktor terpercaya" },
        { year: "2019", title: "Ekspansi", description: "Membuka cabang dan menambah tim profesional" },
        { year: "2021", title: "100 Proyek", description: "Menyelesaikan 100+ proyek residential & commercial" },
        { year: "2023", title: "Award", description: "Meraih penghargaan Best Construction Company" },
        { year: "2026", title: "Sekarang", description: "150+ proyek selesai dengan 98% kepuasan klien" }
    ];

    const stats = [
        { number: 150, suffix: "+", label: "Proyek Selesai" },
        { number: 98, suffix: "%", label: "Kepuasan Klien" },
        { number: 7, suffix: "+", label: "Tahun Pengalaman" },
        { number: 50, suffix: "+", label: "Klien Setia" }
    ];

    const benefits = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Garansi Proyek",
            description: "Jaminan kualitas konstruksi dengan garansi resmi"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Tepat Waktu",
            description: "Komitmen penyelesaian proyek sesuai timeline"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Tim Profesional",
            description: "Tenaga ahli bersertifikat dan berpengalaman"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Harga Transparan",
            description: "RAB detail tanpa biaya tersembunyi"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
            title: "Konsultasi Gratis",
            description: "Diskusi kebutuhan proyek tanpa biaya"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Respon Cepat",
            description: "Layanan komunikasi 24/7 responsif"
        }
    ];

    return (
        <div className="bg-[#F4F1EE]">
            {/* Hero Section with Parallax */}
            <section ref={heroRef} className="relative h-screen overflow-hidden">
                <motion.div
                    style={{ y: imageY }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/images/portfolio/residential/project-1.png"
                        alt="ASKRA About"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                </motion.div>

                <motion.div
                    style={{ opacity: textOpacity }}
                    className="relative z-10 h-full flex items-center justify-center px-6"
                >
                    <div className="text-center text-white max-w-4xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 block text-white/80"
                        >
                            Tentang Kami
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        >
                            Membangun Impian,
                            <br />
                            <span className="text-teal">Menciptakan Warisan</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto"
                        >
                            CV ADI SARANA KREASI (ASKRA) adalah mitra terpercaya dalam mewujudkan visi arsitektur Anda melalui presisi dan desain yang matang.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 z-10">
                    <span className="text-xs tracking-wider uppercase">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </div>
            </section>

            {/* Company Philosophy/Values */}
            <section className="relative py-20 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-[#F4F1EE] to-rose/5" />

                {/* Floating Gradient Orbs */}
                <motion.div
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -40, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-teal/20 to-transparent rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-rose/15 to-transparent rounded-full blur-3xl"
                />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16 md:mb-20"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-block mb-4"
                        >
                            <span className="text-sm md:text-base tracking-[0.3em] uppercase text-teal/70 font-semibold">
                                Our Values
                            </span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-charcoal via-teal to-charcoal bg-clip-text text-transparent">
                            Nilai-Nilai Kami
                        </h2>
                        <p className="text-lg md:text-xl text-charcoal/60 max-w-2xl mx-auto font-light">
                            Prinsip yang menjadi fondasi setiap proyek kami
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.15,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                                whileHover={{
                                    y: -12,
                                    transition: { duration: 0.3 }
                                }}
                                className="group"
                            >
                                <div className="relative h-full">
                                    {/* Glow effect on hover */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-teal to-rose rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />

                                    {/* Card */}
                                    <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 h-full border border-white/50 group-hover:border-teal/30 overflow-hidden">
                                        {/* Gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-teal/0 via-transparent to-rose/0 group-hover:from-teal/5 group-hover:to-rose/5 transition-all duration-500" />

                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Icon with animated background */}
                                            <div className="relative mb-6">
                                                <motion.div
                                                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                                    transition={{ duration: 0.5 }}
                                                    className="relative inline-block"
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-rose/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                                                    <div className="relative text-6xl group-hover:scale-110 transition-transform duration-300">
                                                        {value.icon}
                                                    </div>
                                                </motion.div>
                                            </div>

                                            <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-4 group-hover:text-teal transition-colors duration-300">
                                                {value.title}
                                            </h3>
                                            <p className="text-charcoal/70 text-sm md:text-base leading-relaxed group-hover:text-charcoal/80 transition-colors duration-300">
                                                {value.description}
                                            </p>
                                        </div>

                                        {/* Decorative corner element */}
                                        <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-teal/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Timeline */}
            <section className="py-20 md:py-32 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-transparent to-white/50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 md:mb-20"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
                            Perjalanan Kami
                        </h2>
                        <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
                            Dari startup hingga menjadi salah satu kontraktor terpercaya
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal via-teal/50 to-transparent" />

                        <div className="space-y-12 md:space-y-20">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Content */}
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                                            <div className="text-4xl md:text-5xl font-bold text-teal mb-2">
                                                {item.year}
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-charcoal/60">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Circle Marker */}
                                    <div className="hidden md:flex w-4 h-4 rounded-full bg-teal ring-4 ring-white shadow-lg flex-shrink-0" />

                                    {/* Spacer */}
                                    <div className="hidden md:block flex-1" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section
                className="py-12 md:py-20 lg:py-32 px-4 md:px-6 lg:px-12 xl:px-16 pb-0 relative overflow-hidden"
                style={{
                    background: 'linear-gradient(180deg, #C56B6D 0%, #B9646A 20%, #AD5C66 40%, #9E4244 60%, #8A3A3E 80%, #6B2D2E 100%)',
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-white rounded-full blur-3xl" />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Pencapaian Kami
                        </h2>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Angka yang membuktikan dedikasi dan kepercayaan klien
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                                </div>
                                <div className="text-white/80 text-sm md:text-base uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section
                className="pt-12 md:pt-20 lg:pt-32 pb-12 md:pb-20 lg:pb-32 px-4 md:px-6 lg:px-12 xl:px-16 relative overflow-hidden"
                style={{
                    background: 'linear-gradient(180deg, #6B2D2E 0%, #8A3A3E 20%, #9E4244 40%, #AD5C66 60%, #B9646A 80%, #C56B6D 100%)',
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/3 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-white rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 md:mb-20"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Mengapa Memilih ASKRA?
                        </h2>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Keunggulan yang membedakan kami dari yang lain
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                            >
                                <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-white/70">
                                        {benefit.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="pt-12 md:pt-20 lg:pt-32 pb-12 md:pb-20 lg:pb-32 px-4 md:px-6 lg:px-12 xl:px-16 text-white"
                style={{
                    background: 'linear-gradient(180deg, #C56B6D 0%, #B9646A 20%, #AD5C66 40%, #9E4244 60%, #8A3A3E 80%, #6B2D2E 100%)',
                }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Mari Wujudkan Proyek Impian Anda
                        </h2>
                        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                            Konsultasikan kebutuhan proyek Anda dengan tim profesional kami. Gratis dan tanpa komitmen.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-teal text-white font-semibold rounded-full hover:bg-teal/90 transition-all duration-300 hover:scale-105"
                        >
                            Hubungi Kami Sekarang
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
