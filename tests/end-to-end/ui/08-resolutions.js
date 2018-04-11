/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import Global from '../../pageobjects/global';
import sideNav from '../../pageobjects/side-nav.page';

import {username, email, password} from '../../data/user.js';
import {checkIfUserIsValid} from '../../data/checks';


//skipping this since the main content its not moved anymore, instead there is a overlay of the side nav over the main content
describe('[Resolution]', ()=> {
	describe('[Mobile Render]', ()=> {
		before(()=> {
			checkIfUserIsValid(username, email, password);
			sideNav.getChannelFromList('general').waitForExist(5000);
			sideNav.openChannel('general');
			Global.setWindowSize(650, 800);
		});

		after(()=> {
			Global.setWindowSize(1450, 900);
			sideNav.preferencesClose.waitForVisible(5000);
			sideNav.preferencesClose.click();
			// sideNav.spotlightSearch.waitForVisible(5000);
		});

		describe('moving elements:', () => {
			it('it should close de sidenav', () => {
				return !sideNav.sideBar.isVisibleWithinViewport();
			});

			it('it should press the navbar button', () => {
				sideNav.burgerBtn.click();
			});

			it('it should open de sidenav', () => {
				sideNav.sideBar.isVisibleWithinViewport();
			});

			it('it should open general channel', () => {
				sideNav.openChannel('general');
			});

			it('it should close de sidenav', () => {
				return !sideNav.sideBar.isVisibleWithinViewport();
			});

			it('it should press the navbar button', () => {
				sideNav.burgerBtn.click();
			});

			it('it should open the user preferences screen', () => {
				sideNav.accountMenu.waitForVisible(5000);
				sideNav.accountMenu.click();
				sideNav.account.waitForVisible(5000);
				sideNav.account.click();
			});

			it('it should press the preferences link', () => {
				sideNav.preferences.waitForVisible(5000);
				sideNav.preferences.click();
			});

			it('it should close de sidenav', () => {
				return !sideNav.sideBar.isVisibleWithinViewport();
			});

			it('it should press the navbar button', () => {
				sideNav.burgerBtn.click();
			});

			it('it should press the profile link', () => {
				sideNav.profile.waitForVisible(5000);
				sideNav.profile.click();
			});

			it('it should close de sidenav', () => {
				return !sideNav.sideBar.isVisibleWithinViewport();
			});

			it('it should press the navbar button', () => {
				sideNav.burgerBtn.click();
			});
		});
	});
});
