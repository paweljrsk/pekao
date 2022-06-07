import { test, expect } from '@playwright/test';
import { homePage } from '../pages/global.page';

test('Sign in to exoffice', async ({ page }) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get('incomes')

  await page.goto(homePage);
  // const login = page.locator('#creditAmount');
  await page.locator('#pdpPekaoAutocompleteField').first().click()
  await page.locator('pekao-option[role="option"]:has-text("Spłata kredytu")').first().click();
  await page.locator('#creditAmount').fill("300000")
  await page.locator('#loanTerm').fill("360")
  await page.locator('#interestRate').fill("2")
  await page.locator('#commission').fill("1")
  await page.locator('text=RówneMalejące >> span').first().click();
  await page.locator('text=ZmienneStałe >> span').first().click();
  await page.locator('//span/input[@id="monthlyInstallments"]').nth(0).fill("500");
  await page.locator('#monthlyHouseholdExpenses').nth(0).fill("500");
  await page.locator('#creditLimits').nth(0).fill("200")
  await page.locator('#otherLiabilities').nth(0).fill("100")
  await page.locator('#pdpPekaoAutocompleteField').nth(1).click()
  await page.locator('pekao-option[role="option"]:has-text("mazowieckie")').click();
  await page.locator('#pdpPekaoAutocompleteField').nth(2).click();
  await page.locator('pekao-option[role="option"]:has-text("grodziski")').click();
  await page.locator('#numberOfChildren').nth(0).fill("2");
  await page.locator('text=KobietaMężczyzna >> span').nth(2).click();
  await page.locator('#yearOfBirth').nth(0).fill("1987")
  await page.locator('#currentHousingStatus').nth(0).click()
  await page.locator('pekao-option[role="option"]:has-text("oddany do użytkowania w ramach umowy użyczenia (bezpłatnie)")').click();
  await page.locator('//button[text() = "DODAJ DOCHÓD "]').nth(0).click();
  await page.locator('#incomeSource').nth(0).click();
  await page.locator('pekao-option[role="option"]:has-text("umowa o pracę w kraju")').nth(0).click();
  await page.locator('#netMonthlyIncome').nth(0).fill("12000");
  await page.locator('#incomeCurrencyCode').nth(0).click();
  await page.locator('pekao-option[role="option"]:has-text("PLN")').click();
  await page.locator('#employmentType').nth(0).click();
  await page.locator('pekao-option[role="option"]:has-text("na czas nieokreślony")').click();
  await page.locator('//button[text() = "Wpływy za ostatnie 12 m-cy"]').click();
  await page.locator('//*/input[@class="ff-input-suffix-workaround ng-untouched ng-pristine ng-valid ng-star-inserted"]').fill("12000");
  await page.locator('//button[text() = "PRZEPISZ"]').nth(0).click();
  await page.locator('//*/pekao-button/button[text() = "ZAPISZ"]').nth(0).click();
  await console.log(code)
  // await page.pause()
});