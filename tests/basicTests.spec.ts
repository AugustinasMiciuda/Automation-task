import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';
import { App } from '../page-objects/app';
import { userTestData, orderTestData } from '../testData/test-data';

test.describe('basic tests', () => {
    let app: App;

    test.beforeEach(async ({ page }) => {
        app = new App(page);
        await app.open();
    });

    test('should register new account and log in', async () => {
        const userData = userTestData;
        await app.navBar.clickSignUpBtn();
        await app.homePage.userSignUpForm.signUp(userData);
        await app.navBar.clickLogInBtn();
        await app.homePage.userLoginForm.logIn(userData);
        await app.navBar.assertUserName(userData.name);
    });

    test('should add item to cart', async () => {
        const item = 'Sony xperia z5';

        await app.homePage.clickOnItem(item);
        await app.productPage.assertThatCorrectProductNameDisplayed(item);
        await app.productPage.clickPlaceOrderBtn();
        await app.navBar.clickCartBtn();
        await app.cartPage.assertThatItemIsInProductsList(item);
    });
});
