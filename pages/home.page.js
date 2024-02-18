import customFunctions from '../support/custom_functions'
import chai from 'chai';
import assert from 'chai';

class HomePage {

//HomePage Locators

corporateLogo = '[//header/div[@class="corp-header__logos"]/a]';
corporateLogoImage = '[//header/div[@class="corp-header__logos"]/a/img]';
heroImage = '[//div[@class="reimagine__hero"]/img[2]]';
heroHeaderText = '[//div[@class="reimagine__hero"]/h1]';

searchButton = '[//i[@class="desktop-search__icon"]';
searchKeyword = '[//li[@class="desktop-search__search"]/input]';
clickSearch= '[//a[@class= "navigation-search-list__link"]]';
searchResult= '[//h1[@class= "page-title text-center light-font"]]';

navigationItemCompany = '[(//div[@class="navigation__title-holder"]/a)[1]]';
navigationItemBrandServices = '[(//div[@class="navigation__title-holder"]/a)[2]]';
navigationItemInnovation = '[(//div[@class="navigation__title-holder"]/a)[3]]';
navigationItemPeople = '[(//div[@class="navigation__title-holder"]/a)[4]]';
navigationItemResponsibility = '[(//div[@class="navigation__title-holder"]/a)[5]]';
navigationItemInvestorRelations = '[(//div[@class="navigation__title-holder"]/a)[6]]';
navigationItemNewsMedia = '[(//div[@class="navigation__title-holder"]/a)[7]]';
optionJaguarClassic = '[(//div[@class="navigation__section-wrap"])[2]//a[3]]';

findContactUs = '[//a[@href="/contact-us"]]';
clickContactUs = '[//a[@href="/contact-us"]]';
contactUsPage = '[//h1[@class="page-title text-center light-font"]/span]';


//Functions

launchHomePage () {
    return browser.url('/');
}

homePageCorporateLogo(){
    customFunctions.waitForElementToBeVisible(this.corporateLogo);
    customFunctions.verifyElementIsVisible(this.corporateLogo)
    customFunctions.assertHaveAttributeforElement(this.corporateLogoImage, 'src');
}

homePageHeroImageAndText(){
    customFunctions.waitForElementToBeVisible(this.heroImage);
    customFunctions.verifyElementIsVisible(this.heroImage);
    customFunctions.assertHaveAttributeforElement(this.heroImage, 'src');
    customFunctions.waitForElementToBeVisible(this.heroHeaderText);
    customFunctions.assertTextForElement(this.heroHeaderText, 'is our roadmap for the future')
}

clickSearchButton(){
    customFunctions.verifyElementIsVisible(this.searchButton);
    customFunctions.clickElement(this.searchButton);
}

enterSearchKeyword(keyword){
    customFunctions.verifyElementIsVisible(this.searchKeyword);
    customFunctions.clearAndEnterText(this.searchKeyword, keyword);
}

clickOnSearchResults(){
    customFunctions.verifyElementIsVisible(this.clickSearch);
    customFunctions.clickElement(this.clickSearch);
}

verifySearchResults(){
    customFunctions.verifyElementIsVisible(this.searchResult);
    customFunctions.assertTextForElement(this.searchResult, 'Search Results');
}

verifyNavigationItem(){
    customFunctions.verifyElementIsVisible(this.navigationItemCompany);
    customFunctions.assertTextForElement(this.navigationItemCompany, 'Company');
    customFunctions.verifyElementIsVisible(this.navigationItemBrandServices);
    customFunctions.assertTextForElement(this.navigationItemBrandServices, 'BRANDS & SERVICES');
    customFunctions.verifyElementIsVisible(this.navigationItemInnovation);
    customFunctions.assertTextForElement(this.navigationItemInnovation, 'Innovation');
    customFunctions.verifyElementIsVisible(this.navigationItemPeople);
    customFunctions.assertTextForElement(this.navigationItemPeople, 'People');
    customFunctions.verifyElementIsVisible(this.navigationItemResponsibility);
    customFunctions.assertTextForElement(this.navigationItemResponsibility, 'Responsibility');
    customFunctions.verifyElementIsVisible(this.navigationItemInvestorRelations);
    customFunctions.assertTextForElement(this.navigationItemInvestorRelations, 'Investor Relations');
    customFunctions.verifyElementIsVisible(this.navigationItemNewsMedia);
    customFunctions.assertTextForElement(this.navigationItemNewsMedia, 'NEWS & MEDIA ');
}

selectNavigationItem(item){
    if (item = 'BRANDS & SERVICES'){
    customFunctions.waitForElementToBeVisible(this.navigationItemBrandServices);
    customFunctions.moveToViewElement(this.navigationItemBrandServices); 
 }  
}

verifyOptionForNavigationItem(){
    customFunctions.verifyElementIsVisible(this.optionJaguarClassic);
    customFunctions.assertTextForElement(this.optionJaguarClassic, 'Jaguar Classic');
}

findContactUs(){
    customFunctions.verifyElementIsVisible(this.findContactUs);
}

clickContatusUs(){
    customFunctions.scrollToViewElement(this.clickContactUs)
    customFunctions.clickElement(this.clickContactUs);
}

verifyContactUsPage(){
    customFunctions.verifyElementIsVisible(this.contactUsPage);
    customFunctions.assertTextForElement(this.contactUsPage, 'Contact Us');
}

}

export default new HomePage();
