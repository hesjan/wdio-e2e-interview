class Menu {
	get section() {
		return $('nav#topMenu');
	}
	get flyOutSubMenu() {
		return $('li.sdHover .SubMenuWrapper');
	}
	hoverMenuItemByName(name) {
		this.section.$(`*=${name}`).moveTo();
	}
	selectSubMenuItemByName(name) {
		console.log($('li.sdHover .SubMenuWrapper').getText());
		console.log('-----------------');
		console.log(this.flyOutSubMenu.getText());
		this.flyOutSubMenu.$(`*=${name}`).waitForDisplayed();
		this.flyOutSubMenu.$(`*=${name}`).click();
	}
	hoverOverMenuItemAndSelectProductFromFlyout(categoryName, productName) {
		this.hoverMenuItemByName(categoryName);
		this.selectSubMenuItemByName(productName);
	}
}
export default new Menu();
