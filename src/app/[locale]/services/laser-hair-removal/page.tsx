import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { getServiceBySlug } from "../../../../data/services";

interface LaserHairRemovalPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: LaserHairRemovalPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  return {
    title: `${t("laserHairRemoval.title")} - Al WEAM Medical Centre`,
    description: t("laserHairRemoval.description"),
    keywords: "laser hair removal, permanent hair removal, Italian Quanta device, Riyadh, Saudi Arabia",
    openGraph: {
      title: `${t("laserHairRemoval.title")} - Al WEAM Medical Centre`,
      description: t("laserHairRemoval.description"),
      type: 'website',
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
    },
    alternates: {
      canonical: `/${locale}/services/laser-hair-removal`,
      languages: {
        'ar': '/ar/services/laser-hair-removal',
        'en': '/en/services/laser-hair-removal',
      },
    },
  };
}

export default async function LaserHairRemovalPage({
  params,
}: LaserHairRemovalPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const nav = await getTranslations({ locale, namespace: "navigation" });

  const service = getServiceBySlug('laser-hair-removal');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className={`inline-flex items-center space-x-2 rtl:space-x-reverse ${locale === 'ar' ? 'space-x-reverse' : ''}`}>
              <li>
                <Link href={`/${locale}`} className="text-purple-600 hover:text-purple-800 dark:text-purple-400">
                  {nav('home')}
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link href={`/${locale}/services`} className="text-purple-600 hover:text-purple-800 dark:text-purple-400">
                  {nav('services')}
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-700 dark:text-gray-300" aria-current="page">
                {t('laserHairRemoval.title')}
              </li>
            </ol>
          </nav>

          <div className="text-6xl mb-6">✨</div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t('laserHairRemoval.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('laserHairRemoval.description')}
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12 border border-gray-100 dark:border-gray-700">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {locale === 'ar' ? 'جهاز Quanta الإيطالي المتطور' : 'Advanced Italian Quanta Device'}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {locale === 'ar'
                    ? 'نستخدم في مركز العافية الطبي أحدث تقنيات الليزر الإيطالية المتطورة من شركة Quanta، والتي تضمن إزالة آمنة وفعالة للشعر غير المرغوب فيه مع أقل قدر من الألم.'
                    : 'At Al WEAM Medical Centre, we use the latest advanced Italian laser technology from Quanta, ensuring safe and effective removal of unwanted hair with minimal discomfort.'
                  }
                </p>

                {service?.price && (
                  <div className={`flex items-center justify-between mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {locale === 'ar' ? 'يبدأ من' : 'Starting from'}
                    </span>
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {service.price.from} {service.price.currency}
                    </span>
                  </div>
                )}
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl p-8 text-center">
                <div className="text-8xl mb-4">🌟</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {locale === 'ar' ? 'نتائج مضمونة' : 'Guaranteed Results'}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {locale === 'ar'
                    ? 'تقنية متقدمة وآمنة مع فريق من الممرضات المهنيات المتخصصات'
                    : 'Advanced, safe technology with a team of professional specialized nurses'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border border-gray-100 dark:border-gray-700">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {locale === 'ar' ? 'سرعة في النتائج' : 'Fast Results'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {locale === 'ar'
                  ? 'نتائج واضحة منذ الجلسة الأولى مع تقنية الليزر المتطورة'
                  : 'Visible results from the first session with advanced laser technology'
                }
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border border-gray-100 dark:border-gray-700">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {locale === 'ar' ? 'آمان تام' : 'Complete Safety'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {locale === 'ar'
                  ? 'معايير سلامة عالية مع أحدث تقنيات الحماية للبشرة'
                  : 'High safety standards with the latest skin protection technologies'
                }
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border border-gray-100 dark:border-gray-700">
              <div className="text-4xl mb-4">💫</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {locale === 'ar' ? 'راحة أثناء العلاج' : 'Comfortable Treatment'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {locale === 'ar'
                  ? 'تجربة مريحة وممتعة في بيئة آمنة ونظيفة'
                  : 'Comfortable and pleasant experience in a safe, clean environment'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-800 dark:to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {locale === 'ar' ? 'احجز استشارتك المجانية اليوم' : 'Book Your Free Consultation Today'}
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            {locale === 'ar'
              ? 'تواصل معنا الآن للحصول على بشرة ناعمة خالية من الشعر'
              : 'Contact us now for smooth, hair-free skin'
            }
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${locale === 'ar' ? 'sm:flex-row-reverse' : ''}`}>
            <Link
              href={`/${locale}/contact`}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300 shadow-lg"
            >
              {nav('appointment')}
            </Link>
            <a
              href="https://wa.me/966XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
