import { CartPage } from '../../project/pages/CartPage';
import { MenuPage } from '../../project/pages/MenuPage';
import { test as base } from './baseFixture';

type Pages = {
    cartPage: CartPage;
    menuPage: MenuPage;
}

export const test = base.extend<Pages>({
    cartPage: ({ page }, use) => {
        const cartPage = new CartPage(page);
         use(cartPage);
      },
    menuPage: ({ page }, use) => {
        const menuPage = new MenuPage(page);
         use(menuPage);
      },
    page: async ({page}, use) => {
        await page.goto('https://coffee-cart.app')
        await use(page);
      }

});
