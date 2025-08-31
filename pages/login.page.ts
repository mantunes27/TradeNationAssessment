import {Page, Locator, expect} from '@playwright/test'
import * as data from '../testData/baseData.json'

export default class Login{
    private readonly loginButton: Locator;
    private readonly emailAddressField: Locator;
    private readonly passwordField: Locator;
    private readonly invalidLoginMessage: Locator;

    constructor(public page: Page){
        this.loginButton = page.locator('#login');
        this.emailAddressField = page.locator('#username');
        this.passwordField = page.locator('#password')
        this.invalidLoginMessage = page.locator('.Mui-error')
    }

    
    
    async performLogin(emailAddress, password){
        await this.emailAddressField.fill(emailAddress);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async assertInvalidLogin(){

         expect(await this.invalidLoginMessage, data.validationMessages.invalidLoginCredentialsMessage);
    }
}