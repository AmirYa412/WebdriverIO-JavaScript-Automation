"use strict"
import Page    from "../base-page"


class LoginPage extends Page {

    constructor() {
        super()
        this.path = "/login"
    }
    get inputUsername() { return $('#username') }
    get inputPassword() { return $('#password') }
    get submitBtn() { return $('button[type="submit"]') }
    get logoutFlashMsg() { return $('#flash') }

    async navigate() {
        await super.open(this.path)
    }

    async login(username, password) {
        await this.fillLoginForm(username, password)
        await this.submitLogin()
    }

    async fillLoginForm(username, password) {
        await this.inputUsername.waitForDisplayed()
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
    }

    async submitLogin() {
        await this.submitBtn.waitForDisplayed()
        await this.submitBtn.click()
    }

    async verifyFlashMsg(logoutMsg) {
        await expect(this.logoutFlashMsg).toBeExisting()
        await expect(this.logoutFlashMsg).toHaveTextContaining(logoutMsg)
    }
}

export default new LoginPage()
