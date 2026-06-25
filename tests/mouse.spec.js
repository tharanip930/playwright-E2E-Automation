import { test, expect } from '@playwright/test';
test('mouse', async ({ page }) => {

    await page.goto("https://play1.automationcamp.ir/mouse_events.html");
    await page.locator("div #click_area").click();
    await page.click("div #click_area");
    const text = await page.locator("span#click_type");
    await expect(text).toHaveText("Click");

    //Right click 
    await page.locator("div #click_area").click({ button: 'right' });
    const text1 = await page.locator("span#click_type");
    await expect(text1).toHaveText("Right-Click")
    //Double click:dblclick()
    await page.dblclick("div #click_area");
    const text3 = await page.locator("span#click_type");
    await expect(text3).toHaveText("Double-Click")

    //Mouse Hover

    await page.locator('button.dropbtn').hover();
    await page.locator("text='Java'").click(); // Adjust selector to your actual dropdown item
    await expect(page.locator("h4#hover_validate")).toHaveText("Java");


    await page.dragAndDrop("#drag_source", "#drop_target");
    await expect(page.locator("div h3")).toHaveText("Drop is successful!");

    //await page.locator("#drag_source").dragTo(page.locator("#drop_target"));Another method for darg & drop

    
    await page.waitForTimeout(3000);

})