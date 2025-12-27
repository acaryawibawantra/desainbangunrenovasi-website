"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { SERVICES } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

// Icons for services
const ServiceIcons = [
    // Building/Home icon
    <svg key="home" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21V9l9-6 9 6v12" />
        <path d="M9 21V12h6v9" />
    </svg>,
    // Renovation/Tools icon
    <svg key="tools" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>,
    // Architecture icon
    <svg key="arch" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 20V9L12 3l10 6v11" />
        <path d="M12 3v17" />
        <path d="M2 8h20" />
        <path d="M6 12v8" />
        <path d="M18 12v8" />
    </svg>,
    // Contractor/Helmet icon
    <svg key="contractor" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="10" r="3" />
        <path d="M6.5 21v-1a5.5 5.5 0 0 1 11 0v1" />
        <path d="M4 11V7a8 8 0 0 1 16 0v4" />
    </svg>,
];

export function Services() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        // Animate section title
        const title = containerRef.current.querySelector('.section-title');
        const subtitle = containerRef.current.querySelector('.section-subtitle');

        gsap.fromTo(title,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        gsap.fromTo(subtitle,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animate service cards with stagger
        cardsRef.current.forEach((card, index) => {
            if (!card) return;

            gsap.fromTo(card,
                {
                    opacity: 0,
                    y: 80,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section
            id="services"
            ref={containerRef}
            className="relative py-24 md:py-32 overflow-hidden"
            style={{ backgroundColor: '#F5F3F0' }}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-beige/40 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
            </div>

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#2C2C2C 1px, transparent 1px), linear-gradient(90deg, #2C2C2C 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="w-12 h-[1px] bg-teal" />
                        <span className="text-teal text-sm font-medium tracking-widest uppercase">Layanan Kami</span>
                        <span className="w-12 h-[1px] bg-teal" />
                    </div>
                    <h2 className="section-title text-4xl md:text-6xl lg:text-7xl font-medium text-charcoal mb-6">
                        Solusi <span className="text-gradient">Konstruksi</span> Terbaik
                    </h2>
                    <p className="section-subtitle text-lg md:text-xl text-gray-dark max-w-2xl mx-auto">
                        Dari perencanaan hingga penyelesaian, kami hadir untuk mewujudkan impian Anda
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {SERVICES.map((service, index) => (
                        <div
                            key={service.id}
                            ref={(el) => { if (el) cardsRef.current[index] = el }}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                            style={{
                                boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            {/* Card Image */}
                            <div className="relative h-64 md:h-72 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                                {/* Number Badge */}
                                <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-light text-2xl">
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                {/* Icon Badge */}
                                <div className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-teal/90 backdrop-blur-md flex items-center justify-center text-white transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                                    {ServiceIcons[index]}
                                </div>

                                {/* Title Overlay */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-2xl md:text-3xl font-light text-white mb-2 transition-transform duration-500 group-hover:translate-x-2">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 md:p-8">
                                <p className="text-gray-dark leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* CTA Button */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-teal font-medium group/btn cursor-pointer">
                                        <span className="transition-all duration-300 group-hover/btn:translate-x-1">Pelajari Lebih Lanjut</span>
                                        <svg
                                            className="w-5 h-5 transition-all duration-300 group-hover/btn:translate-x-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>

                                    {/* Decorative dots */}
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-teal/20" />
                                        <div className="w-2 h-2 rounded-full bg-teal/40" />
                                        <div className="w-2 h-2 rounded-full bg-teal" />
                                    </div>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    boxShadow: 'inset 0 0 0 2px rgba(26, 95, 95, 0.2)'
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-16 md:mt-20 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <p className="text-gray-dark">Butuh layanan khusus?</p>
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal/25 hover:scale-105 text-white"
                            style={{
                                background: 'linear-gradient(135deg, #1A5F5F 0%, #2A7A7A 50%, #1A5F5F 100%)',
                                backgroundSize: '200% 200%',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundPosition = '100% 100%';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundPosition = '0% 0%';
                            }}
                        >
                            <span>Hubungi Kami</span>
                            <svg
                                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
