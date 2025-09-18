import { getServices, type Service } from '@/data/services';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  const services = getServices();
  return (
    <main className="page">
      <h1>{t('title')}</h1>
      <ul className="list">
        {services.map((s: Service) => (
          <li key={s.slug}>
            <Link href={`/${locale}/services/${s.slug}`}>{t(`${s.key}.title`)}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
