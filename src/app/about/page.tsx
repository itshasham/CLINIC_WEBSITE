import type { Metadata } from 'next';
import { AboutPage } from '@/features/About/About';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Nees Aesthetics, a luxury laser and skin clinic in DHA Lahore focused on consultation-first care and a refined patient experience.',
};

export default function Page() {
  return <AboutPage />;
}
