import{test,expect} from '@playwright/test';
import path from 'path'

test('fileupload',async({page})=>{
    await page.goto("https://testpages.eviltester.com/pages/files/file-upload/");

    const filepath=path.join(__dirname,'uploads','12.pdf');
    await page.setInputFiles('#fileinput',filepath);
    await page.waitForTimeout(5000);



})