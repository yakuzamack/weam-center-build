import { ServiceCard } from '@/components/ServiceCard';
import { getServices, type Service } from '@/data/services';
import { tn } from '@/lib/i18n';
import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const rawLocale = params?.locale || 'en';
  const cleanLocale = rawLocale.replace('.html', '');
  const locale = cleanLocale === 'ar' ? 'ar' : 'en';
  const t = tn(locale, 'services');
  return {
    title: `${t('title')} – ${locale === 'ar' ? 'مركز الوئام' : 'Al WEAM Medical Centre'}`,
    description:
      locale === 'ar'
        ? 'مجموعة من الخدمات الطبية والتجميلية المتخصصة.'
        : 'A collection of specialized medical & aesthetic service offerings.',
    alternates: { languages: { en: '/en/services', ar: '/ar/services' } },
  };
}

export default async function ServicesPage(props: { params: { locale: string } }) {
  const rawLocale = props?.params?.locale || 'en';
  const cleanLocale = rawLocale.replace('.html', '');
  const locale = cleanLocale === 'ar' ? 'ar' : 'en';
  const t = tn(locale, 'services');
  const nav = tn(locale, 'navigation');
  const services = getServices();
  return (
    <main className="page pattern-dots">
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-400">
            {t('title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            {locale === 'ar'
              ? 'اكتشف مجموعتنا المختارة من الخدمات المتخصصة المصممة لاحتياجاتك.'
              : 'Explore our curated set of specialized services tailored to your needs.'}
          </p>
        </div>
        <Link
          href={`/${locale}/contact`}
          className="btn-primary text-sm self-start md:self-auto shadow-glow"
        >
          {nav('appointment')}
        </Link>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s: Service) => (
          <ServiceCard key={s.slug} service={s} locale={locale} />
        ))}
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }, { locale: 'en.html' }, { locale: 'ar.html' }];
}
