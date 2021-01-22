$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/Feature/test.feature");
formatter.feature({
  "name": "verification of login to facebook",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login to facebook",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user in login page",
  "keyword": "Given "
});
formatter.step({
  "name": "i enter \u003cun\u003e and \u003cpd\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "i click",
  "keyword": "And "
});
formatter.step({
  "name": "login to homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "un",
        "pd"
      ]
    },
    {
      "cells": [
        "dineshkumar1712@gmail.com",
        "FACEBOOK"
      ]
    },
    {
      "cells": [
        "user",
        "User123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login to facebook",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.Fb_login.user_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter dineshkumar1712@gmail.com and FACEBOOK",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.Fb_login.i_enter_user_and_pass(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.Fb_login.i_click()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.Fb_login.login_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login to facebook",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepdefinitions.Fb_login.user_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter user and User123",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepdefinitions.Fb_login.i_enter_user_and_pass(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepdefinitions.Fb_login.i_click()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepdefinitions.Fb_login.login_to_homepage()"
});
formatter.result({
  "status": "passed"
});
});