import { OptimizedImage } from '@/components/OptimizedImage';
import Link from 'next/link';

export const metadata = {
  title: 'الحجامة الطبية - Hijama Cupping | مركز الوئام الطبي',
  description: 'احصل على أفضل خدمة الحجامة الطبية (Hijama Cupping Therapy) في الإمارات. علاج طبيعي تقليدي آمن وفعال مع خبرة 15 سنة لتحسين الدورة الدموية.',
  keywords: 'الحجامة, hijama, cupping therapy, الحجامة الطبية, cupping treatment, طب بديل, علاج طبيعي, مركز الوئام, دبي, الإمارات',
  openGraph: {
    title: 'الحجامة الطبية - Hijama Cupping Therapy | مركز الوئام',
    description: 'علاج تقليدي آمن وفعال ✓ تحسين الدورة الدموية ✓ تخفيف الألم ✓ خبرة 15 سنة',
    type: 'website',
    locale: 'ar_SA',
  },
};

const hijamaSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "الحجامة الطبية - Hijama Cupping Therapy",
  "description": "علاج تقليدي فعال لتحسين الدورة الدموية وتخفيف الألم",
  "provider": {
    "@type": "MedicalOrganization",
    "name": "مركز الوئام للصحة الشاملة",
    "address": "الإمارات العربية المتحدة"
  },
  "bodyLocation": "الظهر والكتفين والرقبة",
  "preparation": "الصيام لمدة 3 ساعات قبل الجلسة",
};

export default function HijamaCuppingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hijamaSchema) }}
      />
      
      <main className="min-h-screen bg-gradient-to-br from-green-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-90"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              الحجامة الطبية
              <span className="block text-2xl md:text-3xl font-light mt-2 opacity-90">
                Hijama Cupping Therapy
              </span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              استفد من العلاج التقليدي الآمن والفعال لتحسين الدورة الدموية وتخفيف الألم بأيدي خبراء مختصين
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors">
                احجز استشارتك المجانية
              </Link>
              <a href="https://wa.me/971555373443" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-colors">
                واتساب الآن
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فوائد الحجامة الطبية
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">تحسين الدورة الدموية</h3>
                    <p className="text-gray-600">علاج Cupping Therapy يساعد على تنشيط الدورة الدموية وتحسين تدفق الدم</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">تخفيف الألم المزمن</h3>
                    <p className="text-gray-600">فعالة في علاج آلام الظهر والكتف والرقبة والصداع المزمن</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">إزالة السموم</h3>
                    <p className="text-gray-600">تساعد في التخلص من السموم المتراكمة في الجسم</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">تقوية جهاز المناعة</h3>
                    <p className="text-gray-600">تحفز جهاز المناعة الطبيعي وتزيد مقاومة الجسم للأمراض</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <OptimizedImage
                src="/images/services/massage.jpg"
                alt="الحجامة الطبية - Hijama Cupping Therapy في مركز الوئام"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Types of Cupping */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              أنواع الحجامة المتوفرة
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="font-semibold text-2xl text-gray-900 mb-4">الحجامة الجافة</h3>
                <p className="text-gray-600 mb-4">
                  Dry Cupping - تستخدم الشفط فقط بدون جرح الجلد، مناسبة للمبتدئين ولتحسين الدورة الدموية
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    آمنة ولا تسبب جروح
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    مناسبة للجميع
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    شفاء سريع
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-2xl text-gray-900 mb-4">الحجامة الرطبة</h3>
                <p className="text-gray-600 mb-4">
                  Wet Cupping - تتضمن جروح سطحية صغيرة لاستخراج الدم، الأكثر فعالية للعلاج العميق
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    علاج عميق وفعال
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    إزالة السموم
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    نتائج سريعة
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Treated */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              الحالات التي تعالجها الحجامة
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">آلام الظهر والرقبة</h3>
                <p className="text-gray-600 text-sm">تخفيف الآلام المزمنة</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">الصداع والشقيقة</h3>
                <p className="text-gray-600 text-sm">علاج طبيعي للصداع</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">ضغط الدم المرتفع</h3>
                <p className="text-gray-600 text-sm">تنظيم ضغط الدم</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">التوتر والقلق</h3>
                <p className="text-gray-600 text-sm">الاسترخاء وتهدئة الأعصاب</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              الأسئلة الشائعة حول Hijama
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">هل الحجامة آمنة؟</h3>
                <p className="text-gray-600">نعم، الحجامة آمنة تماماً عند تطبيقها بالطريقة الصحيحة في مركزنا المعقم بأيدي خبراء مختصين.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">كم تستغرق جلسة Cupping Therapy؟</h3>
                <p className="text-gray-600">تتراوح مدة الجلسة من 30-45 دقيقة حسب نوع الحجامة والحالة المرضية.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">ما هي التحضيرات قبل الجلسة؟</h3>
                <p className="text-gray-600">يُنصح بالصيام لمدة 3 ساعات قبل الجلسة وتجنب الأكل الثقيل، وارتداء ملابس مريحة.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">كم مرة أحتاج للحجامة؟</h3>
                <p className="text-gray-600">يختلف حسب الحالة، عادة كل 2-4 أسابيع للعلاج، أو كل 2-3 أشهر للوقاية.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-4xl mx-auto text-center px-6 text-white">
            <h2 className="text-3xl font-bold mb-4">
              احجز جلستك الأولى بخصم 50%
            </h2>
            <p className="text-xl mb-8 opacity-90">
              استشارة مجانية + تقييم شامل + خطة علاج مخصصة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors">
                احجز الاستشارة المجانية
              </Link>
              <a href="https://wa.me/971555373443" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-colors">
                تواصل عبر الواتساب
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}