import { test, expect } from '@playwright/test';
import { SwiftTranslatorPage } from '../../utils/SwiftTranslatorPage.js';

test.describe('Positive Tests - Interrogative and Imperative Forms', () => {
  let translatorPage;

  test.beforeEach(async ({ page }) => {
    translatorPage = new SwiftTranslatorPage(page);
    await translatorPage.goto();
  });

  // Interrogative Forms (Questions)
  test('Pos_Fun_0010: Convert interrogative form - how are you', async () => {
    const input = 'oyaata kohomadha?';
    const expected = 'ඔයාට කොහොමද?';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0011: Convert interrogative form - when will you come', async () => {
    const input = 'oyaa kavadhdha enna hithan inne?';
    const expected = 'ඔයා කවද්ද එන්න හිතන් ඉන්නේ?';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0012: Convert interrogative form - does this work correctly', async () => {
    const input = 'meeka hariyata vaeda karanavaadha?';
    const expected = 'මේක හරියට වැඩ කරනවාද?';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  // Imperative Forms (Commands)
  test('Pos_Fun_0013: Convert imperative form - come quickly', async () => {
    const input = 'vahaama enna.';
    const expected = 'වහාම එන්න.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0014: Convert imperative form - go right now', async () => {
    const input = 'issarahata yanna.';
    const expected = 'ඉස්සරහට යන්න.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0015: Convert imperative form - tell me', async () => {
    const input = 'mata kiyanna.';
    const expected = 'මට කියන්න.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });

  test('Pos_Fun_0016: Convert imperative form - give that', async () => {
    const input = 'eeka dhenna.';
    const expected = 'ඒක දෙන්න.';
    
    await translatorPage.enterSinglishText(input);
    const actual = await translatorPage.getSinhalaOutput();
    
    expect(actual.trim()).toBe(expected);
  });
});
