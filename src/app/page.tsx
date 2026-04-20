import type { Metadata } from 'next';
import { HomePage } from '@/features/Home/Home';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Skin Aesthetic Clinic in DHA Lahore',
  description:
    'Visit Nees Aesthetics, a skin aesthetic clinic in DHA Lahore for consultation-led laser, skin, hair, and cosmetic care.',
  path: '/',
  keywords: [
    'skin aesthetic clinic in Lahore',
    'Nees Aesthetics skin clinic',
    'aesthetic clinic in DHA Lahore',
    'luxury skin clinic Lahore',
  ],
});

export default function Page() {
  return <HomePage />;
}
