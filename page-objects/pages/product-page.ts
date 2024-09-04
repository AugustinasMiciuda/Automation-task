import test, { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
    private readonly addToCartBtn: Locator;
    private readonly productNameElement: Locator;

    constructor(private readonly page: Page) {
        this.productNameElement = page.locator('.name');
        this.addToCartBtn = page.locator('.btn-success', { hasText: 'Add to cart' });
    }

    async assertThatCorrectProductNameDisplayed(productName: string) {
        await expect(this.productNameElement).toHaveText(productName);
    }

    async clickPlaceOrderBtn() {
        await test.step('Clicking Add to cart button', async () => {
            await this.addToCartBtn.click();
            await this.page.waitForTimeout(500); //too fast on firefox
            this.page.on('dialog', async (dialog) => {
                expect(dialog.message()).toBe('Product added');
                await dialog.accept();
            });
        });
    }
}
