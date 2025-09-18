#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('📊 Checking performance budget...');

const outDir = path.join(__dirname, '..', 'out');
const budget = {
  maxFileSize: 500 * 1024, // 500KB
  maxTotalSize: 5 * 1024 * 1024, // 5MB
  maxImageSize: 200 * 1024, // 200KB
  maxJSChunkSize: 250 * 1024, // 250KB
  maxCSSChunkSize: 50 * 1024, // 50KB
};

let totalSize = 0;
const violations = [];

function checkFileSize(filePath, maxSize, category) {
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const size = stats.size;
    totalSize += size;

    if (size > maxSize) {
      violations.push({
        file: path.relative(outDir, filePath),
        size: size,
        maxSize: maxSize,
        category: category,
        sizeKB: (size / 1024).toFixed(2),
        maxSizeKB: (maxSize / 1024).toFixed(2),
      });
    }
  }
}

// Check JavaScript chunks
const jsDir = path.join(outDir, '_next', 'static', 'chunks');
if (fs.existsSync(jsDir)) {
  const jsFiles = fs.readdirSync(jsDir).filter(file => file.endsWith('.js'));
  jsFiles.forEach(file => {
    checkFileSize(path.join(jsDir, file), budget.maxJSChunkSize, 'JavaScript');
  });
}

// Check CSS files
const cssDir = path.join(outDir, '_next', 'static', 'css');
if (fs.existsSync(cssDir)) {
  const cssFiles = fs.readdirSync(cssDir).filter(file => file.endsWith('.css'));
  cssFiles.forEach(file => {
    checkFileSize(path.join(cssDir, file), budget.maxCSSChunkSize, 'CSS');
  });
}

// Check images
const imagesDir = path.join(outDir, 'images');
if (fs.existsSync(imagesDir)) {
  const imageFiles = fs
    .readdirSync(imagesDir, { recursive: true })
    .filter(file => /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(file));

  imageFiles.forEach(file => {
    const filePath = path.join(imagesDir, file);
    checkFileSize(filePath, budget.maxImageSize, 'Image');
  });
}

// Check HTML files
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
  checkFileSize(path.join(outDir, htmlFile), budget.maxFileSize, 'HTML');
});

// Check total size
if (totalSize > budget.maxTotalSize) {
  violations.push({
    file: 'Total site size',
    size: totalSize,
    maxSize: budget.maxTotalSize,
    category: 'Total',
    sizeKB: (totalSize / 1024).toFixed(2),
    maxSizeKB: (budget.maxTotalSize / 1024).toFixed(2),
  });
}

// Report results
console.log(`📈 Total site size: ${(totalSize / 1024).toFixed(2)}KB`);

if (violations.length === 0) {
  console.log('✅ All files are within performance budget');
} else {
  console.log(`❌ ${violations.length} performance budget violations found:`);
  violations.forEach(violation => {
    console.log(
      `  • ${violation.file} (${violation.category}): ${violation.sizeKB}KB > ${violation.maxSizeKB}KB`
    );
  });

  console.log('\n💡 Recommendations:');
  violations.forEach(violation => {
    if (violation.category === 'Image') {
      console.log(`  • Optimize image: ${violation.file}`);
    } else if (violation.category === 'JavaScript') {
      console.log(`  • Code split or lazy load: ${violation.file}`);
    } else if (violation.category === 'CSS') {
      console.log(`  • Remove unused CSS: ${violation.file}`);
    }
  });

  process.exit(1);
}
