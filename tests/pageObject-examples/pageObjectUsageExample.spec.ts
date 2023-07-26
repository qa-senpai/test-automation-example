import { expect, test } from "@playwright/test";
import { MenuPage } from "../../project/pages/MenuPage";

/*
 * PageObject, головний патерн автоматизації?
 * YOUTUBE https://youtu.be/zvGhSmJ7G2g
 */

test("Order coffee drink - check that order received", async ({ page }) => {
  const cupLocator = (drinkName: string) =>
    page.locator(`.cup-body[aria-label='${drinkName}']`);
  const checkout = page.locator(`[data-test='checkout']`);
  const successMessage = page.locator(".success");
  const nameInput = page.locator(`#name`);
  const emailInput = page.locator(`#email`);
  const submitPayment = page.locator(`#submit-payment`);

  await page.goto("https://coffee-cart.app");
  await cupLocator("Espresso").click();
  await nameInput.type("test-1");
  await emailInput.type("test@gmail.ts");
  await submitPayment.click();
  await expect(successMessage).toContainText(
    "Thanks for your purchase. Please check your email for payment."
  );
  await expect(checkout).toContainText("$0.00");
});

test(`Order coffee drink - check that order received 
    - rewritten with page objects`, async ({ page }) => {
  const menuPage = new MenuPage(page);

  await menuPage.navigateToMenuPage();
  await menuPage.addDrinkToCart("Espresso");
  const paymentDetailsModal = await menuPage.clickTotalButton();
  await paymentDetailsModal.submitOrder("qa senpai", "qa@gmail.test");

  expect(await menuPage.getTotal()).toContain("$0.00");
  expect(await menuPage.getSuccessMessage()).toContain(
    "Thanks for your purchase. Please check your email for payment."
  );
});
