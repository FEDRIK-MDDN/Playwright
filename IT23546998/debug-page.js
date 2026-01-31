import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');
  
  console.log('\n=== Page Analysis ===');
  
  // Find all textareas
  const textareas = await page.locator('textarea').count();
  console.log(`\nNumber of textareas: ${textareas}`);
  
  // Find all inputs
  const inputs = await page.locator('input').count();
  console.log(`Number of inputs: ${inputs}`);
  
  // Find all divs with contenteditable
  const editableDivs = await page.locator('div[contenteditable]').count();
  console.log(`Number of contenteditable divs: ${editableDivs}`);
  
  // Get all textareas details
  for (let i = 0; i < textareas; i++) {
    const textarea = page.locator('textarea').nth(i);
    const placeholder = await textarea.getAttribute('placeholder');
    const id = await textarea.getAttribute('id');
    const className = await textarea.getAttribute('class');
    console.log(`\nTextarea ${i}:`);
    console.log(`  ID: ${id}`);
    console.log(`  Class: ${className}`);
    console.log(`  Placeholder: ${placeholder}`);
  }
  
  console.log('\n\nWaiting 30 seconds for you to inspect...');
  await page.waitForTimeout(30000);
  
  await browser.close();
})();
