import { test, expect } from '../../src/fixtures';
import { randomEmail } from '../../src/utils/helpers';

/**
 * Combined API + UI Test
 * Create a resource via API, verify it appears in the UI.
 * This is the real power of Playwright — one tool for both layers.
 */
test.describe('API + UI Combined Flow', () => {
  test('should create user via API and verify in UI', async ({ userApi, dashboardPage }) => {
    // Step 1: Create test data via API (fast, no browser needed)
    const newUser = { name: 'E2E Test User', email: randomEmail() };
    const response = await userApi.createUser(newUser);
    expect(response.status()).toBe(201);

    const { id } = await response.json();
    expect(id).toBeDefined();

    // Step 2: Navigate to UI and verify
    await dashboardPage.goto();
    await dashboardPage.assertOnDashboard();

    // Replace with actual locator once you have a real UI
    // e.g., await expect(page.locator(`[data-userid="${id}"]`)).toBeVisible();
  });
});
