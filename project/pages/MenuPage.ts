import { Page } from "@playwright/test";
import { PaymentModal } from "../modals/PaymentModal";
import { CoreActions } from "../CoreActions";
/*
 * Патерн Фасад - легко навчитися, важко оволодіти
 * YOUTUBE https://youtu.be/ghb_miDDvU0
 */

export class MenuPage extends CoreActions {
  private readonly totalButton = `[data-test='checkout']`;
  private readonly successMessage = ".success";
  private readonly cupLocator = (drinkName: string) =>
    `.cup-body[aria-label='${drinkName}']`;

  constructor(page: Page) {
    super(page);
  }

  async navigateToMenuPage() {
    await this.navigateTo(`https://coffee-cart.app`);
    return this;
  }

  async addDrinkToCart(drinksName: Array<string> | string) {
    if (typeof drinksName === "string") {
      await this.clickOnElement(this.cupLocator(drinksName));
    } else {
      for (const drink of drinksName) {
        await this.clickOnElement(this.cupLocator(drink));
      }
    }
    return this;
  }

  async clickTotalButton() {
    await this.clickOnElement(this.totalButton);
    return new PaymentModal(this.page);
  }

  async getTotal() {
    return this.getElementText(this.totalButton);
  }

  async getSuccessMessage() {
    return this.getElementText(this.successMessage);
  }
}
