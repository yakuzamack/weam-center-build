import { CountdownTimer } from '@/components/CountdownTimer';
import { ServicePreviewCard } from '@/components/ServicePreviewCard';
import { OptimizedHero } from '@/components/OptimizedHero';
import { StructuredData } from '@/components/StructuredData';
import { getServices } from '@/data/services';
import Link from 'next/link';

export const metadata = {
  title: 'مركز الوئام للصحة الشاملة | أفضل مركز طبي وتجميلي في الإمارات',
  description:
    'مركز الوئام الرائد في الخدمات الطبية والتجميلية بالإمارات. 15 سنة خبرة، +2500 عميل راضي، 8 تخصصات طبية. احجز استشارتك المجانية الآن!',
  keywords:
    'مركز طبي الإمارات, مركز الوئام, علاجات تجميلية دبي, أمراض جلدية, إزالة الشعر بالليزر, حجامة طبية, علاج طبيعي, طب أسنان, عيادة تجميل',
  openGraph: {
    title: 'مركز الوئام للصحة الشاملة | أفضل مركز طبي في الإمارات',
    description: '15 سنة خبرة ✓ أحدث التقنيات ✓ أفضل الأطباء ✓ أسعار تنافسية ✓ استشارة مجانية',
    type: 'website',
    locale: 'ar_SA',
    url: 'https://alweamcentre.com',
    siteName: 'مركز الوئام',
  },
  alternates: {
    canonical: 'https://alweamcentre.com'
  }
};

export default function HomePage() {
  const featuredServices = getServices()
    .filter(service => ['laser-hair-removal', 'dermatology', 'cupping-therapy', 'physiotherapy'].includes(service.slug));
  // Show only 4 featured services as previews

  return (
    <>
      <StructuredData type='organization' />
      <main className='medical-gradient-bg min-h-screen'>
      {/* Hero Section */}
      <OptimizedHero
        imageType='wellness'
        className='py-20'
        enableParallax={true}
      >
        <div className='mx-auto max-w-7xl px-6'>
          <div className='mb-16 text-center'>
            <h1 className='mb-6 animate-fade-in text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl'>
              مركز الوئام للصحة الشاملة
            </h1>
            <p className='mx-auto max-w-3xl animate-fade-in text-xl leading-relaxed text-white/90 drop-shadow [animation-delay:0.2s]'>
              نقدم خدمات طبية وتجميلية متميزة باستخدام أحدث التقنيات والخبرات
              المتخصصة لصحتكم وجمالكم
            </p>

            <div className='mt-10 flex animate-fade-in flex-col justify-center gap-4 [animation-delay:0.4s] sm:flex-row'>
              <Link
                href='/contact'
                className='btn-primary transform px-8 py-4 text-lg shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
              >
                احجز موعد
              </Link>
              <a
                href='https://wa.me/971555373443'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex transform items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20'
              >
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488' />
                </svg>
                واتساب
              </a>
            </div>
          </div>
        </div>
      </OptimizedHero>

      {/* Special Offer Section */}
      <section className='pattern-grid bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>
        <div className='mx-auto max-w-4xl px-6'>
          <div className='offer-card'>
            <div className='offer-pattern'></div>
            <div className='relative z-10'>
              <div className='offer-content'>
                <div className='offer-header'>
                  <h2 className='offer-title'>عرض الافتتاح الكبير</h2>
                  <p className='offer-subtitle'>خصم 50% على جميع الخدمات الطبية والتجميلية</p>
                  <div className='mt-4 space-y-2'>
                    <div className='flex items-center justify-center gap-2 text-green-600 dark:text-green-400'>
                      <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                      <span className='font-semibold'>استشارة طبية مجانية</span>
                    </div>
                    <div className='flex items-center justify-center gap-2 text-green-600 dark:text-green-400'>
                      <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                      <span className='font-semibold'>فحص شامل مجاني</span>
                    </div>
                  </div>
                </div>
                <div className='offer-value'>خصم 50%</div>
                <p className='mt-4 text-sm text-gray-600 dark:text-gray-400'>*العرض ساري لفترة محدودة - يشمل جميع التخصصات الطبية</p>
                <CountdownTimer />
                <div className='mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center'>
                  <Link href='/contact' className='medical-button-primary'>
                    احجز موعد الاستشارة المجانية
                  </Link>
                  <a
                    href='https://wa.me/971555373443'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='medical-button-secondary inline-flex items-center gap-2'
                  >
                    <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488' />
                    </svg>
                    واتساب الآن
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className='bg-white px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
            <div className='medical-stats-card text-center'>
              <div className='medical-stats-number'>2,500+</div>
              <div className='text-sm font-medium text-gray-600'>عميل راضي</div>
              <div className='mt-1 text-xs text-green-600'>
                +12.5% هذا العام
              </div>
            </div>
            <div className='medical-stats-card text-center'>
              <div className='medical-stats-number'>8+</div>
              <div className='text-sm font-medium text-gray-600'>
                خدمات متخصصة
              </div>
              <div className='mt-1 text-xs text-blue-600'>+2 خدمات جديدة</div>
            </div>
            <div className='medical-stats-card text-center'>
              <div className='medical-stats-number'>15+</div>
              <div className='text-sm font-medium text-gray-600'>
                سنوات خبرة
              </div>
              <div className='mt-1 text-xs text-teal-600'>تأسس 2009</div>
            </div>
            <div className='medical-stats-card text-center'>
              <div className='medical-stats-number'>98%</div>
              <div className='text-sm font-medium text-gray-600'>
                معدل النجاح
              </div>
              <div className='mt-1 text-xs text-green-600'>+2.1% تحسن</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Preview Section */}
      <section className='py-20 bg-gray-50 dark:bg-gray-900'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='mb-16 text-center'>
            <h2 className='mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl'>
              خدماتنا المميزة
            </h2>
            <p className='mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300'>
              اكتشف مجموعة مختارة من خدماتنا الأكثر طلباً والأعلى جودة
            </p>
          </div>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            {featuredServices.map((service) => (
              <ServicePreviewCard key={service.slug} service={service} />
            ))}
          </div>

          <div className='mt-16 text-center'>
            <Link 
              href='/services' 
              className='inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg'
            >
              استكشف جميع خدماتنا
              <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </Link>
            <p className='mt-3 text-sm text-gray-500 dark:text-gray-400'>
              أكثر من 8 خدمات طبية وتجميلية متخصصة
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='bg-white px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='medical-section-title'>
            احجز استشارتك المجانية اليوم
          </h2>
          <p className='medical-section-subtitle'>
            فريقنا من الأطباء المتخصصين والاستشاريين جاهز لتقديم أفضل رعاية صحية
            باستخدام أحدث التقنيات الطبية
          </p>
          <div className='mt-8 flex flex-col justify-center gap-4 sm:flex-row'>
            <Link href='/contact' className='medical-button-primary'>
              احجز الآن
            </Link>
            <a href='tel:+971555373443' className='medical-button-secondary'>
              اتصل الآن
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
