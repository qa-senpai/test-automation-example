import { Locator, Page } from "@playwright/test";

export class PaymentModal {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly submitPayment: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator(`#name`);
    this.emailInput = page.locator(`#email`);
    this.submitPayment = page.locator(`#submit-payment`);
  }

  async submitOrder(name: string, email: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.submitPayment.click();
  }
}
