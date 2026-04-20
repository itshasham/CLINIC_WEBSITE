import type { Metadata } from 'next';
import { ServicesPage } from '@/features/Services/Services';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Skin, Laser & Cosmetic Services',
  description:
    'Explore skin care, laser treatments, skin consultations, hair treatments, and cosmetic care at Nees Aesthetics in DHA Lahore.',
  path: '/services',
  keywords: [
    'skin treatments Lahore',
    'laser treatments Lahore',
    'skin consultation DHA Lahore',
    'cosmetic treatment clinic Lahore',
  ],
});

export default function Page() {
  return <ServicesPage />;
}
