import { test } from "@playwright/test";
import { MenuPage } from "../project/pages/MenuPage";
import { readCsvFile } from "../helpers/csvHelper";

const data = readCsvFile("data.csv");

for (const { testID, drinks } of data) {
  test(`${testID} - DDT examples - add drinks to cart`, async ({ page }) => {
    const menuPage = new MenuPage(page);

    await menuPage.navigateTo();
    await menuPage.addDrinkToCart(drinks);
  });
}
