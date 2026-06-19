import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * DashboardPage
 * Represents the main dashboard after login.
 * Add more pages like this for each screen in your app.
 */
export class DashboardPage extends BasePage {
  // ─── Locators ─────────────────────────────────────────────────────
  private readonly welcomeMessage = '.welcome-message';
  private readonly logoutButton = '[data-testid="logout"]';
  private readonly userAvatar = '[data-testid="user-avatar"]';

  constructor(page: Page) {
    super(page);
  }

  // ─── Actions ──────────────────────────────────────────────────────
  async goto(): Promise<void> {
    await this.navigate('/dashboard');
  }

  async logout(): Promise<void> {
    await this.clickElement(this.logoutButton);
    await this.waitForPageLoad();
  }

  async getWelcomeText(): Promise<string | null> {
    return this.getText(this.welcomeMessage);
  }

  // ─── Assertions ───────────────────────────────────────────────────
  async assertOnDashboard(): Promise<void> {
    await expect(this.page).toHaveURL('/dashboard');
    await expect(this.page.locator(this.userAvatar)).toBeVisible();
  }
}
