/**
 * Logger Utility
 * Simple wrapper for structured console logging.
 * Can be replaced with winston/pino for advanced needs.
 */

const colors = {
  reset: '\x1b[0m',
  info: '\x1b[36m',   // Cyan
  success: '\x1b[32m', // Green
  warn: '\x1b[33m',   // Yellow
  error: '\x1b[31m',  // Red
};

export const logger = {
  info: (msg: string, data?: unknown) => {
    console.log(`${colors.info}[INFO]${colors.reset} ${msg}`, data ?? '');
  },
  success: (msg: string, data?: unknown) => {
    console.log(`${colors.success}[PASS]${colors.reset} ${msg}`, data ?? '');
  },
  warn: (msg: string, data?: unknown) => {
    console.warn(`${colors.warn}[WARN]${colors.reset} ${msg}`, data ?? '');
  },
  error: (msg: string, data?: unknown) => {
    console.error(`${colors.error}[FAIL]${colors.reset} ${msg}`, data ?? '');
  },
};
