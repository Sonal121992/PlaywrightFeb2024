// 24th April 2024

const { test, expect } = require("@playwright/test");

const data = require('../tests/TestData/ContactUSData.json');

// test('Verify contactUS form using Fixture Data', async({page})=>{
//     await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
//     await page.locator('input[name="first_name"]').fill(data.firstName)
//     await page.locator('input[name="last_name"]').fill(data.lastName)
//     await page.locator('input[name="email"]').fill(data.email)
//     await page.locator('textarea[name="message"]').fill(data.msg)
//     await page.locator('input[type="submit"]').click()
//     await expect(page.locator('h1')).toHaveText('Thank You for your Message')
// }) // This test can't run  as we have not define the varaiv=ble just for particular set of code


// Using the arrow function extract the data stored in other folder
data.forEach(element =>{
    test(`Verify contactUS form using multiple dataset ${element.firstName}`, async({page})=>{
        await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
        await page.locator('input[name="first_name"]').fill(element.firstName)
        await page.locator('input[name="last_name"]').fill(element.lastName)
        await page.locator('input[name="email"]').fill(element.email)
        await page.locator('textarea[name="message"]').fill(element.msg)
        await page.locator('input[type="submit"]').click()
        await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
    })
})

// npx playwright test TC15-TestData2.spec.js --headed