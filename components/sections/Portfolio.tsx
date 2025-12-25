"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

type FilterType = "all" | "residential" | "commercial";

export function Portfolio() {
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const filteredProjects =
        activeFilter === "all"
            ? PORTFOLIO_PROJECTS
            : PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter);

    useEffect(() => {
        if (!containerRef.current || !scrollRef.current) return;

        // Calculate total scroll width
        const scrollWidth = scrollRef.current.scrollWidth - window.innerWidth;

        // Only create horizontal scroll if there's enough content
        if (scrollWidth > 0) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: () => `+=${scrollWidth}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            tl.to(scrollRef.current, {
                x: -scrollWidth,
                ease: "none",
            });
        }

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [filteredProjects]);

    return (
        <section
            id="portfolio"
            ref={containerRef}
            className="relative min-h-screen overflow-hidden"
            style={{ backgroundColor: '#E8E4DE' }}
        >
            <div className="sticky top-0 flex h-screen flex-col">
                {/* Header with Filter */}
                <div className="z-20 px-8 py-12 md:px-16"
                    style={{ backgroundColor: '#E8E4DE' }}>
                    <div className="divider-left mb-8" />
                    <h2 className="mb-8 text-5xl font-light text-charcoal md:text-7xl">
                        Portfolio
                    </h2>

                    <div className="flex gap-4">
                        {["all", "residential", "commercial"].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter as FilterType)}
                                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${activeFilter === filter
                                    ? "bg-accent text-white"
                                    : "bg-white text-charcoal hover:bg-accent/10"
                                    }`}
                            >
                                {filter.charAt(0).toUpperCase() + filter.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex flex-1 items-center overflow-hidden">
                    <div ref={scrollRef} className="flex gap-8 px-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative h-[60vh] w-[85vw] flex-shrink-0 overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 md:w-[70vw] lg:w-[55vw]"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                                <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-8 opacity-100 transition-all duration-500 group-hover:translate-y-0 md:p-10">
                                    <p className="mb-3 text-xs font-bold tracking-wider text-accent uppercase">
                                        {project.category}
                                    </p>
                                    <h3 className="mb-4 text-3xl font-light text-white md:text-5xl drop-shadow-lg">
                                        {project.title}
                                    </h3>
                                    <p className="text-lg text-white/90 font-light">
                                        {project.location}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* End spacing */}
                        <div className="w-32 flex-shrink-0" />
                    </div>
                </div>
            </div>
        </section>
    );
}
