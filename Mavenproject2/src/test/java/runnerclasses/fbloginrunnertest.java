package runnerclasses;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;	


@RunWith(Cucumber.class)
@CucumberOptions(features="src/main/resources/Feature", glue= {"com.stepdefinitions"},
plugin = {"html:Reports\\HTMLreport", "json:Reports\\JsonReports\\Cucumber.json"},
monochrome = true	
		
		)
	


public class fbloginrunnertest {

}
	
