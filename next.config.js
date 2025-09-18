/** @type {import('next').NextConfig} */
// Integrate next-intl plugin pointing to request config (i18n.ts)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

module.exports = withNextIntl({
  // Additional Next.js config can go here
});
