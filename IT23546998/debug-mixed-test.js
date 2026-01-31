const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');
  
  const inputs = [
    'Lamayi school yannee vaeen ekee.',
    'Zoom meeting ekak thiyennee.',
    'nimaali office enna late vennee traffic nisaa.'
  ];
  
  for (const input of inputs) {
    console.log(`\n=== Testing: ${input} ===`);
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('div.whitespace-pre-wrap.overflow-y-auto');
    
    await inputField.clear();
    await inputField.fill(input);
    
    // Wait progressively longer
    for (let i = 1; i <= 6; i++) {
      await page.waitForTimeout(1000);
      const output = await outputField.textContent() || '';
      console.log(`After ${i}s: "${output.trim()}"`);
      if (output.trim().length > 0) break;
    }
  }
  
  console.log('\n=== Press Enter to close ===');
  await new Promise(resolve => process.stdin.once('data', resolve));
  await browser.close();
})();
