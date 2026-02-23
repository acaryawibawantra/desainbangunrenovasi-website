"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue, useInView, animate } from "framer-motion";

const taglineText = "ASKRA Konstruksi  adalah perusahaan yang bergerak di bidang konstruksi yang berdedikasi untuk memberikan hasil terbaik bagi klien kami.";

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
    // Apply a slightly smoother easing on the opacity
    const opacity = useTransform(progress, range, [0.15, 1]);
    // Optional: You can also use transform like Y position to make it feel smoother
    const y = useTransform(progress, range, [5, 0]);

    return (
        <span className="relative inline-block mt-[0.25em]">
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

    // Parallax upward effect
    // Split text for word animation
    const words = taglineText.split(" ");

    return (
        <motion.section
            id="tagline"
            ref={containerRef}
            className="relative z-10 flex justify-center w-full -mt-24 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
        >
            {/* Background extension to cover white body below Hero image gap */}
            <div className="absolute inset-x-0 bottom-0 top-24 md:hidden bg-[#1a1a1a] -z-10" />

            <motion.div
                style={{
                    width,
                    borderTopLeftRadius: borderRadius,
                    borderTopRightRadius: borderRadius,
                    backgroundColor,
                }}
                className="w-[90%] min-h-[70vh] pt-32 pb-24 md:pt-40 md:pb-24 flex flex-col items-center justify-center overflow-hidden"
            >
                <div className="mx-auto max-w-[1400px] px-6 md:px-12 w-full flex flex-col xl:flex-row gap-16 xl:gap-24 items-center">
                    {/* Left Side: Tagline Text */}
                    <div className="w-full xl:w-3/5">
                        <p ref={textRef} className="block text-justify font-light leading-[1.3] text-xl md:text-3xl lg:text-4xl xl:text-[2.75rem] tracking-tight m-0">
                            {words.map((word, i) => {
                                const start = i / words.length;
                                const end = start + (1 / words.length);
                                return (
                                    <span key={i}>
                                        <Word progress={textProgress} range={[start, end]}>
                                            {word}
                                        </Word>
                                        {" "}
                                    </span>
                                );
                            })}
                        </p>
                    </div>

                    {/* Right Side: Statistics Section */}
                    <div className="w-full xl:w-2/5 flex flex-col gap-12 xl:border-l xl:border-t-0 border-t border-white/20 xl:pl-16 pt-12 xl:pt-0">
                        <StatItem
                            value={10}
                            label="Tahun Berdiri"
                            description="memberikan layanan konstruksi dan desain dengan penuh dedikasi."
                        />
                        <StatItem
                            value={50}
                            label="Proyek Selesai"
                            suffix="+"
                            description="dari konsep arsitektur hingga serah terima bangunan."
                        />
                    </div>
                </div>
            </motion.div>
        </motion.section>
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
