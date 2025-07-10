import { Locator, Page,expect } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";
import { setTimeout } from "node:timers/promises";


export default class RegisterPage {
    private base:PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }
    private Elements = {
        Registerbtn: "//span[@class='mat-mdc-button-persistent-ripple mdc-button__ripple']//following-sibling::span[contains(text(),'Register')]",
        loginBtn: '//span[@class="mat-mdc-button-persistent-ripple mdc-button__ripple"]//following-sibling::span[contains(text(),"Login")]',
        firstname:"//input[@placeholder='First name']",
        lastname:"//input[@placeholder='Last Name']",
        username:"//input[@placeholder='User name']",
        password:"//input[@placeholder='Password']",
        confirm_password:"//input[@placeholder='Confirm Password']",
        Male:"//input[@class='mdc-radio__native-control' and @value='Male']",
        Register:"//span[@class='mat-mdc-button-persistent-ripple mdc-button__ripple']//following-sibling::span[contains(text(),'Register')]",
        LoginBtnsubmit:'//button[@class="mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base"]//span[@class="mat-mdc-button-persistent-ripple mdc-button__ripple"]//following-sibling::span[contains(text(),"Login")]'
    }
    async clickLoginLink() {
        await this.page.locator(this.Elements.loginBtn).click();
    }
    async clickRegisterLink() {
        await this.page.locator(this.Elements.Registerbtn).click();
    }
    async enterFirstName(firstname: string) {
        await this.page.locator(this.Elements.firstname).fill(firstname);
    }
    async enterLastName(lastname: string) {
        await this.page.locator(this.Elements.lastname).fill(lastname);
    }
    async enterUsername(username: string) {
        await this.page.locator(this.Elements.username).fill(username);
    }
    async enterPassword(password: string) {
        await this.page.locator(this.Elements.password).fill(password);
    }
    async enterConfirmPassword(confirm_password: string) {
        await this.page.locator(this.Elements.confirm_password).fill(confirm_password);
    }
    async selectGender() {
        await this.page.locator(this.Elements.Male).check();
    }
    async clickRegisterButton() {
        await this.page.locator(this.Elements.Registerbtn).click();
        await setTimeout(3000); 
    }
    async VerifyLoginButton() {
        await setTimeout(3000); // Wait for 3 seconds to ensure the registration is processed

        await expect(this.page.url()).toBe('https://bookcart.azurewebsites.net/register');


    }
}