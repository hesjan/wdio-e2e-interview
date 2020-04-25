class PromotionalBanner {
	get sortByDropdown() {
		return $('select#ddlSortOptions');
	}
	get productsSection() {
		return $('#navlist');
	}
	get listOfProducts() {
		return $$('#navlist .s-productthumbbox');
	}
	getNumberOfProducts() {
		return this.listOfProducts.length;
	}
	findProductByName(name) {
		this.productsSection.waitForDisplayed();
		this.productsSection.$(`*=${name}`).scrollIntoView();
		return this.productsSection.$(`*=${name}`);
	}
	selectProductByName(name) {
		this.findProductByName(name).click();
	}
}
export default new PromotionalBanner();
