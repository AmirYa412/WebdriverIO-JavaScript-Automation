"use strict"
import LoginPage     from "../../page-objects/login/login-page"
import SecurePage    from "../../page-objects/login/secure-page"


const testData = testsData["LoginPage"]
describe("LoginPage", () => {

    // Assertions lib:      WebdriverIO built-in expect()

    it("should allow user login secure area", async () => {
        await LoginPage.navigate()
        await LoginPage.login(testData["username"], testData["password"])
        await SecurePage.verifyLoginFlashMsg(testData["loginExpectedMsg"])
    })

    it("should allow user logout", async () => {
        await LoginPage.navigate()
        await LoginPage.login(testData["username"], testData["password"])
        await SecurePage.verifyLoginFlashMsg(testData["loginExpectedMsg"])
        await SecurePage.logout()
        await LoginPage.verifyFlashMsg(testData["logoutExpectedMsg"])
    })
})


describe("SecurePage", () => {
    it("should not allow guests to reach secure page", async () => {
        await SecurePage.navigate()
        await LoginPage.verifyCurrentUrlContains(LoginPage.path)
        await LoginPage.verifyFlashMsg(testData["blockedExpectedMsg"])
    })
})


