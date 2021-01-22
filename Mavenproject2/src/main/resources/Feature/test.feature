Feature: verification of login to facebook

Scenario Outline:  login to facebook
Given user in login page
When i enter <un> and <pd>
And i click 
Then login to homepage
Examples: 
    |un|pd|
    |dineshkumar1712@gmail.com|FACEBOOK|
    |user|User123|

	
	