import { test, expect } from '@playwright/test';
import { SwiftTranslatorPage } from '../../utils/SwiftTranslatorPage.js';

test.describe('Positive Tests - Greetings, Requests, and Responses', () => {
  let translatorPage;

  test.beforeEach(async ({ page }) => {
    translatorPage = new SwiftTranslatorPage(page);
    await translatorPage.goto();
  });

  // Greetings
  test('Pos_Fun_0023: Convert greeting - ayubowan', async () => {
    const input = 'aayuboovan!';
    const expected = 'ආයුබෝවන්!';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0024: Convert greeting - good morning', async () => {
    const input = 'suba udhaeesanak!';
    const expected = 'සුබ උදෑසනක්!';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0025: Convert greeting question - how are you', async () => {
    const input = 'kohomadha oyaata?';
    const expected = 'කොහොමද ඔයාට?';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  // Requests
  test('Pos_Fun_0026: Convert polite request - can you help', async () => {
    const input = 'mata udhavvak karanna puLuvandha?';
    const expected = 'මට උදව්වක් කරන්න පුළුවන්ද?';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0027: Convert request - please look at that', async () => {
    const input = 'karuNaakaralaa eka poddak balanna.';
    const expected = 'කරුණාකරලා එක පොඩ්ඩක් බලන්න.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0028: Convert request - send my letter to him', async () => {
    const input = 'magee lipinaya eyaata yavanna.';
    const expected = 'මගේ ලිපිනය එයාට යවන්න.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  // Responses
  test('Pos_Fun_0029: Convert response - yes I will do', async () => {
    const input = 'hari, mama karannam.';
    const expected = 'හරි, මම කරන්නම්.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0030: Convert response - yes that is correct', async () => {
    const input = 'ov, eeka hari.';
    const expected = 'ඔව්, ඒක හරි.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0031: Convert response - no I can do that', async () => {
    const input = 'naee, mata eeka karanna puLuvan.';
    const expected = 'නෑ, මට ඒක කරන්න පුළුවන්.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });
});
