import {Page, Locator} from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginField: Locator;
  readonly passwordField: Locator;
  readonly submitButton: Locator;
  readonly validationError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginField = page.locator('#login_username');
    this.passwordField = page.locator('#login_password');
    this.submitButton = page.locator('button[type="submit"]');
    this.validationError = page.locator('[class^="ErrorHandlerAlert_alert"]');
  }

    async goto() {
        await this.page.goto('https://enjoy.plezi.co/login');
    }
}