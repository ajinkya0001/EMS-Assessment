import { test, expect } from '@playwright/test';

test.describe('Employee Form UI', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.evaluate(() => {
            localStorage.setItem('Login', 'true');
        });
        await page.goto('/dashboard');
    });

    test('Verify First Name Field', async ({ page }) => {
        await expect(page.getByPlaceholder('First Name')).toBeVisible();
    });

    test('Verify Last Name Field', async ({ page }) => {
        await expect(page.getByPlaceholder('Last Name')).toBeVisible();
    });

    test('Verify Email Field', async ({ page }) => {
        await expect(page.getByPlaceholder('Email')).toBeVisible();
    });

    test('Verify Add Button Visible', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
    });

});