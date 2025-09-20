import { test, expect } from '@playwright/test';

test.describe('Al Weam Centre Website', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check title
    await expect(page).toHaveTitle(/مركز الوئام/);
    
    // Check main heading
    await expect(page.locator('h1')).toContainText('مركز الوئام');
    
    // Check hero section
    await expect(page.locator('main')).toBeVisible();
    
    // Check navigation
    await expect(page.locator('nav')).toBeVisible();
    
    // Check footer
    await expect(page.locator('footer')).toBeVisible();
  });

  test('services page loads and displays service cards', async ({ page }) => {
    await page.goto('/services');
    
    // Check title
    await expect(page).toHaveTitle(/الخدمات/);
    
    // Check service cards are present
    const serviceCards = page.locator('article');
    await expect(serviceCards).toHaveCount(8); // Should have 8 services
    
    // Check service cards have proper content
    const firstCard = serviceCards.first();
    await expect(firstCard).toBeVisible();
    await expect(firstCard.locator('h3')).toBeVisible();
    await expect(firstCard.locator('p')).toBeVisible();
    
    // Check service cards are properly aligned (no overlapping)
    const cardBounds = await serviceCards.first().boundingBox();
    expect(cardBounds?.width).toBeGreaterThan(250); // Minimum card width
    expect(cardBounds?.height).toBeGreaterThan(400); // Minimum card height
  });

  test('service card interactions work', async ({ page }) => {
    await page.goto('/services');
    
    // Wait for service cards to load
    const serviceCards = page.locator('article');
    await expect(serviceCards.first()).toBeVisible();
    
    // Test hover effect (card should lift)
    const firstCard = serviceCards.first();
    await firstCard.hover();
    
    // Check WhatsApp button
    const whatsappButton = firstCard.locator('a[href*="wa.me"]');
    await expect(whatsappButton).toBeVisible();
    
    // Check details button
    const detailsButton = firstCard.locator('a[href*="/services/"]');
    await expect(detailsButton).toBeVisible();
  });

  test('contact page loads correctly', async ({ page }) => {
    await page.goto('/contact');
    
    // Check title
    await expect(page).toHaveTitle(/تواصل/);
    
    // Check contact information is present
    await expect(page.locator('main')).toBeVisible();
  });

  test('navigation works correctly', async ({ page }) => {
    await page.goto('/');
    
    // Test services navigation
    await page.click('a[href="/services"]');
    await expect(page).toHaveURL('/services');
    
    // Test home navigation
    await page.click('a[href="/"]');
    await expect(page).toHaveURL('/');
    
    // Test contact navigation
    await page.click('a[href="/contact"]');
    await expect(page).toHaveURL('/contact');
  });

  test('mobile responsiveness', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check mobile navigation
    const mobileMenuButton = page.locator('button[aria-expanded]');
    if (await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click();
      await expect(page.locator('[id="mobile-menu"]')).toBeVisible();
    }
    
    // Check services page on mobile
    await page.goto('/services');
    const serviceCards = page.locator('article');
    await expect(serviceCards.first()).toBeVisible();
    
    // Cards should stack vertically on mobile
    const card1 = await serviceCards.nth(0).boundingBox();
    const card2 = await serviceCards.nth(1).boundingBox();
    if (card1 && card2) {
      expect(card1.y).toBeLessThan(card2.y); // First card above second
    }
  });

  test('dark mode works', async ({ page }) => {
    await page.goto('/');
    
    // Look for theme toggle
    const themeToggle = page.locator('button[aria-label*="الوضع"]');
    if (await themeToggle.isVisible()) {
      await themeToggle.click();
      
      // Check if dark mode is applied
      const htmlElement = page.locator('html');
      await expect(htmlElement).toHaveClass(/dark/);
    }
  });

  test('SEO meta tags are present', async ({ page }) => {
    await page.goto('/');
    
    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /.+/);
    
    // Check Open Graph tags
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /.+/);
    
    await page.goto('/services');
    
    // Check services page meta
    const servicesMetaDescription = page.locator('meta[name="description"]');
    await expect(servicesMetaDescription).toHaveAttribute('content', /.+/);
  });

  test('images load correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check logo image
    const logo = page.locator('img[alt*="مركز الوئام"], img[alt*="الوئام"]');
    if (await logo.count() > 0) {
      await expect(logo.first()).toBeVisible();
    }
    
    await page.goto('/services');
    
    // Check service card images/placeholders
    const serviceCards = page.locator('article');
    const firstCard = serviceCards.first();
    
    // Should have either an image or a placeholder
    const hasImage = await firstCard.locator('img').count() > 0;
    const hasPlaceholder = await firstCard.locator('div[class*="gradient"]').count() > 0;
    
    expect(hasImage || hasPlaceholder).toBe(true);
  });

  test('accessibility features', async ({ page }) => {
    await page.goto('/');
    
    // Check for Arabic language attribute
    const htmlElement = page.locator('html');
    await expect(htmlElement).toHaveAttribute('lang', 'ar');
    await expect(htmlElement).toHaveAttribute('dir', 'rtl');
    
    // Check for proper heading structure
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1); // Should have exactly one h1
    
    // Check for alt attributes on images
    const images = page.locator('img');
    const imageCount = await images.count();
    if (imageCount > 0) {
      for (let i = 0; i < Math.min(imageCount, 5); i++) {
        const img = images.nth(i);
        if (await img.isVisible()) {
          await expect(img).toHaveAttribute('alt', /.+/);
        }
      }
    }
  });

  test('performance - page loads within reasonable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // Page should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
    
    // Check for main content visibility
    await expect(page.locator('main')).toBeVisible();
  });
});