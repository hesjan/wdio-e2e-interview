class PromotionalBanner {
	get promotion() {
		return $('#advertPopup');
	}
	get closeButton() {
		return $('#advertPopup button.close');
	}
	closeIfDisplayed() {
		//Probably this popup is not always displayed
		try {
			this.promotion.waitForDisplayed();
			this.closeButton.click();
		} catch (ex) {
			console.log('Promotion was not displayed');
		}
	}
}
export default new PromotionalBanner();
