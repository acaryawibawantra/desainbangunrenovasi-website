"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";

type FilterType = "all" | "residential" | "commercial";

export default function PortfolioContent() {
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");
    const [currentFeatured, setCurrentFeatured] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");

    // Top 5 Projects for Featured Section
    const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 5);

    const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
        const matchesFilter = activeFilter === "all" || project.category === activeFilter;
        const matchesSearch =
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    // Auto-play removed for simpler, elegant experience
    // User controls navigation manually

    const nextSlide = () => {
        setCurrentFeatured((prev) => (prev + 1) % featuredProjects.length);
    };

    const prevSlide = () => {
        setCurrentFeatured((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
    };

    return (
        <main className="min-h-screen bg-[#F4F1EE] text-charcoal">
            {/* Full Screen Featured Projects Carousel */}
            <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#6B2D2E] to-[#9E4244]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentFeatured}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={featuredProjects[currentFeatured].image}
                            alt={featuredProjects[currentFeatured].title}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Refined Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                    </motion.div>
                </AnimatePresence>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24 pointer-events-none">
                    <div className="max-w-4xl w-full mx-auto md:mx-0 flex flex-col items-start text-left gap-6 pointer-events-auto">

                        {/* Title & Info */}
                        <div className="space-y-4 md:space-y-6">
                            <motion.div
                                key={`text-${currentFeatured}`}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                <div className="flex items-center justify-start gap-3 text-white/90 mb-2 md:mb-4">
                                    <span className="w-8 md:w-12 h-[1px] bg-teal"></span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-tight tracking-tight mb-3 md:mb-4">
                                    {featuredProjects[currentFeatured].title}
                                </h1>
                                <div className="flex flex-wrap justify-start gap-4 md:gap-6 text-white/80 text-xs md:text-base font-light mb-6">
                                    <span className="flex items-center gap-2">
                                        {featuredProjects[currentFeatured].location}
                                    </span>
                                    <span className="text-white/30">|</span>
                                    <span className="flex items-center gap-2">
                                        {featuredProjects[currentFeatured].year}
                                    </span>
                                    <span className="text-white/30">|</span>
                                    <span className="uppercase tracking-widest text-teal font-semibold">
                                        {featuredProjects[currentFeatured].category}
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Description & Action */}
                        <motion.div
                            key={`desc-${currentFeatured}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="max-w-2xl"
                        >
                            <p className="text-sm md:text-lg text-white/90 mb-6 leading-relaxed font-light line-clamp-3 md:line-clamp-none drop-shadow-md">
                                {featuredProjects[currentFeatured].description}
                            </p>
                            <div className="flex items-center justify-start">
                                <Link
                                    href={`/portfolio/${featuredProjects[currentFeatured].slug}`}
                                    className="group inline-flex items-center gap-2 text-white hover:text-teal transition-all duration-300 transform hover:translate-x-1 text-sm md:text-base border-b border-white/30 pb-1 hover:border-teal"
                                >
                                    View Details
                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Custom Navigation */}
                <div className="absolute bottom-24 md:bottom-10 right-6 md:right-16 lg:right-24 z-20 flex justify-end items-center gap-4 pointer-events-auto">
                    {/* Controls */}
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95 bg-black/10 backdrop-blur-sm"
                    >
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="flex items-baseline gap-2 text-white font-mono mx-2">
                        <span className="text-xl md:text-3xl font-light">0{currentFeatured + 1}</span>
                        <span className="text-white/40 text-xs md:text-sm">/ 0{featuredProjects.length}</span>
                    </div>
                    <button
                        onClick={nextSlide}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95 bg-black/10 backdrop-blur-sm"
                    >
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
                {/* Header Section */}
                <div className="flex flex-col gap-12 mb-20">
                    <div className="md:w-2/3">
                        <span className="text-teal font-medium tracking-widest uppercase text-sm mb-4 block">Our Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-medium text-charcoal mb-6 leading-tight">
                            Crafting spaces that <br className="hidden md:block" />  inspire and endure.
                        </h2>
                        <p className="text-charcoal/60 text-lg leading-relaxed max-w-2xl">
                            Explore our diverse portfolio of residential and commercial projects, each reflecting our commitment to design excellence and functional innovation.
                        </p>
                    </div>

                    {/* Tools Bar: Search & Filter */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-charcoal/10">
                        <div className="flex flex-wrap items-center gap-2">
                            <button
                                onClick={() => setActiveFilter("all")}
                                className={`px-6 py-2 rounded-full text-sm transition-all duration-300 capitalize ${activeFilter === "all"
                                    ? "bg-gradient-to-r from-[#6B2D2E] to-[#9E4244] text-white shadow-md border border-transparent"
                                    : "text-charcoal/60 hover:text-charcoal border border-transparent hover:border-charcoal/10"
                                    }`}
                            >
                                All Work
                            </button>
                            <button
                                onClick={() => setActiveFilter("residential")}
                                className={`px-6 py-2 rounded-full text-sm transition-all duration-300 capitalize ${activeFilter === "residential"
                                    ? "bg-gradient-to-r from-[#6B2D2E] to-[#9E4244] text-white shadow-md border border-transparent"
                                    : "text-charcoal/60 hover:text-charcoal border border-transparent hover:border-charcoal/10"
                                    }`}
                            >
                                Residential
                            </button>
                            <button
                                onClick={() => setActiveFilter("commercial")}
                                className={`px-6 py-2 rounded-full text-sm transition-all duration-300 capitalize ${activeFilter === "commercial"
                                    ? "bg-gradient-to-r from-[#521a1a] to-[#8a2c2c] text-white shadow-md border border-transparent"
                                    : "text-charcoal/60 hover:text-charcoal border border-transparent hover:border-charcoal/10"
                                    }`}
                            >
                                Commercial
                            </button>
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:w-72">
                            <input
                                type="text"
                                placeholder="Search by name, location..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white px-5 py-3 pl-11 text-sm border border-charcoal/10 rounded-full focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/20 transition-all font-light"
                            />
                            <svg className="w-5 h-5 text-charcoal/30 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <motion.div
                                    layout
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="group"
                                >
                                    <Link href={`/portfolio/${project.slug}`} className="block h-full">
                                        {/* Image Container with improved hover effect */}
                                        <div className="relative aspect-[4/5] overflow-hidden bg-charcoal/5 mb-6 rounded-sm shadow-sm">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />

                                            {/* Hover Details Overlay */}
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center text-white">
                                                <span className="text-teal font-medium tracking-widest text-sm uppercase mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                                    View Project
                                                </span>
                                                <h3 className="text-2xl font-serif mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                                    {project.title}
                                                </h3>
                                                <p className="text-white/70 text-sm font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                                    {project.location} • {project.year}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Info Below Card */}
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-1">
                                                <h3 className="text-lg font-medium text-charcoal group-hover:text-teal transition-colors">
                                                    {project.title}
                                                </h3>
                                                <div className="flex items-center gap-3 text-sm text-charcoal/50">
                                                    <span className="uppercase tracking-wider text-xs">
                                                        {project.category}
                                                    </span>
                                                    <span className="w-1 h-1 bg-charcoal/30 rounded-full"></span>
                                                    <span>{project.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-1 md:col-span-2 lg:col-span-3 py-20 text-center"
                            >
                                <div className="inline-block p-4 rounded-full bg-charcoal/5 mb-4">
                                    <svg className="w-8 h-8 text-charcoal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium text-charcoal mb-2">No projects found.</h3>
                                <p className="text-charcoal/50">Try searching for something else or change the filter.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    );
}
