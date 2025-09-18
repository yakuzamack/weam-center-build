import { getServiceBySlug, getServices } from '@/data/services';
import { tn } from '@/lib/i18n';
import type { Metadata } from 'next';
import Link from 'next/link';

interface ServiceSlugPageProps {
  params: { locale: string; slug: string };
}

// Return cartesian of locales x slugs for static export
export function generateStaticParams() {
  const locales = ['en', 'ar'];
  return locales.flatMap((locale) => getServices().map((s) => ({ locale, slug: s.slug })));
}

export async function generateMetadata({ params }: ServiceSlugPageProps): Promise<Metadata> {
  const locale = params?.locale === 'ar' ? 'ar' : 'en';
  const slug = params?.slug;
  const t = tn(locale, 'services');
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${t(`${service.key}.title`)} – Al WEAM Medical Centre`,
    description: t(`${service.key}.description`),
  };
}

export default async function ServiceSlugPage(props: ServiceSlugPageProps) {
  const locale = props?.params?.locale === 'ar' ? 'ar' : 'en';
  const slug = props?.params?.slug;
  const t = tn(locale, 'services');
  const nav = tn(locale, 'navigation');
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="page">
        <p>Service not found.</p>
      </div>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalService',
            name: t(`${service.key}.title`),
            description: t(`${service.key}.description`),
            provider: {
              '@type': 'MedicalOrganization',
              name: locale === 'ar' ? 'مركز العافية الطبي' : 'Al WEAM Medical Centre',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Riyadh',
                addressCountry: 'SA',
              },
            },
            url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://alweammedical.com'}/${locale}/services/${slug}`,
            ...(service.price && {
              offers: {
                '@type': 'Offer',
                price: service.price.from,
                priceCurrency: service.price.currency,
                description: locale === 'ar' ? 'يبدأ من' : 'Starting from',
              },
            }),
          }),
        }}
      />
      <main className="page">
        <nav className="text-sm mb-6 text-gray-500 flex gap-2">
          <Link href={`/${locale}`} className="text-brand-600 hover:underline">
            {nav('home')}
          </Link>
          <span>/</span>
          <Link href={`/${locale}/services`} className="text-brand-600 hover:underline">
            {nav('services')}
          </Link>
          <span>/</span>
          <span>{t(`${service.key}.title`)}</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-400">
          {t(`${service.key}.title`)}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed mb-10">
          {t(`${service.key}.description`)}
        </p>
        {service.price && (
          <div className="mb-10 inline-flex items-center gap-3 bg-brand-50 dark:bg-brand-800/30 text-brand-700 dark:text-brand-200 px-5 py-3 rounded-xl">
            <span className="text-sm font-medium">
              {locale === 'ar' ? 'يبدأ من' : 'Starting from'}
            </span>
            <span className="text-2xl font-bold">
              {service.price.from} {service.price.currency}
            </span>
          </div>
        )}
        <div className="mt-4 flex gap-4">
          <Link href={`/${locale}/contact`} className="btn-primary">
            {nav('appointment')}
          </Link>
          <Link href={`/${locale}/services`} className="btn-outline">
            {nav('services')}
          </Link>
        </div>
      </main>
    </>
  );
}
