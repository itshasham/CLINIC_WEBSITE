import type { Metadata } from 'next';
import '@/styles/globals.css';
import { AppShell } from '@/app/layout/AppShell';
import { clinic } from '@/content/site';
import { JsonLd } from '@/components/Seo/JsonLd';
import { buildPageMetadata, getClinicSchema, getWebsiteSchema } from '@/lib/seo';

const defaultMetadata = buildPageMetadata({
  title: `${clinic.name} | Skin Aesthetic Clinic in DHA Lahore`,
  description:
    'Nees Aesthetics is a skin aesthetic clinic in DHA Lahore for consultation-led laser, skin, hair, and cosmetic care.',
  path: '/',
  keywords: ['Nees Aesthetics Lahore', 'skin aesthetic clinic DHA Lahore', 'laser and skin clinic DHA Lahore'],
});

export const metadata: Metadata = {
  metadataBase: new URL(clinic.url),
  title: {
    default: `${clinic.name} | Skin Aesthetic Clinic in DHA Lahore`,
    template: `%s | ${clinic.name}`,
  },
  description: defaultMetadata.description,
  applicationName: clinic.name,
  keywords: defaultMetadata.keywords,
  alternates: defaultMetadata.alternates,
  openGraph: defaultMetadata.openGraph,
  twitter: defaultMetadata.twitter,
  category: 'health',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={getWebsiteSchema()} />
        <JsonLd data={getClinicSchema()} />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
