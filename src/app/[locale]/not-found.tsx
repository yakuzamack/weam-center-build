import { tn } from '@/lib/i18n';
import Link from 'next/link';

export default function NotFound(props: { params?: { locale?: string } }) {
  const locale = props?.params?.locale === 'ar' ? 'ar' : 'en';
  const t = tn(locale, 'notFound');
  return (
    <main className="page text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
      <p className="prose-muted max-w-xl mx-auto mb-8">{t('description')}</p>
      <Link href={`/${locale}`} className="btn-primary">
        {t('back')}
      </Link>
    </main>
  );
}
