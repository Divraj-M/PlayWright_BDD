Feature: Add and Remove Book from Cart

Background:
    Given user navigates to the application
    And user click on the login link
    Given user enter the username as "Divraj12"
    And user enter the password as "Divraj123"
    When user click on the login button
Scenario: Remove the book from the cart
    Then user add and remove product from the cart
