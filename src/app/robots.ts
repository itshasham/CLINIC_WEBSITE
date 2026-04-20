import type { MetadataRoute } from 'next';
import { clinic } from '@/content/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${clinic.url}/sitemap.xml`,
    host: clinic.url,
  };
}
