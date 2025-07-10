import { Given, setDefaultTimeout, Then, When } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';
import removecarppage from '../../pages/addTocartpage'; 
import {getProductNamesFromCSV} from '../../helper/util/csvReader';
import path from 'path';
import RemoveCartPage from '../../pages/removecartpage';

const csvFilePath = path.resolve(__dirname, '../../helper/util/test-data/searchProduct.csv');
const productNames = getProductNamesFromCSV(csvFilePath);


setDefaultTimeout(60 * 1000);

Then('user add and remove product from the cart', async function () {
    const removeCartPage = new RemoveCartPage(pageFixture.page!);
    for (const productName of productNames) {
        await removeCartPage.searchBooks(productName);
        await removeCartPage.addToCart();
        await removeCartPage.clickcartbtn();
        await removeCartPage.removeBookFromCart(productName);
    }
    pageFixture.logger?.info('Product added and removed from the cart successfully');
});