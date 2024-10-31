import { Page } from "@playwright/test";
import { IElementOptions } from "./CoreTypes";

/*
 * Патерн Фасад - легко навчитися, важко оволодіти
 * YOUTUBE https://youtu.be/ghb_miDDvU0
 */
export class CoreActions {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected async navigateTo(link: string) {
    return this.page.goto(link).catch((e) => this.errorHandling(e, this.page));
  }

  protected async clickOnElement(selector: string, options?: IElementOptions) {
    return this.page
      .locator(selector)
      .click({ timeout: options?.timeout, force: options?.forceClick })
      .catch((e) => this.errorHandling(e, this.page));
  }

  protected async typeIntoElement(
    selector: string,
    text: string,
    options?: IElementOptions
  ) {
    return this.page
      .locator(selector)
      .type(text, { timeout: options?.timeout })
      .catch((e) => this.errorHandling(e, this.page));
  }

  protected async getElementText(selector: string, options?: IElementOptions) {
    return this.page
      .locator(selector)
      .innerText({ timeout: options?.timeout })
      .catch((e) => this.errorHandling(e, this.page));
  }

  errorHandling(error: Error, page: Page) {
    const exceptionMessage = new Error(`
============  ============  TEST FAILED ============  ============
Test execution fails on Page with URL: ${page.url()}
ERROR TYPE: ${error.name}
MESSAGE: ${error.message}

STACK TRACE: ${error.stack}
============  ============  ============ ============  ============`);

    throw exceptionMessage;
  }
}
