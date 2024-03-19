const {test, expect} = require('@playwright/test')
const exp = require('constants')

test('Verify the login functionality with valid credentials', async({page})=>{
    //AAA =====> Arrangement, Action, Assertion
    // Step 1 ====> Navigate to url
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // Step 2 ===> Enter UserName
    //tagName[attr=value]
    await page.locator('[name="username"]').fill('Admin')
    // Step 3 =====> Enter Password
    await page.locator('[name="password"]').fill('admin123')
    // Step 4 =====> Click on Login button
    await page.locator('[type="submit"]').click()
    await page.waitForTimeout(4000)
    //Step 5 ======> Validation
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toBeVisible()
    await expect(page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toHaveText('Dashboard')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

// npx playwright test TC01-OrangeBasicLogin.spec.js --headed