# 🧠 NHMC Hair Removal Project Taskmaster

## Project Overview
Rebuild the NHMC Group hair removal center website from scratch using Next.js and Tailwind CSS. Focus on professional, minimal, SEO-friendly, and accessible design with dynamic content ingestion from the legacy site.

---

## Core Technologies
- Next.js (SSR, SSG, ISR)
- Tailwind CSS (responsive, modern styling)
- TypeScript (optional, encouraged)
- DeepSeek API (content analysis and dynamic updates)
- ESLint + Prettier (code quality)
- Husky + Lint-Staged (pre-commit checks)
- Testing: Vitest (unit/integration), Cypress/Playwright (E2E)
- CI/CD: GitHub Actions or Vercel pipelines
- Analytics: Google Search Console, Plausible Analytics

---

## Project Structure
- `/pages` — page components and routes
- `/components` — reusable UI elements
- `/styles` — Tailwind config and global styles
- `/public` — static assets and optimized images
- `/utils` — helper functions and API wrappers
- `/tests` — test suites
- `/middleware` — API middlewares, auth, etc.
- `/docs` — project documentation and planning files

---

## Task Modules & Checklist

### 1. Initialization
- [ ] Setup Next.js project with TypeScript
- [ ] Configure Tailwind CSS with dark mode support
- [ ] Setup ESLint, Prettier, Husky + Lint-Staged
- [ ] Setup GitHub Actions or Vercel CI/CD pipelines

### 2. Content Ingestion & Analysis
- [ ] Crawl legacy site `https://nhmcgroup.ae/`
- [ ] Extract pages, text content, images, metadata
- [ ] Analyze content with DeepSeek API=sk-0cd906ee0abf4e16ac9c5b99e9141f40 for quality and rewrite suggestions
- [ ] Map legacy pages to new page components

### 3. Layout & UI Components
- [ ] Create responsive header and footer components
- [ ] Build reusable components (buttons, cards, forms, modals)
- [ ] Implement homepage layout and hero section
- [ ] Build service pages layouts with dynamic content support
- [ ] Create contact page with form validation
- [ ] Create whatsapp emoticon link component
- [ ] Create admin panel analytics dashboard )

### 4. SEO & Metadata
- [ ] Setup dynamic meta tags with `next/head`
- [ ] Implement Open Graph & Twitter card metadata
- [ ] Generate sitemap.xml and robots.txt automatically
- [ ] Add JSON-LD structured data (Schema.org)
- [ ] Configure clean URLs and canonical links

### 5. Performance & Accessibility
- [ ] Optimize images: WebP, responsive sizes, lazy loading
- [ ] Ensure semantic HTML5 usage and ARIA attributes
- [ ] Achieve Lighthouse accessibility & SEO scores > 90
- [ ] Add IntersectionObserver for lazy loading components (optional)

### 6. Testing & Quality Assurance
- [ ] Write unit and integration tests with Vitest
- [ ] Create E2E tests using Cypress or Playwright
- [ ] Setup test coverage reports

### 7. Analytics & Monitoring
- [ ] Integrate Google Search Console verification
- [ ] Setup Plausible Analytics or equivalent
- [ ] Configure error monitoring/logging (optional)

### 8. Deployment & Documentation
- [ ] Prepare environment variable management `.env`
- [ ] Write `instructions.md` for development and deployment
- [ ] Maintain and update `todo.md` and `prompt.md` in `/docs`
- [ ] Create release notes and changelog (optional)

---

## Usage with Copilot or AI Assistants
> Use this file as a master prompt context. Request tasks by name, e.g.:
> - "Start by implementing `initTailwind`."
> - "Generate homepage layout based on legacy content."
> - "Create SEO metadata helpers."
> - "Write Vitest tests for the contact form."
>
> Refer to task sections and track progress here.

---

*End of taskmaster.md*
