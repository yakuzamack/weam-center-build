// next-intl root configuration (CommonJS)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('next-intl');

module.exports = defineConfig({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});
