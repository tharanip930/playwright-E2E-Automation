import { test, expect } from '@playwright/test';
test.beforeEach('launchapp', async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

})
test('longest', async ({ page }) => {

    await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();
})
test('test title', async ({ page }) => {

    expect(await page.title()).toContain("Demo Web Shop");

});
test('Search', async ({ page }) => {

    await page.locator("//input[@id='small-searchterms']").fill('laptop');
    await page.locator(" //input[@value='Search']").click();
    await expect(page.locator("#Q")).toHaveValue('laptop');
    // await page.waitForTimeout(3000);




});