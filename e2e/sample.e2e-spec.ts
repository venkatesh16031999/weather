import { AppiumDriver, createDriver, SearchOptions, nsCapabilities } from "nativescript-dev-appium";
import { assert } from "chai";

describe("sample scenario", async function(){
    let driver: AppiumDriver;

    before(async function(){
        nsCapabilities.testReporter.context = this; 
        driver = await createDriver();
    });

    after(async function () {
        await driver.quit();
        console.log("Quit driver!");
    });

    it("App is Opened",async()=>{

        assert(true);

    })

    it("Edit Button is present", async ()=>{
        const button = await driver.findElementByText("Edit");
        const buttonText=await button.text();
        assert.equal(buttonText,"Edit");
    });

    it("After Clicking Edit, Close button is present", async ()=>{
        const editButton = await driver.findElementByText("Edit");
        await editButton.tap();
        const closeButton = await driver.findElementByText("Close");
        const buttonText2=await closeButton.text();
        assert.equal(buttonText2,"Close");
    });

    it("After Click Close, Edit button is present", async ()=>{
        const closeButton = await driver.findElementByText("Close");
        await closeButton.tap();
        const againEditButton=await driver.findElementByText("Edit");
        const againEditButtonText=await againEditButton.text();
        assert.equal(againEditButtonText,"Edit");
    });

    it("City Name Field is present", async ()=>{
        const button = await driver.findElementByText("Edit");
        await button.tap();
        const cityField = await driver.findElementByText("Enter Your Location");
    });

    it("City Name Field is empty initially", async ()=>{
        let cityField = await driver.findElementByText("Enter Your Location");
        let cityFieldText=await cityField.text();
        assert.equal(cityFieldText.length,19);
    });

    it("Get Weather Data button is present", async ()=>{
        const getDataButton = await driver.findElementByText("Get Weather Data");
    });

    it("City Not Found Message is displayed", async ()=>{
        let cityField = await driver.findElementByText("Enter Your Location");
        cityField.type("wrong city");
        let getDataButton = await driver.findElementByText("Get Weather Data");
        await getDataButton.tap();
        let cityNotFound = await driver.findElementByText("City Not Found");
    });

    it("Weather Data is displayed", async ()=>{
        let cityField = await driver.findElementByText("Enter Your Location");
        cityField.type("chennai");
        let getDataButton = await driver.findElementByText("Get Weather Data");
        await getDataButton.tap();
        let DataFound = await driver.findElementByText("City Details");
    });

});
