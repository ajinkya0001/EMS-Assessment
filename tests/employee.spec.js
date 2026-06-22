import { test, expect } from '@playwright/test';
import { EmployeePage } from '../pages/EmployeePage';
import { loginToDashboard } from '../utils/loginHelper';

test.describe('Employee Management', () => {

    test('Add Employee', async ({ page }) => {

        const employeePage = new EmployeePage(page);

        await loginToDashboard(page);

        const uniqueId = Date.now();

        const email = `ajinkya${uniqueId}@test.com`;

        await employeePage.addEmployee(
            'Ajinkya',
            'Jadkar',
            email
        );

        await expect(
            page.locator('table')
        ).toContainText(email);
    });

    test('Edit Employee', async ({ page }) => {

        const employeePage = new EmployeePage(page);

        await loginToDashboard(page);

        await employeePage.editEmployee('AjinkyaUpdated');
    });

    test('Delete Employee', async ({ page }) => {

        const employeePage = new EmployeePage(page);

        await loginToDashboard(page);

        await employeePage.deleteEmployee();
    });

});