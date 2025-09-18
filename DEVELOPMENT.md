# Development Guide - Al Weam Centre Website

This guide provides comprehensive information for developers working on the Al Weam Centre website.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   │   ├── contact/       # Contact page
│   │   ├── services/      # Services pages
│   │   └── layout.tsx     # Locale-specific layout
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── ServiceCard.tsx    # Service display card
│   ├── OptimizedImage.tsx # Image optimization
│   ├── ErrorBoundary.tsx  # Error handling
│   ├── AccessibilityHelper.tsx # A11y features
│   └── PerformanceMonitor.tsx  # Performance tracking
├── data/                  # Static data
│   └── services.ts        # Service definitions
├── lib/                   # Utilities
│   ├── i18n.ts           # Internationalization
│   ├── pexels.ts         # Image management
│   └── analytics.ts      # Analytics utilities
└── hooks/                 # Custom React hooks
    └── usePexels.ts      # Pexels integration
```

## 🛠️ Available Scripts

### Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run preview` - Build and preview production

### Code Quality

- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript checks

### Testing

- `npm test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run test:e2e` - Run end-to-end tests
- `npm run test:e2e:ui` - Run E2E tests with UI

### Performance & Quality

- `npm run build:analyze` - Build with bundle analysis
- `npm run performance:lighthouse` - Run Lighthouse audit
- `npm run performance:budget` - Check performance budget
- `npm run seo:check` - Check SEO compliance
- `npm run accessibility:audit` - Run accessibility audit
- `npm run health:check` - Run health checks

### Deployment

- `npm run deploy` - Deploy to production
- `npm run deploy:staging` - Deploy to staging
- `npm run deploy:production` - Deploy to production

### Maintenance

- `npm run security:audit` - Check for security vulnerabilities
- `npm run security:fix` - Fix security issues
- `npm run deps:check` - Check for outdated dependencies
- `npm run deps:update` - Update dependencies
- `npm run deps:clean` - Clean npm cache

## 🎨 Styling Guidelines

### Tailwind CSS

- Use utility classes for styling
- Follow mobile-first approach
- Use custom CSS classes for complex components
- Maintain consistent spacing and typography

### Component Styling

```tsx
// Good: Use utility classes
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">

// Good: Use custom component classes
<div className="service-card">

// Avoid: Inline styles
<div style={{ display: 'flex', padding: '16px' }}>
```

### Color System

- Primary: `brand-600` (#4f46e5)
- Secondary: `brand-500` (#6366f1)
- Accent: `accent-600` (#e11d48)
- Use semantic color names in components

## 🌐 Internationalization

### Adding New Content

1. Add translations to `messages/en.json` and `messages/ar.json`
2. Use the `tn()` function in components:
   ```tsx
   const t = tn(locale, 'namespace');
   return <h1>{t('title')}</h1>;
   ```

### Adding New Languages

1. Add locale to `src/lib/i18n.ts`
2. Create translation files in `messages/`
3. Update `generateStaticParams` in page components

## 🧪 Testing

### Unit Tests

```tsx
// Example test
import { render, screen } from '@testing-library/react';
import { ServiceCard } from '@/components/ServiceCard';

test('renders service card', () => {
  const service = {
    key: 'test',
    slug: 'test',
    titleKey: 'test.title',
    descriptionKey: 'test.description',
  };
  render(<ServiceCard service={service} locale='en' />);
  expect(screen.getByText('Test Service')).toBeInTheDocument();
});
```

### E2E Tests

```tsx
// Example E2E test
import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Al Weam Centre/);
});
```

## ♿ Accessibility

### Guidelines

- Use semantic HTML elements
- Provide alt text for images
- Ensure proper heading hierarchy
- Use ARIA labels where needed
- Test with screen readers

### Testing

```bash
# Run accessibility audit
npm run accessibility:audit

# Check for accessibility issues
npm run lint
```

## 🚀 Performance

### Optimization

- Use Next.js Image component
- Implement code splitting
- Optimize images with Sharp
- Use static generation where possible
- Monitor Core Web Vitals

### Monitoring

```bash
# Check performance budget
npm run performance:budget

# Run Lighthouse audit
npm run performance:lighthouse

# Analyze bundle size
npm run size:analyze
```

## 🔍 SEO

### Best Practices

- Use semantic HTML
- Add meta tags
- Implement structured data
- Create XML sitemap
- Optimize images

### Checking SEO

```bash
# Run SEO audit
npm run seo:check

# Validate structured data
npm run health:check
```

## 🛡️ Security

### Best Practices

- Keep dependencies updated
- Use HTTPS
- Implement CSP headers
- Validate user input
- Use environment variables for secrets

### Security Checks

```bash
# Audit dependencies
npm run security:audit

# Fix security issues
npm run security:fix
```

## 📦 Dependencies

### Core Dependencies

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

### Key Libraries

- **next-seo** - SEO optimization
- **framer-motion** - Animations
- **react-hook-form** - Form handling
- **zod** - Schema validation
- **sharp** - Image optimization

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Unit testing
- **Playwright** - E2E testing
- **Lighthouse** - Performance auditing

## 🔧 Configuration Files

### ESLint (.eslintrc.json)

- Extends Next.js, TypeScript, and Prettier configs
- Includes accessibility rules
- Custom rules for code quality

### Prettier (.prettierrc)

- Consistent code formatting
- Tailwind CSS plugin for class sorting
- LF line endings

### TypeScript (tsconfig.json)

- Strict type checking
- Path mapping for imports
- Next.js optimizations

## 🚀 Deployment

### Static Hosting

The website is optimized for static hosting platforms:

1. **Build**: `npm run build`
2. **Deploy**: Upload `out/` directory to hosting platform
3. **Validate**: Run health checks

### Supported Platforms

- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Deployment Script

```bash
# Full deployment process
./deploy.sh
```

## 🐛 Troubleshooting

### Common Issues

1. **Build fails with locale errors**
   - Ensure all locale files exist
   - Check `generateStaticParams` functions

2. **Images not loading**
   - Verify image paths
   - Check Pexels API configuration

3. **Styling issues**
   - Run `npm run format`
   - Check Tailwind configuration

4. **Performance issues**
   - Run `npm run performance:budget`
   - Check bundle size with `npm run size:analyze`

### Debug Mode

```bash
# Enable debug logging
DEBUG=* npm run dev
```

## 📚 Resources

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### Tools

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Web Vitals](https://web.dev/vitals/)
- [Accessibility Testing](https://www.w3.org/WAI/test-evaluate/)

## 🤝 Contributing

1. Follow the coding standards
2. Write tests for new features
3. Update documentation
4. Run all checks before submitting
5. Use conventional commit messages

### Commit Message Format

```
type(scope): description

feat(header): add mobile navigation menu
fix(images): resolve loading issues
docs(readme): update installation instructions
```

## 📞 Support

For technical support:

- **Email**: info@alweammedical.com
- **Phone**: +971 55 537 3443
- **WhatsApp**: [Contact via WhatsApp](https://wa.me/971555373443)
