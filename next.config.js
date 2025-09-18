/** @type {import('next').NextConfig} */
const config = {
  output: 'export', // ensure fully static output for GitHub Pages
  trailingSlash: false, // Keep URLs clean without trailing slash
  distDir: 'out', // Output directory for static export
  images: {
    unoptimized: true, // Required for static export
  },
  // Skip trailing slash redirect for static export
  skipTrailingSlashRedirect: true,
  // Handle static assets properly
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Configure exports to ignore static assets
  exportPathMap: async function (defaultPathMap) {
    // Filter out any paths that might conflict with static assets
    const filteredMap = {};
    for (const [path, page] of Object.entries(defaultPathMap)) {
      // Skip paths that look like static assets
      if (!path.match(/\.(ico|png|jpg|jpeg|gif|svg|css|js)$/)) {
        filteredMap[path] = page;
      }
    }
    return filteredMap;
  },
};

module.exports = config;
