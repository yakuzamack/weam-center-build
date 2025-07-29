#!/bin/bash

# Define the base path for GitHub Pages
BASE_PATH="/weam-center-build"

# First clean up any previous attempts
find . -name "*.html" -type f -exec sed -i '' "s|/weam-center-build/weam-center-build|/weam-center-build|g" {} \;

# Fix paths in HTML files
find . -name "*.html" -type f -exec sed -i '' "s|href=\"/_next|href=\"$BASE_PATH/_next|g" {} \;
find . -name "*.html" -type f -exec sed -i '' "s|src=\"/_next|src=\"$BASE_PATH/_next|g" {} \;
find . -name "*.html" -type f -exec sed -i '' "s|fetchPriority=\"low\" href=\"/_next|fetchPriority=\"low\" href=\"$BASE_PATH/_next|g" {} \;
find . -name "*.html" -type f -exec sed -i '' "s|\"/_next|\""$BASE_PATH"/_next|g" {} \;

# Fix paths in CSS files
find . -name "*.css" -type f -exec sed -i '' "s|url(/_next|url($BASE_PATH/_next|g" {} \;

# Fix paths in JS files
find . -name "*.js" -type f -exec sed -i '' "s|\"/_next/|\""$BASE_PATH"/_next/|g" {} \;

# Fix canonical URLs and other absolute paths (but not external URLs)
find . -name "*.html" -type f -exec sed -i '' "s|href=\"/|href=\"$BASE_PATH/|g" {} \;
find . -name "*.html" -type f -exec sed -i '' "s|\"url\":\"/|\"url\":\"$BASE_PATH/|g" {} \;

# Fix meta redirects
find . -name "*.html" -type f -exec sed -i '' "s|content=\"[0-9];url=/|content=\"1;url=$BASE_PATH/|g" {} \;

# Fix DNS prefetch URLs (revert changes to external URLs)
find . -name "*.html" -type f -exec sed -i '' "s|href=\"$BASE_PATH//fonts|href=\"//fonts|g" {} \;
find . -name "*.html" -type f -exec sed -i '' "s|href=\"$BASE_PATH//api|href=\"//api|g" {} \;

echo "Path fixes completed for GitHub Pages deployment!"
