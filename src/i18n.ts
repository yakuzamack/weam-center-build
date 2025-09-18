import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function validateLocale(locale: string): Locale {
  if ((locales as readonly string[]).includes(locale)) return locale as Locale;
  return notFound();
}

// Provide per-request i18n configuration for next-intl plugin
// Loads the messages JSON for the active locale (used at build & runtime)
export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../messages/${locale}.json`)).default,
}));
