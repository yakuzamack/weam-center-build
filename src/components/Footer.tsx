import Link from 'next/link';

interface FooterProps {
  brand: string;
  locale?: string;
}

export function Footer({ brand, locale = 'en' }: FooterProps) {
  const year = new Date().getFullYear();
  const isArabic = locale === 'ar';

  return (
    <footer className="mt-24 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 md:gap-6 md:grid-cols-4 py-12 border-t border-gray-200 dark:border-gray-800">
          <div className="md:col-span-2">
            <div className="text-lg font-semibold bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent mb-3">
              {brand}
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm mb-4">
              {isArabic
                ? 'خدمات متخصصة في الأمراض الجلدية والليزر والحجامة والعناية بالبشرة في الرياض.'
                : 'Specialized dermatology, laser, cupping, and professional skin care services in Riyadh.'}
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs">
              {year} © {brand}. {isArabic ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {isArabic ? 'معلومات التواصل' : 'Contact Info'}
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-1">
              <p className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-brand-500"
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
                {isArabic ? 'الرياض، السعودية' : 'Riyadh, Saudi Arabia'}
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-brand-500"
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
                +966 11 123 4567
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-brand-500"
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
                info@alweammedical.com
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {isArabic ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <nav className="flex flex-col gap-1">
              <Link
                href={`/${locale}`}
                className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                {isArabic ? 'الرئيسية' : 'Home'}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                {isArabic ? 'خدماتنا' : 'Services'}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                {isArabic ? 'اتصل بنا' : 'Contact'}
              </Link>
            </nav>
          </div>
        </div>

        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-500">
            {isArabic ? 'موقع ثابت للأداء الأمثل' : 'Built statically for optimal performance'}
          </p>
          <div className="flex items-center gap-4 text-gray-500 dark:text-gray-500">
            <span>{isArabic ? 'دعم اللغتين والوضع المظلم' : 'Bilingual & dark mode support'}</span>
            <Link
              href={locale === 'en' ? '/ar' : '/en'}
              className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              {locale === 'en' ? 'العربية' : 'English'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
