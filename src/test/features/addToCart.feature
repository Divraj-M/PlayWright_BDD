Feature: User Authentication tests

Background:
    Given user navigates to the application
    And user click on the login link
@pass
Scenario: Add to the cart should be success
    Given user enter the username as "<username>"
    And user enter the password as "<password>"
    When user click on the login button
    Then user search the book "<book>"
    And user add the book to cart
    And user can view the book carted

Examples:
| username   | password    | book          |
| DivrajDiv1 | Divraj123   | roomies       |
| DivrajM    | Divraj123   |Rot & Ruin|

# @fail
# Scenario: Add to cart should be failed
#     Then User search the book "Thealchemist"
#     And User add the book to cart
#     And User can view the book carted