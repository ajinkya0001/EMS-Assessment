import { test, expect } from '@playwright/test';

test.describe('Dashboard UI', () => {

    test.beforeEach(async ({ page }) => {

        // Set Login=true before opening dashboard
        await page.goto('/');

        await page.evaluate(() => {
            localStorage.setItem('Login', 'true');
        });

        await page.goto('/dashboard');
    });

    test('Verify Dashboard Heading', async ({ page }) => {

        await expect(
            page.getByText('Employee Management System')
        ).toBeVisible();

    });

    test('Verify Employee List Heading', async ({ page }) => {

        await expect(
            page.getByText('Employee List')
        ).toBeVisible();

    });

    test('Verify Add Employee Heading', async ({ page }) => {

        await expect(
            page.getByText('Add Employee')
        ).toBeVisible();

    });

});