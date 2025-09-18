/** @type {import('next').NextConfig} */
const config = {
  output: 'export', // ensure fully static output for GitHub Pages
  trailingSlash: false, // Keep URLs clean without trailing slash
  distDir: 'out', // Output directory for static export
};

module.exports = config;
