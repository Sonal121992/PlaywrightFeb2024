const {test, expect} = require('@playwright/test')

// SImple JS alert ////////////////////////////////////////////////////////////////////////
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

// JS Confirm //////////////////////////////////////////////////////////////////////////////////

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

test('JS Confirm Handle', async({page})=>{ // ===> as per sir instruction
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async cnfrmAlrt=>{
        await expect(cnfrmAlrt.message()).toContain('I am a JS Confirm')
        await expect(cnfrmAlrt.type()).toContain('confirm')
        console.log(cnfrmAlrt.message())
        console.log(cnfrmAlrt.type())
        //cnfrmAlrt.accept() ====> for ok button
        cnfrmAlrt.dismiss() //=====> for cancel button

    })
    await page.locator('button[onclick="jsConfirm()"]').click()
    //await expect(page.locator('#result')).toHaveText('You clicked: Ok')
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel')
    await page.waitForTimeout(4000)
})

// JS Prompt /////////////////////////////////////////////////////////////////////////////////////
test('JS Prompt', async({page})=>{
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

test.only("JS Prompt Handle", async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async prmptAlert=>{
        await expect(prmptAlert.message()).toContain("I am a JS prompt")
        await expect(prmptAlert.type()).toContain('prompt')
        console.log(prmptAlert.message())
        console.log(prmptAlert.type())
        //prmptAlert.accept('Minskole')
        prmptAlert.dismiss()
    })
    await page.getByText('Click for JS Prompt').click()
    //await expect(page.locator('#result')).toHaveText('You entered: Minskole')
    await expect(page.locator('#result')).toHaveText('You entered: null')
    await page.waitForTimeout(4000)
})

// npx playwright test TC09-Alerts.spec.js --headed