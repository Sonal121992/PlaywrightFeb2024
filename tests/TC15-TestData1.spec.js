// 24th April 

// in the Normal way we do this

const { test, expect } = require("@playwright/test")

test('Verify contactUs form using Normal Data', async({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('input[name="first_name"]').fill('sonal')
    await page.locator('input[name="last_name"]').fill('khante')
    await page.locator('input[name="email"]').fill('sonalkhante@gmail.com')
    await page.locator('textarea[name="message"]').fill('I am learning Playwright')
    await page.locator('input[value="SUBMIT"]').click()
    await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
})

// npx playwright test TC15-TestData1.spec.js --headed