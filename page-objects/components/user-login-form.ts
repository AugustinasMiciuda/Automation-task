import test, { Page, Locator } from '@playwright/test';
import { UserData } from '../../testData/test-data';

export class UserLoginForm {
    private readonly userNameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly logInBtn: Locator;

    constructor(private readonly page: Page) {
        this.userNameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.logInBtn = page.locator('[onclick="logIn()"]');
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

    private async clickLogInBtn() {
        await test.step('Clicking Log in button', async () => {
            await this.logInBtn.click();
        });
    }

    async logIn(userData: UserData) {
        await test.step('Loging in', async () => {
            await this.enterUserName(userData.name);
            await this.enterPassword(userData.password);
            await this.clickLogInBtn();
        });
    }
}
