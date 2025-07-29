#!/bin/bash

# First, clean up all files to remove any previous basepath changes
echo "Resetting all HTML files to original paths..."
find . -type f -name "*.html" | xargs sed -i '' -E 's|(/weam-center-build)+|/weam-center-build|g'
find . -type f -name "*.html" | xargs sed -i '' -E 's|(weam-center-build/)+|weam-center-build/|g'

echo "Fixing _next asset references..."
find . -type f -name "*.html" | xargs sed -i '' 's|href="/_next|href="/weam-center-build/_next|g'
find . -type f -name "*.html" | xargs sed -i '' 's|src="/_next|src="/weam-center-build/_next|g'
find . -type f -name "*.html" | xargs sed -i '' 's|"/_next|"/weam-center-build/_next|g'

echo "Fixing absolute path references..."
find . -type f -name "*.html" | xargs sed -i '' 's|href="/images|href="/weam-center-build/images|g'
find . -type f -name "*.html" | xargs sed -i '' 's|href="/manifest|href="/weam-center-build/manifest|g'
find . -type f -name "*.html" | xargs sed -i '' 's|href="/favicon|href="/weam-center-build/favicon|g'
find . -type f -name "*.html" | xargs sed -i '' 's|content="1;url=/|content="1;url=/weam-center-build/|g'

echo "Fixing meta redirect..."
find . -type f -name "*.html" | xargs sed -i '' 's|content="1;url=/en"|content="1;url=/weam-center-build/en"|g'

echo "Restoring external URLs..."
find . -type f -name "*.html" | xargs sed -i '' 's|href="/weam-center-build//fonts|href="//fonts|g'
find . -type f -name "*.html" | xargs sed -i '' 's|href="/weam-center-build//api|href="//api|g'

echo "Path fixes completed!"
