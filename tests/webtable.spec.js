import { test, expect } from '@playwright/test';


test.describe('webtable', async () => {

    test.beforeEach('tableurl', async ({ page }) => {

        await page.goto("https://letcode.in/table/");
        await page.waitForLoadState('domcontentloaded');

    })


    test('tablerowsandcolumn', async ({ page }) => {


        const table1 = await page.locator("#shopping");
        expect(table1).toBeVisible();

        const row = await page.locator("//table[@id='shopping']//child::tbody/tr").count();
        console.log(`No of rows:${row}`)
        expect(row).toBe(4);

        const colum = await page.locator("#shopping thead th").count();
        console.log(`No of colums:${colum}`)
        const itm = await page.locator("//table[@id='shopping']//child::tbody/tr[2]/td[1]").textContent("apple");
        await expect(itm).toBe("Apple");
        console.log(`item name:${itm}`)
        const prc = await page.locator("//table[@id='shopping']//child::tbody/tr[2]/td[2]").textContent('180');
        await expect(prc).toBe("180");
        console.log(`prc is:${prc}`)
        //    validating columns
        const colnames = ['Items', 'Price']
        const itmprc1 = await page.locator("//table[@id='shopping']//tr/th").allTextContents();
        console.log(`itmprc1:${itmprc1}`);
        expect(itmprc1).toEqual(colnames);



    })
    test('tablewithcheckbox', async ({ page }) => {

        // const table2 = await page.locator("#simpletable");
        // expect(table2).toBeVisible();
        // const name = 'Koushik';
        // const row = await page.locator("#simpletable tbody tr").filter({ hasText: name });//here we are using filter method();
        // const checkbox = row.locator("#first");
        // await checkbox.check();
        // await expect(checkbox).toBeChecked();

        const name=['Koushik','Yashwanth','Iron']

        
        for(const nam of name)
        {
         const row1 = await page.locator("#simpletable tbody tr").filter({ hasText:nam});  
          const check1= row1.locator('input[type="checkbox"]');
          await check1.check();
          await expect(check1).toBeChecked();
        }

        


    })

})