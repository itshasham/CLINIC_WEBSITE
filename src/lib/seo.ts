import type { Metadata } from 'next';
import { clinic, faqItems, services } from '@/content/site';

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

const defaultKeywords = [
  'Nees Aesthetics',
  'skin aesthetic clinic',
  'skin aesthetic clinic Lahore',
  'aesthetic clinic Lahore',
  'skin clinic Lahore',
  'laser and skin clinic Lahore',
  'aesthetic clinic DHA Lahore',
  'skin clinic DHA Lahore',
  'laser clinic Lahore',
  'laser treatment clinic Lahore',
  'cosmetic clinic Lahore',
  'hair treatment clinic Lahore',
  'skin consultation Lahore',
  'laser hair reduction Lahore',
  'skin care clinic Lahore',
];

export function buildPageMetadata({ title, description, path, keywords = [] }: PageSeoInput): Metadata {
  const url = new URL(path, clinic.url).toString();
  const mergedKeywords = [...new Set([...defaultKeywords, ...keywords])];

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: clinic.name,
      locale: 'en_PK',
      type: 'website',
      images: [
        {
          url: clinic.seoImage,
          width: 1200,
          height: 630,
          alt: `${clinic.name} skin aesthetic clinic in Lahore`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [clinic.seoImage],
    },
  };
}

export function getClinicSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'LocalBusiness'],
    '@id': `${clinic.url}/#clinic`,
    name: clinic.legalName,
    alternateName: clinic.name,
    description: clinic.description,
    url: clinic.url,
    image: [clinic.seoImage, clinic.clinicImage],
    telephone: clinic.phone,
    email: clinic.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plaza # 151, CCA, (KFC) 4th Floor, Phase-5, DHA',
      addressLocality: 'Lahore',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Lahore',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '19:00',
      },
    ],
    hasMap: clinic.mapHref,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: clinic.mobile,
        email: clinic.email,
        areaServed: 'PK',
        availableLanguage: ['en', 'ur'],
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Aesthetic clinic services',
      itemListElement: services.map((service) => ({
        '@type': 'OfferCatalog',
        name: service.title,
        itemListElement: service.highlights.map((highlight) => ({
          '@type': 'Service',
          name: highlight,
          provider: {
            '@id': `${clinic.url}/#clinic`,
          },
        })),
      })),
    },
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${clinic.url}/#website`,
    name: clinic.legalName,
    url: clinic.url,
    description: clinic.shortDescription,
    inLanguage: 'en-PK',
    publisher: {
      '@id': `${clinic.url}/#clinic`,
    },
  };
}

export function getFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function getServicesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: `${service.short} ${service.detail}`,
        areaServed: 'Lahore',
        provider: {
          '@id': `${clinic.url}/#clinic`,
        },
      },
    })),
  };
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, clinic.url).toString(),
    })),
  };
}
