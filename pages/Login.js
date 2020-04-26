class Login {
	get createAnAccountLink() {
		return $('section.newCustomer a');
	}
	clickOnCreateAccountButton() {
		this.createAnAccountLink.waitForDisplayed();
		this.createAnAccountLink.click();
	}
}
export default new Login();
