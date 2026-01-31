import { expect } from '@playwright/test';

export class SwiftTranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.swifttranslator.com/');
    await this.page.waitForLoadState('networkidle');
  }

  async enterSinglishText(text) {
    // Try multiple selectors to find the input field
    const inputField = this.page.locator('textarea').first();
    await inputField.waitFor({ state: 'visible', timeout: 10000 });
    await inputField.clear();
    await this.page.waitForTimeout(500);
    await inputField.fill(text);
    // Small initial wait, rely on getSinhalaOutput() for actual waiting
    await this.page.waitForTimeout(2000);
  }

  async getSinhalaOutput() {
    // The output appears in a specific div
    const outputElement = this.page.locator('div.whitespace-pre-wrap.overflow-y-auto');
    
    await outputElement.waitFor({ state: 'visible', timeout: 10000 });
    
    // Wait for content to actually appear (retry for up to 25 seconds)
    let content = '';
    for (let i = 0; i < 50; i++) {
      content = await outputElement.textContent();
      if (content && content.trim().length > 0) {
        break;
      }
      await this.page.waitForTimeout(500);
    }
    
    return content?.trim() || '';
  }

  async clearInput() {
    const inputField = this.page.locator('textarea').first();
    await inputField.clear();
    await this.page.waitForTimeout(500);
  }

  async verifySinhalaOutput(expectedOutput) {
    const actualOutput = await this.getSinhalaOutput();
    return actualOutput.trim() === expectedOutput.trim();
  }

  async enterTextCharByChar(text) {
    const inputField = this.page.locator('textarea').first();
    await inputField.clear();
    for (const char of text) {
      await inputField.type(char, { delay: 50 });
    }
    await this.page.waitForTimeout(500);
  }

  async isOutputVisible() {
    const outputField = this.page.locator('div.whitespace-pre-wrap.overflow-y-auto');
    return await outputField.isVisible();
  }

  async getOutputInRealTime() {
    const outputs = [];
    const inputField = this.page.locator('textarea').first();
    const outputField = this.page.locator('div.whitespace-pre-wrap.overflow-y-auto');
    
    const text = "man gedhara yanavaa";
    await inputField.clear();
    
    for (const char of text) {
      await inputField.type(char, { delay: 100 });
      const output = await outputField.textContent() || '';
      outputs.push(output);
    }
    
    return outputs;
  }
}
