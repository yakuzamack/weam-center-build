import { getServices, type Service } from '@/data/services';
import { tn } from '@/lib/i18n';
import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params?.locale === 'ar' ? 'ar' : 'en';
  const t = tn(locale, 'services');
  return {
    title: `${t('title')} – Al WEAM Medical Centre`,
    description:
      locale === 'ar'
        ? 'مجموعة من الخدمات الطبية والتجميلية المتخصصة.'
        : 'A collection of specialized medical & aesthetic service offerings.',
    alternates: { languages: { en: '/en/services', ar: '/ar/services' } },
  };
}

export default async function ServicesPage(props: { params: { locale: string } }) {
  const locale = props?.params?.locale === 'ar' ? 'ar' : 'en';
  const t = tn(locale, 'services');
  const nav = tn(locale, 'navigation');
  const services = getServices();
  return (
    <main className="page">
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('title')}</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            {locale === 'ar'
              ? 'اكتشف مجموعتنا المختارة من الخدمات المتخصصة المصممة لاحتياجاتك.'
              : 'Explore our curated set of specialized services tailored to your needs.'}
          </p>
        </div>
        <Link href={`/${locale}/contact`} className="btn-primary text-sm self-start md:self-auto">
          {nav('appointment')}
        </Link>
      </div>
      <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s: Service) => (
          <Link
            key={s.slug}
            href={`/${locale}/services/${s.slug}`}
            className="card group flex flex-col justify-between hover:-translate-y-0.5 transition-transform"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <h2 className="text-lg font-semibold group-hover:text-brand-600 transition-colors">
                  {t(`${s.key}.title`)}
                </h2>
                {s.slug === 'laser-hair-removal' && (
                  <span className="badge">{locale === 'ar' ? 'مميز' : 'Popular'}</span>
                )}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-4">
                {t(`${s.key}.description`)}
              </p>
            </div>
            <div className="mt-4 text-brand-600 font-medium text-sm inline-flex items-center gap-1">
              {locale === 'ar' ? 'اكتشف المزيد' : 'Learn more'}
              <span aria-hidden>→</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}
