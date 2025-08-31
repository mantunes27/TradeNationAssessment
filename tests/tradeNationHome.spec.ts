import { test } from '@playwright/test';
import Home from '../pages/home.page';

test('current title is correct', async ({ page }) => {
    let homePage = new Home(page);
    await homePage.navigateToHome()
    await homePage.acceptAllCookies();
    await homePage.clickLogo();
    await homePage.validateTitle();
});