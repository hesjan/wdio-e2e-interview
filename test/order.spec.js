import { startBrowserWithResolution } from '../helpers/test-utils';
import Menu from '../pages/Menu';
import PromotionalBanner from '../pages/PromotionalBanner';
import SearchResults from '../pages/SearchResults';
import Product from '../pages/Product';
import Header from '../pages/Header';
import Checkout from '../pages/Checkout';
import { cartUrl } from '../config/urls';

describe('User', () => {
	const testData = [
		{
			productCategory: 'PIŁKA NOŻNA',
			productSubCategory: 'Nike Tiempo',
			productName: 'React Tiempo Legend 8 Pro IC Indoor/Court Soccer Shoe',
			productSize: '10 (45)',
		},
		{
			productCategory: 'MĘŻCZYŹNI',
			productSubCategory: 'Buty do biegania',
			productName: 'Free RN 5.0 Running Shoes Mens',
			productSize: '9 (44)',
		},
	];

	testData.forEach(data => {
		it(`should be able to order '${data.productCategory}': '${data.productName}' using top menu to find it`, () => {
			startBrowserWithResolution(1600, 1200);
			PromotionalBanner.closeIfDisplayed();
			Menu.hoverOverMenuItemAndSelectProductFromFlyout(data.productCategory, data.productSubCategory);
			SearchResults.selectProductByName(data.productName);
			Product.selectSizeByName(data.productSize);
			Product.clickAddToBagButton();

			Header.clickOnCheckoutButton();
			// I'm validating only url and if Checkout section is displayed
			// - I didn't want to create an account because it's production env of this shop
			// Standard e2e will require proceeding until shopping is done
			expect(Checkout.isProductDisplayedOnCheckoutByName(data.productName)).to.be.true;
			expect(browser.getUrl()).to.equal(cartUrl);
		});
	});
});
