"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const taglineText = "Kami menciptakan ruang yang memadukan estetika dengan fungsionalitas, menghormati keseimbangan antara kebutuhan manusia dan keindahan arsitektur.";

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
    const opacity = useTransform(progress, range, [0.1, 1]);

    return (
        <span className="relative inline-block mr-[0.25em] mt-[0.25em]">
            <span className="absolute opacity-10 text-white/20 select-none">{children}</span>
            <motion.span style={{ opacity }} className="text-white">{children}</motion.span>
        </span>
    );
}

export function Tagline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "start 0.2"],
    });

    const words = taglineText.split(" ");

    return (
        <section
            id="tagline" // Added ID for navigation
            ref={containerRef}
            className="flex min-h-[70vh] items-center justify-center bg-[#1a1a1a] px-6 py-24 md:px-12 md:py-32"
        >
            <div className="mx-auto max-w-5xl text-center"> {/* Increased max-width */}
                <p className="flex flex-wrap justify-center text-3xl font-medium leading-tight md:text-5xl lg:text-6xl tracking-tight">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);
                        return (
                            <Word key={i} progress={scrollYProgress} range={[start, end]}>
                                {word}
                            </Word>
                        );
                    })}
                </p>
            </div>
        </section>
    );
}
