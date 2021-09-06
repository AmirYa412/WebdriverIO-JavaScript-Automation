import JavaScriptAlerts    from "../../page-objects/js-alerts/js-alerts-page"
import {assert}            from "chai"


const singleAlertMsg = "I am a JS Alert"
const confirmAlertMsg = "I am a JS Confirm"
const promptAlertMsg = "I am a JS prompt"


describe("JavaScriptAlertPage", () => {

    // Assertion lib:      Chai assert

    it("should show js single alert", async () => {
        await JavaScriptAlerts.navigate()
        await JavaScriptAlerts.clickAlertButton("single")
        assert.isTrue(await browser.getAlertText() === singleAlertMsg)
        await browser.acceptAlert()
        assert.isFalse(await browser.isAlertOpen())
    })

    it("should cancel js confirm alert", async () => {
        await JavaScriptAlerts.navigate()
        await JavaScriptAlerts.clickAlertButton("confirm")
        assert.isTrue(await browser.getAlertText() === confirmAlertMsg)
        await browser.dismissAlert()
        assert.isFalse(await browser.isAlertOpen())
    })

    it("should display js prompt alert input", async () => {
        await JavaScriptAlerts.navigate()
        await JavaScriptAlerts.clickAlertButton("prompt")
        assert.isTrue(await browser.getAlertText() === promptAlertMsg)
        const promptMsg = "Hello Wo1rld!"
        await browser.sendAlertText(promptMsg)
        await browser.acceptAlert()
        const resultMsg = await JavaScriptAlerts.resultText.getText()
        assert.include(resultMsg, promptMsg)
    })
})


