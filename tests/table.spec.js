import { test, expect } from '@playwright/test';

test.describe('Employee Table', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('/');

        await page.evaluate(() => {
            localStorage.setItem('Login', 'true');
        });

        await page.goto('/dashboard');
    });

    test('Verify Name Column', async ({ page }) => {

        await expect(
            page.getByRole('columnheader', { name: 'Name' })
        ).toBeVisible();

    });

    test('Verify Email Column', async ({ page }) => {

        await expect(
            page.getByRole('columnheader', { name: 'Email' })
        ).toBeVisible();

    });

    test('Verify Actions Column', async ({ page }) => {

        await expect(
            page.getByRole('columnheader', { name: 'Actions' })
        ).toBeVisible();

    });

});