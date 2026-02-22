"use client";

import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation";

export function SmoothScrollProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname();
    const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

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

        setLenisInstance(lenis);

        // RAF loop for Lenis - use performance timestamp
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            lenis.destroy();
            setLenisInstance(null);
            window.removeEventListener('resize', checkMobile);
        };
    }, [isMobile]);

    // Reset scroll position on route change
    useEffect(() => {
        if (lenisInstance) {
            lenisInstance.scrollTo(0, { immediate: true });
        }
    }, [pathname, lenisInstance]);

    return <>{children}</>;
}
