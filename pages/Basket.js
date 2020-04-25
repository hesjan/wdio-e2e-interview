class Basket {
	get section() {
		return $('#divBagItems');
	}
	get showBasketButton() {
		return $('#aViewBag');
	}
	get goToCheckoutButton() {
		return $('#spanCheckout');
	}
	goToCheckout() {
		console.log('Going to checkout');
		this.section.waitForDisplayed();
		console.log('Basket is dipslayed');
		this.goToCheckoutButton.waitForEnabled();
		console.log('Button is enabled');
		this.goToCheckoutButton.click();
		console.log('Button clicked');
	}
}
export default new Basket();
