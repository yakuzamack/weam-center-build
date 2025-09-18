import { tn } from '@/lib/i18n';
import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  // Defensive: Next export has been invoking this with an undefined params object intermittently.
  // Fallback to 'en' so the build does not crash while we investigate upstream cause.
  const locale = params?.locale === 'ar' ? 'ar' : 'en';
  const tHome = tn(locale, 'homepage');
  return {
    title: tHome('metaTitle'),
    description: tHome('metaDescription'),
    alternates: {
      languages: { en: '/en', ar: '/ar' },
    },
  };
}

export default function Home(props: { params: { locale: string } }) {
  const locale = props?.params?.locale === 'ar' ? 'ar' : 'en';
  const tHome = tn(locale, 'homepage');
  return (
    <main>
      <section className="gradient-hero relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_center,white,transparent)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-400">
              {tHome('title')}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {tHome('description')}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href={`/${locale}/services`} className="btn-primary text-base">
                {tHome('heroCtaPrimary')}
              </Link>
              <Link href={`/${locale}/contact`} className="btn-outline text-base">
                {tHome('heroCtaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}
