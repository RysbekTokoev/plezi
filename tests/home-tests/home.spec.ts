// test that opens home url and checks if home locators are present
import { test, expect } from '@playwright/test';
import { HomePage } from '@pages/HomePage';


test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
  });

  test('Home layout', async ({ page }) => {
    const homePage = new HomePage(page);

    await expect(homePage.loginButton).toBeVisible();
    await expect(homePage.signUpButton).toBeVisible();
  });

  test('Navigate to login page', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.loginButton.click();
    await expect(page).toHaveURL(/.*sign-in/);
  })

  test('Navigate to sign up page', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.loginButton.click();
    await expect(page).toHaveURL(/.*sign-in/);
  })
});



