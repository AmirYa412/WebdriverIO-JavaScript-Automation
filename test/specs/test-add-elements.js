"use strict"
import AddElementsPage    from "../../page-objects/add-elements/add-elements-page"
import assert             from "assert"


const testData = testsData["AddElementsPage"]
describe("AddElementsPage", () => {

    // Assertion lib:      Node.js Built-in assert

    it("should create a single element", async() =>{
        await AddElementsPage.navigate()
        await AddElementsPage.addElementBtn.click()
        const displayedElementsAmount = await AddElementsPage.getDisplayedElementsAmount()
        assert.strictEqual(displayedElementsAmount,1)
    })

    it("should create 2 elements", async() =>{
        await AddElementsPage.navigate()
        await AddElementsPage.addElementBtn.click()
        await AddElementsPage.addElementBtn.click()
        const displayedElementsAmount = await AddElementsPage.getDisplayedElementsAmount()
        assert.strictEqual(displayedElementsAmount,2)
    })

    it("should delete single element", async() =>{
        await AddElementsPage.navigate()
        await AddElementsPage.addElementBtn.click()
        let displayedElementsAmount = await AddElementsPage.getDisplayedElementsAmount()
        assert.strictEqual(displayedElementsAmount,1)
        await AddElementsPage.displayedElements[0].click()
        displayedElementsAmount = await AddElementsPage.getDisplayedElementsAmount()
        assert.strictEqual(displayedElementsAmount,0)
    })
})


