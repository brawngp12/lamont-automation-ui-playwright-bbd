import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// 1. Định nghĩa cấu hình BDD (Features & Steps)
const testDir = defineBddConfig({
  features: 'src/features/**/*.feature', // Đường dẫn tới các file .feature
  steps: 'src/steps/**/*.ts',             // Đường dẫn tới các file định nghĩa step (.ts/.js)
});

// 2. Định nghĩa cấu hình Playwright Test
export default defineConfig({
  testDir, // Trỏ testDir tới kết quả của defineBddConfig
  
  // Tùy chọn chạy song song và thời gian timeout
  fullyParallel: true,
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  // Cấu hình Báo cáo (Reporter)
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  // Cấu hình chung cho các test (Use options)
  use: {
    baseURL: 'https://example.com',
    trace: 'on-first-retry',
    screenshot: 'on',
    video: 'retain-on-failure',
  },

  // Định nghĩa các Profile trình duyệt (Projects)
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});