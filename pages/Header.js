class Header {
	get section() {
		return $('#HeaderGroup');
	}
	get searchInput() {
		return $('#HeaderGroup input#txtSearch');
	}
	get searchLoopButton() {
		return $('#HeaderGroup a#cmdSearch');
	}
	get emptyBag() {
		return $('#divBagTotalLink .HeaderBagEmptyMessage');
	}
	get checkoutButton() {
		return $('.HeaderChecklinkWrap');
	}
	searchFor(searchPhrase) {
		this.searchInput.waitForDisplayed();
		this.searchInput.setValue(searchPhrase);
		// I decided to use enter because I believe it's more common scenario then clicking on eyeglass, in standard project I would prefer to cover both scenarios
		browser.keys('Enter');
	}
	clickOnCheckoutButton() {
		$('#divBagItems').waitForDisplayed(5000, true);
		this.checkoutButton.waitForEnabled();
		// this.checkoutButton.moveTo();
		this.checkoutButton.click();
	}
	hoverOverCheckoutButton() {
		this.checkoutButton.waitForEnabled();
		this.checkoutButton.moveTo();
	}
}
export default new Header();
