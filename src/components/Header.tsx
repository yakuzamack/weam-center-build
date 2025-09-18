import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function Header({ locale }: { locale: string }) {
  const tNav = await getTranslations('navigation');
  return (
    <header className="border-b border-gray-100 dark:border-gray-800 bg-white/70 dark:bg-gray-950/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-6">
        <Link href={`/${locale}`} className="font-bold text-lg text-brand-600">
          {tNav('brandName')}
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href={`/${locale}`} className="hover:text-brand-600 transition-colors">
            {tNav('home')}
          </Link>
          <Link href={`/${locale}/services`} className="hover:text-brand-600 transition-colors">
            {tNav('services')}
          </Link>
          <Link href={`/${locale}/contact`} className="hover:text-brand-600 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href={`/${locale}/services`} className="btn-outline text-xs md:text-sm">
            {tNav('services')}
          </Link>
          <Link href={`/${locale}/contact`} className="btn-primary text-xs md:text-sm">
            {tNav('appointment')}
          </Link>
        </div>
      </div>
    </header>
  );
}
