import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ponadczasowi.pl/');
  await page.getByRole('button', { name: 'Zezwól na wszystkie' }).click();
  await page.getByRole('searchbox', { name: 'Czego szukasz?' }).click();
  await page.getByRole('searchbox', { name: 'Czego szukasz?' }).fill('torebka');
  await page.getByRole('searchbox', { name: 'Czego szukasz?' }).press('Enter');
  await page.locator('.btn-product').first().click();
  await page.getByRole('link', { name: 'PRZEJDŹ DO KOSZYKA' }).click();
  await page.getByRole('link', { name: 'PRZEJDŹ DO KASY' }).click({ timeout: 70000 });
  await page.getByPlaceholder('Imię *').click({ timeout: 70000 });
  await page.getByPlaceholder('Imię *').press('CapsLock');
  await page.getByPlaceholder('Imię *').fill('T');
  await page.getByPlaceholder('Imię *').press('CapsLock');
  await page.getByPlaceholder('Imię *').fill('Test');
  await page.getByPlaceholder('Imię *').press('Tab');
  await page.getByPlaceholder('Nazwisko *').fill('tes');
  await page.getByPlaceholder('Nazwisko *').press('Tab');
  await page.getByPlaceholder('Adres e-mail *').fill('email@wp.pl');
  await page.getByPlaceholder('Adres e-mail *').press('Tab');
  await page.getByPlaceholder('Telefon *').fill('123456789');
  await page.getByPlaceholder('Telefon *').press('Tab');
  await page.getByPlaceholder('Ulica *').fill('ulicowa');
  await page.getByPlaceholder('Ulica *').press('Tab');
  await page.getByPlaceholder('Nr *').fill('1');
  await page.getByPlaceholder('Nr *').press('Tab');
  await page.getByPlaceholder('Kod *').fill('11-111');
  await page.getByPlaceholder('Kod *').press('Tab');
  await page.getByPlaceholder('Miasto *').fill('rzeszów');
  await page.getByLabel('Odbiór osobisty (').check();
  await page.getByRole('radio', { name: 'BLIK' }).check();
  await page.getByText('Akceptuję postanownienia').click();
  await page.getByText('Wyrażam zgodę na').click();
  await page.getByRole('button', { name: 'Zamawiam' }).click();
  await page.goto('https://e.blik.com/blik_web/index.html');
});