import LoginPage     from "../../page-objects/login/login-page"
import SecurePage    from "../../page-objects/login/secure-page"


const loginExpectedMsg = "You logged into a secure area!"
const logoutExpectedMsg = "You logged out of the secure area!"
const blockedExpectedMsg = "You must login to view the secure area!"


describe("LoginPage", () => {

    // Assertions lib:      WebdriverIO built-in expect()

    it("should allow user login secure area", async () => {
        await LoginPage.navigate()
        await LoginPage.login("tomsmith", "SuperSecretPassword!")
        await SecurePage.verifyLoginFlashMsg(loginExpectedMsg)
    })

    it("should allow user logout", async () => {
        await LoginPage.navigate()
        await LoginPage.fillLoginForm("tomsmith", "SuperSecretPassword!")
        await LoginPage.submitLogin()
        await SecurePage.verifyLoginFlashMsg(loginExpectedMsg)
        await SecurePage.logout()
        await LoginPage.verifyFlashMsg(logoutExpectedMsg)
    })
})


describe("SecurePage", () => {
    it("should not allow guests to reach secure page", async () => {
        await SecurePage.navigate()
        await LoginPage.verifyCurrentUrlContains(LoginPage.path)
        await LoginPage.verifyFlashMsg(blockedExpectedMsg)
    })
})


