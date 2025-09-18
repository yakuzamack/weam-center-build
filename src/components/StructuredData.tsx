import React from 'react';

interface StructuredDataProps {
  type:
    | 'Organization'
    | 'MedicalBusiness'
    | 'Service'
    | 'WebSite'
    | 'BreadcrumbList';
  data: Record<string, unknown>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Predefined structured data for common pages
export function OrganizationStructuredData() {
  return (
    <StructuredData
      type='Organization'
      data={{
        name: 'Al Weam Centre',
        alternateName: 'مركز الوئام',
        url: 'https://alweamcentre.com',
        logo: 'https://alweamcentre.com/images/logo-circular.svg',
        description:
          'Premium medical and beauty services in UAE specializing in dermatology, laser hair removal, cupping therapy, and advanced skin care.',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'AE',
          addressRegion: 'Dubai',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+971555373443',
          contactType: 'customer service',
          availableLanguage: ['English', 'Arabic'],
        },
        sameAs: ['https://wa.me/971555373443'],
      }}
    />
  );
}

export function MedicalBusinessStructuredData() {
  return (
    <StructuredData
      type='MedicalBusiness'
      data={{
        name: 'Al Weam Centre',
        alternateName: 'مركز الوئام',
        url: 'https://alweamcentre.com',
        description:
          'Premium medical and beauty services in UAE specializing in dermatology, laser hair removal, cupping therapy, and advanced skin care.',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'AE',
          addressRegion: 'Dubai',
        },
        telephone: '+971555373443',
        priceRange: '$$',
        currenciesAccepted: 'AED',
        paymentAccepted: 'Cash, Credit Card',
        openingHours: 'Mo-Su 09:00-21:00',
        medicalSpecialty: [
          'Dermatology',
          'General Medicine',
          'Pediatrics',
          'Orthopedics',
          'Dental Care',
          'Physiotherapy',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Medical Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'MedicalProcedure',
                name: 'Dermatology Consultation',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'MedicalProcedure',
                name: 'Laser Hair Removal',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'MedicalProcedure',
                name: 'Cupping Therapy',
              },
            },
          ],
        },
      }}
    />
  );
}

export function WebSiteStructuredData() {
  return (
    <StructuredData
      type='WebSite'
      data={{
        name: 'Al Weam Centre',
        alternateName: 'مركز الوئام',
        url: 'https://alweamcentre.com',
        description:
          'Premium medical and beauty services in UAE specializing in dermatology, laser hair removal, cupping therapy, and advanced skin care.',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate:
              'https://alweamcentre.com/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
        inLanguage: ['en', 'ar'],
      }}
    />
  );
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  return (
    <StructuredData
      type='BreadcrumbList'
      data={{
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}
