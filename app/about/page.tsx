import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
    title: "About",
    description: "Tentang ASKRA (CV ADI SARANA KREASI) - Layanan kontraktor dan arsitektur profesional di Jakarta.",
};

export default function AboutPage() {
    return (
        <>
            <Navigation />
            <main>
                <About />
            </main>
            <Footer />
        </>
    );
}
