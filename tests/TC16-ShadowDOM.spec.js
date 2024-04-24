// 24Th April 2024

// ShadowDom.spec.js
// In shadow type of coding we cannot find the element directly 
// Even if we search that element we cannot get it
// Just moving the select inspect arrow we can get the inspected code for that particular item

const { test, expect } = require("@playwright/test")

test('ShadowDOM', async({page})=>{
    await page.goto('https://books-pwakit.appspot.com/')
    await page.locator('#input').fill('Sonal')
    await page.waitForTimeout(3000)
})

// npx playwright test TC16-ShadowDOM.spec.js --headed
