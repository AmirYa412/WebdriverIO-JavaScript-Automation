"use strict"
import {config}    from "../wdio.conf"


export default class Page {

    async open(path) {
        await browser.url(config.baseUrl+path)
    }

    async verifyCurrentUrlContains(str) {
        await expect(browser).toHaveUrlContaining(str)
    }
}

