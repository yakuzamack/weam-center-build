import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import type { ReactNode } from 'react';
import '../globals.css';

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  // Set the active locale for static generation context
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {/* Page Shell */}
          <Header locale={locale} />
          <div className="min-h-[calc(100dvh-160px)]">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// Ensure static generation for each supported locale
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}
