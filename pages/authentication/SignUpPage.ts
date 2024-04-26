import {Page, Locator} from '@playwright/test';

export class SignUpPage {
  readonly page: Page;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly emailField: Locator;
  readonly companyField: Locator;
  readonly websiteField: Locator

  constructor(page: Page) {
    this.page = page;
  }

    async goto() {
        await this.page.goto('https://enjoy.plezi.co/signup');
    }
}