import { test, expect } from '@playwright/test';
import { SwiftTranslatorPage } from '../../utils/SwiftTranslatorPage.js';

test.describe('UI Tests - Real-time Behavior and Interface', () => {
  let translatorPage;

  test.beforeEach(async ({ page }) => {
    translatorPage = new SwiftTranslatorPage(page);
    await translatorPage.goto();
  });

  test('Pos_UI_0001: Sinhala output updates automatically in real-time', async ({ page }) => {
    const input = 'man gedhara yanavaa';
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('div.whitespace-pre-wrap.overflow-y-auto');
    
    await inputField.clear();
    await inputField.fill(input);
    
    // Wait for output with retries (up to 20 seconds)
    let finalOutput = '';
    for (let i = 0; i < 40; i++) {
      await page.waitForTimeout(500);
      finalOutput = await outputField.textContent() || '';
      if (finalOutput.trim().length > 0) break;
    }
    
    // Verify output appears
    expect(finalOutput.trim()).toBeTruthy();
    expect(finalOutput.trim().length).toBeGreaterThan(0);
    
    // Verify it's Sinhala script (Unicode range 0D80-0DFF)
    expect(finalOutput).toMatch(/[\u0D80-\u0DFF]/);
  });

  test('Pos_UI_0002: Clear input clears output automatically', async ({ page }) => {
    const input = 'mama gedhara yanavaa';
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('div.whitespace-pre-wrap.overflow-y-auto');
    
    // Enter text
    await inputField.clear();
    await inputField.fill(input);
    
    // Wait for output with retries (up to 20 seconds)
    let output = '';
    for (let i = 0; i < 40; i++) {
      await page.waitForTimeout(500);
      output = await outputField.textContent() || '';
      if (output.trim().length > 0) break;
    }
    
    // Verify output exists
    expect(output.length).toBeGreaterThan(0);
    
    // Clear input
    await inputField.clear();
    await page.waitForTimeout(1000);
    
    // Verify output is also cleared
    output = await outputField.textContent() || '';
    expect(output.trim().length).toBe(0);
  });

  test('Neg_UI_0001: Empty input should not produce output', async ({ page }) => {
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('div.whitespace-pre-wrap.overflow-y-auto');
    
    // Ensure input is empty
    await inputField.clear();
    await page.waitForTimeout(500);
    
    // Check output field
    const output = await outputField.textContent() || '';
    expect(output.trim().length).toBe(0);
  });

  test('Pos_UI_0003: Output field is visible and accessible', async ({ page }) => {
    const outputField = page.locator('div.whitespace-pre-wrap.overflow-y-auto');
    
    await expect(outputField).toBeVisible();
    await expect(outputField).toBeAttached();
  });

  test('Pos_UI_0004: Multiple rapid inputs update correctly', async ({ page }) => {
    const inputs = ['mama', 'mama gedhara', 'mama gedhara yanavaa'];
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('div.whitespace-pre-wrap.overflow-y-auto');
    
    for (const input of inputs) {
      await inputField.clear();
      await inputField.fill(input);
      
      // Wait for output with retries (up to 20 seconds)
      let output = '';
      for (let i = 0; i < 40; i++) {
        await page.waitForTimeout(500);
        output = await outputField.textContent() || '';
        if (output.trim().length > 0) break;
      }
      
      expect(output.length).toBeGreaterThan(0);
    }
  });
});
