import {Page, Locator, expect} from '@playwright/test'
import * as data from '../testData/baseData.json'

export default class Home{
    private readonly logo: Locator;
    private readonly signUpButton: Locator;
    private readonly acceptCookiesButton: Locator;

    constructor(public page: Page){
        this.logo = page.locator('.css-n9tb1o');
        this.signUpButton = page.locator('header #cc-button-cta');
        this.acceptCookiesButton = page.locator('#onetrust-accept-btn-handler');
    }
    
    async navigateToHome(){
        await this.page.goto(data.baseUrl);
    }

    async acceptAllCookies(){
        await this.acceptCookiesButton.click();
    }
    async clickLogo(){
        await this.logo.click();
    }

    async clickSignUpButton(){
        await this.signUpButton.click();
    }
    
    async validateTitle(){
        const title = await this.page.title();
        await expect(title, `Title is: ${title}`).toBe(data.validationMessages.expectedTitle);
    }
}