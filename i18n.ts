// next-intl request config used by the plugin to load messages per locale
// See: https://next-intl-docs.vercel.app/docs/configuration/request
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
}));
