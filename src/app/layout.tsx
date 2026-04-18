import type { Metadata } from 'next';
import '@/styles/globals.css';
import { AppShell } from '@/app/layout/AppShell';
import { clinic } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL(clinic.url),
  title: {
    default: `${clinic.name} | Laser & Skin Clinic in Lahore`,
    template: `%s | ${clinic.name}`,
  },
  description: clinic.description,
  applicationName: clinic.name,
  keywords: [
    'Nees Aesthetics',
    'laser clinic Lahore',
    'skin clinic Lahore',
    'aesthetic clinic DHA Lahore',
    'dermatology consultation Lahore',
    'botox fillers Lahore',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${clinic.name} | Laser & Skin Clinic in Lahore`,
    description: clinic.description,
    url: clinic.url,
    siteName: clinic.name,
    type: 'website',
    locale: 'en_PK',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
