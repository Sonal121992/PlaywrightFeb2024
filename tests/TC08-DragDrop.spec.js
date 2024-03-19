const {test, expect} = require('@playwright/test')

test('Drag and Drop using inbuild command for Rome', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const rome = await page.locator('#box6')
    const Italy = await page.locator('#box106')
    await rome.dragTo(Italy)
    expect(await page.locator('#box6')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(5000)
})

test('Drag and Drop using inbuild command for Oslo', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#')
    const Oslo = await page.locator('#box1')
    const Nor = await page.locator('#box101')
    await Oslo.dragTo(Nor)
    expect(await page.locator('#box1')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(3000)
})

test('Drag and Drop using inbuild command for Stockholm', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#')
    const Skh = await page.locator('#box2')
    const swe = await page.locator('#box102')
    await Skh.dragTo(swe)
    expect(await page.locator('#box2')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(3000)
})

test('Drag and Drop using inbuild command for Washington', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#')
    const Washington = await page.locator('#box3')
    const US = page.locator('#box103')
    await Washington.dragTo(US)
    expect(await page.locator('#box3')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(3000)
})

test('Drag and Drop using inbuild command for Copenhagen', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#')
    const Copenhagen = await page.locator('#box4')
    const Den = await page.locator('#box104')
    await Copenhagen.dragTo(Den)
    expect(await page.locator('#box4')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(3000)
})

test('Drag and Drop using inbuild command for Seoul', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#')
    const seoul = await page.locator('#box5')
    const SK = await page.locator('#box105')
    await seoul.dragTo(SK)
    expect(await page.locator('#box5')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(5000)
})

test('Drag and Drop using inbuild command for Madrid', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#')
    const Mad  = await page.locator('#box7')
    const Spain =  await page.locator('#box107')
    await Mad.dragTo(Spain)
    expect(await page.locator('#box7')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(3000)
})

// All drag and drop with command at same time

test('Drag and Drop using inbuild command', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#')
    const Oslo = await page.locator('#box1')
    const Nor = await page.locator('#box101')
    await Oslo.dragTo(Nor)
    expect(await page.locator('#box1')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    const Skh = await page.locator('#box2')
    const swe = await page.locator('#box102')
    await Skh.dragTo(swe)
    expect(await page.locator('#box2')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    const Washington = await page.locator('#box3')
    const US = page.locator('#box103')
    await Washington.dragTo(US)
    expect(await page.locator('#box3')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    const Copenhagen = await page.locator('#box4')
    const Den = await page.locator('#box104')
    await Copenhagen.dragTo(Den)
    expect(await page.locator('#box4')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    const seoul = await page.locator('#box5')
    const SK = await page.locator('#box105')
    await seoul.dragTo(SK)
    expect(await page.locator('#box5')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    const rome = await page.locator('#box6')
    const Italy = await page.locator('#box106')
    await rome.dragTo(Italy)
    expect(await page.locator('#box6')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    const Mad  = await page.locator('#box7')
    const Spain =  await page.locator('#box107')
    await Mad.dragTo(Spain)
    expect(await page.locator('#box7')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(2000)
})

// Mouse Sction Method //////////////////////////////////////////////////////

test('Drag and Drop using Mouse Actions for Rome', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box6').hover()
    await page.mouse.down()
    await page.locator('#box106').hover()
    await page.mouse.up()
    expect(await page.locator('#box6')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(5000)

})

test('Drag and Drop using Mouse Actions for Oslo', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box1').hover()
    await page.mouse.down()
    await page.locator('#box101').hover()
    await page.mouse.up()
    expect(await page.locator('#box1')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(2000)
})

test('Drag and Drop using Mouse Actions for Stockholm', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box2').hover()
    await page.mouse.down()
    await page.locator('#box102').hover()
    await page.mouse.up()
    expect(await page.locator('#box2')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(2000)
})

test('Drag and Drop using Mouse Actions for Washington', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box3').hover()
    await page.mouse.down()
    await page.locator('#box103').hover()
    await page.mouse.up()
    expect(await page.locator('#box3')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(2000)
})

test('Drag and Drop using Mouse Actions for Copenhagen', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box4').hover()
    await page.mouse.down()
    await page.locator('#box104').hover()
    await page.mouse.up()
    expect(await page.locator('#box4')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(2000)
})

test('Drag and Drop using Mouse Action for Seoul', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box5').hover()
    await page.mouse.down()
    await page.locator('#box105').hover()
    await page.mouse.up()
    expect(await page.locator('#box5')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(2000)   
})

test('Drag and Drop using Mouse Action for Madrid', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box7').hover()
    await page.mouse.down()
    await page.locator('#box107').hover()
    await page.mouse.up()
    expect(await page.locator('#box7')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(2000)
})

test('Drag and Drop using Mouse Action', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box1').hover()
    await page.mouse.down()
    await page.locator('#box101').hover()
    await page.mouse.up()
    expect(await page.locator('#box1')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.locator('#box2').hover()
    await page.mouse.down()
    await page.locator('#box102').hover()
    await page.mouse.up()
    expect(await page.locator('#box2')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.locator('#box3').hover()
    await page.mouse.down()
    await page.locator('#box103').hover()
    await page.mouse.up()
    expect(await page.locator('#box3')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.locator('#box4').hover()
    await page.mouse.down()
    await page.locator('#box104').hover()
    await page.mouse.up()
    expect(await page.locator('#box4')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.locator('#box5').hover()
    await page.mouse.down()
    await page.locator('#box105').hover()
    await page.mouse.up()
    expect(await page.locator('#box5')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.locator('#box6').hover()
    await page.mouse.down()
    await page.locator('#box106').hover()
    await page.mouse.up()
    expect(await page.locator('#box6')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.locator('#box7').hover()
    await page.mouse.down()
    await page.locator('#box107').hover()
    await page.mouse.up()
    expect(await page.locator('#box7')).toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(3000)
})

// For wrong drag and drop using inbuild command
test('Wrong Drag and Drop inbuild Command', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const oslo = await page.locator('#box1')
    const Italy = await page.locator('#box106')
    await oslo.dragTo(Italy)
    expect(await page.locator('#box1')).toHaveAttribute('style','visibility: visible;')
    await page.waitForTimeout(2000)
})

test('Wrong Drag and Drop inbuild Command using not', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    const oslo = await page.locator('#box1')
    const Italy = await page.locator('#box106')
    await oslo.dragTo(Italy)
    expect(await page.locator('#box1')).not.toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(2000)
})

// For wrong drag and drop with Mouse Action 
test('Wrong Drag and Drop with Mouse Action', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box1').hover()
    await page.mouse.down()
    await page.locator('#box106').hover()
    await page.mouse.up()
    expect(await page.locator('#box1')).toHaveAttribute('style','visibility: visible;')
    await page.waitForTimeout(2000)
})

// For wrong drag and drop with Mouse Action using not
test.only('Wrong Drag and Drop with Mouse Action using not', async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    await page.locator('#box1').hover()
    await page.mouse.down()
    await page.locator('#box106').hover()
    await page.mouse.up()
    expect(await page.locator('#box1')).not.toHaveAttribute('style','visibility: visible; background-color: rgb(0, 255, 0);')
    await page.waitForTimeout(2000)
})

// npx playwright test TC08-DragDrop.spec.js --headed