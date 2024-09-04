import test, { Page, Locator, expect } from '@playwright/test';
import { UserData } from '../../testData/test-data';

export class UserSignUpForm {
    private readonly userNameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly signUpBtn: Locator;

    constructor(private readonly page: Page) {
        this.userNameInput = page.locator('#sign-username');
        this.passwordInput = page.locator('#sign-password');
        this.signUpBtn = page.locator('[onclick="register()"]');
    }

    private async enterUserName(name: string) {
        await test.step('Entering user name', async () => {
            await this.userNameInput.fill(name);
        });
    }

    private async enterPassword(password: string) {
        await test.step('Entering user password', async () => {
            await this.passwordInput.fill(password);
        });
    }

    private async clickSignUpBtn() {
        await test.step('Clicking Sign up button', async () => {
            await this.signUpBtn.click();
        });
    }

    async signUp(userData: UserData) {
        await test.step('Loging in', async () => {
            await this.enterUserName(userData.name);
            await this.enterPassword(userData.password);
            await this.clickSignUpBtn();
            this.page.on('dialog', async (dialog) => {
                expect(dialog.message()).toBe('Sign up successful.');
                await dialog.dismiss();
            });
        });
    }
}
