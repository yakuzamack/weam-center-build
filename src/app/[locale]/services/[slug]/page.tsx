import { getServiceBySlug, getServices } from '@/data/services';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

interface ServiceSlugPageProps {
  params: { locale: string; slug: string };
}

export async function generateStaticParams() {
  const svcs = getServices();
  const locales = ['en', 'ar'];
  return svcs.flatMap((s) => locales.map((locale) => ({ slug: s.slug, locale })));
}

export async function generateMetadata({ params }: ServiceSlugPageProps): Promise<Metadata> {
  const { slug } = params;
  // locale set in parent layout
  const t = await getTranslations('services');
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${t(`${service.key}.title`)} – Al WEAM Medical Centre`,
    description: t(`${service.key}.description`),
  };
}

export default async function ServiceSlugPage({ params }: ServiceSlugPageProps) {
  const { locale, slug } = params;
  // locale set in parent layout
  const t = await getTranslations('services');
  const nav = await getTranslations('navigation');
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="page">
        <p>Service not found.</p>
      </div>
    );
  }

  return (
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
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{t(`${service.key}.title`)}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed mb-8">
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
      <div className="mt-10 flex gap-4">
        <Link href={`/${locale}/contact`} className="btn-primary">
          {nav('appointment')}
        </Link>
        <Link href={`/${locale}/services`} className="btn-outline">
          {nav('services')}
        </Link>
      </div>
    </main>
  );
}
