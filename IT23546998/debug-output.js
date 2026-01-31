import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');
  
  console.log('\n=== Typing test ===');
  
  const textarea = page.locator('textarea').first();
  await textarea.fill('mama gedhara yanavaa');
  await page.waitForTimeout(2000);
  
  // Find what element shows the output
  console.log('\nLooking for Sinhala output...');
  
  // Try to find elements with Sinhala text
  const allText = await page.locator('body').textContent();
  console.log('\nPage contains:', allText.substring(0, 500));
  
  // Find all divs
  const divs = await page.locator('div').count();
  console.log(`\nNumber of divs: ${divs}`);
  
  // Look for specific patterns
  const possibleOutputs = await page.locator('div[class*="output"], div[class*="result"], div[class*="translation"], pre, code').count();
  console.log(`Possible output elements: ${possibleOutputs}`);
  
  // Get all elements with Sinhala characters
  const sinhalaElements = await page.locator(':text-matches("[\u0D80-\u0DFF]")').count();
  console.log(`Elements with Sinhala text: ${sinhalaElements}`);
  
  if (sinhalaElements > 0) {
    for (let i = 0; i < Math.min(sinhalaElements, 5); i++) {
      const element = page.locator(':text-matches("[\u0D80-\u0DFF]")').nth(i);
      const tagName = await element.evaluate(el => el.tagName);
      const className = await element.getAttribute('class');
      const text = await element.textContent();
      console.log(`\nSinhala Element ${i}:`);
      console.log(`  Tag: ${tagName}`);
      console.log(`  Class: ${className}`);
      console.log(`  Text: ${text?.substring(0, 100)}`);
    }
  }
  
  console.log('\n\nWaiting 20 seconds for you to inspect...');
  await page.waitForTimeout(20000);
  
  await browser.close();
})();
