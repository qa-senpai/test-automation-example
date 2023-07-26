import { test } from "@playwright/test";
import { readCsvFile } from "../../helpers/csvHelper";
import { MenuPage } from "../../project/pages/MenuPage";

/*
 * Data Driven Testing - простий спосіб органіції тестів
 * YOUTUBE https://youtu.be/7INsJsP6orY
 */
test.describe("Example of Parametrized test with object data import", () => {
  const data = [
    {
      testID: 1,
      drinks: ["Espresso", "Espresso"],
    },
    {
      testID: 2,
      drinks: "Mocha",
    },
    {
      testID: 3,
      drinks: ["Espresso", "Espresso", "Cafe Latte"],
    },
  ];

  for (const { testID, drinks } of data) {
    test(`${testID} - DDT examples - add drinks to cart`, async ({ page }) => {
      const menuPage = new MenuPage(page);

      await menuPage.navigateToMenuPage();
      await menuPage.addDrinkToCart(drinks);
    });
  }
});

test.describe("Example of DDT test with CSV data import", () => {
  const data = readCsvFile("data.csv");

  for (const { testID, drinks } of data) {
    test(`${testID} - DDT examples - add drinks to cart`, async ({ page }) => {
      const menuPage = new MenuPage(page);

      await menuPage.navigateToMenuPage();
      await menuPage.addDrinkToCart(drinks);
    });
  }
});
