import { createBdd } from 'playwright-bdd'; 
const { Before, After, BeforeAll, AfterAll } = createBdd();
 
BeforeAll(async () => {
  console.log('--- Run test suite ---');
});
 
Before(async ({ page }) => {
  console.log('--- Run new Scenario ---'); 
  await page.setViewportSize({ width: 1280, height: 720 });
});
 
After(async ({ page }) => {
  console.log('--- Finish Scenario ---'); 
});
 
AfterAll(async () => {
  console.log('--- Finished all test scenarios ---');
});