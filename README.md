# Al Weam Centre - Medical & Beauty Services Website

A modern, responsive website for Al Weam Centre, featuring premium medical and beauty services with bilingual support (English/Arabic).

## 🏥 Services Offered

- **General Medicine** - Comprehensive medical consultations
- **Pediatrics** - Specialized care for children
- **Dermatology** - Skin conditions and treatments
- **Orthopedics** - Bone and joint treatments
- **Dental Care** - Complete dental services
- **Physiotherapy** - Physical therapy and rehabilitation
- **Laser Hair Removal** - Advanced laser treatments
- **Cupping Therapy** - Traditional Hijama therapy
- **Skin Care** - Facial and skin care treatments

## ✨ Features

- 🌍 **Bilingual Support** - English and Arabic languages
- 📱 **Responsive Design** - Mobile-first approach
- 🎨 **Modern UI/UX** - Clean, professional design
- ⚡ **Performance Optimized** - Fast loading times
- 🔍 **SEO Ready** - Optimized for search engines
- 🖼️ **Dynamic Images** - Service-specific Pexels integration
- 📊 **Analytics Ready** - Built-in performance monitoring

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd alweam-centre-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
npm run type-check      # TypeScript type checking
npm run format          # Format code with Prettier

# Testing
npm run test            # Run tests
npm run test:coverage   # Run tests with coverage
npm run test:e2e        # Run end-to-end tests

# Production
npm run build:production # Build for production
npm run deploy          # Deploy to production
```

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   │   ├── page.tsx       # Homepage
│   │   ├── services/      # Services pages
│   │   └── contact/       # Contact page
│   ├── globals.css        # Global styles
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap generation
├── components/             # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── ImprovedServiceCard.tsx    # Service display card
│   └── OptimizedHero.tsx  # Hero section with optimized images
├── data/                  # Static data
│   └── services.ts        # Service definitions
├── hooks/                 # Custom React hooks (removed unused hooks)
├── lib/                   # Utility libraries
│   ├── i18n.ts           # Internationalization
│   └── pexels.ts         # Pexels API integration
└── styles/               # Additional styles
```

## 🌐 Internationalization

The website supports two languages:

- **English (en)** - Default language
- **Arabic (ar)** - RTL support included

### Adding New Languages

1. Add locale to `src/lib/i18n.ts`
2. Create translation files
3. Update `generateStaticParams()` functions
4. Add locale to sitemap

## 🖼️ Image Management

### Pexels Integration

The website uses Pexels API for high-quality, service-specific images:

- **Automatic Mapping** - Images are automatically matched to services
- **Fallback System** - Graceful degradation if images fail to load
- **Optimization** - Images are optimized for web delivery
- **Caching** - Proper caching headers for performance

### Adding New Images

1. Update `MEDICAL_THEMED_IMAGES` in `src/lib/pexels.ts`
2. Add service mapping in `generateImageSetForService()`
3. Test image loading and fallbacks

## 🚀 Production Deployment

### Automated Deployment

```bash
# Run the deployment script
./deploy.sh
```

This script will:

- ✅ Check Node.js version
- ✅ Install dependencies
- ✅ Run linting and type checking
- ✅ Build for production
- ✅ Validate build output
- ✅ Generate deployment summary

### Manual Deployment

```bash
# Build for production
NODE_ENV=production npm run build

# Upload 'out' directory to your web server
# Configure web server for static file serving
```

### Web Server Configuration

#### Nginx Example

```nginx
server {
    listen 80;
    server_name alweamcentre.com www.alweamcentre.com;
    root /path/to/out;
    index index.html;

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Handle SPA routing
    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }
}
```

#### Apache Example

```apache
<VirtualHost *:80>
    ServerName alweamcentre.com
    DocumentRoot /path/to/out

    # Enable compression
    LoadModule deflate_module modules/mod_deflate.so
    <Location />
        SetOutputFilter DEFLATE
        SetEnvIfNoCase Request_URI \
            \.(?:gif|jpe?g|png)$ no-gzip dont-vary
        SetEnvIfNoCase Request_URI \
            \.(?:exe|t?gz|zip|bz2|sit|rar)$ no-gzip dont-vary
    </Location>

    # Cache static assets
    <LocationMatch "\.(css|js|png|jpg|jpeg|gif|ico|svg)$">
        ExpiresActive On
        ExpiresDefault "access plus 1 year"
        Header append Cache-Control "public"
    </LocationMatch>
</VirtualHost>
```

## 📊 Performance Optimization

### Built-in Optimizations

- **Image Optimization** - Automatic image compression and resizing
- **Code Splitting** - Automatic bundle splitting
- **Tree Shaking** - Unused code elimination
- **Minification** - CSS and JavaScript minification
- **Caching** - Proper cache headers
- **Compression** - Gzip/Brotli compression

### Performance Monitoring

```bash
# Run Lighthouse audit
npm run performance:lighthouse

# Check bundle size
npm run size:analyze

# Performance budget check
npm run performance:budget
```

## 🔍 SEO Features

### Built-in SEO

- **Meta Tags** - Dynamic meta tags for each page
- **Open Graph** - Social media sharing optimization
- **Twitter Cards** - Twitter sharing optimization
- **Structured Data** - JSON-LD schema markup
- **Sitemap** - Automatic sitemap generation
- **Robots.txt** - Search engine directives

### SEO Checklist

- ✅ Title tags optimized
- ✅ Meta descriptions added
- ✅ Alt text for images
- ✅ Semantic HTML structure
- ✅ Mobile-friendly design
- ✅ Fast loading times
- ✅ HTTPS enabled
- ✅ Structured data markup

## 🧪 Testing

### Running Tests

```bash
# Unit tests
npm run test

# End-to-end tests
npm run test:e2e

# Accessibility tests
npm run accessibility:audit

# SEO tests
npm run seo:check
```

### Test Coverage

The project maintains 80%+ test coverage for:

- Components
- Utilities
- Hooks
- API integrations

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Pexels API (optional - fallback images available)
NEXT_PUBLIC_PEXELS_API_KEY=your_pexels_api_key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Contact Information
NEXT_PUBLIC_CONTACT_PHONE=+971555373443
NEXT_PUBLIC_CONTACT_EMAIL=info@alweamcentre.com
```

### Customization

- **Brand Colors** - Update Tailwind config
- **Fonts** - Modify font imports in `globals.css`
- **Content** - Update translation files
- **Services** - Modify `src/data/services.ts`

## 📞 Support

For technical support or questions:

- **Email**: info@alweamcentre.com
- **Phone**: +971555373443
- **WhatsApp**: [Direct Link](https://wa.me/971555373443)

## 📄 License

This project is proprietary to Al Weam Centre. All rights reserved.

---

**Al Weam Centre** - Premium Medical & Beauty Services in UAE
