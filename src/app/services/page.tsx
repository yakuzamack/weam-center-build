import { FloatingElement } from '@/components/FloatingAnimations';
import { ImprovedServiceCard } from '@/components/ImprovedServiceCard';
import { OptimizedHero } from '@/components/OptimizedHero';
import { getServices } from '@/data/services';
import Link from 'next/link';

export const metadata = {
  title: 'الخدمات الطبية والتجميلية - مركز الوئام',
  description:
    'اكتشف مجموعتنا الشاملة من الخدمات الطبية والتجميلية تشمل الأمراض الجلدية وعلاجات الليزر والحجامة وحلول العناية المتقدمة بالبشرة في مركز الوئام.',
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <main className='medical-gradient-bg min-h-screen' dir='rtl'>
      {/* Hero Section */}
      <OptimizedHero
        imageType='wellness'
        className='py-20'
        enableParallax={true}
      >
        <div className='mx-auto max-w-7xl px-6'>
          <div className='mb-16 text-center'>
            <h1 className='mb-6 animate-fade-in text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl'>
              خدماتنا الطبية
            </h1>
            <p className='mx-auto max-w-3xl animate-fade-in text-xl leading-relaxed text-white/90 drop-shadow [animation-delay:0.2s]'>
              اكتشف مجموعتنا المختارة من الخدمات المتخصصة المصممة لاحتياجاتك
              الصحية والتجميلية مع أحدث التقنيات والخبرة المتميزة
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

      {/* Statistics Section */}
      <section className='py-20'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='mb-16 grid grid-cols-2 gap-8 md:grid-cols-4'>
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

          {/* Services Grid */}
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
            {services.map((service, index) => (
              <FloatingElement key={service.slug} delay={index * 0.1}>
                <ImprovedServiceCard service={service} />
              </FloatingElement>
            ))}
          </div>

          {/* Call to Action */}
          <div className='mt-20 text-center'>
            <div className='rounded-3xl bg-gradient-to-r from-blue-600 to-teal-600 p-8 text-white md:p-12'>
              <h2 className='mb-4 text-2xl font-bold md:text-3xl'>
                هل أنت مستعد لأفضل تجربة؟
              </h2>
              <p className='mx-auto mb-8 max-w-2xl text-lg opacity-90'>
                احجز موعدك اليوم واستمتع بخدماتنا المتميزة مع فريق من الخبراء
                المتخصصين
              </p>
              <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                <Link
                  href='/contact'
                  className='inline-flex transform items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50'
                >
                  احجز موعد
                  <svg
                    className='h-5 w-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                    />
                  </svg>
                </Link>
                <a
                  href='https://wa.me/971555373443'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex transform items-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-700'
                >
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488' />
                  </svg>
                  تواصل فوري
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
