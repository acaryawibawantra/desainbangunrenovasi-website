import { SERVICES, PORTFOLIO_PROJECTS } from "@/lib/constants";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceClient } from "./ServiceClient";

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const service = SERVICES.find((s) => s.id === id);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: service.title,
        description: service.longDescription.substring(0, 160) + "...",
        openGraph: {
            images: [service.image],
        },
    };
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { id } = await params;
    const service = SERVICES.find((s) => s.id === id);

    if (!service) {
        notFound();
    }

    const relatedProjects = PORTFOLIO_PROJECTS
        .filter((p) => p.services === service.title)
        .slice(0, 3);

    const otherServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

    return <ServiceClient service={service} relatedProjects={relatedProjects} otherServices={otherServices} />;
}
