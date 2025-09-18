/** @type {import('next').NextConfig} */
const config = {
  // Only use static export for production builds
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export', // ensure fully static output for GitHub Pages
    trailingSlash: true, // Add trailing slash for static export compatibility
    distDir: 'out', // Output directory for static export
    images: {
      unoptimized: true, // Required for static export
      domains: ['images.pexels.com'], // Allow Pexels images
    },
    // Skip trailing slash redirect for static export
    skipTrailingSlashRedirect: true,
  }),
  // Handle static assets properly
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Production optimizations
  compress: true,
  poweredByHeader: false,
  // Enable source maps for better debugging
  productionBrowserSourceMaps: process.env.NODE_ENV === 'development',
  // Disable static optimization that might cause conflicts
  experimental: {
    // outputFileTracingRoot: undefined, // Removed as it was causing JSON parsing errors
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Fix locale routing for static export
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Bundle analyzer
  ...(process.env.ANALYZE === 'true' && {
    webpack: config => {
      const BundleAnalyzerPlugin = require('@next/bundle-analyzer')({
        enabled: true,
      });
      config.plugins.push(BundleAnalyzerPlugin);
      return config;
    },
  }),
  // Headers for better caching and security (only for non-static export)
  ...(process.env.NODE_ENV !== 'production' && {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin',
            },
          ],
        },
        {
          source: '/images/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/_next/static/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/favicon.ico',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=86400',
            },
          ],
        },
        {
          source: '/manifest.json',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=86400',
            },
          ],
        },
      ];
    },
  }),
};

module.exports = config;
