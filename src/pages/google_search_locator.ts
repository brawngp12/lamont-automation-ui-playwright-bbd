import { type Page, type Locator } from '@playwright/test';

export class googleSearchpage {
  readonly page: Page;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    // Khai báo Locator cho ô tìm kiếm
    this.searchInput = page.locator('textarea[name="q"]');
  }

  // Thao tác điều hướng tới trang Google
  async navigate() {
    await this.page.goto('https://www.google.com');
  }

  // Thao tác nhập từ khóa và nhấn Enter
  async search(keyword: string) {
    await this.searchInput.fill(keyword);
    await this.searchInput.press('Enter');
  }
}