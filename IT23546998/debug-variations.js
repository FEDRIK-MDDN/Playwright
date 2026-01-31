const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');
  
  // Test different variations
  const tests = [
    { input: 'Lamayi school yannee vaeen ekee.', desc: 'Original - mixed' },
    { input: 'lamayi school yannee vaeen ekee.', desc: 'Lowercase school' },
    { input: 'lamayi iskole yannee vaeen ekee.', desc: 'iskole instead of school' },
    { input: 'mama gedhara yanavaa.', desc: 'Simple working test' },
  ];
  
  for (const test of tests) {
    console.log(`\n=== ${test.desc} ===`);
    console.log(`Input: ${test.input}`);
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('div.whitespace-pre-wrap.overflow-y-auto');
    
    await inputField.clear();
    await page.waitForTimeout(500);
    await inputField.fill(test.input);
    await page.waitForTimeout(5000);
    
    const output = await outputField.textContent() || '';
    console.log(`Output: "${output.trim()}"`);
  }
  
  console.log('\n=== Complete - Check browser window ===');
  await page.waitForTimeout(30000);
  await browser.close();
})();
