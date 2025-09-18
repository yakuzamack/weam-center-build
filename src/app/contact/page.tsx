import Link from 'next/link';

export const metadata = {
  title: 'تواصل معنا - مركز الوئام',
  description:
    'تواصل مع مركز الوئام للخدمات الطبية والتجميلية. احجز موعدك اليوم أو تواصل معنا عبر الهاتف أو واتساب للحصول على استشارة مجانية.',
};

export default function ContactPage() {
  return (
    <main className='medical-gradient-bg min-h-screen' dir='rtl'>
      {/* Hero Section */}
      <section className='relative min-h-[40vh] overflow-hidden bg-gradient-to-br from-blue-600 to-teal-600 py-20'>
        <div className='pattern-medical absolute inset-0 opacity-10'></div>
        <div className='relative z-10 flex min-h-[40vh] items-center'>
          <div className='mx-auto max-w-7xl px-6'>
            <div className='text-center'>
              <h1 className='mb-6 text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl'>
                تواصل معنا
              </h1>
              <p className='mx-auto max-w-3xl text-xl leading-relaxed text-white/90 drop-shadow'>
                نحن هنا لخدمتكم والإجابة على جميع استفساراتكم الطبية
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='grid gap-8 lg:grid-cols-2'>
            {/* Contact Info Cards */}
            <div className='space-y-8'>
              <div className='text-center lg:text-right'>
                <h2 className='medical-section-title'>معلومات التواصل</h2>
                <p className='medical-section-subtitle'>
                  تواصل معنا بأي طريقة تناسبك
                </p>
              </div>

              {/* Phone */}
              <div className='medical-card p-6'>
                <div className='flex items-center gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-blue-100'>
                    <svg
                      className='h-6 w-6 text-blue-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-800'>
                      الهاتف
                    </h3>
                    <a
                      href='tel:+971555373443'
                      className='text-blue-600 hover:text-blue-700'
                    >
                      +971 55 537 3443
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className='medical-card p-6'>
                <div className='flex items-center gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-green-100'>
                    <svg
                      className='h-6 w-6 text-green-600'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488' />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-800'>
                      واتساب
                    </h3>
                    <a
                      href='https://wa.me/971555373443'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-green-600 hover:text-green-700'
                    >
                      تواصل عبر واتساب
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className='medical-card p-6'>
                <div className='flex items-center gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-teal-100'>
                    <svg
                      className='h-6 w-6 text-teal-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
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
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-800'>
                      الموقع
                    </h3>
                    <p className='text-gray-600'>
                      رأس الخيمة، الإمارات العربية المتحدة
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className='medical-card p-6'>
                <div className='flex items-center gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-purple-100'>
                    <svg
                      className='h-6 w-6 text-purple-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-800'>
                      البريد الإلكتروني
                    </h3>
                    <a
                      href='mailto:info@alweammedical.com'
                      className='text-purple-600 hover:text-purple-700'
                    >
                      info@alweammedical.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className='space-y-8'>
              <div className='text-center lg:text-right'>
                <h2 className='medical-section-title'>احجز موعدك الآن</h2>
                <p className='medical-section-subtitle'>
                  اختر الطريقة الأنسب لك لحجز موعدك
                </p>
              </div>

              {/* Quick Contact Actions */}
              <div className='space-y-4'>
                <a
                  href='tel:+971555373443'
                  className='medical-card group flex w-full items-center gap-4 p-6 transition-all hover:scale-105'
                >
                  <div className='flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white'>
                    <svg
                      className='h-8 w-8'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                  </div>
                  <div className='text-right'>
                    <h3 className='text-xl font-bold text-gray-800 group-hover:text-blue-600'>
                      اتصل الآن
                    </h3>
                    <p className='text-gray-600'>
                      للحجز المباشر والاستفسارات العاجلة
                    </p>
                  </div>
                </a>

                <a
                  href='https://wa.me/971555373443'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='medical-card group flex w-full items-center gap-4 p-6 transition-all hover:scale-105'
                >
                  <div className='flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white'>
                    <svg
                      className='h-8 w-8'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488' />
                    </svg>
                  </div>
                  <div className='text-right'>
                    <h3 className='text-xl font-bold text-gray-800 group-hover:text-green-600'>
                      واتساب
                    </h3>
                    <p className='text-gray-600'>للتواصل السريع والمريح</p>
                  </div>
                </a>

                <Link
                  href='/services'
                  className='medical-card group flex w-full items-center gap-4 p-6 transition-all hover:scale-105'
                >
                  <div className='flex h-16 w-16 items-center justify-center rounded-full bg-teal-600 text-white'>
                    <svg
                      className='h-8 w-8'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                      />
                    </svg>
                  </div>
                  <div className='text-right'>
                    <h3 className='text-xl font-bold text-gray-800 group-hover:text-teal-600'>
                      تصفح الخدمات
                    </h3>
                    <p className='text-gray-600'>
                      اكتشف جميع خدماتنا الطبية والتجميلية
                    </p>
                  </div>
                </Link>
              </div>

              {/* Operating Hours */}
              <div className='medical-card p-6'>
                <h3 className='mb-4 text-xl font-bold text-gray-800'>
                  أوقات العمل
                </h3>
                <div className='space-y-2 text-gray-600'>
                  <div className='flex justify-between'>
                    <span>السبت - الخميس</span>
                    <span>9:00 ص - 9:00 م</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>الجمعة</span>
                    <span>2:00 م - 9:00 م</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='bg-white py-16'>
        <div className='mx-auto max-w-4xl px-6 text-center'>
          <h2 className='medical-section-title'>نحن في انتظار تواصلكم</h2>
          <p className='medical-section-subtitle'>
            فريقنا الطبي المتخصص جاهز لتقديم أفضل رعاية صحية لكم
          </p>
          <div className='mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center'>
            <a href='tel:+971555373443' className='medical-button-primary'>
              اتصل الآن
            </a>
            <a
              href='https://wa.me/971555373443'
              target='_blank'
              rel='noopener noreferrer'
              className='medical-button-secondary'
            >
              واتساب
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
