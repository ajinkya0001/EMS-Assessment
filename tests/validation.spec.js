import { test, expect } from '@playwright/test';
import { loginToDashboard } from '../utils/loginHelper';

test.describe('Validation Tests', () => {

    test('Verify Add Employee Form Visible', async ({ page }) => {

        await loginToDashboard(page);

        await expect(
            page.getByPlaceholder('First Name')
        ).toBeVisible();
    });

    test('Verify Email Field Visible', async ({ page }) => {

        await loginToDashboard(page);

        await expect(
            page.getByPlaceholder('Email')
        ).toBeVisible();
    });

});