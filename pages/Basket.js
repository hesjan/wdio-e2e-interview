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
		this.section.waitForDisplayed();
		this.goToCheckoutButton.waitForEnabled();
		this.goToCheckoutButton.click();
	}
}
export default new Basket();
