"use strict"
import Page    from "../base-page"


class HoversPage extends Page {

    constructor() {
        super()
        this.path = "/hovers"
    }
    get figureImages() { return $$('//div[@class="figure"]/img') }
    get figureNames() { return $$('//div[@class="figcaption"]/h5') }
    get figureProfileLinks() { return $$('//div[@class="figcaption"]/a') }

    async navigate() {
        await super.open(this.path)
    }

    async hoverFigure(i) {
        await this.figureImages[i].waitForDisplayed()
        await this.figureImages[i].moveTo(1,1)
    }

    async verifyDisplayedFigureData(i, expected_name, expected_link) {
        await this.figureNames[i].waitForDisplayed()
        await expect(this.figureNames[i]).toHaveTextContaining(expected_name)
        await expect(this.figureProfileLinks[i]).toHaveLinkContaining(expected_link)
    }
}

export default new HoversPage()
