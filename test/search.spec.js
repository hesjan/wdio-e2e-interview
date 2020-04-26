import PromotionalBanner from '../pages/PromotionalBanner';
import Header from '../pages/Header';
import SearchResults from '../pages/SearchResults';
import Product from '../pages/Product';
import Checkout from '../pages/Checkout';
import { cartUrl } from '../config/urls';
import { startBrowserWithResolution } from '../helpers/test-utils';

describe('User can use search functionality', () => {
	// Unfortunately I'm not able to mock this data because it's production env - I hope this products will be still available after a few days
	const testData = [
		{ tcNumber: 'TC3', searchPhrase: 'Juventus', productName: 'Juventus Home Jersey 2019 2020', size: 'L' },
		{ tcNumber: 'TC4', searchPhrase: 'Bayern', productName: 'Bayern Munich Home Koszule 2019 2020', size: '7-8' },
	];

	testData.forEach(data => {
		it(`${data.tcNumber}. to search for '${data.searchPhrase}' products and order '${data.productName}'`, () => {
			startBrowserWithResolution(1600, 1200);
			PromotionalBanner.closeIfDisplayed();
			Header.searchFor(data.searchPhrase);
			SearchResults.selectProductByName(data.productName);
			Product.selectSizeByName(data.size);
			Product.clickAddToBagButton();
			Header.clickOnCheckoutButton();
			// I'm validating only url - I didn't want to create an account because it's production env of this shop
			// Standard e2e will require proceeding until shopping is done
			expect(Checkout.isProductDisplayedOnCheckoutByName(data.productName)).to.be.true;
			expect(browser.getUrl()).to.equal(cartUrl);
		});
	});
});
