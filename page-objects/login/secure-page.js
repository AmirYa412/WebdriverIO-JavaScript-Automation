import Page    from "../base-page"


class SecurePage extends Page {

    constructor() {
        super()
        this.path = "/secure"
    }

    get loginFlashMsg () { return $('#flash') }
    get logoutButton() { return $('//a[@href="/logout"]') }

    async navigate () {
        await super.open(this.path)
    }

    async logout() {
        await this.logoutButton.click()
    }

    async verifyLoginFlashMsg(loginMsg) {
        await expect(this.loginFlashMsg).toBeExisting()
        await expect(this.loginFlashMsg).toHaveTextContaining(loginMsg)
    }
}

export default new SecurePage()
