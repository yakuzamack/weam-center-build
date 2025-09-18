import Link from 'next/link';

interface FooterProps {
  brand: string;
}

export function Footer({ brand }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className='medical-footer mt-24 text-sm'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='grid gap-10 border-t border-gray-700 py-12 md:grid-cols-4 md:gap-6'>
          <div className='md:col-span-2'>
            {/* Logo Section */}
            <div className='mb-6 flex items-center gap-4'>
              <div className='flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-teal-600 shadow-lg'>
                <svg
                  className='h-8 w-8 text-white'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z' />
                </svg>
              </div>
              <div>
                <div className='mb-1 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-lg font-semibold text-transparent'>
                  {brand}
                </div>
                <div className='text-sm text-gray-400'>مركز طبي متخصص</div>
              </div>
            </div>

            <p className='mb-6 max-w-md leading-relaxed text-gray-300'>
              مركز الوئام للصحة الشاملة - متخصص في الأمراض الجلدية والليزر
              والحجامة والعناية المهنية بالبشرة باستخدام أحدث التقنيات والخبرات
              الاستثنائية.
            </p>

            <div className='mb-4 flex items-center gap-4'>
              <div className='flex items-center gap-2 rounded-full bg-blue-900/20 px-3 py-1'>
                <div className='h-2 w-2 rounded-full bg-blue-500'></div>
                <span className='text-xs font-medium text-blue-300'>مرخص</span>
              </div>
              <div className='flex items-center gap-2 rounded-full bg-emerald-900/20 px-3 py-1'>
                <div className='h-2 w-2 rounded-full bg-emerald-500'></div>
                <span className='text-xs font-medium text-emerald-300'>
                  معتمد
                </span>
              </div>
            </div>

            <p className='text-xs text-gray-400'>
              {year} © {brand}. جميع الحقوق محفوظة.
            </p>
          </div>

          {/* Contact Info */}
          <div className='flex flex-col gap-2'>
            <h3 className='mb-2 font-semibold text-gray-200'>
              معلومات التواصل
            </h3>
            <div className='space-y-2 text-gray-300'>
              <p className='flex items-center gap-2'>
                <svg
                  className='h-4 w-4 flex-shrink-0 text-blue-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <span className='text-sm'>
                  رأس الخيمة، الإمارات العربية المتحدة
                </span>
              </p>
              <p className='flex items-center gap-2'>
                <svg
                  className='h-4 w-4 flex-shrink-0 text-blue-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                <a
                  href='tel:+971555373443'
                  className='text-sm transition-colors hover:text-blue-400'
                >
                  +971 55 537 3443
                </a>
              </p>
              <p className='flex items-center gap-2'>
                <svg
                  className='h-4 w-4 flex-shrink-0 text-blue-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <a
                  href='mailto:info@alweammedical.com'
                  className='text-sm transition-colors hover:text-blue-400'
                >
                  info@alweammedical.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col gap-2'>
            <h3 className='mb-2 font-semibold text-gray-200'>روابط سريعة</h3>
            <nav className='flex flex-col gap-2'>
              <Link
                href='/'
                className='text-sm text-gray-300 transition-colors hover:text-blue-400'
              >
                الرئيسية
              </Link>
              <Link
                href='/services'
                className='text-sm text-gray-300 transition-colors hover:text-blue-400'
              >
                الخدمات
              </Link>
              <Link
                href='/contact'
                className='text-sm text-gray-300 transition-colors hover:text-blue-400'
              >
                تواصل معنا
              </Link>
              <a
                href='https://wa.me/971555373443'
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm font-medium text-green-400 transition-colors hover:text-green-300'
              >
                واتساب
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='flex flex-col items-center justify-between gap-4 border-t border-gray-700 py-6 md:flex-row'>
          <p className='text-sm text-gray-400'>بناء ثابت للأداء الأمثل</p>
          <div className='flex items-center gap-4 text-gray-400'>
            <span className='text-sm'>دعم ثنائي اللغة والوضع المظلم</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
