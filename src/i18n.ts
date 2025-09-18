import { notFound } from "next/navigation";

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function validateLocale(locale: string): Locale {
  if ((locales as readonly string[]).includes(locale)) return locale as Locale;
  return notFound();
}
