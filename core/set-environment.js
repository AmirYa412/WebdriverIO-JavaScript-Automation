"use strict"
import fs from "fs"


export default class TestedEnvironment {

    constructor(envPrefix) {
        this.envPrefix = envPrefix
        this.baseUrl = this.getBaseUrl()
        this.testsData = this.getTestData()
    }

    getBaseUrl() {
        const baseUrls = {
            "dev": "https://the-internet.dev.com",
            "qa": "https://the-internet.qa.com",
            "prod": "https://the-internet.herokuapp.com"
        }
        return baseUrls[this.envPrefix]
    }

    getTestData() {
        const dataFilePath = {
            "dev": "dev-test-data.json",
            "qa": "qa-test-data.json",
            "prod": "prod-test-data.json"
        }[this.envPrefix]
        let rawData = fs.readFileSync("./test/test-data/"+dataFilePath)
        return JSON.parse(rawData)
    }
}