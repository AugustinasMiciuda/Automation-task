import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';
import { App } from '../page-objects/app';
import { userTestData, orderTestData } from '../testData/test-data';

test.describe('checkout', () => {
    let app: App;

    test.beforeEach(async ({ page }) => {
        app = new App(page);
        await app.open();
        const item = 'Nexus 6';
        await app.homePage.clickOnItem(item);
        await app.productPage.assertThatCorrectProductNameDisplayed(item);
        await app.productPage.clickPlaceOrderBtn();
        await app.navBar.clickCartBtn();
        await app.cartPage.assertThatItemIsInProductsList(item);
    });

    test('should do the check out', async () => {
        const orderData = orderTestData;

        await app.cartPage.clickPlaceOrderBtn();
        await app.cartPage.orderForm.completeOrder(orderData);
        await app.cartPage.orderForm.assertThatPurchaseSuccessMessageIsVisible();
    });
});
