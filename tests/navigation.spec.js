import { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {

    test('Verify Forgot Password Navigation', async ({ page }) => {

        await page.goto('http://localhost:5173');

        await page.getByText('Forgot password?').click();

        await expect(page).toHaveURL(
            'http://localhost:5173/forgotPassword'
        );

    });

});