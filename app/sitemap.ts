import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sashtravani.com';

  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/services/kundli',
    '/services/love',
    '/services/career',
    '/services/business',
    '/services/marriage',
    '/services/remedies',
    '/horoscope',
    '/insights',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
