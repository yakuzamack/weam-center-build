import { CountdownTimer } from '@/components/CountdownTimer';
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
  const rawLocale = params?.locale || 'en';
  // Strip .html extension if present (for static export compatibility)
  const cleanLocale = rawLocale.replace('.html', '');
  const locale = cleanLocale === 'ar' ? 'ar' : 'en';
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
  const rawLocale = props?.params?.locale || 'en';
  // Strip .html extension if present (for static export compatibility)
  const cleanLocale = rawLocale.replace('.html', '');
  const locale = cleanLocale === 'ar' ? 'ar' : 'en';
  const tHome = tn(locale, 'homepage');

  return (
    <main className="pattern-medical">
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden py-24 md:py-32 pattern-waves">
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_center,white,transparent)]" />
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-400 animate-fade-in">
              {tHome('title')}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in [animation-delay:0.2s]">
              {tHome('subtitle')}
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300 animate-fade-in [animation-delay:0.4s]">
              {tHome('description')}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:0.6s]">
              <Link href={`/${locale}/contact`} className="btn-primary text-base shadow-glow">
                {tHome('heroCtaPrimary')}
              </Link>
              <Link href={`/${locale}/services`} className="btn-outline text-base">
                {tHome('heroCtaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pattern-grid">
        <div className="max-w-4xl mx-auto px-6">
          <CountdownTimer locale={locale} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {tHome('aboutSection.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {tHome('aboutSection.introduction')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {tHome('aboutSection.mission')}
            </p>
            <p className="text-lg font-semibold text-brand-600">{tHome('aboutSection.values')}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {tHome('servicesSection.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'generalMedicine',
              'pediatrics',
              'dermatology',
              'orthopedics',
              'dentalCare',
              'physiotherapy',
            ].map((service) => (
              <div key={service} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {tHome(`servicesSection.${service}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {tHome(`servicesSection.${service}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {tHome('doctorsSection.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['doctor1', 'doctor2', 'doctor3', 'doctor4'].map((doctor) => (
              <div key={doctor} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {tHome(`doctorsSection.${doctor}.name`).split(' ')[1]?.[0] || 'D'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {tHome(`doctorsSection.${doctor}.name`)}
                </h3>
                <p className="text-brand-600 font-medium mb-1">
                  {tHome(`doctorsSection.${doctor}.specialty`)}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {tHome(`doctorsSection.${doctor}.experience`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {tHome('testimonialsSection.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['review1', 'review2', 'review3'].map((review) => (
              <div key={review} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  &ldquo;{tHome(`testimonialsSection.${review}`)}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-brand-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-brand-100 mb-8">
            Contact us today to schedule your appointment
          </p>
          <Link
            href={`/${locale}/contact`}
            className="btn bg-white text-brand-600 hover:bg-gray-100"
          >
            {tHome('heroCtaPrimary')}
          </Link>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }, { locale: 'en.html' }, { locale: 'ar.html' }];
}
