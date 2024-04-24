//24th April 2024

// without using arrow function import data from other folder

const { customTest } = require("./TestData/Data");

customTest('Verify ContactUs page using JS file data', async({test, testContactUsForm})=>{ 
    // Here we have put customTest instead of normal Test
    // and test is defined above with constant with customTest
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('inputname="first_name"').fill(testContactUsForm.firstName)
    await page.locator('inputname="last_name"').fill(testContactUsForm.lastName)
    await page.locator('input[name="email"]').fill(testContactUsForm.email)
    await page.locator('textarea[name="message"]').fill(testContactUsForm.msg)
    await page.locator('input[type="submit"]').click()
    await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
})

// npx playwright test TC15-TestData3.spec.js --headed