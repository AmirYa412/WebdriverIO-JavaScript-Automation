"use strict"
import HoversPage     from "../../page-objects/hovers/hovers-page"


const testData = testsData["HoversPage"]
describe("HoversPage", () => {

    // Assertions lib:      WebdriverIO built-in expect()

    it("should show expected figure info on hover", async () => {
        await HoversPage.navigate()
        await HoversPage.hoverFigure(0)
        await HoversPage.verifyDisplayedFigureData(0, "user1", "/users/1")
    })

    it("should navigate to expected profile", async () => {
        await HoversPage.navigate()
        await HoversPage.hoverFigure(2)
        await HoversPage.verifyDisplayedFigureData(2, "user3", "/users/3")
        await HoversPage.figureProfileLinks[2].click()
        await HoversPage.verifyCurrentUrlContains("/users/3")
    })
})



