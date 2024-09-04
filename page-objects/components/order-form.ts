import test, { Page, Locator, expect } from '@playwright/test';
import { OrderData } from '../../testData/test-data';

export class OrderForm {
    private readonly nameInput: Locator;
    private readonly countryInput: Locator;
    private readonly cityInput: Locator;
    private readonly creditCardInput: Locator;
    private readonly monthInput: Locator;
    private readonly yearInput: Locator;
    private readonly purchaseBtn: Locator;
    private readonly alertSuccessMessageElement: Locator;

    constructor(private readonly page: Page) {
        this.nameInput = page.locator('#name');
        this.countryInput = page.locator('#country');
        this.cityInput = page.locator('#city');
        this.creditCardInput = page.locator('#card');
        this.monthInput = page.locator('#month');
        this.yearInput = page.locator('#year');
        this.purchaseBtn = page.locator('[onclick="purchaseOrder()"]');
        this.alertSuccessMessageElement = page.locator('.sweet-alert h2');
    }

    private async enterName(name: string) {
        await test.step('Entering name', async () => {
            await this.nameInput.fill(name);
        });
    }
    private async enterCountry(country: string) {
        await test.step('Entering country', async () => {
            await this.countryInput.fill(country);
        });
    }
    private async enterCity(city: string) {
        await test.step('Entering city', async () => {
            await this.cityInput.fill(city);
        });
    }
    private async enterCreditCard(creditCard: string) {
        await test.step('Entering credit card', async () => {
            await this.creditCardInput.fill(creditCard);
        });
    }
    private async enterMonth(month: string) {
        await test.step('Entering month', async () => {
            await this.monthInput.fill(month);
        });
    }
    private async enterYear(year: string) {
        await test.step('Entering year', async () => {
            await this.yearInput.fill(year);
        });
    }
    private async clickPurchase() {
        await test.step('Clicking purchase', async () => {
            await this.purchaseBtn.click();
        });
    }

    async assertThatPurchaseSuccessMessageIsVisible() {
        await expect(this.alertSuccessMessageElement).toHaveText('Thank you for your purchase!');
    }

    async completeOrder(orderData: OrderData) {
        await test.step('Filling order data and completing order', async () => {
            await this.enterName(orderData.name);
            await this.enterCountry(orderData.country);
            await this.enterCity(orderData.city);
            await this.enterCreditCard(orderData.creditCard);
            await this.enterMonth(orderData.month);
            await this.enterYear(orderData.year);
            await this.clickPurchase();
            await this.assertThatPurchaseSuccessMessageIsVisible();
        });
    }
}
