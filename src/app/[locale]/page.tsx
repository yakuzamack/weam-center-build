import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'homepage' });
  return (
    <main style={{ padding: '3rem', fontFamily: 'system-ui' }}>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <nav style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
        <Link href={`/${locale}/services`}>{locale === 'ar' ? 'الخدمات' : 'Services'}</Link>
        <Link href={`/${locale}/contact`}>{locale === 'ar' ? 'اتصل بنا' : 'Contact'}</Link>
      </nav>
    </main>
  );
}
