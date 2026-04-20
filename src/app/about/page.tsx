import type { Metadata } from 'next';
import { AboutPage } from '@/features/About/About';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'About Nees Aesthetics',
  description:
    'Learn about Nees Aesthetics, a luxury skin aesthetic clinic in DHA Lahore focused on consultation-led care and a refined patient experience.',
  path: '/about',
  keywords: ['about Nees Aesthetics', 'skin aesthetic clinic Lahore', 'laser and skin clinic DHA Lahore'],
});

export default function Page() {
  return <AboutPage />;
}
