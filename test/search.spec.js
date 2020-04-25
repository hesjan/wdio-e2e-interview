import PromotionalBanner from '../pages/PromotionalBanner';
import Header from '../pages/Header';
import SearchResults from '../pages/SearchResults';
import Product from '../pages/Product';
import Basket from '../pages/Basket';
import Checkout from '../pages/Checkout';
import { cartUrl } from '../config/urls';

describe('Search functionality', () => {
	it('should work', () => {
		browser.url('');
		browser.setWindowSize(1600, 1200);
		PromotionalBanner.closeIfDisplayed();
		Header.searchFor('Juventus');
		SearchResults.selectProductByName('Juventus Home Jersey 2019 2020');
		Product.clickAddToBagButton();
		Header.clickOnCheckoutButton();
		// I'm validating only url - I didn't want to create an account because it's production env of this shop
		// Standard e2e will require proceeding until shopping is done
		expect(Checkout.isProductDisplayedOnCheckoutByName('Juventus Home Jersey 2019 2020')).to.be.true;
		expect(browser.getUrl()).to.equal(cartUrl);
	});
});
