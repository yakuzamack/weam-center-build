#!/bin/bash

# Script to replace absolute paths with relative ones for GitHub Pages

# Replace href="/_next with href="./next
find . -type f -name "*.html" -exec sed -i '' 's|href="/_next|href="./next|g' {} \;
find . -type f -name "*.html" -exec sed -i '' 's|src="/_next|src="./next|g' {} \;

# Rename the _next directory to next
if [ -d "_next" ]; then
  mv _next next
fi

# Update canonical URLs to GitHub Pages URL
find . -type f -name "*.html" -exec sed -i '' 's|https://www.weamcenter.com|https://yakuzamack.github.io/weamcenter-website|g' {} \;

echo "Conversion complete!"
