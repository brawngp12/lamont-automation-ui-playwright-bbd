import { createBdd } from 'playwright-bdd';

// Khởi tạo các hàm Hook từ playwright-bdd
const { Before, After, BeforeAll, AfterAll } = createBdd();

// 1. Hook chạy TRƯỚC TẤT CẢ các scenario (Setup dữ liệu, cấu hình chung...)
BeforeAll(async () => {
  console.log('--- Bắt đầu chạy test suite ---');
});

// 2. Hook chạy TRƯỚC MỖI scenario
// Inject trực tiếp fixture { page, context, browser } từ Playwright nếu cần
Before(async ({ page }) => {
  console.log('--- Bắt đầu Scenario mới ---');
  // Ví dụ: Set viewport hoặc thiết lập cookie/token trước mỗi bài test
  await page.setViewportSize({ width: 1280, height: 720 });
});

// 3. Hook chạy SAU MỖI scenario
After(async ({ page }) => {
  console.log('--- Hoàn thành Scenario ---');
  // Playwright sẽ TỰ ĐỘNG đóng page & context dựa trên cấu hình trong playwright.config.ts.
  // Bạn KHÔNG CẦN gọi await page.close() ở đây.
});

// 4. Hook chạy SAU TẤT CẢ các scenario
AfterAll(async () => {
  console.log('--- Đã chạy xong tất cả test suite ---');
});