class Product {
	get productImagesContainer() {
		return $('#productImages');
	}
	get productDetailsSection() {
		return $('#productDetails');
	}
	get addToBagButton() {
		return $('#productDetails .addToBasketContainer');
	}
	get addToBagButtonLabel() {
		return $('#productDetails #aAddToBa').getText();
	}
	clickAddToBagButton() {
		this.addToBagButton.waitForDisplayed();
		this.addToBagButton.click();
	}
}
export default new Product();
