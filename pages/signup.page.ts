import {Page, Locator} from '@playwright/test'

export default class SignUp{
    private readonly loginRedirectButton: Locator;
    
    constructor(public page: Page){
        this.loginRedirectButton = page.locator('.css-1gvu3z1');
    }
    
    async clickLoginButton(){
        await this.loginRedirectButton.click();
    }
}