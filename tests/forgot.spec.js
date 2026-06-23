import { test, expect } from '@playwright/test';

test.describe('Forgot Password Page', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/forgotPassword');
    });

    test('Verify Reset Password Heading', async ({ page }) => {

        await expect(
            page.getByRole('heading', { name: 'Reset Password' })
        ).toBeVisible();

    });

    test('Verify Email Field Visible', async ({ page }) => {

        await expect(
            page.getByLabel('Email Address')
        ).toBeVisible();

    });

});