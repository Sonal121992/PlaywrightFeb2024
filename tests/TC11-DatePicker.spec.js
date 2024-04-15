//10th April 2024
// TC11DatePicker.spec.js

const{test, expect} = require('@playwright/test');

// Write a program to get current date

// test('Verify date picker functionality in playwright using js object', async({page})=>{
//     await page.goto('https://webdriveruniversity.com/Datepicker/index.html')
//     const date = new Date()
//     date.setDate(date.getDate())
//     let d = date.getDate() //current Date
//     //let month = date.getMonth() //current month Index
//     //let month = date.getMonth() + 1 // to get proper month in number
//     //let month = date.toLocaleString('default',{month:'short'})//Current month in short string (Apr)
//     let month = date.toLocaleString('default',{month:'long'})//Current month in full string(April)
//     let m = `${0}${month}`
//     let year = date.getFullYear()
//     console.log(d)
//     console.log(month)
//     console.log(year)
//     console.log(d + " " + month + " " +year) //10 April 2024
// })

// //   0    1   2    3    4   5    6    7    
// // Jan feb march april may june july aug

// // when asked for normal date we with line 11 =====> d =10, month =3 , year = 2024 ===> month 3 because it is as per index
// // when asked for normal date month as number with line 12 ===> d = 10, month = 4, year = 2024 ====> month as 4 because we added 1
// // when asked for short date with line 13 ===> d = 10, month = Apr, Year = 2024 ===> here we get month in short as Apr
// // when asked for long date with line 14 ====> d = 10, month = April, year = 2024 ===> here we get month in long as April

// Write a program to get future date

// test('Verify date picker functionality in playwright for future date using js object', async({page})=>{
//     await page.goto('https://webdriveruniversity.com/Datepicker/index.html');
//     const date = new Date();
//     date.setDate(date.getDate()+300);
//     let d = date.getDate(); // current date
//     //let mnth = date.getMonth() // current month index
//     //  0   1   2      3    4   5    6    7   8    9   10  11
//     // Jan Feb March April May June July Aug Sept Oct Nov Dec
//     //let mnth = date.toLocaleString('default',{month:'short'})//Current month in short string (Apr)
//     let mnth = date.toLocaleString('default',{month:'long'});//Current month in long string (April)
//     //let mnth = date.getMonth() + 1 // Current month in number
//     //let m = `${0}${mnth}` //current month with zero
//     let year = date.getFullYear();
//     console.log(d);
//     console.log(mnth);
//     console.log(year);
//     // DD/MM/YYYY
//     let FutureDate = `${d} ${mnth} ${year}`;
//     console.log(FutureDate);
//     await page.locator('#datepicker').click();
//     while(true){
//         let monthyear = await page
//         .locator('[class="datepicker-switch"]')
//         .first()
//         .textContent();
//         if(monthyear === `${mnth}${year}`){
//             break;
//         }
//         await page.locator('[class="next"]').first().click();
//         //console.log(monthyear)
//     }
//     const dayCount = await page.locator('[class="day"]').count();
//     console.log(dayCount);
//     await page.waitForTimeout(4000);
//     for(let i = 0; i < dayCount; i++){
//         let text = await page.locator('[class="day"]').nth(i).textContent();
//         console.log(text);
//         if(text == d){
//             await page.locator('[class="day"]').nth(i).click();
//             break;
//         }
//     }
//     await page.waitForTimeout(3000);
// });


test("Verify date Picker functionality in playwright using js object", async ({
    page,
  }) => {
    await page.goto("https://webdriveruniversity.com/Datepicker/index.html");
    const date = new Date();
    date.setDate(date.getDate() + 300);
    let d = date.getDate(); //Current Date
    //let mnt = date.getMonth()// Current month Index
    //0    1    2     3    4    5   6
    //Jan feb march April May June July
    //let mnt = date.toLocaleString('default',{month:'short'}) // Cureent month in short string (Apr)
    let mnt = date.toLocaleString("default", { month: "long" }); // Cureent month in full string (April)
    // let mnt = date.getMonth() + 1 //Current month in number
    // let m = `${0}${mnt}` // current month with zero
    let year = date.getFullYear();
    console.log(d);
    console.log(mnt);
    console.log(year);
    //DD/MM/YYYY
    let FutureDate = `${d} ${mnt} ${year}`;
    console.log(FutureDate);
    await page.locator("#datepicker").click();
    while (true) {
      let monthyear = await page
        .locator('[class="datepicker-switch"]')
        .first()
        .textContent();
      if (monthyear === `${mnt} ${year}`) {
        break;
      }
      await page.locator('[class="next"]').first().click();
      // console.log(monthyear)
    }
    const dayCount = await page.locator('[class="day"]').count();
    console.log(dayCount);
    await page.waitForTimeout(4000);
    for (let i = 0; i < dayCount; i++) {
      let text = await page.locator('[class="day"]').nth(i).textContent();
      console.log(text);
      if (text == d) {
        await page.locator('[class="day"]').nth(i).click();
        break;
      }
    }
    await page.waitForTimeout(3000);
  });

  test.only("Verify Picker tried by me",async({page,})=>{
    await page.goto("https://webdriveruniversity.com/Datepicker/index.html");
    const date = new Date();
    date.setDate(date.getDate()+300);
    let d = date.getDate(); 
    let mnth = date.toLocaleString("default",{month:"long"});
    let year = date.getFullYear();
    console.log(d);
    console.log(mnth);
    console.log(year);
    let FutureDate = `${d} ${mnth} ${year}`;
    console.log(FutureDate);
    await page.locator("#datepicker").click();
    while(true){
        let monthyear = await page.locator('[class="datepicker-switch"]').first().textContent();
        if(monthyear === `${mnth} ${year}`){
            break;
        }
        await page.locator('[class="next"]').first().click();
        console.log(monthyear)
    }
    const dayCount = await page.locator('[class="day"]').count();
    console.log(dayCount);
    await page.waitForTimeout(4000);
    for (let i = 0; i < dayCount; i++){
        let text = await page.locator('[class="day"]').nth(i).textContent();
        console.log(text);
        if(text == d){
            await page.locator('[class="day"]').nth(i).click();
            break;
        }
    }
    await page.waitForTimeout(3000);
  });

// npx playwright test TC11-DatePicker.spec.js --headed