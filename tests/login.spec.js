import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {

    test('Verify Sign In Button', async ({ page }) => {

        await page.goto('http://localhost:5173');

        await expect(
            page.getByRole('button', { name: 'Sign In' })
        ).toBeVisible();
    });

    test('Verify Forgot Password Link', async ({ page }) => {

        await page.goto('http://localhost:5173');

        await expect(
            page.getByText('Forgot password?')
        ).toBeVisible();
    });

});