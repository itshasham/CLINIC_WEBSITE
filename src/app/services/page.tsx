import type { Metadata } from 'next';
import { ServicesPage } from '@/features/Services/Services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore skin care, laser treatments, dermatological consultations, hair treatment, and cosmetic care at Nees Aesthetics in DHA Lahore.',
};

export default function Page() {
  return <ServicesPage />;
}
