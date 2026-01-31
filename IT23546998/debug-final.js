import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');
  
  console.log('\n=== Testing Translation ===\n');
  
  const textarea = page.locator('textarea').first();
  await textarea.fill('mama gedhara yanavaa');
  console.log('Typed input...');
  await page.waitForTimeout(3000);
  
  // Screenshot for reference
  await page.screenshot({ path: 'debug-screenshot.png', fullPage: true });
  console.log('Screenshot saved to debug-screenshot.png');
  
  // Get the HTML structure around where the output should be
  const bodyHTML = await page.locator('body').innerHTML();
  const fs = await import('fs');
  fs.writeFileSync('debug-page.html', bodyHTML);
  console.log('HTML saved to debug-page.html');
  
  // Try to find any element with the expected Sinhala output
  const expectedOutput = 'මම ගෙදර යනවා';
  const elementWithOutput = page.locator(`text="${expectedOutput}"`);
  const count = await elementWithOutput.count();
  console.log(`\nElements containing "${expectedOutput}": ${count}`);
  
  if (count > 0) {
    const element = elementWithOutput.first();
    const tag = await element.evaluate(el => el.tagName);
    const className = await element.getAttribute('class');
    const id = await element.getAttribute('id');
    console.log(`\nOutput element found!`);
    console.log(`  Tag: ${tag}`);
    console.log(`  Class: ${className}`);
    console.log(`  ID: ${id}`);
    
    // Get parent info
    const parent = element.locator('..');
    const parentTag = await parent.evaluate(el => el.tagName);
    const parentClass = await parent.getAttribute('class');
    const parentId = await parent.getAttribute('id');
    console.log(`\nParent element:`);
    console.log(`  Tag: ${parentTag}`);
    console.log(`  Class: ${parentClass}`);
    console.log(`  ID: ${parentId}`);
  }
  
  console.log('\n\nCheck the files and press Ctrl+C to exit...');
  await page.waitForTimeout(60000);
  
  await browser.close();
})();
