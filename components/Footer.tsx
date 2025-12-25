import { COMPANY_INFO } from "@/lib/constants";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-br from-charcoal via-charcoal to-teal-dark text-white overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-64 h-64 bg-beige rounded-full blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {/* Company Info */}
                    <div>
                        <h3 className="mb-5 text-3xl font-bold text-white">{COMPANY_INFO.name}</h3>
                        <p className="mb-6 text-base text-white max-w-xs leading-relaxed">
                            {COMPANY_INFO.tagline}
                        </p>
                        <p className="text-sm text-white">{COMPANY_INFO.location}</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-6 text-xl font-semibold text-black">Quick Links</h4>
                        <ul className="space-y-3 text-base">
                            <li>
                                <a
                                    href="#about"
                                    className="text-black/90 transition-all duration-300 hover:text-accent hover:translate-x-1 inline-block"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-black/90 transition-all duration-300 hover:text-accent hover:translate-x-1 inline-block"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    className="text-black/90 transition-all duration-300 hover:text-accent hover:translate-x-1 inline-block"
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#testimonials"
                                    className="text-black/90 transition-all duration-300 hover:text-accent hover:translate-x-1 inline-block"
                                >
                                    Testimonials
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="mb-6 text-xl font-semibold text-black">Contact</h4>
                        <div className="space-y-3 text-base text-black">
                            <p>
                                Email:{" "}
                                <a
                                    href="mailto:info@insign.co.id"
                                    className="hover:text-accent"
                                >
                                    info@insign.co.id
                                </a>
                            </p>
                            <p>
                                Phone:{" "}
                                <a href="tel:+62211234567" className="hover:text-accent">
                                    +62 21 1234 567
                                </a>
                            </p>
                            <div className="mt-8 flex gap-5">
                                <a
                                    href="#"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-accent hover:text-white hover:scale-110 hover:rotate-6 shadow-md"
                                    aria-label="Instagram"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-accent hover:text-white hover:scale-110 hover:rotate-6 shadow-md"
                                    aria-label="Facebook"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-accent hover:text-white hover:scale-110 hover:rotate-6 shadow-md"
                                    aria-label="LinkedIn"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 border-t border-white/20 pt-10 text-center text-sm text-white/90">
                    <p>
                        &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
