import Page    from "../base-page"


class JavaScriptAlerts extends Page {

    constructor() {
        super()
        this.path = "/javascript_alerts"
    }
    get singleAlertBtn () { return $('//button[@onclick="jsAlert()"]') }
    get confirmAlertBtn() { return $('//button[@onclick="jsConfirm()"]') }
    get promptAlertBtn () { return $('//button[@onclick="jsPrompt()"]') }
    get resultText () { return $('#result') }

    async navigate () {
        await super.open(this.path)
    }

    async clickAlertButton(button) {
        const alertButtons = {
            "single": this.singleAlertBtn,
            "confirm": this.confirmAlertBtn,
            "prompt": this.promptAlertBtn
        }
        await alertButtons[button].click()
    }
}

export default new JavaScriptAlerts()
