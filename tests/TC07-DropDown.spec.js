// static dropdown
// dynamic dropdown

const {test, expect} = require('@playwright/test')

// static dropdown

test('Verify static dropdown in playwright', async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption('3')
    await expect(page.locator('p[class="subtitle"]')).toBeVisible()
    await expect(page.locator('p[class="subtitle"]')).toHaveText('You have selected Banana')
    await page.locator('#superheros').selectOption('mm')
    await expect(page.locator('p[class="subtitle"]').last()).toBeVisible()
    await expect(page.locator('p[class="subtitle"]').last()).toHaveText('You have selected Marvelman')
    await page.locator('#lang').selectOption('js')
    await expect(page.locator('p[class="subtitle"]').last()).toBeVisible()
    await expect(page.locator('p[class="subtitle"]').last()).toHaveText('You have selected JavaScript')
    await page.locator('#country').selectOption('India')
    await expect(page.locator('#country')).toHaveValue('India')
    await page.waitForTimeout(2000)
})

//  dynamic dropdown

test.only('Verify dynamic dropdown with redbus in playwright', async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Nagpur',{delay:2000})// delay is optional
    await page.waitForSelector('.placeHolderMainText')
    let optionCount = await page.locator('.placeHolderMainText').count()
    // let text = await (await page.locator('.placeHolderMainText')).last().textContent()
    // console.log(text)
    for(let i=2; i<optionCount; i++){
        let text1 = await page.locator('.placeHolderMainText').nth(i).textContent()
        console.log(text1)
        if(text1 == 'Dharampeth'){
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(5000)
})

test.only('Verify dynamic dropdown with redbus website in playwright', async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator('#dest').fill('pune',{delay:2000})
    await page.waitForSelector('.placeHolderMainText')
    let destCount = await page.locator('.placeHolderMainText').count()
    console.log(destCount)
    for (let i=0; i<destCount; i++){
        let text2 = await page.locator('.placeHolderMainText').nth(i).textContent()
        console.log(text2)
        if(text2 == 'Wakad'){
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(5000)
    let dest = await page.locator('text[class="placeHolderMainText"]')
    await expect(dest).toHaveText('Wakad')
})


//npx playwright test TC07-DropDown.spec.js --headed  