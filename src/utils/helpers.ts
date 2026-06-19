/**
 * General Helpers / Utility Functions
 */

/**
 * Pause execution for a given number of milliseconds.
 * Prefer Playwright's built-in waits over this wherever possible.
 */
export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Generate a random email for test data.
 */
export const randomEmail = (): string => {
  const id = Math.random().toString(36).substring(2, 8);
  return `testuser_${id}@example.com`;
};

/**
 * Generate a random string of given length.
 */
export const randomString = (length = 8): string =>
  Math.random().toString(36).substring(2, 2 + length);

/**
 * Generate a random integer between min and max (inclusive).
 */
export const randomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Pick a random element from an array.
 */
export const randomFrom = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

/**
 * Format a Date object to YYYY-MM-DD string.
 */
export const formatDate = (date: Date = new Date()): string =>
  date.toISOString().split('T')[0];
