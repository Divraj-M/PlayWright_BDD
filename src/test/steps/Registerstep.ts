import { Given, setDefaultTimeout, Then, When } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';
import RegisterPage from '../../pages/registerpage';
import data from '../../helper/util/test-data/registerUser.json';

    Given('user click on the login link and Register link', async function () {
            const registerPage = new RegisterPage(pageFixture.page!);
            await registerPage.clickLoginLink();
            pageFixture.logger?.info('Login link clicked');
            await registerPage.clickRegisterLink();
            pageFixture.logger?.info('Register link clicked');
            });

    When('the user enters the valid fields', async function () {
        await pageFixture.page?.waitForTimeout(3000); 
        const registerPage = new RegisterPage(pageFixture.page!);
        for (const user of data) {

        const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '');
        const uniqueUsername = `${user.userName}${timestamp}`;

            await registerPage.enterFirstName(user.firstName);
            await registerPage.enterLastName(user.lastName);
            await registerPage.enterUsername(uniqueUsername);
            await pageFixture.page?.waitForTimeout(3000); 
            await registerPage.enterPassword(user.password);
            await registerPage.enterConfirmPassword(user.confirmPassword);
            await registerPage.selectGender(); 
            await registerPage.clickRegisterButton();
            await registerPage.clickRegisterLink();

            
            
        }
        await pageFixture.page?.waitForTimeout(3000); 

        pageFixture.logger?.info('User details entered successfully');
    });

Then('user should be redirected to the Login page and Log in', async function () {
              const registerPage = new RegisterPage(pageFixture.page!);
              await pageFixture.page?.waitForTimeout(3000); 
            await registerPage.VerifyLoginButton();
                pageFixture.logger?.info('Login button verified after registration');
                  
         });