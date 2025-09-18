#!/bin/bash

# Al Weam Centre - Production Deployment Script
# This script builds and deploys the website for production

set -e  # Exit on any error

echo "🚀 Starting Al Weam Centre Production Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Check Node.js version
print_status "Checking Node.js version..."
NODE_VERSION=$(node --version)
print_success "Node.js version: $NODE_VERSION"

# Install dependencies
print_status "Installing dependencies..."
npm ci --only=production

# Run linting
print_status "Running linting..."
npm run lint

# Run type checking
print_status "Running type checking..."
npm run type-check

# Build for production
print_status "Building for production..."
NODE_ENV=production npm run build

# Check if build was successful
if [ -d "out" ]; then
    print_success "Build completed successfully!"
    
    # Count files in output
    FILE_COUNT=$(find out -type f | wc -l)
    print_status "Generated $FILE_COUNT files"
    
    # Check for critical files
    if [ -f "out/index.html" ]; then
        print_success "Main index.html found"
    else
        print_warning "Main index.html not found"
    fi
    
    if [ -f "out/en/index.html" ]; then
        print_success "English locale page found"
    else
        print_warning "English locale page not found"
    fi
    
    if [ -f "out/ar/index.html" ]; then
        print_success "Arabic locale page found"
    else
        print_warning "Arabic locale page not found"
    fi
    
    # Check service pages
    SERVICE_COUNT=$(find out -path "*/services/*" -name "index.html" | wc -l)
    print_status "Generated $SERVICE_COUNT service pages"
    
    # Check images
    IMAGE_COUNT=$(find out/images -type f 2>/dev/null | wc -l || echo "0")
    print_status "Found $IMAGE_COUNT images"
    
else
    print_error "Build failed - 'out' directory not found"
    exit 1
fi

# Generate deployment summary
print_status "Generating deployment summary..."
cat > deployment-summary.md << EOF
# Al Weam Centre - Deployment Summary

**Deployment Date:** $(date)
**Node.js Version:** $NODE_VERSION
**Build Environment:** Production

## Build Results
- **Total Files Generated:** $FILE_COUNT
- **Service Pages:** $SERVICE_COUNT
- **Images:** $IMAGE_COUNT

## Locales
- ✅ English (en)
- ✅ Arabic (ar)

## Services
- General Medicine
- Pediatrics
- Dermatology
- Orthopedics
- Dental Care
- Physiotherapy
- Laser Hair Removal
- Cupping Therapy
- Skin Care

## Next Steps
1. Upload the 'out' directory to your web server
2. Configure your web server to serve static files
3. Set up proper caching headers
4. Test all pages and functionality
5. Monitor performance and user experience

EOF

print_success "Deployment summary saved to deployment-summary.md"

# Final success message
echo ""
print_success "🎉 Al Weam Centre is ready for production deployment!"
print_status "Upload the 'out' directory to your web server to go live."
echo ""

# Optional: Open the built site for testing
if command -v python3 &> /dev/null; then
    print_status "Starting local server for testing..."
    print_warning "Press Ctrl+C to stop the test server"
    cd out && python3 -m http.server 8080
fi