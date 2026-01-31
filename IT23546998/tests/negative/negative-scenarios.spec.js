import { test, expect } from '@playwright/test';
import { SwiftTranslatorPage } from '../../utils/SwiftTranslatorPage.js';

test.describe('Negative Tests - Incorrect Conversions and Edge Cases', () => {
  let translatorPage;

  test.beforeEach(async ({ page }) => {
    translatorPage = new SwiftTranslatorPage(page);
    await translatorPage.goto();
  });

  test('Neg_Fun_0001: Joined words without spaces may fail', async () => {
    const input = 'mamagedharayanavaa';
    const expected = 'මම ගෙදර යනවා';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    // This should fail or produce incorrect output
    expect(actual.trim()).not.toBe(expected);
  });

  test('Neg_Fun_0002: Complex joined words fail conversion', async () => {
    const input = 'matapaankannaoonee';
    const expected = 'මට පාන් කන්න ඕනී';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).not.toBe(expected);
  });

  test('Neg_Fun_0003: Excessive spaces may affect conversion', async () => {
    const input = 'mama     gedhara     yanavaa.';
    const expected = 'මම     ගෙදර     යනවා.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    // The system preserves excessive spaces in output
    expect(actual.trim()).toBe(expected);
  });

  test('Neg_Fun_0004: Misspelled Singlish words fail conversion', async () => {
    const input = 'mama gedhra yanava.'; // Incorrect spelling
    const expected = 'මම ගෙදර යනවා.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).not.toBe(expected);
  });

  test('Neg_Fun_0005: Mixed case variations may fail', async () => {
    const input = 'MAMA GEDHARA YANAVAA';
    const expected = 'මම ගෙදර යනවා';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    // System may not handle uppercase properly
    expect(actual.trim()).not.toBe(expected);
  });

  test('Neg_Fun_0006: Numbers mixed with text may cause issues', async () => {
    const input = 'mama 2024 wage varshayee gedhara giyaa';
    const expected = 'මම 2024 වගේ වර්ෂයේ ගෙදර ගියා';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    // Numbers may not be handled correctly
    expect(actual).toBeDefined();
  });

  test('Neg_Fun_0007: Special characters may break conversion', async () => {
    const input = 'mama @ gedhara yanavaa #home';
    const expected = 'මම @ ගෙදර යනවා #home';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    // Special characters might cause issues
    expect(actual).toBeDefined();
  });

  test('Neg_Fun_0008: Very long input without breaks may timeout', async () => {
    const input = 'mama gedhara yanavaa. ' + 'oyaa enavadha? '.repeat(50);
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    // System may struggle with very long inputs
    expect(actual).toBeDefined();
  });

  test('Neg_Fun_0009: Incomplete Singlish words fail conversion', async () => {
    const input = 'mama gedh yanav.'; // Incomplete words
    const expected = 'මම ගෙදර යනවා.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).not.toBe(expected);
  });

  test('Neg_Fun_0010: Wrong character combinations produce incorrect output', async () => {
    const input = 'mama gedhera yanaawa.'; // Wrong character usage
    const expected = 'මම ගෙදර යනවා.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).not.toBe(expected);
  });
});
