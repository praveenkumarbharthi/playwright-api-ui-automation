/**
 * Environment Configuration
 * Centralizes environment-specific URLs and settings.
 */

type Environment = 'dev' | 'staging' | 'prod';

interface EnvConfig {
  apiBaseUrl: string;
  uiBaseUrl: string;
}

const configs: Record<Environment, EnvConfig> = {
  dev: {
    apiBaseUrl: 'https://jsonplaceholder.typicode.com',
    uiBaseUrl: 'https://example.com',
  },
  staging: {
    apiBaseUrl: 'https://staging-api.example.com',
    uiBaseUrl: 'https://staging.example.com',
  },
  prod: {
    apiBaseUrl: 'https://api.example.com',
    uiBaseUrl: 'https://example.com',
  },
};

const env = (process.env.ENV ?? 'dev') as Environment;

export const config: EnvConfig = configs[env];
