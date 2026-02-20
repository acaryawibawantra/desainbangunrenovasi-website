"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue, useInView, animate } from "framer-motion";

const taglineText = "ASKRA Kontruksi adalah perusahaan yang bergerak di bidang konstruksi yang berdedikasi untuk memberikan hasil terbaik bagi klien kami.";

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
    // Apply a slightly smoother easing on the opacity
    const opacity = useTransform(progress, range, [0.15, 1]);
    // Optional: You can also use transform like Y position to make it feel smoother
    const y = useTransform(progress, range, [5, 0]);

    return (
        <span className="relative inline-block mr-[0.25em] mt-[0.25em]">
            <span className="absolute opacity-10 text-white/20 select-none">{children}</span>
            <motion.span style={{ opacity, y }} className="text-white relative inline-block transition-transform duration-700 ease-out">{children}</motion.span>
        </span>
    );
}

export function Tagline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const { scrollYProgress: containerProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "start 0.3"],
    });

    const { scrollYProgress: textProgress } = useScroll({
        target: textRef,
        offset: ["start 0.8", "start 0.4"],
    });

    const width = useTransform(
        containerProgress,
        [0, 1],
        [isMobile ? "95%" : "90%", "100%"]
    );

    const borderRadius = useTransform(
        containerProgress,
        [0, 1],
        [isMobile ? "1.5rem" : "3rem", "0rem"]
    );

    const backgroundColor = useTransform(
        containerProgress,
        [0, 1],
        ["#1A1A1A", "#9E4244"]
    );

    // Split text for word animation
    const words = taglineText.split(" ");

    return (
        <section
            id="tagline"
            ref={containerRef}
            className="relative z-10 flex justify-center w-full mt-0"
        >
            <motion.div
                style={{
                    width,
                    borderTopLeftRadius: borderRadius,
                    borderTopRightRadius: borderRadius,
                    backgroundColor,
                    boxShadow: '0 -20px 60px rgba(0,0,0,0.2)'
                }}
                className="w-[90%] min-h-[70vh] pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col items-center justify-center overflow-hidden"
            >
                <div className="mx-auto max-w-5xl text-left px-6 md:px-12 w-full">
                    <p ref={textRef} className="flex flex-wrap justify-start text-2xl font-small leading-tight md:text-5xl lg:text-6xl tracking-tight mb-16">
                        {words.map((word, i) => {
                            const start = i / words.length;
                            const end = start + (1 / words.length);
                            return (
                                <Word key={i} progress={textProgress} range={[start, end]}>
                                    {word}
                                </Word>
                            );
                        })}
                    </p>

                    {/* Statistics Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 border-t border-white/20 pt-16 px-4 w-full mt-16 text-left">
                        <StatItem
                            value={10}
                            label="Tahun Berdiri"
                            description="memberikan layanan konstruksi dan desain dengan penuh dedikasi."
                        />
                        <StatItem
                            value={50}
                            label="Proyek Selesai"
                            suffix="+"
                            description="dari konsep arsitektur hingga serah terima bangunan kepada klien."
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

function StatItem({ value, label, suffix = "", description }: { value: number; label: string; suffix?: string; description?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="flex flex-col xl:flex-row xl:items-center gap-6 xl:gap-12 border-l-4 border-white pl-6 md:pl-8">
            <div className="flex flex-col flex-shrink-0">
                <div className="text-7xl md:text-8xl lg:text-[8rem] font-light text-white flex items-start leading-none tracking-tighter">
                    <Counter value={value} isInView={isInView} />
                    <span className="text-4xl md:text-5xl lg:text-6xl font-light mt-2 ml-1">{suffix}</span>
                </div>
                <div className="text-lg md:text-xl text-white/90 mt-4 md:mt-6 font-light">
                    {label}
                </div>
            </div>
            {description && (
                <div className="text-base md:text-lg text-white/70 xl:max-w-xs font-light tracking-wide leading-relaxed">
                    {description}
                </div>
            )}
        </div>
    );
}

function Counter({ value, isInView }: { value: number; isInView: boolean }) {
    const nodeRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const node = nodeRef.current;
        if (!node || !isInView) return;

        const controls = animate(0, value, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (latest) => {
                node.textContent = Math.round(latest).toString();
            },
        });

        return () => controls.stop();
    }, [value, isInView]);

    return <span ref={nodeRef}>0</span>;
}
