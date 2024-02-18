Feature: Validation of JLR corporate website Home Page

Background: 
Given I launch JLR website URL

@homepage @testlandingpage
Scenario: As a user, I can land on the JLR website home page  
  Then I should verify the corporate logo on home page
  And I should verify the home page hero image and text

@homepage @testsearch
Scenario Outline: As a user, I can find news using search function on homepage
  When I click on search function
  And I enter search '<keyword>'
  And I click on the top search result
  Then I should verify search result landing page

Examples:
|keyword|
|announcement|

@homepage @testnavigation
Scenario Outline: As a user, I can navigate to nagivation drawer on JLR website home page , verify different options
  Then I should verify all navigation items are visible on page
  Then I should navigate to the '<navigation>' item
  Then I should verify that different options are available

Examples:
|navigation|
|BRANDS & SERVICES|

@homepage @testcontactus
Scenario: As a user, I can contact JLR form the corporate website home page
  Then I should scroll down to end of the home page and find contact us
  And I should click on contatus us link
  Then I land on contact us page



