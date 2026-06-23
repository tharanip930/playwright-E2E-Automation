const { test, expect, chromium } = require('@playwright/test');

// 1. Group tests inside a describe block
test.describe("Multiple Windows and Tabs Suite", () => {
  
  // 2. Declare variables at the top level of the describe block (NO TypeScript types here)
  let browser;
  let context;
  let page;

  // 3. This runs BEFORE EACH individual test case
  test.beforeEach(async () => {
    // Note: Do NOT add 'const' or 'let' here. Assign directly to the outer variables.
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage(); 
    
    // Navigate to the practice page
    await page.goto("https://demoqa.com/browser-windows");
  });

  // 4. This runs AFTER EACH test case to close resources safely
  test.afterEach(async () => {
    if (browser) {
      await browser.close();
    }
  });

  // --- TEST CASES ---

  test("Handling Multiple Tabs", async () => {
    // 'page' is already defined and loaded by the beforeEach hook
    const [newTab] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('#tabButton').click()
    ]);

    await newTab.waitForLoadState();
    console.log("New tab URL is:", newTab.url());
    
    await newTab.close(); // Close the child tab
  });

  test("Handling Multiple Windows", async () => {
    // 'context' and 'page' are already defined and loaded by the beforeEach hook
    const [newWindow] = await Promise.all([
      context.waitForEvent('page'),
      page.locator('#windowButton').click()
    ]);

    await newWindow.waitForLoadState();
    console.log("New window URL is:", newWindow.url());
    
    await newWindow.close(); // Close the child window
  });

});