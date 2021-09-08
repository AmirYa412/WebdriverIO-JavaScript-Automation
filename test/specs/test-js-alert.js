import JavaScriptAlertsPage    from "../../page-objects/js-alerts/js-alerts-page"
import {assert}                from "chai"


const testData = testsData["JavaScriptAlertsPage"]
describe("JavaScriptAlertPage", () => {

    // Assertion lib:      Chai assert

    it("should show js single alert", async () => {
        await JavaScriptAlertsPage.navigate()
        await JavaScriptAlertsPage.clickAlertButton("single")
        assert.isTrue(await browser.getAlertText() === testData["singleAlertMsg"])
        await browser.acceptAlert()
        assert.isFalse(await browser.isAlertOpen())
    })

    it("should cancel js confirm alert", async () => {
        await JavaScriptAlertsPage.navigate()
        await JavaScriptAlertsPage.clickAlertButton("confirm")
        assert.isTrue(await browser.getAlertText() === testData["confirmAlertMsg"])
        await browser.dismissAlert()
        assert.isFalse(await browser.isAlertOpen())
    })

    it("should display js prompt alert input", async () => {
        await JavaScriptAlertsPage.navigate()
        await JavaScriptAlertsPage.clickAlertButton("prompt")
        assert.isTrue(await browser.getAlertText() === testData["promptAlertMsg"])
        const promptMsg = "Hello World!"
        await browser.sendAlertText(promptMsg)
        await browser.acceptAlert()
        const resultMsg = await JavaScriptAlertsPage.resultText.getText()
        assert.include(resultMsg, promptMsg)
    })
})


