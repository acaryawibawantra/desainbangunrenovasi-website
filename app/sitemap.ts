import { MetadataRoute } from 'next';
import { PORTFOLIO_PROJECTS, SERVICES } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://insign.id';

    // Static routes
    const routes = [
        '',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic routes for Services
    const serviceRoutes = SERVICES.map((service) => ({
        url: `${baseUrl}/services/${service.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Dynamic routes for Portfolio
    const portfolioRoutes = PORTFOLIO_PROJECTS.map((project) => ({
        url: `${baseUrl}/portfolio/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...serviceRoutes, ...portfolioRoutes];
}
