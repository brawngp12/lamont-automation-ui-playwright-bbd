import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// 1. Define BDD (Features & Steps)
const testDir = defineBddConfig({
  features: 'src/features/**/*.feature', // Path file .feature
  steps: 'src/steps/**/*.ts',             // path file defination step (.ts/.js)
});

// 2. Define config Playwright Test
export default defineConfig({
  testDir,  
  fullyParallel: true,
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  use: {
    baseURL: 'https://example.com',
    trace: 'on-first-retry',
    screenshot: 'off',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});