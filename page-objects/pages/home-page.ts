import test, { Page, Locator } from '@playwright/test';
import { UserLoginForm } from '../components/user-login-form';
import { UserSignUpForm } from '../components/user-signup-form';

export class HomePage {
    private readonly item;
    readonly userLoginForm: UserLoginForm;
    readonly userSignUpForm: UserSignUpForm;

    constructor(private readonly page: Page) {
        this.userLoginForm = new UserLoginForm(page);
        this.userSignUpForm = new UserSignUpForm(page);
        this.item = (itemName: string) => page.locator('.card-title a', { hasText: `${itemName}` });
    }

    async clickOnItem(itemName: string) {
        await test.step('Clicking on item', async () => {
            await this.item(itemName).click();
        });
    }
}
