import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  // ─── Test Directory ───────────────────────────────────────────────
  testDir: './tests',

  // ─── Global Settings ──────────────────────────────────────────────
  timeout: 30_000,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : 2,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,

  // ─── Reporter ─────────────────────────────────────────────────────
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['list'],
  ],

  // ─── Shared Settings for ALL tests ────────────────────────────────
  use: {
    baseURL: process.env.BASE_URL ?? 'https://jsonplaceholder.typicode.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true,
  },

  // ─── Projects (Browser + API) ─────────────────────────────────────
  projects: [
    {
      name: 'API',
      testMatch: '**/api/**/*.spec.ts',
      use: {},
    },
    {
      name: 'Chromium',
      testMatch: '**/ui/**/*.spec.ts',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      testMatch: '**/ui/**/*.spec.ts',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
