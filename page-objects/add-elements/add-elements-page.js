import Page    from "../base-page"


class AddElementsPage extends Page {

    constructor() {
        super()
        this.path = "/add_remove_elements/"
    }
    get addElementBtn () { return $('//button[@onclick="addElement()"]') }
    get displayedElements () { return $$('//div[@id="elements"]//button') }

    async navigate () {
        await super.open(this.path)
    }

    async getDisplayedElementsAmount() {
        return this.displayedElements.length
    }
}

export default new AddElementsPage()
