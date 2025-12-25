"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const menuItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    // Close menu when clicking on links
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = menuItems.map((item) =>
                document.querySelector(item.href)
            );
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = (section as HTMLElement).offsetTop;
                    const sectionBottom =
                        sectionTop + (section as HTMLElement).offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        setActiveSection(menuItems[index].href.substring(1));
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Hamburger Button - Minimalist Style */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-8 right-8 z-50 flex h-12 w-12 flex-col items-center justify-center gap-[6px] transition-all duration-300 hover:opacity-70"
                aria-label="Toggle menu"
            >
                <motion.span
                    animate={isOpen ? { rotate: 45, y: 8, backgroundColor: '#FFFFFF' } : { rotate: 0, y: 0, backgroundColor: '#2C2C2C' }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="h-[2px] w-7"
                    style={{ backgroundColor: isOpen ? '#FFFFFF' : '#2C2C2C' }}
                />
                <motion.span
                    animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                    className="h-[2px] w-7"
                    style={{ backgroundColor: isOpen ? '#FFFFFF' : '#2C2C2C' }}
                />
                <motion.span
                    animate={isOpen ? { rotate: -45, y: -8, backgroundColor: '#FFFFFF' } : { rotate: 0, y: 0, backgroundColor: '#2C2C2C' }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="h-[2px] w-7"
                    style={{ backgroundColor: isOpen ? '#FFFFFF' : '#2C2C2C' }}
                />
            </button>

            {/* Full-Screen Menu Overlay - Samma Studio Style */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 z-40"
                        style={{ backgroundColor: '#1A4A4A' }}
                    >
                        {/* Menu Items - Right Aligned */}
                        <motion.nav
                            className="flex h-full flex-col items-end justify-center pr-12 md:pr-24 lg:pr-32"
                        >
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: 60 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 60 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.1 + index * 0.08,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}
                                    className="overflow-hidden"
                                >
                                    <Link
                                        href={item.href}
                                        onClick={handleLinkClick}
                                        className="block py-2 text-4xl font-light text-white/40 transition-all duration-300 hover:text-white md:text-6xl lg:text-7xl"
                                        style={{
                                            fontWeight: 300,
                                            letterSpacing: '-0.02em'
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.nav>

                        {/* Social Links - Bottom Left */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            className="absolute bottom-8 left-8 flex gap-6 md:bottom-12 md:left-12 md:gap-8"
                        >
                            <a
                                href="mailto:info@insign.co.id"
                                className="text-xs uppercase tracking-widest text-white/40 transition-all duration-300 hover:text-white"
                            >
                                Email
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs uppercase tracking-widest text-white/40 transition-all duration-300 hover:text-white"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs uppercase tracking-widest text-white/40 transition-all duration-300 hover:text-white"
                            >
                                Instagram
                            </a>
                        </motion.div>

                        {/* WhatsApp Button - Bottom Right (optional) */}
                        <motion.a
                            href="https://wa.me/62211234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: 0.6 }}
                            className="absolute bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-white/20 md:bottom-12 md:right-12"
                            aria-label="WhatsApp"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
