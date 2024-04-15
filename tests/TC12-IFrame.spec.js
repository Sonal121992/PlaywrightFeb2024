// 11th April 2024
//TC12Iframe.spec.js

const{test, expect} = require("@playwright/test");

// 1st way by using .framelocator
test("Handling Iframe with .frameLocator in playwright", async({page})=>{
    await page.goto('https://letcode.in/frame')
    //await page.locator('[name="fname"]').fill('Minskole') ===> This is not detected because this form is present inside the frame 
    // so we have search the frame first then go inside the form elements
    const frame1 = await page.frameLocator('iframe[src="frameUI"]')
    await frame1.locator('input[name="fname"]').fill('Sonal')
    await frame1.locator('input[name="lname"]').fill('Khante')
    expect(frame1.locator('input[name="fname"]')).toBeVisible()
    await page.waitForTimeout(4000)
})

// 2nd way by using .frame method name attribute
test('Handling Iframe with .frame method in playwright', async({page})=>{
    await page.goto('https://letcode.in/frame')
    const frame2 = await page.frame('firstFr')
    await frame2.locator('[name="fname"]').fill('Sonal')
    await frame2.locator('[name="lname"]').fill('Khante')
    expect(frame2.locator('[name="fname"]')).toBeVisible()
    await page.waitForTimeout(2000)
})

// 3rd way by using .frame method by URL
test.only('Handling Iframe with .frame method using URL in playwright', async({page})=>{
    await page.goto('https://letcode.in/frame')
    const frame3 = await page.frame({url: 'https://letcode.in/frameUI'})
    await frame3.locator('input[name="fname"]').fill('Sonal')
    await frame3.locator('input[name="lname"]').fill('Khante')
    expect(frame3.locator('input[name="fname"]')).toBeVisible()
    await page.waitForTimeout(2000)
})


//  npx playwright test TC12-IFrame.spec.js --headed