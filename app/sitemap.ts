import type { MetadataRoute } from 'next';
import { PROFILE_LAST_REVIEWED, projects, SITE_URL } from '@/app/data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(PROFILE_LAST_REVIEWED);
  const routes = ['/', '/identity', '/arsenal', '/archive', '/achievements', '/credentials'];

  return [
    ...routes.map((route, index) => ({
      url: `${SITE_URL}${route === '/' ? '' : route}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: index === 0 ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
