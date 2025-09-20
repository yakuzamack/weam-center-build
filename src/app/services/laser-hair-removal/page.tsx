import { LogoImage } from '@/components/OptimizedImage';
import Link from 'next/link';

export const metadata = {
  title: 'إزالة الشعر بالليزر - Laser Hair Removal | مركز الوئام الطبي',
  description: 'احصل على أفضل خدمة إزالة الشعر بالليزر (Laser Hair Removal) في الإمارات. تقنيات حديثة آمنة وفعالة مع خبرة 15 سنة. احجز استشارتك المجانية الآن!',
  keywords: 'إزالة الشعر بالليزر, laser hair removal, ليزر الشعر, إزالة الشعر نهائياً, laser treatment, علاج بالليزر, مركز الوئام, دبي, الإمارات',
  openGraph: {
    title: 'إزالة الشعر بالليزر - Laser Hair Removal | مركز الوئام',
    description: 'تقنية الليزر المتطورة لإزالة الشعر نهائياً ✓ آمن وفعال ✓ نتائج مضمونة ✓ خبرة 15 سنة',
    type: 'website',
    locale: 'ar_SA',
  },
};

const laserSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "إزالة الشعر بالليزر - Laser Hair Removal",
  "description": "إزالة الشعر الآمنة والفعالة باستخدام أحدث تقنيات الليزر الطبي",
  "provider": {
    "@type": "MedicalOrganization",
    "name": "مركز الوئام للصحة الشاملة",
    "address": "الإمارات العربية المتحدة"
  },
  "bodyLocation": "جميع أجزاء الجسم",
  "preparation": "تجنب التعرض لأشعة الشمس قبل الجلسة",
};

export default function LaserHairRemovalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(laserSchema) }}
      />
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 opacity-90"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              إزالة الشعر بالليزر
              <span className="block text-2xl md:text-3xl font-light mt-2 opacity-90">
                Laser Hair Removal
              </span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              احصل على بشرة ناعمة وخالية من الشعر نهائياً بأحدث تقنيات الليزر الطبي الآمنة والفعالة
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                احجز استشارتك المجانية
              </Link>
              <a href="https://wa.me/971555373443" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                واتساب الآن
              </a>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                لماذا تختار الليزر لإزالة الشعر؟
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">إزالة نهائية وآمنة</h3>
                    <p className="text-gray-600">تقنية Laser Treatment متطورة تستهدف جذور الشعر لإزالة نهائية</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">مناسب لجميع أنواع البشرة</h3>
                    <p className="text-gray-600">أجهزة ليزر حديثة آمنة على البشرة الحساسة والداكنة</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">وقت قصير ونتائج سريعة</h3>
                    <p className="text-gray-600">جلسات قصيرة مع نتائج ملاحظة من الجلسة الأولى</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-r from-blue-100 to-teal-100 rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-blue-600 font-semibold">إزالة الشعر بالليزر</p>
                  <p className="text-blue-500 text-sm">Laser Hair Removal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              مناطق العلاج بالليزر
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">الوجه والرقبة</h3>
                <p className="text-gray-600 text-sm">إزالة شعر الوجه بدقة عالية</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">الذراعين</h3>
                <p className="text-gray-600 text-sm">الذراعين كاملة أو نصف ذراع</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">الساقين</h3>
                <p className="text-gray-600 text-sm">الساقين كاملة أو نصف ساق</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">المناطق الحساسة</h3>
                <p className="text-gray-600 text-sm">علاج آمن ومريح</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              الأسئلة الشائعة حول Laser Hair Removal
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">كم جلسة أحتاج لإزالة الشعر نهائياً؟</h3>
                <p className="text-gray-600">عادة ما تحتاج من 6-8 جلسات للحصول على نتائج نهائية، حسب نوع الشعر ولون البشرة.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">هل العلاج بالليزر آمن؟</h3>
                <p className="text-gray-600">نعم، تقنية Laser Treatment المستخدمة في مركزنا آمنة ومعتمدة طبياً ومناسبة لجميع أنواع البشرة.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">ما هي فترة الراحة بين الجلسات؟</h3>
                <p className="text-gray-600">يُنصح بفترة 4-6 أسابيع بين كل جلسة للحصول على أفضل النتائج.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
          <div className="max-w-4xl mx-auto text-center px-6 text-white">
            <h2 className="text-3xl font-bold mb-4">
              احجز جلستك الأولى بخصم 50%
            </h2>
            <p className="text-xl mb-8 opacity-90">
              استشارة مجانية + فحص شامل + خطة علاج مخصصة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                احجز الاستشارة المجانية
              </Link>
              <a href="https://wa.me/971555373443" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                تواصل عبر الواتساب
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}