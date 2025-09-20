import { OptimizedImage } from '@/components/OptimizedImage';
import Link from 'next/link';

export const metadata = {
  title: 'طب الجلدية والتجميل - Dermatology | مركز الوئام الطبي',
  description: 'احصل على أفضل خدمة طب الجلدية والتجميل (Dermatology Treatment) في الإمارات. علاج شامل للأمراض الجلدية وتجميل البشرة مع خبرة 15 سنة.',
  keywords: 'طب الجلدية, dermatology, الأمراض الجلدية, skin treatment, dermatologist, علاج البشرة, تجميل البشرة, مركز الوئام, دبي, الإمارات',
  openGraph: {
    title: 'طب الجلدية والتجميل - Dermatology Treatment | مركز الوئام',
    description: 'علاج شامل للأمراض الجلدية ✓ تجميل البشرة ✓ أحدث التقنيات ✓ خبرة 15 سنة',
    type: 'website',
    locale: 'ar_SA',
  },
};

const dermatologySchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "طب الجلدية والتجميل - Dermatology Treatment",
  "description": "علاج شامل لجميع مشاكل البشرة والأمراض الجلدية باستخدام أحدث التقنيات الطبية",
  "provider": {
    "@type": "MedicalOrganization",
    "name": "مركز الوئام للصحة الشاملة",
    "address": "الإمارات العربية المتحدة"
  },
  "bodyLocation": "الجلد والبشرة",
  "preparation": "فحص شامل للبشرة وتحديد نوع العلاج المناسب",
};

export default function DermatologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dermatologySchema) }}
      />
      
      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-90"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              طب الجلدية والتجميل
              <span className="block text-2xl md:text-3xl font-light mt-2 opacity-90">
                Dermatology & Cosmetic Treatment
              </span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              نقدم علاجاً شاملاً لجميع مشاكل البشرة والأمراض الجلدية باستخدام أحدث التقنيات الطبية والتجميلية
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
                احجز استشارتك المجانية
              </Link>
              <a href="https://wa.me/971555373443" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                واتساب الآن
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                خدمات طب الجلدية المتخصصة
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">علاج الأمراض الجلدية</h3>
                    <p className="text-gray-600">علاج متخصص للأكزيما والصدفية والتهابات الجلد باستخدام Dermatology Treatment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">علاج حب الشباب والندبات</h3>
                    <p className="text-gray-600">علاج شامل لحب الشباب وآثاره باستخدام أحدث تقنيات Skin Treatment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">علاج التпигمنتات والتصبغات</h3>
                    <p className="text-gray-600">إزالة البقع الداكنة والتصبغات وتوحيد لون البشرة</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">مكافحة الشيخوخة</h3>
                    <p className="text-gray-600">علاجات متقدمة لمكافحة علامات الشيخوخة والتجاعيد</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <OptimizedImage
                src="/images/services/facial-treatments.jpg"
                alt="طب الجلدية والتجميل - Dermatology Treatment في مركز الوئام"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Treatment Types */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              أنواع العلاجات الجلدية المتاحة
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">العلاج الدوائي</h3>
                <p className="text-gray-600">أدوية متخصصة وكريمات طبية للعلاج الموضعي والشامل</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">الليزر الطبي</h3>
                <p className="text-gray-600">أحدث أجهزة الليزر لعلاج مشاكل البشرة المختلفة</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">التقشير الكيميائي</h3>
                <p className="text-gray-600">تقشير متدرج للبشرة لتجديد الخلايا وتحسين الملمس</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">الحقن التجميلية</h3>
                <p className="text-gray-600">حقن البوتوكس وحمض الهيالورونيك لمحاربة التجاعيد</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">العلاج بالضوء</h3>
                <p className="text-gray-600">تقنية LED والضوء النبضي لعلاج مشاكل البشرة</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">الميكرونيدلينغ</h3>
                <p className="text-gray-600">تحفيز تجديد الكولاجين لتحسين ملمس البشرة</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Conditions */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              الحالات الأكثر شيوعاً
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">حب الشباب</h3>
                <p className="text-gray-600 text-sm">علاج شامل وفعال</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">الأكزيما</h3>
                <p className="text-gray-600 text-sm">تهدئة الالتهابات</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">التصبغات</h3>
                <p className="text-gray-600 text-sm">توحيد لون البشرة</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">التجاعيد</h3>
                <p className="text-gray-600 text-sm">مكافحة الشيخوخة</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              الأسئلة الشائعة حول Dermatology
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">متى أحتاج لزيارة طبيب الجلدية؟</h3>
                <p className="text-gray-600">يُنصح بزيارة Dermatologist عند ظهور مشاكل جلدية مستمرة، تغيرات في الشامات، أو لاستشارة تجميلية.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">هل العلاجات التجميلية آمنة؟</h3>
                <p className="text-gray-600">نعم، جميع علاجات Skin Treatment في مركزنا آمنة ومعتمدة طبياً ويتم تطبيقها بأيدي خبراء مختصين.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">كم تستغرق النتائج للظهور؟</h3>
                <p className="text-gray-600">تختلف حسب نوع العلاج، بعض النتائج تظهر فوراً والأخرى تحتاج من 2-6 أسابيع للظهور كاملة.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">هل أحتاج لجلسات متابعة؟</h3>
                <p className="text-gray-600">نعم، معظم العلاجات الجلدية تحتاج جلسات متابعة للحصول على أفضل النتائج والحفاظ عليها.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-violet-600">
          <div className="max-w-4xl mx-auto text-center px-6 text-white">
            <h2 className="text-3xl font-bold mb-4">
              احجز استشارتك مع أخصائي الجلدية
            </h2>
            <p className="text-xl mb-8 opacity-90">
              فحص شامل + استشارة مجانية + خطة علاج مخصصة بخصم 50%
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
                احجز الاستشارة المجانية
              </Link>
              <a href="https://wa.me/971555373443" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                تواصل عبر الواتساب
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}