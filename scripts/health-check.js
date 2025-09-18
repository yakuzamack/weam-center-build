#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

console.log('🏥 Running health checks...');

const outDir = path.join(__dirname, '..', 'out');
const checks = [];

// Check if build directory exists
if (!fs.existsSync(outDir)) {
  console.error('❌ Build directory not found');
  process.exit(1);
}

// Check critical files
const criticalFiles = [
  'index.html',
  'en/index.html',
  'ar/index.html',
  'robots.txt',
  'sitemap.xml',
  'favicon.ico',
];

criticalFiles.forEach(file => {
  const filePath = path.join(outDir, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    checks.push({
      name: `File: ${file}`,
      status: 'pass',
      message: `Found (${(stats.size / 1024).toFixed(2)}KB)`,
    });
  } else {
    checks.push({
      name: `File: ${file}`,
      status: 'fail',
      message: 'Missing',
    });
  }
});

// Check for broken links in HTML files
function checkHTMLForBrokenLinks(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const links = content.match(/href="([^"]+)"/g) || [];

  links.forEach(link => {
    const url = link.match(/href="([^"]+)"/)[1];
    if (url.startsWith('/') && !url.startsWith('//')) {
      const targetPath = path.join(outDir, url, 'index.html');
      if (!fs.existsSync(targetPath)) {
        checks.push({
          name: `Broken link in ${path.relative(outDir, filePath)}`,
          status: 'fail',
          message: `Link to ${url} not found`,
        });
      }
    }
  });
}

// Check HTML files for broken links
const htmlFiles = ['index.html', 'en/index.html', 'ar/index.html'];

htmlFiles.forEach(htmlFile => {
  checkHTMLForBrokenLinks(path.join(outDir, htmlFile));
});

// Check for console errors in HTML
function checkForConsoleErrors(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('console.error') || content.includes('Error:')) {
    checks.push({
      name: `Console errors in ${path.relative(outDir, filePath)}`,
      status: 'warn',
      message: 'Potential console errors detected',
    });
  }
}

htmlFiles.forEach(htmlFile => {
  checkForConsoleErrors(path.join(outDir, htmlFile));
});

// Check image optimization
function checkImageOptimization() {
  const imagesDir = path.join(outDir, 'images');
  if (!fs.existsSync(imagesDir)) {
    return;
  }

  const imageFiles = fs
    .readdirSync(imagesDir, { recursive: true })
    .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));

  imageFiles.forEach(file => {
    const filePath = path.join(imagesDir, file);
    const stats = fs.statSync(filePath);
    const sizeKB = stats.size / 1024;

    if (sizeKB > 500) {
      checks.push({
        name: `Large image: ${file}`,
        status: 'warn',
        message: `Image is ${sizeKB.toFixed(2)}KB (consider optimization)`,
      });
    }
  });
}

checkImageOptimization();

// Check for security headers (if running locally)
function checkSecurityHeaders() {
  const htmlFiles = ['index.html', 'en/index.html', 'ar/index.html'];

  htmlFiles.forEach(htmlFile => {
    const filePath = path.join(outDir, htmlFile);
    if (!fs.existsSync(filePath)) {
      return;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Check for CSP meta tag
    if (!content.includes('http-equiv="Content-Security-Policy"')) {
      checks.push({
        name: `Security: ${path.relative(outDir, filePath)}`,
        status: 'warn',
        message: 'Missing Content Security Policy',
      });
    }
  });
}

checkSecurityHeaders();

// Check accessibility basics
function checkAccessibilityBasics() {
  const htmlFiles = ['index.html', 'en/index.html', 'ar/index.html'];

  htmlFiles.forEach(htmlFile => {
    const filePath = path.join(outDir, htmlFile);
    if (!fs.existsSync(filePath)) {
      return;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Check for lang attribute
    if (!content.includes('lang=')) {
      checks.push({
        name: `Accessibility: ${path.relative(outDir, filePath)}`,
        status: 'fail',
        message: 'Missing language attribute',
      });
    }

    // Check for alt attributes
    const imgTags = content.match(/<img[^>]*>/g) || [];
    imgTags.forEach((imgTag, index) => {
      if (!imgTag.includes('alt=')) {
        checks.push({
          name: `Accessibility: ${path.relative(outDir, filePath)}`,
          status: 'fail',
          message: `Image ${index + 1} missing alt attribute`,
        });
      }
    });
  });
}

checkAccessibilityBasics();

// Report results
const passed = checks.filter(check => check.status === 'pass').length;
const failed = checks.filter(check => check.status === 'fail').length;
const warnings = checks.filter(check => check.status === 'warn').length;

console.log(`\n📊 Health Check Results:`);
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`⚠️  Warnings: ${warnings}`);

if (failed > 0) {
  console.log('\n❌ Failed Checks:');
  checks
    .filter(check => check.status === 'fail')
    .forEach(check => {
      console.log(`  • ${check.name}: ${check.message}`);
    });
}

if (warnings > 0) {
  console.log('\n⚠️  Warnings:');
  checks
    .filter(check => check.status === 'warn')
    .forEach(check => {
      console.log(`  • ${check.name}: ${check.message}`);
    });
}

if (failed === 0) {
  console.log('\n🎉 All critical health checks passed!');
} else {
  console.log('\n💡 Fix the failed checks before deployment');
  process.exit(1);
}
