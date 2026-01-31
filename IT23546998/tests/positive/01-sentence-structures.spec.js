import { test, expect } from '@playwright/test';
import { SwiftTranslatorPage } from '../../utils/SwiftTranslatorPage.js';

test.describe('Positive Tests - Sentence Structures', () => {
  let translatorPage;

  test.beforeEach(async ({ page }) => {
    translatorPage = new SwiftTranslatorPage(page);
    await translatorPage.goto();
  });

  // Simple Sentences
  test('Pos_Fun_0001: Convert simple sentence - going home', async () => {
    const input = 'mama gedhara yanavaa.';
    const expected = 'මම ගෙදර යනවා.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0002: Convert simple sentence - need rice', async () => {
    const input = 'mata bath oonee.';
    const expected = 'මට බත් ඕනේ.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0003: Convert simple sentence - going to school', async () => {
    const input = 'api paasal yanavaa.';
    const expected = 'අපි පාසල් යනවා.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  // Compound Sentences
  test('Pos_Fun_0004: Convert compound sentence with cause', async () => {
    const input = 'mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee.';
    const expected = 'මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0005: Convert compound sentence with two actions', async () => {
    const input = 'api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa.';
    const expected = 'අපි කෑම කන්න යනවා සහ පස්සෙ චිත්‍රපටයකුත් බලනවා.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0006: Convert compound sentence with agreement', async () => {
    const input = 'oyaa hari, ehenam api yamu.';
    const expected = 'ඔයා හරි, එහෙනම් අපි යමු.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  // Complex Sentences
  test('Pos_Fun_0007: Convert complex sentence with condition', async () => {
    const input = 'oya enavaanam mama balan innavaa.';
    const expected = 'ඔය එනවානම් මම බලන් ඉන්නවා.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0008: Convert complex sentence with weather condition', async () => {
    const input = 'vaessa unath api yanna epaeyi.';
    const expected = 'වැස්ස උනත් අපි යන්න එපැයි.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0009: Convert complex sentence with cause-effect', async () => {
    const input = 'mama sunaQQgu vunee maarga thadhabadhaya nisaa.';
    const expected = 'මම සුනංගු වුනේ මාර්ග තදබදය නිසා.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });
});
