import { test, expect } from '@playwright/test';
import { SwiftTranslatorPage } from '../../utils/SwiftTranslatorPage.js';

test.describe('Positive Tests - Tense Variations and Mixed Language', () => {
  let translatorPage;

  test.beforeEach(async ({ page }) => {
    translatorPage = new SwiftTranslatorPage(page);
    await translatorPage.goto();
  });

  // Past Tense
  test('Pos_Fun_0032: Convert past tense - I went home yesterday', async () => {
    const input = 'mama iiyee gedhara giyaa.';
    const expected = 'මම ඊයේ ගෙදර ගියා.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  // Present Tense
  test('Pos_Fun_0033: Convert present tense - I am working now', async () => {
    const input = 'mama dhaen vaeda karanavaa.';
    const expected = 'මම දැන් වැඩ කරනවා.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  // Future Tense
  test('Pos_Fun_0034: Convert future tense - I will come tomorrow', async () => {
    const input = 'mama heta enavaa.';
    const expected = 'මම හෙට එනවා.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  // Mixed Language - English terms embedded
  test('Pos_Fun_0035: Convert mixed language with place names', async () => {
    const input = 'Lamayi school yannee vaeen ekee.';
    const expected = 'ළමයි school යන්නේ වෑන් එකේ.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0036: Convert mixed language with Zoom meeting', async () => {
    const input = 'Zoom meeting ekak thiyennee.';
    const expected = 'Zoom meeting එකක් තියෙන්නේ.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0037: Convert mixed with office and traffic', async () => {
    const input = 'nimaali office enna late vennee traffic nisaa.';
    const expected = 'නිමාලි office එන්න late වෙන්නේ traffic නිසා.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });
});
