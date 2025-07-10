Feature: User Registration

Background:
    Given user navigates to the application

Scenario: Registration should be success
    And user click on the login link and Register link
    When the user enters the valid fields
    Then user should be redirected to the Login page and Log in

# Scenario: Registration should fail with invalid email
#     Given the user enters the invalid email
#     When user clicks on the Register button
#     Then user should see an error message
