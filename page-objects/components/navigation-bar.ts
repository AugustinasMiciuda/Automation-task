import test, { Page, Locator, expect } from '@playwright/test';

export class NavigationBar {
    private readonly signUpBtn: Locator;
    private readonly logInBtn: Locator;
    private readonly cartBtn: Locator;
    private readonly userNameElement: Locator;

    constructor(private readonly page: Page) {
        this.signUpBtn = page.locator('#signin2');
        this.logInBtn = page.locator('#login2');
        this.cartBtn = page.locator('#cartur');
        this.userNameElement = page.locator('#nameofuser');
    }

    async clickSignUpBtn() {
        await test.step('clicking Sign up button in navigation bar', async () => {
            await this.signUpBtn.click();
        });
    }

    async clickLogInBtn() {
        await test.step('clicking Log in button in navigation bar', async () => {
            await this.logInBtn.click();
        });
    }

    async clickCartBtn() {
        await test.step('clicking Cart button in navigation bar', async () => {
            await this.cartBtn.click();
        });
    }

    async assertUserName(userName: string) {
        await expect(this.userNameElement).toHaveText(`Welcome ${userName}`);
    }
}
