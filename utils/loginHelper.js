export async function loginToDashboard(page) {

    await page.goto('http://localhost:5173');

    await page.evaluate(() => {
        localStorage.setItem('Login', 'true');
    });

    await page.goto('http://localhost:5173/dashboard');
}