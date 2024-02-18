import chai from 'chai';
import { scrollIntoView } from 'webdriverio/build/commands/element';
const assert = chai.assert;

class CustomFunctions {

waitForElementToBeVisible(locator){
global.elementselector = locator;
 const webElement = $(locator);
 webElement.waitForDisplayed({timeout: 300000, interval: 1000});
 expect(webElement).toBeDisplayed();
 return this;
}

waitForElementToBeClickable(locator){
 global.elementselector = locator;
 const webElement = $(locator);
 webElement.waitForElementToBeClickable({timeout: 300000, interval: 1000});
 return this;
}

clickElement(locator){
 global.elementselector = locator;
 const webElement = $(locator);
 this.waitForElementToBeVisible(locator);
 this.waitForElementToBeClickable(locator);
 webElement.click();
 return this;
}

clearAndEnterText(locator, text){
 global.elementselector = locator;
 this.waitForElementToBeVisible(locator);
 this.waitForElementToBeClickable(locator);
 const webElement = $(locator);
 webElement.clearValue();
 webElement.setValue(text);
 return this;
}

getTextFromElement(locator){
    global.elementselector = locator;
    const webElement = $(locator);
    this.waitForElementToBeVisible(locator);
    webElement.clearValue();
    return webElement.getText();
}

verifyElementIsVisible(locator){
 global.elementselector = locator;
 const webElement = $(locator);
 this.waitForElementToBeVisible(locator);
 assert.isTrue(webElement.isDisplayed());
 return this;
}
assertTextForElement(locator, expectedText){
 global.elementselector = locator;
 const webElement = $(locator);
 this.waitForElementToBeVisible(locator);
 assert.equal(webElement.getText().trim(),expectedText.trim(),
 "Expected Text: " + expectedText +
 "\n Actual text: " + webElement.getText() +
 "\n Element Locator: " + locator + "\n")
 return this;
}

assertUrltForLinkElement(locator, expectedText){
 global.elementselector = locator;
 const webElement = $(locator);
 this.waitForElementToBeVisible(locator);
 assert.equal(webElement.getAttribute('href'),expectedText)
 return this;
}

assertHaveAttributeforElement(locator,attribute){
 global.elementselector = locator;
 const webElement = $(locator);
 this.waitForElementToBeVisible(locator);
 expect(webElement.toHaveAttribute(attribute));
 return this;
}

assertValueIsTrue(value){
 assert.isTrue(value, "Expected value is true, but returned false");
 return this;
}

scrollToViewElement(locator){
 global.elementselector = locator;
 const webElement = $(locator);
 return webElement.scrollIntoView();
}

moveToViewElement(locator){
    global.elementselector = locator;
    const webElement = $(locator);
    return webElement.moveToElement();
}













}