
import {test} from "@playwright/test"

test('qspider demo ', async ({page}) => { 
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')

    await page.locator('//input[@id="name"]').fill("chaithanya")
    await page.locator('//input[@id="email"]').fill("chai123@gmail.com")
    await page.locator('//input[@id="password"]').fill("12345678")
    await page.locator('//button[@type="submit"]').click()
    await page.waitForTimeout(1000) 
   
    await page.locator('//input[@id="email"]').fill("chai123@gmail.com")
    await page.locator('//input[@id="password"]').fill("12345678")
    await page.locator('//button[@type="submit"]').click()
    await page.waitForTimeout(1000) 
    
 })

