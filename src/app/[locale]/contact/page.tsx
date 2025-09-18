import { tn } from '@/lib/i18n';
import type { Metadata } from 'next';
import Link from 'next/link';

interface ContactPageProps {
  params: { locale: string };
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const rawLocale = params?.locale || 'en';
  const cleanLocale = rawLocale.replace('.html', '');
  const locale = cleanLocale === 'ar' ? 'ar' : 'en';
  const t = tn(locale, 'contact');
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      languages: { en: '/en/contact', ar: '/ar/contact' },
    },
  };
}

export default function ContactPage({ params }: ContactPageProps) {
  const rawLocale = params?.locale || 'en';
  const cleanLocale = rawLocale.replace('.html', '');
  const locale = cleanLocale === 'ar' ? 'ar' : 'en';
  const t = tn(locale, 'contact');
  const nav = tn(locale, 'navigation');

  return (
    <main className="page">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-400">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid gap-8 md:gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-xl font-semibold mb-4 text-brand-600 dark:text-brand-400">
                {t('info.title')}
              </h2>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-1 text-brand-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">{t('info.address')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-brand-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a href={`tel:${t('info.phone')}`} className="hover:text-brand-600">
                    {t('info.phone')}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-brand-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a href={`mailto:${t('info.email')}`} className="hover:text-brand-600">
                    {t('info.email')}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-brand-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{t('info.hours')}</span>
                </div>
                <div className="mt-4">
                  <a
                    href="https://wa.me/971555373443"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-semibold mb-4 text-brand-600 dark:text-brand-400">
                {t('businessHours.title')}
              </h2>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>{t('businessHours.saturday').split(':')[0]}</span>
                  <span>{t('businessHours.saturday').split(': ')[1]}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('businessHours.sunday').split(':')[0]}</span>
                  <span>{t('businessHours.sunday').split(': ')[1]}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('businessHours.monday').split(':')[0]}</span>
                  <span>{t('businessHours.monday').split(': ')[1]}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('businessHours.tuesday').split(':')[0]}</span>
                  <span>{t('businessHours.tuesday').split(': ')[1]}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('businessHours.wednesday').split(':')[0]}</span>
                  <span>{t('businessHours.wednesday').split(': ')[1]}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('businessHours.thursday').split(':')[0]}</span>
                  <span>{t('businessHours.thursday').split(': ')[1]}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('businessHours.friday').split(':')[0]}</span>
                  <span className="text-red-500">{t('businessHours.friday').split(': ')[1]}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold mb-4 text-brand-600 dark:text-brand-400">
              Book Appointment
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  {t('form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  {t('form.service')}
                </label>
                <select
                  id="service"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                >
                  <option value="">Select a Service</option>
                  <option value="general">General Medicine</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="dental">Dental Care</option>
                  <option value="physiotherapy">Physiotherapy</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                {t('form.submit')}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href={`/${locale}/services`} className="btn-outline">
            {nav('services')}
          </Link>
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }, { locale: 'en.html' }, { locale: 'ar.html' }];
}
