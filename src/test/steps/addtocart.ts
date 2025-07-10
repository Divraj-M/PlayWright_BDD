import { expect } from '@playwright/test';
import { setDefaultTimeout,Given,When,Then } from '@cucumber/cucumber';
import { pageFixture} from '../../hooks/pageFixture';
import Addtocartpage from '../../pages/addTocartpage'; // Make sure this path is correct

setDefaultTimeout(60 * 1000);

Then('user search the book {string}', async function (book) {
   const addTocartpage = new Addtocartpage(pageFixture.page!);
   await addTocartpage.searchBooks(book);
   pageFixture.logger?.info(`Searched for book: ${book}`);
});

Then('user add the book to cart', async function () {
   const addTocartpage = new Addtocartpage(pageFixture.page!);
   await addTocartpage.addToCart();
   pageFixture.logger?.info('Add to Cart button clicked');
   await pageFixture.page?.waitForTimeout(1000);
});

Then('user can view the book carted', async function () {
   const addTocartpage = new Addtocartpage(pageFixture.page!);
   await addTocartpage.verifyBookInCart();
   pageFixture.logger?.info('Book carted successfully');
});


