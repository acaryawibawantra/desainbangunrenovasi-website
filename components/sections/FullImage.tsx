"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function FullImage() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

    return (
        <section
            ref={ref}
            style={{
                backgroundColor: "#e8e5e0",
                /* same horizontal padding as Tagline on mobile */
                padding: "0 16px 32px",
                overflow: "hidden",
            }}
        >
            {/* same max-width + centering as Tagline .inner */}
            <div style={{ maxWidth: 1240, margin: "0 auto" }}>
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "clamp(300px, 55vh, 660px)",
                        borderRadius: "6px",
                        overflow: "hidden",
                    }}
                >
                    <motion.div
                        style={{
                            y,
                            position: "absolute",
                            inset: "-15% 0",
                            width: "100%",
                            height: "130%",
                        }}
                    >
                        <Image
                            src="/images/hero/image-hero.jpg"
                            alt="ASKRA Konstruksi — karya konstruksi kami"
                            fill
                            sizes="(max-width: 900px) 100vw, 1240px"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                            priority={false}
                        />
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                @media (min-width: 900px) {
                    section {
                        padding: 0 56px 72px;
                    }
                }
            `}</style>
        </section>
    );
}
