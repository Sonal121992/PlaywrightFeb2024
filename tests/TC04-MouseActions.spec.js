// doubleClick
// rightClick
// mouseOver

const {test, expect} = require('@playwright/test')

test('Verify Double Click in Playwright', async({page})=>{
    await page.goto('https://demoqa.com/buttons')
    await page.locator('button[id="doubleClickBtn"]').dblclick()
    await expect(page.locator("#doubleClickMessage")).toBeVisible()
    await expect(page.locator('#doubleClickMessage')).toHaveText("You have done a double click")
})

test('Verify Right Click in Playwright', async({page})=>{
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#rightClickBtn').click({button:'right'})
    await expect(page.locator('#rightClickMessage')).toBeVisible()
    await expect(page.locator('[id="rightClickMessage"]')).toHaveText('You have done a right click')
    await page.waitForTimeout(4000)
})

test('Verify Click in Playwright', async({page})=>{
    await page.goto('https://demoqa.com/buttons')
    await page.locator('button[class="btn btn-primary"]').nth(2).click()
    await expect(page.locator('#dynamicClickMessage')).toBeVisible()
    await expect(page.locator('p[id="dynamicClickMessage"]')).toHaveText('You have done a dynamic click')
    await page.waitForTimeout(5000)
})

test('Verify the 3rd Mouse Hover Action in Playwright', async({page})=>{
    await page.goto('https://webdriveruniversity.com/Actions/index.html')
    await page.getByText('Hover Over Me Third!').hover()
    await page.getByText('Link 1').nth(2).click()
    page.on('dialog',async simpleAlert => {
        await expect(simpleAlert.message()).toContain('Well done you clicked on the link!')
        await simpleAlert.accept()
    })
    await page.waitForTimeout(4000)
})

test('Verify the 1st Mouse Hover Action in Playwright', async({page})=>{
    await page.goto('https://webdriveruniversity.com/Actions/index.html')
    await page.getByText('Hover Over Me First!').hover()
    await page.getByText('Link 1').first().click()
    page.on('dialog', async simpleAlert => {
        await expect(simpleAlert.message()).toContain('Well done you clicked on the link!')
        await simpleAlert.accept()
    })
})

test.only('Verify the 2nd Mouse Hover Action in Playwright', async({page})=>{
    await page.goto('https://webdriveruniversity.com/Actions/index.html')
    await page.getByText('Hover Over Me Second!').hover()
    await page.getByText('Link 1').nth(1).click()
    page.on('dialog', async simpleAlert => {
        await expect(simpleAlert.message()).toContain('Well done you clicked on the link!')
        await simpleAlert.accept()
    })
})

// npx playwright test TC04-MouseActions.spec.js --headed