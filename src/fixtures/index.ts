import { test as base, APIRequestContext } from '@playwright/test';
import { UserApi } from '@api/endpoints/UserApi';
import { LoginPage } from '@ui/pages/LoginPage';
import { DashboardPage } from '@ui/pages/DashboardPage';

/**
 * Custom Fixtures
 * Extend Playwright's base `test` with pre-built page objects and API clients.
 * Import `test` from this file instead of '@playwright/test' in your specs.
 */

type ApiFixtures = {
  userApi: UserApi;
};

type UiFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
};

export const test = base.extend<UiFixtures & ApiFixtures>({
  // ─── API Fixtures ────────────────────────────────────────────────
  userApi: async ({ request }, use) => {
    await use(new UserApi(request));
  },

  // ─── UI Fixtures ─────────────────────────────────────────────────
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
});

export { expect } from '@playwright/test';
