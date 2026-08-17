import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();

Given('Toi mo trang Google', async ({ page }) => {
  await page.goto('https://www.google.com');
});