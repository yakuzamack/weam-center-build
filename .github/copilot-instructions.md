# Copilot Instructions for Al Weam Centre

## Architecture Overview

This is a **Next.js 14 static-export bilingual medical center website** deployed to GitHub Pages. Key architectural decisions:

- **Static export mode** (`output: 'export'`) for GitHub Pages compatibility
- **Bilingual support** (Arabic/English) with locale-based routing via `[locale]` dynamic segments
- **No middleware** - disabled for static export simplicity
- **Type-safe i18n** using custom translation utilities instead of heavy i18n libraries

## Critical Build Process

The build has a **custom postbuild step** that's essential for proper deployment:

```bash
npm run build  # runs: next build && npm run postbuild
# postbuild copies out/en.html to out/en/index.html (same for ar.html)
```

This handles the static export's file structure requirements for locale routing.

## Internationalization Patterns

### Translation System

- **Messages**: `messages/en.json` and `messages/ar.json` contain all translations
- **Namespaces**: Organized by page/component (`navigation`, `homepage`, `services`, etc.)
- **Usage**: Use `tn(locale, namespace)` helper that returns a translation function:

```tsx
const tHome = tn(locale, 'homepage');
return <h1>{tHome('title')}</h1>;
```

### Locale Handling

**Critical defensive pattern** - always handle undefined params and strip `.html` extensions:

```tsx
const rawLocale = params?.locale || 'en';
const cleanLocale = rawLocale.replace('.html', '');
const locale = cleanLocale === 'ar' ? 'ar' : 'en';
```

This pattern appears in all page components and is required for static export compatibility.

## Services Architecture

### Service Data Structure

Services are defined in `src/data/services.ts` with this interface:

```tsx
interface Service {
  slug: string; // URL slug for routing
  key: string; // Base translation key
  titleKey: string; // Specific title translation path
  descriptionKey: string; // Specific description translation path
  price?: { from: number; currency: string }; // Optional pricing
}
```

### Dynamic Service Pages

- **Static generation**: `generateStaticParams()` creates pages for all locale/service combinations
- **Slug routing**: `/[locale]/services/[slug]` pattern with defensive param handling
- **Translation integration**: Service keys map to nested translation paths in `messages/`
- **SEO optimization**: Each service page has structured data and meta tags

### Translation Namespace Structure

```json
{
  "services": {
    "dermatologyBeauty": {
      "title": "Dermatology & Beauty",
      "description": "Advanced cosmetic dermatology..."
    }
  }
}
```

## Styling System Deep Dive

### Custom Design Tokens

- **Brand colors**: `brand-50` (lightest) to `brand-900` (darkest) with `brand-600` primary
- **Accent colors**: Pink/red accent palette for highlights and CTAs
- **Custom shadows**:
  - `shadow-soft`: Subtle elevation (cards, buttons)
  - `shadow-glow`: Brand-colored glow effect for interactive elements
- **Border radius**: Extended with `xl` (1rem) and `2xl` (1.25rem) for modern look
- **Beautiful patterns**: `.pattern-dots`, `.pattern-grid`, `.pattern-waves`, `.pattern-medical` for background textures### Component Classes Pattern

```css
.btn {
  @apply inline-flex items-center gap-2 rounded-xl font-medium px-5 py-2.5
         transition-all duration-200 focus:outline-none focus-visible:ring-2
         focus-visible:ring-brand-400/70 active:scale-[.98];
}
```

- **Consistent focus states**: All interactive elements use `focus-visible:ring-2`
- **Micro-interactions**: Scale effects (`active:scale-[.98]`) for tactile feedback
- **Glass morphism**: `.surface-glass` combines backdrop-blur, transparency, and borders
- **Offer styles**: `.offer-card`, `.countdown-grid`, `.whatsapp-btn` for promotional content
- **Service cards**: `.service-card`, `.service-image`, `.service-overlay` for enhanced service presentation

### Animation System

- **Fade-in animations**: `animate-fade-in` for content reveals
- **Scale animations**: `animate-scale-in` for modal/card entrances
- **Custom timing**: Uses cubic-bezier for natural motion
- **Staggered animations**: Use `[animation-delay:0.2s]` for sequential reveals

## Component Architecture

### Styling System

- **Tailwind with custom components** defined in `globals.css` (`@layer components`)
- **Design tokens**: Brand colors (`brand-*`), custom shadows (`shadow-soft`, `shadow-glow`)
- **Reusable button classes**: `.btn-primary`, `.btn-outline`, `.btn-ghost`
- **Glass morphism**: `.surface-glass` for modern UI effects

### Key Components

- **Header.tsx**: Sticky header with locale-aware navigation, mobile menu, responsive design, and logo integration
- **CountdownTimer.tsx**: Real-time countdown component with beautiful patterns and WhatsApp integration
- **ServiceCard.tsx**: Enhanced service cards with high-resolution images, hover effects, and call-to-action buttons
- **Services data**: `src/data/services.ts` defines service structure with slug-based routing
- **Theme support**: Dark/light mode via `ThemeToggle` component
- **Contact integration**: Direct WhatsApp links (`https://wa.me/971555373443`) for appointments

## Development Workflow

### Essential Commands

```bash
npm run dev          # Development server
npm run build        # Full build with postbuild step
npm run lint         # ESLint with zero warnings policy
npm run format       # Prettier formatting
```

### Code Quality

- **Husky + lint-staged**: Pre-commit hooks for linting and formatting
- **Zero warnings policy**: ESLint configured with `--max-warnings=0`
- **TypeScript strict mode**: Full type safety expected
- **Prettier integration**: Auto-formatting on commit via lint-staged

## File Patterns

### Page Structure

```
src/app/[locale]/           # Locale-based routing
├── page.tsx               # Homepage with defensive locale handling
├── services/page.tsx      # Services listing
├── services/[slug]/page.tsx # Individual service pages
└── contact/page.tsx       # Contact page
```

### Asset Organization

```
images/                    # Static images
├── services/             # Service-specific images
├── gallery/              # Before/after galleries
└── *.jpg                 # General images
```

## Deployment & Environment

### GitHub Pages Deployment

- **Workflow**: `.github/workflows/deploy.yml` handles automated deployment
- **Static export**: `out/` directory contains built site
- **Base URL**: Configured via `NEXT_PUBLIC_BASE_URL` environment variable
- **Artifacts**: Uses GitHub Actions artifact upload for Pages deployment

### Environment Configuration

- **No .env files**: All configuration is build-time static
- **Production detection**: Uses `process.env.NODE_ENV === 'production'`
- **Asset prefix**: Configured for GitHub Pages subdirectory deployment

## Critical Gotchas

1. **Always use defensive locale handling** - Next.js static export sometimes passes undefined params
2. **Images must be unoptimized** - `images: { unoptimized: true }` required for static export
3. **No trailing slashes** - Configuration prevents trailing slash issues with GitHub Pages
4. **WhatsApp integration** - Contact uses direct WhatsApp links (`https://wa.me/971555373443`)

## When Adding Features

- **New pages**: Follow `[locale]` structure, implement `generateMetadata` with defensive locale handling
- **New translations**: Add to both `messages/en.json` and `messages/ar.json` with matching structure
- **New services**: Add to `services.ts` with slug, title, and description keys
- **Styling**: Use existing Tailwind component classes, extend in `globals.css` if needed

Focus on maintaining the static export compatibility and bilingual consistency when making changes.
