// tests/basic-navigation.spec.ts
import { test, expect } from '@playwright/test';

test('homepage has expected title and loads', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/SvelteKit SaaS Template/); // Assuming a title like this, or adjust
    await expect(page.getByRole('heading', { name: 'Your Next SaaS Adventure Starts Here' })).toBeVisible();
});

test('pricing page loads', async ({ page }) => {
    await page.goto('/pricing');
    await expect(page.getByRole('heading', { name: "Find the Plan That's Right For You" })).toBeVisible();
});

test('blog page loads', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.getByRole('heading', { name: 'Our Blog' })).toBeVisible();
});
