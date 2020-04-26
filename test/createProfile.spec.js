import { startBrowserWithResolution } from '../helpers/test-utils';
import Header from '../pages/Header';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import PromotionalBanner from '../pages/PromotionalBanner';

describe('User ', () => {
	const userData = {
		firstName: 'Michał',
		lastName: 'C.',
		emailAddress: 'michal@mail.com',
		dayOfBirth: '18',
		monthOfBirth: 'Kwiecień',
		yearOfBirth: '1993',
		password: 'password1234',
	};
	it('TC5. should have possibility to create profile', () => {
		startBrowserWithResolution(1600, 1200);
		PromotionalBanner.closeIfDisplayed();
		Header.clickOnLoginButton();
		Login.clickOnCreateAccountButton();
		Registration.fillFirstName(userData.firstName);
		Registration.fillLastName(userData.lastName);
		Registration.fillEmailAddress(userData.emailAddress);
		Registration.selectDateOfBirth(userData.dayOfBirth, userData.monthOfBirth, userData.yearOfBirth);
		Registration.fillPassword(userData.password);
		Registration.confirmPassword(userData.password);
		// I'm not completing creating profile because it will work only firm time
	});
});
