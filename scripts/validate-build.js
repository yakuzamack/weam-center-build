#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating build...');

const outDir = path.join(__dirname, '..', 'out');
const requiredFiles = [
  'index.html',
  'en/index.html',
  'ar/index.html',
  'en/services/index.html',
  'ar/services/index.html',
  'en/contact/index.html',
  'ar/contact/index.html',
];

const requiredAssets = [
  '_next/static',
  'images',
  'favicon.ico',
  'robots.txt',
  'sitemap.xml',
];

let hasErrors = false;

// Check if out directory exists
if (!fs.existsSync(outDir)) {
  console.error('❌ Build directory "out" does not exist');
  hasErrors = true;
  process.exit(1);
}

// Check required HTML files
console.log('📄 Checking HTML files...');
requiredFiles.forEach(file => {
  const filePath = path.join(outDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing required file: ${file}`);
    hasErrors = true;
  } else {
    console.log(`✅ Found: ${file}`);
  }
});

// Check required assets
console.log('📦 Checking assets...');
requiredAssets.forEach(asset => {
  const assetPath = path.join(outDir, asset);
  if (!fs.existsSync(assetPath)) {
    console.error(`❌ Missing required asset: ${asset}`);
    hasErrors = true;
  } else {
    console.log(`✅ Found: ${asset}`);
  }
});

// Check for service pages
console.log('🏥 Checking service pages...');
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
  const enPath = path.join(outDir, 'en', 'services', service, 'index.html');
  const arPath = path.join(outDir, 'ar', 'services', service, 'index.html');

  if (!fs.existsSync(enPath)) {
    console.error(`❌ Missing English service page: ${service}`);
    hasErrors = true;
  } else {
    console.log(`✅ Found English service: ${service}`);
  }

  if (!fs.existsSync(arPath)) {
    console.error(`❌ Missing Arabic service page: ${service}`);
    hasErrors = true;
  } else {
    console.log(`✅ Found Arabic service: ${service}`);
  }
});

// Check file sizes
console.log('📊 Checking file sizes...');
const checkFileSize = (filePath, maxSizeKB = 1000) => {
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const sizeKB = stats.size / 1024;
    if (sizeKB > maxSizeKB) {
      console.warn(`⚠️  Large file: ${filePath} (${sizeKB.toFixed(2)}KB)`);
    } else {
      console.log(`✅ Good size: ${filePath} (${sizeKB.toFixed(2)}KB)`);
    }
  }
};

// Check main HTML files
checkFileSize(path.join(outDir, 'index.html'), 100);
checkFileSize(path.join(outDir, 'en', 'index.html'), 100);
checkFileSize(path.join(outDir, 'ar', 'index.html'), 100);

// Check for common issues
console.log('🔧 Checking for common issues...');

// Check for console errors in HTML files
const checkForConsoleErrors = filePath => {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('console.error') || content.includes('Error:')) {
      console.warn(`⚠️  Potential console errors in: ${filePath}`);
    }
  }
};

checkForConsoleErrors(path.join(outDir, 'index.html'));

// Check for missing alt attributes in images
const checkForMissingAlt = filePath => {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const imgTags = content.match(/<img[^>]*>/g) || [];
    imgTags.forEach(imgTag => {
      if (!imgTag.includes('alt=')) {
        console.warn(`⚠️  Missing alt attribute in: ${filePath}`);
      }
    });
  }
};

checkForMissingAlt(path.join(outDir, 'index.html'));

if (hasErrors) {
  console.error('❌ Build validation failed');
  process.exit(1);
} else {
  console.log('✅ Build validation passed');
  console.log('🚀 Ready for production deployment!');
}
