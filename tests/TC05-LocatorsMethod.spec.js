const {test, expect} = require('@playwright/test')


// getByAltText
// getByLabel
// getByPlaceholder
// getByRole
// getByTestID
// getByText
// getByTitle

// getByAltText

test("Verify getByAltText method in playwright", async({page})=>{
    await page.goto("https://letcode.in/test#google_vignette")
    let ele = await page.getByAltText('letcode')
    await expect(page.getByAltText('letcode')).toBeVisible()
    await expect(ele).toBeVisible()
})

// getByLabel

test("Verify getByLabel method in playwright", async({page})=>{
    await page.goto("https://letcode.in/test#google_vignette")
    let ele1 = await page.getByLabel('main navigation')
    await expect(ele1).toBeVisible()
    let ele2 = await page.getByLabel("Advertisement").first() // since here we have two "Advertisement" so we are using array method that is we are finding by index first()
    await expect(ele2).toBeVisible()
})

// getByPlaceholder

test("Verify getByPlaceholder method in playwright", async({page})=>{
    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    await page.getByPlaceholder("First Name").fill('sonal') // in placeholder we have to write
    await page.waitForTimeout(4000)
})

// getbyRole

test("Verify getByRole method in playwright", async({page})=>{
    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    let ele3 = await page.getByRole("navigation")
    await expect(ele3).toBeVisible()
})

test("Verify getByRole method in plauwright", async({page})=>{
    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    await page.getByRole('checkbox',{name:"Option 1"}).check()
    await page.waitForTimeout(2000)
})

// getByText

test("Verify getByText method in playwright", async({page})=>{
    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    let ele4 = await page.getByText("WebdriverUniversity.com (Dropdown Menu(s), Checkboxe(s), Radio Button(s))")
    await expect(ele4).toBeVisible()
})


test.only('Verify getByText method in playwright WebdriverUniversity',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    let ele3 = await page.getByText('WebdriverUniversity.com (Dropdown Menu(s), Checkboxe(s), Radio Button(s))')
    await expect(ele3).toBeVisible()
    await expect(page.getByText('WebdriverUniversity.com (Dropdown Menu(s), Checkboxe(s), Radio Button(s))')).toBeVisible()
})

// getByTitle

test("Verify getByTitle method in playwright", async({page})=>{
    await page.goto('https://letcode.in/radio')
    let ele6 = await page.getByTitle('Koushik Chatterjee')
    await expect(ele6).toHaveText('Koushik Chatterjee')
    await expect(ele6).toBeVisible()
    let ele7 = await page.getByTitle('Advertisement').first()
    await expect(ele7).toBeVisible()
})

//getByTestID

test("Verify getByTestID method in playwright", async({page})=>{
    await page.goto("https://www.atlassian.com/")
    let ele8 = await page.getByTestId("global-nav-search-icon")
    await expect(ele8).toBeVisible()

})

//npx playwright test TC05-LocatorsMethod.spec.js --headed