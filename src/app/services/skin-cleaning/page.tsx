import { LogoImage } from '@/components/OptimizedImage';
import Link from 'next/link';

export const metadata = {
  title: 'تنظيف البشرة العميق - Skin Cleaning | مركز الوئام الطبي',
  description: 'احصل على أفضل خدمة تنظيف البشرة العميق (Deep Skin Cleaning) في الإمارات. علاج متخصص لتنظيف المسام وتجديد البشرة بأحدث التقنيات الطبية.',
  keywords: 'تنظيف البشرة, skin cleaning, deep cleaning, تنظيف المسام, facial treatment, علاج البشرة, مركز الوئام, دبي, الإمارات',
  openGraph: {
    title: 'تنظيف البشرة العميق - Deep Skin Cleaning | مركز الوئام',
    description: 'تنظيف عميق للبشرة والمسام ✓ إزالة الرؤوس السوداء ✓ تجديد خلايا البشرة ✓ خبرة 15 سنة',
    type: 'website',
    locale: 'ar_SA',
  },
};

const skinCleaningSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "تنظيف البشرة العميق - Deep Skin Cleaning",
  "description": "جلسات تنظيف عميق للبشرة لإزالة الشوائب وتجديد خلايا الجلد",
  "provider": {
    "@type": "MedicalOrganization",
    "name": "مركز الوئام للصحة الشاملة",
    "address": "الإمارات العربية المتحدة"
  },
  "bodyLocation": "الوجه والرقبة",
  "preparation": "تنظيف الوجه بالماء والصابون اللطيف",
};

export default function SkinCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skinCleaningSchema) }}
      />
      
      <main className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-600 opacity-90"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              تنظيف البشرة العميق
              <span className="block text-2xl md:text-3xl font-light mt-2 opacity-90">
                Deep Skin Cleaning
              </span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              احصلي على بشرة نظيفة ونضرة ومشرقة مع أفضل تقنيات التنظيف العميق للبشرة
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-pink-50 transition-colors">
                احجزي استشارتك المجانية
              </Link>
              <a href="https://wa.me/971555373443" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-pink-600 transition-colors">
                واتساب الآن
              </a>
            </div>
          </div>
        </section>

        {/* Service Benefits */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                فوائد تنظيف البشرة العميق
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">إزالة الرؤوس السوداء</h3>
                    <p className="text-gray-600">تقنيات Facial Treatment متطورة لإزالة الرؤوس السوداء والبيضاء بلطف</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">تنظيف المسام العميق</h3>
                    <p className="text-gray-600">Deep Cleaning للمسام لإزالة الشوائب والزيوت المتراكمة</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">تجديد خلايا البشرة</h3>
                    <p className="text-gray-600">تحفيز تجديد الخلايا للحصول على بشرة مشرقة وشابة</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="text-pink-600 font-semibold">تنظيف البشرة العميق</p>
                  <p className="text-pink-500 text-sm">Deep Skin Cleaning</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Steps */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              خطوات جلسة تنظيف البشرة
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600 font-bold text-xl">
                  1
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">التنظيف الأولي</h3>
                <p className="text-gray-600 text-sm">إزالة المكياج والشوائب السطحية</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600 font-bold text-xl">
                  2
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">التقشير اللطيف</h3>
                <p className="text-gray-600 text-sm">إزالة خلايا الجلد الميتة</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600 font-bold text-xl">
                  3
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">تنظيف المسام</h3>
                <p className="text-gray-600 text-sm">استخراج الرؤوس السوداء بأمان</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600 font-bold text-xl">
                  4
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">الترطيب والتهدئة</h3>
                <p className="text-gray-600 text-sm">قناع مرطب ومهدئ للبشرة</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skin Types */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              مناسب لجميع أنواع البشرة
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">البشرة الدهنية</h3>
                <p className="text-gray-600">تحكم في إفراز الزيوت الزائدة وتنظيف عميق للمسام المسدودة</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 12v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">البشرة الجافة</h3>
                <p className="text-gray-600">ترطيب عميق وتغذية البشرة لاستعادة نعومتها الطبيعية</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3">البشرة الحساسة</h3>
                <p className="text-gray-600">منتجات لطيفة وآمنة مناسبة للبشرة الحساسة والمتهيجة</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              الأسئلة الشائعة حول Skin Cleaning
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">كم مرة أحتاج لجلسة تنظيف البشرة؟</h3>
                <p className="text-gray-600">يُنصح بجلسة تنظيف عميق للبشرة كل 4-6 أسابيع للحفاظ على نظافة البشرة ونضارتها.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">هل يناسب تنظيف البشرة جميع الأعمار؟</h3>
                <p className="text-gray-600">نعم، علاج Facial Treatment مناسب لجميع الأعمار من المراهقة وحتى كبار السن.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">هل هناك آثار جانبية للعلاج؟</h3>
                <p className="text-gray-600">العلاج آمن تماماً، قد يحدث احمرار طفيف يختفي خلال ساعات قليلة.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-600">
          <div className="max-w-4xl mx-auto text-center px-6 text-white">
            <h2 className="text-3xl font-bold mb-4">
              احجزي جلستك الأولى بخصم 50%
            </h2>
            <p className="text-xl mb-8 opacity-90">
              استشارة مجانية + تحليل نوع البشرة + خطة علاج مخصصة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-pink-50 transition-colors">
                احجزي الاستشارة المجانية
              </Link>
              <a href="https://wa.me/971555373443" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-pink-600 transition-colors">
                تواصلي عبر الواتساب
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}