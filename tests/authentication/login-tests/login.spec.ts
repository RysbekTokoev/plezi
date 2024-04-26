// test that opens home url and checks if home locators are present
import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/authentication/LoginPage';
import {HomePage} from "@pages/HomePage";

// get credentials from environment variables
const login = process.env.LOGIN;
const password = process.env.PASSWORD;

test.describe('Login page', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
  });

  test('Login layout', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await expect(loginPage.loginField).toBeVisible();
    await expect(loginPage.passwordField).toBeVisible();
    await expect(loginPage.submitButton).toBeVisible();
  });

  test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.loginField.fill(login);
    await loginPage.passwordField.fill(password);
    await loginPage.submitButton.click();

    await expect(page).toHaveURL(/.*home/);
  });

  test('Login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.loginField.fill(login);
    await loginPage.passwordField.fill("Wrong Password");
    await loginPage.submitButton.click();

    await expect(loginPage.validationError).toBeVisible();
    await expect(loginPage.validationError).toHaveText("Have we already met? Create an account or click on \"Forgotten password\" to log into Plezi.");
  });
});



