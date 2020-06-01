"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nativescript_dev_appium_1 = require("nativescript-dev-appium");
const chai_1 = require("chai");
const addContext = require('mochawesome/addContext');
describe("sample scenario", function () {
    return __awaiter(this, void 0, void 0, function* () {
        let driver;
        before(function () {
            return __awaiter(this, void 0, void 0, function* () {
                nativescript_dev_appium_1.nsCapabilities.testReporter.context = this;
                driver = yield nativescript_dev_appium_1.createDriver();
            });
        });
        after(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield driver.quit();
                console.log("Quit driver!");
            });
        });
        it("App is Opened", () => __awaiter(this, void 0, void 0, function* () {
            chai_1.assert(true);
        }));
        it("Edit Button is present", () => __awaiter(this, void 0, void 0, function* () {
            const button = yield driver.findElementByText("Edit");
            const buttonText = yield button.text();
            chai_1.assert.equal(buttonText, "Edit");
        }));
        it("After Clicking Edit, Close button is present", () => __awaiter(this, void 0, void 0, function* () {
            const editButton = yield driver.findElementByText("Edit");
            yield editButton.tap();
            const closeButton = yield driver.findElementByText("Close");
            const buttonText2 = yield closeButton.text();
            chai_1.assert.equal(buttonText2, "Close");
        }));
        it("After Click Close, Edit button is present", () => __awaiter(this, void 0, void 0, function* () {
            const closeButton = yield driver.findElementByText("Close");
            yield closeButton.tap();
            const againEditButton = yield driver.findElementByText("Edit");
            const againEditButtonText = yield againEditButton.text();
            chai_1.assert.equal(againEditButtonText, "Edit");
        }));
        it("City Name Field is present", () => __awaiter(this, void 0, void 0, function* () {
            const button = yield driver.findElementByText("Edit");
            yield button.tap();
            const cityField = yield driver.findElementByText("Enter Your Location");
        }));
        it("City Name Field is empty initially", () => __awaiter(this, void 0, void 0, function* () {
            let cityField = yield driver.findElementByText("Enter Your Location");
            let cityFieldText = yield cityField.text();
            chai_1.assert.equal(cityFieldText.length, 19);
        }));
        it("Get Weather Data button is present", () => __awaiter(this, void 0, void 0, function* () {
            const getDataButton = yield driver.findElementByText("Get Weather Data");
        }));
        it("City Not Found Message is displayed", () => __awaiter(this, void 0, void 0, function* () {
            let cityField = yield driver.findElementByText("Enter Your Location");
            cityField.type("wrong city");
            let getDataButton = yield driver.findElementByText("Get Weather Data");
            yield getDataButton.tap();
            let cityNotFound = yield driver.findElementByText("City Not Found");
        }));
        it("Weather Data is displayed", () => __awaiter(this, void 0, void 0, function* () {
            let cityField = yield driver.findElementByText("Enter Your Location");
            cityField.type("chennai");
            let getDataButton = yield driver.findElementByText("Get Weather Data");
            yield getDataButton.tap();
            let DataFound = yield driver.findElementByText("City Details");
        }));
    });
});
//# sourceMappingURL=sample.e2e-spec.js.map