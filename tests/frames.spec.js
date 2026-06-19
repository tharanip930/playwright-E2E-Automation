import { test, expoert } from '@playwright/test';

test.describe('frames', async () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://testpages.eviltester.com/pages/embedded-pages/frames/");
        await page.waitForLoadState('domcontentloaded');
    })
    test('length', async ({ page }) => {
        // No of frames present in page;
        const NoOfFrames = page.frames();
        console.log(`No of frames are:${NoOfFrames.length}`);
        NoOfFrames.forEach(frame =>
        {
            console.log(frame.url());
        })


    })
    // test('urllist', async ({ page }) => {
    //     const NoOfFrames = page.frames();
        
    // })






})