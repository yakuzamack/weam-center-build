#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking SEO compliance...');

const outDir = path.join(__dirname, '..', 'out');
const issues = [];

function checkHTMLFile(filePath) {
  if (!fs.existsSync(filePath)) {
    issues.push(`Missing file: ${path.relative(outDir, filePath)}`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(outDir, filePath);

  // Check for required meta tags
  const requiredMetaTags = ['title', 'description', 'viewport', 'charset'];

  requiredMetaTags.forEach(tag => {
    if (tag === 'charset') {
      if (
        !content.includes('<meta charset=') &&
        !content.includes('<meta charset =')
      ) {
        issues.push(`${relativePath}: Missing charset meta tag`);
      }
    } else if (tag === 'viewport') {
      if (!content.includes('name="viewport"')) {
        issues.push(`${relativePath}: Missing viewport meta tag`);
      }
    } else if (tag === 'title') {
      if (!content.includes('<title>') || content.includes('<title></title>')) {
        issues.push(`${relativePath}: Missing or empty title tag`);
      }
    } else if (tag === 'description') {
      if (!content.includes('name="description"')) {
        issues.push(`${relativePath}: Missing description meta tag`);
      }
    }
  });

  // Check for Open Graph tags
  const ogTags = ['og:title', 'og:description', 'og:image', 'og:url'];
  ogTags.forEach(tag => {
    if (!content.includes(`property="${tag}"`)) {
      issues.push(`${relativePath}: Missing Open Graph tag: ${tag}`);
    }
  });

  // Check for Twitter Card tags
  if (!content.includes('name="twitter:card"')) {
    issues.push(`${relativePath}: Missing Twitter Card meta tag`);
  }

  // Check for structured data
  if (!content.includes('application/ld+json')) {
    issues.push(`${relativePath}: Missing structured data (JSON-LD)`);
  }

  // Check for alt attributes on images
  const imgTags = content.match(/<img[^>]*>/g) || [];
  imgTags.forEach((imgTag, index) => {
    if (!imgTag.includes('alt=')) {
      issues.push(`${relativePath}: Image ${index + 1} missing alt attribute`);
    }
  });

  // Check for heading hierarchy
  const headings = content.match(/<h[1-6][^>]*>/g) || [];
  if (headings.length === 0) {
    issues.push(`${relativePath}: No heading tags found`);
  }

  // Check for h1 tag
  if (!content.includes('<h1')) {
    issues.push(`${relativePath}: Missing h1 tag`);
  }

  // Check for multiple h1 tags
  const h1Count = (content.match(/<h1[^>]*>/g) || []).length;
  if (h1Count > 1) {
    issues.push(`${relativePath}: Multiple h1 tags found (${h1Count})`);
  }

  // Check for canonical URL
  if (!content.includes('rel="canonical"')) {
    issues.push(`${relativePath}: Missing canonical URL`);
  }

  // Check for language attribute
  if (!content.includes('lang=')) {
    issues.push(`${relativePath}: Missing language attribute`);
  }

  // Check for robots meta tag
  if (!content.includes('name="robots"')) {
    issues.push(`${relativePath}: Missing robots meta tag`);
  }
}

// Check main HTML files
const htmlFiles = [
  'index.html',
  'en/index.html',
  'ar/index.html',
  'en/services/index.html',
  'ar/services/index.html',
  'en/contact/index.html',
  'ar/contact/index.html',
];

htmlFiles.forEach(htmlFile => {
  checkHTMLFile(path.join(outDir, htmlFile));
});

// Check service detail pages
const services = [
  'general-medicine',
  'pediatrics',
  'dermatology',
  'orthopedics',
  'dental-care',
  'physiotherapy',
  'laser-hair-removal',
  'cupping-therapy',
  'skin-care',
];

services.forEach(service => {
  checkHTMLFile(path.join(outDir, 'en', 'services', service, 'index.html'));
  checkHTMLFile(path.join(outDir, 'ar', 'services', service, 'index.html'));
});

// Check for sitemap
if (!fs.existsSync(path.join(outDir, 'sitemap.xml'))) {
  issues.push('Missing sitemap.xml');
}

// Check for robots.txt
if (!fs.existsSync(path.join(outDir, 'robots.txt'))) {
  issues.push('Missing robots.txt');
}

// Report results
if (issues.length === 0) {
  console.log('✅ All SEO checks passed');
} else {
  console.log(`❌ ${issues.length} SEO issues found:`);
  issues.forEach(issue => {
    console.log(`  • ${issue}`);
  });

  console.log('\n💡 SEO Recommendations:');
  console.log('  • Ensure all pages have unique, descriptive titles');
  console.log('  • Add meta descriptions for all pages');
  console.log('  • Include Open Graph and Twitter Card meta tags');
  console.log('  • Add structured data (JSON-LD) for better search visibility');
  console.log('  • Use proper heading hierarchy (h1, h2, h3, etc.)');
  console.log('  • Add alt attributes to all images');
  console.log('  • Include canonical URLs to prevent duplicate content');
  console.log('  • Set appropriate language attributes');

  process.exit(1);
}
