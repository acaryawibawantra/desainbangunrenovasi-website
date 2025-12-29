"use client";

import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

export function SmoothScrollProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Initialize Lenis with optimized settings
        const lenis = new Lenis({
            // Shorter duration for mobile = snappier feel
            duration: isMobile ? 0.8 : 1.2,
            // Smooth easing curve like sammastudio
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            // Enable smooth wheel scrolling
            smoothWheel: true,
            // Lower multiplier for smoother scroll
            wheelMultiplier: isMobile ? 0.8 : 1,
            // Touch multiplier for mobile - lower = smoother
            touchMultiplier: 1.5,
            // Enable infinite scroll behavior
            infinite: false,
        });

        // RAF loop for Lenis - use performance timestamp
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            lenis.destroy();
            window.removeEventListener('resize', checkMobile);
        };
    }, [isMobile]);

    return <>{children}</>;
}
