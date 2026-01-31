import { test, expect } from '@playwright/test';
import { SwiftTranslatorPage } from '../../utils/SwiftTranslatorPage.js';

test.describe('Positive Tests - Positive and Negative Forms', () => {
  let translatorPage;

  test.beforeEach(async ({ page }) => {
    translatorPage = new SwiftTranslatorPage(page);
    await translatorPage.goto();
  });

  // Positive Forms
  test('Pos_Fun_0017: Convert positive form - I do that', async () => {
    const input = 'mama ehema karanavaa.';
    const expected = 'මම එහෙම කරනවා.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0018: Convert positive form - we come tomorrow', async () => {
    const input = 'api heta enavaa.';
    const expected = 'අපි හෙට එනවා.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0019: Convert positive form - you said correctly', async () => {
    const input = 'oyaa eeka hariyata kiyavalaa.';
    const expected = 'ඔයා ඒක හරියට කියවලා.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  // Negative Forms
  test('Pos_Fun_0020: Convert negative form - I dont do that', async () => {
    const input = 'mama ehema karannee naehae.';
    const expected = 'මම එහෙම කරන්නේ නැහැ.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0021: Convert negative form - we dont come tomorrow', async () => {
    const input = 'api heta ennee naehae.';
    const expected = 'අපි හෙට එන්නේ නැහැ.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0022: Convert negative form - you didnt say correctly', async () => {
    const input = 'oyaa eeka hariyata kiyavalaa naehae.';
    const expected = 'ඔයා ඒක හරියට කියවලා නැහැ.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });
});
