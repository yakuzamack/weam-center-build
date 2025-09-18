import { getServices, type Service } from '@/data/services';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function ServicesPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = await getTranslations('services');
  const nav = await getTranslations('navigation');
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
            className="card group flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-brand-600 transition-colors">
                {t(`${s.key}.title`)}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-5">
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
