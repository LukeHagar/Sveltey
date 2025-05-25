// tests/auth.spec.ts
import { test, expect } from '@playwright/test';

test('login page has login form and can attempt interaction', async ({ page }) => {
    await page.goto('/auth/login');
    
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    
    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Password').fill('password123');
    
    // We don't expect a successful login without a backend or if Supabase URL isn't configured.
    // This test mainly checks if the form fields are present and submittable.
    // Further assertions would depend on actual behavior (e.g., error messages).
    await page.getByRole('button', { name: 'Login' }).click();

    // Add a small wait to see if any client-side error message appears or URL changes
    // This is a very basic check. In a real scenario, you'd mock Supabase or check for specific outcomes.
    await page.waitForTimeout(1000); 

    // Example: Check if it stays on the login page (e.g. due to error)
    // await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible(); 
    // Or, if it redirects (less likely here without backend):
    // await expect(page).toHaveURL('/dashboard'); 
});
