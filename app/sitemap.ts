import { MetadataRoute } from 'next';
import { articles } from './data/articles';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sashtravani.com';

  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/horoscope',
    '/insights',
  ];

  const articleRoutes = articles.map(article => `/insights/${article.slug}`);
  
  const allRoutes = [...staticRoutes, ...articleRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes('/insights') ? 'monthly' : 'weekly' as any,
    priority: route === '' ? 1 : 0.8,
  }));
}
