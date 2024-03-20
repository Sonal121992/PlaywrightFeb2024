const {test, expect} = require('@playwright/test')

test('JS Alert', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog',async simpleALert =>{
        await expect(simpleALert.message()).toContain('I am a JS Alert')
        await expect(simpleALert.type()).toContain('alert')
        await simpleALert.accept()
    })
    //  JS          Playwright
    //SimpleAlert   alert
    //ConfirmALert  confirm
    //PromptAlert   prompt
    await page.locator('button[onclick="jsAlert()"]').click()
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
    await page.waitForTimeout(2000)
})

test('JS Confirm', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async confirmAlert =>{
        await expect(confirmAlert.message()).toContain('I am a JS Confirm')
        await expect(confirmAlert.type()).toContain('confirm')
        await confirmAlert.accept()
    })
    await page.locator('button[onclick="jsConfirm()"]').click('Ok')
    await expect(page.locator('#result')).toHaveText('You clicked: Ok')
    await page.waitForTimeout(2000)
})

test.only('JS Prompt', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async promptAlert =>{
        await expect(promptAlert.message()).toContain('I am a JS prompt')
        await expect(promptAlert.type()).toContain('prompt')
        await promptAlert.accept()
    })
    await page.locator('button[onclick="jsPrompt()"]').click('Ok')
    await expect(page.locator('#result')).toHaveText('You entered:')
    await page.waitForTimeout(3000)
})

// npx playwright test TC09-Alerts.spec.js --headed