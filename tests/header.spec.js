import { test, expect } from '@playwright/test';

test.describe('Header Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.evaluate(() => {
            localStorage.setItem('Login', 'true');
        });
        await page.goto('/dashboard');
    });

    test('Verify E-Manager Logo Text', async ({ page }) => {
        await expect(page.getByText('E-Manager')).toBeVisible();
    });

    test('Verify Mail Icon Visible', async ({ page }) => {
        await expect(page.locator('[data-testid="MailIcon"]').first()).toBeVisible();
    });

    test('Verify Notification Icon Visible', async ({ page }) => {
        await expect(page.locator('[data-testid="NotificationsIcon"]').first()).toBeVisible();
    });

});