import {Page, Locator} from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly signUpButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.locator('span', {hasText: 'Log in'});
    this.signUpButton = page.locator('span', {hasText: 'Sign Up'});
  }

  async goto() {
    await this.page.goto('https://www.plezi.co/en/');
  }
}