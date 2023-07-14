import { test } from "@playwright/test";
import { MenuPage } from "../project/pages/MenuPage";
import { readCsvFile } from "../helpers/csvHelper";

test.describe("Example of Parametrized test with object data import", () => {
  const address = '"https://me24.meest-group.com/"';

  const data = [
    {
      testID: 1,
      email: "senpai@gm.com",
      password: "123",
    },
    {
      testID: 2,
      email: "",
      password: "123",
    },
    {
      testID: 3,
      email: "senpai@gm.com",
      password: "",
    },
  ];

  for (const { testID, email, password } of data) {
    test(`${testID} - auth param examples`, async ({ page }) => {
      await page.goto(address);
      await page.locator("#gwt-uid-4").fill(email);
      await page.locator("#gwt-uid-6").fill(password);
      await page.getByRole("button", { name: "Увійти" }).click();

      //ЯКАСЬ ПЕРЕВІРКА
    });
  }
});

test.describe("Example of tests without parametrization", () => {
  const address = '"https://me24.meest-group.com/"';
  test(`auth - positive`, async ({ page }) => {
    await page.goto(address);
    await page.locator("#gwt-uid-4").fill("senpai");
    await page.locator("#gwt-uid-6").fill("123");
    await page.getByRole("button", { name: "Увійти" }).click();

    //ЯКАСЬ ПЕРЕВІРКА
  });

  test(`auth - without email`, async ({ page }) => {
    await page.goto(address);
    await page.locator("#gwt-uid-4").fill("");
    await page.locator("#gwt-uid-6").fill("123");
    await page.getByRole("button", { name: "Увійти" }).click();

    //ЯКАСЬ ПЕРЕВІРКА
  });

  test(`auth - without password`, async ({ page }) => {
    await page.goto(address);
    await page.locator("#gwt-uid-4").fill("senpai");
    await page.locator("#gwt-uid-6").fill("123");
    await page.getByRole("button", { name: "Увійти" }).click();

    //ЯКАСЬ ПЕРЕВІРКА
  });
});
