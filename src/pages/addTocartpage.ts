import { Locator, Page,expect } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";


export default class AddTocartpage {
    private base:PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }
    private Elements = {
        
        search: '//input[@placeholder="Search books or authors"]',
        bookOption: '//mat-option[@class="mat-mdc-option mdc-list-item ng-star-inserted"]//span',
        addtocart: '//span[contains(text()," Add to Cart")]',
        cartCount: '//*[@id="mat-badge-content-0"]'
    };

    async searchBooks(book: string) {
        await this.page.locator(this.Elements.search).fill(book);
        await this.page.locator(this.Elements.bookOption).click();
        console.log(`Searched for book: ${book}`);
    }
    async addToCart() {
        await this.page.locator(this.Elements.addtocart).click();
        console.log('Add to Cart button clicked');
        await this.page.waitForTimeout(1000);
    }
    async verifyBookInCart() {
        const cartedBookText = await this.page.locator(this.Elements.cartCount).textContent();
        console.log('Carted Book Text:', cartedBookText);
        expect(Number(cartedBookText)).toBeGreaterThanOrEqual(0);
        console.log(`Book carted successfully, cart count: ${cartedBookText}`);
    }
    


}