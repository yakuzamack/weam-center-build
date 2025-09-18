import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = await getTranslations('homepage');
  const tNav = await getTranslations('navigation');
  return (
    <main>
      <section className="gradient-hero relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_center,white,transparent)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-400">
              {t('title')}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('description')}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href={`/${locale}/services`} className="btn-primary text-base">
                {tNav('services')}
              </Link>
              <Link href={`/${locale}/contact`} className="btn-outline text-base">
                {tNav('appointment')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
