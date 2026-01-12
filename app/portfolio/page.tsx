import { Metadata } from "next";
import { PortfolioContent } from "@/components/portfolio/PortfolioContent";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
    title: "Portfolio | ASKRA",
    description: "Lihat koleksi lengkap proyek arsitektur dan konstruksi kami, mulai dari hunian residential hingga bangunan komersial.",
};

export default function PortfolioPage() {
    return (
        <>
            <Navigation />
            <PortfolioContent />
        </>
    );
}
