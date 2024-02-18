import { And, Given, When, Then } from '@cucumber/cucumber';
import customFunctions from '../support/custom_functions'
import homePage from '../pages/home.page';


Given(/^I launch JLR website URL$/, () => {
    homePage.launchHomePage()
});

Then(/^I should verify the corporate logo on home page$/, () => {
    homePage.homePageCorporateLogo()
});

Then(/^I should verify the home page title and text$/, () => {
    homePage.homePageHeroImageAndText()
});

When(/^I click on search function$/, () => {
    homePage.clickSearchButton()
});

Then(/^I enter search '(.*)'$/, (keyword) => {
    homePage.enterSearchKeyword(keyword)
});

Then(/^I click on the top search result$/, () => {
    homePage.clickOnSearchResults()
});

Then(/^I should verify search result landing page$/, () => {
    homePage.verifySearchResults()
});


Then(/^I should verify all navigation items are visible on page$/, () => {
    homePage.verifyNavigationItem()
});

Then(/^I should navigate to the '(.*)' item$/, (item) => {
    homePage.selectNavigationItem(item)
});

Then(/^I should verify that different options are availabl$/, () => {
    homePage.verifyOptionForNavigationItem()
});

Then(/^I should scroll down to end of the home page and find contact us$/, () => {
    homePage.findContactUs()
});

Then(/^I should click on contatus us link$/, () => {
    homePage.clickContatusUs()
});

Then(/^I land on contact us page$/, () => {
    homePage.verifyContactUsPage()
});

