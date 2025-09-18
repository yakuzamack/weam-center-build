import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { tn } from '@/lib/i18n';
import type { ReactNode } from 'react';
import '../globals.css';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const rawLocale = params?.locale || 'en';
  const cleanLocale = rawLocale.replace('.html', '');
  const locale = cleanLocale === 'ar' ? 'ar' : 'en';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://alweammedical.com';

  return {
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
      },
    },
    openGraph: {
      siteName: locale === 'ar' ? 'مركز الوئام' : 'Al WEAM Medical Centre',
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
    },
    other: {
      'application-name': locale === 'ar' ? 'مركز الوئام' : 'Al WEAM Medical Centre',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const rawLocale = params?.locale || 'en';
  const cleanLocale = rawLocale.replace('.html', '');
  const locale = cleanLocale === 'ar' ? 'ar' : 'en';
  const tNav = tn(locale, 'navigation');
  const navLabels = {
    brand: tNav('brandName'),
    home: tNav('home'),
    services: tNav('services'),
    appointment: tNav('appointment'),
    contact: tNav('contact'),
  } as const;
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalOrganization',
              name: locale === 'ar' ? 'مركز الوئام' : 'Al WEAM Medical Centre',
              description:
                locale === 'ar'
                  ? 'خدمات متخصصة في الأمراض الجلدية والليزر والحجامة والعناية بالبشرة في الرياض'
                  : 'Specialized dermatology, laser, cupping, and professional skin care services in Riyadh',
              url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://alweammedical.com'}/${locale}`,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Riyadh',
                addressCountry: 'SA',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+966-11-123-4567',
                contactType: 'customer service',
              },
              medicalSpecialty: [
                'Dermatology',
                'Cosmetic Medicine',
                'Laser Medicine',
                'Traditional Medicine',
              ],
            }),
          }}
        />
      </head>
      <body>
        <Header locale={locale} labels={navLabels} />
        <div className="min-h-[calc(100dvh-160px)]">{children}</div>
        <Footer brand={navLabels.brand} locale={locale} />
      </body>
    </html>
  );
}
