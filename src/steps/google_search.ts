import { createBdd } from 'playwright-bdd';
import { readCsv } from '../utils/csv-reader.ts';
import {  googleSearchpage } from '../pages/google_search_locator.ts';
import { UserApiService, type responeStockInfo } from '../services/services.ts';
const testData = readCsv('src/test-data/sth.csv');

const { Given, When, Then } = createBdd();

Given('Toi mo trang Google', async ({ page }) => {
  const googlePage = new googleSearchpage(page);
  await googlePage.navigate();
});

When('Toi tim kiem {string}', async ({ page }, keyword: string) => {
const googlePage = new googleSearchpage(page);
  await googlePage.search(keyword);
});

Then('Call API voi token hop le', async ({ request }) => {
  const userApiService = new UserApiService(request);
  const response: responeStockInfo = await userApiService.getBoardMBB();
  console.log('Ket qua API:', response);
});

Then('Ket qua tim kiem hien thi', async ({ page }) => {
  console.log('Ket qua tim kiem keyword:',testData[0].key);
  console.log('Ket qua tim kiem value:',testData[0].value);
});
