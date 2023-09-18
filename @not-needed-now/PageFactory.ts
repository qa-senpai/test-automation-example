import { Page } from '@playwright/test';
import { CartPage } from './pages/CartPage';
import { MenuPage } from './pages/MenuPage';


export class PageFactory<T> {

    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    create(title: PageTitle): T | undefined {
        if(title === 'CartPage') return new CartPage(this.page) as T;
        if(title === 'MenuPage') return new MenuPage(this.page) as T;
    }
}

type PageTitle = 'CartPage' | 'MenuPage';