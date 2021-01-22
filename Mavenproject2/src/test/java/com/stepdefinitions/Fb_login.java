package com.stepdefinitions;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Fb_login {
WebDriver driver;

	@Given("user in login page")
	public void user_in_login_page() {
	//	ChromeOptions options = new ChromeOptions();
		//options.addArguments("--disable-notifications");
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.get("https://www.facebook.com");
	    
	}

	@When("i enter (.*) and (.*)$")
	public void i_enter_user_and_pass(String user, String psd) {
	  
		WebElement email = driver.findElement(By.id("email"));	
		
		email.sendKeys(user);
		WebElement pwd = driver.findElement(By.id("pass"));
		pwd.sendKeys(psd);
		
		
	}

	
	@And("i click")
	public void i_click() {
	  WebElement login = driver.findElement(By.xpath("//*[@name='login']"));
	  login.click();
	}
	
	@Then("login to homepage")
	public void login_to_homepage() throws AWTException {
		String cururl = driver.getCurrentUrl();
		System.out.println(cururl+"a");
		
		Robot rb = new Robot();
		rb.keyPress(KeyEvent.VK_TAB);
				rb.keyPress(KeyEvent.VK_ENTER);
				driver.close();
	
	  
	}


	
}
