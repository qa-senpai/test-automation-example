import { test, expect } from "@playwright/test";

test(`clicks`, async ({ page }) => {
  const cupLocator = (drinkName: string) =>
    page.locator(`.cup-body[aria-label='${drinkName}']`);
  const titleLocator = (drinkName: string) =>
    page.locator(`//li/h4[text() = '${drinkName}']`);
  const navigationTabs = (title: string) =>
    page.locator(`//a[contains(text(), "${title}")]`);

  await page.goto("https://coffee-cart.app/");

  //navigation
  await navigationTabs("cart").click();

  await navigationTabs("menu").click();

  //click on element
  await cupLocator("Espresso").click();

  //dbclick on element
  await titleLocator("Espresso ").dblclick();

  //right button
  await cupLocator("Mocha").click({ button: "right" });

  //modifier
  await cupLocator("Mocha").click({ modifiers: ["Shift"] });

  //position
  await cupLocator("Flat White").click({ position: { x: 0, y: 0 } });

  //hover
  await cupLocator("Flat White").hover();
});
