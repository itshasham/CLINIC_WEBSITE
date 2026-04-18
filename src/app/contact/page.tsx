import type { Metadata } from 'next';
import { ContactPage, contactMetadata } from '@/features/Contact/Contact';

export const metadata: Metadata = contactMetadata;

export default function Page() {
  return <ContactPage />;
}
