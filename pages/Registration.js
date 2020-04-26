class Registration {
	get section() {
		return $('.usersManage');
	}
	get titleSelect() {
		return $('select.titleSelect');
	}
	get firstNameInput() {
		return $("input[name*='FirstName']");
	}
	get lastNameInput() {
		return $("input[name*='LastName']");
	}
	get emailInput() {
		return $("input[name*='EmailAddress']");
	}
	get birthDaySelect() {
		return $(".DateSelectorWrap select[name*='Day']");
	}
	get birthMonthSelect() {
		return $(".DateSelectorWrap select[name*='Month']");
	}
	get birthYearSelect() {
		return $(".DateSelectorWrap select[name*='Year']");
	}
	get passwordInput() {
		return $('input.password');
	}
	get confirmPasswordInput() {
		return $('.passwordLast input');
	}
	fillFirstName(firstName) {
		this.section.waitForDisplayed();
		this.firstNameInput.setValue(firstName);
	}
	fillLastName(lastName) {
		this.section.waitForDisplayed();
		this.lastNameInput.setValue(lastName);
	}
	fillEmailAddress(email) {
		this.section.waitForDisplayed();
		this.emailInput.setValue(email);
	}
	selectDateOfBirth(day, month, year) {
		this.birthDaySelect.selectByVisibleText(day);
		this.birthMonthSelect.selectByVisibleText(month);
		this.birthYearSelect.selectByVisibleText(year);
	}
	fillPassword(password) {
		this.passwordInput.setValue(password);
	}
	confirmPassword(password) {
		this.confirmPasswordInput.setValue(password);
	}
}
export default new Registration();
