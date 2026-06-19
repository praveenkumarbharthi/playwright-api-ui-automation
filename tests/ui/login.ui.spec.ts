import { test, expect } from '../../src/fixtures';

/**
 * Login UI Test Suite
 * Uses Page Object Model (POM) via custom fixtures.
 */
test.describe('Login Page', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('should display login form', async ({ loginPage }) => {
    expect(await loginPage.isVisible('#email')).toBeTruthy();
    expect(await loginPage.isVisible('#password')).toBeTruthy();
    expect(await loginPage.isVisible('button[type="submit"]')).toBeTruthy();
  });

  test('should login with valid credentials', async ({ loginPage }) => {
    await loginPage.login(
      process.env.USERNAME ?? 'testuser@example.com',
      process.env.PASSWORD ?? 'password123'
    );
    await loginPage.assertLoginSuccess();
  });

  test('should show error with invalid credentials', async ({ loginPage }) => {
    await loginPage.login('wrong@example.com', 'wrongpassword');
    await loginPage.assertErrorVisible();
  });
});
