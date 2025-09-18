import ar from '../../messages/ar.json';
import en from '../../messages/en.json';
import { locales } from '../locales';

export type Namespace = 'navigation' | 'homepage' | 'services' | 'notFound' | 'contact';
export type Messages = typeof en;

const allMessages: Record<string, Messages> = { en, ar };

export function getMessages(locale: string): Messages {
  return allMessages[(locales as readonly string[]).includes(locale) ? locale : 'en'];
}

export function t(locale: string, ns: Namespace, key: string): string {
  const messages = getMessages(locale);
  const parts = key.split('.');
  let cur: unknown = (messages as unknown as Record<string, unknown>)[ns];
  for (const p of parts) {
    if (typeof cur !== 'object' || cur == null) return key;
    cur = (cur as Record<string, unknown>)[p];
  }
  return typeof cur === 'string' ? cur : key;
}

export function tn(locale: string, ns: Namespace) {
  return (key: string) => t(locale, ns, key);
}
