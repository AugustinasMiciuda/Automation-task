import { Page } from '@playwright/test';
import { HomePage } from './pages/home-page';
import { CartPage } from './pages/cart-page';
import { ProductPage } from './pages/product-page';
import { NavigationBar } from './components/navigation-bar';

export class App {
    readonly homePage: HomePage;
    readonly cartPage: CartPage;
    readonly productPage: ProductPage;
    readonly navBar: NavigationBar;

    constructor(private readonly page: Page) {
        this.navBar = new NavigationBar(page);
        this.homePage = new HomePage(page);
        this.productPage = new ProductPage(page);
        this.cartPage = new CartPage(page);
    }

    async open() {
        await this.page.goto('/');
    }
}
