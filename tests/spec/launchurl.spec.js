const { test, expect } = require('@playwright/test');

test('Amazon Electronics Section Validation', async ({ page }) => {
    // Navigate to Amazon India
    await page.goto('https://www.amazon.in/');

    // Validate homepage is launched successfully
    await expect(page).toHaveTitle(/Amazon.in/);
    console.log("✅ Homepage launched successfully!");

    // Click and Navigate to Electronics Tab
    await page.hover('text=Electronics');
    await page.click('text=Electronics');
    console.log("✅ Navigated to Electronics section!");

    // Validate Laptops and Headphones are available
    const laptopVisible = await page.locator('text=Laptops').isVisible();
    const headphonesVisible = await page.locator('text=Headphones').isVisible();

    expect(laptopVisible).toBeTruthy();
    expect(headphonesVisible).toBeTruthy();

    console.log("✅ Laptops and Headphones are available under Electronics.");
});
