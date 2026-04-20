import type { MetadataRoute } from 'next';
import { clinic } from '@/content/site';

const routes = ['/', '/services', '/about', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route, clinic.url).toString(),
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
