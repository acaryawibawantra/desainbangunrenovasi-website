"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section
            id="testimonials"
            ref={ref}
            className="relative z-10 bg-white py-24 md:py-24"
        >
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-4 flex justify-center"
                >
                    <div className="divider" />
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center text-5xl font-light text-charcoal md:text-6xl"
                >
                    Client Stories
                </motion.h2>

                {/* Testimonial Slider */}
                <div className="relative min-h-[300px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <blockquote className="mb-10 text-2xl font-light italic leading-relaxed text-gray-dark md:text-3xl lg:text-4xl">
                                "{TESTIMONIALS[currentIndex].content}"
                            </blockquote>

                            <div className="flex flex-col items-center">
                                <p className="text-xl font-semibold text-charcoal mb-1">
                                    {TESTIMONIALS[currentIndex].name}
                                </p>
                                <p className="text-base text-accent font-medium">
                                    {TESTIMONIALS[currentIndex].role}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Dots */}
                <div className="mt-12 flex justify-center gap-3">
                    {TESTIMONIALS.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 rounded-full transition-all ${index === currentIndex
                                ? "w-8 bg-accent"
                                : "w-2 bg-gray-dark/30 hover:bg-gray-dark/50"
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="mt-8 flex justify-center gap-4">
                    <button
                        onClick={() =>
                            goToSlide(
                                (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
                            )
                        }
                        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-charcoal/20 bg-white transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white hover:scale-110 shadow-md hover:shadow-lg"
                        aria-label="Previous testimonial"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={() => goToSlide((currentIndex + 1) % TESTIMONIALS.length)}
                        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-charcoal/20 bg-white transition-all duration-300 hover:bg-accent hover:border-accent hover:text-white hover:scale-110 shadow-md hover:shadow-lg"
                        aria-label="Next testimonial"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
