//28th March 2024

const { test,expect } = require("@playwright/test")

test('Verify datepicker using playwright',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#datepicker').fill('29-03-2024')
    await page.waitForTimeout(2000)
})

test('Handle the datepicker using calendar with playwright',async({page})=>{
    await page.goto('https://www.webdriveruniversity.com/Datepicker/index.html')
    const year = '2025'
    const month = 'September'
    const date = '12'
    await page.locator('[id="datepicker"]').click()
    console.log(`${month} ${year}`) //12 September 2025

    while(true){
        let monthyear = await page.locator('[class="datepicker-switch"]').first().textContent()
        if(monthyear === `${month} ${year}`){
            break
        }
        await page.locator('[class="next"]').first().click()
        console.log(monthyear)
    }
    await page.waitForTimeout(3000)
})

test.only('Practice Calendar', async({page})=>{
    await page.goto('https://www.webdriveruniversity.com/Datepicker/index.html')
    const year = '2025'
    const month = 'September'
    const date = '12'
    await page.locator('#datepicker').click()
    console.log(`${month} ${year}`)

    while(true){
        let monthyr = await page.locator('[class="datepicker-switch"]').first().textContent()
        if(monthyr === `${month} ${year}`){
            break
        }
        await page.locator('[class="next"]').first().click()
    }
    await page.waitForTimeout(6000)
})

// npx playwright test TC10-Calendar.spec.js --headed