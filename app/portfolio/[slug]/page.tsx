import { PORTFOLIO_PROJECTS } from "@/lib/constants";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioClient } from "./PortfolioClient";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.title,
        description: project.description.substring(0, 160) + "...",
        openGraph: {
            images: [project.image],
        },
    };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const relatedProjects = PORTFOLIO_PROJECTS
        .filter((p) => p.category === project.category && p.id !== project.id)
        .slice(0, 3);

    return <PortfolioClient project={project} relatedProjects={relatedProjects} />;
}
