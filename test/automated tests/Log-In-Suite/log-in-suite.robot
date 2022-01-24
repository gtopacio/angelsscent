*** Settings ***
Documentation   Log-In Suite 
...
...             This test follows the example using keywords from
...             the SeleniumLibrary
Library         SeleniumLibrary

*** Test Cases ***
Open Website
    # open website
    Open Browser  http://localhost:3000/  chrome
    # set window size
    Maximize Browser Window
    # check if landing page
    Page Should Contain Button  xpath://*[@id="__layout"]/div/div[1]/div/div[2]/div/div/div[3]/a/button
    # click shop now button
    Click Button  xpath://*[@id="__layout"]/div/div[1]/div/div[2]/div/div/div[3]/a/button
    #
    Wait Until Element Contains  xpath://*[@id="navbarNav"]/ul/li[1]  Home
    # click dropdown
    Click Element  xpath://*[@id="accountDropdown"]
    # click login
    Click Element  xpath://*[@id="navbarNav"]/ul/li[5]/ul/li[1]/a


    # close browser
    [Teardown]  Close Browser