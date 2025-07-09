import { Given, Then, When } from '@cucumber/cucumber';
import { chromium, Page, Browser } from '@playwright/test';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import HeaderPage from '../../pages/headerPage';
import LoginPage from '../../pages/loginPage';


Given('user navigates to the application', async function () {
  const baseurl = process.env.BASE_URL;
  if (!baseurl) {
    throw new Error('BASE_URL is not defined in the environment variables');
  }
  await pageFixture.page?.goto(baseurl);
  pageFixture.logger?.info(`Navigated to ${baseurl}`);
});
Given('user click on the login link', async function () {
  const loginPage = new LoginPage(pageFixture.page!);
  await loginPage.clickLoginLink();
  pageFixture.logger?.info('Login link clicked');
});

Given('user enter the username as {string}', async function (username) {
           const loginPage = new LoginPage(pageFixture.page!);
            await loginPage.enterUsername(username);
            pageFixture.logger?.info(`Username entered: ${username}`);
         });

Given('user enter the password as {string}', async function (password) {
  const loginPage = new LoginPage(pageFixture.page!);
            await loginPage.enterPassword(password);
           pageFixture.logger?.info(`Password entered: ${password}`);

         });

When('user click on the login button', async function () {
  const loginPage = new LoginPage(pageFixture.page!);
            await loginPage.clickLoginButton();
            pageFixture.logger?.info('Login button clicked');
         });


Then('Login should be success', async function () {
  const loginPage = new LoginPage(pageFixture.page!);
            await loginPage.verifyLoginSuccess(" DivrajDiv1");
            pageFixture.logger?.info(`Login successful, user name displayed: DivrajDiv1`);

         });
Then('Login should fails', async function () {
  const loginPage = new LoginPage(pageFixture.page!);
          await loginPage.verifyLoginFailure("Password is required");
          pageFixture.logger?.info(`Login failed, error message displayed: Password is required`);
       });
