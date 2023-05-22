const {Given, When, Then, Before, After} = require("@cucumber/cucumber");
const assert = require("assert");
const webdriver = require('selenium-webdriver');
const {By, Builder} = require("selenium-webdriver");
const {Select} = require('selenium-webdriver')
const dropdown = require("../../src/dropdown");
const data = require("../../assets/json_form/dse_v2.json");
const chrome = require('selenium-webdriver/chrome');

// const service = new chrome.ServiceBuilder('C:\\webdrivers');
// const driver = new Builder().forBrowser('chrome').setChromeService(service).build();

let driver = new webdriver.Builder()
.forBrowser('chrome')
.build();

After(async ()=>  { 
    await driver.quit()
});

Given('User has open the landing Page', async function() {
    // Write code here that turns the phrase above into concrete actionss
    await driver.get("http://127.0.0.1:5500/index.html");
    // const titlePage = await driver.findElement(By.css("h1"));
    let titleText = await driver.getTitle();
    assert.equal( titleText, "Forms Generator"); // how to define webelement in selenium javascript
}); 

When('User selects option DSE from dropdown list', async function () {
    // Write code here that turns the phrase above into concrete actions
    const selectElement = await driver.findElement(By.name("Form Option"));
    const select = new Select(selectElement);
    await select.selectByValue("DSE Form");
    let checkselected = await driver.findElement(By.css("option[value='DSE Form']")).getText();

    assert.equal(checkselected, "DSE Form");
   
});

Then('Code grabs the DSE JSON path', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('Code fetchs the DSE JSON file to place in a variable', function () {

  // Write code here that turns the phrase above into concrete actions
  
  let expectedVar = dropdown.getJson();
  assert.equal(expectedVar, data);
});

