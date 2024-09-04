import test, { Page, Locator, expect } from '@playwright/test';
import { OrderForm } from '../components/order-form';

export class CartPage {
    private readonly placeOrderBtn: Locator;
    private readonly productNameElement: Locator;
    readonly orderForm: OrderForm;

    constructor(private readonly page: Page) {
        this.orderForm = new OrderForm(page);
        this.productNameElement = page.locator('.success td').nth(1);
        this.placeOrderBtn = page.locator('.btn-success');
    }

    async assertThatItemIsInProductsList(itemName: string) {
        await expect(this.productNameElement).toHaveText(itemName);
    }

    async clickPlaceOrderBtn() {
        await test.step('clicking Place Order button', async () => {
            await this.placeOrderBtn.click();
        });
    }
}
