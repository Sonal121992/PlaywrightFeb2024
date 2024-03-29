const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('Handling Radio buttons in playwright', async({page}) => {
    await page.goto('https://www.demo.guru99.com/test/radio.html')
    await expect(page.locator('input[id="vfb-7-1"]')).not.toBeChecked()
    await page.locator('input[id="vfb-7-1"]').check()
    await expect(page.locator('input[id="vfb-7-1"]')).toBeChecked()
    await page.waitForTimeout(2000)
    await page.locator('input[id="vfb-7-2"]').check()
    await page.waitForTimeout(2000)
    await expect(page.locator('input[id="vfb-7-1"]')).not.toBeChecked()
    await page.locator('input[id="vfb-7-3"]').check()
    await page.waitForTimeout(2000)
    await expect(page.locator('input[id="vfb-7-2"]')).not.toBeChecked()
    await page.locator('input[id="vfb-7-1"]').check()
    await page.waitForTimeout(2000)
    await expect(page.locator('input[id="vfb-7-3"]')).not.toBeChecked()
})

test('Handling checkboxes in playwright', async({page}) => {
    await page.goto('https://www.demo.guru99.com/test/radio.html')
    await expect(page.locator('input[value="checkbox1"]')).not.toBeChecked()
    await page.locator('input[value="checkbox1"]').check()
    await page.waitForTimeout(2000)
    await expect(page.locator('input[value="checkbox1"]')).toBeChecked()
    await page.locator('input[value="checkbox2"]').check()
    await page.waitForTimeout(2000)
    await expect(page.locator('input[value="checkbox2"]')).toBeChecked()
    await page.locator('input[value="checkbox3"]').check()
    await page.waitForTimeout(2000)
    await expect(page.locator('input[value="checkbox3"]')).toBeChecked()
    await page.locator('input[value="checkbox3"]').click()
    await page.waitForTimeout(2000)
    await expect(page.locator('input[value="checkbox3"]')).not.toBeChecked()
    await page.locator('input[value="checkbox2"]').click()
    await page.waitForTimeout(2000)
    await expect(page.locator('input[value="checkbox2"]')).not.toBeChecked()
    await page.locator('input[value="checkbox1"]').click()
    await page.waitForTimeout(2000)
    await expect(page.locator('input[value="checkbox1"]')).not.toBeChecked()

})

test.only("Handling checkboxes using click method", async({page})=>{
    await page.goto("https://www.demo.guru99.com/test/radio.html")
    await page.locator('input[value="checkbox1"]').click()
    await page.waitForTimeout(1000)
    await expect(page.locator('input[value="checkbox1"]')).toBeChecked()
    await page.locator('input[value="checkbox2"]').click()
    await page.waitForTimeout(1000)
    await expect(page.locator('input[value="checkbox2"]')).toBeChecked()
    await page.locator('input[value="checkbox3"]').click()
    await page.waitForTimeout(1000)
    await expect(page.locator('input[value="checkbox3"]')).toBeChecked()
    await page.locator('input[value="checkbox3"]').click()
    await page.waitForTimeout(2000)
    await expect(page.locator('input[value="checkbox3"]')).not.toBeChecked()
    await page.locator('input[value="checkbox2"]').click()
    await page.waitForTimeout(2000)
    await expect(page.locator('input[value="checkbox2"]')).not.toBeChecked()
    await page.locator('input[value="checkbox1"]').click()
    await page.waitForTimeout(2000)
    await expect(page.locator('input[value="checkbox1"]')).not.toBeChecked()
})


// npx playwright test TC03-RadioCheckBox.spec.js --headed