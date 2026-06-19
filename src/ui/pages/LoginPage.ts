import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * LoginPage
 * Represents the Login screen.
 * Each page class = one screen/component of your app.
 */
export class LoginPage extends BasePage {
  // ─── Locators ─────────────────────────────────────────────────────
  private readonly emailInput = '#email';
  private readonly passwordInput = '#password';
  private readonly submitButton = 'button[type="submit"]';
  private readonly errorMessage = '.error-message';

  constructor(page: Page) {
    super(page);
  }

  // ─── Actions ──────────────────────────────────────────────────────
  async goto(): Promise<void> {
    await this.navigate('/login');
  }

  async login(email: string, password: string): Promise<void> {
    await this.fillInput(this.emailInput, email);
    await this.fillInput(this.passwordInput, password);
    await this.clickElement(this.submitButton);
    await this.waitForPageLoad();
  }

  async getErrorMessage(): Promise<string | null> {
    return this.getText(this.errorMessage);
  }

  // ─── Assertions (optional — can also assert in test file) ─────────
  async assertLoginSuccess(): Promise<void> {
    await expect(this.page).not.toHaveURL('/login');
  }

  async assertErrorVisible(): Promise<void> {
    await expect(this.page.locator(this.errorMessage)).toBeVisible();
  }
}
