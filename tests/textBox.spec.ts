import { expect, test } from "@playwright/test";

test("qa senpai text box interaction", async ({ page }) => {
  const inputFieldLocator = page.locator(
    `//label[text() = '1.string.SingleLine']/../..//input`
  );
  const textFieldLocator = page.locator(
    `//label[text() = '1.string.SingleLine']/../..//*[@data-testid='text-view']`
  );
  const editButtonLocator = page.getByTestId("edit");
  const saveButtonLocator = page.getByTestId("save");

  await page.pause();
  await editButtonLocator.click();
  await inputFieldLocator.fill("this is test 1");

  await inputFieldLocator.fill("");
  await inputFieldLocator.type("this is typed text", { delay: 70 });

  await inputFieldLocator.press("Control+A");
  await inputFieldLocator.press("Backspace");

  await inputFieldLocator.fill("this is test 1");

  for (const i of new Array(18)) {
    await inputFieldLocator.press("Backspace");
  }

  await inputFieldLocator.fill("this is text for expect");
  await saveButtonLocator.click();
  await expect(textFieldLocator).toHaveText("this is text for expect");
  await expect(inputFieldLocator).toBeHidden();

  // FACEBOOK PART
  const fbEmailTextBox = page.getByTestId("royal_email");
  const fbPasswordTextBox = page.getByTestId("royal_pass");

  await page.goto("https://www.facebook.com/");
  await expect(fbEmailTextBox).toHaveAttribute(
    "placeholder",
    "Email or phone number"
  );
  await expect(fbPasswordTextBox).toHaveAttribute("placeholder", "Password");
});

test("qa senpai text box interaction - facebook", async ({ page }) => {
  const fbEmailTextBox = page.getByTestId("royal_email");
  const fbPasswordTextBox = page.getByTestId("royal_pass");

  await page.goto("https://www.facebook.com/");
  await expect(fbEmailTextBox).toHaveAttribute(
    "placeholder",
    "Email or phone number"
  );
  await expect(fbPasswordTextBox).toHaveAttribute("placeholder", "Password");
});
