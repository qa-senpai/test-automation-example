import { Locator, Page } from "@playwright/test";
import { PaymentModal } from "../modals/PaymentModal";

export class MenuPage {
  private readonly page: Page;
  readonly totalButton: Locator;
  readonly successMessage: Locator;
  private readonly cupLocator = (drinkName: string) =>
    this.page.locator(`.cup-body[aria-label='${drinkName}']`);

  constructor(page: Page) {
    this.page = page;
    this.totalButton = page.locator(`[data-test='checkout']`);
    this.successMessage = page.locator(".success");
  }
  async navigateTo() {
    await this.page.goto("https://coffee-cart.app");
    return this;
  }

  async addDrinkToCart(drinksName: Array<string> | string) {
    if (typeof drinksName === "string") {
      await this.cupLocator(drinksName).click();
    } else {
      for (const drink of drinksName) {
        await this.cupLocator(drink).click();
      }
    }
    return this;
  }

  async clickTotalButton() {
    await this.totalButton.click();
    return new PaymentModal(this.page);
  }

  async getTotal() {
    return this.totalButton.innerText();
  }

  async getSuccessMessage() {
    return this.successMessage.innerText();
  }
}
