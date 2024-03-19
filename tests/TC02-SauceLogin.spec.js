const {test, expect} = require('@playwright/test')
const exp = require('constants')

test('Verify login functionality with valid credentials', async({page})=>{
    //step1 ===> navigate to url
    await page.goto("https://www.saucedemo.com/")
    //step2 ===> Enter Username
    await page.locator('[id="user-name"]').fill('standard_user')
    //step3 ===> Enter Password
    await page.locator('[id="password"]').fill('secret_sauce')
    //step4 ===> click on login button
    await page.locator('[id="login-button"]').click()
    await page.waitForTimeout(4000)
    //step5 ====> assertion/validation
    await expect(page.locator('span[class="title"]')).toHaveText('Products')
    await expect(page.locator('[class="shopping_cart_link"]')).toBeVisible
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(page).toHaveTitle('Swag Labs')
    await expect(page.locator('div[class="app_logo"]')).toHaveText('Swag Labs')
})

test('Verify login functionality with Invalid Credentails', async({page})=>{
    //step1 ===> navigate to url
    await page.goto("https://www.saucedemo.com/")
    //step2 ===> ENter Incorrect Username
    await page.locator('[id="user-name"]').fill('standard_user1')
    //step3 ===> ENter Password
    await page.locator('[id="password"]').fill('secret_sauce')
    //step4 ===> click on login button
    await page.locator('[id="login-button"]').click()
    await page.waitForTimeout(4000)
    //step5 ===> assetion/validation
    await expect(page.locator('h3[data-test="error"]')).toBeVisible
    await expect(page.locator('[class="error-button"]')).toBeVisible
    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
})

test.only('Verify locked user functionality', async({page})=>{
    //step1 ===> navigate to url
    await page.goto("https://www.saucedemo.com/")
    //step2 ===> ENter Incorrect Username
    await page.locator('[id="user-name"]').fill('locked_out_user')
    //step3 ===> ENter Password
    await page.locator('[id="password"]').fill('secret_sauce')
    //step4 ===> click on login button
    await page.locator('[id="login-button"]').click()
    await page.waitForTimeout(4000)
    //step5 ===> assetion/validation
    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.')
})

// npx playwright test TC02-SauceLogin.spec.js --headed