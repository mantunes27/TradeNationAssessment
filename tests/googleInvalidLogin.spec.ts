import { test } from '@playwright/test';
import Home from '../pages/home.page';
import SignUp from '../pages/signup.page';
import Login from '../pages/login.page';
import * as data from '../testData/baseData.json'

test('current title is correct', async ({ page }) => {
    let homePage = new Home(page);
    await homePage.navigateToHome()
    await homePage.acceptAllCookies();
    await homePage.clickSignUpButton();

    let signupPage = new SignUp(page);
    await signupPage.clickLoginButton();

    let loginPage = new Login(page);
    await loginPage.performLogin(data.invalidLoginCredentials.emailAddress, data.invalidLoginCredentials.password);
    await loginPage.assertInvalidLogin();
});