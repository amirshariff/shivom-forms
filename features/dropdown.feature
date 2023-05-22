Feature: Dropdown list 
    Scenario: User is on the Landing Page
        Given User has open the landing Page
        When User selects option DSE from dropdown list
        Then Code grabs the DSE JSON path 
        Then Code fetchs the DSE JSON file to place in a variable