class Checkout {
	get section() {
		return $('#BasketDiv');
	}
	get productDescription() {
		return $('.productdesc')
	}
	isProductDisplayedOnCheckoutByName(name) {
		this.section.waitForDisplayed()
		return this.productDescription.$(`*=${name}`).isDisplayed()
	}
}
export default new Checkout();
