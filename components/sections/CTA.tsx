"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function CTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} id="contact" className="relative bg-accent py-24 md:py-32">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-8 text-4xl font-light text-white md:text-6xl lg:text-7xl"
                >
                    Ready to Start Your Project?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-12 text-lg text-white/80 md:text-xl"
                >
                    Let us transform your vision into reality with our professional
                    construction and design services.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <a
                        href="mailto:info@insign.co.id"
                        className="inline-block rounded-full bg-white px-12 py-5 text-lg font-semibold text-accent transition-all duration-300 hover:bg-white/95 hover:scale-105 active:scale-95"
                        style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)' }}
                    >
                        Konsultasi Gratis
                    </a>
                    <a
                        href="tel:+62211234567"
                        className="inline-block rounded-full border-2 border-white bg-transparent px-12 py-5 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-accent hover:scale-105 active:scale-95"
                    >
                        Hubungi Kami
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
