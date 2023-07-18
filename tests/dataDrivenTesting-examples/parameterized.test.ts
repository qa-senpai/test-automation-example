import { test } from "@playwright/test";

/*
 * Data Driven Testing - простий спосіб органіції тестів
 * YOUTUBE https://youtu.be/7INsJsP6orY
 */

test.describe("Example of tests without parametrization", () => {
  const address = '"https://me24.meest-group.com/"';

  test(`auth with valid data - check that user authorize`, async ({ page }) => {
    await page.goto(address);
    await page.locator("#gwt-uid-4").fill("senpai");
    await page.locator("#gwt-uid-6").fill("123");
    await page.getByRole("button", { name: "Увійти" }).click();

    //ЯКАСЬ ПЕРЕВІРКА
  });

  test(`auth without email - check error`, async ({ page }) => {
    await page.goto(address);
    await page.locator("#gwt-uid-4").fill("");
    await page.locator("#gwt-uid-6").fill("123");
    await page.getByRole("button", { name: "Увійти" }).click();

    //ЯКАСЬ ПЕРЕВІРКА
  });

  test(`auth without password - check error`, async ({ page }) => {
    await page.goto(address);
    await page.locator("#gwt-uid-4").fill("senpai");
    await page.locator("#gwt-uid-6").fill("123");
    await page.getByRole("button", { name: "Увійти" }).click();

    //ЯКАСЬ ПЕРЕВІРКА
  });
});

test.describe("Example of Parametrized test with object data import", () => {
  const address = '"https://me24.meest-group.com/"';

  const data = [
    {
      testID: 1,
      email: "senpai@gm.com",
      password: "123",
      expectedError: "",
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
