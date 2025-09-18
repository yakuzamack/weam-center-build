# 🧠 Full Website Rebuild Prompt: NHMC Group - Hair Removal Center Branch

## 👤 Role

Act as a senior full-stack web architect and optimization engineer. Your role is to rebuild the legacy website of Al WEAM Group's new hair removal center branch into a clean, professional, performant, SEO-optimized, and modern web application.

---

## 🎯 Objective

Rebuild the existing website from scratch using **Next.js**, **Tailwind CSS**, and **DeepSeek API**. The new site must:

- Be visually elegant, clean, and conversion-oriented
- Prioritize accessibility, performance, and SEO
- Support real-time dynamic updates using content from the legacy site
- Be scalable, developer-friendly, and CI/CD-ready

---

## 🏗️ Step-by-Step Execution Plan

### ✅ Step 1: Architecture Setup

- Use **Next.js** for SSR, SSG, and ISR for flexible rendering.
- Use **Tailwind CSS** for responsive and scalable styling.
- Structure project with:
  /about
  /services/laser-hair-removal
  /services
  /contact
  /admin

- Ensure Lighthouse scores >90 for SEO and accessibility

---

### ✅ Step 5: Dev Tooling & Workflow

- ESLint + Prettier for consistent code formatting
- Husky + Lint-Staged for pre-commit lint and format checks
- CI/CD:
- GitHub Actions for lint/test/build
- Deploy to **Vercel** (preferred) or another platform

---

### ✅ Step 6: Testing Setup

- Add **unit/integration tests** with **Vitest**
- Add **E2E tests** with **Cypress** or **Playwright**
- Ensure tests cover:
- Page rendering
- Form submission
- Route accessibility
- Content injection and SSR

---

### ✅ Step 7: UX Enhancements (Optional)

- Add **Dark mode toggle** with Tailwind's `dark` class
- Add sticky nav and responsive mobile menu
- Use **IntersectionObserver** to animate or lazy load sections

---

### ✅ Step 8: Monitoring & Analytics

- Set up **Google Search Console**
- Add **Plausible Analytics** (lightweight & privacy-friendly)
- (Optional) Add Ahrefs/SEMRush for backlink and keyword tracking

---

### ✅ Step 9: DeepSeek API Integration

- Automate:
- Dynamic content ingestion and rewrite suggestions
- Real-time updates to FAQs, services, and promotions
- Intelligent copy generation based on SEO goals

---

## ✅ Final Deliverables

- Complete Next.js + Tailwind codebase
- SEO and performance audit results
- Working CI/CD pipeline
- Fully responsive and accessible UI
- Documentation for:
- Deployment
- Local development
- Content update workflows
- DeepSeek API use cases

---

## 🧩 Tech Stack Summary

| Tool/Service          | Purpose                        |
| --------------------- | ------------------------------ |
| Next.js               | SSR/SSG + routing + head mgmt  |
| Tailwind CSS          | Responsive styling             |
| ESLint + Prettier     | Code quality                   |
| Husky + Lint-Staged   | Pre-commit formatting checks   |
| TypeScript            | Type safety                    |
| Cypress/Playwright    | E2E testing                    |
| Vitest                | Unit testing                   |
| DeepSeek API          | Content rewriting & automation |
| Vercel                | CI/CD & hosting                |
| Google Search Console | SEO monitoring                 |
| Plausible             | Analytics                      |
