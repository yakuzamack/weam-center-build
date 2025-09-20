# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is the **Al Weam Centre medical website** - a simplified Arabic-only Next.js 14 static export website for a medical center in the UAE. The site specializes in medical and beauty services including dermatology, laser treatments, cupping therapy, and physiotherapy.

**Key Features:**
- Arabic-only content with RTL layout
- Static export for simple hosting
- Minimal dependencies and configuration
- Production-ready with optimized build

## Development Commands

### Core Development
```bash
npm run dev              # Start development server at http://localhost:3000
npm run build            # Build for production (static export)
npm run start            # Start production server
```

### Code Quality
```bash
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues automatically
npm run format           # Format code with Prettier
npm run type-check       # TypeScript type checking
```

## Architecture Overview

### Static Export Configuration
- **Static export mode** (`output: 'export'`) for simple static hosting
- **Simple build process**: `npm run build` creates static HTML files in `out/` directory
- **Images unoptimized** - required for static hosting
- **No complex middleware or dynamic features**

### Arabic-Only Design
- **RTL support**: Full right-to-left layout with `dir="rtl"` and `lang="ar"`
- **Arabic content**: All text content is in Arabic
- **Simple routing**: Standard Next.js App Router structure without locale complexity
- **Static pages**: `/`, `/services`, `/contact` with Arabic metadata

## Project Structure

### App Router Structure
```
src/app/
├── page.tsx             # Homepage (Arabic)
├── services/page.tsx    # Services listing
├── contact/page.tsx     # Contact page
├── globals.css          # Global Tailwind styles
├── layout.tsx          # Root layout with Arabic RTL
└── layout-wrapper.tsx  # Simple layout wrapper
```

### Essential Components
```
src/components/
├── Header.tsx           # Navigation header
├── Footer.tsx           # Site footer
├── ImprovedServiceCard.tsx  # Service cards
├── OptimizedHero.tsx    # Simplified hero section
├── OptimizedImage.tsx   # Basic image wrapper
├── CountdownTimer.tsx   # Countdown component
├── FloatingAnimations.tsx   # Simple animations
├── ThemeToggle.tsx      # Dark/light mode
└── ErrorBoundary.tsx    # Error handling
```

### Data
```
src/data/services.ts     # Service definitions
```

## Services System

Services are defined in `src/data/services.ts` with this structure:
```typescript
interface Service {
  key: string;           // Base translation key
  slug: string;          // URL slug for routing
  titleKey: string;      # Translation path
  descriptionKey: string; # Translation path  
  title: string;         # Fallback Arabic title
  description: string;   # Fallback Arabic description
  image: string;         # Image path
  price?: { from: number; currency: string }; # Optional pricing
}
```

### Service Pages
- **Simple service listing**: All services displayed on `/services`
- **Static content**: Services defined in `src/data/services.ts`
- **Arabic content**: All service information in Arabic
- **SEO optimized**: Each page has proper meta tags

## Styling System

### Tailwind CSS
- **Minimal configuration**: Basic Tailwind setup in `tailwind.config.js`
- **Custom classes**: Medical-themed classes in `globals.css`
- **RTL support**: Full Arabic right-to-left layout
- **Responsive design**: Mobile-first approach
- **Medical theme**: Blue and teal color scheme

## Contact Integration

- **WhatsApp integration**: Direct links to `https://wa.me/971555373443`
- **Contact information**: Phone: +971555373443, Email: info@alweamcentre.com
- **Appointment booking**: CTA buttons throughout the site

## Build & Deployment

### Simple Build Process
```bash
npm run build  # Creates static files in out/ directory
```

### Deployment
- Upload the `out/` directory to any static web server
- No special configuration required
- Works with GitHub Pages, Netlify, Vercel, etc.

## Development Guidelines

### Simple Patterns
1. **All content is in Arabic** - No translation complexity
2. **Images are unoptimized** for static export compatibility  
3. **Standard Next.js App Router** structure
4. **Tailwind for styling** with custom medical theme classes

### Adding New Content
- **New pages**: Create in `src/app/` directory
- **New services**: Add to `src/data/services.ts`
- **Styling**: Use existing classes from `globals.css`

## Common Issues

### Build Problems
- **Import errors**: Check component imports and exports
- **Image issues**: Ensure images exist in `public/images/`
- **TypeScript errors**: Run `npm run type-check`

### Development Issues
- **Styling problems**: Check Tailwind classes in `globals.css`
- **Component errors**: Verify all required props are passed
