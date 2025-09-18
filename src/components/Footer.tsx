import { getTranslations } from 'next-intl/server';

export async function Footer() {
  const tNav = await getTranslations('navigation');
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-gray-100 dark:border-gray-800 py-10 text-sm bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-6 md:items-center justify-between">
        <div className="font-semibold text-brand-600">{tNav('brandName')}</div>
        <p className="text-gray-500 dark:text-gray-400">
          © {year} {tNav('brandName')} · All rights reserved
        </p>
      </div>
    </footer>
  );
}
