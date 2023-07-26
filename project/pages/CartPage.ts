import { Page } from "@playwright/test";
import { CoreActions } from "../CoreActions";
import { PaymentModal } from "../modals/PaymentModal";
/*
 * Патерн Фасад - легко навчитися, важко оволодіти
 * YOUTUBE https://youtu.be/ghb_miDDvU0
 */

export class CartPage extends CoreActions {
  private readonly totalButton = `[data-test='checkout']`;

  constructor(page: Page) {
    super(page);
  }

  async clickTotalButton() {
    await this.clickOnElement(this.totalButton);
    return new PaymentModal(this.page);
  }
}
