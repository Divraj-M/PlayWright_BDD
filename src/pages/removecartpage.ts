import { Locator, Page,expect } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";
import { setTimeout } from "node:timers/promises";


export default class RemoveCartPage {
    private base:PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }
    private Elements = {
        search: '//input[@placeholder="Search books or authors"]',
        bookOption: '//mat-option[@class="mat-mdc-option mdc-list-item ng-star-inserted"]//span',
        addtocart: '//span[contains(text()," Add to Cart")]',
        cartCount: '//*[@id="mat-badge-content-0"]',
        textproduct:"//td[@class='mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-title mat-column-title ng-star-inserted']//a",
        clearcart: '//span[contains(text(),"Clear cart")]',
        continueshopping:"//span[contains(text(),'Continue')]",
        cartbtn:"//span[@id='mat-badge-content-0']//parent::mat-icon"
    }
    async searchBooks(book: string) {
        await this.page.locator(this.Elements.search).fill(book);
        await this.page.locator(this.Elements.bookOption).click();
        console.log(`Searched for book: ${book}`);
        await this.page.waitForTimeout(2000);
    }
    async addToCart() {
        await this.page.locator(this.Elements.addtocart).click();
        console.log('Add to Cart button clicked');
        await this.page.waitForTimeout(1000);
    }
    async clickcartbtn() {
        const cartedBookText = await this.page.locator(this.Elements.cartCount).textContent();
        console.log('Carted Book Text:', cartedBookText);
        expect(Number(cartedBookText)).toBeGreaterThanOrEqual(0);
        console.log(`Book carted successfully, cart count: ${cartedBookText}`);
        await this.page.locator(this.Elements.cartbtn).click();
        console.log('Cart button clicked');
        await this.page.waitForTimeout(2000);
    }
    async removeBookFromCart(book: string) {
        await this.page.waitForTimeout(2000);
        const bookText = await this.page.locator(this.Elements.textproduct).textContent();
        console.log('Book in cart:', bookText);
        expect(bookText).toContain(book);
        await this.page.locator(this.Elements.clearcart).click();
        console.log('Clear cart button clicked');
        await this.page.waitForTimeout(1000);
        const continueShoppingButton = this.page.locator(this.Elements.continueshopping);
        await continueShoppingButton.click();
        console.log('Continue shopping button clicked');
        await this.page.waitForTimeout(2000);
    }
}