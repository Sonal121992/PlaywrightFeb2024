// 15th April 2024
// TC13fileUpload.spec.js

const {test, expect} = require('@playwright/test');
const exp = require('constants');

test('Verify single file Upload in Playwright', async({page})=>{
    await page.goto('https://webdriveruniversity.com/File-Upload/index.html')
    await page.locator('#myFile').setInputFiles('C:\Sonal\Minskole\PlaywrightMaheshSirFeb2024\tests\Upload\FileUplode Demo File 1.pdf')
    page.on('dialog', async simpleAlert =>{
        await expect(simpleAlert.message()).toContain('Your file has now been uploaded!')
        await expect(simpleAlert.type()).toContain('alert')
        await simpleAlert.accept()
    })
    await page.locator('#submit-button').click()
    await expect(page.url()).toContain('https://webdriveruniversity.com/File-Upload/index.html?filename=FileUplode+Demo+File+1.pdf')
    await page.waitForTimeout(3000)
})

// npx playwright test TC13-fileUpload.spec.js --headed