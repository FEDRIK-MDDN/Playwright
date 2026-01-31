const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');
  
  const tests = [
    'Lamayi school yannee vaeen ekee.',
    'lamayi school yannee vaeen ekee.',
    'Lamayi school yannee vaan ekee.',
    'lamayi school yannee vaan ekee.',
  ];
  
  for (const input of tests) {
    console.log(`\n=== Testing: ${input} ===`);
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('div.whitespace-pre-wrap.overflow-y-auto');
    
    await inputField.clear();
    await page.waitForTimeout(500);
    await inputField.fill(input);
    await page.waitForTimeout(6000);
    
    const output = await outputField.textContent() || '';
    console.log(`Output: "${output.trim()}"`);
  }
  
  await browser.close();
})();
