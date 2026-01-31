import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');
  
  console.log('\n=== Finding Output Element ===');
  
  const textarea = page.locator('textarea').first();
  await textarea.fill('mama gedhara yanavaa');
  await page.waitForTimeout(2000);
  
  // Look for the "Sinhala" label and its sibling/child
  const sinhalaLabel = page.locator('text=Sinhala').first();
  const exists = await sinhalaLabel.count();
  console.log(`\nSinhala label exists: ${exists > 0}`);
  
  if (exists > 0) {
    const parent = sinhalaLabel.locator('..');
    const parentTag = await parent.evaluate(el => el.tagName);
    const parentClass = await parent.getAttribute('class');
    console.log(`\nParent of Sinhala label:`);
    console.log(`  Tag: ${parentTag}`);
    console.log(`  Class: ${parentClass}`);
    
    // Get all children
    const children = await parent.locator('> *').count();
    console.log(`  Children count: ${children}`);
    
    for (let i = 0; i < children; i++) {
      const child = parent.locator('> *').nth(i);
      const childTag = await child.evaluate(el => el.tagName);
      const childClass = await child.getAttribute('class');
      const childText = await child.textContent();
      console.log(`\n  Child ${i}:`);
      console.log(`    Tag: ${childTag}`);
      console.log(`    Class: ${childClass}`);
      console.log(`    Text: ${childText?.substring(0, 100)}`);
    }
  }
  
  // Try to find output using data attributes or specific classes
  console.log('\n\n=== Looking for output container ===');
  const outputDivs = await page.locator('div[class*="output"], div[id*="output"], div[class*="result"], div[id*="result"]').count();
  console.log(`Divs with output/result in class/id: ${outputDivs}`);
  
  console.log('\n\nWaiting 20 seconds...');
  await page.waitForTimeout(20000);
  
  await browser.close();
})();
