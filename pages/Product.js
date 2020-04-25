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
	get sizesSection() {
		return $('.sizeButtons');
	}
	get listOfSizes() {
		return $$('.sizeButtons li');
	}
	clickAddToBagButton() {
		this.productDetailsSection.waitForDisplayed();
		this.addToBagButton.click();
		// Waiting until button label changes from 'Adding' to 'Add To Bag'
		this.addToBagButton.$(`*=ADDING...`).waitForDisplayed(5000, true);
	}
	selectSizeByName(name) {
		this.productDetailsSection.waitForDisplayed();
		this.sizesSection.$(`li*=${name}`).click();
	}
}
export default new Product();
